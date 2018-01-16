import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { APIService } from './../../common/apiService';
import { RequestOptions, Headers } from '@angular/http';

import { DashboardPage } from './../dashboard/dashboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public userName: string = 'admin@gmail.com';
  public userPwd : string = 'password';

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiService:APIService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public userLogin():void {
    console.log(this.userName, this.userPwd)
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const options = new RequestOptions({ headers: headers });
    const postParams = {
      email: this.userName,
      password: this.userPwd      
    };
    // this function check if the user details are accurate or not and show the message according
    console.log(postParams);
    this.apiService.postRequest('login', postParams, options).subscribe(
      (data) => {        
        if (data['status']) {          
          console.log(data);
          this.navCtrl.setRoot(DashboardPage);
        } else {                      
            this.apiService.presentToast(data['message'] || 'Server Problem.. Please try again later.');
        }
      },
      (error) => {
        console.log(error);      
      }
    );
  }

  

}
