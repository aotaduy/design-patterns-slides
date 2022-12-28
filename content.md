## Patrones de Diseño

Definicion

 Elementos reusables para resolver problemas comunes de sistemas.

---
## No es un patrones de Diseño

+ Aplicacion
+ Libreria
+ Framework

---
## Conceptos relacionados

+ Herencia
+ Polimorfismo
+ Principios SOLID

---
## Herencia

+ Entre clases
+ Entre objetos
---
  ```mermaid
classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
    +String beakColor
    +swim()
    +quack()
    }
    class Fish{
    -int sizeInFeet
    -canEat()
    }
    class Zebra{
    +bool is_wild
    +run()
    }
```
---
## Herencia de objetos
```js
const parent = {
  value: 2,
  method() {
    return this.value + 1;
  }
};

console.log('parent method', parent.method()); // 3

const child = {
  __proto__: parent,
};
console.log(child.method()); // 3

child.value = 4; // assign the value 4 to the property 'value' on child.

console.log('child method', child.method()); // 5

```

---
## Polimorfismo
La capacidad de diferentes objetos a responder al mismo mensaje de diferentes formas de acuerdo a los metodos que implementan.
```js
const anArray = new Array([1, 2, '100', true, false]);
const aMap = new Map([
['home', 100],
['away', 200],
]);
const aSet = new Set([1, 2, '100', true, false]);
anArray.forEach((element) => console.log(element.toString()));
aMap.forEach((element) => console.log(element.toString()));
aSet.forEach((element) => console.log(element.toString()));
[anArray, aMap, aSet].forEach((eachCollection) =>
eachCollection.forEach((element) => console.log(element.toString()))
);
```
---
  ## SOLID

  + Single Responsibility
  + Open Closed
  + Liskov substitution
  + Interface segregation
  + Dependency Inversion

---
## Patrones - Clasificación GoF

  [Libro GoF](https://www.amazon.com/-/es/Gamma-Erich-ebook/dp/B000SEIBB8) - 
  [Refactoring guru](https://refactoring.guru/es) - [c2](https://wiki.c2.com/?DesignPatterns)

  + Creacion
  + Estructurales
  + Comportamiento
---
## Creacion - Factory Method

  Permite tener una forma unificada y separada para crear objetos sin especificar directamente que clase se va a usar.

```js
class Sector {
  openMenu() {
    this.createMenu().open();
  }
}

class GranEmpresa extends Sector {
  getMenu() {
    return new MenuEmpresa(this);
  }
}
class Individuo extends Sector {
  getMenu() {
    return new MenuIndividuo(this);
  }
}


```
---
## Creacion - Singleton

  Es una clase que tiene una unica instancia.
  Se usa para modelar una clase sistema o un lugar centralizado de información.
  Tambien para no desperdiciar espacio.
```js
class Singleton {
  static instance = new Singleton();
  static getInstance() {
    return Singleton.instance;
  }
  constructor() {
    if (Singleton.instance) {
      throw new Error("there should be only one");
    }
  }
}

```
---

## Creacionales + 

+ Abstract factory
+ Builder
+ Prototype
---

## Estructurales - Adapter

Se utiliza cuando tenemos que intercambiar entre dos clases que hacen lo mismo pero difieren en la interfaz.
Tipicamente usado con librerias externas
```ts
class CustomerListService {
  getCustomersFromBackend() {
    return fetch("http://my-api.com/customers");
  }
}
class CustomerListComponent {
  list = [];
  constructor(service: CustomerListServiceAdapter) {}
  ngOnInit() {
    this.service
            .getCustomers()
            .suscribe((customers) => (this.list = customers));
  }
}
class CustomerListServiceAdapter {
  service;
  constructor(adaptee: CustomerListService) {
    this.service = adaptee;
  }

  getCustomers() {
    return from(
            this.service.getCustomers().then((response) => response.json())
    );
  }
}

```

```ts
export class CellComponentAdapterComponent implements OnInit {
  @Input() componentClass: Type<GridCellComponent>;
  @Input() row: any;
  @Input() index: number;
  @ViewChild("viewContainerRef", { read: ViewContainerRef, static: true })
  viewContainerRef: ViewContainerRef;
  @Input() initializer: Callback<any> = () => {};

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    if (this.componentClass) {
      const componentInstance = this.componentClass;

      const componentFactory =
              this.componentFactoryResolver.resolveComponentFactory(
                      componentInstance
              );

      const componentRef: ComponentRef<any> =
              this.viewContainerRef.createComponent(componentFactory);

      const currentComponent = componentRef.instance;

      currentComponent.rowData = this.row;

      this.initializer.call(null, currentComponent);
    }
  }
}


```
---
## Estructurales - Composite

Generalmente relacionado a una estructura de arbol con componentes y compuestos
Cada elemento individual tiene la misma interfaz que los agregados para algunas acciones
  El agregado ademas permite agregar y eliminar elementos

```mermaid
  classDiagram
      Component <|-- Element
      Component <|-- Composite
      Element <-- Composite
      Component: +execute()
      Element: +execute()
      Composite: +children
  
      Composite: +execute()
      Composite : +add(Component c)
  
      Composite: +remove(Component c)
  
      Composite: +getChildren() Component
```

```ts
abstract class AbstractMenu {
  label;
  abstract render();
}
class MenuItem extends AbstractMenu {
  href: string;
  render() {
    return "<a href=${action}> ${label}</a>>";
  }
}
class Menu extends AbstractMenu {
  children: Array<AbstractMenu>;
  render() {
    const content = this.children.map((each) => each.render()).join(" ");
    return ` <div>${this.label}</div>
                 <div>${content}</div>`;
  }
  add(item) {
    this.children.push(item);
  }
}

const menu = new Menu('main')
const submenu = new Menu('modules')
submenu.add(new MenuItem('clientes'))
submenu.add(new MenuItem('proveedores'))
menu.add(new MenuItem('home'))
menu.add(submenu)

menu.render()
```
```html
<div>main</div>
<a>home</a>
<div>
    <div>modules</div>
    <div><a>clientes</a><a>proveedores</a></div>
</div>
```

---
## Composite - Ejemplos

  + Elementos del DOM
  + Arbol de componentes React / Angular
  + Arbol de componentes de cualquier UI

---
## Comportamiento - Strategy

Permite modelar diferentes comportamientos alternativos o variantes en un proceso
  Generalmente la strategy no tiene un estado y puede ser singleton
```mermaid
classDiagram
    Context <-- Client
    AbstractStrategy <|-- Strategy
    AbstractStrategy <-- Context
    AbstractStrategy : +execute(context?)    
    Strategy : +execute(context?)
    Context : +setStrategy(aStrategy)
    Context : strategy
```


```ts
const DNI_MAXLENGTH = 11;
const CUIT_MAXLENGTH = 14;

this.loadingDocumentNumber = true;
this.service.insuredSubscription = this.strategy
        .getPersons(documentNumber)
        .subscribe({
          next: (response) => this.handleSearchResult(response),

          error: () => this.handleSearchError(),
        });

export abstract class PersonSearchDocumentTypeStrategy {
  searchControl = new FormControl(null, dniValidator.bind(this));
  pipe;
  maxlength = DNI_MAXLENGTH;
  inputMaxlength = DNI_MAXLENGTH;

  constructor(protected service: AdherentsContainerService) {}

  getPersons(documentNumber: string) {
    return this.service.getPersonsByDNI(documentNumber);
  }
}

export class PersonSearchDniStrategy extends PersonSearchDocumentTypeStrategy {
  constructor(protected service: AdherentsContainerService) {
    super(service);
  }
}

export class PersonSearchCuitStrategy extends PersonSearchDocumentTypeStrategy {
  searchControl = new FormControl(null, cuitValidator.bind(this));
  pipe = new ScCuitPipe();
  maxlength = CUIT_MAXLENGTH;
  inputMaxlength = FORMATTED_CUIT_MAXLENGTH;

  constructor(protected service: AdherentsContainerService) {
    super(service);
  }

  getPersons(documentNumber: string) {
    return this.service.getPersonByCUIT(documentNumber);
  }
}

export class PersonSearchCuitCuilStrategy extends PersonSearchCuitStrategy {}

export class PersonSearchDniCuitStrategy extends PersonSearchCuitStrategy {
  searchControl = new FormControl(null, dniCuitValidator.bind(this));
  pipe = null;
  maxlength = CUIT_MAXLENGTH;
  inputMaxlength = CUIT_MAXLENGTH;

  getPersons(documentNumber: string) {
    const number = this.service.cleanDocumentNumber(documentNumber);

    if (number.length <= DNI_MAXLENGTH) {
      return this.service.getPersonsByDNI(number);
    } else {
      return this.service.getPersonByCUIT(number);
    }
  }
}


```
---
## Strategy  - ejemplo

[Person Search List](https://dev.azure.com/sancristobalCTD/EdgETeam/_git/Portal.FE.Home?path=%2Flibs%2Fpas-common-ui%2Fsrc%2Flib%2Fcomponents%2Fperson-search-list%2Fperson-search-list.component.ts&_a=contents&version=GBmaster)
[Person Search List](https://dev.azure.com/sancristobalCTD/EdgETeam/_git/Portal.FE.Home?path=%2Flibs%2Fpas-common-ui%2Fsrc%2Flib%2Fcomponents%2Fperson-search-list%2Fperson-search-list.component.ts&_a=contents&version=GBmaster)

---
## Comportamiento - NullObject

Representar un objeto nulo con una clase en vez de con null o undefined
Permite darle un tratamiento mediante polimorfismo al caso del objeto nulo para un dominio y evitar la proliferacion de condicionales


```js
class Customer {
  name
  email
  toString(){
    return 'Nombre: ' + this.name + ' Email:' + this.email
  }
  getData() {
    return fetch('http://example.com/getCustomerData/' + this.email)
  }
}

class NullCustomer {
  toString() {
    return 'No hay cliente seleccionado'
  }
  getData() {
    return Promise.resolve({})
  }
}

```
---
## Comportamiento - State

Relacionado con una máquina de estados
Permite modificar el comportamiento de un objeto de forma dinamica de acuerdo a su estado interno
```mermaid
stateDiagram-v2
    [*] --> Loading
    Loading --> Loaded
    Loading --> Error
    Error --> [*]
    Error --> Loading : retry
    Loaded --> Empty
    Empty --> [*]
    Loaded --> [*]
```
```mermaid
stateDiagram-v2
    [*] --> Pristine
    Pristine --> Touched
    Touched --> Error
    Touched --> Valid
    Valid --> Error
    Error --> Valid
    Valid --> [*]
```

```mermaid
classDiagram
    AbstractState <|-- ConcreteState1
    AbstractState <|-- ConcreteState2
    AbstractState --> Context
    AbstractState : +doAction()
    ConcreteState1 : +doAction()
    ConcreteState2 : +doAction()
    Context : +doAction1()
    Context : +doAction2()
```


```js
class UserList {
    state: AbstractState
    setState(newState){
        this.state = newState;
        this.state.activate()
  }
  loadData() {
        this.setState(new LoadingState(this))
        this.service.getData().subscribe(
            response => {this.data = response; this.setState(new LoadedState(this)) }),
            error => this.setState(new ErrorState(this))
        )
  }
}
class AbstractState {
  context;
  activate(request) {}
  loadData() {}
}

class LoadingState extends AbstractState {
  activate() {
    this.context.startAnimation();
    this.context.clearData();
  }
  loadData() {
    return; //do nothing
  }
}
class LoadedState extends AbstractState {
  activate() {
    this.context.stopAnimation();

    this.context.showData();
    if (this.context.data.isEmpty) {
        this.context.setState(new EmptyState(this.context))
    }
  }
  loadData() {
    this.context.loadData();
  }
  message() {
    return "Loaded succesfully";
  }
}

class EmptyState extends AbstractState {
  activate() {
    this.context.stopAnimation();

    this.context.showEmptyImage();
  }
  loadData() {
    this.context.loadData();
  }
  message() {
    return "Loaded succesfully but no data";
  }
}
class ErrorState extends AbstractState {
  activate() {
    this.context.stopAnimation();

    this.context.clearData();

    this.context.showErrorModal();
  }
  message() {
    return "Error";
  }
  loadData() {
    this.context.loadData();
  }
}



```

---
## Comportamiento - Chain of responsibility

Una secuencia de objetos tratan de manejar una solicitud.
Permite definir con flexibilidad una secuenta de comportamientos o comporobaciones mediante una cadena


```js
abstract class AbstractHandler {
  next: AbstractHandler;
  abstract handle(request);
  setNext(handler: AbstractHandler);
}
class LogHandler extends AbstractHandler {
  handle(request) {
    console.log(request);

    this.doSomethingAndContinue();

    return this.next.handle(request);
  }
}
class TerminalHandler extends AbstractHandler {
  handle(request) {
    return this.doSomethingAndCutTheChain();
  }
}

```
```mermaid
classDiagram
    BaseHandler <|-- ConcreteHandlers
    BaseHandler <-- Client

    BaseHandler: +setNext(BaseHandler handler)
    BaseHandler: BaseHandler next
    BaseHandler: +handle(request)
    ConcreteHandlers: +handle(request)
```

---
## Chain of responsibility - Ejemplo

+ HttpInteceptors de angular
+ Handlers de express
+ Pipe de un observable
+ Bubbling de eventos en el DOM
+ [Asegurados](https://dev.azure.com/sancristobalCTD/EdgETeam/_git/portalasegurado-web-autogestion?path=/src/app/shared/models/claim-group/abstract-claim-group-handler.ts&_a=contents&version=GBmaster)
