import headerLogo from '../assets//logo.png'
function Header() {
  
  return (
    <div className="flex h-56 justify-center bg-blue-300 shadow-xl">
       <img src={headerLogo} alt="Description of the image"></img>
    </div>
  );
}

export default Header;