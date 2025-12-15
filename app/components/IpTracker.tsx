"use client";

import { useEffect } from "react";

export default function IpTracker() {
  useEffect(() => {
    async function run() {
      const res = await fetch("https://api.ipify.org?format=json");
      const { ip } = await res.json();

      await fetch("https://ip-six-neon.vercel.app/api/store-ip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ip, site: "Spaceship-PS" })
      });
    }
    run();
  }, []);

  return null;
}
