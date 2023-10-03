import Navbar from '@/scenes/navbar'
import { useEffect, useState } from 'react';
import { SelectedPage } from './shared/type';
import { Home } from './scenes/home';
import { Benifits } from './scenes/benifits';

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage,setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);
  

  return (
    <div className="app bg-gray-20">
     <Navbar isTopOfPage={isTopOfPage} setSelectedPage={setSelectedPage} selectedPage={selectedPage}/>
     <Home setSelectedPage={setSelectedPage}/>
     <Benifits setSelectedPage={setSelectedPage}/>
    </div>
  );
};

export { App };
