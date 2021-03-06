# DOM-manipulation

## Lectura de Nodos

Es posible leer los nodos del DOM mediante:

**parent.getElementById(‘id’)**
Retorna un elemento a través de su id.

**parent.getElementsByClassName(‘class’)**
Retorna un arreglo con todos los elementos hijos con esa clase.

**parent.getElementsByTagName(‘div’)**
Retorna lista o “array list” con todos los elementos que tengan esa etiqueta, ejemplo todos los divs.

**parent.querySelector()**
Permite buscar de 3 formas:

1. Por id **(’#id’)**
2. Clase **(’.class’)**
3. TagName **(‘div’)**

 Retorna, el primer elemento que contenga el valor que se le paso

**parent.querySelectorAll()**
Retorna una array list con todos los elementos que tengan ese selector __*(id, class o tagName)*__

**Nodelists 🆚 Array**
La principal diferencia es que el nodelist carece de metodos que el array si posee como:**filter, map y reduce.** Tiene algunas propiedades y metodos que el array si tiene como

- Length
- ForEach
Podremos convertir un nodeList en un array de esta forma

`const nodeListArray = […nodeList]`

__*Siempre que tengamos un nodelist es recomendable pasarlo a array, para tener mas métodos y mejor optimización con la cual cuentan los array y los nodelist no.*__
