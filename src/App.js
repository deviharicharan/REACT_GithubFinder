import axios from "axios";
import { Component } from "react";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import Spinner from "./Components/Spinner";
import Users from "./Components/Users";
class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  //search users
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }
  searchUsers = async (sample) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${sample}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
    console.log(sample);
    console.log(this.state.users);
  };
  render() {
    return (
      <div className='App'>
        <Heading />
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        {this.state.loading ? (
          <Spinner />
        ) : (
          <Users loading={this.state.loading} List={this.state.users} />
        )}
      </div>
    );
  }
}
export default App;
