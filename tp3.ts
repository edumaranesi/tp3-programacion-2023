//ejercicio 2 Crear una clase y una interfaz para representar una lista de tareas 
crea una clase llamada ListaTareas que tenga un arreglo privado de tareas (tareas) y los siguientes métodos:
agregarTarea(tarea: Tarea): void: Agrega una nueva tarea al arreglo tareas.
marcarTareaCompleta(id: number): void: Marca una tarea como completada, buscándola por su id y actualizando el valor de la propiedad completada a true.
listarTareas(): void: Muestra por consola la lista de tareas, incluyendo su id, descripción y estado de completado//

class Tarea {
  constructor(id, descripcion, tareaCompletada = false) {
    this.id = id;
    this.descripcion = descripcion;
    this.tareaCompletada = tareaCompletada;
  }
}

class ListaTareas {
  constructor() {
    this.tareas = [];
  }
  agregarTarea(tarea) {
    this.tareas.push(tarea);
  }
  marcarTareaCompleta(id) {
    for (let tarea of this.tareas) {
      if (tarea.id === id) {
        tarea.tareaCompletada = true;
        return;
      }
    }
    console.log("No se encontró ninguna tarea con el ID especificado.");
  }
  listarTareas() {
    for (let tarea of this.tareas) {
      let completado = tarea.tareaCompletada ? "Completada" : "Pendiente";
      console.log(`ID: ${tarea.id} - Descripción: ${tarea.descripcion} - Estado: ${completado}`);
    }
  }
}

let lista_tareas = new ListaTareas();

let tarea1 = new Tarea(1, "Completar informe");
let tarea2 = new Tarea(2, "Hacer ejercicio");
lista_tareas.agregarTarea(tarea1);
lista_tareas.agregarTarea(tarea2);

lista_tareas.marcarTareaCompleta(2);

lista_tareas.listarTareas();

