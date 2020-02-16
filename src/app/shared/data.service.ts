import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/fromPromise';
import axios from 'axios';



@Injectable()
export class DataService {

  constructor() {
  }



  getData(url, params?, additionalOptions?, additionalConfigOptions?): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
    };
    const request = axios.get(url, {headers, params, ...additionalOptions, ...additionalConfigOptions});
    return Observable.fromPromise(request);
  }

  create(url, data, config?) {
    const request = axios.post(url, data, config);
    return Observable.fromPromise(request);
  }

  patch(url, data) {
    const request = axios.patch(url, data);
    return Observable.fromPromise(request);
  }

  update(url, data, config?) {
    const request = axios.put(url, data, config);
    return Observable.fromPromise(request);
  }

  remove(url, body) {
    const request = axios.delete(url, {data: body});
    return Observable.fromPromise(request);
  }


}
