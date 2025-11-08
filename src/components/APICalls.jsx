import React from 'react'

function APICalls() {
    return
}

const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

export const getRecepieDetails = async (mealName) => {
   try{
       const res = await fetch(url + mealName);
       if (!res.ok) throw new Error(`HTTp error: ${res.status}`);

       const data = await res.json();
       return data.meals ? data.meals[0] : null;
   } catch(err) {
      console.log('there is an error fetching ViewReceipe: ', err);
      return null;
   }
}

export default APICalls
