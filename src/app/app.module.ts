import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { SeoAnalysisComponent } from './seo-analysis/seo-analysis.component'
import { AdCampaignsComponent } from './ad-campaigns/ad-campaigns.component'
import { MarketingServicesComponent } from './marketing-services/marketing-services.component'
import { CommunicationHubComponent } from './communication-hub/communication-hub.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [
    AppComponent,
    DashboardComponent,
    SeoAnalysisComponent,
    AdCampaignsComponent,
    MarketingServicesComponent,
    CommunicationHubComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}