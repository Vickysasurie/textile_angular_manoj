import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-controller2',
  templateUrl: './controller2.component.html',
  styleUrls: ['./controller2.component.css']
})
export class Controller2Component  {

   public responseData;listData;result;id;searchText:any
  shop ={"shopname":"","contactno":"","address":"","latitude":"","longitude":"","email":"","url":"","url1":""};
  constructor(public data:DataService,private  apiService:  DataService,public router:Router) { 
this.result=this.data.shop;


  }


 insert(){
  
   //console.log(this.shop)
 
this.data.postShop(this.shop, "commerce/shope").then((result) =>{
      var results = this.shop;
      console.log(this.shop);
      //console.log(this.shop);
      this.router.navigate(['main']);
    
        }, (err)=> {
          alert("Please Enter The valid Data or Fill All The Columns");
       }).catch((err) =>{
          console.log("Unhandled rejection",err.message);
          
        
     alert("helloo");
  });

}
clickMethod(ld) {
  if(confirm("Are you sure to delete that shop in the id of   "+ld.id+"  in the name of "+ld.shopname )) {
    this.id=ld.id;
this.data.deleteDetails('commerce/shope/'.concat(this.id)).then((result)=> {
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
