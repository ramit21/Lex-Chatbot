const AWS = require('aws-sdk');
const cog = new AWS.CognitoIdentityServiceProvider();
 
exports.handler = async (event, context) => {
    const location = event.currentIntent.slots["Location"];
    const checkInDate = event.currentIntent.slots["CheckInDate"];
    const nights = event.currentIntent.slots["Nights"];
    const roomType = event.currentIntent.slots["RoomType"];
    const response = "Booking completed for location = " + location +
        ", checkInDate = " + checkInDate +
        ", nights = " + nights +
        ", roomType = " + roomType;

    const result = await fetchUserDetails(event.userId);
    console.log("result", result);
    
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

async function fetchUserDetails(userId) {
  console.log("event.userId", userId);
  var filter = "sub = \"" + userId + "\"";
  var req = {
        "Filter": filter,
        //Filter: null,
        //AttributesToGet: [
        //  'email'
        //],
        
        Limit: 0,
        PaginationToken: null,
        "UserPoolId": "XXXX" // Enter Congito user pool id, looks like us-east-9_KDFn1cvys
    };
    return new Promise((resolve, reject) => {
        cog.listUsers(req,(data) => {
            console.log("response from cognito", data);
            let user;
             if (data && data.Users && data.Users.length === 1){ //as far as we search by sub, should be only one user.
                 user = data.Users[0];
                 console.log("user inisde promise", user);
            } else {
                console.log("Something wrong.");
            }
            resolve(user);
        }, (err) => {
            reject(err);
        });
    });
}