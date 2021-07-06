describe("Test in demo.test.js", () => {

  test("Two strings must be equals", () => {
    const message = "hello world"
    
    const message2 = `hello world`

    expect(message).toBe(message2)

  })

})
