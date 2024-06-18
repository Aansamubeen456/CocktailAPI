import Wrapper from '../assets/wrappers/CocktailList'
import CocktailCard from '../components/CocktailCard'

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4>Not matching drinks found...</h4>
  }

  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } = drink

    return {
      id: idDrink,
      info: strAlcoholic,
      image: strDrinkThumb,
      glass: strGlass,
      name: strDrink,
    }
  })
  return (
    <Wrapper>
      {formattedDrinks.map((drink) => {
        return <CocktailCard key={drink.id} {...drink} />
      })}
    </Wrapper>
  )
}

export default CocktailList
