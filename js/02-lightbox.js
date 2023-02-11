import { galleryItems } from './gallery-items.js';
// Change code below this line

function makeGallery(items) {
    return items.map(item => {
        const listItem = document.createElement('li');
        const itemLink = document.createElement('a');
        itemLink.classList.add('gallery__item');
        itemLink.href = `${item.original}`;

        const itemImg = document.createElement('img');
        itemImg.classList.add('gallery__image');
        itemImg.src = `${item.preview}`;
        itemImg.dataset.source = `${item.original}`;
        itemImg.alt = `${item.description}`;

        itemLink.append(itemImg);
        // listItem.append(itemLink);
        return itemLink

    })
}

const galeryListRef = document.querySelector('.gallery');

const items = makeGallery(galleryItems);
galeryListRef.append(...items);

function turnOnSimpleLightbox(e) {
    e.preventDefault();
    const gallery = new SimpleLightbox('.gallery a', { /* options */ });
    gallery.on('show.simplelightbox', function () {
	// Do something…
});
    // let lightbox = $('.gallery a').simpleLightbox({ /* options */ });
}

galeryListRef.addEventListener('click', turnOnSimpleLightbox);

