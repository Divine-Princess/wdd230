const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        const towns = jsonObject['towns'];
        for (let i = 0; i<towns.length; i++) {

            let event1 = document.createElement('li');
            let event2 = document.createElement('li');
            let event3 = document.createElement('li');
            let event4 = document.createElement('li');
            let prestoneventsul = document.getElementById('prestonevents');
            let sodaeventsul = document.getElementById('sodaspringsevents');
            let fisheventsul = document.getElementById('fishhavenevents');

            event1.textContent = towns[i].events[0];
            event2.textContent = towns[i].events[1];
            event3.textContent = towns[i].events[2];
            event4.textContent = towns[i].events[3];
            
            if (i = 0) {

                if (sodaeventsul == null) {
                    continue;
                }
                sodaeventsul.appendChild(event1);
                sodaeventsul.appendChild(event2);
                sodaeventsul.appendChild(event3);
                
        }
            else if (i = 2) {

                if (fisheventsul == null) {
                    continue;
                }
                fisheventsul.appendChild(event1);
                fisheventsul.appendChild(event2);
                fisheventsul.appendChild(event3);
                fisheventsul.appendChild(event4);
                
        }
             else if (i = 6) {
                
                if (prestoneventsul == null) {
                    continue;
                }
                prestoneventsul.appendChild(event1);
                prestoneventsul.appendChild(event2);
                prestoneventsul.appendChild(event3);
        }
    }
    });
