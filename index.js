
/**
 * attr
 * Get attribute `name` 
 * or set attribute `name` to `val`.
 *
 * @param {String} name
 * @param {String} [val]
 * @return {String|Element} attribute value 
 *   or this for chaining
 * @api public
 */

exports.attr = function (name, val) {
  if (1 == arguments.length) {
    return this.el.getAttribute(name);
  } 
  this.el.setAttribute(name, val);
  return this;
};

/**
 * attrs
 * Set attributes given by `obj`
 * 
 * @param {Object} obj 
 * @return {Element} this for chaining
 * @api public
 */ 

exports.attrs = function (obj) {
  var name;
  var val;
  
  for (name in obj) {
    val = obj[name];
    this.attr(name, val);
  }
  
  return this;
};
