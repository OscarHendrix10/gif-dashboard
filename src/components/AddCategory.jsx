import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        //esto es para que no se recargue el imput
        setInputValue(target.value)
    }

    const onSubmit = (event) => {

        event.preventDefault();
        
        if(inputValue.trim().length <= 1){
            return;
        }

        // setCategories( categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');

    };

  return (

    <form onSubmit={onSubmit}>
         <input type="text"  
         placeholder="Search Gifs" 
         value={inputValue} 
        onChange={onInputChange}/>
    </form>

  )
}
