import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Company',
      submenu: [
        {
          title: 'About Us',
          items: ['Our Vision', 'Our Mission', 'Our Values']
        },
        {
          title: 'Leadership',
          items: ['Founders & Directors', 'Management Team']
        },
        {
          title: 'Our Journey',
          items: ['Company Timeline']
        },
        {
          title: 'Why Choose Us',
          items: ['Innovation', 'Reliability', 'Scalability']
        }
      ]
    },
    {
      name: 'Our Team',
      submenu: [
        { title: 'Core Team', items: [] },
        { title: 'Technical Experts', items: [] },
        { title: 'Industry Advisors', items: [] },
        { title: 'Student Interns', items: [] },
        { title: 'Culture & Work Environment', items: [] }
      ]
    },
    {
      name: 'Solutions',
      submenu: [
        {
          title: 'Digital Solutions',
          items: ['GIS Solutions', 'CS & IT Services', 'MRAS Services']
        },
        {
          title: 'Business Solutions',
          items: ['E-Commerce Platforms', 'HR Tech Solutions', 'BPO Services']
        },
        {
          title: 'Connectivity Solutions',
          items: ['Telecommunication', 'Network Infrastructure', 'Cloud Integration']
        }
      ]
    },
    {
      name: 'Industries',
      submenu: [
        { title: 'Government & Smart Cities', items: [] },
        { title: 'Healthcare', items: [] },
        { title: 'Education', items: [] },
        { title: 'Retail & E-Commerce', items: [] },
        { title: 'Telecom & Networking', items: [] },
        { title: 'Banking & Finance', items: [] },
        { title: 'Manufacturing', items: [] },
        { title: 'Agriculture & GIS', items: [] }
      ]
    },
    {
      name: 'Careers',
      submenu: [
        { title: 'Life at Company', items: [] },
        { title: 'Job Openings', items: [] },
        { title: 'Internship Programs', items: [] },
        { title: 'Join Running Projects', items: [] },
        { title: 'Campus Hiring', items: [] },
        { title: 'Growth & Learning', items: [] },
        { title: 'Employee Benefits', items: [] }
      ]
    },
    {
      name: 'Projects',
      submenu: [
        { title: 'Ongoing Projects', items: [] },
        { title: 'Completed Projects', items: [] },
        { title: 'Case Studies', items: [] },
        { title: 'Research & Innovation', items: [] },
        { title: 'Client Testimonials', items: [] }
      ]
    },
    {
      name: 'Resources',
      submenu: [
        { title: 'Blogs & Articles', items: [] },
        { title: 'News & Updates', items: [] },
        { title: 'Events & Activities', items: [] },
        { title: 'CSR Initiatives', items: [] },
        { title: 'Whitepapers', items: [] },
        { title: 'Reports & Publications', items: [] },
        { title: 'Media Gallery', items: [] }
      ]
    },
    {
      name: 'Join Us',
      submenu: [
        { title: 'Partner With Us', items: [] },
        { title: 'Collaborate on Research', items: [] },
        { title: 'Startup & Student Programs', items: [] },
        { title: 'Volunteer & CSR Programs', items: [] }
      ]
    },
    {
      name: 'Contact',
      submenu: [
        { title: 'Get in Touch', items: [] },
        { title: 'Request a Quote', items: [] },
        { title: 'Support & Help Desk', items: [] },
        { title: 'Office Locations', items: [] },
        { title: 'Feedback & Queries', items: [] }
      ]
    }
  ];

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-2xl border-b-2 border-red-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Company Name */}
          <Link to="/" className="flex items-center group -ml-8 transform hover:scale-110 transition-all duration-300">
            <span className="text-3xl lg:text-4xl font-black">
              <span className="text-blue-600 drop-shadow-md">The</span>{" "}
              <span className="text-red-600 drop-shadow-md">Contractum</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => item.submenu && handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {item.path ? (
                  <Link
                    to={item.path}
                    className="text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300 font-bold text-sm px-4 py-2.5 rounded-lg group transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button className="text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:via-pink-600 hover:to-red-600 transition-all duration-300 font-bold text-sm px-4 py-2.5 rounded-lg flex items-center space-x-1 group transform hover:-translate-y-1 hover:shadow-xl">
                    <span>{item.name}</span>
                    {item.submenu && (
                      <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </button>
                )}

                {/* Enhanced Mega Menu Dropdown */}
                {item.submenu && activeDropdown === index && (
                  <div className="absolute right-0 mt-4 w-80 bg-white rounded-2xl shadow-2xl border-2 border-red-200 overflow-hidden animate-fadeIn">
                    <div className="bg-gradient-to-br from-red-600 via-pink-600 to-purple-600 px-5 py-4">
                      <h3 className="text-white font-bold text-xl flex items-center gap-2">
                        <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse shadow-lg"></span>
                        {item.name}
                      </h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto p-3">
                      <div className="grid grid-cols-1 gap-1">
                        {item.submenu.map((section, idx) => (
                          <div key={idx} className="group/item">
                            {section.title === 'Get in Touch' ? (
                              <Link to="/getintouch" className="block px-4 py-3.5 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-xl transition-all duration-300 transform hover:translate-x-2 hover:shadow-md border border-transparent hover:border-red-100" onClick={handleMouseLeave}>
                                <div>
                                  <div className="font-bold text-gray-900 text-sm group-hover/item:text-red-600 transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover/item:w-2.5 group-hover/item:h-2.5 transition-all shadow-sm"></span>
                                    {section.title}
                                  </div>
                                  <div className="flex-1">
                                    {section.items.length > 0 && (
                                      <div className="mt-2 space-y-1">
                                        {section.items.map((subItem, subIdx) => (
                                          <div key={subIdx} className="text-xs text-gray-600 hover:text-red-600 ml-2 flex items-center space-x-1.5 transition-all duration-200 cursor-pointer hover:translate-x-1">
                                            <span className="text-red-500 font-bold">▸</span>
                                            <span className="hover:font-semibold">{subItem}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ) : section.title === 'Request a Quote' ? (
                              <Link to="/requestquote" className="block px-4 py-3.5 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-xl transition-all duration-300 transform hover:translate-x-2 hover:shadow-md border border-transparent hover:border-red-100" onClick={handleMouseLeave}>
                                <div>
                                  <div className="font-bold text-gray-900 text-sm group-hover/item:text-red-600 transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover/item:w-2.5 group-hover/item:h-2.5 transition-all shadow-sm"></span>
                                    {section.title}
                                  </div>
                                  <div className="flex-1">
                                    {section.items.length > 0 && (
                                      <div className="mt-2 space-y-1">
                                        {section.items.map((subItem, subIdx) => (
                                          <div key={subIdx} className="text-xs text-gray-600 hover:text-red-600 ml-2 flex items-center space-x-1.5 transition-all duration-200 cursor-pointer hover:translate-x-1">
                                            <span className="text-red-500 font-bold">▸</span>
                                            <span className="hover:font-semibold">{subItem}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ) : section.title === 'Support & Help Desk' ? (
                              <Link to="/support" className="block px-4 py-3.5 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-xl transition-all duration-300 transform hover:translate-x-2 hover:shadow-md border border-transparent hover:border-red-100" onClick={handleMouseLeave}>
                                <div>
                                  <div className="font-bold text-gray-900 text-sm group-hover/item:text-red-600 transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover/item:w-2.5 group-hover/item:h-2.5 transition-all shadow-sm"></span>
                                    {section.title}
                                  </div>
                                  <div className="flex-1">
                                    {section.items.length > 0 && (
                                      <div className="mt-2 space-y-1">
                                        {section.items.map((subItem, subIdx) => (
                                          <div key={subIdx} className="text-xs text-gray-600 hover:text-red-600 ml-2 flex items-center space-x-1.5 transition-all duration-200 cursor-pointer hover:translate-x-1">
                                            <span className="text-red-500 font-bold">▸</span>
                                            <span className="hover:font-semibold">{subItem}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ) : section.title === 'Feedback & Queries' ? (
                              <Link to="/feedback" className="block px-4 py-3.5 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-xl transition-all duration-300 transform hover:translate-x-2 hover:shadow-md border border-transparent hover:border-red-100" onClick={handleMouseLeave}>
                                <div>
                                  <div className="font-bold text-gray-900 text-sm group-hover/item:text-red-600 transition-colors duration-300 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover/item:w-2.5 group-hover/item:h-2.5 transition-all shadow-sm"></span>
                                    {section.title}
                                  </div>
                                  <div className="flex-1">
                                    {section.items.length > 0 && (
                                      <div className="mt-2 space-y-1">
                                        {section.items.map((subItem, subIdx) => (
                                          <div key={subIdx} className="text-xs text-gray-600 hover:text-red-600 ml-2 flex items-center space-x-1.5 transition-all duration-200 cursor-pointer hover:translate-x-1">
                                            <span className="text-red-500 font-bold">▸</span>
                                            <span className="hover:font-semibold">{subItem}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ) : (
                            <a href="#" className="block px-4 py-3.5 hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 rounded-xl transition-all duration-300 transform hover:translate-x-2 hover:shadow-md border border-transparent hover:border-red-100">
                              <div>
                                <div className="font-bold text-gray-900 text-sm group-hover/item:text-red-600 transition-colors duration-300 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full group-hover/item:w-2.5 group-hover/item:h-2.5 transition-all shadow-sm"></span>
                                  {section.title}
                                </div>
                                <div className="flex-1">
                                  {section.items.length > 0 && (
                                    <div className="mt-2 space-y-1">
                                      {section.items.map((subItem, subIdx) => (
                                        <div key={subIdx} className="text-xs text-gray-600 hover:text-red-600 ml-2 flex items-center space-x-1.5 transition-all duration-200 cursor-pointer hover:translate-x-1">
                                          <span className="text-red-500 font-bold">▸</span>
                                          <span className="hover:font-semibold">{subItem}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-600 via-pink-600 to-red-600 text-white hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white shadow-lg"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Enhanced Mobile Menu - Slide from Right */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b-2 border-gray-200 bg-gradient-to-r from-red-600 via-pink-600 to-red-600">
            <div className="text-white">
              <h3 className="text-xl font-bold">Menu</h3>
              <p className="text-sm text-red-100">Explore our services</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Content */}
          <div className="overflow-y-auto h-[calc(100%-88px)] p-4">
            {menuItems.map((item, index) => (
              <div key={index} className="py-1">
                {item.path ? (
                  <Link
                    to={item.path}
                    className="block py-3.5 px-5 text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-600 rounded-xl transition-all duration-300 font-bold shadow-sm hover:shadow-lg transform hover:translate-x-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                      className="w-full flex justify-between items-center py-3.5 px-5 text-gray-800 hover:text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-600 rounded-xl transition-all duration-300 font-bold shadow-sm hover:shadow-lg"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === index && item.submenu && (
                      <div className="ml-4 mt-2 space-y-1 bg-gray-50 backdrop-blur-sm rounded-xl p-2">
                        {item.submenu.map((section, idx) => (
                          <div key={idx} className="py-1">
                            {section.title === 'Get in Touch' ? (
                              <Link to="/getintouch" className="block py-2 px-3 text-sm font-bold text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200" onClick={() => setIsOpen(false)}>
                                {section.title}
                              </Link>
                            ) : section.title === 'Request a Quote' ? (
                              <Link to="/requestquote" className="block py-2 px-3 text-sm font-bold text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200" onClick={() => setIsOpen(false)}>
                                {section.title}
                              </Link>
                            ) : section.title === 'Support & Help Desk' ? (
                              <Link to="/support" className="block py-2 px-3 text-sm font-bold text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200" onClick={() => setIsOpen(false)}>
                                {section.title}
                              </Link>
                            ) : section.title === 'Feedback & Queries' ? (
                              <Link to="/feedback" className="block py-2 px-3 text-sm font-bold text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200" onClick={() => setIsOpen(false)}>
                                {section.title}
                              </Link>
                            ) : (
                            <a href="#" className="block py-2 px-3 text-sm font-bold text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200">
                              {section.title}
                            </a>
                            )}
                            {section.items.length > 0 && (
                              <div className="ml-10 mt-1 space-y-1">
                                {section.items.map((subItem, subIdx) => (
                                  <a
                                    key={subIdx}
                                    href="#"
                                    className="flex items-center space-x-2 py-1.5 px-3 text-xs text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                                  >
                                    <span className="text-red-400">▸</span>
                                    <span>{subItem}</span>
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
