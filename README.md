# Lex-Chatbot
Create a AWS Lex chatbot using Terraform, and expose it on angular app.

Amplify makes it very easy to integrate yout angular code with Lex chatbot. Our Amplify based angular app has cognito to authenticate the user, 
and the user with correct IAM permissions granted, will be able to connect to AWS Lex chatbot.

## How to run this poc
1. Visit the terrafrom folder, and follow the Readme to setup AWS Lex chatbot. 
2. Run: cd my-chatbot-app, npm install, ng serve and the open the app on localhost:4200.

## Important files
1. aws-exports.js - not committed, has all details about cognito pool created by Amplify. 
2. maint.ts - Configure Amplify using the export file mentioned above.
3. app.module.ts - Import and configure AmplifyAngularModule and AmplifyService

## Setup Amplify based Angular app
1. npm install -g @angular/cli
2. ng new my-chatbot-app --routing --styles=scss
3. Create Auth and Home controller using ng g c command. Auth component will have cognito auth, and home component will have chat component.
4. Follow Amplify docs (https://docs.amplify.aws/start/) and select angular. Run the amplify setup commands from above url inside the my-chatbot-app folder.

