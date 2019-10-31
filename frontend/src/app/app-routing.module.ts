import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },  
  { path: 'home', component: SplashComponent },    
  { path: 'clients', component: ClientComponent },    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
