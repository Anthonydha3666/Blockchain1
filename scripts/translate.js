// Este script manejará el cambio de idioma y cargará las traducciones.
const languageSwitcher = document.getElementById('language-switch');
let currentLanguage = localStorage.getItem('language') || 'en';
function loadLanguage(lang) {
    fetch(`${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                el.textContent = translations[key];
            });
            // Actualiza la imagen de la bandera
            languageSwitcher.src = `./img/${lang === 'en' ? 'spanish' :
                'english'}-flag.png`;


                // codigo adicional agregado para traducir imput 
              document.getElementById("nombre").placeholder = lang === 'en' ? 'Name' :
                'Nombre';
                document.getElementById("apellido").placeholder = lang === 'en' ? 'Last name' :
                'Apellido';
                document.getElementById("email").placeholder = lang === 'en' ? 'Email' :
                'Correo electronico';
                document.getElementById("telefono").placeholder = lang === 'en' ? 'Phone' :
                'Telefono';

                document.getElementById("boton-enviar").innerHTML = lang === 'en' ? 'Send' :
                'Enviar';
                 
            // Actualizar el atributo lang en la etiqueta html
            document.documentElement.lang = lang;
            // Guardar la selección de idioma
            localStorage.setItem('language', lang);
        })
        .catch(() => {
            console.error('Error loading language file');
        });
}
// Iniciar con el idioma guardado o por defecto
loadLanguage(currentLanguage);
// Evento de cambio de idioma
languageSwitcher.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    loadLanguage(currentLanguage);
});


