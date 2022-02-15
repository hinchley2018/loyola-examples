let cart = []


//get refreecne to button
let addToCartButtons = document.querySelector("button")

//ul for cart items
let cartUl = document.querySelector("#cart")

//register the listene
    
//register my buttons
button.addEventListener("click", function (event) {
    //add item to our cart...
    //find out the item from the event target
    console.log("I clicked this button", event.target)
    
    //add the item 
    cart.push(event.target.id)
    
    //display the cart
    let cartItem = document.createElement("li")
    cartItem.textContent = event.target.id
    cartUl.append(cartItem)
})

