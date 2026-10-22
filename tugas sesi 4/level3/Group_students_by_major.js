const students = [
    { name: "Nizar", major: "Teknik Informatika" },
    { name: "Regith", major: "Teknik Informatika" },
    { name: "Arip", major: "Sistem Informasi" }
];

function groupStudentsByMajor(arr) {
    return arr.reduce((acc, student) => {
        if (!acc[student.major]) {
            acc[student.major] = [];
        }
        acc[student.major].push(student);
        return acc;
    }, {});
}

console.log(groupStudentsByMajor(students));