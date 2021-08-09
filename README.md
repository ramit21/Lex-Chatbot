# Lex-Chatbot
Create a Trip-Booking chatbot using AWS Lex and Terraform.

## To provision the bot
1. terraform init (give default or any other AWS profile when prompted for)
2. terraform plan
3. terraform apply

Files:
1. bot_alias: aliases to different bot versions
2. slot_types.tf: enum values for the slots
3. bot.tf: all bot details including the intents and abort message.
4. intents.tf: intent fullfilment, slots, and expected utterneces.

