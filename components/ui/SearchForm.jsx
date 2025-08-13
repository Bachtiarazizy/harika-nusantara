"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./Index";

export default function SearchForm({ defaultValue = "" }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/blog");
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    router.push("/blog");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="relative" onSubmit={handleSubmit}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Cari artikel..."
          className="block w-full pl-10 pr-20 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-coffee-dark focus:border-coffee-dark"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-2">
          {searchQuery && (
            <Button type="button" onClick={handleClearSearch} variant="ghost" size="sm" className="p-0 h-auto text-gray-400 hover:text-gray-600 text-xs">
              Clear
            </Button>
          )}
          <Button type="submit" variant="ghost" size="sm" className="p-0 h-auto text-coffee-dark hover:text-coffee-medium">
            Cari
          </Button>
        </div>
      </form>
    </div>
  );
}
