import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-6 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div>
          <h2 className="text-xl font-bold mb-4 text-orange-500">
            RealEstatePro
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Helping you find, buy, and rent the perfect property with ease.
            Trusted by thousands nationwide.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Properties</a>
            </li>
            <li>
              <a href="#">Add Listing</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">About</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Contact
          </h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +977-9800000000
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@realestatepro.com
            </li>
            <li className="flex items-center gap-2">
              <Globe size={16} /> www.realestatepro.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Nepal
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-500">
            Find Us
          </h3>
          <div className="w-full h-40 rounded-md overflow-hidden">
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9996.587564194599!2d85.34444505385932!3d27.645339682877076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1745a30ca073%3A0x1185621e98a333f5!2sHarisiddhi%20Brick%20%26%20Tile%20Factory%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1753935215111!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 text-sm text-gray-500 border-t border-orange-600 pt-6">
        &copy; {new Date().getFullYear()} RealEstate. All rights reserved.
      </div>
    </footer>
  );
};
