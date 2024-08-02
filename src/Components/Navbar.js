import {React,useState,useEffect} from 'react';

function Navbar(props) {

    const [isScrolled, setIsScrolled] = useState(false);
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
        window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <nav>
        <div className={`fixed top-0 left-0 w-full justify-center flex flex-row z-50 ${isScrolled?'bg-white':'bg-transparent'}`}>
            <div>
                <a href="/"><img className='w-36 ml-24 pt-6 pl-6 pb-6' src="https://preccelerator.com/wp-content/uploads/2023/09/APO_Logo_Black_P1R1@2x.png" alt="" /></a>
            </div>
            <ul className='flex gap-14 ml-8 pt-7 text-black' style={{fontFamily:'sans-serif'}}>
                <a href="/"><li>Platform</li></a>
                <a href="/"><li>Teams</li></a>
                <a href="/"><li>Resources</li></a>
                <a href="/"><li>Pricing</li></a>
            </ul>
            <div className=' ml-96 pt-5 text-black space-x-6'>
                <a className='hover:bg-gray-100  pl-5 pr-5 pt-3 pb-3 rounded-md  ' href="/">Get Demo</a>
                <button className='border-2 border-black rounded-md pl-4 pr-4 pt-2 pb-2 hover:bg-gray-100'>Log in</button>
                <button className='bg-black border-2 border-black text-white rounded-md pl-4 pr-4 pt-2 pb-2  hover:bg-gray-900'>Sign up for free</button>
            </div>
        </div>
    </nav>
</>
  );
}

export default Navbar;
