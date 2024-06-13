"use client";

import { useEffect } from "react";
export const PagesRoutes: string[] = [
  "/",
  "/signin",
  "/signup",
  "/contact",
  "/about",
  "/blog",
];
export default function ScrollUp() {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), []);

  return null;
}
