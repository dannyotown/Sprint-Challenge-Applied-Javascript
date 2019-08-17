// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response)=>{

    let articles =response.data.articles;
    let bootstrap = articles.bootstrap
    let javascript = articles.javascript
    let jquery = articles.jquery
    let node = articles.node
    let technology = articles.technology;

    bootstrap.forEach(element => {
        articleCard(element.headline,element.authorPhoto,element.authorName)
    });
    javascript.forEach(element => {
        articleCard(element.headline,element.authorPhoto,element.authorName)
    });
    jquery.forEach(element => {
        articleCard(element.headline,element.authorPhoto,element.authorName)
    });
    node.forEach(element => {
        articleCard(element.headline,element.authorPhoto,element.authorName)
    });
    technology.forEach(element => {
        articleCard(element.headline,element.authorPhoto,element.authorName)
    });
})

function articleCard(headText,imgsrc, aName){
let cardContainer = document.querySelector('.cards-container');
let cardDiv = document.createElement('div');
cardDiv.classList.add('card');
cardContainer.appendChild(cardDiv);

let headLine = document.createElement('div');
headLine.classList.add('headline');
headLine.textContent = headText;
cardDiv.appendChild(headLine);

let author = document.createElement('div')
author.classList.add('author');
cardDiv.appendChild(author)

let imgContainer = document.createElement('div')
imgContainer.classList.add('img-container');
author.appendChild(imgContainer);

let authorImg = document.createElement('img')
authorImg.src = imgsrc;
imgContainer.appendChild(authorImg);

let authorsName = document.createElement('span');
authorsName.textContent = aName;
author.appendChild(authorsName);

return cardDiv;
}
