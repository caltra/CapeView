"use client";

import { AppStore, createStore } from "@/lib/store";
import { useState } from "react";
import { Provider } from "react-redux";


export default function StoreProvider({ children }: { children: React.ReactNode }) {

    const [store] = useState<AppStore>(createStore);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}