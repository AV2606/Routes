import { Component, OnInit } from '@angular/core';
import { Routes } from 'src/app/app.module';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  Routes=Routes;

  constructor() { }

  ngOnInit(): void {
  }

  goto(route:Routes){
    
  }
}
