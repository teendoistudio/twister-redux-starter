import React, { Component, PropTypes } from 'react'
import Tweet from './Tweet'

class TweetList extends Component {
  componentDidMount() {
    const ownerUsername = this.props.ownerUsername || 'kaizerwing'
    this.props.fetchTweets(ownerUsername)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.ownerUsername !== nextProps.ownerUsername) {
      const ownerUsername = nextProps.ownerUsername || 'kaizerwing'
      this.props.fetchTweets(ownerUsername)
    }
  }

  render() {
    return (
      <div className="tweet-list">
        {this.props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />)}
      </div>
    )
  }
}

TweetList.propTypes = {
  ownerUsername: PropTypes.string.isRequired,
}

export default TweetList