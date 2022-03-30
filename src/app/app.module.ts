import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PageFormComponent } from './pages/form/form.component';
import { PageHomeComponent } from './pages/home/home.component';
import { PageCampaignComponent } from './pages/campaign/campaign.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'form', component: PageFormComponent },
  { path: 'campaign', component: PageCampaignComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageFormComponent,
    PageHomeComponent,
    PageCampaignComponent,
    LogoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }
