# Book Project
#### By Sarah Carter, Bijan Saniee, and Matthew Laude

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## DESCRIPTION
This project is a book app that allows users to save books they would like to read. The app will have full CRUD functionality and allow users to add, edit, and delete new books. They will also be able to see details about the books such as descriptions, genres, and the cover. 

## COMPONENTS
- Header 
- Main
- Index
- Show

## REACT COMPONENT ARCHITECTURE
```
-> App
  -> Header
  -> Main |state: books|
    -> Routes
      -> Route |path: "/"|
        -> Index |Props: books, createBook|
      -> Route |path="/books/:id|
        -> Show |Props: books, updateBook, deleteBook|
```

## REACT ROUTER ROUTE TABLE
| URL | Component | Method | Action |
|-----|-----------|--------|--------|
| / | Index | get | getting all books (index)||
| / | Index | post | posting a new book (create) |
| /books/:id | Show | put | updating a book (update) |
| /books/:id | Show | delete | delete a book (destroy) |

## User Stories
As a user, I can see a list of all my books when I visit the page. \
As a user, I can click on one of my books and have it take me to a show page that displays details about the book. \
As a user, I can add a new book and see that it immediately loads on the page so that I know I successfully added a book. \
As a user, I can delete a book so I can keep my list relevant. \
As a user, I can update a book in case I made a typo.

## Technologies
REACT, react-router-dom, Sass