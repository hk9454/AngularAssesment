<------------Service---------->
It is a class with focusses well defined purpose
It should some specific task
Typically ,It provides data to component classes
It is also responsible for making the rest call.
It is decoated with @injectable Decorator.
It can be reused among multple components.
To use it in a component ,It is injected using dependency injection(DI)  .
Following command is used to create a Service:
ng generate service "nameoftheservice".

