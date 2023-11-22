const {getadd,getsub,getmultiply,getdivide}= require("./calculator");

test("Returns sum for two numbers", () => 
{
    expect(getadd(5,5)).toBe(10);
});

test("Returns subtraction for two numbers", () => 
{
    expect(getsub(7,5)).toBe(2);
});

test("Returns multiply for two numbers", () => 
{
    expect(getmultiply(5,5)).toBe(25);
});

test("Returns division for two numbers", () => {
    expect(getdivide(10,5)).toBe(2);
});
