const mongoose = require('mongoose');
require('dotenv').config();

const Intern = require('./models/Intern');

const interns = [
  {
    name: 'Rahul Kumar Rajak',
    role: 'Software Web Development Project Intern',
    collegeName: 'Pondicherry University',
    description: "Working on real-world projects from day one has been an incredible learning curve.",
    // Reuse an existing uploaded image so the file is already present in /uploads/interns
    image: '/uploads/interns/1778401705639-Puttoju Venkatesh.jpeg',
    tags: ['React', 'Express.js', 'Web Development', 'MongoDB', 'Node.js']
  }
];

async function seed() {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.error('MONGO_URI not set in environment. Aborting.');
    process.exit(1);
  }

  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB');

  // Optionally clear existing interns with same name to avoid duplicates
  await Intern.deleteMany({ name: { $in: interns.map(i => i.name) } });

  const result = await Intern.insertMany(interns);
  console.log(`Inserted ${result.length} interns`);

  await mongoose.disconnect();
  console.log('Disconnected. Done.');
}

seed().catch(err => { console.error(err); process.exit(1); });
