const toggaleBtn = document.querySelector('.sidebar-toggle')
const closeeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggaleBtn.addEventListener('click',() =>{
    // if(sidebar.classList.contains('show-sidebar')){
    //     sidebar.classList.remove('show-sidebar');
    // }else{
    //     sidebar.classList.add('show-sidebar');
    // }
    sidebar.classList.toggle('show-sidebar');
})
closeeBtn.addEventListener("click",() =>{
    sidebar.classList.remove('show-sidebar');
})