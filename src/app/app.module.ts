import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { MoreFlexComponent } from './components/more-flex/more-flex.component';
import { FromtoComponent } from './components/planner/fromto/fromto.component';
import { PlanbarComponent } from './components/planner/planbar/planbar.component';
import { PlannerComponent } from './components/planner/planner.component';
import { PlannerCalendarComponent } from './components/planner/calendar/calendar.component';
import { SelectableComponent } from './components/selectable/selectable.component';
import { ControlsComponent } from './components/planner/controls/controls.component';
import { ColorsComponent } from './pages/fundamentals/colors/colors.component';
import { SubnavComponent } from './pages/fundamentals/subnav/subnav.component';
import { PageFormComponent } from './pages/form/form.component';
import { PageIndexComponent } from './pages/index/index.component';
import { PageCampaignComponent } from './pages/campaign/campaign.component';
import { PageAbonnementenComponent } from './pages/abonnementen/abonnementen.component';
import { PageAbonnementenDetailComponent } from './pages/abonnementen-detail/abonnementen-detail.component';
import { PageCheckoutComponent } from './pages/kaartjes/checkout/checkout.component';
import { PageKaartjesComponent } from './pages/kaartjes/kaartjes.component';
import { PageHomeComponent } from './pages/home/home.component';
import { PageReisplannerComponent } from './pages/reisplanner/reisplanner.component';
import { PageTrajectComponent } from './pages/kaartjes/traject/traject.component';
import { PageFundamentalsComponent } from './pages/fundamentals/fundamentals.component';
import { TypeComponent } from './pages/fundamentals/type/type.component';

const appRoutes: Routes = [
  { path: '', component: PageIndexComponent },
  { path: 'home', component: PageHomeComponent },
  { path: 'form', component: PageFormComponent },
  { path: 'reisplanner', component: PageReisplannerComponent },
  { path: 'campaign', component: PageCampaignComponent },
  { path: 'abonnementen', component: PageAbonnementenComponent },
  { path: 'abonnementen/:id', component: PageAbonnementenDetailComponent },
  { path: 'kaartjes', component: PageKaartjesComponent },
  { path: 'kaartjes/checkout', component: PageCheckoutComponent },
  { path: 'kaartjes/traject', component: PageTrajectComponent },
  { path: 'fundamentals', component: PageFundamentalsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageFormComponent,
    PageIndexComponent,
    PageCampaignComponent,
    PageAbonnementenComponent,
    FooterComponent,
    PageAbonnementenDetailComponent,
    ProductTableComponent,
    ProductPreviewComponent,
    MoreFlexComponent,
    PageKaartjesComponent,
    FromtoComponent,
    PageCheckoutComponent,
    PageHomeComponent,
    PlanbarComponent,
    PlannerComponent,
    PageReisplannerComponent,
    PlannerCalendarComponent,
    PageTrajectComponent,
    SelectableComponent,
    ControlsComponent,
    PageFundamentalsComponent,
    ColorsComponent,
    SubnavComponent,
    TypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 48]
    }),
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }
