const START_TIME = 'Mon May 1 2025 12:00:00 GMT+0000';

// Функция для склонения слов
function getWordForm(number, forms) {
  number = Math.abs(number) % 100;
  const lastDigit = number % 10;
  if (number > 10 && number < 20) return forms[2];
  if (lastDigit > 1 && lastDigit < 5) return forms[1];
  if (lastDigit === 1) return forms[0];
  return forms[2];
}

$(document).ready(function () {
  const endDate = moment(START_TIME);
  window.setInterval(function () {
    const diff = moment.duration(endDate.diff(moment()));
    const days = Math.trunc(diff.asDays());
    const hours = diff.hours();
    const minutes = diff.minutes();
    const seconds = diff.seconds();

    // Обновляем цифры
    $("#days").text(days);
    $("#hours").text(hours.toString().padStart(2, '0'));
    $("#minutes").text(minutes.toString().padStart(2, '0'));
    $("#seconds").text(seconds.toString().padStart(2, '0'));

    // Обновляем подписи
    $("#days-label").text(getWordForm(days, ['день', 'дня', 'дней']));
    $("#hours-label").text(getWordForm(hours, ['час', 'часа', 'часов']));
    $("#minutes-label").text(getWordForm(minutes, ['минута', 'минуты', 'минут']));
    $("#seconds-label").text(getWordForm(seconds, ['секунда', 'секунды', 'секунд']));
  }, 1000);
});
