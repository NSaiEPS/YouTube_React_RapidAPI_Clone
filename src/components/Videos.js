import { Stack, Box } from "@mui/system"
import ChannelCard from "./ChannelCard"
import VideoCard from "./VideoCard"

// import {ChannelCard,VideoCard}  from './'
const Videos = ({videos,direction}) => {
  // console.log(videos)
  return (
    <Stack
    direction={direction ||'row'}
    flexWrap='wrap'
    justifyContent='start'
    gap={2}
    >
      {videos.map((item,index)=>
      { return (
        <Box key={index}>
         
         {item?.id?.videoId &&
         <VideoCard video={item}
/>        }


{item?.id?.channelId &&
         <ChannelCard channelDetail={item}
/>        }

        </Box>
      )})}
    </Stack>
  )
}

export default Videos
