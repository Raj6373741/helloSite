document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');
    const luckElements = document.getElementsByClassName('luck');

    h1.addEventListener('mouseover', () => {
        Array.from(luckElements).forEach(element => {
            element.style.visibility = 'visible';
            element.style.opacity = '1';
        });
    });

    h1.addEventListener('mouseout', () => {
        Array.from(luckElements).forEach(element => {
            element.style.visibility = 'hidden';
            element.style.opacity = '0';
        });
    });
});
