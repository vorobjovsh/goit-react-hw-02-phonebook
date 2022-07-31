import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
//import shortid from 'shortid';

class ContactForm extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name);

    this.setState({ name: '' });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit} >
        <label>
          <p className={s.name}>Name</p>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <button className={s.addBtn} type="submit" >
          Add contact
        </button>
      </form>

           )
  }

}

ContactForm.propTypes = {
  //good: PropTypes.number.isRequired,
};

export default ContactForm;
