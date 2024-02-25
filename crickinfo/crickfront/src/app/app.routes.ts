import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { LiveComponent } from './pages/live/live.component';

export const routes: Routes = [
    {
        path:"home",
        component: HomeComponent,
        title: "Home | SixAndOut"
    },    
    
    {
        path:"history",
        component:HistoryComponent,
        title: "Match History | Six&Out"
    },
    {
        path:"point-table",
        component:PointTableComponent,
        title: "Point Table | Six&Out"
    },
    {
        path:"live",
        component:LiveComponent,
        title: "Live Matches | Six&Out"
    }
];
