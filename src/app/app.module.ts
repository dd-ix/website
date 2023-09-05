import {NgModule} from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {IconLogoComponent} from "./icons/icon-logo/icon-logo.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IconMenuComponent} from "./icons/icon-menu/icon-menu.component";
import {IconHubComponent} from "./icons/icon-hub/icon-hub.component";
import {IconNewsComponent} from "./icons/icon-news/icon-news.component";
import {IconGroupComponent} from "./icons/icon-group/icon-group.component";
import {IconPhoneComponent} from "./icons/icon-phone/icon-phone.component";
import {IconFaceComponent} from "./icons/icon-face/icon-face.component";

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
    IconHubComponent,
    IconNewsComponent,
    IconGroupComponent,
    IconPhoneComponent,
    IconFaceComponent,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
