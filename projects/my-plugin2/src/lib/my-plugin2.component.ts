import { Component, OnInit } from '@angular/core';
import { PluginManagerService, CommandEvent, EventAction, ApiTypes } from 'ui-api';
import { MyCommandInterface } from './mycommand-interface';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { MyPlugin2Service } from './my-plugin2.service';

@Component({
  selector: 'lib-my-plugin2',
  template: `
  <p-dialog header="Title" [(visible)]="display" (onHide)="onClose()" [modal]="true">
    Content
  </p-dialog>
  `,
  styles: []
})
export class MyPlugin2Component implements OnInit {
  private ci = new MyCommandInterface();
  display = false;
  event: CommandEvent;

  constructor(private pluginManager: PluginManagerService, private dialog: MatDialog) {
    this.ci.onOpenDialog.subscribe(event => {
      this.event = event;
      this.openDialog();
    });
  }
  ngOnInit() {
    this.pluginManager.registerCommandInterface(this.ci);
  }

  openDialog() {
    this.display = true;
  }

  onClose() {
    console.log('on close called');
    this.ci.onCloseDialog.emit(this.event);
  }




}
