const countrySelect = document.getElementById('countrySelect');
const flagDisplay = document.getElementById('flagDisplay');

const flags = {
    palestine: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg",
    jordan: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg",
    iraq: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg",
    uae: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg"
};

countrySelect.addEventListener('change', () => {
    const country = countrySelect.value;

    if (localStorage.getItem(country)) {
        const flagSrc = localStorage.getItem(country);
        displayFlag(flagSrc);
    } else {
        const flagSrc = flags[country];
        localStorage.setItem(country, flagSrc);
        displayFlag(flagSrc);
    }
});

function displayFlag(src) {
    flagDisplay.innerHTML = `<img src="${src}" alt="Country Flag">`;
}
