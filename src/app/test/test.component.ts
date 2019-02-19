import { Component, OnInit, Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {NgForm, FormsModule } from '@angular/forms';

import { DataModel } from '../models/data.model';
import { DataService } from '../services/data.services';
import { FilterPipe } from '../custom.pipe';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

@Input()

  data : DataModel[];


  constructor() {
    
   }

  ngOnInit() {
    
  }
//Permet de recuperer les données et de console.loger dans la console
  ngOnChanges(): void {
    if (!this.data) { return; }

    for(var i = 0; i < this.data.length; i++) {

      console.log({"id" : +this.data[i].id, "formation" : this.data[i].name, 
      "type" : +this.data[i].type,
      "niveau" : +this.data[i].niveau,
      "longitude" : +this.data[i].longitude,
      "latitude" : +this.data[i].latitude});
    }
  }
  
}
