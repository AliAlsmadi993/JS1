const form = document.getElementById('infoForm');
const displayCard = document.getElementById('displayCard');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const birthdate = document.getElementById('birthdate').value;
    const description = document.getElementById('description').value;
    const major = document.getElementById('major').value;
    const siblings = document.getElementById('siblings').value;
    const siblingsDesc = document.getElementById('siblingsDesc').value;
    const languages = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);

    const fileInput = document.getElementById('image');
    const reader = new FileReader();

    reader.onload = function (e) {
        const imageSrc = e.target.result;

        const formData = {
            name,
            age,
            gender,
            birthdate,
            description,
            major,
            siblings,
            siblingsDesc,
            languages,
            imageSrc
        };

        localStorage.setItem('formData', JSON.stringify(formData));

        displayCard.innerHTML = `
            <img src="${imageSrc}" alt="Uploaded Image">
            <h2>${name}</h2>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Birth Date:</strong> ${birthdate}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Major & University:</strong> ${major}</p>
            <p><strong>Programming Languages:</strong> ${languages.join(', ')}</p>
            <p><strong>Siblings Number:</strong> ${siblings}</p>
            <p><strong>Siblings Description:</strong> ${siblingsDesc}</p>
        `;
        displayCard.style.display = 'block';
    };

    if (fileInput.files[0]) {
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        const formData = {
            name,
            age,
            gender,
            birthdate,
            description,
            major,
            siblings,
            siblingsDesc,
            languages,
            imageSrc: null
        };

        localStorage.setItem('formData', JSON.stringify(formData));

        displayCard.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Age:</strong> ${age}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Birth Date:</strong> ${birthdate}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p><strong>Major & University:</strong> ${major}</p>
            <p><strong>Programming Languages:</strong> ${languages.join(', ')}</p>
            <p><strong>Siblings Number:</strong> ${siblings}</p>
            <p><strong>Siblings Description:</strong> ${siblingsDesc}</p>
        `;
        displayCard.style.display = 'block';
    }
});
