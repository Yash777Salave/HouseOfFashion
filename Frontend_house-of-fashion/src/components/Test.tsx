import {useState} from 'react'
const Test = () => {
    let num=10;
    num=20;
    const [first, setfirst] = useState(10);
    
    setfirst(20)
  return (
    <div>Test</div>
  )
}

export default Test