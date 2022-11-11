import { Injectable } from '@angular/core';
import { reject } from 'lodash-es';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public saveLocalData(key: string, value: string): Promise<any> {
    return new Promise((resolve,reject) => {
      let data = localStorage.setItem(key, value)
      resolve(data)
    })
    }
    
    public getLocalData(key: string): Promise<any> {
      return new Promise((resolve, reject) => {
        let data = localStorage.getItem(key)
        resolve(data)
      })
    }
    
    public removeLocalData(key: string): Promise<any> {
      return new Promise((resolve, reject) => {
        let data = localStorage.removeItem(key)
        resolve(data)
      })
    }
    
    public clearData() {
    localStorage.clear();
    }
    
}
