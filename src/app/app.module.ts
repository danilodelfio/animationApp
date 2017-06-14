import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { HomeComponent } from './home/home/home.component';
import { CarouselExampleComponent } from './carousel/carousel-example/carousel-example.component';
import { LoginComponent } from './auth/simple-login/simple-login.component';
import { AuthService } from './shared/auth.service';
import { CanActivateViaAuthGuard } from './shared/custom-can-activate';


@NgModule({
  declarations: [
    AppComponent,
    PortfolioListComponent,
    HomeComponent,
    CarouselExampleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [CanActivateViaAuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
