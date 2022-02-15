// window.alert("hello that it works")

let foods = [
    {
        "name": "pizza",
        "calories": 250
    },
    {
        "name": "coffee",
        "calories": 50
    },
    {
        "name": "salad",
        "calories": 150
    },
    {
        "name": "cookie",
        "calories": 200
    }
    
]

//how much total calores did jonathon eat?
let totalCalories = 0


//repitive code...
for (let index = 0; index < foods.length; index++) {
    const element = foods[index];
    //print that object
    console.log("eat this food", element)
    
}

console.log(foods)