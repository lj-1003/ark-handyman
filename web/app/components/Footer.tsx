import headerLogo from '../assets/logo.png'
function Footer() {
  
  return (
    <div className="p-8  bg-blue-300">
      <div className="pl-7 pr-7 grid sm:grid-cols-2">
        <div className="flex flex-col text-center sm:text-left justify-center">
          <h1 className="text-4xl">Contact</h1><br />
          <p className='text-2xl'>316-660-4298</p>
          <p><a className='text-2xl' href="mailto:hello@arkhandyman.net">hello@arkhandyman.net</a></p>
        </div>
        <div className="flex flex-row h-60 justify-center items-center sm:justify-end">
          <img className='h-50 w-50' src={headerLogo} alt="logo"></img>
        </div>
      </div>
      <h1 className='text-3xl text-center'>Ark Rennovation & Handyman LLC</h1>
    </div>
  );
}

export default Footer;