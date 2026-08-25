import headerLogo from '../assets//logo.png'
function Header() {
  
  return (
    <div className='bg-blue-300 shadow-xl'>
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