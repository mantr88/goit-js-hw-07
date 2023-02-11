import { galleryItems } from './gallery-items.js';
// Change code below this line

const divGalleryRef = document.querySelector('.gallery');

function makeGallery(items) {
    return items.map(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('gallery__item')
        const itemLink = document.createElement('a');
        itemLink.classList.add('gallery__link');
        itemLink.href = `${item.original}`;

        const itemImg = document.createElement('img');
        itemImg.classList.add('gallery__image');
        itemImg.src = `${item.preview}`;
        itemImg.dataset.source = `${item.original}`;
        itemImg.alt = `${item.description}`;

        itemLink.append(itemImg);
        itemDiv.append(itemLink);
        return itemDiv
                
    })
    
}

const items = makeGallery(galleryItems);
divGalleryRef.append(...items);


function toShowInstance(e) {
    e.preventDefault();
    
    const currentImg = e.target;
    currentImg.src = currentImg.dataset.source;
    
    const instance = basicLightbox.create(currentImg.outerHTML);
    
    instance.show();
    
    window.addEventListener('keydown', closeByEscape)

    function closeByEscape(e) {
        if (e.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', closeByEscape);
        }
    }
}

divGalleryRef.addEventListener('click', toShowInstance)
