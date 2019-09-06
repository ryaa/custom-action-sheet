import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

// COMPONENTS
import { CustomActionSheetComponent } from '../../components/custom-action-sheet/custom-action-sheet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {

  }

  public presentCustomActionSheet() {
    const customActionSheetComponent = this.modalCtrl.create(CustomActionSheetComponent, null, {
      cssClass: 'custom-action-sheet'
    });
    customActionSheetComponent.onDidDismiss(() => {
    });
    customActionSheetComponent.present();
  }

}
