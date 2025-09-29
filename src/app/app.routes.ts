
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { HotelListComponent } from './hotel-list/hotel-list';

export const routes: Routes = [
  { path: '', component: Home }, 
  { path: 'hotels', component: HotelListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

