document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase(); // Convierte la tecla a mayúscula para que coincida con data-key
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    
    if (keyElement) {
      keyElement.classList.add('active'); // Añade la clase active para resaltar la tecla
    }
  });
  
  document.addEventListener('keyup', (event) => {
    const key = event.key.toUpperCase();
    const keyElement = document.querySelector(`.key[data-key="${key}"]`);
    
    if (keyElement) {
      keyElement.classList.remove('active'); // Quita la clase active cuando se suelta la tecla
    }
  });