import { EndpointClient } from "endpoint-client";
import {
    DeleteAuthAccount,
    PostAuthSignIn,
    PostAuthSignUp,
} from "./endpoint/auth.endpoint";
import {
    DeletePage,
    GetPage,
    GetPages,
    PatchPage,
} from "./endpoint/page.endpoint";
export * from "./endpoint";
export * from "./object";

export class ReactNotionCacherClient extends EndpointClient {
    readonly auth = {
        signIn: this.endpointBuilder(PostAuthSignIn),
        signUp: this.endpointBuilder(PostAuthSignUp),
        deleteAccount: this.endpointBuilder(DeleteAuthAccount),
    };

    readonly page = {
        get: this.endpointBuilder(GetPage),
        list: this.endpointBuilder(GetPages),
        patch: this.endpointBuilder(PatchPage),
        delete: this.endpointBuilder(DeletePage),
    };
}
