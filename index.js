document.addEventListener('DOMContentLoaded', () => {
  // 1. Seleccionar los elementos del DOM
  const menuButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Verificamos que los elementos existan
  if (menuButton && mobileMenu) {
    // Seleccionamos los dos íconos dentro del botón
    const openIcon = menuButton.querySelector('svg:nth-of-type(1)');
    const closeIcon = menuButton.querySelector('svg:nth-of-type(2)');

    // 2. Crear la función que se ejecutará al hacer clic
    const toggleMenu = () => {
      // Alternar la clase 'hidden' en el menú para mostrarlo/ocultarlo
      mobileMenu.classList.toggle('hidden');

      // Alternar la visibilidad de los íconos
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');

      // Actualizar el estado de accesibilidad 'aria-expanded'
      const isExpanded = !mobileMenu.classList.contains('hidden');
      menuButton.setAttribute('aria-expanded', String(isExpanded));
    };

    // 3. Añadir el "escuchador de eventos" al botón
    menuButton.addEventListener('click', toggleMenu);
  }
});