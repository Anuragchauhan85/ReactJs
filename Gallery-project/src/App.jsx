import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const App = () => {

  const [userData, setUserData] = useState([])

  const getData = async() => {
  const response = await  axios.get("https://picsum.photos/v2/list?page=3&limit=64");
  
    setUserData(response.data)
  }


  useEffect(function () {
    getData()
  },[])

  let printUserData = <h2 className='text-gray-400 text-xs'>No User Available</h2>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem,idx) {
      return (
        <div key={idx} className='mt-5 ml-5 mb-5 '>
          <a href={elem.url } target='_blank'>
            <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className='bg-black overflow-auto h-screen mt text-white'>
      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>
    </div>
  )
}

export default App