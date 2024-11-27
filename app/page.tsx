import { Suspense } from "react";
import { Header } from "./components/Header/Header";
import { Loader } from "./components/Loader/Loader";
import dynamic from "next/dynamic";
const GameSection = dynamic(
  () => import("./components/GameSection/GameSection")
);

export default function Home() {
  return (
    <div >
      <Header />
      <Suspense fallback={<Loader />}>
        <GameSection />
      </Suspense>
    </div>
  );
}
