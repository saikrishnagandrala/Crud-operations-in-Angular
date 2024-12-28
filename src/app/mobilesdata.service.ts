import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobilesdataService {

  index:any;
  idcount=3;

 constructor() {

 }

 mobiles =[
  {
    id:1,
    Name:"vivo",
    Price:13000,
    RAM:8,
    Storage:128
  },
  {
    id:2,
    Name:"vivo",
    Price:13000,
    RAM:8,
    Storage:128
  }
  ]

 removedata(index:any){
  this.mobiles.splice(index,1);
 } 

 adddata(name:any,price:any,ram:any,storage:any){
   this.mobiles.push({id:this.idcount++,Name:name,Price:price,RAM:ram,Storage:storage});
 }

}