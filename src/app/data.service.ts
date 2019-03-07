import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { platformCoreDynamicTesting } from '@angular/platform-browser-dynamic/testing/src/platform_core_dynamic_testing';
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';
let apiURl="http://localhost:8080/"
let apiURL1="http://192.168.1.46:8080/"

@Injectable({
  providedIn: 'root'
})
export class DataService {
  isUserLoggedIn:boolean=false;
public result1;id;result;shop;vendor;id1;id2:any
  constructor(private http:HttpClient) {
    
   }

//admin login
login(type)
{
  return new Promise((resolve,reject)=>{
let headers=new HttpHeaders();
this.http.get(apiURl+type,{headers:headers}).subscribe(data=>{
  console.log(data);
  resolve(data);
},(err)=>{
  reject(err);
}
)

  });

}

  // PostDetails(type){
  //   return new Promise((resolve , reject) =>{
  //     let headers =new HttpHeaders();
  //     //headers.append("Content-Type","application/json");
     
  //     this.http.get(apiURl+type,{headers:headers}).
  //     subscribe (data =>{
  //       console.log("success");
  //       console.log(this.result1);
  //       resolve(data);
  //     },(err)=>{
  //       reject(err);  
  //     });
  //   });
  // }
  updateDetails(details,type){
    return new Promise((resolve , reject) =>{
      let headers =new HttpHeaders();
      //headers.append("Content-Type","application/json");
      //console.log(details);
     
     
     
    //manoj db
      this.http.put(apiURl+type,details,{headers:headers}).
      subscribe (data =>{
        //console.log(this.result1);
        console.log("success");
        resolve(data);
        this.http.put(apiURL1+type,details,{headers:headers}).
      subscribe (data1 =>{
        //console.log(this.result1);
        console.log("success");
        
      },(err)=>{
        reject(err);  
      });
      },(err)=>{
        reject(err);  
      });
    });

   
  }
  deleteDetails(type){
    return new Promise((resolve , reject) =>{
      let headers =new HttpHeaders();
      //headers.append("Content-Type","application/json");
      this.http.delete(apiURl+type,{headers:headers}).
      subscribe (data =>{
       // console.log(this.result1);
        console.log("success");
        resolve(data);
//manojdb
        this.http.delete(apiURL1+type,{headers:headers}).
        subscribe (data1 =>{
         // console.log(this.result1);
          console.log("success");
          resolve(data1);
        },(err)=>{
          reject(err);  
        });
    

      },(err)=>{
        reject(err);  
      });
    });

  
      
  }
  getDetails(type){
    return new Promise((resolve , reject) =>{
      let headers =new HttpHeaders();
      //headers.append("Content-Type","application/json");
      
      this.http.get(apiURl+type,{headers:headers}).
      subscribe (data =>{
        console.log("success");
        resolve(data);



        //manojdb
        this.http.get(apiURL1+type,{headers:headers}).
      subscribe (data1 =>{
        console.log("success");
       
        //console.log(data);
      },(err)=>{
        reject(err);  
      });
        //console.log(data);
      },(err)=>{
        reject(err);  
      });
    });
    //manojdb

   

}
postDetails(details,type){
  return new Promise((resolve , reject) =>{
    let headers =new HttpHeaders();
    //headers.append("Content-Type","application/json");
    //console.log(details);
    this.http.post(apiURl+type,details,{headers:headers}).
    subscribe (data =>{
      //console.log(this.result1);
      console.log("success");
      resolve(data);

console.log("hai")
      //manojdb

      this.http.post(apiURL1+type,details,{headers:headers}).
    subscribe (data1 =>{
      //console.log(this.result1);
      console.log("success");
      resolve(data1);
    },(err)=>{
      reject(err);  
    });
    },(err)=>{
      reject(err);  
    });
  });
  
} 




public getShop(type){
  return  new Promise((resolve,reject)=>{
    let headers=new HttpHeaders();
    this.http.get(apiURl+type,{headers:headers}).
    subscribe(res=>{
      resolve(res);
//manojdb
      this.http.get(apiURL1+type,{headers:headers}).
    subscribe(res=>{
      resolve(res);
    },(err)=>{
      reject(err);
    });
    },(err)=>{
      reject(err);
    });
  });
  
}
public postShop(details,type){
  return  new Promise((resolve,reject)=>{
    let headers=new HttpHeaders();
    //console.log(details);
    this.http.post(apiURl+type,details,{headers:headers}).
    subscribe(res=>{
      resolve(res);

      //manojdb

      this.http.post(apiURL1+type,details,{headers:headers}).
    subscribe(res=>{
      resolve(res);
    },(err)=>{
      reject(err);
    });
    },(err)=>{
      reject(err);
    });
  });
 
}


public getp(p){
  //console.log("mano");
  localStorage.setItem("quentinTarantino", JSON.stringify(p));
  this.respon();
}
public respon(){
  var jj=JSON.parse(localStorage.getItem("quentinTarantino"));
  return jj;
}


 

}

