import React, { Component } from 'react'
import Section from '../Components/section/Section';
import Form from '../Components/form/Form';
import {v4 as uuidv4} from 'uuid'
import ContactsList from '../Components/contactsList/ContactsList';
import Filter from '../Components/filter/Filter';

export class App extends Component {

    _INITIAL_STATE_={
        contacts: [],
        filter: ''
    }

    state={...this._INITIAL_STATE_}

    addContact=(name,number)=>{        
        this.setState(prev=>{
            prev.contacts.push({id:uuidv4(),name,number})
            return prev
        })
    }

    delContact=(e)=>{
        this.setState(prev=>({contacts: prev.contacts.filter(i=>i.id!==e.target.id)}))
    }

    filter=(e)=>{
        this.setState({filter: e.target.value.trim()})
    }

    componentDidMount(){
        if(localStorage.getItem("contacts")) 
            this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))})
    }
    componentDidUpdate(){
        localStorage.setItem("contacts",JSON.stringify(this.state.contacts))
    }

    render() {           
        return (
            <>
                <h1>Phonebook</h1>
                <Section title="">
                    <Form addContact={this.addContact} contacts={this.state.contacts}/>
                </Section>
                <Section title="Contacts">
                    <Filter value={this.state.filter} onChange={this.filter}/>
                    <ContactsList 
                        contacts={this.state.contacts} 
                        onDelete={this.delContact} 
                        filter={this.state.filter}
                    />
                </Section>
            </>
        )
    }
}

export default App
