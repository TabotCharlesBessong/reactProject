
import React from 'react'
import { Space,Spin } from 'antd'

const Loader = () => {
  return (
    <div>
      <Space size='middle'>
        <Spin size='large' />
      </Space>
    </div>
  )
}

export default Loader