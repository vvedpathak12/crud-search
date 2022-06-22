import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditApiDetailsComponent } from './edit-api-details/edit-api-details.component';
import { GetApiDetailsComponent } from './get-api-details/get-api-details.component';
import { InsertApiDetailsComponent } from './insert-api-details/insert-api-details.component';

const routes: Routes = [
  {path:'get' , component : GetApiDetailsComponent},
  {path : 'post' , component : InsertApiDetailsComponent},
  {path : 'update', component: EditApiDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
