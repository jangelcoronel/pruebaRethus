import { Component } from '@angular/core';

@Component({
  selector: 'shared-toolbar-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  onEventLogin() {
    console.log('inciar');

  }
}
