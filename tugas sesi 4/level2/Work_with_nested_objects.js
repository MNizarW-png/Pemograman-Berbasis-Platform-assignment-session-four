const employee = {
    name: "Nabyl Jawahir",
    address: {
        street: "Jl. Merdeka No. 12",
        city: "Bandung",
        postalCode: "43351"
    }
};

// Memperbarui city
employee.address.city = "Sukabumi";

console.log("Employee name:", employee.name);
console.log("Address:", employee.address);