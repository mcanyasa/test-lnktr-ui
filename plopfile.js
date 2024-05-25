module.exports = (plop) => {
  // plop generator code
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        path: "./lib/index.ts",
        pattern: /(\/\* IMPORT \*\/)/g,
        template: "import {{name}} from './components/{{name}}';\n$1",
        type: "modify",
      },
      {
        path: "./lib/index.ts",
        pattern: /(\/\* EXPORT \*\/)/g,
        template: "\t{{name}},\n$1",
        type: "modify",
      },
      {
        type: "add",
        path: "lib/components/{{pascalCase name}}/index.ts",
        templateFile: "generators/Component/src/index.ts.hbs",
      },
      {
        type: "add",
        path: "lib/components/{{pascalCase name}}/src/{{pascalCase name}}.tsx",
        templateFile: "generators/Component/src/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "lib/components/{{pascalCase name}}/stories/{{pascalCase name}}.stories.tsx",
        templateFile: "generators/Component/src/stories/Stories.tsx.hbs",
      },
      {
        type: "add",
        path: "lib/components/{{pascalCase name}}/__tests__/{{pascalCase name}}.test.tsx",
        templateFile: "generators/Component/src/__tests__/Test.tsx.hbs",
      },
    ],
  });
};
