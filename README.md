# Lex-Chatbot
Create a AWS Lex chatbot using Terraform, and access it via angular app.

Amplify makes it very easy to integrate yout angular code with Lex chatbot. Our Amplify based angular app has cognito to authenticate the user, 
and the user with correct IAM permissions granted, will be able to connect to AWS Lex chatbot.

## How to run this poc
1. Visit the terrafrom folder, and follow the Readme to setup AWS Lex chatbot. 
2. Run: cd my-chatbot-app, npm install
3. Amplify push to set up Cognito user pool.
4. Go to the user pool -> click federated identities -> click on the identity -> click edit identity pools -> get the IAM roles for authenticated and un-authenticated users. Give either/both the roles policies for Lex.
5. ng serve, localhost:4200
6. If you gave IAM role for authenticated user only in step 4, then first login using cognito, then open localhost:4200/home to open the chatbot.

## Important files
1. aws-exports.js - not committed, has all details about cognito pool created by Amplify. 
2. maint.ts - Configure Amplify using the export file mentioned above. Also configure chatbot.
3. app.module.ts - Import and configure AmplifyAngularModule and AmplifyService. Routes for auth and home components.
4. auth.component.html - Amplify provided directive for cognito login page.
5. home.component.html - Amplify provided directive for Lex chatbot.

## Setup Amplify based Angular app
1. npm install -g @angular/cli
2. ng new my-chatbot-app --routing --styles=scss
3. Create Auth and Home controller using ng g c command. Auth component will have cognito auth, and home component will have chat component.
4. Follow Amplify docs (https://docs.amplify.aws/start/) and select angular. Run the amplify setup commands from above url inside the my-chatbot-app folder.
5. Setup Cognito and lex chatbot directives in files mentioned in above section. for chatbot directive, refer this link of documentation: https://docs.amplify.aws/ui/interactions/chatbot/q/framework/angular/. 
This is where you provide your chatbot name as well as created on Lex.


