# OnlineBookStore
COMP5347 Assignment 1 repository.
## Main Requirements
The following functionalities must be implemented in your Web page: 
- The main page should display the main information of each book including a thumbnail picture, title, author, year, star rating, price, publisher and category (see the enclosed Figures under Resources as an example). The star rating position can be located in either in line with the title text or in a separate column of the page (e.g. "Ratings" column after the "Title" column). 
- The page must load the book items list from the provided json file (inside the start file set, see Resources section). Details on how to read the json files will be described later in this assignment description. Copying the content of json file into your javascript file is not allowed. 
- End users can search books based on their title. The rows that match the search term will be highlighted with a coloured background of your choice. This search feature does not affect the list of shown items, only changing the background colour of the rows that match the search terms (can be word(s) or letter(s)). 
- End users should be able to filter books through their categories (only books with the selected category are shown in the list). The list of category works like a drop-down menu and should cover an extra category that is currently not in the bookstore for boundary test use. Meanwhile, end users should always have the option to return to the default status (display all books no matter which category they belong to). 
- The Search and Filter functions should work together and combine the result of each other. 
- End users should be able to select books and add them to the “Shopping Cart” through check boxes and a button “Add to cart”.  Users can only select one book at a time through checkbox. A quantity input box will be prompted when the users select a book item and click "Add to cart" button. The page can either show a popup or a text-box asking about the quantity of the selected item. 
- The book selection must be cleared after the book(s) is added to cart. 
- End users can clear the shopping cart through the “Reset the cart” button. Users should be prompted with a message box to confirm their desired action (“Reset the cart” or “Cancel”). 
- The “Shopping Cart” should always show the correct number of books in the cart based on the end user actions (note: based on the total quantity of added books). 
- The page provides a checkbox (at the top of the page) to enable "Dark Mode" where the themes of the page are changed to use grey colours or other dark colours. This dark mode will affect both the webpage background colour, texts, highlight colour and any other relevant colours. 
## Design and Implementation Requirements
- The online book store data and required thumb images are provided in the enclosed start file set. 
- The layout does not have to be the same as the example in Figure 1. For instance, you may modify the given CSS file to have a slightly different colour scheme, border and text styles. 
- You must consider the behaviour of boundary cases and design suitable UI changes to notify/alert the end users of inappropriate inputs or outputs. Sample boundary cases include, but are not restricted to the followings: 
  - Search term does not appear in any title 
  - Users select the category that does not contain any book 
- Make sure that your HTML, CSS rules and JavaScript code are kept in separate files. Inline style or JavaScript code is not accepted. 
- Make sure that your HTML and CSS files are “clean” and easy to maintain. They should not contain any unnecessary automatically generated content such as scattered <span> element with pieces of styles. 
- Use of jQuery or other JavaScript libraries is not allowed in this assignment. Use of Bootstrap or other CSS framework/library is not allowed either.
