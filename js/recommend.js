const ingredients = new Array();

window.onclick = function(event) {
    console.log(event.target);
    if (event.target.matches('.dropdown-item')) {
        console.log(event.target.innerHTML);
        const ingredient = event.target.innerHTML;
        event.target.parentElement.parentElement.previousElementSibling.innerHTML = ingredient;
        event.target.parentElement.parentElement.previousElementSibling.classList.toggle('selected');
        console.log(event.target.parentElement.parentElement.previousElementSibling);
    }

    if (event.target.matches('.rcp-thm')) {
        console.log(event.target.innerHTML.slice(1));
        event.target.classList.toggle('selected');
    }
}