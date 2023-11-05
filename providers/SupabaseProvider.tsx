"use client";

import { Database } from "@/type_db";
import { useState } from "react";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { SessionContextProvider } from "@supabase/auth-helpers-react";

interface SupabaseProviderProps {
    children: React.ReactNode;
};


const SupabaseProvider: React.FC <SupabaseProviderProps> = ({
    children
}) => {
    const [supabasClient] = useState (() =>
        createClientComponentClient<Database>()
    );

    return ( 
        <SessionContextProvider supabaseClient={supabasClient}>
            {children}
        </SessionContextProvider>
    );

};

export default SupabaseProvider;