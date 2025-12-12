import logo from '../assets/img/github.png';
import Input from '../components/Input';
import { Container } from './styles';


function App() {
  return (
    <Container className="App">
      <img src={logo} className="App-logo" alt="github-logo" width={72} height={72}/>
      <Input />
    </Container>
  );
}

export default App;
