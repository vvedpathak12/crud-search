import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-edit-api-details',
  templateUrl: './edit-api-details.component.html',
  styleUrls: ['./edit-api-details.component.css']
})
export class EditApiDetailsComponent implements OnInit {

  public myForm2:any;
  public isSubmitted:boolean=false;
  public getIdData:any;

  constructor(private fb:FormBuilder , private ser3 : DataShareService , private route : Router) { 

    this.ser3.getMessage().subscribe((res:any)=>{
      console.log(res);
      console.log(res.id);
      this.getIdData =res;

      console.log(this.getIdData.name);
    })
  }

  ngOnInit(): void {
    this.myForm2 =this.fb.group({
      name:[this.getIdData.name],
      age:[this.getIdData.age],
      branch:[this.getIdData.branch],
      empId:[this.getIdData.empId],
      city:[this.getIdData.city],
    })
  }


  onSubmitForm2(){
    this.myForm2.value;
    console.log(this.myForm2.value);
    this.isSubmitted=true;

    this.ser3.editData(this.getIdData.id , this.myForm2.value).subscribe((res:any)=>{
      console.log(res);
    });

    this.route.navigate(['get']);
  }

  get f2(){
    return this.myForm2.controls;
  }

}
