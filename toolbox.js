const toolboxLink = document.getElementById('toolbox-link');
const toolbox = document.getElementById('toolbox');

toolboxLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    toolbox.classList.toggle('hidden');
});
