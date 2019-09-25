import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass']
})
export class MainPageComponent implements OnInit {
  showFiller: boolean  = false;
  leftArrow: boolean = true;
  items;
  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.items = this.tasksService.getTasks().subscribe(
      items => {
        this.items = items;
      }
    );
  }
}
