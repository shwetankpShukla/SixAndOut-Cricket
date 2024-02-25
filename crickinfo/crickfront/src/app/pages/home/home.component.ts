import { Component } from '@angular/core';
import { LiveComponent } from '../live/live.component';
import { PointTableComponent } from '../point-table/point-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LiveComponent,PointTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
