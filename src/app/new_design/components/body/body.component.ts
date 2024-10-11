import { Component, Input } from "@angular/core";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TaskService } from "../../services/task.service";
import { Task } from "../../services/interfaces";
import { TaskComponent } from "../task/task.component";

@Component({
  standalone: true,
  selector: 'body-component',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
  imports: [CarouselModule, ButtonModule, TaskComponent]
})
export class BodyComponent{

  constructor( private taskService: TaskService ){}

  ngOnInit() {
    this.taskService.click$.subscribe(() => {
      // alert('¡Hermano 1 fue clicado!');
      this.fetchData()
    });
  }


  public List: Task[] = [{
    id: 0,
    titulo: 'Prove Task',
    descripcion: 'Here a description of the task to do',
    estado: 'unsettled',
    prioridad: 'alta',
    asignadaA: 'Unasigned',
    etiquetas: ['tag1', 'tag2']
}]

  fetchData(): Task[]{
      return this.List = this.taskService.getTaskList()
  }


  // public productos: Producto[] = [
  //   {
  //       titulo: "Producto 1",
  //       precio: 29.99,
  //       descripcion: "Descripción del producto 1"
  //   },
  //   {
  //       titulo: "Producto 2",
  //       precio: 49.99,
  //       descripcion: "Descripción del producto 2"
  //   },
  //   {
  //       titulo: "Producto 3",
  //       precio: 19.99,
  //       descripcion: "Descripción del producto 3"
  //   },
  //   {
  //     titulo: "Producto 4",
  //     precio: 29.99,
  //     descripcion: "Descripción del producto 4"
  //   },
  //   {
  //       titulo: "Producto 5",
  //       precio: 49.99,
  //       descripcion: "Descripción del producto 5"
  //   },
  //   {
  //       titulo: "Producto 6",
  //       precio: 19.99,
  //       descripcion: "Descripción del producto 6"
  //   },
  // ];

}


export interface Producto {
  titulo: string;
  precio: number;
  descripcion: string;
}
