import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Rc() {
  const [recipes, setRecipes] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(null);
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '20',
      tags: 'under_30_minutes',
      q: 'cake'
    },
    headers: {
      'X-RapidAPI-Key': '523644676dmsh9e0c6de7e35c253p1c6a27jsn2e75fe052fb0',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.request(options);
        setRecipes(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handlePlayClick = (index) => {
    setActiveVideo(index);
  };

  return (
    <div>
      <h1>Recipes</h1>
      <div className="recipes-container">
        {isLoading ? (
          <h1> wait a moment </h1>
        ) : (
          <>
            {recipes.map((recipe, index) => (
              <div className='card' key={recipe.id}>
                {activeVideo === index ? (
                  <iframe
                    title={recipe.name}
                    width="100%"
                    height="360"
                    src={recipe.renditions[0].url}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={recipe.thumbnail_url}
                      alt={recipe.name}
                      style={{ width: '100%' }}
                    />
                    <button onClick={() => handlePlayClick(index)}>Play</button>
                  </>
                )}
                <h2>{recipe.name}</h2>
                <p className="price">{recipe.description}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Rc;