import { BasePlugin } from '../../src';

export class DummyPlugin extends BasePlugin {
  constructor() {
    super('DummyPlugin', '1.0.0', '/dummy/index.html');
  }
}
