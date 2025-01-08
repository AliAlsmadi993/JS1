var loadButton = document.getElementById('loadButton');

loadButton.addEventListener('click', function() {
    fetch('user.json')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var cardContainer = document.getElementById('cardContainer');
            cardContainer.style.display = 'flex';

            cardContainer.innerHTML = '';

            for (var i = 0; i < data.length; i++) {
                var user = data[i];

                var card = document.createElement('div');
                card.className = 'card';

                card.innerHTML = '<h2>' + user.name + '</h2>' +
                                 '<p><strong>Age:</strong> ' + user.age + '</p>' +
                                 '<p><strong>Email:</strong> ' + user.email + '</p>' +
                                 '<p><strong>Profession:</strong> ' + user.profession + '</p>';

                cardContainer.appendChild(card);
            }
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
        });
});
