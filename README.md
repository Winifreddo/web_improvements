
# JavaScript Website Improvements

## Contents

### Project overview

### Languages

### Project Structure

### Functionality



## Project overview

The aim of this project was to fix the following errors in the given code:

- unfunctionality in the read more buttons
- unfunctionality in the navigation/footer
- lack of form validation
- unfunctionality in the image gallery
- non-responsiveness



## Languages

- JavaScript
- HTML5
- CSS3



## Project structure

**Homepage**

- index.html
- script.js
- style.css

**Image Gallery Page:**

- gallery.html
- script.js
- gallery.css

**About page**

- about.html
- script.js
- about.css


## Functionality

### Form validation

A collection of regular expression variables have been created for testing purposes:


- Regular expression for required first name & last name format (between 1-22 characters, accepting of Diacritics (i.e.éó) and dashes for double barrel names(i.e. Emily-Mae) with no numbers allowed)

/([a-zA-Z\-]|[à-ü]|[À-Ü])([^0-9]){1,23}/

- Regular expression for email to ensure email capture is in the correct format

/^([a-zA-Z0-9\.-])+@([a-zA-Z0-9]+).([a-z]{2,10}).([a-z]{2,8})?$/

### Read more buttons 

When a uer clicks the read more button the section expands and reveals more text. Whilst simultaneously changing the read more button to read less. If the user clicks the read less button the expanded text collapses back to its original state hiding the additional text. This is achieved using jQuery and CSS. The button is selected and placed in an click function, which executes text expansion by toggling on a class called read-more. By default in CSS the read-more class is set to display none. The text method is used to change the text in the button to read less and vice versa if the user clicks the button again. The container of the text is also targeted and the height is adjusted using the CSS method. 



### image gallery

Swiper library was used for the image gallery, to add responsiveness I added breakpoints and changed the amount of images on display depending on the current viewport. 

### Navigation & footer

The navigation was re-rendered to be displayed as a hamburger bar that the user can click to view menu options, navigate to different pages and click to close again.

This was achieved with the use of jQuery. By default the navigation menu is hidden. The burger icon is selected in the script and a function is added to toggle the navigation display. If a user clicks it displays in a flex-column and if they click again it collapses back.

### Responsiveness

Media queries were used in CSS to adjust the layout to fix to different screen sizes. The breakpoints have been set to accomodate the typical screen sizes for all types of devices.

 

 
