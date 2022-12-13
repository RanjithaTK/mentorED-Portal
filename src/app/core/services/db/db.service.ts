import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private db: NgxIndexedDBService) { }

  add(storeName:string, id:string, controls:any) {
    return this.db.add(storeName,{ id: id, controls: controls }).pipe(
      map((form) => {
        return form
      }))
  }

  getById(storeName:string, id:string) {
    return this.db.getByID(storeName, id).pipe(
      map((form)=>{
        return form
      })
    )
  }

  getAll(storeName:string) {
    return this.db.getAll(storeName).pipe(
      map((forms)=>{
        return forms
    }))
  }

  clear(storeName:string) {
    return this.db.clear(storeName).pipe(
      map((isCleared)=>{
        return isCleared
    }))
  }
}
