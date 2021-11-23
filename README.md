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
- ImageSlider
- SliderData
- StarRating

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
REACT, react-router-dom, Sass, react-icons, react-awesome-reveal

## Bonus Features
**Carousel** \
A functional carousel is displayed at the top of the Index page. There are buttons on both sides of the carousel that allow the user to cycle through the images. Clicking the button on the right goes to the next image, while clicking the left button goes to the previous image. The user is able to cycle through the images infinitely. Credit for the Carousel goes to [Brian Design](https://www.youtube.com/watch?v=l1MYfu5YWHc&t=523s). How it works is there are two main components: `ImageSlider.js` and `SliderData.js`. The images are stored in `SliderData.js`, which are then imported into the `ImageSlider.js`. The Carousel then utilizes State to display one image at a time, depending on the current index. \

**Star Rating System** \
A star rating system allows the user to rank the quality of a book out of a total of five stars. This rating system is found in the Update Form of the Show page. It is designed so that the user can hover their cursor over the desired amount of stars  and simply click. Upon updating the book, the star rating will be displayed in the description. Credit for the Star Rating component goes to [Eric Murphy](https://www.youtube.com/watch?v=eDw46GYAIDQ&t=373s). The StarRating component is essentially an array of icons wrapped inside of a radio input. State is used to dynamically change the color of the star icons while hovering over them as well as setting a number value upon clicking a star. 

**Search**


**React Fade**


## Challenges
- **carousel is appearing on both the index and show pages** \
Upon creating the carousel component, it was appearing in both the Index and Show pages. This was because the component was placed in the `App.js`, in between the `Header` and `Main` components. To fix this, all we had to do was import `ImageSlider` and `SliderData` into the Index page, then place the component where we wanted it. 

- **star rating data is not being saved** \
There was an issue with the rating system where the stars were appearing just fine and could be clicked on, but the data was not being saved. In order to fix this, we first had to go to the backend and add a starRating property with a number value to the BookSchema. Next, we placed the star component inside the Update Form and passed it the `handleChange` function as props. Lastly, inside the `StarRating.js`, we also had to put the `handleChange` function on the input as well as change the `name` attribute to "starRating" in order for the data to go to the right place. 
