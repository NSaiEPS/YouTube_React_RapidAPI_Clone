import React, { useEffect, useState } from 'react'
import { Box,Stack,Typography } from '@mui/material'
import {Videos} from '../components'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { useParams } from 'react-router-dom'


const SearchFeed = () => {

  const {searchTerm}=useParams()

  const [videos,setVideos]=useState([])
  // console.log(selectedCategory)
 useEffect(()=>{
  fetchFromAPI(`search?part=snippet&q=${
    searchTerm
  }`).then((data)=>
    setVideos(
      data.items
    )
  )
 },[searchTerm])

  return (
    <Box
    p={2}
    sx={{
      overflow:'auto',
      height:'90vh',
      flex:2
    }}
      >
        <Typography
        variant='h4'
        fontWeight='bold'
        mb={2}
        sx={{
          color:'white'
        }}
        >
     Search Results for:    <span
          style={{
            color:"#f31503"
          }}>
            {searchTerm} </span> videos
        </Typography>

        <Videos
        videos={videos}
        />
      </Box>
  )
}

export default SearchFeed