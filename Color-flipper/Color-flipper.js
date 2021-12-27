const colors = [
    "orange", "red","rgba(133,122,200)","#f15025"
];
const btn = document.getElementById('btn');
const color =document.querySelector('.color');
let rendom = () => {
    return Math.floor(Math.random() * colors.length);
}

btn.addEventListener('click',()=>{
    const randomNumber =rendom();
    //console.log(rendom());
    document.body.style.backgroundColor  = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
