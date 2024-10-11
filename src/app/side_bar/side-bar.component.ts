import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: 'side-bar',
  templateUrl: './side-bar.component..html',
  styleUrl: './side-bar.component.css',
  imports: [RouterModule]
})
export class SideBarComponent{
  constructor(){}
}
