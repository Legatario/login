import './App.css';
import RoutesApp from './routes/routes';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;
