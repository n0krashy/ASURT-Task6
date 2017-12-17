import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PhotosComponent} from './photos/photos.component';
import {AboutUsComponent} from './about-us/about-us.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
