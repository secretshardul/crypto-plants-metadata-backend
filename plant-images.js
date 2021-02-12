const baseLink = 'https://hub.textile.io/thread/bafkvyewj3wntdwjhlt6thd7tdkt6jhxfiuegduljqxtnalckchd7d2q/buckets/bafzbeig3nbhvalstx2ajleap2e36hnobtt4n2uhc46xu26dpbqzim36die/'

const imageLinks = [...Array(14).keys()].map(index => baseLink + encodeURI(`Asset ${index}@2x.png`))

function randomIndex (length) {
    return length * Math.random() | 0
}

function getRandomImage () {
    return imageLinks[randomIndex(imageLinks.length)]
}

console.log(getRandomImage())

module.exports = getRandomImage
