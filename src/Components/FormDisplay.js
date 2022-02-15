import React from "react";
class FormDisplay extends React.Component {
  render() {
    return <div className="form-display">{this.props.formData.map((item,index)=>{
      return <div className="card" key={index}>Name: {item.name} | Department: {item.department} | Rating: {item.rating}</div>
  })}</div>;
  }
}

export default FormDisplay;
