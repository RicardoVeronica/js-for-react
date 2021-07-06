const apiKey = ''

const url = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
)

url
  .then(response => response.json())
  .then(response => { 
    const { url } = response.data.images.original
    const img = document.createElement('img')
    img.src = url

    document.body.append( img )
  })
  .catch(console.warn)
