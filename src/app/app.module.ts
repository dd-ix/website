import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {IconLogoComponent} from "./icons/icon-logo/icon-logo.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IconMenuComponent} from "./icons/icon-menu/icon-menu.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        IconLogoComponent,
        IconMenuComponent,
    ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
