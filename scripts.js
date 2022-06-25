$(function() {
    $("#shopnow").on('click', function(){
        window.open("shopnow.html")
    });
}); 

$(function() {
    $("#loginButton").on('click', function(){
        window.open("shopnow.html")
    });
}); 

let items_array = [
    { "name": "carrots", "id": 1, count: 1 },
    { "name": "spinach", "id": 2, count: 1 },
    { "name": "cookies", "id": 3, count: 1 },
    { "name": "lettuce", "id": 4, count: 1 },
    { "name": "avocado", "id": 5, count: 1 }
];

let cart = [];