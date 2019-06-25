import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { storage, initializeApp } from 'firebase';
import { FIREBASE_CONFIG } from '../../firebase.config';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { Observable } from 'rxjs/Observable';
// import { Observable} from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
// import { AngularFireModule } from 'angularfire2';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  myfoto: any;
  // post: Observable<any[]>;
  // datos: Observable<any[]>;

  constructor(public menuCtrl: MenuController,
              public navCtrl: NavController,
              private camera: Camera
             // public afDB: AngularFireDatabase
              ) {


    // this.datos = afDB.list('datos').valueChanges();
    // this.post = afDB.list('post').valueChanges();
    initializeApp( FIREBASE_CONFIG );
  }


  openMenu() {
    this.menuCtrl.toggle();
  }

  async takePhoto() {

    try {
    const options: CameraOptions = {
      quality: 70,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
/*
    this.camera.getPicture(options).then((imageData) => {
      this.myfoto = 'data:image/jpeg;base64,' + imageData;
    },
    );
*/
    const result = await this.camera.getPicture(options);

   // const image = `data:image/jpeg;base64,${result}`;
    this.myfoto = `data:image/jpeg;base64,${result}`;

    const pictures = storage().ref('pictures/myPhoto');

    pictures.putString(this.myfoto, 'data_url');
  } catch (e) {
      console.error(e);
    }
  }



    ngOnInit() {
  }

}
