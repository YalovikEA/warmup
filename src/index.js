module.exports = function warmup(temperature) {
  // your implementation here
  //Для перевода температуры из шкалы Цельсия в шкалу Фаренгейта нужно умножить исходное число на 9/5 и прибавить 32.
  return temperature * (9 / 5) + 32;
};
