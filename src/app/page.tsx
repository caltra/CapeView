"use client";

import { useAppSelector } from "@/lib/hooks";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";


export default function Home() {

  // const notificationState = useAppSelector((state) => state.notification.value);
  const selectedUserState = useAppSelector((state) => state.userSelection.user);

  function renderSelection() {
    if (!selectedUserState) throw new Error("Selected user is NULL in Home()/renderSelection()");

    return (
      <div className="flex justify-around w-1/2 min-w-100 border border-secondary-bg bg-secondary-bg/50 rounded-2xl mx-auto p-4">
        <div className="flex flex-col items-center">
          <p>
            {selectedUserState.name}
          </p>

          <div>
            <img src={`https://skinrender.dev/render/${selectedUserState.name}/head?size=128&yaw=45&pitch=30`}
              className="head-img"
            />
          </div>
        </div>

        <div className="border border-secondary-bg"></div>

        <div className="overflow-hidden">
          <div className="cape-crop">
            <img src={selectedUserState.cape} />
          </div>
        </div>


      </div>
    )
  }

  return (
    <>
      <Header />

      <main className="grow border border-primary-txt/30 rounded-2xl m-2 mt-0 p-4">
        {selectedUserState && renderSelection()}
      </main>

      <Footer />
    </>
  );
}
