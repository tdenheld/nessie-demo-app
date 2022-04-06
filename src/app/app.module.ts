import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LogoComponent } from './logo/logo.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PageFormComponent } from './pages/form/form.component';
import { PageHomeComponent } from './pages/home/home.component';
import { PageCampaignComponent } from './pages/campaign/campaign.component';
import { FooterComponent } from './footer/footer.component';
import { PageAbonnementenComponent } from './pages/abonnementen/abonnementen.component';
import { PageAbonnementenDetailComponent } from './pages/abonnementen-detail/abonnementen-detail.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';

const appRoutes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'form', component: PageFormComponent },
  { path: 'campaign', component: PageCampaignComponent },
  { path: 'abonnementen', component: PageAbonnementenComponent },
  { path: 'abonnementen/:id', component: PageAbonnementenDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageFormComponent,
    PageHomeComponent,
    PageCampaignComponent,
    PageAbonnementenComponent,
    LogoComponent,
    FooterComponent,
    PageAbonnementenDetailComponent,
    ProductTableComponent,
    ProductPreviewComponent,
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
