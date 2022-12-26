import { Component } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
data =[
  {name:'James', age:24, job:'Engineer'},
  {name:'Jill', age:26, job:'Engineer'},
  {name:'Elyse', age:24, job:'Designer'}
];
headers=[
  {key:'name',label:'Name'},
  {key:'age',label:'Age'},
  {key:'job',label:'Job'}
]
}
