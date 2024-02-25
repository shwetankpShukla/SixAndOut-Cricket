import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCartComponent } from '../componnets/match-cart/match-cart.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatchCartComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  historyMaches:any;

  constructor( private _api:ApiCallService){}
  ngOnInit(): void {
    this._api.getAllMatches().subscribe({
      next:data =>{
        console.log(data);
        this.historyMaches = data;
      },
      error:error=>{
        console.log(error)
      }
    }) 
  } 

}
