import { SyntheticEvent, useState } from "react";

import styles from "../../styles/login.module.scss";

export default function SearchboxInput({ onSearch }: any) {
  const [query, setQuery] = useState("");

  const handleSearch = function (e: SyntheticEvent) {
    const elemTarget = e.target as HTMLInputElement;
    setQuery(() => elemTarget.value);
    onSearch(elemTarget.value);
  };

  return (
    <div className="flex items-center">
      <label className="text-black mr-4 font-bold">Search</label>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className={`${styles.text_input} ${styles.margin_0}`}
      />
    </div>
  );
}
