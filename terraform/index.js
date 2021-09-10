exports.handler = async (event) => {
    const location = event.currentIntent.slots["Location"];
    const checkInDate = event.currentIntent.slots["CheckInDate"];
    const nights = event.currentIntent.slots["Nights"];
    const roomType = event.currentIntent.slots["RoomType"];
    const response = "Booking completed for location = " + location +
        ", checkInDate = " + checkInDate +
        ", nights = " + nights +
        ", roomType = " + roomType;
    
    return {
      "sessionAttributes": {},
      "dialogAction": {
        "type": "Close",
        "fulfillmentState": "Fulfilled",
        "message": {
          "contentType": "PlainText",
          "content": response
        }
      }
    };


};
