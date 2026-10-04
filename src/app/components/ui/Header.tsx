"use client";

import { ExternalUser } from "@/types/userTypes";
import { useState } from "react";


export default function Header() {

    const [input, setInput] = useState<string>("");

    return (
        <header className="flex justify-between m-2">
            <h1 className="text-3xl">
                CapeView
            </h1>

            <div className="flex">
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
                            try {
                                const response = await fetch(`/api/users/${input}`);
                                if (!response.ok) {
                                    throw new Error("Username not found");
                                }

                                const profile: ExternalUser = await response.json();
                                console.log(profile);
                            } catch (error) {
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