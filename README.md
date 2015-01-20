Comparación de algoritmos de ordenamiento
===

Aplicación web en angular que realiza la ejecución de diferentes algoritmos de ordenamiento con el fin de poder realizar comparaciones en los tiempos de ejecución.

Los algoritmos de ordenamiento fueron implementados en javascript basados en el pseudo-código del libro *Introducción a los algoritmos*.

El listado de los algoritmos implementados es:

 * Insertion Sort.
 * Heapinsert Sort.
 * Merge Sort.
 * Optimized Merge Sort.
 * Heap Sort.
 * Quick Sort.
 * Random Quick Sort.
 * Counting Sort.

La aplicación tiene la capacidad de generar arreglos pseudo-aleatorios mediante parámetros ingresados por el usuario, y además puede realizar la carga de archivos que contengan arreglos con la información que el usuario desee.

Probar la aplicación
---

La aplicación se encuentra desplegada en github pages y cualquier persona puede hacer uso de esta para realizas las pruebas, tener en cuenta que al ser una aplicación javascript el ordenamiento se realiza localmente, es decir que los tiempos de ejecución de cada uno de los algoritmos depende de su máquina.

[http://matematicacomputacional.github.io/](http://matematicacomputacional.github.io/)

Dependencias
---

Para poder ejecutar la aplicación de manera local se necesita la previa instalación de las siguientes aplicaciones:

* git: Para clonar el repositorio con el código fuente.
* node.js: Para correr los paquetes de dependencias y servidor de la aplicación.
* grunt: Paquete de node.js que sirve para ejecutar todas las tareas de automatización del proyecto.
* bower: Paquete de node.js que realiza la gestión de dependencias javascript para el proyecto como angular.js y underscore.js.

Código fuente
---

Para descargar el código fuente de la aplicación se debe  realizar el clon del repositorio mediante *git*, para ello ejecutar:

```shell
git clone https://github.com/Maestria-utp/sorting-algorithms-comparison.git
```

Los algoritmos se encuentra implementados en la carpeta *app/lib* y allí se encuentra cada archivo con el nombre del algoritmo que implementa.

Instalación
---

Al tener el código fuente se debe navegar en la carpeta donde se realizó el clon y ejecutar bower para instalar localmente las dependencias que requiere el proyecto para funcionar:

```shell
bower install
```

Para finalizar se ejecuta el la tarea grunt para levantar un servidor y así podamos ver la aplicación funcionando en el navegador:

```shell
grunt serve
```

Este comando deberá abrir el navegador por defecto y en [http://localhost:9000](http://localhost:9000) con la aplicación cargada.

Carga de archivos
---

La carga de archivos con arreglos se realiza mediante la segunda pestaña *Cargar arreglos*, para ello se debe tener un archivo de texto con el siguiente formato:

```json
{
  "size": 10,
  "maxNumber": 20,
  "value": [20, 6 ,4 ,7, 15, 2, 12, 10, 9, 5]
}
```

Una vez seleccionado el archivo la aplicación mostrara una vista previa siempre y cuando este no sea muy grande, luego se presiona el botón cargar y el arreglo aparecerá en la pestaña de arreglos cargados.

Funcionamiento
---

Antes de la ejecución de cualquier algoritmo se debe generar un arreglo para realizar el ordenamiento; mediante a aplicación se hace clic en la pestaña generar arreglos, y llenamos los parámetros de acuerdo con el arreglo que se desea:

 * Tamaño del arreglo: cantidad de posiciones que va a tener el arreglo generado, es prudente conocer que para arreglos muy grande la aplicación podría tardar demasiado en dar respuesta, por ejemplo un arreglo de 1 millón de posiciones mediante el algoritmo de ordenamiento por inserción puede tardar aproximadamente 10 minutos.
 * Límite superior para el arreglo: es el tope máximo el cual el algoritmo de generación va a definir su rango de funcionamiento, ejemplo, si se ingresa 10 eso quiere decir que el algoritmo para cada posición va a generar un número pseudo-aleatorio entre 0 y 10.

Una vez generado el arreglo este aparecera en el listado de arreglos de la pestaña arreglos cargados; en esta pestaña se puede ver las características de cada uno de los arreglos cargados y que están disponibles para realizar la ejecución del ordenamiento.

Para realizar la ejecución del ordenamiento en la sección de *Selección de algoritmo* por medio del menú de selección se escoge el algoritmo que realizará el ordenamiento, y posteriormente el arreglo que se quiere ordenar y se oprime  el botón ejecutar.

En la sección *Tabla de resultados* aparecerá la ejecución anterior con los diferentes datos arrojados por el sistema y con cada uno de los resultados se realiza la gráfica para realizar una comparación visual.
