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
        <Clock />
      </div>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVisible: false
    }
  }

  showSearch() {
    this.setState({
      searchVisible: !this.state.searchVisible
    })
  }


  render() {
    let searchInputClasses = ["searchInput"];

    if (this.state.searchVisible) {
      searchInputClasses.push("active");
    }

    return (
      <div className="header">
        <div className="fa fa-more"></div>
        <span className="title">
          {this.props.title}
        </span>
        <input
          type="text"
          className={searchInputClasses.join('')}
          placeholder="Search ..." />
        <div
          onClick={this.showSearch.bind(this)}
          className="fa fa-search searchIcon"></div>
      </div>
    )
  }
}

Header.propTypes = {
  title: React.PropTypes.string
}

class Content extends React.Component {
  render() {
    const {activity} = this.props;

    return (
      <div className="content">
        <div className="line"></div>

        {activities.map((activity) => (
          <ActivityItem
            activity={activity}
          />
        ))}

        </div>
    )
  }
}

class ActivityItem extends React.Component {
  render() {
    const {activity} = this.props;

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
    )
  }
}

ActivityItem.propTypes = {
  timestamp : React.PropTypes.number,
  text      : React.PropTypes.string,
  user      : React.PropTypes.shape({
    id        : React.PropTypes.number,
    name      : React.PropTypes.string,
    avatar    : React.PropTypes.string,
  }),
  comments  : React.PropTypes.arrayOf(React.PropTypes.shape({
    from      : React.PropTypes.string,
    text      : React.PropTypes.string,
  })),

}

class Clock extends React.Component {
  constructor(props) {
    super(props);

    const currentTime = new Date();
    this.state = {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
    };

    this.setTimer();
  }

  setTimer() {
    setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock() {
    const currentTime = new Date();
    this.setState({
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
    }, this.setTimer);

  }

  render() {
    const {hours, minutes, seconds, ampm} = this.state;

    return (
      <div className="clock">
        {
          hours == 0 ? 12 :
           (hours > 12) ?
            hours - 12 : hours
        }:{
          minutes > 9 ? minutes : '0${minutes}'
        }:{
          seconds > 9 ? seconds : '0${seconds}'
        } {ampm}
      </div>
    )
  }
}

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
  <App />, mount);
