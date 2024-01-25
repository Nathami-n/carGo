import {CustomButton} from './'
const Body = () => {
    const handleScroll = () => {}
  return (
    <section className='hero'>
        <div className='flex-1 pt-36 sm:px-16 p-6'>
       <h1 className='hero__title'>Need a Car? You came to the right place</h1>
       <p className='hero__subtitle'> Easen buying and renting cars with us. A one stop car dealership</p>
       <CustomButton
       title = 'Find cars'
       containerStyles = 'bg-primary-blue text-white rounded-full mt-10'
       handleClick={handleScroll}
       />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <img src="/3-2-car-free-download-png.png" alt="hero image" className='object-contain'/>
            </div>
        </div>
    </section>
  )
}

export default Body