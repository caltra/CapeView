"use client";

import { ExternalProfile, ExternalUser, InternalProfile } from "@/types/userTypes";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";


export default function Header() {

    const [input, setInput] = useState<string>("");
    const [currentProfile, setCurrentProfile] = useState<InternalProfile | undefined>(undefined);

    // const notificationState = useAppSelector((state) => state.notification.value);
    // const dispatch = useAppDispatch();

    async function findProfile() {
        if (input) {
            try {
                const response = await fetch(`/api/users/${input}`);
                if (!response.ok) throw new Error(`Client failed to fetch profile with status: ${response.status}`);

                const profile: InternalProfile = await response.json();

                console.log(profile);
                setCurrentProfile(profile);
            } catch (error) {
                if (error instanceof Error) throw error;
                else throw new Error(String(error));
            }
        }
    }

    function renderCapeImg() {
        if (currentProfile) {
            return (
                <div className="overflow-hidden">
                    <div className="cape-crop">
                        <img src={currentProfile.cape} />
                    </div>
                </div>
            )
        }
    }

    function renderHeadImg() {
        if (currentProfile) {
            return (
                <div>
                    <img src={`https://skinrender.dev/render/${currentProfile.name}/head?size=128&yaw=45&pitch=30`}
                        className="head-img"
                    />
                </div>
            )
        }
    }

    return (
        <header className="flex justify-between m-2">
            <h1 className="text-3xl font-[Mojangles_Bold]">
                CapeView
            </h1>

            {renderCapeImg()}
            {renderHeadImg()}

            <div className="flex">
                <input
                    className="rounded-lg bg-secondary-bg px-2 mr-2"
                    placeholder="User to add"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button
                    className="rounded-lg px-2 hover:bg-secondary-bg active:bg-primary-txt/40"
                    onClick={() => findProfile()}
                >
                    Add
                </button>
            </div>
        </header>
    )
}