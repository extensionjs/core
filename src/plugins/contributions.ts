import { Context } from '.';

export interface FrontendContribution {
  readonly providesFrontend?: boolean;
  readonly frontendEntryPoint?: string;
  readonly contributionHooks?: FrontendContributionHooks;
}

export interface FrontendContributionHooks {
  renderFrontend?: (container: HTMLElement) => void;
}

export interface BackendContribution {
  readonly providesBackend?: boolean;
  readonly backendEntryPoint?: string;
}

export interface BackendContributionHooks {
  registerBackend?: (ctx: Context) => void;
}
