# Yellow Book Road
#### By Sarah Carter, Bijan Saniee, and Matthew Laude

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description
This project is a book app that allows users to save books they would like to read. The app will have full CRUD functionality and allow users to add, edit, and delete new books. They will also be able to see details about the books such as descriptions, genres, and the cover. 

## Components
- Header 
- Main
- Index
- Show
- ImageSlider
- SliderData
- StarRating

## React Component Architecture
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

## React Router Route Table
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
The search input on the index page allows the user to search for books based on the title or author. The filter is case insensitive so books can be filtered out whether using upper or lowercase letters. The way this feature works is by using state to store the value typed into the search filter. That value is then used in a `filter()` method which sorts through all of the books returned from the API call to see if their author or title contains the search value. If they do, that data is mapped over and those books are displayed.

**React Fade**
As the user scrolls down the book list, the books have a fade-in effect. This was created using the [React Awesome Reveal library](https://github.com/morellodev/react-awesome-reveal). In order to create the effect, the `Fade` component was imported from the libaray and wrapped around the list of books like a regular React component. The effect only happens once so the list stays revealed on the page after scrolling through. 


## Challenges
- **carousel is appearing on both the index and show pages** \
Upon creating the carousel component, it was appearing in both the Index and Show pages. This was because the component was placed in the `App.js`, in between the `Header` and `Main` components. To fix this, all we had to do was import `ImageSlider` and `SliderData` into the Index page, then place the component where we wanted it. 

- **star rating data is not being saved** \
There was an issue with the rating system where the stars were appearing just fine and could be clicked on, but the data was not being saved. In order to fix this, we first had to go to the backend and add a starRating property with a number value to the BookSchema. Next, we placed the star component inside the Update Form and passed it the `handleChange` function as props. Lastly, inside the `StarRating.js`, we also had to put the `handleChange` function on the input as well as change the `name` attribute to "starRating" in order for the data to go to the right place. 

- **scroll effect happening too many times** \
When adding in the scroll effect, there was initially a bug where the books would continue to fade in while scrolling up and down. This was a bit disorienting as a user, as it made the book list not feel solid on the page. After reading the documentation, I discovered a `triggerOnce` attribute that ensures the animation only happens on the first scroll reveal. This fixed the problem and made the list feel more sturdy on the page.