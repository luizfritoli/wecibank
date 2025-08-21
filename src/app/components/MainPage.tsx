"use client"

import Menu from "./MainPage/Menu"
import { redirect } from "next/navigation";
import { useState } from "react";


const MainPage = () => {
  const [isLogged, setIsLogged] = useState<boolean>(false)
  if (!isLogged) {
    redirect("/login")
  }
  return (
    <div className="h-100 text-secondary">
      <Menu />
    </div>
  )
}

export default MainPage
