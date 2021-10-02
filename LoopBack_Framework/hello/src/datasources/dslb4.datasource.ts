import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'dslb4',
  connector: 'mysql',
  url: '',
  host: 'localhost',
  port: 3306,
  user: 'lb4',
  password: '',
  database: 'lb4'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Dslb4DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'dslb4';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.dslb4', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
