const first_name = 'Ricardo'
const last_name = 'Veronica'

const full_name = `${first_name} ${last_name}`

const getGrettings = function(name = "Leon O") {
  return `Hi ${name}`
}

getGrettings(full_name)

export default getGrettings
