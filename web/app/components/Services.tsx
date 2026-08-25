import plumbing from '../assets/service-plumbing.png'
import electric from '../assets/service-electric.png'
import hvac from '../assets/service-hvac.png'
import painting from '../assets/service-painting.png'
import wood from '../assets/service-wood.png'
import yard from '../assets/service-yard.png'


function Gallery() {
  
  return (
    <div className='m-8 text-center'>
      <h1 className="text-4xl">Services</h1><br />
      <div className='grid grid-cols-2 justify-items-center sm:grid-cols-3 gap-x-7 gap-y-7' >
        <div>
          <p>Plumbing</p>
          <img className='max-h-[100px]' src={plumbing} alt="plumbing"></img>
        </div>
        <div>
          <p>HVAC</p>
          <img className='max-h-[100px]' src={hvac} alt="hvac"></img>
        </div>
        <div>
          <p>Electric</p>
          <img className='max-h-[100px]' src={electric} alt="electric"></img>
        </div>
        <div>
          <p>Carpentry</p>
          <img className='max-h-[100px]' src={wood} alt="carpentry"></img>
        </div>
        <div>
          <p>Yard Work</p>
          <img className='max-h-[100px]' src={yard} alt="yard"></img>
        </div>
        <div>
          <p>Painting/Drywall</p>
          <img className='max-h-[100px]' src={painting} alt="painting"></img>
        </div>
      </div>
      <br></br>
      <p>Service not listed? Call now to discuss your needs!</p>
    </div>
  );
}

export default Gallery;