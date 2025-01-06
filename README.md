# Summary/Podsumowanie
Projekt utworzony w celu nauki Angulara. W tym projekcie zostały wykorzystane komponenty,
modele i serwisy z wykorzystaniem m.in.: dekoratorów, EventEmitter'a, sygnalistów, dyrektyw ngModelu.

# Essentials

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Command used by me
### angular/cli installation
npm install –g @angular/cli
- `npm -g node package manager`
- `install -g`  - global installation
### create project
`ng new project_name`
`ng new my-first-app --no-strict`
### run project
- `ng serve`
### create component
- `ng generate component component_name`
- `ng g c component_name` - short version of above
-  `ng g c cockpit --skip-tests` -- without spec file = without test

### bootstrap installation
- first run: `npm i bootstrap@3`
- then we have to update angular.json with: `"node_modules/bootstrap/dist/css/bootstrap.min.css"`
