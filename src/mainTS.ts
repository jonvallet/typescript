import repositoryTS from "./repositoryTS";
import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";

const params: DocumentClient.GetItemInput = {
    TableName: 'table.name',
    Key: {id: 'id'}
};

repositoryTS.getItem(params);

