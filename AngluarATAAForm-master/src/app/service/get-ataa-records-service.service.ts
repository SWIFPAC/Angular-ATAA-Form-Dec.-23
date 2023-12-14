import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})
export class GetAtaaRecordsServiceService {

  private addRecordUri = 'http://localhost:8080/api/create';
  private getAllRecordsUri = 'http://localhost:8080/api/ataaRecords';
  private getBlockNineUri = 'http://localhost:8080/api/blockNine'
  private getApproachSumUri = 'http://localhost:8080/api/execute-stored-procedure'
  private apiUrl = 'http://localhost:8080/api'

  constructor( private http : HttpClient) { }

  //Get all Air Traffic Records
  getRecords(): Observable<any[]> {
    return this.http.get<any[]>(this.getAllRecordsUri);
  }

  //Get Block 9 for ATAR Report
   getBlockNine(): Observable<any[]> {
      return this.http.get<any[]>(this.getBlockNineUri);
    }

  // Approach Summary Stored Procedure
  executeStoredProcedure(param1: string, param2: string): Observable<any[]> {
      const body = { param1, param2 };
      return this.http.post<any[]>(`${this.apiUrl}/execute-stored-procedure`, body);
    }

  // Add a ATAA Record
  addRecords(AtaaRecord: any): Observable<any> {
    return this.http.post<any>(this.addRecordUri, AtaaRecord);
  }



}
