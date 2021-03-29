import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T extends {id:number}> {

  recordName:string = '';
  list$:BehaviorSubject<T[]> = new BehaviorSubject<T[]>([]);
  error$:Subject<string> = new Subject();

  constructor(
    public http:HttpClient,
    public config:ConfigService,
    @Inject('dataType') entityName:string,
    ) {
      this.recordName = entityName;
    }
  
  getAll():void {
    this.http.get<T[]>(`${this.config.apiUrl}/${this.recordName}`).subscribe(
      data => this.list$.next(data),
      err => this.error$.next(err)
    );
  }
}
