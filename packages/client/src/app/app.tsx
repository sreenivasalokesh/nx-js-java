// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ServerWelcome from '../welcome/Serverwelcome';
import styles from './app.module.css';
import { Welcome } from 'shared-ui';

export function App() {
  return (
    <div>
      <Welcome />
      <ServerWelcome />
    </div>
  );
}

export default App;
