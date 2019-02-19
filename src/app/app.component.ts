import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterPipe } from './custom.pipe';
import {NgForm} from '@angular/forms';


import { DataModel } from './models/data.model'
import { DataService } from './services/data.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lafayette associés';
  data: Observable<DataModel[]>
//recuperation du service avec l'observable DataModel
  constructor (private dataService : DataService) {

  }

  ngOnInit() {
    this.data = this.dataService.data;
  }
}
