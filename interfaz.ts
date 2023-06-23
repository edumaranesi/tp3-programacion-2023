interface lista {
    completada:Boolean[];
    id:number[];
}
class tareas implements lista {
    completada: Boolean[];
    id: number[];
    private listaTareas:string[]
    constructor(){
        this.listaTareas = [];
        this.completada=[];
        this.id=[];
    }
    Agregar(tarea:string,ids:number): void{
        this.listaTareas.push(tarea);
        this.id.push(ids);
        this.completada.push(false);
    }
    CompletarTarea(id:number):void{
        let indice = this.id.indexOf(id);
        this.completada[indice] = true;
    }
    mostraTareas(): void{
        for (let i in this.listaTareas)
            console.info( 'id:'+this.id[i]+' la tareas es: '+this.listaTareas[i]+' el valor es: '+this.completada[i])
    }

}
let tarea = new tareas()

tarea.Agregar('sacar la basura', 10)
tarea.Agregar('limpiar los pisos ', 11)
tarea.Agregar('pasear a los perros', 12)

tarea.CompletarTarea(10)

tarea.mostraTareas()
