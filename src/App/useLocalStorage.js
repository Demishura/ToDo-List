import React from 'react'


    function useLocalStorage(itemName,initialValue){
        let parsedItem
        const localStorageItem =localStorage.getItem(itemName)
        
        if (!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem=initialValue
        }else{
          parsedItem=JSON.parse(localStorageItem)
        }
        const [item,setItem]=React.useState(parsedItem);
        const saveItem =(nuevosItems)=>{
          setItem(nuevosItems)
          localStorage.setItem(itemName, JSON.stringify(nuevosItems))
        }
        return [item, saveItem]
      }
  


export default useLocalStorage