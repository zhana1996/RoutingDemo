import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  public departments = [];
  public departmentName;
  constructor( private route: ActivatedRoute, private router: Router, public _departmentService: DepartmentsService) { }

  ngOnInit() {
   /* let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;*/
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      //let id = +params.get('id');
      this.departmentId = id;
    });

    this._departmentService.getDepartments()
    .subscribe( data => {
      this.departments = data
      this.departmentName = this.getDepartmentName(this.departmentId);
    });
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    let newName = this.getDepartmentName(previousId);
    this.departmentName = newName;
    this.router.navigate(['/departments', previousId]);
  }

  goNext(){
    let nextId = this.departmentId + 1;
    let newName = this.getDepartmentName(nextId);
    this.departmentName = newName;
    this.router.navigate(['/departments', nextId]);
    
  }

  goToDepartments(){
    let selectedId = this.departmentId ? this.departmentId : null;
   // this.router.navigate(['/departments', {id: selectedId}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route} );
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

  getDepartmentName(departmentId) : string{
    return this.departments.find( c => c.id === departmentId)['name'];
  }

}
