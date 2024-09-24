import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-notification-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification-panel.component.html',
  styleUrl: './notification-panel.component.css'
})
export class NotificationPanelComponent {

  notifcations= [
    {
      title:"You fixed a bug",
      time:"Just now",
      icon:"fa-bug"
    },
    {
      title:"New user registered",
      time:"59 minutes ago",
      icon:"fa-user-circle-o"

    },
    {
      title:"You fixed a bug",
      time:"12 hours ago",
      icon:"fa-bug"

    },
    {
      title:"Andi Lane subscribed to you",
      time:"Today, 11:59 AM",
      icon:"fa-rss"

    }
  ]

  activities= [
    {
      title:"You fixed a bug",
      time:"Just now",
      icon:"fa-user-circle-o"
    },
    {
      title:"New user registered",
      time:"59 minutes ago",
      icon:"fa-user-circle-o"

    },
    {
      title:"You fixed a bug",
      time:"12 hours ago",
      icon:"fa-user-circle-o"

    },
    {
      title:"Andi Lane subscribed to you",
      time:"Today, 11:59 AM",
      icon:"fa-user-circle-o"

    }
  ]

  recentContacts= [
    {
      name:"Natali Craig",
      icon:"fa-user-circle-o"
    },
    {
      name:"Drew Cano",
      icon:"fa-user-circle-o"

    },
    {
      name:"Andi Lane",
      icon:"fa-user-circle-o"

    },
    {
      name:"Koray Okumus",
      icon:"fa-user-circle-o"
    },
    {
      name:"Kate Morrison",
      icon:"fa-user-circle-o"
    },
    {
      name:"Melody Macy",
      icon:"fa-user-circle-o"
    }
  ]
}
