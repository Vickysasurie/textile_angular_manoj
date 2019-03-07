import { MainComponent } from './../main/main.component';
import { DataService } from './../data.service';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-upload1',
  templateUrl: './upload1.component.html',
  styleUrls: ['./upload1.component.css']
})
export class Upload1Component implements OnInit {
result;i;id;providerDetails;shop:any
  constructor(public router:Router,public data:DataService,public router1:ActivatedRoute) { 
    this.shop=this.data.shop;
    //console.log(this.providerDetails.shopName);
}
putDetail()
{
  //console.log(this.id);
  
for( this.i=0;this.i<this.shop.length;this.i++)
{
if(this.id==this.shop[this.i].id)
{
  this.shop=this.shop[this.i];
}
}
}
update()
  {
    this.data.updateDetails(this.shop,'commerce/shope/'.concat(this.id)).then((result)=> {
    console.log("success");
    alert("Successfully Updated");
    this.router.navigate(['main']);
  },(err)=>{
    alert("Please Enter The valid Data or Fill All The Columns");
  }).catch((err)=>{
    console.log("unhandled rejection",err.message);
    
    });
  }
//   image(event)
//   {
// this.providerDetails.img=event.target.value;
//   }

  ngOnInit() { 
    this.router1.params.subscribe((params)=>{
     this.id=params['id'];
     this.data.id1=this.id;
    //console.log(this.id);
    this.putDetail(); 
})
  }

}
