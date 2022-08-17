import './App.css';
import FormButton from './components/form_button';
import MainLayout from './components/Layouts/main.layout';
import MyTable from './components/MyTable/my_table';

const App = () => {
  return (
    <>
      <MainLayout>
        <FormButton/>
        <MyTable/>
      </MainLayout>
    </>
  )
}

export default App;
