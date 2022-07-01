import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { CuriosityComponent } from './modules/rovers/curiosity/curiosity.component';
import { OpportunityComponent } from './modules/rovers/opportunity/opportunity.component';
import { SpiritComponent } from './modules/rovers/spirit/spirit.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path: 'curiosity', component: CuriosityComponent},
  {path: 'spirit', component:SpiritComponent},
  {path: 'opportunity', component: OpportunityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
