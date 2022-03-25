import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppNavComponent } from './appNav/appNav.component';
import { PageFormComponent } from './pages/form/form.component';
import { PageHomeComponent } from './pages/home/home.component';
import { PageCampaignComponent } from './pages/campaign/campaign.component';

const appRoutes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'form', component: PageFormComponent },
  { path: 'campaign', component: PageCampaignComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    PageFormComponent,
    PageHomeComponent,
    PageCampaignComponent,
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
