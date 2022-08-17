import './App.css';
import MainLayout from './components/Layouts/main.layout';
import MyTable from './components/MyTable/my_table';

const App = () => {
  return (
    <>
      <MainLayout>
        <MyTable/>
      </MainLayout>
    </>
  )
}

export default App;
