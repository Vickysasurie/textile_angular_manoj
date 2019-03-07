import { WebStorageService,LOCAL_STORAGE } from 'angular-webstorage-service';
import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit,Inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
admin={"user":"","pass":""};
login:any
  constructor(public data:DataService,public router:Router,public location:Location,@Inject(LOCAL_STORAGE) public storage:WebStorageService) { 
  //  this.login=this.data.login("admin");
  }

  ngOnInit() {
  }


  Login(){
    //console.log(this.admin);
if(this.admin.user=="admin")
{
  if(this.admin.pass=="admin")
  this.storage.set('mani',this.admin.user);
  window.location.reload(true);
  this.router.navigate(["main"]);

}
else{
  this.router.navigate(['/']);
  alert("Username and Password should not match" );
}

}
}
