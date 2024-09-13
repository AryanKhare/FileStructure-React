import { useEffect, useState } from 'react';
import './App.css'
import { Data, IData } from './data/data';
import { Folder } from './components/Folder';

function App() {
  const [explorerData, setExploreData] = useState<IData>(Data);

  useEffect(() => {
    setExploreData(Data);
  }, [])

  return (
    <>
      <Folder data={explorerData}/>
    </>
  )
}

export default App
