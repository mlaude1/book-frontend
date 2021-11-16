import { useState, useEffect } from "react"
import {Routes, Route} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

const Main = (props) => {
    
    const [books, setBooks] = useState(null)
    const URL = "https://bsm-book-backend.herokuapp.com/books/"
    
    const getBooks = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBooks(data)
    }

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

    useEffect(() => getBooks(), [])

    return (
        <main>
            <Routes>
                <Route path="/" element={
                <Index books={books} createBook={createBook}/>
                }/>
                <Route path="/books/:id" element={<Show />}/>
            </Routes>
        </main>
    )
}

export default Main