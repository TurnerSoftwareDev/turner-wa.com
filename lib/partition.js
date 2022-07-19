function partition(elements, size) {
    const res = [];
    for (let i = 0; i < elements.length; i += size) {
        const chunk = elements.slice(i, i + size);
        res.push(chunk);
    }
    return res;
}

export default partition;