import React, { useContext } from 'react'
import { DataContext } from '../../../App'

function ManageStoreProducts() {


  const {sharedData} = useContext(DataContext)



  return (
    <section>
      <div className="container">
        <div>
          {sharedData?.map((item) => (
            <div key={item.id} >{item.title}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ManageStoreProducts