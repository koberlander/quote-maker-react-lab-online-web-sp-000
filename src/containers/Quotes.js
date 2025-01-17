import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { downvoteQuote, upvoteQuote, removeQuote } from '../actions/quotes'

class Quotes extends Component {
  // OBJECTIVE:
  // Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes.map((quote) => <QuoteCard key={quote.id} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} removeQuote={removeQuote} quote={quote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return({
    quotes: state.quotes
  })
}

//add arguments to connect as needed
export default connect(mapStateToProps, { downvoteQuote, upvoteQuote, removeQuote })(Quotes);
