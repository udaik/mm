import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatListItem, MatNavList, MatButtonToggleModule, MatTabsModule, MatDialogModule } from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';


@NgModule({
    declarations: [
        AppComponent,
        HeaderToolbarComponent,
        SideNavComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatListModule,
        MatButtonToggleModule,
        MatButtonModule,
        FlexLayoutModule,
        MatDividerModule,
        MatGridListModule,
        MatCardModule,
        MatTabsModule,
        MatDialogModule,
        RestangularModule.forRoot(RestangularConfigFactory)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
