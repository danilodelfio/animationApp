import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { HomeComponent } from './home/home/home.component';
import { CarouselExampleComponent } from './carousel/carousel-example/carousel-example.component';
import { LoginComponent } from './auth/simple-login/simple-login.component';
import { CanActivateViaAuthGuard } from './shared/custom-can-activate';

const appRoutes: Routes = [
  { path: 'portfolio', component: PortfolioListComponent, canActivate: [CanActivateViaAuthGuard] },
  { path: 'home', component: HomeComponent},
  { path: 'carousel', component: CarouselExampleComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
