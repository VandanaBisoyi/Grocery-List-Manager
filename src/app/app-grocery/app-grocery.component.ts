import { Component } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppGroceryComponent {
  task: string;
  tasks = [];
  
  onClick(){
  	this.tasks.push({name: this.task});
  	this.task = '';
  }
  
}
