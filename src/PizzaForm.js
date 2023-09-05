import React , { useState, useEffect } from "react";
import * as yup from "yup"

const PizzaForm = () =>{
    const initialFormValues= {
        name: '',
        accepted:false,
        size: '',
        special: ''
    }
    const [form, setForm] = useState(initialFormValues)

    const formChange = (e) => {
        const {name,value,checked} = e.target

        setForm({...form, 
            [name]: value})
        validateChange(name, value)
    }
     
    
      const onSubmit = (evt) => {
       evt.preventDefault()
       console.log('submitting!!')
      }

      const formSchema = yup.object().shape({
        name: yup.string().min(2, "name must be at least 2 characters"),
        accepted:yup.boolean(),
        size: yup.string(),
        special: yup.string()
    })

    const [errors, setErrors] = useState({
        name: '',
        accepted:"",
        size: '',
        special: ''
    })

    const validateChange= (name, value) => {
        yup.reach(formSchema, name)
        .validate(value)
        .then(()=>{
            setErrors({...errors,[name]: ''})
        })
        .catch((error)=>{
            setErrors({...errors, [name]: error.errors[0]})
        })
    }
    const [disabled, setDisabled] = useState(true)


    useEffect(()=>{
        formSchema.isValid(form)
        .then((valid)=>{ 
            setDisabled(!valid)
        })
    }, [form])


return (
    <form onSubmit= {onSubmit} id="pizza-form">
            <h2>Create your pizza</h2>
         <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.special}</div>
        </div>
      
            
        <label>
           <p> Name: {errors.fullname} </p>
          <input id="name-input"
            value = {form.name}
            onChange={formChange}
            name='name'
            type='text'
          />
        </label>
        <label>Size
         <select id="size-dropdown"
           onChange={formChange}
           value={form.size}
           name='size'
         >
           <option value=''>- Select an option -</option>
           <option value='Small'>Small</option>
           <option value='Medium'>Medium</option>
           <option value='Large'>Large</option>
         </select>
       </label>
       <label>Pepperoni
          <input id="pepperoni"
            type="checkbox"
            name="accepted"
            onChange={formChange}
            checked={form.pepperoni}
          />
        </label>

        <label>extracheese
          <input id="extracheese"
            type="checkbox"
            name="accepted"
            onChange={formChange}
            checked={form.extracheese}
          />
        </label>

        <label>Sausage
          <input id="sausage"
            type="checkbox"
            name="accepted"
            onChange={formChange}
            checked={form.sausage}
          />
        </label>
        <label>chicken
          <input id="chicken"
            type="checkbox"
            name="accepted"
            onChange={formChange}
            checked={form.chicken}
          />
        </label>
        <label>Special Instructions
          <input id="special-text"
            value={form.special}
            onChange={formChange}
            name='special'
            type='text'
          />
        </label>
        <input id="order-button" type="submit" disabled={disabled} value='submit' />

        </form>
)

}
export default PizzaForm