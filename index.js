const express = require('express')
const app = express()
const ThreeIdProvider = require('3id-did-provider').default
const CeramicClient = require('@ceramicnetwork/http-client').default
const { randomBytes } = require('@stablelib/random')

let ceramic = undefined

async function setCeramic () {
    const CERAMIC_URL = 'https://ceramic-clay.3boxlabs.com'
    // const CERAMIC_URL = 'http://localhost:7007'
    const ceramic = new CeramicClient(CERAMIC_URL)

    const seed = randomBytes(32)
    const getPermission = async (request) => {
        return request.payload.paths
    }
    const threeId = await ThreeIdProvider.create({ getPermission, seed })
    const provider = threeId.getDidProvider()
    await ceramic.setDIDProvider(provider)
    return ceramic
}

(async () => {
    ceramic = await setCeramic()
})()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/new', async (req, res) => {
    try {
        const writeResult = await ceramic.createDocument('tile', {
            content: {
                name: "Magus planta",
                description: "An awesome WWF crypto plant",
                image: "https://tenthousandsu.com/erc721/00050.png"
            },
        })

        console.log('Write result', writeResult)
        console.log('Doc id', writeResult.id)
        res.send('Created')
    } catch (error) {
        console.log(error)
        res.send('Failed')
    }

})
app.get('/doc', async (req, res) => {
    try {
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
