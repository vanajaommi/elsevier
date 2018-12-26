import React, {Component} from 'react'

class Welcome extends Component{
    constructor(){
        super();

        this.state={
            clicks:0
        }
    }

    updateClicks=()=>{
        this.setState({
            clicks:this.state.clicks-1
        })
        
    }
    
    render(){
        return (
            <button onClick={this.updateClicks}>decrement {this.props.to} ({this.state.clicks})</button>
            
        )
    }
    
    
    
}


export default Welcome;