document.addEventListener('DOMContentLoaded', () => {
    const styleTarget = document.getElementById('styleTarget');
    const bgColorInputs = document.querySelectorAll('input[name="bgColor"]');
    const textStyleInputs = document.querySelectorAll('input[name="textStyle"]');
    const fontSizeSelect = document.getElementById('fontSize');

    function updateStyles() {
        // Reset styles first
        styleTarget.style.backgroundColor = '';
        styleTarget.style.textDecoration = 'none';
        styleTarget.style.fontWeight = 'normal';
        styleTarget.style.fontStyle = 'normal';

        // Background Color
        bgColorInputs.forEach(radio => {
            if (radio.checked) {
                styleTarget.style.backgroundColor = radio.value;
            }
        });

        // Text Style
        textStyleInputs.forEach(checkbox => {
            if (checkbox.checked) {
                switch (checkbox.value) {
                    case 'underline':
                        styleTarget.style.textDecoration = 'underline';
                        break;
                    case 'bold':
                        styleTarget.style.fontWeight = 'bold';
                        break;
                    case 'italic':
                        styleTarget.style.fontStyle = 'italic';
                        break;
                }
            }
        });

        // Font Size
        styleTarget.style.fontSize = fontSizeSelect.value;
    }

    // Add event listeners
    bgColorInputs.forEach(radio => {
        radio.addEventListener('change', updateStyles);
    });

    textStyleInputs.forEach(checkbox => {
        checkbox.addEventListener('change', updateStyles);
    });

    fontSizeSelect.addEventListener('change', updateStyles);
});