import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetAtaaRecordsServiceService } from "../service/get-ataa-records-service.service";

@Component({
  selector: 'app-atar-component',
  templateUrl: './atar-component.component.html',
  styleUrls: ['./atar-component.component.css']
})
export class AtarComponentComponent implements OnInit {

  dateForm!: FormGroup;
  startDate!: Date;
  endDate!: Date;
  blockNine: any[] = [];
  approachsum: any[] = [];
  param1!: Date;
  param2!: Date;

  constructor(
    private formBuilder: FormBuilder,
    private getAtaaRecordsService: GetAtaaRecordsServiceService
  ) { }

  ngOnInit() {
    this.dateForm = this.formBuilder.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required]
    });
  }

  onSubmit() {
    const startDate = this.dateForm.value.startDate;
    const endDate = this.dateForm.value.endDate;

    // Store the selected dates in variables
    this.startDate = startDate;
    this.endDate = endDate;

    // Call the service to get blockNine data
     this.getAtaaRecordsService.executeStoredProcedure(startDate, endDate).subscribe(
           response => {
             console.log('Stored procedure executed successfully:', response);
             this.approachsum = response;
           }

    );
  }

 }


