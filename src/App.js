import './App.css';
import Header from './components/Header';
import Total_balance from './components/Total_balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';


function App() {
  return (
    <>
     <Header />
     <div className="container">
      <Total_balance />
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      </div>
      </>
  );
}

export default App;
