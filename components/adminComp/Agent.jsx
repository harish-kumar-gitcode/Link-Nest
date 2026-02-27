"use client";
import { useEffect, useState } from "react";

export default function Agent() {
  const [agents, setAgent] = useState({});

  useEffect(() => {
    //Finding the agent.
    const findAgent = async () => {
      const res = await fetch("/api/agent", {
        method: "GET",
      });
      const data = await res.json();
      setAgent(data);
    };
    findAgent();
  }, []);

  // MAIN BLOCK
  return (
    <>
      <div>
        <h1 className="text-4xl font-medium">Agents</h1>
        <div>
          {agents.map((agent, index) => (
            <ul>
              <li key={index}>{agent.image}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
