import React,{useState} from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All", "Gaming", "Music", "Cricket", "Thoughts", "Beauty", "Skincare", "Comedy", "Fashion", "Sports", "Travel","Coding"]
  return (
    <div className="flex">
      {list.map((val)=>{
        <Button name={val}/>
      // console.log(val)
      })}
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Sports"/>
      <Button name="Music"/>
      <Button name="Gaming"/>
      <Button name="Sports"/>
      <Button name="Music"/>
      <Button name="Gaming"/>
      <Button name="Sports"/>
      <Button name="Music"/>
      <Button name="Gaming"/>
      <Button name="Sports"/>
      <Button name="Music"/>
      
      
      </div>
  )
}

export default ButtonList
