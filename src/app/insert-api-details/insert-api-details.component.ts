import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-insert-api-details',
  templateUrl: './insert-api-details.component.html',
  styleUrls: ['./insert-api-details.component.css']
})
export class InsertApiDetailsComponent implements OnInit {
  public myForm1:any;
  public isSubmitted : boolean =false;

  constructor(private fb:FormBuilder , private ser1 : DataShareService , private route : Router) { }

  ngOnInit(): void {
    this.myForm1 = this.fb.group({
      name:['' , [Validators.required]],
      age:['' , [Validators.required]],
      branch:['' , [Validators.required]],
      empId:['' , [Validators.required]],
      city:['' , [Validators.required]],
    })
  }

  onSubmitForm1(){
    this.myForm1.value;
    console.log(this.myForm1.value);
    this.isSubmitted=true;
    
    this.ser1.sendData(this.myForm1.value).subscribe((res:any)=>{
      console.log(res);
    },
    (err:any)=>{
      console.log(err);
    });

    this.route.navigate(['get']);
  }

  get f1(){
    return this.myForm1.controls;
  }

}
