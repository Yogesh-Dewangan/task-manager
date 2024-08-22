import { SyntheticEvent, useState } from "react";

export default function Searchbox({ onSearch }: any) {
  const [query, setQuery] = useState("");

  const handleSearch = function (e: SyntheticEvent) {
    const elemTarget = e.target as HTMLInputElement;
    setQuery(() => elemTarget.value);
    onSearch(elemTarget.value);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search..."
        className="border p2 rounded"
      />
    </div>
  );
}
