import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from "aws-amplify";
//@ts-ignore
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

Amplify.configure({
  Interactions: {
    bots: {
      "BookTrip": {
        "name": "BookTrip",
        "alias": "$LATEST",
        "region": "us-east-1"
      },
    }
  }
});

/* Lex v2 configs
Amplify.configure({
  Interactions: {
    bots: {
      "Bookv2": {
        "botId": 'XXXXXX',
        "botAliasId": 'XXXXXX',
        "region": "us-east-1",
        "providerName": "AWSLex2Provider", //third party plugin to connect to Lex v2 using amplify
        "localeId": 'en_US', 
      }
    }
  }
});
*/

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
