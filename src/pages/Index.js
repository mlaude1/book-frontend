import { useState } from "react"
import { Link } from "react-router-dom"

const Index = (props) => {
    
    const [newForm, setNewForm] = useState({
        title: "",
        author: "",
        genre: "",
        coverImage: "",
        description: ""
    })

    const handleChange = (event) => {
        const newState = {...newForm}
        newState[event.target.name] = event.target.value
        setNewForm(newState)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.createBook(newForm)
        setNewForm({
            title: "",
            author: "",
            genre: "",
            coverImage: "",
            description: ""
        })
    }

    const form = (
        <form onSubmit={handleSubmit}>
            <fieldset>
            <legend><i id="add-icon" class="fa fa-plus" aria-hidden="true"></i>Add a new book!</legend>
            <div className="flex-pair">
                <label for="title">Title</label>
                <input 
                    type="text"
                    value={newForm.title}
                    name="title"
                    id="title"
                    // placeholder="Book Title"
                    onChange={handleChange}
                />
            </div>
            <div className="flex-pair">
                <label for="author">Author</label>
                <input 
                    type="text"
                    value={newForm.author}
                    name="author"
                    id="author"
                    // placeholder="Author"
                    onChange={handleChange}
                />
            </div>

            <div className="flex-pair">
                <label for="genre">Genres</label>
                <input 
                    type="text"
                    value={newForm.genre}
                    name="genre"
                    id="genre"
                    // placeholder="Genre"
                    onChange={handleChange}
                />
            </div> 

            <div className="flex-pair">
                <label for="coverImage">Book Cover</label>
                <input 
                    type="text"
                    value={newForm.coverImage}
                    name="coverImage"
                    id="coverImage"
                    // placeholder="Book Cover Image"
                    onChange={handleChange}
                />
            </div>

            <div className="flex-pair">
                <label for="description">Description</label>
                <input 
                    type="text"
                    value={newForm.description}
                    name="description"
                    id="description"
                    // placeholder="Brief Description"
                    onChange={handleChange}
                />
            </div>
            </fieldset>
            <input type="submit" value="Add Book" id="add"/>
        </form>
    )

    if (props.books) {
        return (
            <section>
                {form}
                <div className="books-container">
                    {props.books.map((book) => {
                        return (<div key={book._id} className="book">
                            <Link to={`/books/${book._id}`}>
                                <img src={book.coverImage}/>
                                <div className="book-details">
                                    <h1>{book.title}</h1>
                                    <h2>by {book.author}</h2>
                                </div>
                            </Link>
                        </div>)
                    })}
                </div>
            </section>
        )
    } else {
        return (
            <section>
                {form}
                <h1>Loading...</h1>
            </section>
        )
    }
}

export default Index