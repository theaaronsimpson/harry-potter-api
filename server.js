const express = require('express')
const app = express()
const PORT = 8000

const chracters = {
    'hermoine granger' : {
        'name' : 'Hermoine Granger',
        'birthLocation' : 'London, England',
        'house' : 'Gryffindor',
        'bloodStatus' : 'Muggle Born',
        'patronus' : 'Otter',
    },
    'harry potter' : {
        'name' : 'Harry Potter',
        'birthLocation' : 'Godric\'s Hollow, England',
        'house' : 'Gryffindor',
        'bloodStatus' : 'Half-Blood',
        'patronus' : 'Stag',
    },
    'ronald weasley' : {
        'name' : 'Ronald Weasley',
        'birthLocation' : 'Ottery St Catchpole, Devon, England',
        'house' : 'Gryffindor',
        'bloodStatus' : 'Pure-Blood',
        'patronus' : 'Jack Russell Terrier',
    },
    'unknown' : {
        'name' : 'unknown',
        'birthLocation' : 'unknown',
        'house' : 'unknown',
        'bloodStatus' : 'unknown',
        'patronus' : 'unknown',
    },
}

app.get('/', (request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=> {
    const harryPotterCharacter = request.params.name.toLowerCase()
    if( chracters[harryPotterCharacter] ){
        response.json(chracters[harryPotterCharacter])
    }else{
        response.json(chracters['unknown'])
    }
})

app.listen(PORT, ()=> {
    console.log(`The server is now running on port ${PORT}!`)
}) 