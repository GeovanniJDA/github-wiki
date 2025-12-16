import { ItemContainer, ActionsContainer } from "./styles";

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id);
  }

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      
      <ActionsContainer>
        <a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a>
        <button type="button" className="remove" onClick={handleRemove}>Remover</button>
      </ActionsContainer>
    </ItemContainer>
  )
}

export default ItemRepo;