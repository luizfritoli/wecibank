"use client"

import Menu from "./Menu"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const MainPage = () => {

  const [isLogged, setIsLogged] = useState<boolean | null>(null);
  const router = useRouter();
  useEffect(() => {
    const logged = JSON.parse(localStorage.getItem("isLogged") || "false");
    if (!logged) {
      router.push("/login");
    } else {
      setIsLogged(true);
    }
  }, []);
  return (
    <div className="h-100 text-secondary">
      <Menu />
    </div>
  )
}

export default MainPage
