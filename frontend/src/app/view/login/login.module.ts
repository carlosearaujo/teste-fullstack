import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ LoginComponent ],
    imports: [ 
        FormsModule ,ReactiveFormsModule , CardModule ,InputTextModule ,ButtonModule, CommonModule,
        RouterModule.forChild([
            { path: '', component: LoginComponent }
        ])],
    exports: [RouterModule]
})
export class LoginModule{

}