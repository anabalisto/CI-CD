const hexColors = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
let newColor;
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');
btn.addEventListener('click',function(){
    newColor = randomColor();
document.querySelector('body').style.backgroundColor = newColor;
color.textContent = newColor; 
})

function randomColor(){
    let hexColor = '#';
     for(let i = 0; i < 6; i++)
    {
        const randomIndex = Math.floor(Math.random() * hexColors.length);
         hexColor += hexColors[randomIndex];
        
    }
   return hexColor; 
}
