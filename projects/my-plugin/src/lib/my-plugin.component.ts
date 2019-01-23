import { Component, OnInit, Injector } from '@angular/core';
import { PluginManagerService, ToolbarService } from 'ui-api';
import { MyPluginService } from './my-plugin.service';

@Component({
  selector: 'lib-my-plugin',
  template: `
    <p>
      my-plugin works!
    </p>
  `,
  styles: []
})
export class MyPluginComponent implements OnInit {

  constructor(private pluginManager: PluginManagerService) { }

  ngOnInit() {
    const ci = new MyPluginService();
    this.pluginManager.registerCommandInterface(ci);
  }

}
