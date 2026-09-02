import headerLogo from '../assets//logo.png'
function Header() {
  
  return (
    <div className='bg-blue-300 shadow-xl'>
      <div className='p-2 flex flex-col items-center'>
         <p className='text-2xl'>316-660-4298</p>
         <p><a className='text-2xl' href="mailto:hello@arkhandyman.net">hello@arkhandyman.net</a></p>
      </div>
      <div className="flex h-56 justify-center">
        <img src={headerLogo} alt="logo"></img>
      </div>
      <br></br>
      <div className='text-center'>
        <a className='bg-white hover:bg-gray-400 text-black font-bold py-2 px-4 rounded' href="mailto:hello@arkhandyman.net">Get Free Estimate</a>      </div>
      <br></br>
    </div>
  );
}

export default Header;