import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-department-contact',
  templateUrl: './department-contact.component.html',
  styleUrls: ['./department-contact.component.css']
})
export class DepartmentContactComponent implements OnInit {

  public departments = [];
  public departmentId;
  public contact;

  constructor(private route: ActivatedRoute, private _departmentService: DepartmentsService) { }

  ngOnInit() {

    this._departmentService.getDepartments()
    .subscribe( data =>  { 
      this.departments = data
      this.contact = this.getContactById(this.departmentId);
    });

    this.route.parent.params.subscribe( params => {
      this.departmentId =+ params['id'];
      
  });
}

  getContactById(departmentId) : string{
    return this.departments.find( c => c.id === departmentId)['contact'];
  }

}
