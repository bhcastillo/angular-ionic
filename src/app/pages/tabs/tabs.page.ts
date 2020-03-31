import { Component } from '@angular/core';
import { Lista } from '../../models/lista.module';
import { DeseosService } from '../../services/deseos.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  lista: Lista[];
  constructor(public deseosService: DeseosService) {}
}
