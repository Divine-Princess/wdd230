const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i<towns.length; i++) {

            let event1 = document.createElement('li');
            let event2 = document.createElement('li');
            let event3 = document.createElement('li');
            let event4 = document.createElement('li');
            let fisheventsul = document.getElementById('fishhavenevents');

            event1.textContent = towns[i].events[0];
            event2.textContent = towns[i].events[1];
            event3.textContent = towns[i].events[2];
            event4.textContent = towns[i].events[3];
            
            if (towns[i].name == "Fish Haven") {

                fisheventsul.appendChild(event1);
                fisheventsul.appendChild(event2);
                fisheventsul.appendChild(event3);
                fisheventsul.appendChild(event4);
                
        }
    
    }
    });
