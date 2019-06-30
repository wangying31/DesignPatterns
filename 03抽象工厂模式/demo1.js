/**
 * 制定了类的结构
 * 子类去实现父类中的抽象方法
 */

// 抽象工厂方法
var abstractFactory = function (subType, superType) {
  // 判断抽象工厂中是否有该抽象类
  if (typeof abstractFactory[subType] === 'function') {
    // 缓存类
    function F() {};
    // 继承父类属性和方法
    F.prototype = new abstractFactory[superType]();
    // 将子类constructor指向子类
    subType.constructor = subType;
    // 子类原型继承父类
    subType.prototype = new F();
  } else {
    // 不存在该抽象类抛出错误
    throw new Error('未创建该抽象类');
  }
}