import { Component, Input } from "@angular/core";
import { Task } from "../../services/interfaces";
import { CommonModule } from "@angular/common";

@Component({
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  selector: 'task-component',
  standalone: true,
  imports: [ CommonModule ]

})
export class TaskComponent{

  @Input()
  public taskList: Task[] = [{
    id: 0,
    titulo: "",
    descripcion: '',
    estado: "unsettled",
    prioridad: "alta"
  }]

}
