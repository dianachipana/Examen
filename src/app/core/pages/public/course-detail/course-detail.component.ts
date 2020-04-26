import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { DetailSubject } from '../../../interfaces/subject-response.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
indice:number= -1
cardShow:boolean=false
detailSubject: DetailSubject[]
  constructor(
    private subject:SubjectService,
    private activatedRouter: ActivatedRoute
    )
     { }

  ngOnInit():void {
    const id = this.activatedRouter.snapshot.paramMap.get('id')
    console.log(id)
    this.subject.getDetailSubject(id)
    .subscribe(
      detailSubject=>this.detailSubject= detailSubject,
      err=>console.log(err)
    )
  }

  hide(i){
    this.indice=i
    this.cardShow=!this.cardShow
  }
}
