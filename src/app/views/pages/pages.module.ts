import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import {TranslateModule} from '@ngx-translate/core';
import { NetworkComponent } from './network/network.component';
import { MatchesComponent } from './matches/matches.component';
import { ChatComponent } from './chat/chat.component';
import { MarketComponent } from './market/market.component';
import { WalletComponent } from './wallet/wallet.component';
import { NewsComponent } from './news/news.component';
import { SettingsComponent } from './settings/settings.component';
import { TagInputModule } from 'ngx-chips';
import { AgmCoreModule } from '@agm/core';




@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    PagesRoutingModule,
    FileUploadModule,
    ReactiveFormsModule,
    TagInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmLxlfRRF8aQrA6wft3vwoqzHr3lHnIKc',
      libraries: ['places']
    }),
    FormsModule,
    TranslateModule,
  ],
  declarations: [UserProfileComponent, NetworkComponent, MatchesComponent, ChatComponent, MarketComponent, WalletComponent, NewsComponent, SettingsComponent]
})
export class PagesModule { }
