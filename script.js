var animalImg = document.querySelector("#fav-animal");

console.log(animalImg);

function pickCat(element) {//al asignarle esta propiedad y dandole this a nuestros eleementos en html nos ahorramos 
    //tener que escribir variables como var animalImg etc
    element.style.backgroundColor = "red"// con esto cambiamos una propiedad css con js
    //element.remove();
    animalImg.src = "cat.jpg";
    console.log(animalImg.src);
    console.log(element);
}

function pickDog(element) {
    element.classList.add("btn")
    animalImg.src = "dog.jpg";
    console.log(animalImg.src);
    console.log(element);
}