const packageJson = require("../../package.json");

describe("check detox installation in package.json", () => {
  it.only("should find detox in the package.json", () => {
    expect(Object.keys(packageJson)).toContain("detox");
  });

  it.only("should find the script e2e in the package.json", () => {
    expect(Object.keys(packageJson.scripts)).toContain("e2e");
    expect(packageJson.scripts.e2e).toEqual(
      "RN_SRC_EXT=e2e.js react-native start"
    );
  });
});
