import { environment } from '../environment/environment';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class APIService {
    constructor(private http: Http,  public toastCtrl: ToastController) { }

    // To extract data from response
    private extractData(res: Response): void {
        const body = res.json();
        return body || {};
        // return body.data || {};
    }
    // To handle error from response
    private handleError(error: Response | any): any {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    public getRequest(url:string, option:any):any{        
        return this.http.get(`${environment.origin}`, option)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public postRequest(url:string, data: any, option: any): any {                            
            return this.http.post(`${environment.origin}`+url, data, option)
            .map(this.extractData)
            .catch(this.handleError);
    }

    public presentToast(msg) {
        let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000,
          position: 'bottom'
        });
        toast.present();
      }
}
