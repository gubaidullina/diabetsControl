import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

import { Recipient } from '../../models/recipient';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class Recipients {
  _recipient: any;

  constructor(public api: Api) { }


  getRecipientsList(id: number){
    let postData = new FormData();
    postData.append('action' , 'get_num_recipient_sms');
    postData.append('id' , JSON.stringify(id));

    let seq = this.api.post('get_num_recipient_sms', postData).share();
    seq.subscribe((res: any) => {
      console.debug(res);
      // If the API returned a successful response, mark the user as logged in
    /*  if (res['code'] == 0) {
       console.debug(res);
      } else {
        console.error(res['message']);
      }*/
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  add(item: Recipient) {
    let postData = new FormData();
    postData.append('action' , 'add-update_recipient');
    postData.append('id_user' , JSON.stringify(1));
    postData.append('name' , JSON.stringify(item.name));
    postData.append('mobile' , JSON.stringify(item.mobile));

    let seq = this.api.post('add-update_recipient', postData).share();
    seq.subscribe((res: any) => {
      console.debug(res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  delete(item: Recipient) {
    let postData = new FormData();
    postData.append('action' , 'delete_recipient');
    postData.append('id' , JSON.stringify(item.id));

    let seq = this.api.post('delete_recipient', postData).share();
    seq.subscribe((res: any) => {
      console.debug(res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }


}
