import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';

export default class Form extends Component {

    static propTypes={
        addContact: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(PropTypes.shape({
        	name: PropTypes.string.isRequired,
        	number: PropTypes.string.isRequired,
        	id: PropTypes.string.isRequired,
        })).isRequired,
    }

    _INITIAL_STATE_={
        name:"",
        number: "",
    }

    state={...this._INITIAL_STATE_}

    handleChange=({target:{name,value}})=>{
        this.setState({[name]: value.trim()})
    }

    handleSubmit=(e)=>{
        e.preventDefault()  

        let incorrectName = false

        const {name,number}=this.state

        if(this.props.contacts.some(i=>{
            incorrectName = i.name.toLowerCase()===name.toLowerCase()
            return i.number===number || incorrectName
        })){
            incorrectName ?
            alert("This person is already exist.") :
            alert("This phone is already exist.")

            return
        }     

        this.props.addContact(name,number)
            
        this.setState({...this._INITIAL_STATE_})
    }

    render() {
        return(
            <form>
                <label>
                    <h3>Name</h3>
                    <input value={this.state.name} type="text" name="name" onChange={this.handleChange}/>
                </label>
                <label>
                    <h3>Number</h3>
                    <InputMask mask="+99(999)-99-99" value={this.state.number} type="tel" name="number" onChange={this.handleChange}/>
                </label>
                <button type="submit" onClick={this.handleSubmit}>Add contact</button>
            </form>
        )
    } 
}