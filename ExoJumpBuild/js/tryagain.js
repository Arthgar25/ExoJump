document.getElementById('try-again').addEventListener('click', function() {
    console.log('Try Again clicked');
    // Aquí puedes recargar la página o reiniciar el juego
    window.location.href = 'game.html'; // Cambia la URL a la página principal
});

document.getElementById('back-to-menu').addEventListener('click', function() {
    console.log('Back to Main Menu clicked');
    // Aquí puedes redirigir a la página principal
    window.location.href = 'index.html'; // Cambia la URL a la página principal
});
