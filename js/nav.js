/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function showMyMenu() {
    var menu = document.getElementById("list-nav");
    for (var i=0; i<menu.children.length; i++) {
        if (menu.children[i].className === "dropdown-item") {
        	menu.children[i].className += " responsive";
        } else {
        	menu.children[i].className = "dropdown-item";
        }
    	console.log(menu.children[i].tagName);
    }
}

function lala() {
    var menu = document.getElementById("list-nav");
    var menuItems = document.getElementsByClassName("dropdown-item");
    for (var i=0; i<menu.children.length; i++) {
    	console.log(menu.children[i].tagName);
    }
    if (menu.className === "dropdown-content") {
    	menu.className += " responsive";
    } else {
    	menu.className = "dropdown-content";
    }
}