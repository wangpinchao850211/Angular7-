import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, Subscriber, BehaviorSubject } from 'rxjs';


@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  private forceUpdate = false;

  constructor(private shellService: ShellService) { }


  configure(spinnerText: string): LoaderInterceptor {
    const instance = new LoaderInterceptor(this.shellService);
    this.shellService.spinnerText.next(spinnerText);
    return instance;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return new Observable((subscriber: Subscriber<HttpEvent<any>>) => {
        this.shellService.showSpinner.next(true);
        console.log("request",request);
        next.handle(request)
        .subscribe(
            event => {
              subscriber.next(event);
            },
            error => subscriber.error(error),
            () => { 
                this.shellService.showSpinner.next(false);
                subscriber.complete() 
            }
          );
    });
  }

}

export class ShellService {
  isExpanded: boolean;
  
  constructor(private httpClient: HttpClient) { }

  SideNavEvent = new BehaviorSubject(this.isExpanded);
  showSpinner = new BehaviorSubject(null);
  spinnerText = new BehaviorSubject("");

}