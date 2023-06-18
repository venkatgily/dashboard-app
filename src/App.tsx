import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from './layout/layout';
import Home from './pages/home/home';
import Me from './pages/me/me';
import NeedHelp from './pages/need-help/need-help';
import AskU from './pages/ask-u/ask-u';

function App() {
 return (
    
     <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={< Home/>} />
            <Route path="/me" element={< Me/>} />
            <Route path="/need-help" element={< NeedHelp/>} />
            <Route path="/ask-u" element={< AskU/>} />
        </Routes>
       </Layout>
     </BrowserRouter>
     
 )
}
export default App