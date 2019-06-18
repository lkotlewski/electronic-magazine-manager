import { Component } from '@angular/core'
import {AdalService} from 'adal-angular4'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend'

  private adalConfig = {
    tenant: '[3b50229c-cd78-4588-9bcf-97b7629e2f0f]',
    clientId: '[758357f9-a7d0-45d7-882f-daf8eb7117c0]',
    redirectUri: 'https://localhost/auth-callback]',
    postLogoutRedirectUri: '[https://localhost/logout]',
    endpoints: {
      '[api]': '[758357f9-a7d0-45d7-882f-daf8eb7117c0]'
    }
  }

  constructor(private adal: AdalService) {
    this.adal.init(this.adalConfig)
  }
}
