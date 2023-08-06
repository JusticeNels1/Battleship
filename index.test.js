const createShip = require("./index")

// test("lit",() => {
//     expect(0).toBe(0)
// })

test("logs hit to ship", () => {
    expect(createShip().hit()).toBe({length: undefined, times_hit: 0, sunk: false})
})

console.log(createShip)