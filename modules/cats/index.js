const createFunnyName = require('./modules/createFunnyName');

module.exports = {
  createCat(name) {
    return {
      name: name,
      funnyName: createFunnyName(name)
    };
  }
};
