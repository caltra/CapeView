"use client";

import { ExternalProfile, ExternalUser, InternalProfile } from "@/types/userTypes";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setUser } from "@/lib/features/userSelection/userSelectionSlice";


export default function Header() {

    const [input, setInput] = useState<string>("");

    const dispatch = useAppDispatch();

    async function findProfile() {
        const usernameRegex = /^[a-zA-Z0-9_]+$/;

        if (input && usernameRegex.test(input) && input.length <= 16) {
            try {
                const response = await fetch(`/api/users/${input}`);
                
                if (response.status == 200) {
                    const profile: InternalProfile = await response.json();
    
                    dispatch(setUser(profile));
                } else if (response.status == 204) {
                    console.log(`User: [ ${input} ] does not exist`);
                } else {
                    console.error(`Header.tsx/findProfile() recieved an unexpected response status of: [ ${response.status} ]`);
                }

                setInput("");
            } catch (error) {
                if (error instanceof Error) throw error;
                else throw new Error(String(error));
            }
        }
    }

    return (
        <header className="flex justify-between m-2">
            <h1 className="text-3xl font-[Mojangles_Bold]">
                CapeView
            </h1>

            <div className="flex">
                <input
                    className="rounded-l-lg bg-secondary-bg px-2"
                    placeholder="User to add"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button
                    className="rounded-r-lg px-2 border-2 border-secondary-bg hover:bg-primary-txt/20 active:bg-primary-txt/40"
                    onClick={() => findProfile()}
                >
                    Add
                </button>
            </div>
        </header>
    )
}