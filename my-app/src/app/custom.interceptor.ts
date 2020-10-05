import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponseBase, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';



@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        let ok: string;
        console.log('====================================');
        console.log('log', req);
        console.log('====================================');
        return next.handle(req).pipe(
            tap(
              // Succeeds when there is a response; ignore other events
              event => {console.log('event', event)
              if(event instanceof HttpResponse) {
                  console.log('====================================');
                  console.log('res');
                  console.log('====================================');
              }
            },
              // Operation failed; error is an HttpErrorResponse
              error => {console.log('error1111111', error)
                if(error.status === 0) {
                   
                }
            }
            ),
            // Log when response observable either completes or errors
            finalize(() => {
              console.log('====================================');
              console.log('finalzi', );
              console.log('====================================');
              return;
              
            })
          );
        }

   
}
