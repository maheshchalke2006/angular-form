import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppMyComponent} from './app.mycomponent'
import {AppFormComponent} from './app.formcomponent'
import {AppModelFormComponent} from './app.modelformcomponent'
import {AppReactiveFormComponent} from './app.reactiveformcomponent'

import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'


@NgModule({
    declarations:[AppMyComponent,AppFormComponent,AppModelFormComponent,AppReactiveFormComponent],
    imports:[BrowserModule,FormsModule,ReactiveFormsModule],
    bootstrap:[AppMyComponent]
})

export class MyModule{
    
}