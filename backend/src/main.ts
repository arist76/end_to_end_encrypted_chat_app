import express from 'express';
import cors from 'cors';

const app = express();


app.use(cors());
app.get('/', (_, res) => {
    res.send('hello, word!');
})

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')
})
