import MenuItemCard from "../MenuItem";
export default function Menu(){
  
      function setMenuItems(menuItem){
          menuItem = menuItem;
          let allMenuItems = [];
          allMenuItems.push(menuItem);
          return allMenuItems;
      }
      
      return(
          <div className="md:max-w-[1440px] mx-auto md:grid grid-cols-4 grid-rows-10">
              {<MenuItemCard 
                img = "https://images.unsplash.com/photo-1671522635398-a2443699d32e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                title = "Breakfast of Champions"
                description="Eggs , Bacon , Ham , Greens"
              />}
               {<MenuItemCard 
                img = "https://images.unsplash.com/photo-1671522635398-a2443699d32e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                title = "Breakfast of Champions"
                description="Eggs , Bacon , Ham , Greens"
              />}
                {<MenuItemCard 
                img = "https://images.unsplash.com/photo-1671522635398-a2443699d32e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                title = "Breakfast of Champions"
                description="Eggs , Bacon , Ham , Greens"
              />}
                {<MenuItemCard 
                img = "https://images.unsplash.com/photo-1671522635398-a2443699d32e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                title = "Breakfast of Champions"
                description="Eggs , Bacon , Ham , Greens"
              />}
                {<MenuItemCard 
                img = "https://images.unsplash.com/photo-1671522635398-a2443699d32e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                title = "Breakfast of Champions"
                description="Eggs , Bacon , Ham , Greens"
              />}
                {<MenuItemCard 
                img = "https://images.unsplash.com/photo-1671522635398-a2443699d32e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                title = "Breakfast of Champions"
                description="Eggs , Bacon , Ham , Greens"
              />}
          </div>
      )
  }