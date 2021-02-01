import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WooWeb';

  constructor(
    public translate: TranslateService
  ) {
    
    setTimeout(() => {
      console.log('sleep');
    }, 5000);

    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  }

}


