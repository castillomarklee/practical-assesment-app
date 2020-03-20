import React from "react";
import faker from "faker";
import SearchBar from "./SearchBar";
import UserCard from "./UserCard";
import Spinner from './Spinner';
import "./style.scss";

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: this.initUserList(10),
      keyword: null,
      isLoading: false
    };
    this.searchList = this.searchList.bind(this);
    this.userListRender();
  }

  list = "";

  isValueNull(value) {
    if (!value) {
      return "";
    }
    return value;
  }

  initUserList(numberOfUsers) {
    if (!numberOfUsers) {
      return;
    }

    let users = [];

    for (var i = 0; numberOfUsers > i; i++) {
      users = [
        ...users,
        {
          email: this.isValueNull(faker.internet.email()),
          jobTitle: this.isValueNull(faker.name.jobTitle()),
          avatar: this.isValueNull(faker.image.avatar()),
          content: this.isValueNull(faker.lorem.sentences()),
          countryCode: this.isValueNull(faker.address.countryCode())
        }
      ];
    }

    console.log(users);

    return users;
  }

  setLoading(isLoad) {
    if(isLoad) {
      this.setState({ isLoading: true });
    }
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2000);
  }

  searchList(keyword) {
    this.setLoading(true);
    if (!keyword) {
      this.setState({keyword: null});
      this.setLoading(false);
      return;
    }
    this.userListRender(keyword);
  }

  userListRender(email) {
    const users = this.state.usersList;
    if(!email) {
      this.list = <h2>No Results!</h2>;
      return;
    }
    const setList = users.filter(data => email === data.email);
    this.setState({ keyword: email, usersList: setList });
    this.setLoading(false);
  }

  render() {
    const users = this.state.usersList.map(data => {
      return (
        <div className=".user-cards-container" key={data.countryCode}>
            <UserCard
              author={data.email}
              jobTitle={data.jobTitle}
              imageAvatar={data.avatar}
              content={data.content}
              countryCode={data.countryCode}
            />
          </div>
      );
    });
    const searchKeyword = this.state.keyword;
    return (
      <div className="main-form-container">
        <SearchBar searchFunc={this.searchList} />
        <Spinner isShow={this.state.isLoading} />
        {(searchKeyword) ? users : <h2>No Result!</h2>}
      </div>
    );
  }
}

export default MainForm;
