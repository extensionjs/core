import { Plugin, PluginLifecycleHooks } from '../../src';

export class DummyPlugin implements Plugin, PluginLifecycleHooks {
  public readonly id: string = 'dummy_plugin';
  public readonly pluginName: string = 'DummyPlugin';
  public readonly pluginDescription: string = 'A dummy plugin implementation.';
  public readonly version: string = '1.0.0';
  public readonly lifecycleHooks: PluginLifecycleHooks = this;

  public onInit() {
    //
  }
}
