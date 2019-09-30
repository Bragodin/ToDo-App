import { Component, OnInit, Input } from '@angular/core';
import { MainPageComponent } from '../main-page/main-page.component';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})
export class TasksComponent implements OnInit {
  taskOption: boolean = false;
  constructor(private mainPageComponent: MainPageComponent, private tasksService: TasksService) { }
  @Input() name;
  @Input() text;
  @Input() date;

  delete(name, text): any{
    this.mainPageComponent.itemsActive.find(
      (element, index) => {
        if(element.name === name && element.text === text){
          this.mainPageComponent.itemsActive.splice(index, 1);
          this.mainPageComponent.tasksQuantity--;
          // this.tasksService.update(this.mainPageComponent.items).subscribe(
          //   () => console.log('dlete task')
          // ); 
        }
      }
    );  
  }
  completed(name, text, date){
    this.mainPageComponent.itemsActive.find(
      (element, i) => {
        if(element.name === name && element.text === text && element.date === date){
          this.mainPageComponent.itemsActive.splice(i, 1);
          this.mainPageComponent.itemsCompleted.unshift(element);
        }
      }
    );
  }
  ngOnInit() {
  }
}
