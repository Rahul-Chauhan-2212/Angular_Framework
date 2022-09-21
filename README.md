# Angular_Framework

<i>
<a href="https://angular.io/"><b>Angular</b></a> is a JavaScript application design framework and development platform for creating efficient and sophisticated reactive single-page apps.
</br>
<a href="https://angular.io/docs"><b>Angular Official Documentation</b></a>

#### Angular Versions

<h5>AngularJS(Angular 1)  ----->  Angular 2 ----> Angular 4 and so on...</br>
(was completely rewritten) | Angular 3 was missed | Small, incremental and backward compatible changes
</h5>

### Setting up the local environment and workspace

<a href="https://angular.io/guide/setup-local">Local Setup</a>

##### Angular CLI

A command line interface for Angular

<h5>npm install -g @angular/cli</h5>

###### Create New Angular Project

<h5>ng new project-name --no-strict</h5>

###### Server the Project

<h5>ng serve</h5>
<h6>http://localhost:4200/</h6>

###### Install Bootstap locally in the project

<h6>npm install --save bootstrap@3</h6>

### How Angular Works

<h5>The <i>index.html</i> is only the file that gets loaded but it can have the multiple components which are added in index.html as a tag(like <i><app-root></app-root></i>). The component ts file have a <i>@Component</i> decorator in which we have <i>'app-root'</i> selector which is used in index.html. In the same decorator, we define the template and CSS for the component. The Angular will make JS Bundles and includes those in index.html file. The <i>main.ts</i> file bootstrap the Modules. In app.module.ts, AppComponent is bootstrapped and in this way all a single <i>main.js</i> is bundled and injected in the index.html that is served.
</h5>

### Creating a New Component

<a href="https://angular.io/guide/component-overview"><b>Components</b></a> are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components. Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template.
</br>

<ol>
<li><h5>Manually</h5>
We need component.ts file and inside that we have to define the class and decorate it with @Component and use selector and templateUrl tag to define the tag and html. Then in the app.component.html we can use the selector tag for this component. Also we need to import the component in app.module.ts.
</li>
<li><h5>Using CLI</h5>
<ul>
<li>ng generate component componentName</li>
<li>ng g c componentName</li>
</ul>
</li>
</ol>
Note: ng g c componentName will create component inside app folder by default. if you want to create component inside any other folder then use <b>ng g c folderpath/componentName</b>.</br>
Note: <b>ng g c componentName --skip-tests</b> used to not create the testing ts file</br>

### Data Binding

In an Angular template, a <a href="https://angular.io/guide/binding-overview">binding</a> creates a live connection between a part of the UI created from a template (a DOM element, directive, or component) and the model (the component instance to which the template belongs). This connection can be used to synchronize the view with the model, to notify the model when an event or user action takes place in the view, or both.</br>

Examples of binding include:

<ol>
<li>text(string) interpolation
<h6>{{something which return string or can be converted to string}}</h6>
</li>
<li>property binding
<h6>[propery]="field"</h6>
</li>
<li>event binding
<h6>(event)="method()"</h6>
</li>
<li>two-way binding
<h6>[(ngModel)]="field"</h6>
</li>
</ol>

### Directives

<a href="https://angular.io/guide/built-in-directives">Directives</a> are classes that add additional behavior to elements in your Angular applications. Use Angular's built-in directives to manage forms, lists, styles, and what users see.

<h5>Tyeps of Directives</h5>
<ol>
<li>Components</li>
<li>Built in Directives</li>
<li>Attribute Directives</li>
<li>Structural Directives</li>
</ol>

<h5>Built in Directives</h5>
<ol>
<li>*ngIf="condition returning true or false"</li>
<li>[ngStyle]="JS Object for Styling"</li>
<li>[ngClass]="JS Object for Styling classes"</li>
<li>*ngFor="let variable of collection"</li>
</ol>

</i>
