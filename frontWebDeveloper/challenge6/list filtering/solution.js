function filter_list(numArr) {
  return numArr.filter(arrItem => {
    return arrItem >= 0 && typeof arrItem === 'number';
  });
}
