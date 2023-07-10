const bringToFrontButton = document.getElementById('top-button');
        const sendToBackButton = document.getElementById('bottom-button');

        bringToFrontButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        sendToBackButton.addEventListener('click', function() {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        });