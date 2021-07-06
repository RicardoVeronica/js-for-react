export const getImage = async() => {
  try {
    const apiKey = ''

    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    )
    const data = await response.json()

    const img = data.data.images.original.url

    // const image = document.createElement('img')
    // image.src = img
    // document.body.append(image)

    return img

  } catch (err) {
    // console.log(err);
    return err
  }

}

getImage()
