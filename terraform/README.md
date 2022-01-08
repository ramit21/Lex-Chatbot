# Lex-Terraform
Create a Trip-Booking chatbot using AWS Lex and Terraform.

## How to run the poc
1. terraform init (give default or any other AWS profile when prompted for)
2. terraform plan
3. terraform apply
4. Go to aws console, and click on 'Build'.
5. Start testing bot on the console itself.
6. (This step is yet to be automated by terraform in this poc) On BookHotel intent, select hotel_book_fullfilment_lambda as the fullfilment lambda function. Build and publish.
7. Go to my-chatbot-app folder, and do 'ng serve'. Open the app on localhost:4200
8. Login at url localhost:4200/login, and then open chatbot app at localhost:4200/home

### Important Files:
1. bot_alias: aliases to different bot versions
2. slot_types.tf: enum values for the slots
3. bot.tf: all bot details including the intents and abort message.
4. intents.tf: intent fullfilment, slots, and expected utterneces.
5. lambda.tf: lambda function with IAM role
6. index.js: code for lambda function that is used for hotel booking intent fullfilment.

This POC serves 2 intents:
1. Book a car 
2. Book a hotel (uses Lambda for fullfilment) 

Based on user's utterances, the appropriate intent is served. 

### Lambda
Lambda can be used at various stages, here we used it for intent fullfilment of hotel booking. Look at index.js -> type and fulfillmentState parameter values that being returned by lambda to Lex chatbot. Here we are closing the intent with the response, but you may use different values for different type of interactions with Lex.

