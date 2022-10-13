import { Heading } from './components/Heading';
import { Logo } from './components/Logo';
import { Text } from './components/Text';
import './styles/global.css';

export function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100">

      <Logo />
      <Heading size="lg">
        Ignite Lab
      </Heading>

      <Text size="lg" className='text-gray-400'>Faça login e comece a usar!</Text>
    </div>
  );
}
