import { Injectable } from "@angular/core";
import { Task } from "./interfaces";
import { Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class TaskService{


  private clickSource = new Subject<void>();
  click$ = this.clickSource.asObservable();

  notifyClick() {
    this.clickSource.next();
  }

  private Tasks: Task[] = [
    {
        id: 1,
        titulo: 'Completar informe',
        descripcion: 'Finalizar el informe del proyecto y enviarlo al equipo.',
        estado: 'unsettled',
        prioridad: 'alta',
        asignadaA: 'Juan Pérez',
        etiquetas: ['trabajo', 'urgente']
    },
    {
        id: 2,
        titulo: 'Reunión con el equipo',
        descripcion: 'Discutir los avances del proyecto y próximos pasos.',
        estado: 'progress',
        prioridad: 'media',
        asignadaA: 'María López',
        etiquetas: ['reunión', 'trabajo']
    },
    {
        id: 3,
        titulo: 'Enviar propuesta',
        descripcion: 'Enviar la propuesta al cliente antes de la fecha límite.',
        estado: 'unsettled',
        prioridad: 'alta',
        etiquetas: ['cliente', 'propuesta']
    },
    {
        id: 4,
        titulo: 'Actualizar documentación',
        descripcion: 'Actualizar la documentación del proyecto con los últimos cambios.',
        estado: 'completed',
        prioridad: 'baja',
        asignadaA: 'Carlos Martínez',
        etiquetas: ['documentación', 'trabajo']
    },
    {
        id: 5,
        titulo: 'Revisar código',
        descripcion: 'Revisar el código de la última entrega y hacer sugerencias.',
        estado: 'unsettled',
        prioridad: 'media',
        asignadaA: 'Ana García',
        etiquetas: ['código', 'revisión']
    }
];

  getTaskList():Task[] {
    return this.Tasks
  }

  getAdviceNumber(ownerAdvice: string): number{
    if(ownerAdvice === 'taskAdvice'){
      return this.counterUnsettledTask();
    }else{
      return 0
    }
  }

  public counterUnsettledTask(): number{
    let taskUnsettled: number = 0
    this.Tasks.forEach(task => {
      if(task.estado == 'unsettled'){
        taskUnsettled ++;
      }

    });
    return taskUnsettled;
  }

}
