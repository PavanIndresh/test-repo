import './App.css'
import './index.css';
import image1 from './assets/cloud.png';
import image2 from './assets/cloud2.jpg';

function App() {
  return (
    <div>  
      <div className='w-full h-[692px] flex items-center justify-center bg-[#41C3D37D] flex-col relative'>
        <img src={image2} className='object-cover w-full h-full absolute'></img>
        <div className='w-full h-full absolute bg-[#41C3D37D] top-0 left-0 flex items-center justify-center'>
        <div className='w-[368px] h-1/2 flex items-center justify-center bg-white rounded-xl shadow-md'>
          <div className='w-4/5 h-4/5 my-8 flex items-center justify-center flex-col'>
            <div className='h-1/5 w-full flex items-center justify-center'>
              <img src={image1} className='object-contain h-full'/>
              <p className='text-base text-[#074161] font-bold'>Weather App</p>
            </div>
            <div className='h-[30%] w-full flex items-center justify-center'>
              <p className='text-2xl text-[#074161] flex items-center justify-center m-0 w-full h-full font-bold text-center'>Find out the weather in your city</p>
            </div>
            <div className='h-[25%] w-full flex items-center justify-center'>
            <input type='text' className='w-full h-[70%] font-lg border-0 rounded bg-[#ECECEC] text-center' placeholder='Enter your Zipcode' />
            </div>
            <div className='h-1/4 w-full flex items-center justify-center'>
              <button className='w-full h-3/4 bg-[#6DCDDE] rounded border-0 text-base text-white'>Submit</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>  
  )
}

export default App

// onChange={(e) => SetZipCode(e.target.value)}
// onClick={handleSubmit}