import { Routes, Route, useLocation } from 'react-router-dom' 
import MainScreen from './components/MainScreen';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen />} />
      </Routes>
    </>
  );
}

export default App;
