import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Stadium Address',
      details: [
        'Pynursla Stadium',
        '123 Football Avenue',
        'Pynursla City, PC 12345',
        'United Kingdom'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main Office: +44 (0) 123 456 7890',
        'Ticket Office: +44 (0) 123 456 7891',
        'Media Enquiries: +44 (0) 123 456 7892',
        'Youth Academy: +44 (0) 123 456 7893'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'General: info@pynurslaunitedfc.com',
        'Tickets: tickets@pynurslaunitedfc.com',
        'Media: media@pynurslaunitedfc.com',
        'Academy: academy@pynurslaunitedfc.com'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed',
        'Match Days: Extended Hours'
      ]
    }
  ];

  const departments = [
    {
      name: 'General Enquiries',
      description: 'For general questions about the club, membership, and facilities.',
      email: 'info@pynurslaunitedfc.com',
      phone: '+44 (0) 123 456 7890'
    },
    {
      name: 'Ticket Office',
      description: 'For match tickets, season tickets, and hospitality packages.',
      email: 'tickets@pynurslaunitedfc.com',
      phone: '+44 (0) 123 456 7891'
    },
    {
      name: 'Media & Press',
      description: 'For media enquiries, press accreditation, and interview requests.',
      email: 'media@pynurslaunitedfc.com',
      phone: '+44 (0) 123 456 7892'
    },
    {
      name: 'Youth Academy',
      description: 'For youth development programs, trials, and academy information.',
      email: 'academy@pynurslaunitedfc.com',
      phone: '+44 (0) 123 456 7893'
    },
    {
      name: 'Commercial',
      description: 'For sponsorship opportunities, partnerships, and commercial enquiries.',
      email: 'commercial@pynurslaunitedfc.com',
      phone: '+44 (0) 123 456 7894'
    },
    {
      name: 'Community',
      description: 'For community programs, school visits, and charity events.',
      email: 'community@pynurslaunitedfc.com',
      phone: '+44 (0) 123 456 7895'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Get in touch with Pynursla United Football Club. We're here to help with any questions or enquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <info.icon className="h-12 w-12 text-red-600" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-red-600" />
                    Contact Form
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What is this regarding?"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your enquiry..."
                        rows={6}
                        className="mt-1"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Location */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Find Us</h2>
              <Card className="mb-6">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src="/images/OQwFhrYnFxVQ.jpg" 
                      alt="Pynursla Stadium"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Pynursla Stadium</h3>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 mr-3 mt-0.5 text-red-600" />
                        <div>
                          <p>123 Football Avenue</p>
                          <p>Pynursla City, PC 12345</p>
                          <p>United Kingdom</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-red-600" />
                        <p>+44 (0) 123 456 7890</p>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-red-600" />
                        <p>info@pynurslaunitedfc.com</p>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-red-600 hover:bg-red-700">
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-red-600" />
                      <a href={`mailto:${dept.email}`} className="text-red-600 hover:underline">
                        {dept.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-red-600" />
                      <a href={`tel:${dept.phone}`} className="text-red-600 hover:underline">
                        {dept.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Check out our FAQ section for quick answers to common questions.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
            View FAQ
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;

