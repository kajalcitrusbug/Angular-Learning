import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}
  users() {
    return [{ name: 'kajal', age: 28, email: 'kajal@test.com' }];
  }
}
