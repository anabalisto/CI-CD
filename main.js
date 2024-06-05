
const colors =  ["green", "red", "rgba(133,122,200","#f15025"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');
btn.addEventListener('click', function(){
    //random color index
    const randomColor = getRandomColor()
    document.querySelector('body').style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
})

function getRandomColor() {
    return Math.floor(Math.random()*colors.length);

}

   

