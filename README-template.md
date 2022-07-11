# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./design/desktop-design.png)
![](./design/desktop-thank-you-state.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Styled Components](https://fonts.google.com/) - For styles


### What I learned

```js
// I'm Proud Of This Function
function getNumber(clicked_id){
    let my_id = document.getElementById(clicked_id);
    let num = my_id.value;
    let nbrs = document.getElementsByClassName("btn__nbr");
    sessionStorage.setItem("myVal", num);
    my_id.classList.add("is_active");
    for(let i=0; i<nbrs.length; i++){
        if(nbrs[i].id != my_id.id && nbrs[i].className == "btn__nbr is_active"){
            nbrs[i].classList.remove("is_active");
        }
    }
}
```

## Author

- Frontend Mentor - [@Hatim-Boughaba](https://www.frontendmentor.io/profile/Hatim-Boughaba)
