import { Component } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrls: ['./lists-home.component.css']
})
export class ListsHomeComponent {

  number=[
    { value: 22, label:'Faves'},
    { value: 3120, label:'Views'},
    { value: 22, label:'Members'},
  ];
  images=[
    {
      image:'/assets/images/dresser.jpeg',
      title:'Dresser',
      description:'Chest of drawers for closet'
    },
    {
      image:'/assets/images/couch.jpeg',
      title:'Couch',
      description:'Filled oversized sofa couch'
    },
  ]

}
