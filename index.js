let images = [];
const output = document.getElementById('output');

document.getElementById('fileInput').addEventListener('change', function(event) {
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
    const contents = e.target.result;
        const lines = contents.split('\n');
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = ''; // Clear previous content

        lines.forEach(line => {
            // Trim any leading/trailing whitespace and skip empty lines
            const trimmedLine = line.trim();
            if (trimmedLine) {
                images.push(Number(trimmedLine));
            }
        });

        images.forEach(async num => await getData(num))
}

async function getData(num){
    images.forEach(async num => {
        let response = await fetch(`https://xkcd-api.ridvanaltun.vercel.app/api/comics/${num}`);
        let comicsObject = response.json();
        let img = document.createElement('img');
        img.src = comicsObject.img;
        output.append(img);
});
}