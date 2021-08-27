import axios from "axios";
import { Component } from "react";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
class App extends Component {
  state={
    users:[],
    loading:false
  }
  async componentDidMount() {
    this.setState({loading:true});
    const res=await axios.get("https://api.github.com/users");
    this.setState({users:res.data,loading:false})
    };
  render(){
    return (
      <div className='App'>
        <Heading />
        <Navbar />
        <Users List={this.state.users} />
      </div>
    );
  }
};
export default App;
