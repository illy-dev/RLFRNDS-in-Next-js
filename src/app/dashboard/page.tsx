"use client";

import { useAuth } from "@/utils/authHook";

export default function Dashboard() {
    const { signOut } = useAuth();
    return(
        <div>
            <button onClick={signOut}>Sign Out</button>
        </div>
    );
}