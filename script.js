function generateRandomStudent() {
    fetch('https://randomuser.me/api/?inc=name,email,location')
      .then(response => response.json())
      .then(data => {
        var student = data.results[0];
        var firstName = student.name.first;
        var lastName = student.name.last;
        var email = student.email;
        var state = student.location.state;
        var country = student.location.country;

        // Generating a random department
        var departments = [
          "Computer Science",
          "Electrical Engineering",
          "Mechanical Engineering",
          "Physics",
          "Mathematics"
        ];
        var randomIndex = Math.floor(Math.random() * departments.length);
        var department = departments[randomIndex];

        document.getElementById("student-name").textContent = `${firstName} ${lastName}`;
        document.getElementById("student-email").textContent = email;
        document.getElementById("student-department").textContent = department;
        document.getElementById("student-state").textContent = state;
        document.getElementById("student-country").textContent = country;
      });
  }