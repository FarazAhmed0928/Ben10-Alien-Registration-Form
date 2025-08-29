document.getElementById('alienForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const splash = document.getElementById('splash');
    splash.classList.remove('splash-hidden');
    splash.classList.add('splash-active');

    setTimeout(() => {
        splash.classList.remove('splash-active');
        splash.classList.add('splash-hidden');
        alert('Alien registered successfully!');
        e.target.reset();
    }, 1200);
});
