import AppTitle from "./AppTitle";
import Navs from "./Navs";
import{Outlet} from "react-router-dom"
const Mainlayout =()=>{

return <div>
    <Navs />
    <AppTitle />
   <Outlet />
</div>

}

export default Mainlayout;