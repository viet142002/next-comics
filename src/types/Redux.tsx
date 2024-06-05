import { ReactNode } from "react";

import { UserData, Maybe } from "./";

export interface ReduxProviderProps {
    initialState: {
        auth: {
            token: Maybe<string>;
            data: Maybe<UserData>;
        };
    };
    children: ReactNode;
}
