import { Box, Group } from '@mantine/core'
import React from 'react'

function HusqrBox() {
  return (
    <Box>
        <Group className='userinfo'><div>User</div></Group>
        <Group className='HusqrText'><div>Husqr text</div></Group>
        <Group className='HusqrInteract'><button>follow</button></Group>
    </Box>
  )
}

export default HusqrBox
