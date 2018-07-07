import './scss/style.scss';
import './scripts/sort-script';

// get data from server
window.onload = () => {
    fetch('https://api.myjson.com/bins/152f9j')
        .then(response => {
            response.json().then(json_data => {
                createCards(json_data.data);
                return window.parent.json_data = json_data;
            })
        })
        .catch(err => {
            console.log('Woooops, shit happens');
            console.log(err);
        })
};
function setFilter(e){
    console.log(e);
}
// json structure
/*{
    "title":"Quo repudiandae qui sit.",
    "description":"Some text",
    "image":"http://via.placeholder.com/150x150",
    "createdAt":"0290-01-20T18:19:35.727Z",
    "tags":[
    "Business",
    "Politics",
    "Sport"]
}*/

let app = document.getElementById('app');

function createCards(j_data) {
    for (let i = 0; i < j_data.length; i++) {
        createCard(j_data[i]);
    }
}

function createCard(j_data) {

    let card = document.createElement('div');
    card.setAttribute('class', 'card-box');

    let title = document.createElement('h3');
    let titleText = document.createTextNode(j_data.title);
    title.appendChild(titleText);

    let description = document.createElement('span');
    description.setAttribute('class', 'description');
    let descriptionText = document.createTextNode(j_data.description);
    description.appendChild(descriptionText);

    let photo = document.createElement('img');
    photo.setAttribute('src', j_data.image);

    let date = document.createElement('span');
    date.setAttribute('class', 'date');
    let dateText = document.createTextNode(j_data.createdAt);
    date.appendChild(dateText);

    let tags = document.createElement('ul');
    for (let i = 0; i < j_data.tags.length; i++) {
        let tag = document.createElement('li');
        let tagText = document.createTextNode(j_data.tags[i]);
        tag.appendChild(tagText);
        tags.appendChild(tag);
    }

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(photo);
    card.appendChild(date);
    card.appendChild(tags);
    app.appendChild(card);
}