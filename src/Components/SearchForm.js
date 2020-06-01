import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import {getArticle} from '../API/BlogRequests'
import M from  'materialize-css/dist/js/materialize.min.js';


export default function SearchForm(props) {

    //query is the text that you search
    //search is the category filter that you wish to search
    console.log(props)
    const [query,setQuery] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [search,setSearch]=useState("career")
    const [blog,setBlog]=useState()
    const activeSearch="btn blue   "
    const inactiveSearch="btn blue lighten-3 " 


    const handleSubmit=(e)=>{
        e.preventDefault();
        if (query===''){
            alert("Enter a search!")
        }
        else{
            getArticle(query,search)
            .then(response=>{
                if(response.success){
                    setBlog(response.data)
                    setRedirect(true)
                }
                else{
                    alert("Requested blog is not present")
                    setRedirect(false)
                }
            })
            .catch(error=>(console.log(error)))
        }
    }

    const autoData={
        'vue':null,
        'react':null,
        'angular':null
      }


    useEffect(()=>{
        let elems = document.querySelectorAll('.autocomplete1');
        var instances = M.Autocomplete.init(elems, {
            data:autoData
        });          
    },[])
    
    useEffect(()=>{
        let elems = document.querySelectorAll('.autocomplete2');
        var instances = M.Autocomplete.init(elems, {
            data:autoData
        });          
    },[])
    


    const handleRole=(e)=>{
        e.preventDefault()
        setSearch(e.target.name)
    }
 
    const handleChange=(e)=>{
        setQuery(e.target.value)
    }



    if (redirect) {
        return <Redirect to={{
          pathname: '/search',
          state: { data:blog}
        }} />
      } else {         
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
        {search==='career'?
        (
        //career   
        <div className="row m-t-10">
            <div className="col s12 l10">
                
                    <div className="input-field">
                        <input type="text" id="autocomplete-input" className="autocomplete1" onChange={handleChange} autoComplete='off'/>
                        <label htmlFor="autocomplete-input">Enter Your Query</label>
                </div>
            </div>
            <div className="col s12 l2 m-t-10">
                <button type="submit" className="button-search m-t-10 gradient1 white-text hoverable">Search Career</button>
            </div>
            <div className="row">
                <div className="col l6 s6 right-align">
                    <button className={search==="career"?activeSearch:inactiveSearch} name="career" onClick={handleRole}>Career</button>
                </div>
                <div className="col l6 s6 left-align">
                    <button className={search==="skill"?activeSearch:inactiveSearch} name="skill" onClick={handleRole}  >Skill</button>
                </div>
            </div>
        </div>
        ):
        //skill
        (   
            <div className="row m-t-10">
            <div className="col s12 l10">
                
                    <div className="input-field">
                        <input type="text" id="autocomplete-input" className="autocomplete2" onChange={handleChange} autoComplete="off"/>
                        <label htmlFor="autocomplete-input">Enter Your Query</label>
                </div>
            </div>
            <div className="col s12 l2 m-t-10">
                <button type="submit" className="button-search m-t-10 gradient1 white-text hoverable">Search Skill</button>
            </div>
            <div className="row">
                <div className="col l6 s6 right-align">
                    <button className={search==="career"?activeSearch:inactiveSearch} name="career" onClick={handleRole}>Career</button>
                </div>
                <div className="col l6 s6 left-align">
                    <button className={search==="skill"?activeSearch:inactiveSearch} name="skill" onClick={handleRole}  >Skill</button>
                </div>
            </div>
        </div>
        )
    
    
    }   
        
        </form>

     
    )
}
}