import { NgModule } from '@angular/core';
import { MyPluginComponent } from './my-plugin.component';
import { MyPluginService } from './my-plugin.service';
import { UiApiModule } from 'ui-api';

@NgModule({
  declarations: [MyPluginComponent],
  imports: [
    UiApiModule
  ],
  providers: [ MyPluginService ],
  exports: [MyPluginComponent]
})
export class MyPluginModule { }
