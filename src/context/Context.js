import { createContext, useState, useEffect } from 'react';
import {initialCategories} from "../initialCategories"

export const Context = createContext();

export const Provider = ({children}) => {
   
    const [categories, setCategories] = useState(initialCategories)
    const [step, setStep] = useState(1)
    const [isSignedUp, setIsSignedUp] = useState(false)

     useEffect(() => {
       const categoriesFromStorage = localStorage.getItem("storageCategories")
       const stepFromStorage = localStorage.getItem("step")
       const signedFromStorage = localStorage.getItem("isSignedUp")
       if(categoriesFromStorage) {
            setCategories(JSON.parse(categoriesFromStorage))
       }
       if(stepFromStorage) {
         setStep(+stepFromStorage)
       }
       if(signedFromStorage) {
         setIsSignedUp(signedFromStorage)
       }
     }, [])

     useEffect(() => {
           localStorage.setItem("storageCategories", JSON.stringify(categories))
           localStorage.setItem("step", step)
           localStorage.setItem("isSignedUp", isSignedUp)
          console.log(categories)
     }, [categories, step, isSignedUp])

    
     const setAmountOnCategories = (value, id) => {
      const ammountCategories = categories.map(el => {
        if(el.id === id) {
          el.budget = +value
        }
        return el
      }) 
      setCategories(ammountCategories)
     }

    //  Actions Categories
  const addCategoryItem = (item) => {
     setCategories([...categories, {id: new Date().valueOf(), ...item}])
  }

  const updateCategoryItem = (item) => {
    const updatedArr = categories.map(el => {
    return el.id === item.id ? item : el
    })
    setCategories(updatedArr)
  }

  // Actions entries
  const addEntryItem = (item, parentId) => {
    const id = new Date().valueOf()
     const addedEntry = categories.map(el => {
       if(el.id === parentId) {
         el.entries = [...el.entries, {...item, parentId, icon: el.icon, id,}]
       }
       return el
     })
     setCategories(addedEntry)
  }

  const deleteEntryItem = (id, parentId) => {
      const filteredArr = categories.map(el => {
        if(el.id === parentId) {
         const modifiedEl = el.entries.filter(entry => entry.id !== id)
        return {...el, entries: modifiedEl}
        } else {
          return el
        }
      })
      setCategories(filteredArr)
}

  const duplicateEntryItem = (item) => {
    const id = new Date().valueOf()
     const {parentId} = item
     const duplicatedItem = {
       ...item,
         id,
     }
     const mapped = categories.map(el => {
       if(el.id === parentId) {
          el.entries = [...el.entries, {...duplicatedItem}]
       }
       return el
     })
     setCategories(mapped)
  }

 const updateEntryItem = (item) => {
     const mapped = categories.map(el => {
       if(el.id === item.parentId) {
           el.entries = el.entries.map(entry => {
           if(entry.id === item.id) {
             return item
           } else {
             return entry
           }
          }) 
       } 
        return el
     })
     setCategories(mapped)
 }


     const contextObj = {
         categories, 
         setCategories,
         step, 
         setStep,
         setAmountOnCategories,
         isSignedUp,
         setIsSignedUp,
         addCategoryItem,
         updateCategoryItem,
         addEntryItem,
         updateEntryItem,
         deleteEntryItem,
         duplicateEntryItem
     }

     return <Context.Provider value={contextObj}>{children}</Context.Provider>
            
}