import axios from 'axios'
import { Link, Navigate, useLoaderData } from 'react-router-dom'
import Wrapper from '../assets/wrappers/CocktailPage'

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

import { useQuery } from '@tanstack/react-query'
const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${cocktailSearchUrl}${id}`)
      return data
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params
    await queryClient.ensureQueryData(singleCocktailQuery(id))
    return { id }
  }

const Cocktail = () => {
  const { id } = useLoaderData()
  const { data } = useQuery(singleCocktailQuery(id))

  if (!data.drinks) {
    return <Navigate to="/" />
  }
  const singleDrink = data.drinks[0]

  const {
    strAlcoholic: info,
    strCategory: category,
    strDrink: name,
    strDrinkThumb: image,
    strInstructions: instructions,
    strGlass: glass,
  } = singleDrink

  // logic 1

  // let ingredientsArr = []
  // for (let i = 1; i <= 15; i++) {
  //   const element = `strIngredient${i}`
  //   if (singleDrink[element] !== null) {
  //     ingredientsArr = [...ingredientsArr, singleDrink[element]]
  //   }
  // }

  // logic 2
  const ingredientsArr = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith('strIngredient') && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key])
  // console.log(ingredientsArr)

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>

      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category : </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Ingredients : </span>
            {ingredientsArr.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < ingredientsArr.length - 1 ? ', ' : ''}
                </span>
              )
            })}
          </p>
          <p>
            <span className="drink-data">instructions : </span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default Cocktail
