import { Component } from '@angular/core';

@Component({
  selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
  styleUrls: ['./app-grocery.component.css']
})
export class AppGroceryComponent {
  task: string;
  tasks = [];
  
  onClick(){
  	this.tasks.push({name: this.task});
  	this.task = '';
  }

  deleteItem(task: string): void {
    const index = this.tasks.findIndex(
      (task: { name: any }) => task.name === task.name
    );
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  
}
