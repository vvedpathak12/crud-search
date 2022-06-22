import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-get-api-details',
  templateUrl: './get-api-details.component.html',
  styleUrls: ['./get-api-details.component.css']
})
export class GetApiDetailsComponent implements OnInit {

  public info:any;
  public deleteData:any;
  public nameSearch:any;

  constructor(private ser2 : DataShareService , private route : Router) { }

  ngOnInit(): void {
    this.getDataFromBackend();
  }


  getDataFromBackend(){
    this.ser2.getData().subscribe((res:any)=>{
      console.log(res);
      this.info=res;
    },
    (err:any)=>{
      console.log(err);
    })
  }

  onEdit(id:any , data:any){
    console.log(id);
    console.log(data);

    this.ser2.setMessage( id , data);

    this.route.navigate(['update']);
    
  }

  onDelete(id:any){

    this.ser2.deleteData(id).subscribe((res:any)=>{
      console.log(res);

      this.ser2.getData().subscribe((res:any)=>{
        console.log(res);
        this.deleteData=res;
  
        if(this.deleteData.length > 0 ){
          this.getDataFromBackend();
        }
      })
    });
   
  }

  addData(){
    this.route.navigate(['post'])
  }

}
