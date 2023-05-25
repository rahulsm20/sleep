/* eslint-disable react/prop-types */

import { BarChart, ResponsiveContainer,Bar,XAxis,YAxis,Tooltip } from 'recharts'
const PlayGraph = (props) => {
  return (
        <div className='mt-5 text-sm'>
          <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[props.data]}>
            <XAxis dataKey="title"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="unique_plays" fill="#8884d8" />
            <Bar dataKey="total_plays" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
        </div>
  )
}

export default PlayGraph