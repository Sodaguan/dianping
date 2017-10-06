export default {
    getItem: (key) => {
        let value;
        try {
            value = localStorage.getItem(key);
        } catch (e) {
            console.error(e.message)
        } finally {
            return value
        }
    },
    setItem: (key, value) => {
        try {
            localStorage.setItem(key, value)
        } catch (e) {
            console.error(e.message)
        }
    }
}