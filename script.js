// Year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Random facts page button
const randomFactsBtn = document.getElementById('random-facts');

if (randomFactsBtn) {
    // Add all existing fact pages here
    const factPages = [
        'animal-facts-1.html',
        'human-facts-1.html',
        'space-facts-1.html',
        'weird-facts-1.html'
    ];

    randomFactsBtn.addEventListener('click', () => {
        const idx = Math.floor(Math.random() * factPages.length);
        window.location.href = factPages[idx];
    });
}
