import AppTitle from "./AppTitle";
import Navs from "./Navs";
import{Outlet} from "react-router-dom"
const Mainlayout =()=>{

return <div>
    <AppTitle />
    <Navs />
   <Outlet />
</div>

}

export default Mainlayout;