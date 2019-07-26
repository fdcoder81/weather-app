import React from "react";

class AddCity extends React.Component {
  state = {
    city: ""
  };

  handleChange = e => {
    this.setState({
      city: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCity(this.state.city);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.city}
            placeholder="Enter a city"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddCity;
