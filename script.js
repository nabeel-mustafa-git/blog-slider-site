var index = 0;
var total = document.getElementsByClassName('container');

function handleRightClick(){
    const nextIndex = index + 1 <= total.length - 1 ? index + 1 : 0;
    const currentGroup = document.querySelector(`[data-index = "${index}"]`),
    nextGroup = document.querySelector(`[data-index = "${nextIndex}"]`);

    currentGroup.dataset.status = "before";
    nextGroup.dataset.status = "come-from-right";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        index = nextIndex;
    })
}

function handleLeftClick(){
    const nextIndex = index - 1 >= 0 ? index - 1 : total.length - 1;
    const currentGroup = document.querySelector(`[data-index = "${index}"]`),
    nextGroup = document.querySelector(`[data-index = "${nextIndex}"]`);

    currentGroup.dataset.status = "after";
    nextGroup.dataset.status = "come-from-left";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        index = nextIndex;
    })
}


const link = document.querySelector('.link-section'),
social = document.querySelector('.social-section'),
contact = document.querySelector('.contact-section'),
cross = document.querySelector('.cross');


function handleCloseClick(){
    link.classList.remove('show-mobile');
    link.classList.add('hide-mobile');
    setTimeout(()=>{
        link.classList.remove('hide-mobile');
    }, 500)
    social.classList.remove('show');
    contact.classList.remove('show');
    cross.classList.remove('show');
}
function handleOpenClick(){
    link.classList.add('show-mobile');
    link.classList.remove('hide-mobile');
    social.classList.add('show');
    contact.classList.add('show');
    cross.classList.add('show');
}