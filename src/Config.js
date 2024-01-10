// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import data from './backend/serverless/appconfig.json'
const appConfigJson = Object.assign({}, ...data.map((x) => ({[x.OutputKey]: x.OutputValue})));

const appConfig = {
    apiGatewayInvokeUrl: 'https://a7q349et36.execute-api.us-east-1.amazonaws.com/prod/' || appConfigJson.apiGatewayInvokeUrl,
    cognitoUserPoolId: 'us-east-1_Sd5gp2k6a' || appConfigJson.cognitoUserPoolId,
    cognitoAppClientId: '7ussg82g7addmvscehu1bcpevb' || appConfigJson.cognitoAppClientId,
    cognitoIdentityPoolId: 'us-east-1:55eadda0-cd33-45ec-aaa2-e880d939657e' || appConfigJson.cognitoIdentityPoolId,
    appInstanceArn: 'arn:aws:chime:us-east-1:514799361739:app-instance/9c20dcd9-d404-44d1-989f-e2a33ced8e92' || appConfigJson.appInstanceArn,
    region: 'us-east-1',  
    attachments_s3_bucket_name: 'f13-community-chatattachmentsbucket-mtkrmjd2svoc' || appConfigJson.attachmentsS3BucketName
};
export default appConfig;
