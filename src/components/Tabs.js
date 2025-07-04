import React from 'react';

const Tabs = ({ addToCart }) => {
  const courses = [
    { id: 1, name: 'C++', price: 50 },
    { id: 2, name: 'Python', price: 60 },
    { id: 3, name: 'Java', price: 70 },
    { id: 4, name: 'Blockchain', price: 100 },
    { id: 5, name: 'JavaScript', price: 40 },
  ];

  return (
    <div id="courses-tab">
      <h2>Available Courses</h2>
      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} id={`course-tab-${course.id}`} className="course-card">
            <h3 id={`course-name-${course.id}`}>{course.name}</h3>
            <p id={`course-price-${course.id}`}>Price: ${course.price}</p>
            <button id={`add-to-cart-${course.id}`} onClick={() => addToCart(course)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <style jsx>{`
        .course-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsive grid layout */
          gap: 20px; /* Spacing between the cards */
          padding: 20px;
          margin-top: 20px;
        }

        .course-card {
          background-color: #ffffff; /* White background for cards */
          padding: 15px;
          border-radius: 8px; /* Rounded corners */
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
          text-align: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease; /* Smooth hover effect */
        }

        .course-card:hover {
          transform: translateY(-5px); /* Slight upward movement on hover */
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
        }

        .course-card h3 {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
          color: #333; /* Darker text color for better readability */
        }

        .course-card p {
          font-size: 16px;
          color: #555; /* Subtle text color for pricing */
          margin-bottom: 15px;
        }

        .course-card button {
          background-color: #007bff; /* Primary blue color */
          color: #fff; /* White text color */
          border: none;
          border-radius: 4px;
          padding: 10px 15px;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .course-card button:hover {
          background-color: #0056b3; /* Darker blue on hover */
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .course-grid {
            grid-template-columns: 1fr; /* Single column layout on smaller screens */
            gap: 15px;
          }

          .course-card {
            padding: 10px; /* Smaller padding on smaller screens */
          }

          .course-card h3 {
            font-size: 18px;
          }

          .course-card button {
            font-size: 12px;
            padding: 8px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Tabs;
