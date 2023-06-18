import {AiFillStar} from 'react-icons/ai';
import {BsArrowLeftCircle , BsArrowRightCircle} from 'react-icons/bs';
import {useState} from 'react';

export default function Reviews(){
    const [slide ,setSlide] = useState(false);
    // The review object needs to be passed in from an API. Not sure where the reviews will live. Trustpilot seems to be a common choice.
    return (
      <div className='bg-freshly-white'>
        <div className='py-12 bg-freshly-white container mx-auto'>
          <h1 className='sm:text-5xl text-3xl font-bold py-3 text-center'>What Others Are Saying</h1>
          <div className='flex flex-col sm:flex-row items-center gap-14'>
            <div className='invisible md:visible md:text-4xl md:px-2 md:text-blue-500'>
              <BsArrowLeftCircle />
            </div>
            <div>
              <CustomerReview
                rating = {5}
                titleOfReview='Meal prep has changed our lives!'
                bodyOfReview='With Prepped Delivered, we don’t have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half. We love it.'
                customerName='Dave'
              />
            </div>
            <div>
              <CustomerReview
                rating = {5}
                titleOfReview='10 stars! Awesome! Love it!'
                bodyOfReview='With Prepped Delivered, we don’t have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half. We love it.'
                customerName='Sherri'
              />
            </div>
            <div>
              <CustomerReview
                rating = {5}
                titleOfReview='Meal prep has changed our lives!'
                bodyOfReview='With Prepped Delivered, we don’t have to go anywhere or wait for delivery, and our monthly food bill has been cut nearly in half. We love it.'
                customerName='Mary'
              />
            </div>
            <div className='invisible md:visible md:text-4xl md:px-2 md:text-blue-500'>
              <BsArrowRightCircle />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function CustomerReview({rating , titleOfReview , bodyOfReview , customerName}){
  
    function setUserRating(rating){
      if(rating === 5){
        return (
          <div className='flex w-fit justify-evenly gap-4 text-amber-400 text-3xl'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        )
      } else if (rating === 4){
        return (
          <div className='flex w-fit justify-evenly gap-4 text-amber-400 text-3xl'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        )
      } else if (rating === 3){
        return ( 
          <div className='flex w-fit justify-evenly gap-4 text-amber-400 text-3xl'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        )
      } else if(rating === 2){
        return (
          <div className='flex w-fit justify-evenly gap-4 text-amber-400 text-3xl'>
            <AiFillStar />
            <AiFillStar />
          </div>
        )
      } else {
        return (
          <div className='flex w-fit justify-evenly gap-4 text-amber-400 text-3xl'>
            <AiFillStar />
          </div>
        )
      }
    }
    
    return (
      <div className='flex flex-col items-center m-auto px-10 text-center'>
        <div className='pb-5'>{setUserRating(rating)}</div>
        <h1 className='text-lg font-semibold'>{titleOfReview}</h1>
        <p className='py-3'>{bodyOfReview}</p>
        <p>{customerName}</p>
      </div>
    )
  }
  