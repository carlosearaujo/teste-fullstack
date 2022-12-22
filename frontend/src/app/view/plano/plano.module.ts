import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PlanoComponent } from "./plano.component";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from "@angular/common";
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
    imports: [
        CommonModule, TableModule, ButtonModule, PanelModule, InputTextModule, FormsModule ,ReactiveFormsModule, InputNumberModule,
        RouterModule.forChild([ { path: '', component: PlanoComponent } ])
    ],
    declarations: [ PlanoComponent ]
})
export class PlanoModule{}