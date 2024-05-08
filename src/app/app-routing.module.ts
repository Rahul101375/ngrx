import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './container/pages/home/home.component';
import { DashboardComponent } from './container/pages/dashboard/dashboard.component';
import { ResourceComponent } from './container/pages/resources/resource/resource.component';
import { AboutUsComponent } from './container/pages/about-us/about-us.component';
import { ImpactStoriesComponent } from './container/pages/impactStories/impact-stories/impact-stories.component';
import { OurPartnersComponent } from './container/pages/our-partners/our-partners.component';
import { LoaderComponent } from './shared/commonComponents/loader/loader.component';
import { ForgetPasswordComponent } from './container/pages/forget-password/forget-password.component';
import { UserListComponent } from './container/admin/permission/user-list/user-list.component';
import { AuthGuard } from './container/admin/auth/auth.guard';

const routes: Routes = [
  {path:'',component:LoaderComponent},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'resources',component:ResourceComponent},
  {path:'impact-stories',component:ImpactStoriesComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'our-partners',component:OurPartnersComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {
    path : 'user' , 
    component:UserListComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
