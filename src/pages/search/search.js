import { useFetch } from '../../hooks/useFetch'
import { useLocation } from 'react-router-dom'
import RecipeList from '../../components/RecipeList'
import { useEffect } from 'react'

// styles
import './Search.css'

export default function Search() {
  // Log when component renders
  console.log('Search component rendering')
  
  const queryString = useLocation().search
  console.log('Query string:', queryString)
  
  const queryParams = new URLSearchParams(queryString)
  console.log('Query params object:', queryParams)
  
  const query = queryParams.get('q')
  console.log('Extracted query:', query)

  const url = 'http://localhost:3000/recipes?q=' + query
  console.log('Constructed URL:', url)
  
  const { error, isPending, data } = useFetch(url)
  console.log('useFetch returned:', { error, isPending, dataExists: !!data })
  
  if (data) {
    console.log('Data received:', data)
    console.log('Number of recipes returned:', data.length)
    console.log('Recipe titles:', data.map(recipe => recipe.title))
  }
  
  // Use useEffect to track changes to key variables
  useEffect(() => {
    console.log('URL CHANGED to:', url)
  }, [url])
  
  useEffect(() => {
    console.log('DATA CHANGED:', data ? `${data.length} recipes` : 'no data')
    if (data) {
      console.log('Recipes in data:', data.map(r => r.title).join(', '))
    }
  }, [data])
  
  // Log before rendering return value
  console.log('About to render with query:', query)
  
  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      <p>Debug - URL: {url}</p>
      <p>Debug - isPending: {isPending ? 'true' : 'false'}</p>
      <p>Debug - data exists: {data ? `Yes (${data.length} recipes)` : 'No'}</p>
      
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && (
        <>
          <p>Found {data.length} recipes for "{query}"</p>
          <RecipeList recipes={data} />
        </>
      )}
    </div>
  )
}