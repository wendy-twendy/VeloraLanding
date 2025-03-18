import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate form data
      const { name, email, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
      }
      
      // In a real application, this would save to a database or send an email
      // For this demo, we'll just return a success response
      console.log('Contact form submission:', { name, email, subject, message });
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return res.status(200).json({ message: 'Message received successfully!' });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: 'Server error processing your request' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
