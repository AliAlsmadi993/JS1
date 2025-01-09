var loadButton = document.getElementById('loadButton');

loadButton.addEventListener('click', function () {
    fetch('https://677f67de0476123f76a64435.mockapi.io/books')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var cardContainer = document.getElementById('cardContainer');
            cardContainer.style.display = 'flex';

            cardContainer.innerHTML = '';

            data.forEach((book, index) => {
                var card = document.createElement('div');
                card.className = 'card';
                card.style.setProperty('--card-index', index);

                card.innerHTML = `
                    <h2>${book.name || 'Unknown Name'}</h2>
                    <p><strong>ID:</strong> ${book.id || 'Unknown ID'}</p>
                `;

                cardContainer.appendChild(card);
            });
        })
        .catch(function (error) {
            console.error('Error fetching data:', error);
        });
});
