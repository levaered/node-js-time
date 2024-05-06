import express from 'express'

const port = 3333;
const app = express();

app.get('/get-time', (req, res) => {
    const currentDate = {
        currentDate: new Date()
    }
    res.json(currentDate);
})

app.listen(port, () => {
    console.log(`Server listining on port ${port}`)
})