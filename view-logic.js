class App extends React.Component {
  render() {
    return (
      <div className="notificationsFrame">
        <div className="panel">
          <Header
            title="Timeline"
          />
          <Content
            activities={activities}
          />
        </div>
      </div>
    );
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
    );
  }
}

class Content extends React.Component {
  render() {
    const {activity} = this.props;
    return (
      <div className="content">
        <div className="line"></div>

        activities.map((activity) => {
          return (
            <div className="item">
              <div className="avatar">
                <img src={activity.user.avatar} />
                  {activity.user.name}
              </div>
              <span className="time">
                {activity.timestamp}
              </span>
              <p>{activity.text}</p>
              <div className="commentCount">
                {activity.comments.length}
              </div>
            </div>
          );
        })

        </div>
    )
  }
}

const info = [
  {
  title: "Howdy, React"
  }
];

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
];

var mount = document.getElementById('app');
ReactDOM.render(
  <App
    title={info.title}
    timestamp={activities.timestamp}
    text={activities.text}
    user={activities.user}
    comments={activities.comments}
   />, mount);
