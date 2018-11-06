import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private h:HttpClient) { }

  all(cb){
    this.h.get('/api/tasks').subscribe(data=>cb(data));
  }
}
