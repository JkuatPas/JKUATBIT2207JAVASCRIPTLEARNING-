document.addEventListener('DOMContentLoaded', (event) => {
    const greetingElement = document.getElementById('greeting');

    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greetingMessage;

        if (currentHour < 12) {
            greetingMessage = 'Good Morning!';
        } else if (currentHour < 18) {
            greetingMessage = 'Good Afternoon!';
        } else {
            greetingMessage = 'Good Evening!';
        }

        greetingElement.textContent = greetingMessage;
    }
});