import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch all contacts
  const fetchContacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
    setLoading(false);
  };

  // Load contacts on mount
  useEffect(() => {
    fetchContacts();
  }, []);

  // Handle add contact
  const handleAddContact = async (contactData) => {
    try {
      const response = await axios.post('/api/contacts', contactData);
      setContacts([response.data, ...contacts]);
      alert('Contact added successfully!');
    } catch (error) {
      alert('Error adding contact: ' + error.response?.data?.message || error.message);
    }
  };

  // Handle edit contact
  const handleEditContact = async (id, contactData) => {
    try {
      const response = await axios.put(`/api/contacts/${id}`, contactData);
      setContacts(contacts.map(c => c._id === id ? response.data : c));
      setEditingContact(null);
      alert('Contact updated successfully!');
    } catch (error) {
      alert('Error updating contact: ' + error.response?.data?.message || error.message);
    }
  };

  // Handle delete contact
  const handleDeleteContact = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await axios.delete(`/api/contacts/${id}`);
        setContacts(contacts.filter(c => c._id !== id));
        alert('Contact deleted successfully!');
      } catch (error) {
        alert('Error deleting contact: ' + error.message);
      }
    }
  };

  // Handle start editing
  const handleStartEdit = (contact) => {
    setEditingContact(contact);
  };

  // Handle cancel edit
  const handleCancelEdit = () => {
    setEditingContact(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Contact Manager</h1>
        <p>Manage your contacts easily</p>
      </header>

      <div className="app-container">
        <div className="form-section">
          <ContactForm
            onAddContact={handleAddContact}
            onEditContact={handleEditContact}
            editingContact={editingContact}
            onCancelEdit={handleCancelEdit}
          />
        </div>

        <div className="list-section">
          <h2>Your Contacts ({contacts.length})</h2>
          {loading ? (
            <p className="loading">Loading contacts...</p>
          ) : contacts.length === 0 ? (
            <p className="no-contacts">No contacts yet. Add one to get started!</p>
          ) : (
            <ContactList
              contacts={contacts}
              onDeleteContact={handleDeleteContact}
              onEditContact={handleStartEdit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
