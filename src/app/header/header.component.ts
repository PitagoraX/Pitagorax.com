import { Component, HostListener, OnInit, SimpleChange } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  language = false;
  serSubmenu = false;
  serSel = false;
  proSubmenu = false;
  proSel = false;
  contactRoute = false;
  constructor(public translate: TranslateService, private router: Router) {
    this.router.events.subscribe((e: RouterEvent) => {
      if (e instanceof NavigationEnd) {
        if (e.url == '/cloud') {
          this.serSel = true;
        } else if (e.url == '/product') {
          this.serSel = true;
        } else {
          this.serSel = false;
        }
        console.log(this.serSel);
      }
    });
  }

  ngOnInit(): void {}

  changeLanguage(code: string) {
    this.translate.setDefaultLang(code);
    this.language = false;
  }
}
