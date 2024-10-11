import { Component } from "@angular/core";

@Component(
  {
    standalone: true,
    selector: 'page-table',
    templateUrl: './table-page.component.html',
    styleUrl: './table-page.component.css'
  }
)
export class PageTableComponent{
  constructor(){}

  public count: number = 0;

  counter(): void{
    this.count += 1;
  }

  public title: string = 'Rango de Tiempo';

}



interface Range{
  name: string;
  dia: number;
}

class timeRange{
  public range: Range[] = [
    {name: 'other',
    dia: 20
  },
  {
    name: 'other more',
    dia: 78
  },
  {
    name: 'the other',
    dia:45
  }
];
}
