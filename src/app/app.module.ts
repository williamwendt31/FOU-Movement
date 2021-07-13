import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsComponent } from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';
import { DonationFormComponent } from './donation-form/donation-form.component';
import { MatMenuModule } from '@angular/material/menu';
import { FounderBackgroundComponent } from './ui-components/founder-background/founder-background.component';
import { FounderPictureComponent } from './ui-components/founder-picture/founder-picture.component';
@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    HomeComponent,
    DonationFormComponent,
    FounderBackgroundComponent,
    FounderPictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
