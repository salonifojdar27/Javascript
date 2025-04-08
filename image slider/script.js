
// Alternative minimal version
let current = 0;
const imgs = document.querySelectorAll('.container img');

function show(n) {
    imgs.forEach(img => img.style.display = 'none');
    imgs[n].style.display = 'block';
}

document.getElementById('right').onclick = () => {
    current = (current + 1) % imgs.length;
    show(current);
};

document.getElementById('left').onclick = () => {
    current = (current - 1 + imgs.length) % imgs.length;
    show(current);
};

show(0);



