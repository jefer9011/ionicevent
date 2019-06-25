import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Observable } from 'rxjs/Observable';

// firebase
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireModule } from 'angularfire2';
// import { Camera, CameraOriginal } from '@ionic-native/camera';
import { Camera } from '@ionic-native/camera/ngx';

/*
export const firebaseConfig = {
  apiKey: 'AIzaSyBSm6jMpurl9V8n4iRUZzkYNvCGdPp7O6M',
  authDomain: 'crudionic-b4b7a.firebaseapp.com',
  databaseURL: 'https://crudionic-b4b7a.firebaseio.com',
  projectId: 'crudionic-b4b7a',
  storageBucket: 'crudionic-b4b7a.appspot.com',
  messagingSenderId: '138402397677',
  appId: '1:138402397677:web:f0970a2439bede29'
};
*/

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
           // AngularFireModule.initializeApp(firebaseConfig),
           // AngularFireDatabaseModule,
         //   Observable,
           // AngularFireDatabase,
            // AngularFireAuthModule
          ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
