const express = require('express')
const app = express()
// import CeramicClient from '@ceramicnetwork/http-client'
const CeramicClient = require('@ceramicnetwork/http-client').default
// import * as CeramicClient from '@ceramicnetwork/http-client'

const CERAMIC_URL = 'https://ceramic-clay.3boxlabs.com'
// const CERAMIC_URL = 'http://localhost:7007'
const ceramic = new CeramicClient(CERAMIC_URL)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/doc', async (req, res) => {
    try {
        // const docResponse = await ceramic.loadDocument('k2t6wyfsu4pg2qvoorchoj23e8hf3eiis4w7bucllxkmlk91sjgluuag5syphl')
        const docResponse = await ceramic.loadDocument('kjzl6cwe1jw145elnqm1vzmyn8nnl8n174jedm4icsdy2zn628b7zvmo941zcz0')
        console.log('doc', docResponse)
        console.log('doc body', docResponse._state.content)

    } catch (error) {
        console.log(error)
    }
    res.send('Got doc')
})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})