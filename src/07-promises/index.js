import { getHeroeById } from "../06-import-export/index"

export const getHeroeByIdAsync = (id) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const heroe = getHeroeById(id)

      if (heroe) resolve(heroe) 
      else reject("ID de heroe no existe")
    }, 1000)

  })

}

// getHeroeByIdAsync(6)
//   .then(heroe => console.log(heroe))
//   .catch(err => console.error(err))

