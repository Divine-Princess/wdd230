const directoryURL = "js/directory.json";

fetch(directoryURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); 
        const businesses = jsonObject['businesses'];
        for (let i = 0; i < businesses.length; i++ ) {
            
            //
            let card = document.createElement('div');
            let info = document.createElement("section");
            let photo = document.createElement('picture');
            
            let name = document.createElement('h2');
            let website = document.createElement('a');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let image = document.createElement("img");

            image.setAttribute('src', businesses[i].photo);
            image.setAttribute('alt', businesses[i].name);
            name.textContent = businesses[i].name;
            address.textContent = businesses[i].address;
            phone.textContent = businesses[i].phone;
            website.setAttribute('href', businesses[i].website);
            website.textContent = `${businesses[i].name} Website`;
        
            photo.appendChild(image);
            card.appendChild(photo);
            
            info.appendChild(name);
            info.appendChild(address);
            info.appendChild(phone);
            info.appendChild(website);
            card.appendChild(info);

            console.log(image);
            console.log(name);
            console.log(address);
            console.log(phone);
            console.log(website);
            console.log(info);
            console.log(card);
            console.log(document.querySelector("directoryjs"));

            document.querySelector('div.directoryjs').appendChild(card);
        }
    });
    
    