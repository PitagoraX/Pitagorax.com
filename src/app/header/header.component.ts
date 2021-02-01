import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language = false;
  serSubmenu = false;
  constructor(
    public translate: TranslateService
  ) {
   
  }

  ngOnInit(): void {
  }

  changeLanguage(code: string)
  {
    this.translate.setDefaultLang(code);
    this.language = false;
  }
}
