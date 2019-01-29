import { NgModule } from '@angular/core';
import { MyPlugin2Component } from './my-plugin2.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [MyPlugin2Component, DialogComponent],
  imports: [
    MatDialogModule, MatButtonModule, DialogModule
  ],
  exports: [MyPlugin2Component, DialogComponent],
  entryComponents: [ DialogComponent ]
})
export class MyPlugin2Module { }
