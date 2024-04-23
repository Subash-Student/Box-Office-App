import { BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import Mainlayout from "./components/Mainlayout"
import ShowPage from "./Pages/ShowPage";
function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
     <Route element={<Mainlayout />}>
      <Route path="/" element={<Home />} />
      <Route path="starred" element={<Starred />} />
     </Route>

     <Route path ="/show/:showId" element={<ShowPage />} />
      <Route path="*" element={<div>Not Found</div>} />
      {/* <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route>
      <Route path="contact-us" element={<Contact />} /> */}
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
