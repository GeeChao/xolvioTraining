export default class Diary {
  constructor() {
    this.appointments = {};
  }

  addAppointment({ date, student }) {
    const result = {
    };

    if (!this.appointments[date.getTime()]) {
      this.appointments[date.getTime()] = { student };
      result.status = 'booked';
    } else {
      result.status = 'conflict';
      result.error = true;
    }
    return result;
  }
  
  getAppointment(date) {
    return this.appointments[date.getTime()];
  }

}