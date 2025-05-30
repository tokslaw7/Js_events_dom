//When the dom is fully loaded, this will be fired
document.addEventListener("DOMContentLoaded", function(){

    //Get the element with an id of onload
    let onLoadEl = document.getElementById("onload");
   
    //Add some HTML within the element we grabbed
    onLoadEl.innerHTML = "<h1> I loaded cause the DOM was fully loaded</h1>"
   
   })

//Get the element that will show our key code
let directionEl = document.getElementById("direction");

// Can be changed with Key press or key up depending on what you might need
document.addEventListener("keydown", function(e) {

 // When a key is pressed, the element with the id of direction will show the message
 directionEl.innerText = `The Key you pressed is ${e.code}`;

});

let clickMe = document.getElementById("clickMe");
document.addEventListener("click", function(e){
    clickMe.innerText = "You Clicked Me";
})

//Background Random Color Btn functionality
let randomColorBtn = document.getElementById("randomColorBtn");

    randomColorBtn.addEventListener("click", function(e){

            document.body.style.backgroundColor = changeColor();
        });

    function changeColor(){
        const changedcolors = ["red", "pink", "cyan", "yellow", "lightgreen"];
        return changedcolors [Math.floor(Math.random()*changedcolors.length)];
    }

//classList 
function changeBtnStyle() {
    const btn = document.querySelector(".cool-btn")
    btn.classList.toggle("glow"); // Toggles glow effect
    }

//DarkMode 
let btnMode = document.querySelector("#darkMode");

    btnMode.addEventListener("click", function(e){
    document.body.classList.toggle("lightMode");

if (document.body.classList.contains("lightMode")){
    btnMode.innerText ="Light Mode";
}else{
    btnMode.innerText = "Dark Mode";
}

});

// let btnMode = document.querySelector("button")
// let isDarkMode = false

// btnMode.addEventListener("click", ()=>{
//   if(isDarkMode){
//     document.body.classList.remove("dark")
//     button.textContent="dark mode"
//     isDarkMode = false
//   }
//   else{
//     document.body.classList.add("dark")
//     button.textContent = "light mode"
//     isDarkMode = true
//   }
// })

