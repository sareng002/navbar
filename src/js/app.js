import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

//kode mode dark mod
let theme = 'light';
// localStorage
// sessionStorage
function toggleDarkTime() {
    // jika time adalah dark
    if (localStorage.getItem('theme') === 'dark') {
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove("dark");
    } else {
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
    }
}
document
    .getElementById('btndarkmode')
    .addEventListener('click', toggleDarkTime);
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
}

// end kode dark amod