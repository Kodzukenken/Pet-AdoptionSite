import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserDashComponent } from './pages/user-dash/user-dash.component';
import { CreateAccComponent } from './pages/create-acc/create-acc.component';
import { DogAdoptionComponent } from './pages/dog-adoption/dog-adoption.component';
import { CatAdoptionComponent } from './pages/cat-adoption/cat-adoption.component';
import { AuthGuard } from './auth.guard';



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '/search', component: SearchComponent},
  { path: '/user-dash', component: UserDashComponent, canActivate: [AuthGuard]},
  { path: '/landing-page', component: LandingPageComponent},
  { path: '/create-acc', component: CreateAccComponent},
  { path: '/cats', component: CatAdoptionComponent, canActivate: [AuthGuard]},
  { path: '/dogs', component: DogAdoptionComponent, canActivate: [AuthGuard]},

];
