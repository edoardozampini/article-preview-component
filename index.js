const socialButton = document.getElementById('icon-container');
const shareBox = document.getElementById('share-box');
const iconContainer = document.getElementById('icon-container');

socialButton.addEventListener('click', function() {
    shareBox.classList.toggle('is-visible');
    iconContainer.classList.toggle('active');
})

const socialButtonMobile = document.getElementById('icon-container-mobile');
const shareBoxMobile = document.getElementById('share-box-mobile');
const authorInfoMobile = document.getElementById('author-info-mobile');
const shareIconMobile = document.getElementById('icon-container-share');

socialButtonMobile.addEventListener('click', ()=> {
    shareBoxMobile.style.display = 'flex';
    shareBoxMobile.style.marginTop = '7.5%';
    authorInfoMobile.style.display = 'none';
})

shareIconMobile.addEventListener('click', ()=> {
    shareBoxMobile.style.display = 'none';
    authorInfoMobile.style.display = 'flex';
})