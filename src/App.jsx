import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AnalyticsChart from './components/AnalyticsChart';
import Pdfeditor from './components/Pdfeditor';
import PdfListPage from './components/PdfListPage';
import CompaniesPage from './components/CompaniesPage';
import UsersPage from './components/UsersPage';

function App() {

  return (
    <>
       <BrowserRouter >
        <Routes>
          <Route path="/" element={<Sidebar />} >
            <Route index element={<AnalyticsChart />} />
            <Route path="pdf-editor" element={<Pdfeditor />} />
            <Route path="pdf-list" element={<PdfListPage />} />
            <Route path="companies" element={<CompaniesPage />} />
            <Route path="users" element={<UsersPage />} />

            

            
            
          </Route>
           
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
