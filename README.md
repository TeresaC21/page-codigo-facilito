# WEB CÓDIGO FÁCILITO :)

Colaboración y reto junto a [Código Fácilito](https://codigofacilito.com/) Proyecto basado en prototipo de diseño proporcionado por códigofacilito.com se puede visualizar aquí [Web Page](https://web-codigo-facilito.netlify.app/).

## Contenido 

:heart_eyes:

- [Documentación](#documentación)
- [Inicialización de proyecto](#iniciación-de-proyecto)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Sobre el proyecto](#sobre-el-proyecto)
- [Interacción e integración de eventos](#Interaccion-e-integracion-de-eventos)
- [Recomendaciones](#recomendaciones)

## Documentación 

:closed_book:

Pensado en implementar con pre procesador SASS con extensión usada SCSS y utilidades para una mejora en la estructura del proyecto.

#### Nesting (Anidado)

Una pequeña intro al trabajo en el proyecto en base que en HTML cada elemento tiene una jerarquía que hace que los elementos esten ordenados, como ejemplo el menú de navegación que tiene una jerarquía nav > ul > li > a o en este caso un  ejemplo práctico del proyecto:

```css
header {
  @extend .width-full;
  background-color: $pink;
  height: 90vh;
  .box-header {
    @extend .padding-none;
    .logo {
      height: 50px;
      width: 300px;
    }
  }
}
```

#### Importado 

Importaciones que se manejan en el proyecto de archivos SASS esto nos ayuda a identificar fácilmente, como donde se encuentra nuestras secciones de la página así como **header** dentro de **main** las distintas secciones el cual es nombrado seguido del nombre de su sección y así también se nombra para nuestro grid, flex y archivo para componentes y clases que se utilizan continuamente como display inline block, margin, border, witdth, font, position, shadow, etc.

```css

@import 'animations';
@import 'colors';
@import 'common';
@import 'components';
@import 'flex';
@import 'grid';
@import 'header';
@import 'main_course';
@import 'main_services';
@import 'main_tutors';
@import 'variable';

```
#### Operador '&' 'extend' :ntd-child(n)' 

:pushpin:

Alguna de las particularidades que se usa en dicho proyecto, 
- :ntd-child(n) nos ayuda mucho para no duplicar clases o código y así solo aplicar dentro de un grupo de elementos HTML solo a los elementos que necesitamos dar las propiedades.
- El operador AMPERSAND es una característica muy usada en SCSS ó mayormente dicho SASS
- Esta es una propiedad muy buena de SCSS que nos ayuda a reciclar mucho de nuestras clases ya que podemos extender dentro de otras clases llamando nuestro extend en distintos elementos que cubre las mismas necesidades

## Iniciación de Proyecto 

:pencil2:

Instalación SASS con node-sass [Node SASS](https://www.npmjs.com/package/node-sass).

Install

```bash
npm install node-sass

```

Para compilar con SASS puedes hacerlo con el sigueinte comando para estar observando de manera actual cada cambio en tu compilado css


```bash
sass --watch scss/styles.scss:css/styles.css

```

[SASS](https://sass-guidelin.es/)
 [Aprender más](https://git.inegi.org.mx/MARCO.IBARRA/sass-boilerplate/blob/master/README.md) más detalle sobre la funcionalidad de sass para compilar tú css y más.



## Estructura del proyecto 

:pushpin:

Para este proyecto se útilizo una estructura en distintos archivos como los assets, archivos para nuestro CSS y una estructura con sus particularedades en HTML para tener una mejor visibilidad ante los buscadores de google tales como etiquetas header main section, con la respetando lo más posible la nomenclatura y nombramiento de los elementos de nuestro HTML.

![Alt Estructura de proyecto](https://github.com/TeresaC21/page-codigo-facilito/blob/master/images_readme/estructura.png)

## Sobre el proyecto 

:eyes:

La idea sobre aprender y mejorar las técnicas y reforzamiento, donde se implementa con bases más solidas sobre el conocimiento del diseño en Figma proporcionado por el team, así como reforzar las distintas tecnologias a utilir como CSS, SASS, HTML. 
En el código se buscó la parte de ordenar de la mejor manera, como reutilización de clases, orden de archivos, orden alfábetico para una mejor utilidad a nuestro código y considerando la mejora para distita resolución y dispositivo, lo mejor posible. 
Dar un aspecto un tanto sutíl, limpio pero llamativo con animaciones en algunos hover.

### Visualmente:

![Alt Estructura de proyecto](https://github.com/TeresaC21/page-codigo-facilito/blob/master/images_readme/page-learning.png)


![Alt Estructura de proyecto](https://github.com/TeresaC21/page-codigo-facilito/blob/master/images_readme/phone.JPEG)


## Integración de eventos e interacción 
:zap:

Se integra en el proyecto interactividad con funcionalidad javascript dando un toque con las animaciones y estilos. Algunos ejemplos visualmente en código.

-  Spinner, desde la creación de 0 de un diseño en CSS y carga de archivos con la experiencia de un diseño animado, el cual se ejecuta el evento onload de JavaScript, lo que nos permite que la carga de archivos sea completado en segundos y nos permite manipular en el DOM para mostrar y ocultar cuando es cargada por completo.

Una parte como ejemplo de los archivos:

[Aprender más sobre su sintaxis, ejemplos y documentación](https://developer.mozilla.org/es/docs/Web/API/GlobalEventHandlers/onload)


```JavaScript
let containerSpinner = document.querySelector("#container-spinner");

window.onload = () => {
  containerSpinner.style.visibility = "hidden";
  containerSpinner.style.opacity = "0";
};
```

```CSS
/* _spinner.scss */
container-spinner {
    @extend .height-full;
    @extend .width-full;
    @extend .position-fixed;
    #spinner {
        @extend .position-absolute;
        @extend .turn-animation;
        border-radius: 50%;
        border-style: groove;
        border-top-color: $pink;
        bottom: 0;
        left: 0;
    }
}
```

- Entrada para mostrar animación con función sobre header que nos permite al manipular el DOM así como nuestros elementos HTML en JavaScript y así también poder mostrar u ocultar en dicha funcionalidad. Principalmente que nos permite establecer un lapso de tiempo que establecemos como segundo parametro de este método setTimeout de window se ejecuta en la función, y también así controlarlo mediante el maravilloso DOM.

[Aprender más sobre su sintaxis, ejemplos y documentación](https://developer.mozilla.org/es/docs/Web/API/WindowTimers/setTimeout)

```JavaScript
  setTimeout(() => {
        moveImage.style.visibility = "visible";
        moveImage.classList.add("move-right-to-left");
  }, 2000);
```

- Creación y manipulación de Modal, añadido un botón entre sección servicios y cursos para así indicar mediante la escucha del evento click la indicación de abrir, cerrar modal, así como sus estilos.


[Aprender más sobre su sintaxis, ejemplos y documentación](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)


```JavaScript
const isOpenModal = (e) => {
  e.preventDefault();

  modalContainer.style.opacity = "1";
  modalContainer.style.visibility = "visible";
  modal.classList.toggle("modal-closed");
};

```

- Scroll con animación en la sección de servicios, iterando, animación y estilos en cada uno de los elementos y condición para mostrar la interactividad de dicha sección.

Como ejemplo un fragmento de esté evento de javascript.

```JavaScript
document.addEventListener("scroll", () => {
  if (calcDistanceTop <= calcScreenHeight) {
      moveScrollIndex.classList.add('move-left-to-right');
    }
}
```

## Recomendaciones 

:ok_hand:

Happy hack coding muy importante es algunos pro tips sobre el código en SASS en distintos cursos y blog, algo que me gustó mucho es el uso de las extensiones de clase y colores.

```css
.header {
    .init {
        @extend .pull-right;
    }
}
```

```css
.btn {
  display: inline-block;
  padding: 5px 8px;
 &:hover {
    background-color: #fff; // White
  }
}

```

```css
.card-message:first-child {
  margin: 13rem 0 0 -13rem;
  width: 270px;
}

```

```css
.btn {
    @extend .text-card-message;
    @extend .display-inline-block;
    @exted .font-small
}

```
Continuación con el aprendizaje y mejora consstantemente.

## Contribución 

:green_heart:

- [Github Código Fácilito](https://github.com/codigofacilito). :star2:
- [Teresa Carbajal](https://github.com/TeresaC21). :star2: