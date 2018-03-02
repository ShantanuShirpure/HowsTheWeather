import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeatcher} from '../actions/index';

class SearchBar  extends Component {
  constructor(props) {
    super(props);

    this.state ={ term  : ''};
    this.onInputChange  = this.onInputChange.bind(this);
    this.onSubmitForm  = this.onSubmitForm.bind(this);
  }

  onInputChange(event){
    this.setState({ term  : event.target.value})
  }

  onSubmitForm(event){
    event.preventDefault();
    this.props.fetchWeatcher(this.state.term);
  }


render(){
  return(

    <form  onSubmit={this.onSubmitForm} className="input-group">
    <input
      placeholder="Get a five-day forcaste for the Cities you search"
      className="form-control"
      value={this.state.term}
      onChange={this.onInputChange} />


      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">Submit</button>
      </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeatcher},dispatch);
}

export default connect (null,mapDispatchToProps)(SearchBar);
