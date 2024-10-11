import { Component, Input, Output } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SideBarComponent } from './side_bar/side-bar.component';
import { PageTableComponent } from "./pages/table/table-page.component";
import { PageHelpComponent } from './pages/help/help-page.component';
import { routes } from './app.routes';
import { NavbarComponent } from './new_design/components/navBar/navbar.component';
import { BodyComponent } from './new_design/components/body/body.component';
import { CarouselModule } from 'primeng/carousel';
import { TaskService } from './new_design/services/task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SideBarComponent,
    PageTableComponent,
    PageHelpComponent,
    NavbarComponent,
    BodyComponent,
    CarouselModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor( private taskService: TaskService ){}


  //Todo Prove the api
  @Input()
  public isRequired: boolean = false;

  public onDataList(): void{
    this.isRequired = true;
  }

}

