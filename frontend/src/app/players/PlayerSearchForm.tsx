"use client";

import { useActionState, useEffect } from "react";
import { searchPlayer } from "./_helpers/actions";
import Notification from "@/components/ui/Notification";
import { useNotification } from "@/context/NotificationContext";


export default function PlayerSearchForm() {

    const { setNotification } = useNotification();

    const initialState: Awaited<ReturnType<typeof searchPlayer>> = {};

    const [state, formAction, isPending] = useActionState(
        searchPlayer,
        initialState
    );

    useEffect(() => {
        if (state.error) {
            setNotification({ type: "ERROR", message: state.error });
        } else if (state.result) {
            setNotification({ type: "SUCCESS", message: "Player found successfully!" });
        }
    }, [state]);

    return (
        <form action={formAction}
            className="flex flex-col items-center"
        >
            <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    autoComplete="off"
                    disabled={isPending}
                    required
                    className={`
                        w-fit py-2 mb-8
                        text-xl text-center tracking-wider
                        bg-foreground/40 rounded-2xl
                        shadow-lg shadow-highlight
                        caret-transparent
                    `}
                />
            </div>

            <button
                type="submit"
                disabled={isPending}
                className={`
                    w-fit px-8
                    text-xl text-text/60 tracking-wider
                    border border-foreground border-b-highlight bg-background rounded-2xl 
                    hover:border-highlight transition-all
                `}
            >
                {isPending ? "..." : "FIND"}
            </button>

            <Notification />
        </form>
    )
}