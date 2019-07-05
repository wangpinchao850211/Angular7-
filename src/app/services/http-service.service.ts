import { Injectable, Injector, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { LoaderInterceptor } from './loadingInterceptor';

export const HTTP_DYNAMIC_INTERCEPTORS = new InjectionToken<HttpInterceptor>('HTTP_DYNAMIC_INTERCEPTORS');
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService extends HttpClient  {

  constructor(public http: HttpClient,
                private httpHandler: HttpHandler,
                private injector: Injector,
                @Optional() @Inject(HTTP_DYNAMIC_INTERCEPTORS) private interceptors: HttpInterceptor[] = []) {
      super(httpHandler);
  
      if (!this.interceptors) {
        // Configure default interceptors that can be disabled here
        this.interceptors = [
          // this.injector.get(ApiPrefixInterceptor),
          // this.injector.get(ErrorHandlerInterceptor)
        ];
      }
    }
  GetPromise<T>(url): Promise<T> {
    return this.http.get<T>(url).toPromise()
  }

  PostPromise<T>(url, data): Promise<T> {
    return this.http.post<T>(url, data).toPromise()
  }

  loading(spinnerText?: string) {
    const loaderInterceptor = this.injector.get(LoaderInterceptor).configure(spinnerText);
    console.log(loaderInterceptor);
  }
}
