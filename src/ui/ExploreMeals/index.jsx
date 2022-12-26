import MenuItemCard from "../MenuItem"

export default function ExploreMeals(){
    return (
      <div className='w-screen bg-menuBackground p-12'>
        <div className='bg-white flex m-auto flex-col border-2 border-solid p-10 max-w-[50%] text-center'>
          <div>

          <h1 className='font-bold text-4xl pb-2'>On the Menu</h1>
          <p className='pb-8'>Each meal is perfectly sized for 1 person to enjoy at 1 sitting. Our fully-prepared meals are delivered fresh, and ready to eat in 3 minutes.</p>
          <div className='grid grid-rows-2 grid-cols-3 place-content-center mx-auto gap-1 pb-8'>
            <MenuItemCard 
              title="Philly-ish Cheese Steak"
              description="540 Cal | Gluten Free | Single Serve"
            />
            <MenuItemCard 
              title="Oven-Baked BBQ Pork Chop"
              description="580 Cal | Gluten Free | Single Serve"
            />
            <MenuItemCard 
              title="Sliced Turkey & Carolina Gold Sauce"
              description="480 Cal | Gluten Free | Single Serve"
            />
            <MenuItemCard 
              title="Cuban Mojo Shrimp"
              description="410 Cal | Gluten Free | Single Serve"
            />
            <MenuItemCard 
              title="Oven-Glazed Marsala Chicken"
              description="350 Cal | Gluten Free | Single Serve"
            />
            <MenuItemCard
              title="Creamy Chicken Fettuccine Alfredo"
              description="360 Cal | Has Gluten | Single Serve"
            />
          </div>
          </div>
            <button className='bg-blue-500 px-4 py-2 text-white hover:bg-blue-900'>View Plans & Menu</button>  
        </div>
      </div>
    )
  }

  