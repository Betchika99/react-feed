class Storage {
    static get(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    static set(key, value) {
        const stringValue = JSON.stringify(value);
        localStorage.setItem(key, stringValue);
    }
}

export default Storage;