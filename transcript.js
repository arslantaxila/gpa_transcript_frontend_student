// transcript.js

document.getElementById('transcriptForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
    const program = document.getElementById('program').value;
    const contactInfo = document.getElementById('contactInfo').value;

    try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/api/transcripts/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ studentName, studentId, program, contactInfo })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Transcript application submitted successfully');
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});