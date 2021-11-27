const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++ ) {
            if (i == 0 || i == 2 || i == 6) {
            //
            let card = document.createElement('div');
            let info = document.createElement("section");
            let photo = document.createElement('picture');
            
            let name = document.createElement('h2');
            let motto = document.createElement('h3');
            let founded = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let image = document.createElement("img");

            name.textContent = towns[i].name;
            motto.textContent = towns[i].motto;
            founded.textContent = `Founded in ${towns[i].yearFounded}`;
            population.textContent = `Current Population: ${towns[i].currentPopulation}`;
            rainfall.textContent = `Average Rainfall: ${towns[i].averageRainfall} in`;
            image.setAttribute('src', towns[i].photo);
            image.setAttribute('alt', towns[i].name);

            info.appendChild(name);
            info.appendChild(motto);
            info.appendChild(founded);
            info.appendChild(population);
            info.appendChild(rainfall);
            card.appendChild(info);

            photo.appendChild(image);
            card.appendChild(photo);

            document.querySelector('div.towns').appendChild(card);
        }  
        }
    });




