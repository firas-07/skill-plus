const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const multer = require('multer');
app.use(cors());
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

mongoose.connect('mongodb://localhost:27017/SkillPlus-Users', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Feedback Schema
const FeedbackSchema = new mongoose.Schema({
  feedback: { type: String, required: true },
  ratings: { type: String, required: true }
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

// Phone Number Schema
const PhoneSchema = new mongoose.Schema({
  phone: { type: String, required: true }
});

const Phone = mongoose.model('Phone', PhoneSchema);

// Information Schema
const InformationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const Information = mongoose.model('Information', InformationSchema);

// Your Detail Schema
const YourDetailSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  specification: { type: String, required: true },
});

const YourDetail = mongoose.model('YourDetail', YourDetailSchema);

// Certification Schema
const CertificationSchema = new mongoose.Schema({
  certifications: { type: String, required: true },
  courses: { type: String, required: true },
  certificateFile: { type: String },
  internshipCompleted: { type: String, required: true },
  internshipCertificate: { type: String },
});

const Certification = mongoose.model('certificates', CertificationSchema);

//Social Connect SChema
const SocialConnectSchema = new mongoose.Schema({
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
});

const SocialConnect = mongoose.model('SocialConnect', SocialConnectSchema);

// API endpoint to handle form submissions
app.post('/feedback', upload.none(), async (req, res) => {
  const { feedback } = req.body;
  const { ratings } = req.body;

  try {
    const info = new Feedback({
      feedback,
      ratings
    });

    await info.save();
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving form data' });
  }
});

app.post('/submit-number', upload.none(), async (req, res) => {
  const { phone } = req.body;

  try {
    const info = new Phone({
      phone
    });

    await info.save();
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving form data' });
  }
});

app.post('/submit-information', upload.none(), async (req, res) => {
  const { name, email } = req.body;

  try {
    const info = new Information({
      name,
      email,
    });

    await info.save();
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving form data' });
  }
});

app.post('/submit-yourdetail', upload.none(), async (req, res) => {
  const { degree, specification } = req.body;

  try {
    const detail = new YourDetail({
      degree,
      specification,
    });

    await detail.save();
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving form data' });
  }
});

app.post('/submit-certifications', upload.fields([
  { name: 'certificateFile', maxCount: 1 },
  { name: 'internshipCertificate', maxCount: 1 }
]), async (req, res) => {
  try {
    const { certifications, courses, internshipCompleted } = req.body;

    const certificateFile = req.files.certificateFile ? req.files.certificateFile[0].path : '';
    const internshipCertificate = req.files.internshipCertificate ? req.files.internshipCertificate[0].path : '';

    console.log('Form data:', req.body); // Log form data
    console.log('File paths:', certificateFile, internshipCertificate); // Log file paths

    const certification = new Certification({
      certifications,
      courses,
      certificateFile,
      internshipCompleted,
      internshipCertificate
    });

    await certification.save();
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error); // Log detailed error
    res.status(500).json({ error: 'Error saving form data' });
  }
});

app.post('/submit-socialconnect', upload.none(), async (req, res) => {
  const { linkedin, github } = req.body;

  try {
    const social = new SocialConnect({
      linkedin,
      github,
    });

    await social.save();
    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving form data' });
  }
});

// Create an 'uploads' folder to store files
const fs = require('fs');
const path = require('path');
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Get data from database
app.get('/get-information', async (req, res) => {
  try {
    const info = await Information.find();
    res.json(info);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get('/get-yourdetail', async (req, res) => {
  try {
    const detail = await YourDetail.find();
    res.json(detail);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get('/get-certification', async (req, res) => {
  try {
    const certificate = await Certification.find();
    res.json(certificate);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get('/get-feedback', async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
