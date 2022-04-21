import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { MoreFlexComponent } from './components/more-flex/more-flex.component';
import { FromtoComponent } from './components/fromto/fromto.component';

import { PageFormComponent } from './pages/form/form.component';
import { PageIndexComponent } from './pages/index/index.component';
import { PageCampaignComponent } from './pages/campaign/campaign.component';
import { PageAbonnementenComponent } from './pages/abonnementen/abonnementen.component';
import { PageAbonnementenDetailComponent } from './pages/abonnementen-detail/abonnementen-detail.component';
import { PageCheckoutComponent } from './pages/kaartjes/checkout/checkout.component';
import { PageKaartjesComponent } from './pages/kaartjes/kaartjes.component';
import { PageHomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  { path: '', component: PageIndexComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'form', component: PageFormComponent },
  { path: 'campaign', component: PageCampaignComponent },
  { path: 'abonnementen', component: PageAbonnementenComponent },
  { path: 'abonnementen/:id', component: PageAbonnementenDetailComponent },
  { path: 'kaartjes', component: PageKaartjesComponent },
  { path: 'kaartjes/checkout', component: PageCheckoutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageFormComponent,
    PageIndexComponent,
    PageCampaignComponent,
    PageAbonnementenComponent,
    LogoComponent,
    FooterComponent,
    PageAbonnementenDetailComponent,
    ProductTableComponent,
    ProductPreviewComponent,
    MoreFlexComponent,
    PageKaartjesComponent,
    FromtoComponent,
    PageCheckoutComponent,
    PageHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }
