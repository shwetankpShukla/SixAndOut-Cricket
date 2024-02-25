import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit{

  pointTable:any;
  tableHeading:any;

  constructor( private _api:ApiCallService){}


  ngOnInit(): void {
    this._api.getMatchesHistory().subscribe({
      next:data =>{
        console.log(data);
        this.pointTable = data;
        this.tableHeading = [...this.pointTable[0]];
      },
      error:error=>{
        console.log(error)
      }
    }) 
  } 

}
