const btn = document.querySelector('button');
const heartIcon = document.querySelector('.heart');

async function heartFlying() {
    heartIcon.classList.add('heart-fly');
    setTimeout(() => {
        heartIcon.classList.remove('heart-fly');
    }, 1000)
}


btn.addEventListener('click', async () => {
    await heartFlying();
})