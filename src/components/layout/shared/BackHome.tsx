'use client'

// React Imports
import { useRef, useState } from 'react'

// MUI Imports
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'


const BackHome = () => {
  // States
  const [tooltipOpen, setTooltipOpen] = useState(false)

  // Refs
  const anchorRef = useRef<HTMLButtonElement>(null)



  return (
    <>
     <a href={`/home`} >
      <Tooltip
        ref={anchorRef}
        open={tooltipOpen}
        onClose={() => setTooltipOpen(false)}
        onOpen={() => setTooltipOpen(true)}
        placement="top"
        title="Back to Home"
      >
        <IconButton
          aria-label="mode"
          aria-controls="mode-menu"
          aria-haspopup="true"
        >
          <i className='ri-sun-line' />
        </IconButton>
      </Tooltip>
    </a>
    </>
  )
}

export default BackHome
