import React, { useEffect, useState } from 'react'
import Heroimage from '../images/heroimage.png'
import About from '../images/about.png'
import SemiBlock from '../Components/SemiBlock'
import Heading from '../Components/Heading'
import ImpactSection from '../Content/ImpactSection'
import OpportunitySection from '../Content/OpportunitySection'
import InitiativesSection from '../Content/InitiativesSection'
import TechEdunomicsSection from '../Content/TechEdunomicsSection'
// import FaqsSection from '../Content/FaqsSection'
import SearchForm from '../Components/SearchForm'
import {getSuggestions} from '../API/BlogRequests'







export default function Home() {
    


    const [skillArray,setskillArray]=useState([])
    const [careerArray,setcareerArray]=useState([])

    
    const getTheAutocomplete=()=>{
        getSuggestions()
        .then(response=>{
            if(response.success){
                setcareerArray(response.names.career)
                setskillArray(response.names.skill)
            }
            else{
                console.log("error")
            }
        })
        .catch(error=>{console.log(error)}) 
        .finally(()=>resolveArray())   
    }
    var skillsObj
    var careerObj
    const resolveArray=()=>{
        skillsObj=skillArray.reduce((o, key) => Object.assign(o, {[key.toString()]: null}), {});
        careerObj=careerArray.reduce((o, key) => Object.assign(o, {[key.toString()]: null}), {});
        console.log(skillsObj)
        console.log(careerObj)
    }


    useEffect(()=>{
        getTheAutocomplete()
    },[])
    
    
    return (
        <div className="" >
            <section className="homecontainer section" id="home"> 
                <div className="row ">
                    <div className="col l6 m12 s12 section landingpagediv">
                        <h3 className="left-align valign-wrapper"><b>WELCOME TO THE WORLD OF EDUNOMICS</b></h3>
                        <SearchForm
                        data1={careerArray}
                        data2={skillArray}

                        />

                    </div>
                    <div className=" col l6 m12 s12 ">
                        <img src={Heroimage} alt="Home page " style={{marginTop:"100px"}} className="img-responsive heroimage"></img>
                    </div>
                </div>
            </section>
            <section className="aboutsection section">
                <Heading title="ABOUT EDUNOMICS" />
                <SemiBlock 
                
                text="We are a bootstrap startup with a vision to impact education and economics solving complex problems with simple solutions.
                Edunomics combines tech expertise and business intelligence to catalyze change and deliver results. We are employing top talent to provide a uniquely matching solution for your unique problem." 
                isbutton1={true}
                button1text="Know More?"
                button1path="/knowmore"
                >
                    <img src={About} className="heroimage"  alt="hero"/>
                </SemiBlock>
                
            </section>
            <ImpactSection />
           
            <OpportunitySection />

            <InitiativesSection />

            <TechEdunomicsSection />

            {/* <FaqsSection /> */}
        </div>
    )
}
