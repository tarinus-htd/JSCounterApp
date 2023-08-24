document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    const countElement = document.getElementById('count');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    let count = 0;

    function updateCounter() {
        counterElement.textContent = count;
        countElement.textContent = count;
    }

    incrementButton.addEventListener('click', () => {
        count++;
        updateCounter();
    });

    decrementButton.addEventListener('click', () => {
        // if (count > 0) {
            count--;
            updateCounter();
        // }
    });
});