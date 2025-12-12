import { ItemContainer } from "./styles";

function ItemRepo() {
  return (
    <ItemContainer>
      <h3>Title</h3>
      <p>teste</p>
      <a href="#">Ver repositório</a>
      <a className="remove" href="#">Remover</a>
      <hr />
    </ItemContainer>
  )
}

export default ItemRepo;

