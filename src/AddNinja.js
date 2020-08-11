 import React, { Component } from 'react'

export class AddNinja extends Component {
    state = {
        name : '',
        age : '',
        belt : ''
    }
    
    handleChange = (e) => {
            this.setState({
                [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
            this.props.addNinja(this.state);
    }

    render() {
    return (
        <div>

        
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
            Name:
            <input type="text" id="name" onChange={this.handleChange} />
        </label><br/>
        <label htmlFor="name" >
            Age:
            <input type="text" id="age" onChange={this.handleChange} />
        </label><br/>
        <label htmlFor="name">
            Belt:
            <input type="text" id="belt" onChange={this.handleChange}/>
        </label><br/>
            <button>Submit</button>
        </form>
        </div>
    )
    }
}


export default AddNinja;