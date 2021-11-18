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
            <legend>Add a new book!</legend>
                <label>Title</label>
                <input 
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder="Frankenstein"
                    onChange={handleChange}
                />
                <label>Author</label>
                <input 
                    type="text"
                    value={newForm.author}
                    name="author"
                    placeholder="Mary Shelley"
                    onChange={handleChange}
                />
                <label>Genres</label>
                <input 
                    type="text"
                    value={newForm.genre}
                    name="genre"
                    placeholder="Horror, Science Fiction"
                    onChange={handleChange}
                />
                <label>Book Cover</label>
                <input 
                    type="text"
                    value={newForm.coverImage}
                    name="coverImage"
                    placeholder="Book Cover Image"
                    onChange={handleChange}
                />
                <label>Description</label>
                <input 
                    type="text"
                    value={newForm.description}
                    name="description"
                    placeholder="Brief Description"
                    onChange={handleChange}
                />
            </fieldset>
            <input type="submit" value="Add Book" />
        </form>
    )

    if (props.books) {
        return (
            <section>
                {form}
                <div className="books-container">
                    {props.books.map((book) => {
                        return (<div key={book._id} className = "book">
                            <Link to={`/books/${book._id}`}>
                                <img src={book.coverImage}/>
                                <h1>{book.title}</h1>
                                <h2>by {book.author}</h2>
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