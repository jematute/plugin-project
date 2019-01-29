import { Component, OnInit, Injector } from '@angular/core';
import { PluginManagerService, ToolbarService, CommandEvent, EventAction } from 'ui-api';
import { MyPluginService } from './my-plugin.service';

@Component({
  selector: 'lib-my-plugin',
  template: `
  <p-dialog [(visible)]="display">
    <p-header>
        Header content here
    </p-header>
    Content
    <p-footer>
        <button (click)="onOk()">Ok</button>
        <button (click)="onCancel()">Cancel</button>
        <button (click)="onCancelAll()">Cancel All</button>
    </p-footer>
  </p-dialog>
  `,
  styles: []
})
export class MyPluginComponent implements OnInit {

  constructor(private pluginManager: PluginManagerService) { }
  display = true;
  currentEvent: CommandEvent;
  ci: MyPluginService;

  ngOnInit() {
    this.ci = new MyPluginService();
    this.pluginManager.registerCommandInterface(this.ci);
    this.ci.onOpenDialog.subscribe(e => {
      this.display = true;
      this.currentEvent = e;
    });

  }

  onOk() {
    this.currentEvent.action = EventAction.Continue;
    this.ci.onCloseDialog.emit(this.currentEvent);
  }

  onCancel() {
    this.currentEvent.action = EventAction.CancelOne;
    this.ci.onCloseDialog.emit(this.currentEvent);
  }

  onCancelAll() {
    this.currentEvent.action = EventAction.CancelAll;
    this.ci.onCloseDialog.emit(this.currentEvent);
  }

}
