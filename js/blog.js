
/* Add text content to the blog page */

const input = document.querySelector('input');
const button = document.querySelector('button');

/*
button.addEventListener('click', () => {
  h2.innerHTML = input.value; //input.value + ':';
}); */


button.addEventListener('click', () => {
	console.log("Hello");
    let p = document.createElement('p');
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

