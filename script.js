const btn = document.querySelector('button');
const heartIcon = document.querySelector('.heart');
const pic = document.querySelector('.pic');

let listImageUrl = [];

const url = 'http://api.giphy.com/v1/gifs/search?q=dog&api_key=xbeKAOKYwp6d5H0EI82yfKZ1b6PpNnZM&limit=100'

async function heartFlying() {
    heartIcon.classList.add('heart-fly');
    setTimeout(() => {
        heartIcon.classList.remove('heart-fly');
    }, 1000)
}

async function applyImage() {
    let randomUrl = listImageUrl[Math.floor(Math.random() * 101)];
    pic.src = `https://i.giphy.com/media/${randomUrl}/giphy.webp`;
}

async function getImage() {
    await fetch(url).then(res => res.json()).then(result => {
        listImageUrl = result.data.map(item => {
            return item.id;
        });
        pic.src = `https://i.giphy.com/media/${listImageUrl[0]}/giphy.webp`;
    });
}


btn.addEventListener('click', async () => {
    await heartFlying();
    pic.src = './images/shiba.jpg';
    await applyImage();
})

window.addEventListener('load', getImage);