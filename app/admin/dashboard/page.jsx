"use client";
import Sidebaritem from "@/components/adminComp/SideBarItem";
import { Dock, Users, Home, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import Logout from "@/components/adminComp/Logout";
import Properties from "@/components/adminComp/Properties";
import Agent from "@/components/adminComp/Agent";
import Dashboard from "@/components/adminComp/Dashboard";

const HomePage = () => {
  const [active, setActive] = useState("dashboard");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleEmail = () => {
    if (email === "harish123venkat@gmail.com")
      return (
        <h1>
          Welcome,<span className="font-medium text-xl"> Harish</span>
        </h1>
      );
    else if (email === "admin@linknest.co.in")
      return (
        <h1>
          Welcome,<span className="font-medium text-xl"> Admin</span>{" "}
        </h1>
      );
    else
      return (
        <h1>
          Welcome,<span className="font-medium text-xl"> Moderator</span>
        </h1>
      );
  };

  return (
    <div>
      <div className="flex items-center gap-[35%] mt-4 ml-4 justify-between mr-4">
        <h1 className="text-xl md:text-3xl font-medium">Admin Panel</h1>
        {handleEmail()}
      </div>
      {/* This is where the actual structure begins. */}

      <div className="flex mt-2">
        {/* ---SIDE PANEL--- */}
        {/* ---Dashboard--- */}
        <div className="border border-gray-200 shadow-md w-75 h-160 rounded-md pt-2 pr-3">
          <Sidebaritem
            active={active === "dashboard"}
            label={"Dashboard"}
            icon={Dock}
            onClick={() => setActive("dashboard")}
          />
          {/* ---Properties--- */}
          <Sidebaritem
            active={active === "properties"}
            label={"Properties"}
            icon={Home}
            onClick={() => setActive("properties")}
          />
          {/* ---Agent--- */}
          <Sidebaritem
            active={active === "agent"}
            label={"Agent"}
            icon={Users}
            onClick={() => setActive("agent")}
          ></Sidebaritem>
          {/* ---Logout--- */}
          <Sidebaritem
            active={active === "logout"}
            label={"Logout"}
            icon={LogOut}
            onClick={() => setActive("logout")}
          ></Sidebaritem>
        </div>

        <div className="w-[100%] mx-5 rounded-md px-2">
          {/* ---MAIN SECTION--- */}
          {active === "dashboard" && <Dashboard />}
          {active === "properties" && <Properties />}
          {active === "agent" && <Agent />}
          {active === "logout" && <Logout />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
