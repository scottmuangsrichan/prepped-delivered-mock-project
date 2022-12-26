import {IoIosArrowDown} from 'react-icons/io';
import { useState } from 'react';

function Question({title , description}){
  const [showMore , setShowMore] = useState(false);
  return (
      <div className='px-20 py-3 w-3/4 m-auto'>
          <div 
            className='flex flex-row justify-between pb-3'
            onClick={()=> setShowMore(!showMore)}
            >
              <h1 className="font-bold hover:text-blue-500">{title}</h1>
              <IoIosArrowDown 
                className="text-blue-500 text-3xl"
                onClick={()  => setShowMore(!showMore)}
              />
          </div>
          {showMore ? <p className='pb-6'>{description}</p> : null }
          <hr></hr>
      </div>
  )
}

export default Question;
