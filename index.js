let images = [];
let imageTags = '';
let generatedFile;
const output = document.getElementById('output');
const container = document.getElementById('container');

document.getElementById('fileInput').addEventListener('change', function(event) {
    output.style.display = 'block';
    output.innerHTML = '';
    const img = document.createElement('img');
    img.width = '200';
    img.src = 'loading.jpg';
    output.append(img);
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        hm(e);
    };
    reader.readAsText(file);
});


async function hm(e){
    imageTags = '';
    const contents = e.target.result;
    const lines = contents.split('\n');
    const outputDiv = document.getElementById('output');

    lines.forEach(line => {
        // Trim any leading/trailing whitespace and skip empty lines
        const trimmedLine = line.trim();
        if (trimmedLine) {
            images.push(Number(trimmedLine));
        }
    });

    for (const num of images) {
        await getData(num);
    }
    
    const htmlContent = generateHTML(imageTags);
    const blob = new Blob([htmlContent], { type: 'text/html' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'comics.html';

    generatedFile = link;
    updateScreen();
    document.getElementById('download').addEventListener('click', function(){generatedFile.click();});
    
}

async function getData(num){
    try {
        const response = await fetch(`https://js-zadanie.onrender.com/getdata/${num}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const comicsObject = await response.json();
        imageTags += `<img src="${comicsObject.img}" class="img-fluid col-12 col-md-6 mb-3" alt="${comicsObject.alt}">`;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function generateHTML(imageTags){
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Comics</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <div class="container">
            <div class="row">
                ${imageTags}
            </div>
        </div>
    </body>
    </html>`;
    return htmlContent;
}

function updateScreen(){
    output.innerHTML = '';
    const img = document.createElement('img');
    img.width = '200';
    img.src = 'success.jpg';
    output.append(img);
    const btn = document.getElementById('download');
    if(btn !== null){
        container.removeChild(btn);
    }
    const br = document.createElement('br');
    container.append(br);
    const button = document.createElement('button');
    button.textContent = 'Download';
    button.id = 'download';
    container.append(button);
}