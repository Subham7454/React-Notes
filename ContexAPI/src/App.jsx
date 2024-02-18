import UserContexProvider from "./contex/UserContexProviser"
import Login from './components/Login'
import Profile from './components/Profile'
import './App.css'


function App() {
  

  return (
    <UserContexProvider>
      <Login/>
      <Profile/>
    </UserContexProvider>
  )
}

export default App
