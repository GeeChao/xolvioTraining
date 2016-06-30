import { Meteor } from 'meteor/meteor';
import AppointmentService from '../domain/appointment-service';
import TeacherRepository from '../domain/teacher-repository';

// const callBookAppointment = ({date, student}) => new Promise((resolve, reject) {
//
// });

Meteor.methods({ bookAppointment });


export default function bookAppointment({date, student, teacherId}) {
  // HOMEWORK orchestration
  // use the teacher repository to get the teacher + their diary (do we need a diary repo?)
  
  const teacher = TeacherRepository.get(teacherId);
  return AppointmentService.book(date, student, teacher);
}