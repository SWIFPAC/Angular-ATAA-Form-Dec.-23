import {Component, OnInit} from '@angular/core';
import {GetAtaaRecordsServiceService} from "../service/get-ataa-records-service.service";

@Component({
  selector: 'app-get-ataa-records',
  templateUrl: './get-ataa-records.component.html',
  styleUrls: ['./get-ataa-records.component.css']
})
export class GetAtaaRecordsComponent implements OnInit{
  ataaRecords: any[] = []; //initialize ataaRecords array

  constructor(private getRecordsService: GetAtaaRecordsServiceService) {}

  ngOnInit() {
    this.getRecordsService.getRecords().subscribe((data)=>{this.ataaRecords = data})
  }
}
