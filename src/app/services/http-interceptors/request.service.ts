import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

import { removeObjectEmpty, removeObjectEmptyValue } from '../../utils';

import * as _ from 'lodash';

@Injectable()
export class RequestService {

    private baseUrl = environment.nestApiUrl;

    constructor(private http: HttpClient) {}

    private makeUrl(url: string = ''): string {
        const str = _.startsWith(url, ['http://', 'https://']) ? url : (this.baseUrl + url);
        return str;
    }

    protected get(url: string, params?: object): Observable<any> {
        let httpParams = new HttpParams();
        if (params) {
            params = removeObjectEmptyValue(params); // remove null, undefined, empty string
            // tslint:disable-next-line: forin
            for (const key in params) {
                httpParams = httpParams.set(key, params[key]);
            }
        }
        return this.http.get(this.makeUrl(url), { params: httpParams });
    }

    protected post(url: string, params?: any, opts?: object): Promise<any> {
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
        if (!_.isEmpty(opts)) {
            options = _.merge(options, removeObjectEmpty(opts)); // remove null, undefined
        }
        return this.http.post(this.makeUrl(url), removeObjectEmpty(params), options).toPromise();
    }

	protected postFormData(url: string, params?: FormData): Observable<HttpEvent<any>> {
        // console.log(url);
		const req = new HttpRequest('POST', this.makeUrl(url), params, {
			reportProgress: true,
			headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
		});
        // console.log(req);
		return this.http.request(req);
    }

}
