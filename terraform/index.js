const AWS = require('aws-sdk');
const cog = new AWS.CognitoIdentityServiceProvider();

 
exports.handler = async (event, context) => {
    console.log("EVENT = ", event);
    const { name, slots } = event.currentIntent;
    const location = slots["Location"];
    const checkInDate = slots["CheckInDate"];
    const nights = slots["Nights"];
    const roomType = slots["RoomType"];
    const response = "Booking completed for location = " + location +
        ", checkInDate = " + checkInDate +
        ", nights = " + nights +
        ", roomType = " + roomType;

    if(!roomType){
        console.log("Asking for roomtype for intent = ",  name);
       
        return {
          "sessionAttributes": {},
          "dialogAction": {
            "type": "ElicitSlot",
            "intentName": name,
            slots,
            "slotToElicit": "RoomType",
            "message": {
              "contentType": "PlainText",
              "content": "Please select the room type from below!!!"
            },
            'responseCard': {'version': 1,
                             'contentType': 'application/vnd.amazonaws.card.generic',
                                 'genericAttachments': [{
                                     'title': 'Room selection',
                                     'subTitle': 'What type of room?',
                                     'imageUrl': 'http://www.lisbonlx.com/p/2018/03/sample-image-url-world-of-example-in-sample-image-url.jpg',
                                     'buttons':[ 
                                         {
                                            'text':'King',
                                            'value':'king'
                                         },
                                         {
                                            'text':'Queen',
                                            'value':'queen'
                                         }
                                      ]
                                 }]}
          }
        };
        
    }
     
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
        "UserPoolId": "us-east-1_IqN3yiVcD" // Enter Congito user pool id, looks like us-east-9_KDFn1cvys
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