import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

 

  constructor(private _httpClient:HttpClient) {  
    
  }

    getAllMatches(){
      return this._httpClient.get('http://localhost:8080/cricket')
    }

    getLiveMatches(){
      return this._httpClient.get('http://localhost:8080/cricket/live')
    }

    getMatchesHistory(){
      return this._httpClient.get('http://localhost:8080/cricket/point-table')
    }
  
}
