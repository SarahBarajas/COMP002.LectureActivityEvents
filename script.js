//add an event listener to the button that triggers once
document.getElementById('alertButton').addEventListener('click', function handleClick(){
    //display an alert message when button is clicked 
    alert( 'Button was clicked');
   // remove the event listener after the first click
   document.getElementById('alertButton').removeEventListener('click', handleClick);
});
//add an event listener to the link taht prevents navigation
document.getElementById('myLink').addEventListener('click', function(event) {
    // prevent the default action
    event.preventDefauld();
    //display and alert message 
    alert('No distractions! Im coding!');