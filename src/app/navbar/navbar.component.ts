import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';
import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
isUserLoggedIn:boolean=false;
  constructor(public data:DataService,@Inject(LOCAL_STORAGE) public storage:WebStorageService) { }

  ngOnInit() {
    if(this.storage.get('mani')){
      this.isUserLoggedIn=true;
    }
    localStorage.clear();
  }

}
