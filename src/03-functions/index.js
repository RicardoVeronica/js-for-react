const hello = name => `Hello ${name}`

export const getUser = () => ({
  uid: 'ABCDEF',
  username: 'Ricardo',
})
  
export const activeUser = (name) => ({
  uid: "ABC123",
  username: name,
})

// const functionHello = hello('Ricardo')
// const userIsActive = activeUser("Ricardo")
