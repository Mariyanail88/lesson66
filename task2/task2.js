const elements = document.querySelectorAll('.element');
elements.forEach((element, index) => {
    if (index < 3) {
        element.style.color = 'red';
    } else {
        element.style.color = 'green';
    }
});