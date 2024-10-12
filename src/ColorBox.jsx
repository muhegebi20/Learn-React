import React from 'react'
import Box from './Box'
export default function ColorBox({colors}) {
  return (
    <div className='box'>
        {colors.map(cl => <Box key={cl.id} color = {cl.color} allcolors={colors}/> )}
    </div>
  )
}
