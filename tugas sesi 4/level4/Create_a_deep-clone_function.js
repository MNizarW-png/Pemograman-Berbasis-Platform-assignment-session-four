function deepClone(value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }

    const clone = Array.isArray(value) ? [] : {};

    for (const key of Object.keys(value)) {
        clone[key] = deepClone(value[key]);
    }

    return clone;
}

// Demonstrasi
const original = { name: "Nizar", details: { hobi: "Coding" } };
const cloneObj = deepClone(original);

cloneObj.details.hobi = "Gaming";

console.log("Original:", original.details.hobi);
console.log("Clone:", cloneObj.details.hobi);