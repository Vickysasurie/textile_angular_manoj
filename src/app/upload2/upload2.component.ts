import { MainComponent } from './../main/main.component';
import { DataService } from './../data.service';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-upload2',
  templateUrl: './upload2.component.html',
  styleUrls: ['./upload2.component.css']
})
export class Upload2Component implements OnInit {
result;i;id;providerDetails;vendor:any
  constructor(public router:Router,public data:DataService,public router1:ActivatedRoute) { 
    this.vendor=this.data.vendor;
    //console.log(this.providerDetails.shopName);
}
putDetail()
{
  //console.log(this.id);
  
for( this.i=0;this.i<this.vendor.length;this.i++)
{
if(this.id==this.vendor[this.i].id)
{
  this.vendor=this.vendor[this.i];
  //console.log(this.vendor);
  //console.log(this.id);
}
}
}
update()
  {
    this.data.updateDetails(this.vendor,'vendors/update/'.concat(this.id)).then((result)=> {
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
     this.data.id2=this.id;
    //console.log(this.id);
    this.putDetail(); 
})
  }

}
