import React from 'react'
import {MdLineStyle, MdTimeline, MdOutlineSubscriptions, MdOutlineIncompleteCircle, MdWorkOutline, MdAddCircleOutline} from 'react-icons/md' 
import {BsPersonWorkspace} from 'react-icons/bs'
import {TbReport, TbLogout} from 'react-icons/tb'
import {AiTwotoneCalendar, AiOutlineEdit} from 'react-icons/ai'
import {RxActivityLog} from 'react-icons/rx'
import {GrStackOverflow} from 'react-icons/gr'
import {FcManager} from 'react-icons/fc'
import './sidebar.css'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='p-[20px] text-[#555]'>
        <div className='mb-[10px]'>
<h3 className='font-light text-[13px] text-[#939191]'>Dashboard</h3>
<ul className='p-[]'>
    <li className='flex hover:bg-slate-400 cursor-pointer hover:text-white items-center ml-3 p-[5px] rounded-[15px]'>
<AiTwotoneCalendar className='mr-5 text-[20px]'/><Link to="/">Calendar</Link> 
    </li>

    <li className='flex hover:bg-slate-400 cursor-pointer hover:text-white items-center ml-3 p-[5px] rounded-[15px] '>
<MdTimeline className='mr-5 text-[20px]'/> <Link to="/analytics">Analytics</Link>
    </li>

    <li className='flex hover:bg-slate-400 cursor-pointer hover:text-white items-center ml-3 p-[5px] rounded-[15px]'>
<RxActivityLog className='mr-5 text-[20px]'/> <Link to="/checkin">Check In</Link>
    </li>

    <li className='flex hover:bg-slate-400 hover:text-white cursor-pointer p-[5px] ml-3 items-center rounded-[15px]'>
<MdOutlineSubscriptions className='mr-5 text-[20px]'/> Subscriptions
    </li>
</ul>
        </div>

        <div className='mb-[10px]'>
<h3 className='font-light text-[13px] text-[#939191]'>Projects</h3>
<ul className='p-[]'>
    <li className='flex hover:bg-slate-400 cursor-pointer hover:text-white items-center ml-3 p-[5px] rounded-[15px]'>
<MdLineStyle className='mr-5 text-[20px]'/> Monthly Programs
    </li>

    <li className='flex hover:bg-slate-400 cursor-pointer hover:text-white items-center ml-3 p-[5px] rounded-[15px] '>
<MdWorkOutline className='mr-5 text-[20px]'/> My Task
    </li>

    <li className='flex hover:bg-slate-400 cursor-pointer hover:text-white items-center ml-3 p-[5px] rounded-[15px]'>
<BsPersonWorkspace className='mr-5 text-[20px]'/> Assign Task
    </li>

    <li className='flex hover:bg-slate-400 hover:text-white cursor-pointer p-[5px] ml-3 items-center rounded-[15px]'>
<GrStackOverflow className='mr-5 text-[20px]'/> Tasks Overview
    </li>
</ul>
        </div>
        
        <div className='mb-[10px]'>
<h3 className='font-light text-[13px] text-[#939191]'>Quick user-menu</h3>
<ul className='p-[]'>
    <li className='flex hover:bg-slate-400 cursor-pointer hover:text-white items-center ml-3 p-[5px] rounded-[15px]'>
<TbReport className='mr-5 text-[20px]'/> Reports
    </li>

    <li className='flex hover:bg-slate-400 cursor-pointer hover:text-white items-center ml-3 p-[5px] rounded-[15px] '>
<AiOutlineEdit className='mr-5 text-[20px]'/> SignIn Time
    </li>

    <li className='flex hover:bg-slate-400 cursor-pointer  text-sm hover:text-white items-center ml-3 p-[5px] rounded-[15px]'>
<BsPersonWorkspace className='mr-5 text-[20px]'/> Themes & Personalization
    </li>

    <li className='flex hover:bg-slate-400 hover:text-white cursor-pointer p-[5px] ml-3 items-center rounded-[15px]'>
<TbLogout className='mr-5 text-[20px]'/> Logout
    </li>
</ul>
        </div>

        <div className='mb-[10px]'>
<h3 className='font-light text-[13px] text-[#939191]'>Manager</h3>
<ul className='p-[]'>
    <li className='flex hover:bg-slate-400 cursor-pointer hover:text-white items-center ml-3 p-[5px] rounded-[15px]'>
<MdAddCircleOutline className='mr-5 text-[20px]'/> Add user
    </li>

    <li className='flex hover:bg-slate-400 cursor-pointer hover:text-white items-center ml-3 p-[5px] rounded-[15px] '>
<MdTimeline className='mr-5 text-[20px]'/> Analytics
    </li>

    <li className='flex hover:bg-slate-400 cursor-pointer hover:text-white items-center ml-3 p-[5px] rounded-[15px]'>
<MdOutlineIncompleteCircle className='mr-5 text-[20px]'/> Completed Projects
    </li>

    <li className='flex hover:bg-slate-400 hover:text-white cursor-pointer p-[5px] ml-3 items-center rounded-[15px]'>
<FcManager className='mr-5 text-[20px]'/> Manage
    </li>
</ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
