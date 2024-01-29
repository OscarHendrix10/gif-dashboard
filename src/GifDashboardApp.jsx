import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifDashboardApp = () => {

  const [categories, setCategories] = useState(['Gif']);
  
  const onAddCategory = ( newCategory ) => {
  //  categories.push(newCategory);
    if(categories.includes(newCategory)) return;
    // operador spread ...categories para que no se pierdan los datos
     setCategories( [newCategory, ...categories] );
  }; 

  return (
    <>
        {/* tttle  */}
        <h1 className="title">Gif Dashboard</h1>
      

        <AddCategory  
        onNewCategory={(vaule) => onAddCategory(vaule)}
        
        />
    
        {
          categories.map((category) => (
            <GifGrid key={category} 
            category = {category}/>
            ))
        }
     
          

    </>
  )
}
