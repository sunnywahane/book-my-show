const { MedlyReactApp } = require("@medlypharmacy/medly-projen");
const project = new MedlyReactApp({
  defaultReleaseBranch: "main",
  devDeps: ["@medlypharmacy/medly-projen"],
  name: "book-my-show-app",

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();