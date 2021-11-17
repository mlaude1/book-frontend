import { useState, useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

const Main = (props) => {
    
    const [books, setBooks] = useState(null)
    const URL = "https://bsm-book-backend.herokuapp.com/books/"
    
    // Calls backend API to get book list
    const getBooks = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBooks(data)
    }

    // Adds a new book 
    const createBook = async (newBook) => {
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        })
        getBooks()
    }

    // Updates a book
    const updateBook = async (book, id) => {
        await fetch(URL + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        })
        getBooks()
    }

    // Deletes a book 
    const deleteBook = async (id) => {
        await fetch(URL + id, {
            method: "delete"
        })
        getBooks()
    }

    useEffect(() => getBooks(), [])

    return (
        <main>
            <Routes>
                <Route path="/" element={
                <Index books={books} createBook={createBook}/>
                }/>
                <Route path="/books/:id" element={<Show books={books} updateBook={updateBook} deleteBook={deleteBook}/>}/>
            </Routes>
        </main>
    )
}

export default Main