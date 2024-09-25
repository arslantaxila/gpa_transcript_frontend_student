// gpa.js

document.getElementById('addCourse').addEventListener('click', () => {
    const courseTemplate = document.querySelector('.course').cloneNode(true);
    document.getElementById('coursesContainer').appendChild(courseTemplate);
});

document.getElementById('gpaForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const courses = Array.from(document.querySelectorAll('.course')).map(course => ({
        courseName: course.querySelector('[name="courseName"]').value,
        courseCode: course.querySelector('[name="courseCode"]').value,
        creditHours: parseInt(course.querySelector('[name="creditHours"]').value),
        marks: parseInt(course.querySelector('[name="marks"]').value),
        semester: course.querySelector('[name="semester"]').value
    }));

    try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/api/gpa/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ courses })
        });

        const data = await response.json();
        if (response.ok) {
            document.getElementById('gpaResult').innerText = `Your GPA is: ${data.gpa}`;
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});