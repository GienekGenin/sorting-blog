import './scss/style.scss';
import './scripts/sort-script';

// get data from server
// window.onload = () => {
//     fetch('https://api.myjson.com/bins/152f9j')
//         .then(response => {
//             response.json().then(json_data => {
//                 createApp(json_data.data);
//                 return window.parent.json_data = json_data;
//             })
//         })
//         .catch(err => {
//             console.log('Woooops, shit happens');
//             console.log(err);
//         })
// };
//
// // json structure
// /*{
//     "title":"Quo repudiandae qui sit.",
//     "description":"Some text",
//     "image":"http://via.placeholder.com/150x150",
//     "createdAt":"0290-01-20T18:19:35.727Z",
//     "tags":[
//     "Business",
//     "Politics",
//     "Sport"]
// }*/
//
// let app = document.getElementById('app');
// let cards = document.getElementById('cards');
// let tags = document.getElementById('sorting-tags');
//
//
//
// function createApp(j_data) {
//     let tags_arr = getUniqueTags(j_data);
//     createTags(tags_arr);
//     for (let i = 0; i < j_data.length; i++) {
//         createCard(j_data[i]);
//     }
//     app.appendChild(tags);
//     app.appendChild(cards);
//     sortElements();
// }
//
// //get unique elements from arr
// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
// }
//
// function getUniqueTags(j_data) {
//     let allTags = [];
//     for (let i = 0; i < j_data.length; i++) {
//         for (let c = 0; c < j_data[i].tags.length; c++) {
//             allTags.push(j_data[i].tags[c]);
//         }
//     }
//     return allTags.filter(onlyUnique);
// }
//
// function createTags(tags_arr) {
//     for (let i = 0; i < tags_arr.length; i++) {
//         let tag = document.createElement('span');
//         tag.setAttribute('class','tag');
//         tag.setAttribute('onclick','toggleTag(event)');
//         let tagText = document.createTextNode(tags_arr[i]);
//         tag.appendChild(tagText);
//         tags.appendChild(tag);
//     }
// }
//
// function toggleTag(e) {
//     // let tag = e.target;
//     // tag.classList.toggle('selected-tag');
//     // // if(tag.classList.contains('selected-tag')){
//     // //   // selected_tags_arr.push(tag.innerHTML);
//     // // }
//     // console.log(selected_tags_arr);
// }
//
// function createCard(j_data) {
//
//     let card = document.createElement('div');
//     card.setAttribute('class', 'card-box');
//
//     let title = document.createElement('h3');
//     let titleText = document.createTextNode(j_data.title);
//     title.appendChild(titleText);
//
//     let description = document.createElement('span');
//     description.setAttribute('class', 'description');
//     let descriptionText = document.createTextNode(j_data.description);
//     description.appendChild(descriptionText);
//
//     let photo = document.createElement('img');
//     photo.setAttribute('src', j_data.image);
//
//     let date = document.createElement('span');
//     date.setAttribute('class', 'date');
//     let dateText = document.createTextNode(j_data.createdAt);
//     date.appendChild(dateText);
//
//     let tags = document.createElement('ul');
//     for (let i = 0; i < j_data.tags.length; i++) {
//         let tag = document.createElement('li');
//         let tagText = document.createTextNode(j_data.tags[i]);
//         tag.appendChild(tagText);
//         tags.appendChild(tag);
//     }
//
//     card.appendChild(title);
//     card.appendChild(description);
//     card.appendChild(photo);
//     card.appendChild(date);
//     card.appendChild(tags);
//     cards.appendChild(card);
//
// }
//
// // sorting functions
// function sortElements() {
//     // let element_to_sort = document.getElementsByClassName('card-box');
//     // console.log(element_to_sort);
//     // let tags = element_to_sort[0].childNodes[4];
//     // console.log(tags);
//
// // read input value on change // keyup
// // function sort() {
// //     console.log(input.value);
// // }
//     function swapNodes(node1, node2) {
//         node2_copy = node2.cloneNode(true);
//         node1.parentNode.insertBefore(node2_copy, node1);
//         node2.parentNode.insertBefore(node1, node2);
//         node2.parentNode.replaceChild(node2, node2_copy);
//     }
// }