class App extends React.Component  {
  render() {
    return (
          <div className="notificationsFrame">
            <div className="panel">
            <Header title="Timeline" />
            <Content activities={this.activities} />
            </div>
          </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div className="header">
            <div className="fa fa-more"></div>
            <span className="title">
              {this.props.title}
            </span>
            <input
              type="text"
              className="searchInput"
              placeholder="Search ..." />
            <div className="fa fa-search searchIcon"></div>
          </div>
    )
  }
}

class Content extends React.Component {

  render() {
    const activities = [
      {
        timestamp: new Date().getTime(),
        text: "Ate lunch",
        user: {
          id: 1,
          name: "Nate",
          avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
        },
        comments: [
          {
            from: 'Ari',
            text: 'Me too!'
          }
        ]
      }
    ]
    return (
      <div className="content">
        <div className="line"></div>
        <div className="item">
          <div className="avatar">
            <img src={this.activities.user.avatar} />
            {this.activities.user.name}
          </div>
          <span className="time">
            {this.activities.timestamp}
          </span>
          <p>{this.activities.text}</p>
          <div className="commentCount">
          {this.activities.comments.length}
          </div>
        </div>
      </div>
    )
  }
}
var mount = document.querySelector('#app');
ReactDOM.render(<App />, mount);
