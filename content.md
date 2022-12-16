## Patrones de Diseño
Elementos reusables de diseño para resolver problemas comunes de sistemas.
---
## Conceptos relacionados

+ Herencia
+ Polimorfismo
+ Funciones de orden superior
+ SOLID

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
## Funciones de orden superior

+ Funciones que toman otras funciones como parametro.
+ Funciones que devuelven funciones como resultado.

---
  ## SOLID

  + Single Responsibility
  + Open Closed
  + Liskov substitution
  + Interface segregation
  + Dependency Inversion
---
## Patrones de Diseño

Soluciones a problemas comunes que aparecen de forma repetida

Elementos reusables de diseño.

---
## Patrones - Clasificación GoF

  [Libro GoF](https://www.amazon.com/-/es/Gamma-Erich-ebook/dp/B000SEIBB8)

  + Creacion
  + Estructurales
  + Comportamiento
---
## Creacion - Factory Method

  Permite tener una forma unificada y separada para crear objetos sin especificar directamente que clase se va a usar.

---
## Creacion - Singleton

  Es una clase que tiene una unica instancia.
  Se usa para modelar una clase sistema o un lugar centralizado de información.
  Tambien para no desperdiciar espacio.
---
## Estructurales - Adapter

Se utiliza cuando tenemos que intercambiar entre dos clases que hacen lo mismo pero difieren en la interfaz.
Tipicamente usado con librerias externas
---
## Estructurales - Composite

Generalmente relacionado a una estructura de arbol con componentes y compuestos
Cada elemento individual tiene la misma interfaz que los agregados para algunas acciones
  El agregado ademas permite agregar y eliminar elementos

---
## Composite - Ejemplos

  + Elementos del DOM
  + Arbol de componentes React / Angular
  + Arbol de componentes de cualquier UI

---
## Comportamiento - Strategy

Permite modelar diferentes comportamientos alternativos o variantes en un proceso
  Generalmente la stragy no tiene un estado y puede ser singleton

---
## Strategy  - ejemplo

[Person Search List](https://dev.azure.com/sancristobalCTD/EdgETeam/_git/Portal.FE.Home?path=%2Flibs%2Fpas-common-ui%2Fsrc%2Flib%2Fcomponents%2Fperson-search-list%2Fperson-search-list.component.ts&_a=contents&version=GBmaster)
[Person Search List](https://dev.azure.com/sancristobalCTD/EdgETeam/_git/Portal.FE.Home?path=%2Flibs%2Fpas-common-ui%2Fsrc%2Flib%2Fcomponents%2Fperson-search-list%2Fperson-search-list.component.ts&_a=contents&version=GBmaster)

---
## Comportamiento - NullObject

Representar un objeto nulo con una clase en vez de con null o undefined
Permite darle un tratamiento mediante polimorfismo al caso del objeto nulo para un dominio y evitar la proliferacion de condicionales

---
## Comportamiento - State

Relacionado con una máquina de estados
Permite modificar el comportamiento de un objeto de forma dinamica de acuerdo a su estado interno

---
## Comportamiento - Chain of responsibility

Una secuencia de objetos tratan de manejar una solicitud.
Permite definir con flexibilidad una secuenta de comportamientos o comporobaciones mediante una cadena

---
## Chain of responsibility - Ejemplo

+ HttpInteceptors de angular
+ Handlers de express
+ Pipe de un observable
+ Bubbling de eventos en el DOM
+ [Asegurados](https://dev.azure.com/sancristobalCTD/EdgETeam/_git/portalasegurado-web-autogestion?path=/src/app/shared/models/claim-group/abstract-claim-group-handler.ts&_a=contents&version=GBmaster)
