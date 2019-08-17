/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function carousel(){
  let caraContainer = document.querySelector('.carousel-container');
  let caraDiv = document.createElement('div');
  caraDiv.classList.add('carousel');
  caraContainer.appendChild(caraDiv);

  let leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  caraDiv.appendChild(leftButton)

  let imgs = ['./assets/carousel/mountains.jpeg','./assets/carousel/computer.jpeg','./assets/carousel/trees.jpeg','./assets/carousel/turntable.jpeg'];
  
  function img(imgarray){
    imgarray.forEach((ele)=>{
      let img = document.createElement('img');
      img.src = ele;
      img.classList.add('images');
      caraDiv.appendChild(img);
      if(ele === './assets/carousel/mountains.jpeg'){
        img.style.display = 'block';
      }
    })
  }
  img(imgs);

  let rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.addEventListener('click',()=>{
    let images = document.querySelectorAll('.images');
    let imageArray = Array.from(images);
    if(imageArray[0].style.display == 'block'){
      document.images[0].style.display = 'none';
      document.images[1].style.display = 'block';
    }
    function cardRight(){
      var count = 0;
      return count += 1;
    }
   console.log(cardCount());
  })
  caraDiv.appendChild(rightButton)


  return caraDiv
}

carousel();