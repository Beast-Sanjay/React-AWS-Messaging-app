// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import data from './backend/serverless/appconfig.json'
const appConfigJson = Object.assign({}, ...data.map((x) => ({[x.OutputKey]: x.OutputValue})));

const appConfig = {
    apiGatewayInvokeUrl: 'https://3yjqgm3z4.execute-api.us-east-1.amazonaws.com/prod/' || appConfigJson.apiGatewayInvokeUrl,
    cognitoUserPoolId: 'us-east-1_TCPQda1i' || appConfigJson.cognitoUserPoolId,
    cognitoAppClientId: '2kuottud24v5059lftkopt0ir' || appConfigJson.cognitoAppClientId,
    cognitoIdentityPoolId: 'us-east-1:4761e5b-330c-4be7-976e-8afd3800ecc7' || appConfigJson.cognitoIdentityPoolId,
    appInstanceArn: 'arn:aws:chime:us-east-1:51479936173:app-instance/90968478-4f29-4443-b17b-f007ba2134c8' || appConfigJson.appInstanceArn,
    region: 'us-east-1',  
    attachments_s3_bucket_name: 'f13hobbies-chatattachmentsbucket-oghaw5n9ner' || appConfigJson.attachmentsS3BucketName
};
export default appConfig;
