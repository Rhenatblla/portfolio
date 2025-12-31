"use client";

import { useState } from "react";
import Intro from "./components/Intro";
import Home from "./components/Home";

export default function Page() {
  const [entered, setEntered] = useState(false);

  return !entered ? <Intro onEnter={() => setEntered(true)} /> : <Home />;
}
