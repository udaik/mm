import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';
import { MatSidenavModule, MatListModule, MatTabsModule } from '@angular/material';
import { MatButtonModule, MatTooltipModule, MatDialogModule } from '@angular/material';
import { MatCardModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { MatAutocompleteModule, MatCheckboxModule, MatExpansionModule } from '@angular/material';
import { MatInputModule, MatRippleModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainAreaComponent } from './components/main-area/main-area.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { RegisterComponent } from './components/register/register.component';
import { StatusComponent } from './components/status/status.component';
import { LoginRedirectService } from './services/login-redirect.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MainAreaComponent,
        LoginComponent,
        RegisterComponent,
        StatusComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatInputModule,
        MatRippleModule,
        RouterModule.forRoot([
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [LoginRedirectService]
            },
            {
                path: 'register',
                component: LoginComponent,
                canActivate: [LoginRedirectService]

            },
            {
                path: 'status',
                component: StatusComponent,
                canActivate: [LoginRedirectService]
            }
        ]),
        BrowserAnimationsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatListModule,
        MatMenuModule,
        MatIconModule,
        MatSidenavModule,
        MatTabsModule,
        MatButtonModule,
        MatTooltipModule,
        MatDialogModule,
        FormsModule,
        MatCardModule,
        MatSelectModule
    ],
    providers: [AuthService, LoginRedirectService],
    entryComponents: [LoginComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
