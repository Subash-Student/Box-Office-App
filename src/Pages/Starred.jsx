import { useStarredShow } from "../lib/useStarredhow";

const Starred =()=>{

const [starred] = useStarredShow()

return <h1>Starred show count is {starred.length}</h1>
}

export default Starred;