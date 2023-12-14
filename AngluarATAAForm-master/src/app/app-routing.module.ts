import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetAtaaRecordsComponent} from "./get-ataa-records/get-ataa-records.component";
import {AddAtaaRecordComponent} from "./add-ataa-record/add-ataa-record.component";
import {AtarComponentComponent} from "./atar-component/atar-component.component";

const routes: Routes = [
  { path: 'records', component: GetAtaaRecordsComponent },
  { path: 'add', component: AddAtaaRecordComponent },
  {path: 'atar', component: AtarComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
