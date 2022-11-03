const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Look baba i can codeee node js!')
})

const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz"
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv"
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net"
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "email": "Julianne.OConner@kory.org"
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "email": "Lucio_Hettinger@annie.ca"
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "email": "Karley_Dach@jasper.info"
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "email": "Telly.Hoeger@billy.biz"
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "email": "Sherwood@rosamond.me"
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "email": "Chaim_McDermott@dana.io"
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "email": "Rey.Padberg@karina.biz"
    }
]

app.get('/users', (req, res) => {
    // console.log('Query', req.query)
    // res.send(users)
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase()
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched)
    }
    else{
        res.send(users)
    }
})

app.get('/users/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/users', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    // res.send('post success')
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'banana'])
})

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour sour falze flavour')
})

app.listen(port, () => {
    console.log('Port number', port)
})