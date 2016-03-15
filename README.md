## Adify.JS

Adify es una librería de jQuery que permite agregar y eliminar la info de un formulario a una tabla.

Checa el demo en CodePen para ver el plugin funcionando: [Ir al demo](http://codepen.io/urielhdz/pen/VamEpB)

##Documentación

#### Inicializar el plugin

Inicializar el plugin es muy sencillo, solo hay que ejecutar la función adify sobre un formulario seleccionado con jQuery

```markup
<form data-selector="#table"></form>
<table id="#table"></table>
```

```javascript
	$("form").adify();
```

Otro ejemplo:

```markup
<form id="my-form" data-selector="table"></form>
<table></table>
```

```javascript
	$("#my-form").adify();
```

**Es muy importante agregar el atributo `data-selector` que indica el selector para encontrar la tabla a la cual se agregan los elementos.

##Contribuciones
* [Uriel Hernández](https://github.com/urielhdz/)

