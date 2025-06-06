const imageUpload = document.getElementById('image-upload');
const topTextInput = document.getElementById('top-text');
const bottomTextInput = document.getElementById('bottom-text');
const generateBtn = document.getElementById('generate-btn');
const downloadBtn = document.getElementById('download-btn');
const deleteBtn = document.getElementById('delete-btn');
const canvas = document.getElementById('meme-canvas');
const ctx = canvas.getContext('2d');

let image = new Image();

imageUpload.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        image.src = e.target.result;
        image.onload = () => {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
        };
    };

    reader.readAsDataURL(file);
});

function drawText(text, x, y) {
    ctx.fillStyle = 'black';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.font = 'bold 75px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, x, y);
    ctx.strokeText(text, x, y);
}

function generateMeme() {
    if (image.src) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, 0, 0);
        drawText(topTextInput.value, canvas.width / 2, 50);
        drawText(bottomTextInput.value, canvas.width / 2, canvas.height - 20);
        downloadBtn.style.display = 'block';
    }
}

generateBtn.addEventListener('click', generateMeme);

downloadBtn.addEventListener('click', function () {
    const memeURL = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = memeURL;
    a.download = 'meme.png';
    a.click();
});
deleteBtn.addEventListener('click', function (){
     const fileInput = document.getElementById('imgae/png');
     fileInput.value = '';
}
);
const imageContainer = document.getElementById('imageContainer');
        imageContainer.addEventListener('click',
            function (event) {
                if (event.target.classList.contains('deleteButton')) {
                    const imageElement = event.target.previousElementSibling;
                    imageElement.parentNode.removeChild(imageElement);
                }
            });
