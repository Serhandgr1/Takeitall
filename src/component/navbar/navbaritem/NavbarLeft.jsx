import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarLeft = () => {
  const navigate = useNavigate();
  return (
    <>
    <div onClick={()=>navigate("/")} class="text-4xl cursor-pointer font-bold">TakeItAll</div>
  </>
  )
}

export default NavbarLeft