import { ICommands, CommandEvent, EventAction } from 'ui-api';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';
import { EventEmitter } from '@angular/core';

export class MyCommandInterface implements ICommands {
    interfaceId: string;

    onOpenDialog = new EventEmitter<CommandEvent>();
    onCloseDialog: EventEmitter<CommandEvent>;

    constructor() {
    }

    beginCommand(event: CommandEvent): Observable<CommandEvent> {
        // Open dialog
        this.onOpenDialog.emit(event);
        this.onCloseDialog = new EventEmitter<CommandEvent>();
        // create and return an observable to wait for the close dialog event.
        return Observable.create(observer => {
            // subscribe to the onCloseDialog event
            this.onCloseDialog.subscribe(result => {
                // emit result to the observer and complete it.
                observer.next(result);
                observer.complete();
            });
        });
    }
    beginAction(event: CommandEvent): Observable<CommandEvent> {
        return of(event);
    }
    beginItem(event: CommandEvent): Observable<CommandEvent> {
        // Open dialog
        this.onOpenDialog.emit(event);
        this.onCloseDialog = new EventEmitter<CommandEvent>();
        // create and return an observable to wait for the close dialog event.
        return Observable.create(observer => {
            // subscribe to the onCloseDialog event
            this.onCloseDialog.subscribe(result => {
                // emit result to the observer and complete it.
                observer.next(result);
                observer.complete();
            });
        });
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
