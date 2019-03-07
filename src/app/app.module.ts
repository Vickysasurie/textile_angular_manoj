
import { FilterPipe } from './filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule}from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MainComponent } from './main/main.component';

import { UploadComponent } from './upload/upload.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { ControllerComponent } from './controller/controller.component';
import { Controller2Component } from './controller2/controller2.component';
import { Controller3Component } from './controller3/controller3.component';
import { Upload1Component } from './upload1/upload1.component';
import { Upload2Component } from './upload2/upload2.component';
import { Filter2Pipe } from './filter2.pipe';
import { Filter3Pipe } from './filter3.pipe';
import { LoginComponent } from './login/login.component';

const appRoutes:Routes=[
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'',
    component:LoginComponent
  },

{
  path:'control',
  component:ControllerComponent
},
{
  path:'control2',
  component:Controller2Component
},
{
  path:'control3',
  component:Controller3Component
},
{
  path:'upload/:id',
  component:UploadComponent
},
{
  path:'upload1/:id',
  component:Upload1Component
},
{
  path:'upload2/:id',
  component:Upload2Component
}
]

@NgModule({
  declarations: [
    AppComponent,
      MainComponent,
       UploadComponent,
    FilterPipe,
    NavbarComponent,
       ControllerComponent,
    Controller2Component,
    Controller3Component,
    Upload1Component,
    Upload2Component,
    Filter2Pipe,
    Filter3Pipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpClientModule,
   StorageServiceModule,
    RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
