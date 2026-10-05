"use client";

import { ExternalUser } from "@/types/userTypes";
import { useState } from "react";
import Notification from "./Notification";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setNotification } from "@/lib/features/notifications/notificationSlice";


export default function Header() {

    const [input, setInput] = useState<string>("");

    const notificationState = useAppSelector((state) => state.notification.value);
    const dispatch = useAppDispatch();

    return (
        <header className="flex justify-between m-2">
            <h1 className="text-3xl font-[Mojangles_Bold]">
                CapeView
            </h1>

            <div className="flex">
                <Notification status={notificationState} />

                <input
                    className="rounded-lg bg-secondary-bg px-2 mr-2"
                    placeholder="User to add"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button
                    className="rounded-lg px-2 hover:bg-secondary-bg active:bg-primary-txt/40"
                    onClick={async () => {
                        // search for a users MC profile on click
                        if (input) {
                            dispatch(setNotification("Loading"));
                            try {
                                const response = await fetch(`/api/users/${input}`);
                                if (!response.ok) {
                                    throw new Error("Username not found");
                                }

                                const profile: ExternalUser = await response.json();
                                dispatch(setNotification("Profile found"));

                                console.log(profile);
                            } catch (error) {
                                dispatch(setNotification("No profile found"));
                                console.error(error instanceof Error ? error.message : String(error));
                            }
                        }
                    }}
                >
                    Add
                </button>
            </div>
        </header>
    )
}