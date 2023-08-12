import React,{useEffect, useState} from 'react'
import {YOUTUBE_VIDEO_API} from '../utils/contants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

  const[videos, setVideos] = useState([])

  useEffect(()=>{
     getVideos();
  },[])

  const getVideos = async () =>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json()
    setVideos(json.items)
    console.log(json)
  }
  return (
    <div className="flex flex-wrap">
      {videos.map((videos)=>  
      <Link to={"/watch?v="+ videos.id }><VideoCard key = {videos.id} info={videos}/> </Link> )}
    </div>
  )
}

export default VideoContainer
