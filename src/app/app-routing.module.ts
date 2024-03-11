import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './container/pages/home/home.component';
import { DashboardComponent } from './container/pages/dashboard/dashboard.component';
import { ResourceComponent } from './container/pages/resources/resource/resource.component';
import { AboutUsComponent } from './container/pages/about-us/about-us.component';
import { ImpactStoriesComponent } from './container/pages/impactStories/impact-stories/impact-stories.component';
import { OurPartnersComponent } from './container/pages/our-partners/our-partners.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'resources',component:ResourceComponent},
  {path:'impact-stories',component:ImpactStoriesComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'our-partners',component:OurPartnersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
