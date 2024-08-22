import { useState } from "react";
import SearchboxInput from "./searchbox-input";

export default function Searchbox() {
  const [query, setQuery] = useState("");

  const data = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Cherry" },
    { id: 4, name: "Date" },
    { id: 5, name: "Fruit" },
  ];

  const [filteredData, setFilterdData] = useState(data);

  const handleSearch = function (qry: string) {
    console.log("query", qry);
    setQuery(() => qry);
    const newFilterdData = data.filter((data) =>
      data.name.toLowerCase().includes(qry.toLowerCase())
    );
    console.log("newFilterdData", newFilterdData);
    setFilterdData(() => newFilterdData);
  };

  return (
    <div>
      <SearchboxInput onSearch={handleSearch}></SearchboxInput>
      {!!query && (
        <ul className="absolute left-28 bg-white border-2 rounded w-48">
          {!!filteredData.length &&
            filteredData.map((data) => (
              <li key={data.id} className="text-black px-2">
                {data.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
