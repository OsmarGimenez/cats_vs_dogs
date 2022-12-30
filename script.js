var animalImg = document.querySelector("#fav-animal");

console.log(animalImg);

function pickCat() {
    animalImg.src = "cat.jpg";
    console.log(animalImg.src);
}

function pickDog() {
    animalImg.src = "dog.jpg";
    console.log(animalImg.src);
}