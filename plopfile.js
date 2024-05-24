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
          type: "add",
          path: "lib/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
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
  
  