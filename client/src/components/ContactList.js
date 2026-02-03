import React from 'react';
import './ContactList.css';

function ContactList({ contacts, onDeleteContact, onEditContact }) {
  return (
    <div className="contact-list">
      {contacts.map(contact => (
        <div key={contact._id} className="contact-card">
          <div className="contact-header">
            <h3>{contact.name}</h3>
            <span className={`category-badge category-${contact.category.toLowerCase()}`}>
              {contact.category}
            </span>
          </div>

          <div className="contact-details">
            <div className="detail-item">
              <strong>Email:</strong>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>

            <div className="detail-item">
              <strong>Phone:</strong>
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            </div>

            {contact.address && (
              <div className="detail-item">
                <strong>Address:</strong>
                <span>{contact.address}</span>
              </div>
            )}

            {contact.city && (
              <div className="detail-item">
                <strong>City:</strong>
                <span>{contact.city}</span>
              </div>
            )}
          </div>

          <div className="contact-actions">
            <button
              className="btn-edit"
              onClick={() => onEditContact(contact)}
              title="Edit contact"
            >
              ✏️ Edit
            </button>
            <button
              className="btn-delete"
              onClick={() => onDeleteContact(contact._id)}
              title="Delete contact"
            >
              🗑️ Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
