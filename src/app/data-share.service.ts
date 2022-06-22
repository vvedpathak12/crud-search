import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  public ID :any = new BehaviorSubject('1');
  public currentID = this.ID.asObservable();

  public DATA :any = new BehaviorSubject ('');
  public currentDATA = this.DATA.asObservable();

  constructor(private http:HttpClient) { }

  setMessage(id:any , data:any){
    this.ID.next(id);
    this.DATA.next(data);
  }

  getMessage(){
    return this.currentID , this.currentDATA;
  }


  getData(){
    return this.http.get("http://localhost:3000/api/getAllInformation");
  }

  sendData(formdata:any){
    return this.http.post("http://localhost:3000/api/insertInformation" , formdata);
  }

  editData(Id:any , Data:any){
    return this.http.put("http://localhost:3000/api/updateInformation/" + Id , Data);
  }

  deleteData(Id:any){
    return this.http.delete("http://localhost:3000/api/deleteInformation/" + Id);
  }
}
