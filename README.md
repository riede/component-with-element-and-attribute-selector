This is a minial reproduction of an behaviour that only occurs in tests if a component has a [selector](https://angular.io/api/core/Directive#selector) consiting of an element and an attritute part (e.g. app-test[inputAttribute] where `inputAttribute` is an component's attribute). The Implementation can be found [here](https://github.com/riede/component-with-element-and-attribute-selector/blob/master/src/app/test/test.component.spec.ts)

One jasmine test of the component `TestComponent` fails because the input will be set to an empty string allthough a value das set before.

Run `ng test` to start the tests or run `ng serve -o` to check the behaviour in a running Angular Application.