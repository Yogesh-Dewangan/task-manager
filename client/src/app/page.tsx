"use client";

import Header from "./components/header-footer/header";
import TaskCard from "./components/task/task-card";

export default function Home() {
  return (
    <main className="min-h-screen pb-8 bg-white">
      <Header></Header>
      <div className="p-10">
        <TaskCard></TaskCard>
      </div>
    </main>
  );
}
