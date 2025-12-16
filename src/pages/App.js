import { useState } from "react";
import logo from "../assets/img/github.png";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { Container } from "./styles";
import Button from "../components/Button";
import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    if(currentRepo.length === 0){
        alert("Preencha o campo com o nome do repositório");
        return;
    }

    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, data]);
          setCurrentRepo('');
          return;
        } else {
          alert('Repositório já existe');
        }
      }
    } catch (error) {
      alert('Repositório não encontrado');
    }
  };

  const handleRemoveRepo = (id) => {
    setRepos((prev) => prev.filter(repo => repo.id !== id));
    setCurrentRepo("");
  }

  return (
    <Container className="App">
      <img
        src={logo}
        className="app-logo"
        alt="github-logo"
        width={72}
        height={72}
      />
      <div className="app__container">
        <Input
          value={currentRepo}
          onChange={(e) => setCurrentRepo(e.target.value)}
          className="input"
        />
        <Button onClick={handleSearchRepo} className="button"/>
      </div>
      {repos.map((repo) => (
        <ItemRepo repo={repo} 
        handleRemoveRepo={handleRemoveRepo}
        />
      ))}
    </Container>
  );
}

export default App;
