import { Stack } from "@mui/system"

import { categories } from "../utils/constants"

// let selectedCategory='New'

const Sidebar = ({selectedCategory,setselectedCategory}) => {
  return (
    <Stack
    direction='row'

    sx={{
        overflowY:'scroll',
        height:{
            sx:'auto',
            md:'95%'
        },
        flexDirection:{
            md:'column'
        },
    }}
    >
      {categories.map((category)=>(
  <button
onClick={()=>
  setselectedCategory(category.name)
}


  className="category-btn"
  style={{
    background:
    category.name===selectedCategory
    && '#FC1503',
    color:'white'

  }}
  key={
    category.name
  }
  >
    <span
    style={{
      color: category.name===selectedCategory? 'white'
    :'red',
    marginRight:'15px'
    }}
    >{
category.icon

}</span>
    <span
    style={{
        opacity:
        category.name===selectedCategory ? '1':'0.7'
    }}
    >
        {category.name}
    </span>
  </button>
      ))}
    </Stack>
  )
}

export default Sidebar
