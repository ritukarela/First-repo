const getAboutUsLink = require("./index");
test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});
test("Returns about-us for spanish language", () => {
expect(getAboutUsLink("es-ES")).toBe("/acerca-de");
});
test("Returns empty string for other language", () => {
    expect(getAboutUsLink("ehnu")).toBe("");
    });