import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';


import { MessengerService } from './index';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        MessengerService
    ],
    declarations: [ ],
    exports: [
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }