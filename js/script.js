// Alternar biografía español / inglés
function toggleLanguage() {
    const esText = document.getElementById('bio-text');
    const enText = document.getElementById('bio-text-en');

    if (esText.classList.contains('hidden')) {
        esText.classList.remove('hidden');
        enText.classList.add('hidden');
    } else {
        esText.classList.add('hidden');
        enText.classList.remove('hidden');
    }
}
