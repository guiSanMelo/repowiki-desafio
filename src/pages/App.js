import Input from "../components/Input";
import { Container } from "./styles";
import githubLogo from "../assets/githublogo.png";
import ItemRepo from "../components/ItemsRepo";
import { useState } from "react";
import Button from "../components/Button";
import { api } from "../service/api";

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState("");
  const [error, setError] = useState("");

  const handleSearchRepo = async () => {
    const repoName = currentRepo.trim();

    if (!repoName) {
      setError("Digite um repositório para buscar.");
      return;
    }

    if (!repoName.includes("/")) {
      setError("Use o formato dono/repositório");
      return;
    }

    try {
      const { data } = await api.get(`/repos/${repoName}`);

      if (data.id) {
        setRepos((prev) => [...prev, data]);
        setError("");
        console.log("Repos: ", repos);
      }
    } catch (err) {
      if (err.response?.status === 404) {
        setError("Repositório não encontrado. Verifique o nome e o formato dono/nome.");
      } else {
        setError("Não foi possível buscar este repositório no momento.");
      }
    }
  };

  const handleRemoveRepo = (repo_id) => {
    try {
      console.log("Repositório pŕe filtro: ", repos)
      const arrFiltrado = repos.filter((entrada) => entrada?.id !== repo_id);
      console.log("Array Filtrado: ", arrFiltrado);
      setRepos(arrFiltrado)
      console.log("Repos pós filtro: ", repos)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Container className="App">
      <img src={githubLogo} alt="Logo do GitHub" height={72} width={72} />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button placeholder={"Buscar"} onClick={handleSearchRepo} />
      {error && <p>{error}</p>}
      {repos.map((repo) => (
        <>
          <ItemRepo key={repo.id} repo={repo}/>
          {console.log("Repositório: ", repo)}
          <button onClick={()=>handleRemoveRepo(repo.id)}>Remover</button>
        </>
      ))}
    </Container>
  );
}

export default App;
