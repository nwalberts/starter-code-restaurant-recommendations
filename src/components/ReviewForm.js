import React from 'react'

class ReviewForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      reviews: []
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleReviewFormSubmit = this.handleReviewFormSubmit.bind(this)
  }

  handleNameChange(event){
    this.setState({
      name: event.target.value
    })
  }

  handleReviewFormSubmit(event){
    event.preventDefault()

    let reviewPayload = {
      restaurant_id: this.props.selectedRestaurantId
      name: this.state.name
    }

    // send this payload up to the App.js
    this.props.trackReview(reviewPayload)
  }

  render(){
    return(

      <div>
        <form className="review-form" onSubmit={this.handleReviewFormSubmit}>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />

          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default ReviewForm
