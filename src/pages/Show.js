import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

const Show = (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const books = props.books;

    // state for edit form 
    const [editForm, setEditForm] = useState({})
    // useEffect to set state for existing book when data is available
    useEffect(() => {
        if (props.books) {
            // grab the specific book
            const book = books.find((b) => b._id === id)
            setEditForm(book)
        }
    }, [props.books])


    if (props.books) {
        // grab the specific book
        const book = books.find((b) => b._id === id)

        // handleChange function for form 
        const handleChange = (event) => {
            const newState = {...editForm}
            newState[event.target.name] = event.target.value
            setEditForm(newState)
        }

        // handleSubmit function for form 
        const handleSubmit = (event) => {
            event.preventDefault()
            props.updateBook(editForm, book._id)
            navigate("/")
        }

        // removes a book
        const removeBook = () => {
            props.deleteBook(book._id)
            navigate("/")
        }

        const form = (
            <form onSubmit={handleSubmit}>
                <fieldset>
                <legend>Edit book details:</legend>
                <input 
                    type="text"
                    value={editForm.title}
                    name="title"
                    placeholder="Book Title"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.author}
                    name="author"
                    placeholder="Author"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.genre}
                    name="genre"
                    placeholder="Genre"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.coverImage}
                    name="coverImage"
                    placeholder="Book Cover Image"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    value={editForm.description}
                    name="description"
                    placeholder="Brief Description"
                    onChange={handleChange}
                />
                </fieldset>
                
                <input type="submit" value="Update Book" />
            </form>
        )

        return (
            <div className="book-show">
                <h1>{book.title}</h1>
                <h2>{book.author}</h2>
                <img src={book.coverImage} alt={book.title}/>
                <h4>{book.description}</h4>
                <p>{book.genre}</p>
                {form}
                <button id="delete" onClick={removeBook}><i id="trash-can-icon" class="fa fa-trash"></i> Delete Book</button>
            </div>
        )
    }
    else {
        return <h1>No Book Found</h1>
    }
}

export default Show