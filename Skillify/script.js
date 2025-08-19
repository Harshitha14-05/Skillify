document.addEventListener("DOMContentLoaded", () => {
  const courses = [
    {
      title: "Full Stack Web Development",
      description: "HTML, CSS, JS, React, Node.js & MongoDB",
      category: "Development"
    },
    {
      title: "Data Science with Python",
      description: "NumPy, Pandas, Scikit-learn, Matplotlib",
      category: "Data Science"
    },
    {
      title: "UI/UX Design Essentials",
      description: "Figma, Design Thinking, Wireframing",
      category: "Design"
    },
    {
      title: "Digital Marketing Masterclass",
      description: "SEO, Social Media, Google Ads",
      category: "Marketing"
    },
    {
      title: "Machine Learning A-Z",
      description: "Regression, Classification, Clustering",
      category: "AI"
    }
  ];

  const courseGrid = document.getElementById("courseGrid");
  const searchInput = document.getElementById("searchInput");

  function displayCourses(filteredCourses) {
    courseGrid.innerHTML = "";

    filteredCourses.forEach(course => {
      const card = document.createElement("div");
      card.classList.add("course-card");

      card.innerHTML = `
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <small><strong>Category:</strong> ${course.category}</small>
      `;

      courseGrid.appendChild(card);
    });
  }

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = courses.filter(course =>
      course.title.toLowerCase().includes(keyword) ||
      course.description.toLowerCase().includes(keyword) ||
      course.category.toLowerCase().includes(keyword)
    );
    displayCourses(filtered);
  });

  displayCourses(courses); // Initial load
});
