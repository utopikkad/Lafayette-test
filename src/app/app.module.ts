import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './custom.pipe';
import {NgForm, FormsModule} from '@angular/forms';


import { DataService } from './services/data.services';
import { TestComponent } from './test/test.component';
import { BorderCardDirective } from './border-card.directive';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BorderCardDirective,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
