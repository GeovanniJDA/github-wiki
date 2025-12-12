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
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find(repo => repo.id == data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }else{
        alert("Repositório já existe");
      }
    }else{
      alert("Repositório não encontrado");
    }
  };

  return (
    <Container className="App">
      <img
        src={logo}
        className="App-logo"
        alt="github-logo"
        width={72}
        height={72}
      />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} />
      ))}
    </Container>
  );
}

export default App;
