import React, { useEffect } from 'react'

function LeftNavNestedCat({cats}) {
    const unCatUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=`
    const nestCategories = async (catName) => {
        try {
            const unCatRes = await fetch(unCatUrl+catName); 
            const unCatData = await unCatRes.json();
            console.log('nested category data : ', unCatData);
        } catch (error) {
            console.log('error in fetching nested categories', error);
        }
    }
    useEffect(() => {
        nestCategories(cats);
    }, [cats]);
  return (
    <>
     <ul className='p-2 ml-2 bg-gray-200'>
        {/* {cats.map((cat, i) => (
            <li className='p-2'>cat</li>
        ))} */}
     </ul>
    </>
  )
}

export default LeftNavNestedCat