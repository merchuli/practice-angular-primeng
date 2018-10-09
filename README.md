# AutoComplete

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.



## Pre-setiing when using PrimeNg - AutoComplete
###Download PrimeNg

`npm install primeng —save`
`npm install primeicons —save`



###PrimgNg Style

Add Below into `.angular-cli.json`

```json
"styles": [

     "../node_modules/primeicons/primeicons.css",

     "../node_modules/primeng/resources/themes/nova-light/theme.css",

     "../node_modules/primeng/resources/primeng.min.css"

 ]
```



###Add required module to app.module.ts

1. you need to add angular forms first

- `import { FormsModule }    from '@angular/forms'`

2.  animation

- `import { BrowserAnimationsModule } from '@angular/platform-browser/animations'`

3. whatever module you need

- `import { AutoCompleteModule } from 'primeng/autocomplete'`



## Json server

###Install Json Server

`npm install -g json-server`

1. cd MY_PROJECT
2. mkdir json-server
3. cd json-server
4. json-server --watch db.json

Refer to https://oomusou.io/json-server/intro/ and https://github.com/typicode/json-server





## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
