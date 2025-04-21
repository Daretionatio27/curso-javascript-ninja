function DOM(selector) {
  this.element = document.querySelectorAll(selector);
}

DOM.prototype.on = function on(eventType, callback) {
  this.element.forEach(function(element) {
    element.addEventListener(eventType, callback, false);
  });
};

DOM.prototype.off = function off(eventType, callback) {
  this.element.forEach(function(element) {
    element.removeEventListener(eventType, callback, false);
  });
};

DOM.prototype.get = function get() {
  return this.element;
};

DOM.prototype.forEach = function forEach() {
  Array.prototype.forEach.apply(this.element, arguments);
};

DOM.prototype.map = function map() {
  return Array.prototype.map.apply(this.element, arguments);
};

DOM.prototype.filter = function filter() {
  return Array.prototype.filter.apply(this.element, arguments);
};

DOM.prototype.reduce = function reduce() {
  return Array.prototype.reduce.apply(this.element, arguments);
};

DOM.prototype.reduceRight = function reduceRight() {
  return Array.prototype.reduceRight.apply(this.element, arguments);
};

DOM.prototype.every = function every() {
  return Array.prototype.every.apply(this.element, arguments);
};

DOM.prototype.some = function some() {
  return Array.prototype.some.apply(this.element, arguments);
};

DOM.isArray = function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

DOM.isObject = function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

DOM.isFunction = function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
};

DOM.isNumber = function isNumber(obj) {
  return Object.prototype.toString.call(obj) === '[object Number]';
};

DOM.isString = function isString(obj) {
  return Object.prototype.toString.call(obj) === '[object String]';
};

DOM.isBoolean = function isBoolean(obj) {
  return Object.prototype.toString.call(obj) === '[object Boolean]';
};

DOM.isNull = function isNull(obj) {
  return obj === null || obj === undefined;
};

// Código de teste (para verificar os métodos criados)
(function() {
  var $links = new DOM('[data-js="link"]');

  $links.forEach(function(link, index) {
    console.log('forEach:', link, index);
  });

  var hrefs = $links.map(function(link) {
    return link.getAttribute('href');
  });
  console.log('map:', hrefs);

  var linksComHrefVazio = $links.filter(function(link) {
    return link.getAttribute('href') === '';
  });
  console.log('filter:', linksComHrefVazio);

  var quantidadeDeLinks = $links.reduce(function(accumulator, link) {
    return accumulator + 1;
  }, 0);
  console.log('reduce:', quantidadeDeLinks);

  var algumLinkExiste = $links.some(function(link) {
    return link.textContent.includes('2');
  });
  console.log('some:', algumLinkExiste);

  var todosLinksSaoElementosA = $links.every(function(link) {
    return link.tagName === 'A';
  });
  console.log('every:', todosLinksSaoElementosA);

  console.log('isArray:', DOM.isArray([1, 2, 3]));
  console.log('isObject:', DOM.isObject({ a: 1 }));
  console.log('isFunction:', DOM.isFunction(function() {}));
  console.log('isNumber:', DOM.isNumber(123));
  console.log('isString:', DOM.isString('hello'));
  console.log('isBoolean:', DOM.isBoolean(true));
  console.log('isNull (null):', DOM.isNull(null));
  console.log('isNull (undefined):', DOM.isNull(undefined));
  console.log('isNull (false):', DOM.isNull(false));
})();
