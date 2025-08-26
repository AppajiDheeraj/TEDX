import { FaTwitter, FaInstagram, FaFacebookF, FaArrowUp } from 'react-icons/fa';

// --- Helper Data ---
// Gallery images as requested
const galleryImages = [
  { src: '/i1.png', alt: 'Gallery image 1' },
  { src: '/i2.png', alt: 'Gallery image 2' },
  { src: '/i3.png', alt: 'Gallery image 3' },
  { src: '/i4.png', alt: 'Gallery image 4' },
  { src: '/i5.png', alt: 'Gallery image 5' },
  { src: '/i6.png', alt: 'Gallery image 6' },
];

// --- REACT COMPONENT ---
export default function Footer() {
  // Function to handle the smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#121212] text-gray-300 pt-20 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back to Top Button */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2">
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="bg-red-600 hover:bg-red-700 text-white rounded-full w-14 h-14 flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <FaArrowUp size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo and Description */}
          <div className="space-y-4">
            <img src="/Logo.png" alt="TEDxNITKSurathkal Logo" className="w-40 -mt-4" />
            <p className="text-sm text-gray-400 leading-relaxed">
              Fostered by the vision of serving the community with innovative and inspiring ideas worth spreading.
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Contact</h3>
            <div className="text-sm space-y-2 text-gray-400">
              <p>NITK Surathkal, Karnataka, India</p>
              <a href="mailto:tedx@nitk.edu.in" className="hover:text-red-500 transition-colors">tedx@nitk.edu.in</a>
              <p>+91 824 247 3000</p>
            </div>
          </div>

          {/* Column 3: Gallery */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <a href="#" key={index} className="block overflow-hidden rounded-md">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-16 object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Social Media */}
          <div className="space-y-4 ml-4">
            <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Follow Us</h3>
            <p className="text-sm text-gray-400">
              Join the conversation on our social networks.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-gray-800 hover:bg-red-600 text-white p-3 rounded-full transition-colors">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gray-800 hover:bg-red-600 text-white p-3 rounded-full transition-colors">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-gray-800 hover:bg-red-600 text-white p-3 rounded-full transition-colors">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Credits */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>
            Copyright © {new Date( ).getFullYear()} TEDxNITKSurathkal. All rights reserved.
          </p>
          <p className="mt-2">
            This independent TEDx event is operated under license from{' '}
            <a href="https://www.ted.com/" rel="noopener noreferrer" target="_blank" className="hover:text-red-500 underline">
              TED
            </a>.
          </p>
        </div>
      </div>
    </footer>
   );
}
