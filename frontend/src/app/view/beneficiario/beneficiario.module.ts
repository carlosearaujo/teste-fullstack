import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BeneficiarioComponent } from "./beneficiario.component";
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from "@angular/common";
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
    imports: [
        CommonModule, TableModule, ButtonModule, PanelModule, InputTextModule, FormsModule ,ReactiveFormsModule, InputMaskModule, DropdownModule,
        RouterModule.forChild([ { path: '', component: BeneficiarioComponent } ])
    ],
    declarations: [ BeneficiarioComponent ]
})
export class BeneficiarioModule{}