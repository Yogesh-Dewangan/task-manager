"use client";

import { SyntheticEvent, useState } from "react";
import Header from "./components/header-footer/header";
import Searchbox from "./components/searchbox/searchbox";
import TaskCard from "./components/task/task-card";

export default function Home() {
  const [sortBy, setSortBy] = useState("recent");

  const handleSortBySelection = function (e: SyntheticEvent) {
    const elem = e.target as HTMLSelectElement;
    setSortBy(() => elem.value);
  };

  return (
    <main className="min-h-screen pb-8 bg-white">
      <Header></Header>
      <div className="p-10">
        <div className="flex justify-between items-center border-2 rounded mb-4 px-4 py-2">
          <Searchbox></Searchbox>
          <div>
            <label className="text-black font-bold mr-4">Sort By</label>
            <select
              className="text_input margin_0"
              onChange={handleSortBySelection}
              defaultValue="recent"
            >
              <option value="recent">Recent</option>
              <option value="oldToNew">Old To New</option>
              <option value="newToOld">New To Old</option>
            </select>
          </div>
        </div>
        <TaskCard></TaskCard>
      </div>
    </main>
  );
}
