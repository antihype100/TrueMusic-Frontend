import './searchPanel.scss'
import { stick, search } from "../../utils/importSvg";

const SearchPanel = () => {



    return (
        <div className='searchPanelWrapper'>
          <img className='searchPanel__stickIcon' src={stick} alt=""/>
          <img className='searchPanel__searchIcon' src={search} alt="" />
          <span className='searchPanel__searchHistory'>История поиска</span>
          <input className='searchPanel' type="text" placeholder='Трек, исполнитель или альбом'/>
        </div>
    )
}

export {SearchPanel}