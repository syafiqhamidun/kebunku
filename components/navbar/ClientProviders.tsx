"use client";

import {SessionProvider} from "next-auth/react";

export default function ClientProviders ({
    chidren,
}:{
    chidren: React.ReactNode;
}) {
    return <SessionProvider>{children}</SessionProvider>
}