import {useState} from 'react'
import {SearchManufacturer} from './';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit} className='searchbar'>
        <div className='searchbar__item'>
            <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar