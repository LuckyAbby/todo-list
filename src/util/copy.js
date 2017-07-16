function judgeClass(o) {
  return Object.prototype.toString.call(o).slice(8, -1)
}
export default function copy(obj, deep) {
  if (judgeClass(obj)!== 'Array' && judgeClass(obj)!=='Object'){
    return obj;
  } else {
      var name ,target = judgeClass(obj)==='Array' ? [] : {},value;
      for(name in obj) {
          value = obj[name];
          if(value === obj) {
              continue;
          }
          if(deep && (judgeClass(value)==='Array' || judgeClass(value)==='Object')) {
              target[name] = copy(deep, value);
          } else {
              target[name] = value;
          }
      }
      return target;
  }
}
