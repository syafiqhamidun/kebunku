import { createClient } from "@supabase/supabase-js";
import { Database } from "lucide-react";
import React from "react";

const usersPage = async () => {

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!, 
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {
            db: {
                schema: "next_auth"
            }
        });

    const {} = await supabase
        .from("users")
        .select("name,email");    
    return (
        <div>
            {JSON.stringify(Database)}
        </div>
    )
}

export default usersPage;