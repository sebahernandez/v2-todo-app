import React from "react";
import IconMoon from "./icons/IconMoon";

const Header = () => {
  return (
    <header className="container mx-auto px-4 pt-8">
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
          Todo
        </h1>
        <button>
          <IconMoon fill="#fff" />
        </button>
      </div>
    </header>
  );
};

export default Header;
