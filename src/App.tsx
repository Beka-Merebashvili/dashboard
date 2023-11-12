import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

 
 

function App() {
  

  return (
    <main className="flex">
      <Sidebar />
      <div>
        <Navbar />
      </div>
    </main>
  )
}

export default App
