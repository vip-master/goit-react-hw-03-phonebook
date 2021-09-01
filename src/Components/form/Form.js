import React, { Component } from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';

const _INITIAL_STATE_={
    name:"",
    number: "",
}

export default class Form extends Component {

    static propTypes={
        addContact: PropTypes.func.isRequired,
        contacts: PropTypes.arrayOf(PropTypes.shape({
        	name: PropTypes.string.isRequired,
        	number: PropTypes.string.isRequired,
        	id: PropTypes.string.isRequired,
        })).isRequired,
    }

    state={..._INITIAL_STATE_}

    handleChange=({target:{name,value}})=>{
        this.setState({[name]: value.trim()})
    }

    handleSubmit=(e)=>{
        e.preventDefault()  

        const {name,number}=this.state

        if(this.props.contacts.some(i=>{
            return i.number===number || i.name.toLowerCase()===name.toLowerCase()
        })){
            alert(`This ${name} is already exist.`)

            return
        }     

        this.props.addContact(name,number)
            
        this.setState({..._INITIAL_STATE_})
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