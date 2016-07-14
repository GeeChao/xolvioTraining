export default class AppointmentItem {
    constructor(instance) {
        const root = '.appointment-item'
        this.selectors = {
            date: `${root}__date`,
            studentName: `${root}__student-name`,
        };
        this.instance = instance;
    }

    get studentName() {
        return this.instance.element(this.selectors.studentName);
    }

    get date() {
        return this.instance.element(this.selectors.date);
    }
}