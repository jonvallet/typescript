const AWS = require('aws-sdk');

AWS.config.update({region: 'eu-west-1'});
const documentClient = new AWS.DynamoDB.DocumentClient();

const getItem = (params) => {
  return new Promise((resolve, reject) => {
      documentClient.get(params, (err, data) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(data);
        }
      });
  });
};

module.exports = { getItem };