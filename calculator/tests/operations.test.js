const { add, substract, divide, multiply} = require("../js/operations");


test("add: 2+2=4", () => {
    expect(add(2, 2)).toBe(4);
});

test("substract: 2-6=-4", () => {
    expect(substract(2,6)).toBe(-4);
})

test("multiply: 15*2=30", () => {
    expect(multiply(15, 2)).toBe(30);
})

test("divide: 25/5", () => {
    expect(divide(25, 5)).toBe(5);
});
