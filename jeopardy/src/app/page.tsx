import Image from "next/image";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import QuestionGrid from "@/components/QuestionGrid";
import TeamGrid from "@/components/TeamGrid";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col 2xl:flex-row items-center justify-between bg-base-100 p-10 gap-10 overflow-hidden">
      <div className="flex flex-col rounded-box bg-base-200 h-2/3 2xl:h-full w-full 2xl:w-2/3">
        <QuestionGrid />
      </div>
      <div className="flex flex-row 2xl:flex-col rounded-box bg-base-200 h-1/3 2xl:h-full w-full 2xl:w-1/3">
        <TeamGrid />
      </div>
    </main>
  );
}
