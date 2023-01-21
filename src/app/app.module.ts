import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication.service';
import { HomeModule } from './pages/home/home.module';
import { SharedCompModule } from './shared/components/shared-comp.module';
import { ProfileModule } from './pages/profile/profile.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HomeModule,
    SharedCompModule,
    ProfileModule,
    LoginModule,
    RegisterModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
