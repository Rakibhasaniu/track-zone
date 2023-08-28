import ClockList from "./components/clocklist"
import LocalClock from "./components/localclock"
import useClock from "./hooks/useClock"



function App() {
  useClock(new Date)
  return (
    <div>
      <LocalClock />
      <ClockList />
    </div>
  )
}


export default App
