import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

import DocumentationPage from './pages/DocumentationPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/docs' element={<DocumentationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
