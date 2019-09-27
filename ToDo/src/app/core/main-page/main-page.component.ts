import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})

export class MainPageComponent implements OnInit {
  showFiller: boolean  = false;
  leftArrow: boolean = true;
  addComponent: boolean = false;
  items;
  data: string;
  constructor(private tasksService: TasksService, public dialog: MatDialog) { }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '250px',
      data: {data: this.data}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.data = result;
      this.tasksService.addTask({name: 'vfvfv', text: 'rerrr'}).subscribe(
        () => console.log('add task')
      );
    });
  }

  ngOnInit() {
    this.items = this.tasksService.getTasks().subscribe(
      items => {
        this.items = items;
      }
    );
    this.tasksService.addTask({name: 'vfvfv', text: 'rerrr'}).subscribe(
      () => console.log('add task')
    );
  }
  qwe(){
    this.tasksService.addTask({name: 'vfvfv', text: 'rerrr'}).subscribe(
      () => console.log('add task')
    );
  }
}
