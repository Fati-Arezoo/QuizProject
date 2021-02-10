import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Post } from './post';

export const Posts: Post[] = [
  {
    id: 1,
    title: 'Angular CLi',
    image: './assets/posts/one.jfif',
    content:
      'The Angular CLI helps us to quickly create an Angular application with all the configuration files and packages in one single command. It also helps us to add features (components, directives, services, etc) to existing Angular applications.',
    contentOne:
      'The Angular CLI creates the Angular Application and uses Typescript, Webpack ( for Module bundling), Karma ( for unit testing), Protractor ( for an end to end testing).Before starting with Angular, you need to set up your developer environment and install the required tools. Before going further install "Visual Studio Code" and "NPM Package Manager"',
    description: 'Installning Angular CLI',
    text:
      'The first step is to install the Angular CLI. We use the npm install command in CMD or Visual Studio codes terminal.',
    img: './assets/angular/angular.png',
  },
  {
    id: 2,
    title: 'Component',
    image: './assets/posts/two.jfif',
    content:
      'Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components. Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template. ',
    contentOne:
      "A component must belong to an NgModule in order for it to be available to another component or application. To make it a member of an NgModule, list it in the declarations field of the NgModule metadata.Note that, in addition to these options for configuring a directive, you can control a component's runtime behavior by implementing life-cycle hook How to create a Component",
    description: 'How to create a component',
    text:
      'For create a new component,we use the ng genered componenet "component name" in Visual Studio codes terminal. We can write short commando like ng g c components name',
    img: './assets/angular/angularComponent.png',
  },
  {
    id: 3,
    title: 'Directive',
    image: './assets/posts/three.jfif',
    content:
      'A Directive modifies the DOM to change apperance, behavior or layout of DOM elements. Directives are one of the core building blocks Angular uses to build applications. In fact, Angular components are in large part directives with templates.',
    contentOne:
      'There are three main types of directives in Angular: "component directives","Structura directives" basically deals with manipulating the dom elements. Structural directives have a * sign before the directive. For example, *ngIf and *ngFor and "Attribute Directives" . ',
    description: '',
    text: '',
    img: './assets/angular/direactiv.png',
  },
  {
    id: 4,
    title: 'Databinding',
    image: './assets/posts/four.jfif',
    description: '',
    content:
      'Data binding is a core concept in Angular and allows to define communication between a component and the DOM, making it very easy to define interactive applications without worrying about pushing and pulling data. ',
    contentOne:
      'There are four forms of data binding and they differ in the way the data is flowing',
    text: '',
    img: './assets/angular/dataDinding.png',
  },
  {
    id: 5,
    title: 'Service',
    image: './assets/posts/five.jpg',
    content:
      "Service is a broad category encompassing any value, function, or feature that an app needs. A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well.Angular distinguishes components from services to increase modularity and reusability. By separating a component's view-related functionality from other kinds of processing, you can make your component classes lean and efficient.",
    contentOne:
      "Ideally, a component's job is to enable the user experience and nothing more. A component should present properties and methods for data binding, in order to mediate between the view (rendered by the template) and the application logic (which often includes some notion of a model).",
    text: '',
    description:
      " For create a service,we type the following command: 'ng generate service service'name' in Visual Studio codes terminal.",

    img: './assets/angular/service.png',
  },

  {
    id: 6,
    title: 'Routing',
    image: './assets/posts/six.jfif',
    description: '',
    content:
      "Routing in Angular helps us navigate from one view to another as users perform tasks in web apps. In this guide you will learn about Angular router's primary features. Angular router can interpret a browser URL as an instruction to navigate to a client-generated view.",

    contentOne:
      ' It can pass optional parameters along to the supporting view component that help it decide what specific content to present. You can bind the router to links on a page, and it will navigate to the appropriate application view when the user clicks a link.',
    text: '',
    img: './assets/angular/routerpath.jpg',
  },
];
