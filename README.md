# Js_events_dom
# Intro-to-DOM-Events
> DOMContentLoaded (Demonstration)

> KeyDown (Demonstration)

> Background Random Color (Exercise)

> classList Toggle (Demonstration)

> Dark Mode (Exercise)

> To do (Exercise)

## Click (Exercise)
1. Use getElementById() to retrieve the button with the id of “clickMe”
2. Add an event listener with the event being “click”
3. In the function, change the inner text of the button element that’s being referenced to be “You clicked me!”


## Background Random Color (Exercise)
1. Add a button element in the index.html file.
2. The inner text can be filled with placeholder text like “lorem ipsum”
3. The id should be “randomColorBtn”
4. Create a click handler function to change the background color of the HTML page to a random color in the script.js file
     - Use Math.random() to pick a random one 
     - Some additional research may be necessary to figure out the exact expression needed to get the random value working.
5. Add an event handler to the button that will trigger when the button is clicked.



## classList Toggle (Demonstration)

1. Add a Button element
2. Add changeBtnStyle Function
3. use classLidt.toggle() method
```
function changeBtnStyle() {
 const btn = document.querySelector(".cool-btn")
 btn.classList.toggle("glow"); // Toggles glow effect
}
```

## Dark Mode (Exercise)
1. Create a button with the text  `dark mode`
2. When the button is pressed, the background of the page should change to a dark color and the text should be a light color 
3. The text of the button should should switch to say “light mode”
4. You should be able to toggle between light and dark modes 
5. code should use the classList property and its methods.


## To Do DOM (Exercise)
> Setup
1. In the same folder, create 3 new files 
- todo.html
- styles.css
- todo.js

### To do 
* Create List Item Function (Group or Individual)
* Create Add Task function
* Create Toggle Complete Function - Bonus (Not Required)


## Additional Documentation and Acknowledgments
- Project folder on server:
- Link to project on production [title] (https://tokslaw.com)




