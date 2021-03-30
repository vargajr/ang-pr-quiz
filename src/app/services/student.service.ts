import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService<Student>{

  constructor(
    public http:HttpClient,
    public config:ConfigService
    ) {
      super(http, config, 'students');
    }
}
