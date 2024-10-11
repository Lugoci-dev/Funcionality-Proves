import { Component, EventEmitter, Output } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: 'nav-var',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [CommonModule]
})
export class NavbarComponent{

  constructor( private dataService: TaskService ){}

  public taskAdvice: number = 0;

  ngOnInit() {
    this.taskAdvice = this.refreshCounter('taskAdvice');
  }



  notify(){
    this.dataService.notifyClick();
    this.taskAdvice = this.refreshCounter('taskProve');
  }

  //Prueba
  public refreshCounter(owner: string): number {
    return this.dataService.getAdviceNumber(owner);
  }



}
