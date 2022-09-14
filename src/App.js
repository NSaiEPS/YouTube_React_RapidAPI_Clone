import React from 'react'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
// import Navbar from '../src/components/Navbar'
// import Feed from '../src/components/Feed'
// import VideoDeatail from '../src/components/VideoDeatail'
// import ChannelDetail from '../src/components/ChannelDetail'
// import SearchFeed from '../src/components/SearchFeed'

import {Navbar,Feed,VideoDeatail,ChannelDetail,SearchFeed} from './components'
// console.log(process.env.TEST)
// 1.03
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Box sx={{
        backgroundColor:'#000'
      }}>
        <Navbar/>

        <Routes>
        
        <Route path='/'  exact element={<Feed  />}/>
        <Route path='/video/:id'  exact element={<VideoDeatail/>}/>
        <Route path='/channel/:id'  exact element={<ChannelDetail/>}/>
        <Route path='/search/:searchTerm'  exact element={<SearchFeed/>}/>
        </Routes>

      </Box>
      </BrowserRouter>
    </div>
  )
}

export default App
