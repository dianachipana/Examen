import { NgModule } from '@angular/core';
import { CourseDetailComponent } from './public/course-detail/course-detail.component';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../services/subject.module';
import { CourseComponent } from './public/course/course.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
    declarations:[
        PagesComponent,
        CourseComponent,
        CourseDetailComponent,

   
    ],
    exports:[
        CourseComponent,
        CourseDetailComponent, 
        
    ],
    imports:[
        CommonModule,
        PagesRoutingModule,
        SharedModule,
        RouterModule,
        ServicesModule
         
    ]
})
export class PagesModule{}