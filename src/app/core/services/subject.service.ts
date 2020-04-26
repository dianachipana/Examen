import { Injectable } from '@angular/core';
import { ServicesModule } from './subject.module';
import { HttpClient } from '@angular/common/http';
import { SubjectResponse, DetailSubject } from '../interfaces/subject-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: ServicesModule
})
export class SubjectService {

  constructor(private http:HttpClient) { }

  getSubject():Observable<SubjectResponse[]>{
     return this.http.get<SubjectResponse[]>('https://ionicapp-7a398.firebaseio.com/galaxydemy/subjects.json')
  }

  getDetailSubject(id:string):Observable<DetailSubject[]>{
    return this.http.get<DetailSubject[]>(`https://ionicapp-7a398.firebaseio.com/galaxydemy/subject/${id}.json`)


  }
}
