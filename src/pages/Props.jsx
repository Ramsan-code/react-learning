import React from 'react'
import DefaultProps from '../componensts/props/DefaultProps'
import ConditionalRendering from '../componensts/props/ConditionalRendering'

function Props() {
  return (
    <div>
      <DefaultProps />
      <ConditionalRendering />
      <ConditionalRendering isActive={false}/>
      <ConditionalRendering status="paid"/>


    </div>
  )
}

export default Props