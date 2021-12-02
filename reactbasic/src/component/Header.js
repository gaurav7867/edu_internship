import React,{Component,Fragment} from 'react';
import './Header.css';

class Header  extends Component{
    constructor(){
        super()

        this.state={
            title:'React App',
            keyword:'User Input Here'
        }
    }

    handleChange = (event) => {
        this.setState({keyword:event.target.value?event.target.value:'User Input Here'})
        // all the props and passing data
        this.props.userText(event.target.value)
    }

    render(){
        // console.log("inside render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                    <input onChange={this.handleChange} ClassName="input"/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}

export default Header;