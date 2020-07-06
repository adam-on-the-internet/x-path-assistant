import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderSectionComponent} from './components/header-section/header-section.component';
import {FormSectionComponent} from './components/form-section/form-section.component';
import {HelpSectionComponent} from './components/help-section/help-section.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HeaderSectionComponent,
    FormSectionComponent,
    HelpSectionComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
