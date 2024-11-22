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
                return cookieValue;
            }
        }
        return null;
    }

    function setUserCookies(name, username) {
        // Set cookies without expiration date - they'll last until browser closes
        document.cookie = `userName=${name}; path=/`;
        document.cookie = `userUsername=${username}; path=/`;
    }

    function showWelcomeMessage(name) {
        userForm.style.display = 'none';
        welcomeMessage.style.display = 'block';
        personalGreeting.textContent = `Welcome back, ${name}!`;
    }

    function showUserForm() {
        userForm.style.display = 'block';
        welcomeMessage.style.display = 'none';
    }

    function init() {
        const savedName = getCookie('userName');
        const savedUsername = getCookie('userUsername');

        if (savedName && savedUsername) {
            // User has active cookies - show welcome message
            showWelcomeMessage(savedName);
        } else {
            // First time user - show form
            showUserForm();
            
            submitButton.addEventListener('click', (e) => {
                e.preventDefault();
                const name = nameInput.value.trim();
                const username = usernameInput.value.trim();

                if (name && username) {
                    setUserCookies(name, username);
                    showWelcomeMessage(name);
                }
            });
        }
    }

    init();
});