import AppRouter from './router/AppRouter.jsx';
import './app/ui/styles/base.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// App solo delega en el router: barra, páginas y pie están definidos en AppRouter.jsx
export function App() {
  return <AppRouter />;
}
