import './App.css'
import { gql, useQuery } from "@apollo/client"

const DOGS = gql`
  query GetDogs {
    dogs {
      id
      name
      description
      thumbnail {
        url
      }
    }
  }
`


function App() {

  const { data, loading, error } = useQuery(DOGS)
  if (loading) return <p>Loading...</p>
  if (error) return ```<p>Error :${error}</p>```


  return (



    <>
      <h1>Graph QL と React</h1>
      <div className="docsConstainer">
        {data.dogs.map((dog) => (
          <div className="docsCard" key={dog.id}>
            <img src={dog.thumbnail.url} alt={dog.name} />
            <h2>{dog.name}</h2>
            <p>{dog.description}</p>
          </div>

        ))}
      </div>

    </>
  )
}

export default App
