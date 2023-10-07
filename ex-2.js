// Exercise #2: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];

// Start coding here
let i = -1; 
while (i < restaurants.length) {
    i++;
    newRestaurants.push("Restaurant Name: " + restaurants[i]);
    
}
newRestaurants.pop();
console.log(newRestaurants) 
