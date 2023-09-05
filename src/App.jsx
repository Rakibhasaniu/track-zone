import ClockList from "./components/clocklist"
import LocalClock from "./components/localclock"

import useClock from "./hooks/useClock"



// function App() {
//   const { clock: local } = useClock()
//   const { clock: est } = useClock("EST")
//   const { clock: pst } = useClock("PST")
//   const { clock: pakistan } = useClock('UTC', 5 * 60)
//   console.log(local.date)
//   console.log(est.date)
//   console.log(pst.date)
//   console.log(pakistan.date)
//   return (
//     <div>
//       <LocalClock />
//       <ClockList />
//     </div>
//   )
// }


// export default App
// import ClockList from './components/clocklist';
// import LocalClock from './components/local-clock';
// import useClock from './hooks/useClock';

const App = () => {
  const { date: localDate, localOffset, localTimezone } = useClock()
  console.log(localDate);
  return (
    <div>
      {localDate !== null && (
        <LocalClock date={localDate} timezone={localOffset} offset={localTimezone} />
      )}
      <ClockList />
    </div>
  );
};

export default App;