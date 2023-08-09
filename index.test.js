const createShip = require("./index")

const Ship = createShip(2)
test("Logs hit to ship", () => {
    Ship.hit()
    expect(Ship.times_hit).toBe(1)
})

test("Creates Ship of n Length", () => {
    console.log(Ship.length)
    expect(Ship.length).toBe(2)
})

test("Ship sinks when fully Hit",() => {
    Ship.hit()
    console.log(Ship.isSunk)
    expect(Ship.sunken).toBe(true)
})

// test("e")

// console.log(createShip)