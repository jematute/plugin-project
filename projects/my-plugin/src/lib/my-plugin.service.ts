import { Injectable } from '@angular/core';
import { ICommands, CommandEvent, EventAction } from 'ui-api';
import { Observable, from, of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MyPluginService implements ICommands {
  interfaceId = "mypluginjm";

  constructor() { }

  beginCommand(event: CommandEvent): Observable<CommandEvent> {
    alert("BeginCommnad called");
    event.action = EventAction.Continue;
    return of(event).pipe(delay(2000));
  }

  beginAction(event: CommandEvent): Observable<CommandEvent> {
    alert("BeginAction called");
    event.action = EventAction.Continue;
    return of(event).pipe(delay(2000));
  }

  beginItem(event: CommandEvent): Observable<CommandEvent> {
    alert("BeginItem called");
    event.action = EventAction.Continue;
    return of(event).pipe(delay(2000));
  }
}
