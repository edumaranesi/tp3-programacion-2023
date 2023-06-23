//ejercicio 2 Crear una clase y una interfaz para representar una lista de tareas 
crea;
una;
clase;
llamada;
ListaTareas;
que;
tenga;
un;
arreglo;
privado;
de;
tareas(tareas);
y;
los;
siguientes;
métodos: agregarTarea(tarea, Tarea);
void ;
Agrega;
una;
nueva;
tarea;
al;
arreglo;
tareas.
    marcarTareaCompleta(id, number);
void ;
Marca;
una;
tarea;
como;
completada, buscándola;
por;
su;
id;
y;
actualizando;
el;
valor;
de;
la;
propiedad;
completada;
a;
true.
    listarTareas();
void ;
Muestra;
por;
consola;
la;
lista;
de;
tareas, incluyendo;
su;
id, descripción;
y;
estado;
de;
completado; //
var Tarea = /** @class */ (function () {
    function Tarea(id, descripcion, tareaCompletada) {
        if (tareaCompletada === void 0) { tareaCompletada = false; }
        this.id = id;
        this.descripcion = descripcion;
        this.tareaCompletada = tareaCompletada;
    }
    return Tarea;
}());
var ListaTareas = /** @class */ (function () {
    function ListaTareas() {
        this.tareas = [];
    }
    ListaTareas.prototype.agregarTarea = function (tarea) {
        this.tareas.push(tarea);
    };
    ListaTareas.prototype.marcarTareaCompleta = function (id) {
        for (var _i = 0, _a = this.tareas; _i < _a.length; _i++) {
            var tarea = _a[_i];
            if (tarea.id === id) {
                tarea.tareaCompletada = true;
                return;
            }
        }
        console.log("No se encontró ninguna tarea con el ID especificado.");
    };
    ListaTareas.prototype.listarTareas = function () {
        for (var _i = 0, _a = this.tareas; _i < _a.length; _i++) {
            var tarea = _a[_i];
            var completado = tarea.tareaCompletada ? "Completada" : "Pendiente";
            console.log("ID: ".concat(tarea.id, " - Descripci\u00F3n: ").concat(tarea.descripcion, " - Estado: ").concat(completado));
        }
    };
    return ListaTareas;
}());
var lista_tareas = new ListaTareas();
var tarea1 = new Tarea(1, "Completar informe");
var tarea2 = new Tarea(2, "Hacer ejercicio");
lista_tareas.agregarTarea(tarea1);
lista_tareas.agregarTarea(tarea2);
lista_tareas.marcarTareaCompleta(2);
lista_tareas.listarTareas();
