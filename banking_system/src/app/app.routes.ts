import { RouterModule, Routes } from '@angular/router';

import { WelcomeDashboardComponent } from './welcome-dashboard/welcome-dashboard.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'welcome-dashboard',component:WelcomeDashboardComponent}

];
@NgModule({
    declarations:[
    ],
    imports:[
        WelcomeDashboardComponent,],
    exports:[RouterModule,
        WelcomeDashboardComponent,]
    
   

}
)
export class AppRoutes{}
