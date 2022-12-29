import { useRef, useEffect, useState } from "react";

export default function NavigationMobile(){
  const [isOpen , setIsOpen] = useState(false);
  const [isMobile , setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize" , handleResize());
    return () => {
      window.removeEventListener("resize", handleResize());
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return(
    <div className="border border-solid-1 border-black w-fit p-3">
      <nav>
        {
          isMobile ? (
            <button onClick={toggleMenu}>Menu</button>
          ) : (
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          )}
          {
            isMobile && isOpen && (
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            )
          } 
      </nav>
    </div>
  );
}