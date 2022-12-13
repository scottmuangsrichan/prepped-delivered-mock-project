export default function MenuItemCard({title , description, img }){
  const _img = img;  
  return (
      <div className='text-left p-1 hover:text-gray-500 flex flex-col justify-center items-center'>
        <img
          className='m-auto rounded-md w-1/2'
          src={_img} />
          <div className="pt-4 text-center">
            <h1>{title}</h1>
            <p className='text-gray-500'>{description}</p>
          </div>
      </div>
    )
  }