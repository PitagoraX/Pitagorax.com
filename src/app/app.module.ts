import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContactComponent } from './contact/contact.component';
import { CloudComponent } from './cloud/cloud.component';
import { ProductComponent } from './product/product.component';
import { DevelopmentComponent } from './development/development.component';
import { DesignComponent } from './design/design.component';
import { AudiovisualComponent } from './audiovisual/audiovisual.component';
import { BlockchainComponent } from './blockchain/blockchain.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    FooterComponent,
    ContactComponent,
    CloudComponent,
    ProductComponent,
    DevelopmentComponent,
    DesignComponent,
    AudiovisualComponent,
    BlockchainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
