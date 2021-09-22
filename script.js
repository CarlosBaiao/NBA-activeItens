const items = Array.from(document.getElementsByClassName('item'));

const bucks = document.getElementById('bucks');
const hawks = document.getElementById('hawks');
const suns = document.getElementById('suns');
const cleve = document.getElementById('cleve');
hideOrShowContent('bucks')

items.forEach(item => {
    item.addEventListener('click', onItemClick)
})

function onItemClick(event) {
    const selectAttribute = event.target.getAttribute("data");
    addOrREmoveActive(selectAttribute)
    hideOrShowContent(selectAttribute);
}

function hideOrShowContent(selectAttribute) {
    hideElemets()

    if(selectAttribute === 'bucks' ) {
        bucks.style.display="block"
    }

    if(selectAttribute === 'hawks' ) {
        hawks.style.display="block"
    }

    if(selectAttribute === 'suns' ) {
        suns.style.display="block"
    }

    if(selectAttribute === 'cleve' ) {
        cleve.style.display="block"
    }

}

function addOrREmoveActive(selectAttribute) {
    items.forEach(item => {
        const itemAttribute = item.getAttribute('data');
        if(itemAttribute === selectAttribute) {
            item.classList.add("active")
            return;
        }
        item.classList.remove("active");
    })
}

function hideElemets() {
    bucks.style.display='none';
    hawks.style.display='none';
    suns .style.display='none';
    cleve.style.display='none';

}


