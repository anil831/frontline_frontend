import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ChartModule,
  ChartAllModule,
  AccumulationChartModule,
} from '@syncfusion/ej2-angular-charts';

import { CategoryService } from '@syncfusion/ej2-angular-charts';
import { LineSeriesService } from '@syncfusion/ej2-angular-charts';

import {
  PieSeriesService,
  AccumulationLegendService,
  AccumulationTooltipService,
  AccumulationAnnotationService,
  AccumulationDataLabelService,
} from '@syncfusion/ej2-angular-charts';

import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { } from '@fortawesome/free-regular-svg-icons';
import {
  faCartShopping,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ChartModule,
    ChartAllModule,
    AccumulationChartModule,
    CommonModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [
    CategoryService,
    LineSeriesService,
    PieSeriesService,
    AccumulationLegendService,
    AccumulationTooltipService,
    AccumulationAnnotationService,
    AccumulationDataLabelService,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  faCartShopping = faCartShopping;
  faShoppingBag = faShoppingBag;

  newMessage: string = '';

  public customerReviews: { name: string; time: string; text: string; star: number; }[] = [];

  public tasks: { task: string; due: string; }[] = [];

  public bestSellingProductsGroup = [
    [
      {
        heading: 'Stylish Cricket & Walking Light Weight Shoes',
        originalPrice: '$280',
        price: '$140',
      },
      {
        heading: 'Combo Pack of 2 Sports Shoes Running Shoes',
        originalPrice: '$320',
        price: '$280',
      },
      {
        heading: 'Combo Pack of 2 Sports Shoes Running Shoes',
        originalPrice: '$320',
        price: '$280',
      },
    ],
    [
      {
        heading: 'Stylish running Light Weight Shoes',
        originalPrice: '$280',
        price: '$140',
      },
      {
        heading: 'Combo Pack of 2 Sports Shoes Running Shoes',
        originalPrice: '$320',
        price: '$280',
      },
      {
        heading: 'Combo Pack of 2 Sports Shoes Running Shoes',
        originalPrice: '$320',
        price: '$280',
      },
    ],
  ];

  public products = [
    {
      info: 'ByeWind',
      date: new Date('2024-06-24'),
      amount: 942,
      status: 'In Progress',
      color: '',
    },
    {
      info: 'Natali  Craig',
      date: new Date('2022-03-10'),
      amount: 881,
      status: 'Complete',
      color: '',
    },
    {
      info: 'Drew Cano',
      date: new Date('2022-11-10'),
      amount: 409,
      status: 'Pending',
      color: '',
    },
    {
      info: 'Orlando Diggs',
      date: new Date('2022-12-20'),
      amount: 953,
      status: 'Approved',
      color: '',
    },
    {
      info: 'Andi Lane',
      date: new Date('2022-07-25'),
      amount: 907,
      status: 'Rejected',
      color: '',
    },
  ];

  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
  public chartData?: Object[];

  /**Pie chart - spendings */
  pieData?: Object[];

  public legendSettings?: Object;
  public startAngle?: number;
  public endAngle?: number;
  public enableAnimation?: boolean;
  public radius?: string;
  public tooltipSettings?:Object;

  dataLabel = { visible: true, name: 'text', position: 'Outside' };


  messages = [
    {
      sender: 'Geneva',
      text: 'Hello!',
      time: '10:00',
      avatar: '../../assets/images/icon-5359553_640.webp',
    },
    {
      sender: 'Dominic',
      text: 'Hi, How are you? What about our next meeting?',
      time: '10:01',
      avatar: '../../assets/images/icon-5359553_640.webp',
    },
    {
      sender: 'Geneva',
      text: 'Yeah everything is fine',
      time: '10:01',
      avatar: '../../assets/images/icon-5359553_640.webp',
    },
    {
      sender: 'Dominic',
      text: "Wow that's great",
      time: '10:02',
      avatar: '../../assets/images/icon-5359553_640.webp',
    },
    {
      sender: 'Geneva',
      text: 'Yeah everything is fine',
      time: '10:01',
      avatar: '../../assets/images/icon-5359553_640.webp',
    },
    {
      sender: 'Dominic',
      text: "Wow that's great",
      time: '10:02',
      avatar: '../../assets/images/icon-5359553_640.webp',
    },
  ];



  ngOnInit(): void {

    this.initializeTasks();
    this.initializeCustomerReviews();
    this.initializeTabUsersChart();
    this.initializeSpending();
    this.initializeProducts();
    this.scrollChatToRecent();

  }

  public trafficData: { name: string; trafficPercentage: number }[] = [
    { name: 'Google', trafficPercentage: 70 },
    { name: 'YouTube', trafficPercentage: 50 },
    { name: 'Instagram', trafficPercentage: 40 },
    { name: 'Pinterest', trafficPercentage: 30 },
    { name: 'Facebook', trafficPercentage: 20 },
    { name: 'Twitter', trafficPercentage: 10 },
  ];


  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({
        sender: 'Dominic',
        text: this.newMessage,
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        avatar: 'assets/dominic-avatar.png',
      });
      this.newMessage = '';
    }
  }

  scrollChatToRecent() {
    // document.addEventListener('DOMContentLoaded', () => {
    //   const scrollContainer = document.getElementById('scrollContainer');

    //   if (scrollContainer) {
    //     // Scroll to the bottom
    //     scrollContainer.scrollTop = scrollContainer.scrollHeight;

    //   }
    // });
  }


  initializeCustomerReviews() {

    const customerReviews = [
      {
        name: 'Sally D.',
        time: '20m ago',
        text: 'It is over qualified and easy to use, thank you.',
        star: 5,
      },
      {
        name: 'Michael K.',
        time: '1 day ago.',
        text: 'An improvement is needed asap.',
        star: 2,
      },
      {
        name: 'Deniz T.',
        time: '1 day ago',
        text: 'Works well!',
        star: 5,
      },
      {
        name: 'Melissa',
        time: '3 day ago',
        text: 'Great service and useful interface.',
        star: 5,
      },
      {
        name: 'Melissa',
        time: '3 day ago',
        text: 'Great service and useful interface.',
        star: 5,
      },
    ];

    while (customerReviews.length < 20) {
      customerReviews.push(...customerReviews);
    }

    this.customerReviews = customerReviews;

  }


  initializeTasks() {
    const tasks = [
      {
        task: 'ios App home page',
        due: 'Due on 23 Aug, 2019',
      },
      {
        task: 'write a release note for Shreyu',
        due: 'Due on 22 Aug, 2019',
      },
      {
        task: 'Invite Greeva to a project shreyu admin',
        due: 'Due on 21 Aug, 2019',
      },
      {
        task: 'Enable analytics tracking for main website',
        due: 'Due on 20 Aug, 2019',
      },
      {
        task: 'Invite user to a project',
        due: 'Due on 21 Aug, 2019',
      },
      {
        task: 'write a release note',
        due: 'Due on 21 Aug, 2019',
      },
    ]

    while (tasks.length < 20) {
      tasks.push(...tasks);
    }
    this.tasks = tasks;
  }


  initializeSpending() {

    this.pieData = [
      {name:"Server",payment:15,text:"15%", amountSpend:"100000"},
      {name:"Hoisting",payment:20,text:"20%",amountSpend:"120000"},
      {name:"Services",payment:15,text:"15%",amountSpend:"150000"},
      {name:"Others",payment:40,text:"40%",amountSpend:"900000"}
    ];

    this.legendSettings = {
      visible: true,
      position:'Bottom',
      height:"8%",
      width:"35%"
    };

    this.tooltipSettings = {
      enable: true,
      template: ' <div style="border: 1px solid #ccc; border-radius: 5px; padding: 10px; background-color: #fff; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">'+
      '<div style="font-weight: bold; font-size: 14px; color: #333;">${x}</div>'+
      '<div style="margin-top: 5px; color: #555;">Payment: <span style="font-weight: bold;">${y}</span></div>'+
    '</div>'
    };
    this.startAngle = 0;
    this.endAngle = 360;
    this.radius = 'r';
    this.enableAnimation = true;
  }

  initializeProducts() {
    this.products = this.products.map((product) => {
      switch (product.status) {
        case 'In Progress':
          return { ...product, color: 'violet' };
        case 'Complete':
          return { ...product, color: 'green' };
        case 'Pending':
          return { ...product, color: 'blue' };
        case 'Approved':
          return { ...product, color: 'orange' };
        default:
          return { ...product, color: 'grey' };
      }
    });

  }

  initializeTabUsersChart() {

    this.chartData = [
      { month: 'Jan', thisYear: 7, lastYear: 0 },
      { month: 'Feb', thisYear: 3, lastYear: 2 },
      { month: 'Mar', thisYear: 4, lastYear: 6 },
      { month: 'Apr', thisYear: 1, lastYear: 9 },
      { month: 'May', thisYear: 3, lastYear: 12 },
      { month: 'Jun', thisYear: 9, lastYear: 6 },
      { month: 'Jul', thisYear: 12, lastYear: 4 },
      { month: 'Aug', thisYear: 19, lastYear: 10 },
      { month: 'Sep', thisYear: 14, lastYear: 8 },
      { month: 'Oct', thisYear: 22, lastYear: 18 },
      { month: 'Nov', thisYear: 19, lastYear: 22 },
      { month: 'Dec', thisYear: 25, lastYear: 19 },
    ];
    this.primaryXAxis = {
      valueType: 'Category',
      majorGridLines: { width: 0 }, // Disable vertical grid lines
    };

    this.primaryYAxis = {
      labelFormat: '${value}K',
      majorGridLines: { width: 0 }, // Disable horizontal grid lines
    };

  }


  // Returns an array of segment widths for each website based on trafficPercentage
  getSegments(trafficPercentage: number): number[] {
    const segments = [];
    const fullSegments = Math.floor(trafficPercentage / 25); // Each segment is 25% of the total
    const remainingPercentage = trafficPercentage % 25; // Remainder for the last segment

    // Add full segments
    for (let i = 0; i < fullSegments; i++) {
      segments.push(100); // 100% filled segment
    }

    // Add a partially filled segment if there is remaining traffic
    if (remainingPercentage > 0) {
      segments.push((remainingPercentage / 25) * 100); // Partial fill
    }

    // Fill the remaining empty segments (if any)
    while (segments.length < 3) {
      segments.push(0); // 0% filled segment
    }

    return segments;
  }

}
