# Lex-Chatbot
Create a Trip-Booking chatbot using AWS Lex and Terraform.

## To provision the bot
1. terraform init (give default or any other AWS profile when prompted for)
2. terraform plan
3. terraform apply
4. Go to aws console, and click on 'Build'.
5. Start testing bot on the console itself.

Files:
1. bot_alias: aliases to different bot versions
2. slot_types.tf: enum values for the slots
3. bot.tf: all bot details including the intents and abort message.
4. intents.tf: intent fullfilment, slots, and expected utterneces.

This POC serves 3 intents:
1. Greeting message
2. Book a hotel
3. Book a car

Based on user's utterances, the appropriate intent is served.