import AWS  = require('aws-sdk');
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";

AWS.config.update({region: 'eu-west-1'});
const documentClient = new AWS.DynamoDB.DocumentClient();

const getItem = (params: DocumentClient.GetItemInput): Promise<DocumentClient.GetItemOutput> => {
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

export default { getItem };