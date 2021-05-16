// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (event.target.matches('.dropdown-item')) {
        console.log(event.target);
        const ingredient = event.target.innerHTML;
        console.log(event.target.closest('.btn'));
        event.target.parentElement.parentElement.previousElementSibling.innerHTML = ingredient;
    }
}