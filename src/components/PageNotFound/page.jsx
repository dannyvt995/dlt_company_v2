"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function PageNotFound() {
  const router = useRouter();
  const initialTime = 5; // 5 seconds
  const [count, setCount] = useState(initialTime);

  useEffect(() => {
    if (count === 0) {
      router.push("/");
      return;
    }

    const intervalId = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000); 

    return () => {
      clearInterval(intervalId);
    };
  }, [count, router]); 

  return (
    <section className="pagenotfound">
      <h1>Page not found!</h1>
      <span>We will redirect you to the home page in {count} second{count !== 1 ? "s" : ""}...</span>
    </section>
  );
}
