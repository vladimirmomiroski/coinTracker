import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import Wizzard from './pages/Wizzard/Wizzard'
import Overview from './pages/Overview/Overview'
import Categories from './pages/Categories/Categories'
import Statistics from './pages/Statistics/Statistics'
import {createTheme, ThemeProvider} from '@mui/material/styles'

function App() {
  const mainTheme = createTheme({
     palette: {
       primary: {
         main: "#6200EE",
         secondary: "#808080"
       },
       secondary: {
         main: "#03DAC4",
         secondary: "#f5f5f5"
       }
     }
  })


  return (
    
    <ThemeProvider theme={mainTheme}>
    <Router>
    <Routes>
    <Route path="/" element={<SignIn/>}/>
    <Route path="/Signup" element={<SignIn/>}/>
    <Route path='/welcomeWizzard' element={<Wizzard/>}/> 
    <Route path='Overview' element={<Overview/>}/>
    <Route path='Categories' element={<Categories/>}/>
    <Route path='Statistics' element={<Statistics/>}/>
    </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
