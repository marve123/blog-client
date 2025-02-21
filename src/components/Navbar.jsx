import { Link, useLocation, useNavigate } from "react-router-dom"
import {BsSearch} from 'react-icons/bs'
import {FaBars} from 'react-icons/fa'
import { useContext, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"



const Navbar = () => {
  
  const [prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path=useLocation().pathname
  
  // console.log(prompt)
  

  const showMenu=()=>{
    setMenu(!menu)
  }
  
   
    const {user}=useContext(UserContext)
      // 
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4 font-poppins">
    <h1 className="text-lg md:text-xl font-extrabold"><Link to="/">My Blogs</Link></h1>
    {path==="/" && 
    <div className="flex justify-center items-center space-x-0 relative">
    <input onChange={(e)=>setPrompt(e.target.value)} 
     onKeyDown={(e) => e.key === 'Enter' && navigate(prompt ? `?search=${prompt}` : '/')}
    className="outline-none border-b border-b-slate-500 mr-2 py-1 pr-8 text-slate-700 text-[16px] 
    font-semibold transition-all" 
    placeholder="Search..." type="text"/>
    <span onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} 
     className="cursor-pointer absolute right-2"><BsSearch/></span>
    
    </div>}
    <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4">
      {user? <h3><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
      {user? <div onClick={showMenu}>
        <p className="cursor-pointer relative"><FaBars/></p>
        {menu && <Menu/>}
      </div>:<h3><Link to="/register">Register</Link></h3>}
    </div>
    <div onClick={showMenu} className="md:hidden text-lg">
      <p className="cursor-pointer relative"><FaBars/></p>
      {menu && <Menu/>}
    </div>

    </div>
  )
}

export default Navbar 