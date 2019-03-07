import { MainComponent } from './../main/main.component';
import { DataService } from './../data.service';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
result;i;id;providerDetails:any
  constructor(public router:Router,public data:DataService,public router1:ActivatedRoute) { 
    this.providerDetails=this.data.result;
    //console.log(this.providerDetails.shopName);
}
putDetail()
{
  //console.log(this.id);
  
for( this.i=0;this.i<this.providerDetails.length;this.i++)
{
if(this.id==this.providerDetails[this.i].id)
{
  this.providerDetails=this.providerDetails[this.i];
}
}
}
update()
  {
    this.data.updateDetails(this.providerDetails,'textile/Chennai/'.concat(this.id)).then((result)=> {
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
     this.data.id=this.id;
    //console.log(this.id);
    this.putDetail(); 
})
  }

}
