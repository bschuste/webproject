/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function showMyMenu() {
    var menu = document.getElementById("list-nav");
//    if (menu.className === "dropdown-content") {
    	/* display items with this class */
//  	    menu.className += " responsive";
//    } else {
    	/* hide all items */
//  	    menu.className = "dropdown-content";
//    }
    
    for (var i=0; i<menu.children.length; i++) {
    	var name = "dropdown-item" + (i+1);
    	console.log(name);
        if (menu.children[i].className === name) {
        	menu.children[i].className += " responsive";
        } else {
        	//menu.children[i].className = name;
        }
    }
    var icon = document.getElementsByClassName("icon")[0];
    icon.style.color = 'black';
    icon.style.font = 'bold 1.2rem';
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


const input = document.querySelector('input');
const button = document.querySelector('button');

/*
button.addEventListener('click', () => {
  h2.innerHTML = input.value; //input.value + ':';
}); */


button.addEventListener('click', () => {
	console.log("Hello");
    let l = document.createElement('li');
    let b = document.createElement('blockquote');
    let h2 = document.getElementsByTagName('h2')[0];
	p.textContent = input.value;
    p.style.display = 'block';
    p.style.font = '0.5rem';
	b.textContent = input.value;
	b.style.width = '100%';
    h2.appendChild(b);
    input.value = '';
});

/*
document.addEventListener(animationEnd, dispatchEvent, false);
 */
//check the animation name and operate accordingly
function dispatchEvent(event) {
    if (event.animationName === 'min-width-700px') {
       document.body.innerHTML = 'Min width is 700px';
    } else if (event.animationName === 'min-width-1000px') {
       document.body.innerHTML = 'Min width is 1000px';
    }
}
