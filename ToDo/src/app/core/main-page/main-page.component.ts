import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Observable } from 'rxjs';
import { Task }  from '../../services/tasks.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})

export class MainPageComponent implements OnInit {
  showFiller: boolean  = false;
  leftArrow: boolean = true;
  addComponent: boolean = false;
  items: Task[];
  itemsActive: Task[];
  itemsComplited: Task[];
  tasksQuantity: number;
  data: string;
  constructor(private tasksService: TasksService, public dialog: MatDialog) { }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '280px',
      data: {data: this.data}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result[0] === undefined || result[1] === undefined){
        return alert('You did not enter a task name or description');
      }
      this.data = result;
      this.tasksService.addTask({name: this.data[0], text: this.data[1], status: 'active'}).subscribe(
        () => console.log('add task')
      ); 
      this.itemsActive.push({name: this.data[0], text: this.data[1], status: 'active'});
      this.tasksQuantity++;
    });
  }

  ngOnInit() {
    this.tasksQuantity = 0;
    this.items = [];
    this.itemsActive = [];
    this.tasksService.getTasks().subscribe(
      items => {
        this.items = items;
        this.items.forEach(element => {
          if(element.status === "active"){
            this.itemsActive.push(element);
            this.tasksQuantity++;
          }
        }); 
      }
    );
  }
}
