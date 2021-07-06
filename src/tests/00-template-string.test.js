import getGrettings from '../00-template-string/index'

describe("tests template strings functions", () => {

  test("Should function getGrettings return 'Hi {full_name}'", () => {
    const full_name = 'Ricardo veronica' 

    const func = getGrettings(full_name)

    expect(func).toBe(`Hi ${full_name}`)

  })

  test("Should function getGrettings return 'Hi Leon O' if you don't pass params", () => {
    const func = getGrettings()

    expect(func).toBe("Hi Leon O")

  })

})
