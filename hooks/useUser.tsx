import { User } from "@supabase/auth-helpers-nextjs";
import { useSessionContext, useUser as useSupaUser } from "@supabase/auth-helpers-react";
import { Subscription, AuthUser } from "@supabase/supabase-js";
import { createContext, useState } from "react";

type UserLoginInformation = {
    accessToken: string | null;
    user: User | null;
    userDetails: string | null;
    isLoading: boolean;
}

export const UserContext = createContext< UserLoginInformation | undefined> (
    undefined
);

export interface Props {
    [propName: string]: any;
};

export const MyUserContextProvider = (props: Props) => {
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase
    } = useSessionContext();
    const user = useSupaUser();
    const accessToken =session?.access_token ?? null;
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [userDetails, setUserDetails] = useState< AuthUser | null>(null);



};