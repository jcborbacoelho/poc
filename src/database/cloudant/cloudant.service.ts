import { CloudantV1, IamAuthenticator } from '@ibm-cloud/cloudant';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CloudantService {
    private cloudant: CloudantV1;

    constructor() {
        const authenticator = new IamAuthenticator({
            apikey: process.env.DB_API_KEY,
        });
    
        this.cloudant = CloudantV1.newInstance({
            serviceUrl: process.env.DB_URL,
            authenticator: authenticator,
        });
    }
}
