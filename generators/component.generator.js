module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
        templateFile: 'templates/component/component-template.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase componentName}}/index.ts',
        templateFile: 'templates/component/index-template.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase componentName}}/__tests__/{{pascalCase componentName}}.spec.tsx',
        templateFile: 'templates/component/test-template.hbs',
      },
    ],
  })
}
