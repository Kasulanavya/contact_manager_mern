# Contact Manager - MERN Stack Application

A simple and user-friendly Contact Management application built with MongoDB, Express.js, React, and Node.js (MERN Stack).

## Features

- ✅ **Add Contacts** - Create new contacts with name, email, phone, address, city, and category
- ✅ **View Contacts** - Display all contacts in a responsive card layout
- ✅ **Edit Contacts** - Update existing contact information
- ✅ **Delete Contacts** - Remove contacts with confirmation
- ✅ **Form Validation** - Client-side and server-side validation
- ✅ **Categories** - Organize contacts (Personal, Business, Family)
- ✅ **Real-time Updates** - Instant UI updates after CRUD operations
- ✅ **Responsive Design** - Works on desktop and mobile devices

## Project Structure

```
contact-manager-mern/
├── server/                          # Backend (Node.js + Express)
│   ├── models/
│   │   └── Contact.js              # MongoDB Contact schema
│   ├── routes/
│   │   └── contacts.js             # API routes with validation
│   ├── server.js                   # Express server setup
│   ├── package.json                # Backend dependencies
│   ├── .env.example                # Environment variables template
│   └── .gitignore
│
└── client/                          # Frontend (React)
    ├── public/
    │   └── index.html              # HTML template
    ├── src/
    │   ├── components/
    │   │   ├── ContactForm.js       # Add/Edit contact form
    │   │   ├── ContactForm.css      # Form styling
    │   │   ├── ContactList.js       # Display contacts
    │   │   └── ContactList.css      # List styling
    │   ├── App.js                   # Main app component
    │   ├── App.css                  # App styling
    │   ├── index.js                 # React entry point
    │   └── index.css                # Global styles
    ├── package.json                 # Frontend dependencies
    └── .gitignore
```

## Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **express-validator** - Request validation
- **CORS** - Cross-origin resource sharing
- **Dotenv** - Environment variable management

### Frontend
- **React** - UI library
- **Axios** - HTTP client
- **CSS3** - Styling

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```
MONGODB_URI=mongodb://localhost:27017/contact-manager
PORT=5000
```

4. Start MongoDB (if running locally):
```bash
mongod
```

5. Run the server:
```bash
npm run dev
```
Server will run on `http://localhost:5000`

### Frontend Setup

1. Open a new terminal and navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the React app:
```bash
npm start
```
App will open on `http://localhost:3000`

## API Endpoints

### GET /api/contacts
Get all contacts
```json
Response: [
  {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "address": "123 Main St",
    "city": "New York",
    "category": "Personal"
  }
]
```

### GET /api/contacts/:id
Get a single contact by ID

### POST /api/contacts
Create a new contact
```json
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "address": "123 Main St",
  "city": "New York",
  "category": "Personal"
}
```

### PUT /api/contacts/:id
Update a contact
```json
Body: {
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "0987654321",
  "address": "456 Oak Ave",
  "city": "Boston",
  "category": "Business"
}
```

### DELETE /api/contacts/:id
Delete a contact

## Form Validation

**Client-side Validation:**
- Name: Required, non-empty
- Email: Required, valid email format
- Phone: Required, minimum 10 digits

**Server-side Validation:**
- Same validations using express-validator
- Email format validation with regex
- Duplicate checks in MongoDB

## Database Schema

### Contact Model
```javascript
{
  name: String (required),
  email: String (required, unique pattern),
  phone: String (required),
  address: String (optional),
  city: String (optional),
  category: String (enum: Personal, Business, Family),
  createdAt: DateTime,
  updatedAt: DateTime
}
```

## Features Detail

### Add Contact
1. Fill in the form with contact details
2. Required fields: Name, Email, Phone
3. Select category (Personal/Business/Family)
4. Click "Add Contact" button

### Edit Contact
1. Click "Edit" button on any contact card
2. Form populates with current data
3. Update desired fields
4. Click "Update Contact" button

### Delete Contact
1. Click "Delete" button on any contact card
2. Confirm deletion in the popup
3. Contact is removed from the list

## Testing

### Test Add Contact
- Fill form with valid data and submit
- Verify contact appears in the list

### Test Edit Contact
- Click edit on a contact
- Change name/email/phone
- Verify changes are saved

### Test Delete Contact
- Click delete on a contact
- Confirm deletion
- Verify contact is removed

### Test Validation
- Try submitting empty form
- Try invalid email format
- Try phone with less than 10 digits
- Verify error messages appear

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env file
- For MongoDB Atlas, use connection string with credentials

### Port Already in Use
- Change PORT in .env file
- Or kill the process using the port

### CORS Errors
- Ensure backend is running on port 5000
- Check proxy setting in client/package.json

### Dependencies Not Installing
- Delete node_modules and package-lock.json
- Run `npm install` again

## Future Enhancements

- Search and filter contacts
- Export contacts to CSV
- Import contacts from CSV
- Contact groups/tags
- Photo/Avatar for contacts
- Contact notes
- Birthday reminders
- Dark mode

## License

This project is open source and available under the MIT License.

## Author

Created for learning MERN Stack development.

---

**Happy Contact Managing!** 📇
