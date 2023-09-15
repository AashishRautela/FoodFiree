import React from "react";

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
    }
  }
  componentDidMount(){
    
  }
  render() {
    const {count}=this.state;
    return (
      <div>
        <h1>this is my class component</h1>
        <h2>Name:{this.props.name}</h2>
        <h2>count:{count}</h2>
        <button onClick={()=>{
          this.setState({
            count:count+1,
          })
        }}>SetCount</button>
      </div>
    );
  }
}
export default Profile;
