import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { SiteNavComponent } from './site-nav/site-nav.component';
import { PageFormComponent } from './page-form/page-form.component';
import { PageHomeComponent } from './page-home/page-home.component';

const appRoutes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'form', component: PageFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SiteNavComponent,
    PageFormComponent,
    PageHomeComponent,
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
