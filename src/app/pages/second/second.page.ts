import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { storage, initializeApp } from 'firebase';
import { FIREBASE_CONFIG } from '../../firebase.config';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { Observable } from 'rxjs/Observable';
// import { Observable} from 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  myfoto: any;


  constructor(private menuCtrl: MenuController,
             /* private camera: Camera,
              public navCtrl: NavController,*/
    ) {



     // initializeApp( FIREBASE_CONFIG );
    }
/*
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

      this.camera.getPicture(options).then((imageData) => {
        this.myfoto = 'data:image/jpeg;base64,' + imageData;
      },
      );

      const result = await this.camera.getPicture(options);

     // const image = `data:image/jpeg;base64,${result}`;
      this.myfoto = `data:image/jpeg;base64,${result}`;

      const pictures = storage().ref('pictures/myPhoto');



      pictures.putString(this.myfoto, 'data_url');
    } catch (e) {
        console.error(e);
      }
    }*/


  ngOnInit() {
  }

  openMenu() {
    this.menuCtrl.toggle();
  }
}
