import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments = [];

  constructor(private router: Router, private route: ActivatedRoute, private _departmentService: DepartmentsService) { }

  ngOnInit() {
    this._departmentService.getDepartments()
        .subscribe( data => this.departments = data);
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = +params.get('id');
      this.selectedId = id;
    });
  }

  onSelect(department){
    //  this.router.navigate(['/departments', department.id]);
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
