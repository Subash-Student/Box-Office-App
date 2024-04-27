import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import Mainlayout from "./components/Mainlayout"
import ShowPage from "./Pages/ShowPage";
import { QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { GlobalTheme } from "./theme";




const queryClient = new QueryClient();

function App() {
  return (
    <GlobalTheme>
    <QueryClientProvider client={queryClient}>
    <div >
    <BrowserRouter>
    <Routes>
     <Route element={<Mainlayout />}>
      <Route path="/" element={<Home />} />
      <Route path="starred" element={<Starred />} />
     </Route>

     <Route path ="/show/:showId" element={<ShowPage />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  </BrowserRouter>
    </div>
    </QueryClientProvider>
    </GlobalTheme>
  );
  
}

export default App;
