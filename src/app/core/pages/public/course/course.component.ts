import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SubjectResponse } from 'src/app/core/interfaces/subject-response.interface';
import { SubjectService } from 'src/app/core/services/subject.service';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  listSubjects: SubjectResponse[] = []
  constructor( 
    private subject:SubjectService,
    private router: Router
    ) { }

  ngOnInit():void {

    this.subject.getSubject()
    .subscribe(
      subject=> this.listSubjects=subject,
      err=>console.log(err)
    )
  }
  
  gosubjectDetail(id: string){
    this.router.navigate(['curso/detalle-curso', id]);
  }
}
