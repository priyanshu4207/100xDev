import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { CountState } from "../atoms/counter"

function App() {
  return (
  <RecoilRoot>
    <Counter></Counter>
    <SetCount></SetCount>
  </RecoilRoot>
  )
}

function Counter(){
  const count  = useRecoilValue(CountState)
  return <div>
    {count}
  </div>
}

function SetCount(){
  const setcount = useSetRecoilState(CountState)
  return <div>
    <button onClick={()=>{
      setcount(count => count+1)
    }}>Increase</button>

    <button onClick={()=>{
      setcount(count => count-1)
    }}>Decrease</button>
  </div>

}
export default App
