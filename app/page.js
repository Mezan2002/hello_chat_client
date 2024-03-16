"use client";

import { NextUIProvider } from "@nextui-org/react";
import MessageHome from "@/components/Home";

const HomePage = () => (
  <NextUIProvider>
    <MessageHome />
  </NextUIProvider>
);

export default HomePage;
