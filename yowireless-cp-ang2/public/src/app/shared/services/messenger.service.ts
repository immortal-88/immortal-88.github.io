import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class MessengerService {

  static instance: MessengerService;

  private subjects: any[] = [];

  constructor() {
    return MessengerService.instance = MessengerService.instance || this;
  }

  // Listener
  listener(name): any {
    this.create_if_new(name);
    return this.subjects[name].asObservable();
  }

  // Send
  send(name, item?) {
    this.create_if_new(name);
    this.subjects[name].next(item);
  }

  private checker(name): any {
    let newItem = true;
    for (let prop in this.subjects) {
      if (prop === name) { newItem = false; }
    };
    return newItem;
  }

  private create_if_new(name) {
    if (this.checker(name)) this.subjects[name] = new Subject();
  }

}
