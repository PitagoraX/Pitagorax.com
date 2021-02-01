import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AudiovisualComponent } from './audiovisual/audiovisual.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { CloudComponent } from './cloud/cloud.component';
import { ContactComponent } from './contact/contact.component';
import { DesignComponent } from './design/design.component';
import { DevelopmentComponent } from './development/development.component';
import { LandingComponent } from './landing/landing.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'product', component: ProductComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'auidovisual', component: AudiovisualComponent },
  { path: 'development', component: DevelopmentComponent },
  { path: 'design', component: DesignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
