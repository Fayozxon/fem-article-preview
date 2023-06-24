const shareBtn = document.getElementById('shareBtn'),
      shareBox = document.getElementById('shareBox');

shareBtn.addEventListener('click', () => {
    shareBox.classList.toggle('active');
    shareBtn.classList.toggle('active');
});