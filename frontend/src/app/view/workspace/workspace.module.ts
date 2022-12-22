import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/guard/auth.guard";
import { WorkspaceComponent } from "./workspace.component";
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';

const routes: Routes = [
    { path: '', component: WorkspaceComponent, canActivate: [ AuthGuard ], children: [
        { path: '', loadChildren: () => import('../plano/plano.module').then(m => m.PlanoModule) },
        { path: 'plano', loadChildren: () => import('../plano/plano.module').then(m => m.PlanoModule) },
        { path: 'beneficiario', loadChildren: () => import('../beneficiario/beneficiario.module').then(m => m.BeneficiarioModule) }
    ] }
]
@NgModule({
    imports: [ MenuModule, PanelModule, RouterModule.forChild(routes) ],
    declarations: [ WorkspaceComponent ]
})
export class WorkspaceModule{

}