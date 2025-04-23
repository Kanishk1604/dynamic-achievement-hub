export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log("Received new lead:", req.body);
  
      // Example: Save to DB, call Notion, Airtable, etc.
      res.status(200).json({ message: 'Lead received', data: req.body });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  