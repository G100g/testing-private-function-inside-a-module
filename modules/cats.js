function createFunnyName(name) {
  return `^^${name}^^`;
}

module.exports = {
  createCat(name) {
    return {
      name: name,
      funnyName: createFunnyName(name)
    };
  },
  __private__: {
    createFunnyName
  }
};
