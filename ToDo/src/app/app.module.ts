import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainPageComponent } from './core/main-page/main-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TasksComponent } from './core/tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { AddTaskComponent } from './core/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TasksComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatInputModule
  ],
  entryComponents: [ AddTaskComponent, ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
