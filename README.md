# Angular_Framework

<i>
<b>Angular</b> is a JavaScript Framework which allows you to create reactive single page applications(SPA).

#### Angular Versions
<h5>AngularJS(Angular 1)  ----->  Angular 2 ----> Angular 4 and so on...</br>
(was completely rewritten) | Angular 3 was missed | Small, incremental and backward compatible changes
</h5>

#### Angular CLI
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
<h5>The <b>index.html</`b> is only the file that gets loaded but it can have the multiple components which are added in index.html as a tag(like <b><app-root></app-root></b>). The component ts file have a <b>@Component</b> decorator in which we have <b>'app-root'</b> selector which is used in index.html. In the same decorator, we define the template and CSS for the component. The Angular will make JS Bundles and includes those in index.html file. The <b>main.ts</b> file bootstrap the Modules. In app.module.ts, AppComponent is bootstrapped and in this way all a single <b>main.js</b> is bundled and injected in the index.html that is served.
</h5>



</i>