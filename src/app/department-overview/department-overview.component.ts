import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Department } from '../departments';
import { forkJoin, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-department-overview',
  templateUrl: './department-overview.component.html',
  styleUrls: ['./department-overview.component.css']
})
export class DepartmentOverviewComponent implements OnInit {

  public departments = [];
  public description;
  public departmentId;

  constructor(private route: ActivatedRoute, private _departmentService: DepartmentsService) { }

  ngOnInit() {
    
    this._departmentService.getDepartments()
    .subscribe( data =>  { 
      this.departments = data
      this.description = this.getDescriptionById(this.departmentId);
    });

    this.route.parent.params.subscribe(params => {
      this.departmentId = +params['id'];
    });

    // forkJoin([this.firstSub, this.secondSub]).pipe(
    //   map(() => {
    //       this.description = this.getDescriptionById(this.departmentId);
    //   })
    // )}
  }

  getDescriptionById(departmentId): string {
    return this.departments.find( c => c.id === departmentId)['overview'];

  }

}
