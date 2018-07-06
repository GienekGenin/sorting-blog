import './scss/style.scss';
import './scripts/data-parser';

// all json data in this var

let checkData = setInterval(function () {
    if (window.parent.json_data !== undefined) {
        console.log(window.parent.json_data);
        clearInterval(checkData);
    } else return false;
}, 100);

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

// let card = document.createElement('div');
// let title = document.createElement('h3');
// let description = document.createElement('span');
// let photo = document.createElement('img'); //give it src attr with link on img
// let date = document.createElement('span');
// let tags = document.createElement('ul');
// let tag = document.createElement('li');

setTimeout(function(){
    createCard(window.parent.json_data.data);
},4000);

let app = document.getElementById('app');

function createCard(j_data) {

    let card = document.createElement('div');
    card.setAttribute('class','card-box');

    let title = document.createElement('h3');
    let titleText = document.createTextNode(j_data[0].title);
    title.appendChild(titleText);

    let description = document.createElement('span');
    description.setAttribute('class','description');
    let descriptionText = document.createTextNode(j_data[0].description);
    description.appendChild(descriptionText);

    let photo = document.createElement('img');
    photo.setAttribute('src',j_data[0].image);

    let date = document.createElement('span');
    date.setAttribute('class', 'date');
    let dateText = document.createTextNode(j_data[0].createdAt);
    date.appendChild(dateText);

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(photo);
    card.appendChild(date);
    app.appendChild(card);

}