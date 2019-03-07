import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent  {

  result;item;productDetails;id;searchText:any
    providerDetails={"name":"", "img":"","shopCategory":"","shopName":"","prodCategory":"","shortDesc":"","longDesc":"","size":"","rating":"","discount":"","brandName":"","sku":"","available":"","price":"","prodId":"","tax":""/*"createdAt":"","updatedAt":""*/};
    constructor(public data:DataService,public router:Router) {
      this.data.getDetails('textile/Chennai').then((result)=> {
      
        this.data.result=result;
        //console.log(this.data.result);
        this.sam();
       },(err)=>{
     
       }).catch((err)=>{
         console.log("unhandled rejection",err.message);
         });
     }
     sam()
     {
      this.result=this.data.result;
      //console.log(this.result);
     }
    save()
    {
      this.data.postDetails(this.providerDetails,'textile/Chennai').then((result)=> {
      console.log("success");
      this.router.navigate(['main']);
    },(err)=>{
      alert("Please Enter The valid Data or Fill All The Columns");
    }).catch((err)=>{
      
      console.log("unhandled rejection",err.message);
      
      });
    }

    clickMethod(ld) {
      if(confirm("Are you sure to delete that product    "+ld.name+"   in the brand of "+ld.brandName )) {
        this.id=ld.id;
    this.data.deleteDetails('textile/Chennai/'.concat(this.id)).then((result)=> {
      console.log("success");
this.router.navigate(['main']);


        // this.data.getDetails('textile/Chennai').then((result)=> {
        
        //   this.data.result=result;
        //   //console.log(this.data.result);
        //   this.sam();
        //  },(err)=>{
      
        //  }).catch((err)=>{
        //    console.log("unhandled rejection",err.message);
        //    });
      
    },(err)=>{
  
    }).catch((err)=>{
      console.log("unhandled rejection",err.message);
      });
      }
    }
  //   image(event)
  //   {
  // this.providerDetails.img=event.target.value;
  
  // }
  
    ngOnInit() {
    }
    }
    
  
      
  
  
  

   

  


