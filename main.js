const container = document.querySelector(".container");
const inputField = document.getElementById("inputField");
// let fieldValue = inputField.value;
const btn = document.getElementById("btn");
const spinner = document.querySelector(".spinner");
var cardTag;

function getPhotos(images) {
  images.map((image) => {
    cardTag = `<div class="card">
        <img src=${image.src.tiny} alt="">
    </div>`;
    container.innerHTML += cardTag;
  });
}
inputField.addEventListener("keypress", searchPhotos);
// btn.addEventListener("click",searchPhotos)

function searchPhotos(event) {
  if (event.keyCode == 13) {
    fetch(`https://api.pexels.com/v1/search?query=${event.target.value}`, {
      headers: {
        Authorization:
          "563492ad6f91700001000001a754b13534884d8ca0eeffac806220fb",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        getPhotos(data.photos);
      })
      .catch((err) => console.log(err));
  } else {
    container.innerHTML = "";
  }
}
