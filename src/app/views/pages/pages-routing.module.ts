import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NetworkComponent } from './network/network.component';
import { MatchesComponent } from './matches/matches.component';
import { ChatComponent } from './chat/chat.component';
import { MarketComponent } from './market/market.component';
import { WalletComponent } from './wallet/wallet.component';
import { NewsComponent } from './news/news.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
    {
        path: 'profile',
        component: UserProfileComponent
    },
    {
      path: 'network',
      component: NetworkComponent
    },
    {
      path: 'matches',
      component: MatchesComponent
    },
    {
      path: 'chat',
      component: ChatComponent
    },
    {
      path: 'market',
      component: MarketComponent
    },
    {
      path: 'wallet',
      component: WalletComponent
    },
    {
      path: 'news',
      component: NewsComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
