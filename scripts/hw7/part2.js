document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const personalGreeting = document.getElementById('personalGreeting');
    const nameInput = document.getElementById('nameInput');
    const usernameInput = document.getElementById('usernameInput');
    const submitButton = document.getElementById('submitButton');

    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=').map(c => c.trim());
            if (cookieName === name) {
                return decodeURIComponent(cookieValue);
            }
        }
        return null;
    }

    function setSessionCookies(name, username) {
        // Set cookies without expiration date - they'll persist for the browser session
        document.cookie = `userName=${encodeURIComponent(name)}; path=/`;
        document.cookie = `userUsername=${encodeURIComponent(username)}; path=/`;
    }

    function showWelcomeMessage(name) {
        userForm.style.display = 'none';
        welcomeMessage.style.display = 'block';
        personalGreeting.textContent = `Welcome back, ${name}!`;
    }

    function showUserForm() {
        userForm.style.display = 'block';
        welcomeMessage.style.display = 'none';
        nameInput.value = '';
        usernameInput.value = '';
    }

    function handleSubmit(e) {
        e.preventDefault();
        const name = nameInput.value.trim();
        const username = usernameInput.value.trim();

        if (name && username) {
            setSessionCookies(name, username);
            showWelcomeMessage(name);
        }
    }

    function init() {
        const savedName = getCookie('userName');
        const savedUsername = getCookie('userUsername');

        if (savedName && savedUsername) {
            showWelcomeMessage(savedName);
        } else {
            showUserForm();
        }
    }

    // Event Listeners
    submitButton.addEventListener('click', handleSubmit);

    // Initialize the page
    init();
});