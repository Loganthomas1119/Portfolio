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

var currentItems = 0;

let myFunction = $(document).jquery(function(){
                    $("#add-to-cart").on('click',function(){
                         currentItems++
                    });
                 });
