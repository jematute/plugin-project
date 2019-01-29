import { Injectable, EventEmitter } from '@angular/core';
import { ICommands, CommandEvent, EventAction } from 'ui-api';
import { Observable, from, of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyPluginService implements ICommands {

  interfaceId = 'mypluginjm';
  onOpenDialog = new EventEmitter<CommandEvent>();
  onCloseDialog = new EventEmitter<CommandEvent>();

  constructor() { }

  beginCommand(event: CommandEvent): Observable<CommandEvent> {
    this.onOpenDialog.emit();
    return Observable.create(observer => {
      this.onCloseDialog.subscribe(e => {
        observer.next(e);
      });
    });

  }

  beginAction(event: CommandEvent): Observable<CommandEvent> {
    alert('BeginAction called 1st plugin');
    event.action = EventAction.Continue;
    return of(event).pipe(delay(0));
  }

  beginItem(event: CommandEvent): Observable<CommandEvent> {
    alert('BeginItem called 1st plugin');
    event.action = EventAction.Continue;
    return of(event).pipe(delay(0));
  }

  endCommand(event: CommandEvent): Observable<CommandEvent> {
    return of(event);
  }
  endAction(event: CommandEvent): Observable<CommandEvent> {
    return of(event);
  }
  endItem(event: CommandEvent): Observable<CommandEvent> {
    return of(event);
  }


}
