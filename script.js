// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Function to determine the greeting based on the time of day
    function getGreetingMessage() {
        const now = new Date();
        const hours = now.getHours();
        
        if (hours < 12) {
            return 'Good Morning!';
        } else if (hours < 18) {
            return 'Good Afternoon!';
        } else {
            return 'Good Evening!';
        }
    }

    // Apply the greeting message to the appropriate element
    const greetingElement = document.querySelector('main h1');
    if (greetingElement) {
        greetingElement.textContent = getGreetingMessage();
    }
});
