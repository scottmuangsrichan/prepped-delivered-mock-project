import MenuItemCard from "../MenuItem";
import Image from "next/image";
export default function Menu(){
    const menuItem = 
      <div className="p-8">
          <Image 
              src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
              alt=""
              layout="responsive"
              width={10}
              height={10}
              />
          
          <MenuItemCard 
              title="Philly-ish Cheesesteak"
              description="540 Cal | Gluten Free | Single Serve"
          />
      </div>;
  
      function setMenuItems(menuItem){
          menuItem = menuItem;
          let allMenuItems = [];
          allMenuItems.push(menuItem);
          return allMenuItems;
      }
      
      return(
          <div className="w-[1200px] m-auto grid grid-cols-4 grid-rows-10">
              {menuItem}
              {menuItem}
              {menuItem}
              {menuItem}
              {menuItem}
              {menuItem}
              {menuItem}
              {setMenuItems(menuItem)}
          </div>
      )
  }