"use client";

import { createContext, ReactNode, useContext, useState } from "react";


type Notification = {
    type: "SUCCESS" | "ALERT" | "ERROR";
    message: string;
}

type NotificationContextType = {
    notification: Notification | null;
    setNotification: React.Dispatch<React.SetStateAction<Notification | null>>;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
    const [notification, setNotification] = useState<Notification | null>(null);

    return (
        <NotificationContext.Provider value={{notification, setNotification}}>
            {children}
        </NotificationContext.Provider>
    )
}

// Custom hook
export function useNotification() {
    const context = useContext(NotificationContext);

    if (context === undefined) {
        throw new Error("useNotification must be used within a NotificationProvider.");
    }

    return context;
}