import express from 'express';

const port = 3333;
const app = express();

const getCurrentTime = () => {
    const now = new Date();
    const localTime = now.toLocaleTimeString(); 
    return localTime;
};

app.get('/get-time', (req, res) => {
    const currentTime = {
        currentTime: getCurrentTime()
    };
    res.status(200).json(currentTime);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
