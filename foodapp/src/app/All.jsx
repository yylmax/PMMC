import React, { useEffect, useState } from "react";
import Content from "./content";
import NavBar from "./navbar";

// This is the components as the root of everything in frontend and displayed in webpage
const All = () => {
  return (
    <div>
      <NavBar />
      <Content />
    </div>
  );
};

export default All;
