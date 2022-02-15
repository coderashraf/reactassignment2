import React from "react";
import FormDisplay from "./FormDisplay"
class Form extends React.Component {
  state={
    name:"",
    department:"",
    rating:"",
    data:[]
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmission=(e)=>{
    e.preventDefault();
    if(this.state.name!=="" &&this.state.department!==""&&this.state.rating!==""){
      const tempObj={name:this.state.name,department:this.state.department,
      rating:this.state.rating,}
      const tempArr=this.state.data
      tempArr.push(tempObj)
      this.setState({data:tempArr})
      //clearing the form
      this.setState({name:"",
      department:"",
      rating:"",})
    } else alert("Please fill all the details")
  }
  render() {
    return (
      <div>
        <h1>Employee Feedback Form</h1>
        <form >
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" id="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/><br/>
          <label htmlFor="department">Department : </label>
          <input type="text" name="department" id="department" value={this.state.department} onChange={(e) => this.handleChange(e)}/><br/>
          <label htmlFor="rating">Rating : </label>
          <input type="number" name="rating" id="rating" value={this.state.rating} onChange={(e) => this.handleChange(e)}/> <br/>
          <input type="submit" onClick={(e) => this.handleSubmission(e)}/>
        </form>
        <FormDisplay formData={this.state.data}/>  
      </div>
    );
  }
}

export default Form;
