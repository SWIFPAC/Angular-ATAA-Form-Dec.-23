import { Component } from '@angular/core';
import {GetAtaaRecordsServiceService} from "../service/get-ataa-records-service.service";


@Component({
  selector: 'app-add-ataa-record',
  templateUrl: './add-ataa-record.component.html',
  styleUrls: ['./add-ataa-record.component.css']
})
export class AddAtaaRecordComponent {

  //AtaaRecord Object
  AtaaRecord = {aircraft_owner:'', aircraft:'', runway:'', operation:'', approach:'', departure:'', count:'', doe:''};

  constructor(private getAtaaRecordsService: GetAtaaRecordsServiceService) {}

  addRecord(){
    this.getAtaaRecordsService.addRecords(this.AtaaRecord).subscribe(()=>{})
  }

}
