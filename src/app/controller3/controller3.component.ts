import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-controller3',
  templateUrl: './controller3.component.html',
  styleUrls: ['./controller3.component.css']
})
export class Controller3Component  {

   public responseData;listData;result;searchText;id:any
   vendor ={"vendorname":"","contactno":"","buyer_id":"","address":"","email":"","img":"","vendorId":""};
  constructor(public data:DataService,private  apiService:  DataService,public router:Router) { 
this.result=this.data.vendor;


  }


 insert(){
  
   //console.log(this.vendor)
 
this.data.postShop(this.vendor, "vendors/save").then((result) =>{
      var results = this.vendor;
      //console.log(this.vendor);
      this.router.navigate(['main']);
    
        }, (err)=> {
          alert("Please Enter The valid Data or Fill All The Columns");
       }).catch((err) =>{
          console.log("Unhandled rejection",err.message);
          
        
     
  });

}
clickMethod(ld) {
  if(confirm("Are you sure to delete that vendor in the id of   "+ld.id+"  in the name of "+ld.vendorname )) {
    this.id=ld.id;
this.data.deleteDetails('vendors/vendor/'.concat(this.id)).then((result)=> {
  console.log("success");
  this.router.navigate(['main']);
},(err)=>{

}).catch((err)=>{
  console.log("unhandled rejection",err.message);
  });
  }
}
// getcontacts(){
//   this.data.getShop("commerce/shope").then((result)=>{
//       this.responseData=result;
//       console.log(this.responseData);
//       if(this.responseData){
//     this.listData=this.responseData;
//     this.data.shop=this.listData;
//     console.log(this.data.shop);

//       }
//       else{
//           console.log()
//       }
// },(err)=>{console.log("rejection")
// }).catch((err)=>{
// console.log("unhandledRejection",err.message);
// });
// }

  ngOnInit() {

  }

}
