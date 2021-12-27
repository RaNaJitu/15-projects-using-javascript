// set initial count
let count = 0 ;

//Select value and button
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

//console.log(btns)

btns.forEach((btn)=>{
    btn.addEventListener('click', (e) =>{
        const btnStyle = e.currentTarget.classList;
        if(btnStyle.contains('decrease')){
            count--;
        }
        else if(btnStyle.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        if(count > 0){
            value.style.color ='green'
        }
        if(count < 0){
            value.style.color ='red'
        }
        if(count === 0){
            value.style.color ='black'
        }
        value.textContent = count;
    })
})