import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}}]
})
export class Tab2Page {
  
  @ViewChild(IonContent) content: IonContent;
  dummyList:any;
 
  constructor( ) { }
 
  ngOnInit() {
    
  }
  ScrollToTop(){
    this.content.scrollToTop(1500);
  }
}
