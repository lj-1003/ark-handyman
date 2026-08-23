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
          <h2>Plumbing</h2>
          <img className='max-h-[100px]' src={plumbing} alt="plumbing"></img>
        </div>
        <div>
          <h2>HVAC</h2>
          <img className='max-h-[100px]' src={hvac} alt="hvac"></img>
        </div>
        <div>
          <h2>Electric</h2>
          <img className='max-h-[100px]' src={electric} alt="electric"></img>
        </div>
        <div>
          <h2>Carpentry</h2>
          <img className='max-h-[100px]' src={wood} alt="carpentry"></img>
        </div>
        <div>
          <h2>Yard Work</h2>
          <img className='max-h-[100px]' src={yard} alt="yard"></img>
        </div>
        <div>
          <h2>Painting/Drywall</h2>
          <img className='max-h-[100px]' src={painting} alt="painting"></img>
        </div>
      </div>
    </div>
  );
}

export default Gallery;