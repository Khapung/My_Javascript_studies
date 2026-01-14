// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function renderImages() {
    const container = document.getElementById('container');
    let imagesHTML = '';

    for (i of imgs){
        imagesHTML += `<img class="team-img" src="${i}">`
    }

    container.innerHTML = imagesHTML;
}

renderImages();