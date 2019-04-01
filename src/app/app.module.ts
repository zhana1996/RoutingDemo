import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';//the third step in routing option(1/2)
import { AppComponent } from './app.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentsService } from './departments.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DepartmentDetailComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,//the third step in routing option(2/2)
    HttpClientModule
  ],
  providers: [DepartmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
