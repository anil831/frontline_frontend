import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faChartPie, faBagShopping,faBookOpen, faFileSignature,faUserGroup,faBlog,faInstitution} from '@fortawesome/free-solid-svg-icons';
import {faFolderClosed,faUser } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faChartPie=faChartPie;
  faBagShopping=faBagShopping;
  faFolderClosed=faFolderClosed;
  faBookOpen=faBookOpen;
  faUser=faUser;
  faFileSignature=faFileSignature;
  faUserGroup=faUserGroup;
  faBlog=faBlog;
  faInstitution=faInstitution;

  dashboards = [
    {
      title: 'Dashboard',
      icon:faChartPie
    },
    {
      title: 'eCommerce',
      icon:faBagShopping
    },
    {
      title: 'Projects',
      icon:faFolderClosed
    },
    {
      title: 'Online Courses',
      icon:faBookOpen
    }
  ]

  pages = [
    {
      title: 'User Profile',
      icon:faUser
    },
    {
      title: 'Account',
      icon:faFileSignature
    },
    {
      title: 'Corporate',
      icon:faUserGroup
    },
    {
      title: 'Blog',
      icon:faBlog
    },
    {
      title: 'Social',
      icon:faInstitution
    }
  ]

  
}
