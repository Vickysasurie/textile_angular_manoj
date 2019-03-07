import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
public result:any
  constructor(public data:DataService,public router:Router) {
    if(this.data.isUserLoggedIn==true){
    this.data.getDetails('textile/Chennai').then((result)=> {
      
      this.data.result=result;
      //console.log(this.data.result);
     },(err)=>{
   
     }).catch((err)=>{
       console.log("unhandled rejection",err.message);
       });

       this.data.getShop('commerce/shope').then((result)=>{
       this.data.shop=result;
      //console.log(this.data.shop);
       },(err)=>{

       }).catch((err)=>{
         console.log("unhandled rejection",err.message);
       });

       this.data.getShop('vendors/all').then((result)=>{
        this.data.vendor=result;
       //console.log(this.data.vendor);
        },(err)=>{
 
        }).catch((err)=>{
          console.log("unhandled rejection",err.message);
        });
      }
   }

  ngOnInit() {
    
    
  }
logout(){
  localStorage.clear();
  this.router.navigate(['/']);
}
}
