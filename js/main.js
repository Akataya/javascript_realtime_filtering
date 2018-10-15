$(document).ready(function(){

var categoryList = [];

var categories = document.getElementsByClassName('category');
    for (var i = 0; i < categories.length; i++){
        var categoryName = categories[i].innerHTML;
        categoryList.push(categoryName);
    }
        
var searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('keyup', function(event){
        var text = searchBar.value;
        for (var i = 0; i < categories.length; i++){
            //if the entered text doesn't match any part of the items then hide the list, otherwise - show it
                if (categoryList[i].indexOf(text) < 0){
                    categories[i].style.display = 'none';
                } else {
                    categories[i].style.display = 'block';
                }
            }
    })
});
