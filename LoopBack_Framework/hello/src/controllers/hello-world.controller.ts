// import {inject} from '@loopback/core';
import {get} from '@loopback/rest';

export class HelloWorldController {
  constructor() {}

  @get('/hello-world',{
    responses: {
      '200':{
        description: 'This is our new description',
        content: {
          'application/json':{
            schema: {
              type: 'string'
            },
          },
        },
      },
    },
  })
  async sayHello(): Promise<object>{
    console.log('yes it was called');
      return {greeting: 'World'};
  }

}
