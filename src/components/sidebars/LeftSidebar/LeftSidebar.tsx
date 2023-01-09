import {logo} from '../../../utils/importSvg'
import './LeftSidebar.scss'
import { PlaylistSideBar } from "../PlaylistSideBar/PlaylistSideBar";
import NavMenu from "../NavMenu/NavMenu";

const LeftSideBar = () => {
    return (
            <aside className='leftSideBar'>
              <img className='logo' src={logo} alt="" />
              <NavMenu/>
              <hr className='sideBarHr'/>
              <PlaylistSideBar amountTracks={11} header='Уходящая неделя'/>
            </aside>

    )
}




export default LeftSideBar