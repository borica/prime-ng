import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPorfolioComponent } from './components/main-porfolio/main-porfolio.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { MainNavigatorComponent } from './components/main-navigator/main-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPorfolioComponent,
    ProfileCardComponent,
    MainNavigatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    DividerModule,
    AvatarModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
