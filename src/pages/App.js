import { useState } from 'react';
import logo from '../assets/img/github.png';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { Container } from './styles';
import Button from '../components/Button';


function App() {

  const [repos, setRepos] = useState([])

  return (
    <Container className="App">
      <img src={logo} className="App-logo" alt="github-logo" width={72} height={72}/>
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  );
}

export default App;
