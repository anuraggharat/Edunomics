import React, { Component } from 'react'
import FirstForm from './FirstForm'
import SecondForm from './SecondForm'
import ThirdForm from './ThirdForm'
import Success from './Success'
import {applyNow} from '../API/UserRoutes'


export default class Userform extends Component {

    state={
        step:1,
        full_name: "",
        contact_no: "",
        email: "",
        university_name: "",
        questions:{successful_on_a_team: "",
        learn_quickly: "",
        made_mistakes: "",
        disagree_with_someone: "",
        most_challenging_project: "",
        edunomics_mean: "",
        edunomics_vision: " "}
        ,see_yourself_as: [{name:" "}],
        Tech_you_know: [ {
            name: "",
            proficiency:5 
        }],
        github_repo: "https://sdjhdksjfhjfdh.com"
    }
    
//changes the values
    handleChange=input=>e=>{
        this.setState({
            [input]:e.target.value
        })
        console.log(this.state)

    }
    handleArrays=async(name,array)=>{
        this.setState({
            [name]:array
        })
    }

//handles the submit
    handleSubmit=event=>{
    event.preventDefault()
    console.log(this.state)
    applyNow(this.state.full_name,this.state.email,this.state.contact_no,this.state.university_name,this.state.questions,this.state.see_yourself_as,this.state.Tech_you_know,this.state.github_repo)
        .then(response=>console.log(response))
        .catch(error=>console.log(error))
    }


// Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };


// Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

    render() {

         const {full_name,contact_no,email,university_name,step,github_repo,see_yourself_as,Tech_you_know}=this.state
        // const {successful_on_a_team,learn_quickly,made_mistakes,disagree_with_someone,most_challenging_project,edunomics_mean,edunomics_vision}=this.state
        
        const values={full_name,contact_no,email,university_name,github_repo,Tech_you_know,see_yourself_as}

        switch(step){
            case 1:
                return (
                    <FirstForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleArrays={this.handleArrays}
                        values={values}
                    />

                )
            case 2:
                return (
                    <SecondForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}

                    />
    
            )
            case 3:
                return (
                    <ThirdForm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                    />
    
            )
            case 4:
                return <Success />;
                    
                    

        }



        return (
            <div>
                
            </div>
        )
    }
}
