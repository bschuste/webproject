const button = document.querySelector('button.newsletter');

button.addEventListener('click', () => {
    //var params = "email=" + encodeURIComponent(email) + "&newsletters=" + newsletter + "&fmt=" + fmt + "&source_url=" + encodeURIComponent(doc.location.href);
	const newsletterInput = document.querySelector('input.newsletter');
	const newsletterAction = document.querySelector('form.action');
	console.log(newsletterAction);
	var params =  "email=" + newsletterInput.value; 
    alert('Subscribing ' + newsletterInput.value);
    var xhr = new XMLHttpRequest;
    /* Once the server answers */
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) { //we got the response back
    	    //var response = xhr.responseText;
            if (xhr.status === 200) {
        	  //(OK)
        	} else if (xhr.status === 404) {
          	    alert(xhr.statusText);
        	  //file not found
        	} else {
                document.getElementById('newsletter-ajax').style.display = 'block';
                document.getElementById('newsletter-form').style.display = 'none';
        	}
        }
    };
    var file = 'newsletterposts'; //This is coming from action field of form
//    xhr.open('POST', file, true);
//    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//    xhr.send(params);
    newsletterInput.value = '';
    document.getElementById('newsletter-ajax').style.display = 'block';
//    document.getElementById('newsletter-form').style.display = 'none';
});

/*

xhttp.open("POST", "ajax_test.asp", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");
*/
