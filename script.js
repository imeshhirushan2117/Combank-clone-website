const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const mouseOver = () => {
    document.getElementById('hover-img').src = 'assets/img/chat-c-2.png'
}

const mouseOut = () => {
    document.getElementById('hover-img').src = 'assets/img/chat-c-1.png'
}

const iconClick = () => {
    var icon = document.getElementById('stataic-img');

    if(icon.style.display == 'none'){
        icon.style.display = 'block'
    }else{
        icon.style.display = 'none'
    } 

}

const over1 = () => {
//   var nav =  document.getElementById('overOne').style.display = "block"
//     console.log("over1")

    
//     if(nav.style.display == 'none'){
//         nav.style.display = 'block'
//     }else{
//         nav.style.display = 'none'
//     } 


    var nav = document.getElementById('overOne');

    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }

    console.log("over1");


}

 




