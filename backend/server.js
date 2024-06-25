import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const PORT = 5000;
const app = express();

app.use(cors());


app.get('/getData/:num', async (req, res) => {
    const num = req.params.num;
    const requestEndpoint = `https://xkcd.com/${num}/info.0.json`;

    try {
        const response = await fetch(requestEndpoint);

        // Check if response is ok
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonResponse = await response.json();
        res.json(jsonResponse);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
        res.status(500).json({ error: 'Error fetching or parsing data' });
    }
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
