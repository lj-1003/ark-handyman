import shed from '../assets/gallery/shed.jpg'
import kitchen from '../assets/gallery/kitchen.jpg'
import table from '../assets/gallery/table.jpg'
import hvac from '../assets/gallery/hvac.jpg'
import ac from '../assets/gallery/ac.jpg'


function Gallery() {
  
  return (
    <div className='m-8 text-center'>
      <h1 className="text-4xl">Previous Work</h1><br />
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-7 gap-y-7' >
        <img className='rounded-lg max-h-[600px] w-full h-full object-cover' src={shed} alt="shed"></img>
        <img className='rounded-lg max-h-[600px] w-full h-full object-cover' src={kitchen} alt="kitchen"></img>
        <img className='rounded-lg max-h-[600px] w-full h-full object-cover' src={table} alt="table"></img>
        <img className='rounded-lg max-h-[600px] w-full h-full object-cover' src={hvac} alt="hvac"></img>
        <img className='rounded-lg max-h-[600px] w-full h-full object-cover' src={ac} alt="ac"></img>
      </div>
    </div>
  );
}

export default Gallery;