
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Layouts/header/header.component';
import { SidebarComponent } from './Components/Layouts/sidebar/sidebar.component';
import { FooterComponent } from './Components/Layouts/footer/footer.component';
import { ContentMainComponent } from './Components/Layouts/content-main/content-main.component';
import { SafeHtmlPipe } from './safe-html-pipe';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

//import { SafeHtmlPipe } from './safe-html-pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ContentMainComponent,
    SafeHtmlPipe


    //

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
