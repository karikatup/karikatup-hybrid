import { AuthService } from '../providers/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';

import { HomeTab } from '../pages/home/tabs/home/home';
import { AuthorsTab } from '../pages/home/tabs/authors/authors';
import { ProfileTab } from '../pages/home/tabs/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Register,
    HomeTab,
    AuthorsTab,
    ProfileTab
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Register,
    HomeTab,
    AuthorsTab,
    ProfileTab
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
