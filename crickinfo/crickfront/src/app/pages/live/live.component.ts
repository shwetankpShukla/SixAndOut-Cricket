import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { error } from 'console';
import { MatchCartComponent } from '../componnets/match-cart/match-cart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [MatchCartComponent,CommonModule],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{

  liveMaches:any;
  
  constructor( private _api:ApiCallService){

  }


  ngOnInit(): void {
    this._api.getLiveMatches().subscribe({
      next:data =>{
        console.log(data);
        this.liveMaches = data;
      },
      error:error=>{
        console.log(error)
      }
    }) 
  } 

  

}
