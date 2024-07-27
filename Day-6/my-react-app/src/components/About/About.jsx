import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-slate-100">
      <div className=" text-center p-4">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Story</h2>
          <p className="text-lg text-gray-700">
            Welcome to [Your Website Name], where our journey began with a simple idea to revolutionize the way people [what your website does, e.g., "book hotels", "manage their portfolios"]. Founded in [year], our mission has always been to provide exceptional service and a seamless user experience.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to [state your mission, e.g., "make booking hotels effortless and enjoyable for everyone"]. We believe in the power of innovation and are dedicated to constantly improving our platform to meet the needs of our users.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700" >Our Values</h2>
          <p className="text-lg text-gray-700">
            At [Your Website Name], we are guided by a set of core values:
          </p>
          <ul className="list-disc text-start list-inside text-lg text-gray-700 mt-4 ">
            <li>Customer Satisfaction: We prioritize our users and strive to exceed their expectations.</li>
            <li>Innovation: We embrace change and continuously seek better ways to serve our community.</li>
            <li>Integrity: We conduct our business with the highest standards of honesty and fairness.</li>
            <li>Teamwork: We believe in the power of collaboration and working together to achieve common goals.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Meet the Team</h2>
          <p className="text-lg text-gray-700">
            Our team is composed of passionate professionals dedicated to providing the best experience for our users. Meet the people who make it all happen:
          </p>
          <div className="flex flex-wrap justify-center mt-4">
            <div className="p-4">
              <img src="https://static.vecteezy.com/system/resources/previews/009/301/016/non_2x/man-avatar-clipart-illustration-free-png.png" alt="Team Member" className="w-32 h-32 rounded-full mb-2"/>
              <h3 className="text-xl font-semibold text-gray-700">John Doe</h3>
              <p className="text-gray-600 text-gray-700">CEO & Founder</p>
            </div>
            <div className="p-4">
              <img src="https://static.vecteezy.com/system/resources/previews/009/383/461/non_2x/man-face-clipart-design-illustration-free-png.png" alt="Team Member" className="w-32 h-32 rounded-full mb-2"/>
              <h3 className="text-xl font-semibold text-gray-700">Jane Smith</h3>
              <p className="text-gray-600 text-gray-700">Chief Technology Officer</p>
            </div>
            {/* <!-- Add more team members as needed --> */}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Contact Us</h2>
          <p className="text-lg text-gray-700">
            We’d love to hear from you! If you have any questions, suggestions, or just want to say hello, feel free to reach out to us at [your contact information].
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
