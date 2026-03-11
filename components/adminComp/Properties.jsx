"use client";

import AddProperty from "./AddProperty";
import ViewProperty from "./ViewProperty";

import { useState } from "react";

export default function Properties() {
  const [action, setAction] = useState("");

  const components = {
    view: <ViewProperty />,
    add: <AddProperty />,
  };
  return (
    <>
      <div>
        {/* Page title */}
        <h1 className="text-4xl font-medium">Properties</h1>

        {/* Sub navigation */}
        <div className="flex gap-2 mt-3 text-gray-500">
          <button
            className="cursor-pointer transition-all duration-300 hover:text-gray-900"
            onClick={() => setAction("view")}
          >
            View all
          </button>
          <button
            className="cursor-pointer transition-all duration-300 hover:text-gray-900"
            onClick={() => setAction("add")}
          >
            Add property
          </button>
        </div>

        {/* Section */}
        {components[action]}
      </div>
    </>
  );
}
