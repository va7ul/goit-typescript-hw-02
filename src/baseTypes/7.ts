/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday,
  Tuestay,
  Wednesday,
  Thurstay,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: Day): boolean => {
  if (day === Day.Saturday || Day.Sunday) {
    return true;
  }
  return false;
};
