const express = require('express')
const cors = require('cors')
const ThreeIdProvider = require('3id-did-provider').default
const CeramicClient = require('@ceramicnetwork/http-client').default
const { randomBytes } = require('@stablelib/random')
const { getRandomPlant, getPlantDescription, getRandomImage } = require('./plant-generator')

let ceramic = undefined

async function setCeramic () {
    const CERAMIC_URL = 'https://ceramic-clay.3boxlabs.com'
    // const CERAMIC_URL = 'http://localhost:7007'
    const ceramic = new CeramicClient(CERAMIC_URL)

    const seed = randomBytes(32)
    const getPermission = async (request) => {
        return request.payload.paths
    }
    try {
        const threeId = await ThreeIdProvider.create({ getPermission, seed, ceramic })
        const provider = threeId.getDidProvider()
        await ceramic.setDIDProvider(provider)
        return ceramic
    } catch (error) {
        console.log('Failed to initialize ceramic')
    }

}

(async () => {
    ceramic = await setCeramic()
})()

const app = express()
app.use(cors())
app.get('/', (req, res) => {
    res.send(getRandomPlant())
})

app.get('/newplant', async (req, res) => {
    try {
        const document = await ceramic.createDocument('tile', {
            content: {
                name: getRandomPlant(),
                description: getPlantDescription(),
                image: getRandomImage()
            },
        })

        console.log('Write result', document)
        console.log(document.id.toString())
        res.send(document.id.toString())
    } catch (error) {
        console.log(error)
        res.send('Failed')
    }
})

app.get('/plant/:id', async (req, res) => {
    try {
        const docResponse = await ceramic.loadDocument(req.params.id)
        console.log('doc', docResponse)
        console.log('doc body', docResponse._state.content)
        res.send(docResponse._state.content)

    } catch (error) {
        console.log(error)
    }

})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
