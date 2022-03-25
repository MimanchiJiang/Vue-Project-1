const Key = 'studentName-vuejs'
export default {
    get() {
        return JSON.parse(window.sessionStorage.getItem(Key) || '[]')
    },
    save(items) {
        window.sessionStorage.setItem(Key, JSON.stringify(items))
    }
}