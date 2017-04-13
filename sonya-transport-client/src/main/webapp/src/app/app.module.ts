import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module'

import {AppComponent} from './app.component';
import {MaxNumberDirective} from './directive/validator/max-number.directive';
import {MinNumberDirective} from './directive/validator/min-number.directive';
import {TransportProfileForm} from './form/transport-profile/transport-profile.form';

@NgModule({
    declarations: [
        AppComponent,
        MaxNumberDirective,
        MinNumberDirective,
        TransportProfileForm,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        BrowserAnimationsModule,
        AngularMaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
