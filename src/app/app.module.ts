import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AppNavComponent } from './appNav/appNav.component';
import { PageFormComponent } from './pages/pageForm/pageForm.component';
import { PageHomeComponent } from './pages/pageHome/pageHome.component';

const appRoutes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'form', component: PageFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
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
