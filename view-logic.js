function App(props) {
    return (
          <div className="notificationsFrame">
            <div className="panel">
            <Header title={props.title} />
            <Content />
            </div>
          </div>
    )
};

function Header(props) {
    return (
      <div className="header">
            <div className="fa fa-more"></div>
            <span className="title">
              {props.title}
            </span>
            <input
              type="text"
              className="searchInput"
              placeholder="Search ..." />
            <div className="fa fa-search searchIcon"></div>
          </div>
    )
};

function Content(props) {
    return (
      <div className="content">
        <div className="line"></div>
        <div className="item">
          <div className="avatar">
            <img src={props.user.avatar} />
            {props.user.name}
          </div>
          <span className="time">
            {props.timestamp}
          </span>
          <p>{props.text}</p>
          <div className="commentCount">
          {props.comments.length}
          </div>
        </div>
      </div>
    )
};

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

var mount = document.querySelector('#app');
ReactDOM.render(
  <App
    title={info.title}
    timestamp={activities.timestamp}
    text={activities.text}
    user={activities.user}
    comments={activities.comments}
   />, mount);
