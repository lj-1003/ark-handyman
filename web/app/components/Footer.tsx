import headerLogo from '../assets/logo.png'
function Footer() {
  
  return (
    <div className="">
      <div className="pl-20 pr-20 grid grid-cols-2 p-8 bg-blue-300">
        <div className="flex h-32">
          <img src={headerLogo} alt="logo"></img>
        </div>
        <div className="text-right">
          <h1 className="text-4xl">Contact</h1><br />
          <p>316-660-4298</p>
          <a href="mailto:hello@arkhandyman.net">hello@arkhandyman.net</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;