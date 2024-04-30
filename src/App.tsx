import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Main page</h1>
        <h2>Navigation...</h2>
        <nav>
          <ul>
            <li>
              <button onClick={()=>navigate("/profile")}>
                Go to profile!!
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default App;
