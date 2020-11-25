#### Ben Award hooks concepts

1. useState and concept of custom hooks. *App.js*

```javascript
import React,{useState} from 'react'
import { useForm } from './components/useForm'

function App() {
    const [values,handleChange]=useForm({email: '',password:''})
    return (
        <div>

          <input
             type="email"
             name="email"
             value={values.email}
             onChange={handleChange}
             />

          <input
               type="password" 
               value={values.password}
               name="password"
               onChange={handleChange} 
         />
        </div>
    )
}

export default App
```

2. *useForm.js*

```javascript
import {useState} from 'react'


export const useForm=(initialValues)=>{
    const [values,setValues]=useState(initialValues)


    return [values,e=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }]
}
```