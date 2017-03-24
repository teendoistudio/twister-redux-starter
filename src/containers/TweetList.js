import { connect } from 'react-redux'
import TweetList from '../components/TweetList'
import { fetchTweets } from '../actions/tweets'
import { matchPath } from 'react-router-dom'


const mapStateToProps = (state) => {
  const match = matchPath(
    state.router.location.pathname, 
    { path: '/:ownerUsername' }
  )

  return {
    tweets: state.tweets,
    ownerUsername: match ? match.params.ownerUsername : null,
  }
}

const mapDispatchToProps = dispatch => ({
    fetchTweets: (username) => dispatch(fetchTweets(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TweetList)

