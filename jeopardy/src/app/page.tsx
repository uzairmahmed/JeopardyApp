import Image from "next/image";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import QuestionGrid from "@/components/QuestionGrid";
import TeamGrid from "@/components/TeamGrid";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col 2xl:flex-row items-center justify-between bg-base-100 p-1 md:p-10 gap-0 md:gap-10 overflow-hidden">
      <div className="flex md:hidden flex-row w-full h-8">
        <div className="drawer drawer-end justify-end items-center">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path fill="#000000" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z" />

              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <TeamGrid />
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-box md:bg-base-200 h-full md:h-2/3 2xl:h-full w-full 2xl:w-2/3">
        <QuestionGrid />
      </div>
      <div className="hidden md:flex flex-row 2xl:flex-col rounded-box bg-base-200 h-1/3 2xl:h-full w-full 2xl:w-1/3">
        <TeamGrid />
      </div>
    </main>
  );
}
