const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


const mouseOver = () => {
    document.getElementById('hover-img').src = 'assets/img/chat-c-2.png'
}

const mouseOut = () => {
    document.getElementById('hover-img').src = 'assets/img/chat-c-1.png'
}