import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { CourseComponent } from './public/course/course.component';
import { CourseDetailComponent } from './public/course-detail/course-detail.component';

const pagesroutes : Routes = [
    { path:'',
    component:PagesComponent ,
    children:[
      {path:'', redirectTo:'/curso', pathMatch:'full' },
       {path:'curso', component:CourseComponent},
       {path:'curso/detalle-curso/:id', component:CourseDetailComponent},
     
      
    ]
  }
];

export const PagesRoutingModule= RouterModule.forChild( pagesroutes );
