import React from 'react'
import { Link,matchPath } from 'react-router-dom'
import {NavbarLinks} from"../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import authSlice from '../../slices/authSlice'
import {FaCartShopping} from "react-icons/fa6" 
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { categories } from '../../services/apis'
import { apiConnector } from '../../services/apiconnector'
import { useState,useEffect } from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

const NavBar = () => {

    const {token} = useSelector((state)=> state.auth);
    const {user} = useSelector((state)=> state.profile);
    const {totalItems} = useSelector((state)=> state.cart);

    const [subLinks, setSubLinks] = useState([]);
    const [loading, setLoading] = useState(false)

    // const fetchSublinks = async()=>{
    //     try {
    //         const res = await apiConnector("GET", categories.CATEGORIES_API)
    //         setSubLinks(res.data.data)
    //       } catch (error) {
    //         console.log("Could not fetch Categories.", error)
    //       }
    // }

    // useEffect(() => {
    //     fetchSublinks();
    // }, [])

    const location = useLocation();
    const matchRoute = (route)=>{
        return matchPath({path:route},location.pathname);
    }
  return (
    <div className='flex h-14  items-center justify-center  border-b-[1px]  border-b-blue-200'>
      <div className='w-8/12 flex items-center  justify-between'>
            
            <Link to={"/"}>
                    <p className='font-bold text-3xl  text-white '>S.S Tutorials</p>
              </Link>
        



            <nav>
                <ul className='flex flex-row gap-x-6 '>
                    {
                        NavbarLinks.map((link,index)=>(
                            <li key={index}>
                                    {
                                        link.title==="Catalog" ? (
                                            <div className='flex items-center gap-2'>
                                                <p>
                                                    {link.title}
                                                </p>
                                                <IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
                                                
                                            </div>

                                        ) : (
                                            <Link to={link?.path}>
                                                <p className= {`${matchRoute(link?.path)?"text-emerald-500	 ":"text-white"}`}>{link.title}</p>
                                            </Link>
                                        )
                                    }
                            </li>
                        ))
                    }
                </ul>
            </nav>


            <div className='flex gap-x-4 items-center'>
                {
                    user && user.accountType!= "Instructor" && (
                        <Link to="/dashboard/cart" className='relative'>
                            <FaCartShopping className="text-2xl text-blue-100"/>
                            {
                                totalItems>0 && (
                                    <span className='absolute -bottom-2 -right-2 grid h-5 w-5 place-items-center overflow-hidden rounded-full bg-blue-600 text-center text-xs font-bold text-yellow-100'>
                                        {totalItems}
                                    </span>
                                )
                            }
                        </Link>
                    )
                }
                {
                    token===null && (
                        <Link to="/login">
                            <button className='border border-blue-700  bg-cyan-400 px-[12px] py-[8px] rounded-md'> 
                                    Log in 
                            </button>
                        </Link>
                    )
                }
                {
                    token===null && (
                        <Link to="/signup">
                            <button className='border border-blue-700  bg-cyan-400 px-[12px] py-[8px] rounded-md'>
                                    Sign Up
                            </button>
                        </Link>   
                    )               
                }
                {
                    token!==null && <ProfileDropDown></ProfileDropDown>
                }
            </div>

      </div>


    </div>


  )
}

export default NavBar