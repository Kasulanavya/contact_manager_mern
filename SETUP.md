# Contact Manager - Setup & Installation Guide

## Quick Start

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

### 2. Configure Environment
Create a `.env` file in the server folder:
```
MONGODB_URI=mongodb://localhost:27017/contact-manager
PORT=5000
```

### 3. Start MongoDB
Make sure MongoDB is running on your system.

### 4. Start Backend Server
```bash
npm run dev
```
Backend will run on: `http://localhost:5000`

### 5. Install Frontend Dependencies
In a new terminal:
```bash
cd client
npm install
```

### 6. Start Frontend
```bash
npm start
```
Frontend will open on: `http://localhost:3000`

## Using the Application

### Adding a Contact
1. Fill the form on the left side
2. Required fields: Name, Email, Phone
3. Optional fields: Address, City, Category
4. Click "Add Contact"

### Viewing Contacts
- All contacts appear as cards on the right side
- Cards show name, email, phone, address, city, and category

### Editing a Contact
1. Click "Edit" button on any contact card
2. Form will populate with contact data
3. Make changes and click "Update Contact"
4. Click "Cancel" to discard changes

### Deleting a Contact
1. Click "Delete" button on any contact card
2. Confirm deletion when prompted
3. Contact will be removed

## Form Validation

- **Name**: Required and non-empty
- **Email**: Required and must be valid email format
- **Phone**: Required and must have at least 10 digits
- **Address & City**: Optional
- **Category**: Choose from Personal, Business, or Family

Error messages appear below fields if validation fails.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/contacts | Get all contacts |
| GET | /api/contacts/:id | Get single contact |
| POST | /api/contacts | Create contact |
| PUT | /api/contacts/:id | Update contact |
| DELETE | /api/contacts/:id | Delete contact |

## File Locations

- **Backend**: `/server`
- **Frontend**: `/client`
- **Database Models**: `/server/models/Contact.js`
- **API Routes**: `/server/routes/contacts.js`
- **React Components**: `/client/src/components/`

## Important Notes

- The backend must be running before the frontend will work
- MongoDB must be accessible at the configured URI
- The frontend proxy is set to `http://localhost:5000` in package.json

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "Cannot connect to MongoDB" | Ensure MongoDB is running |
| "Port 5000 already in use" | Change PORT in .env or kill the process |
| "CORS error" | Make sure backend is running |
| "Cannot GET /api/contacts" | Backend may not be running |

---

**Start adding contacts now!** 🚀
