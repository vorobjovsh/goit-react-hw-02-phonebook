//import PropTypes from 'prop-types';
//import s from './ContactList.module.css';

function ContactList ({contacts}) {

  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <li key={id} >
          <p>{name}</p>
        </li>
      ))}
    </ul>
  )
}

ContactList.propTypes = {
  //good: PropTypes.number.isRequired,
};

export default ContactList;
