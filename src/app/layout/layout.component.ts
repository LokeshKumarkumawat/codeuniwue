import { Component, OnInit } from '@angular/core';
declare var initMetisMenu: any; // Declare the function so TypeScript knows it exists
declare var initLeftMenuCollapse: any;
declare var initActiveMenu: any;
declare var initComponents: any;
declare var Waves: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  ngOnInit(): void {
          // Call the functions from theme.js
    initMetisMenu();
    initLeftMenuCollapse();
    initActiveMenu();
    initComponents();
    Waves.init();
  }

}
