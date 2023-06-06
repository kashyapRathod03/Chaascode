const button = document.getElementById('contact');
function handleClick() {
    console.log('Button clicked!');
    location.href = "/Company/Contact_us/Contact_us.html";
}
button.onclick = handleClick;


const button2 = document.getElementById('contact2');
button2.onclick = handleClick;


const button3 = document.getElementById('contact3');
button3.onclick = handleClick;