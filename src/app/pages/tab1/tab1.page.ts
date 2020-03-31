import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';

import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {}
  async agregarLista() {
    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      // message: 'Message <strong>text</strong>!!!',
      inputs: [
        {
          name: 'name1',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Agregar',
          handler: () => {}
        }
      ]
    });
    await alert.present();
    this.router.navigateByUrl('/tabs/tab1/agregar');
  }
}
