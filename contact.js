

    
const form = document.getElementById('contact-form');
    
form.addEventListener('submit', function(event) {
event.preventDefault(); 
var name = document.getElementById('name');
var email = document.getElementById('email');
var message = document.getElementById('message');

        
        if (!name || !email || !message) {
            alert('Please fill out all fields.');
         
        }
        else{
        alert("Your details are submitted")

        window.location.href = 'index.html';
        }
        
        form.reset();
    });

