import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Trophy className="h-8 w-8 text-red-500" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Pynursla United</span>
                <span className="text-sm text-gray-300">Youth Club</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Pynursla United Youth Club - Dedicated to excellence on and off the field. 
              Join us in our journey to greatness and be part of our football family.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors">Latest News</Link></li>
              <li><Link to="/players" className="text-gray-300 hover:text-white transition-colors">Team Roster</Link></li>
              <li><Link to="/matches" className="text-gray-300 hover:text-white transition-colors">Fixtures</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">Photo Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Pynursla Stadium</p>
              <p>123 Football Avenue</p>
              <p>Pynursla City, PC 12345</p>
              <p className="mt-4">
                <span className="font-medium">Phone:</span><br />
                +1 (555) 123-4567
              </p>
              <p>
                <span className="font-medium">Email:</span><br />
                info@pynurslaunitedfc.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Pynursla United Youth Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

