"use client";

import { useNotification } from "@/context/NotificationContext";
import InfoIcon from "../icons/InfoIcon";


export default function Notification() {

    const { notification, setNotification } = useNotification();

    function colorMapBorder(type: "SUCCESS" | "ALERT" | "ERROR") {
        if (type === "SUCCESS") {
            return "border-green-300";
        } else if (type === "ALERT") {
            return "border-yellow-300";
        } else {
            return "border-red-300";
        }
    }

    function colorMapText(type: "SUCCESS" | "ALERT" | "ERROR") {
        if (type === "SUCCESS") {
            return "text-green-300";
        } else if (type === "ALERT") {
            return "text-yellow-300";
        } else {
            return "text-red-300";
        }
    }

    return notification
        ? (
            <button
                onClick={() => setNotification(null)}
                className={`
                        flex items-center
                        text-lg
                        w-fit fixed z-100 top-0 right-0 pr-4 py-1 m-4
                        border rounded-xl ${colorMapBorder(notification.type)} bg-background
                        group
                    `}
            >
                <InfoIcon
                        className={`
                            size-5.5 mx-2
                            ${colorMapText(notification.type)}
                        `}
                    />
                
                <div className={`relative`}>
                    <p className={`group-hover:opacity-15`}>
                        {notification.message}
                    </p>

                    <p
                        className={`
                            absolute top-0 left-1/2 -translate-x-1/2
                            opacity-0 group-hover:opacity-100
                            tracking-wider
                        `}
                    >
                        Dismiss
                    </p>
                </div>
            </button>
        )
        : (
            <></>
        )
}