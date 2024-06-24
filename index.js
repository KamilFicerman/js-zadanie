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

            for (const num of images) {
                await getData(num);
            }
        }

        async function getData(num){
            try {
                const response = await fetch(`https://js-zadanie.onrender.com/getdata/${num}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const comicsObject = await response.json();
                const img = document.createElement('img');
                img.src = comicsObject.img;
                output.appendChild(img);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }