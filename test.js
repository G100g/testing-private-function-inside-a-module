const test = require("tape");
const catCreator = require("./modules/cats");
const createFunnyName = require("./modules/cats/modules/createFunnyName");

const name = "Zelda";

test("Should return an object", t => {
  t.equal(typeof catCreator.createCat(name), "object");
  t.end();
});

test("Cat name should be funny", t => {
  const result = createFunnyName(name);

  t.equal(result, `^^${name}^^`, "Should contain ^^ before and after the name");
  t.ok(result.indexOf(name) === 2, "Should contain the name");
  t.end();
});
