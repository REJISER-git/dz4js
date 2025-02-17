// CHARACTERS B
const charactersList = document.querySelector('.characters-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/persons.json');

xhr.onload = function() {
    if (xhr.status === 200) {
        const persons = JSON.parse(xhr.response);
        persons.forEach(person => {
            const characterCard = document.createElement('div');
            characterCard.className = 'character-card';

            const characterPhoto = document.createElement('div');
            characterPhoto.className = 'character-photo';

            const characterPhotoImg = document.createElement('img');
            characterPhotoImg.src = person.person_photo;
            characterPhotoImg.alt = person.name;

            characterPhoto.appendChild(characterPhotoImg);

            characterCard.appendChild(characterPhoto);

            const h3 = document.createElement('h3');
            h3.innerHTML = person.name;
            characterCard.appendChild(h3);

            const house = document.createElement('p');
            house.innerHTML = `House: ${person.house}`;
            characterCard.appendChild(house);

            const age = document.createElement('p');
            age.innerHTML = `Age: ${person.age}`;
            characterCard.appendChild(age);



            charactersList.appendChild(characterCard);
        });
    } else {
        console.log('Ошибка при загрузке персонажей');
    }
};


xhr.send();

const xhr2 = new XMLHttpRequest();
xhr2.open('GET', '../data/any.json');

xhr2.onload = () => {
    if (xhr2.status === 200) {
        const data = JSON.parse(xhr2.response);
        console.log('Данные :', data);
    } else {
        console.log('Ошибка при загрузке данных');
    }
};


xhr2.send();
