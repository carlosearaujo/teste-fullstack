import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  public items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Beneficiário', routerLink: '/beneficiario', icon: 'pi pi-users'
    },
    {
        label: 'Plano', routerLink: '/plano', icon: 'pi pi-calendar'
    },
    {
      label: 'Logout', routerLink: '/login', icon: 'pi pi-power-off'
    }];
  }

}
