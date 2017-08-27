const test = require("tape");
const catCreator = require("./modules/cats");
const createFunnyName = require("./modules/cats/modules/createFunnyName");

test("Cat name should be funny", t => {
  t.equal(
    createFunnyName("Zelda"),
    "^^Zelda^^",
    "Should contain ^^ before and after the name"
  );
  t.end();
});
