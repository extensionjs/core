import { BackendContribution, FrontendContribution } from '.';

export interface Plugin {
  id?: string;
  pluginName?: string;
  pluginDescription?: string;
  version?: string;
  lifecycleHooks?: PluginLifecycleHooks;
  contributes?: PluginContributions;
}

export interface PluginLifecycleHooks {
  onInit?: () => Promise<void> | void;
}

export interface PluginContributions {
  backendContribution?: BackendContribution;
  frontendContribution?: FrontendContribution;
}
