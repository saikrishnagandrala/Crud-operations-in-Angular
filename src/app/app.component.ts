import { Component } from '@angular/core';
import { MobilesdataService } from './mobilesdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  alldata:any;
  getmobilesdata:any;
  formheader="Add mobile";
  Mobilename:any
  Mobileprice:any 
  Mobileram:any 
  Mobilestorage:any
  id:any
  formcontrol=false;
  
  constructor(public ts:MobilesdataService){

  }

  ngOnInit(){
    this.fetchdata();
  }

  fetchdata(){
    this.getmobilesdata=this.ts.mobiles;
  }

  deletedata(i:any){
    this.ts.removedata(i);
    
  }

  editmobiles(i:any){
    this.formcontrol=true;
    if(this.ts){
      this.id=this.ts.mobiles[i].id;
      this.Mobilename=this.ts.mobiles[i].Name;
       this.Mobileprice=this.ts.mobiles[i].Price;
       this.Mobileram=this.ts.mobiles[i].RAM;
       this.Mobilestorage=this.ts.mobiles[i].Storage;
    }
  }

  saveform(){
    if(this.id){
      var objindex =   this.ts.mobiles.findIndex(obj => obj.id== this.id);
      this.ts.mobiles[objindex].Name=this.Mobilename;
      this.ts.mobiles[objindex].Price=this.Mobileprice;
      this.ts.mobiles[objindex].RAM=this.Mobileram;
      this.ts.mobiles[objindex].Storage=this.Mobilestorage;
      this.formcontrol=false;
    }
    else {
     this.ts.adddata(this.Mobilename,this.Mobileprice,this.Mobileram,this.Mobilestorage);
     this.formcontrol=false;
    }
  
  }
  addmobile() {
    this.clearform();
    this.formcontrol=true;
  }

  clearform(){
    this.Mobilename=null;
    this.Mobileprice=null;
    this.Mobileram=null;
    this.Mobilestorage=null;
    this.id=null;
  }

  cancleform(){
    this.formcontrol=false;
  }

  formValid() {
    return this.Mobilename && this.Mobileprice >= 1000 && this.Mobileram >= 1 && this.Mobilestorage >= 1;
  }

}
