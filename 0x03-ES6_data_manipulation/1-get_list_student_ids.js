function getListStudentIds(studentArray) {
    // Check if the input is an array
    if (!Array.isArray(studentArray)) {
        return []; // Return an empty array if not an array
    }

    // Use map to extract the ids
    const studentIds = studentArray.map(student => student.id);
    return studentIds;
}

// Example usage:
const students = getListStudents(); // Assuming you already have the student data
const studentIds = getListStudentIds(students);
console.log(studentIds); // This will print an array of student IDs

