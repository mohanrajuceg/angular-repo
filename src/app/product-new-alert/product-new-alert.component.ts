import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'app-product-new-alert',
  templateUrl: './product-new-alert.component.html',
  styleUrls: ['./product-new-alert.component.css'] 
})

export class ProductNewAlertComponent implements OnInit {

  @Input() product;
  @Output() newNotify = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
}