const test = require("tape");
const catCreator = require("./modules/cats");

test("Cat name should be funny",t => {
  t.equal(catCreator.createCat("Zelda").funnyName, "^^Zelda^^", 'Should contain ^^ before and after the name');
  t.end();
});
