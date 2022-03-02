import { Injectable, Injector, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { LoaderInterceptor } from './loadingInterceptor';

export const HTTP_DYNAMIC_INTERCEPTORS = new InjectionToken<HttpInterceptor>('HTTP_DYNAMIC_INTERCEPTORS');
import { tap } from 'rxjs/operators';

// HttpServiceService注入到root会影响到文件上传接口！！！
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService extends HttpClient  {

  public configUrl = 'assets/menu.json';
  public menulist = {};
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

  getMenu() { // 获取菜单列表
    return this.http.get(this.configUrl).pipe(tap((d) => {
      this.menulist = {...d}; // tap 代替 do操作符，存一下数据
    }));
  }
  // 获取questionnaire数据
  getQuestionnaireSection() {
    return this.http.get('assets/switchSection.json');
  }
  getQuestionnaireList() {
    return this.http.get('assets/switchQuestionnaire.json');
  }
  // 获取文档下载数据
  getDownloadDoc() {
    return this.http.get('assets/downloaddoc.json');
  }
  
  getLocalComponent() {
    return this.http.get('assets/getLocalComponent.json');
  }

  GetPromise<T>(url): Promise<T> {
    return this.http.get<T>(url).toPromise()
  }

  PostPromise<T>(url, data): Promise<T> {
    const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.post<T>(url, data, options).toPromise()
  }

  PostFormDataFileUpload<T>(url, data): Promise<T> {
    const options = { headers: new HttpHeaders({'Content-Type': 'multipart/form-data'})}
    return this.http.post<T>(url, data, options).toPromise()
  }

  loading(spinnerText?: string) {
    const loaderInterceptor = this.injector.get(LoaderInterceptor).configure(spinnerText);
    console.log(loaderInterceptor);
  }
}
