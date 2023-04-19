/*------------ //////// ---------------*/
/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!(function (a, b) {
  'use strict'
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error('jQuery requires a window with a document')
            return b(a)
          })
    : b(a)
})('undefined' != typeof window ? window : this, function (a, b) {
  'use strict'
  var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {}
  function p (a, b) {
    b = b || d
    var c = b.createElement('script')
    ;(c.text = a), b.head.appendChild(c).parentNode.removeChild(c)
  }
  var q = '3.1.1',
    r = function (a, b) {
      return new r.fn.init(a, b)
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function (a, b) {
      return b.toUpperCase()
    }
  ;(r.fn = r.prototype =
    {
      jquery: q,
      constructor: r,
      length: 0,
      toArray: function () {
        return f.call(this)
      },
      get: function (a) {
        return null == a
          ? f.call(this)
          : a < 0
          ? this[a + this.length]
          : this[a]
      },
      pushStack: function (a) {
        var b = r.merge(this.constructor(), a)
        return (b.prevObject = this), b
      },
      each: function (a) {
        return r.each(this, a)
      },
      map: function (a) {
        return this.pushStack(
          r.map(this, function (b, c) {
            return a.call(b, c, b)
          })
        )
      },
      slice: function () {
        return this.pushStack(f.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (a < 0 ? b : 0)
        return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: h,
      sort: c.sort,
      splice: c.splice
    }),
    (r.extend = r.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1
        for (
          'boolean' == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            'object' == typeof g || r.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          h < i;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (r.isPlainObject(d) || (e = r.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && r.isArray(c) ? c : []))
                        : (f = c && r.isPlainObject(c) ? c : {}),
                      (g[b] = r.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d))
        return g
      }),
    r.extend({
      expando: 'jQuery' + (q + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (a) {
        throw new Error(a)
      },
      noop: function () {},
      isFunction: function (a) {
        return 'function' === r.type(a)
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window
      },
      isNumeric: function (a) {
        var b = r.type(a)
        return ('number' === b || 'string' === b) && !isNaN(a - parseFloat(a))
      },
      isPlainObject: function (a) {
        var b, c
        return (
          !(!a || '[object Object]' !== k.call(a)) &&
          (!(b = e(a)) ||
            ((c = l.call(b, 'constructor') && b.constructor),
            'function' == typeof c && m.call(c) === n))
        )
      },
      isEmptyObject: function (a) {
        var b
        for (b in a) return !1
        return !0
      },
      type: function (a) {
        return null == a
          ? a + ''
          : 'object' == typeof a || 'function' == typeof a
          ? j[k.call(a)] || 'object'
          : typeof a
      },
      globalEval: function (a) {
        p(a)
      },
      camelCase: function (a) {
        return a.replace(t, 'ms-').replace(u, v)
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
      },
      each: function (a, b) {
        var c,
          d = 0
        if (w(a)) {
          for (c = a.length; d < c; d++) if (b.call(a[d], d, a[d]) === !1) break
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break
        return a
      },
      trim: function (a) {
        return null == a ? '' : (a + '').replace(s, '')
      },
      makeArray: function (a, b) {
        var c = b || []
        return (
          null != a &&
            (w(Object(a))
              ? r.merge(c, 'string' == typeof a ? [a] : a)
              : h.call(c, a)),
          c
        )
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : i.call(b, a, c)
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d]
        return (a.length = e), a
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f])
        return e
      },
      map: function (a, b, c) {
        var d,
          e,
          f = 0,
          h = []
        if (w(a))
          for (d = a.length; f < d; f++)
            (e = b(a[f], f, c)), null != e && h.push(e)
        else for (f in a) (e = b(a[f], f, c)), null != e && h.push(e)
        return g.apply([], h)
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, e
        if (
          ('string' == typeof b && ((c = a[b]), (b = a), (a = c)),
          r.isFunction(a))
        )
          return (
            (d = f.call(arguments, 2)),
            (e = function () {
              return a.apply(b || this, d.concat(f.call(arguments)))
            }),
            (e.guid = a.guid = a.guid || r.guid++),
            e
          )
      },
      now: Date.now,
      support: o
    }),
    'function' == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
    r.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (a, b) {
        j['[object ' + b + ']'] = b.toLowerCase()
      }
    )
  function w (a) {
    var b = !!a && 'length' in a && a.length,
      c = r.type(a)
    return (
      'function' !== c &&
      !r.isWindow(a) &&
      ('array' === c ||
        0 === b ||
        ('number' == typeof b && b > 0 && b - 1 in a))
    )
  }
  var x = (function (a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u = 'sizzle' + 1 * new Date(),
      v = a.document,
      w = 0,
      x = 0,
      y = ha(),
      z = ha(),
      A = ha(),
      B = function (a, b) {
        return a === b && (l = !0), 0
      },
      C = {}.hasOwnProperty,
      D = [],
      E = D.pop,
      F = D.push,
      G = D.push,
      H = D.slice,
      I = function (a, b) {
        for (var c = 0, d = a.length; c < d; c++) if (a[c] === b) return c
        return -1
      },
      J =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      K = '[\\x20\\t\\r\\n\\f]',
      L = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
      M =
        '\\[' +
        K +
        '*(' +
        L +
        ')(?:' +
        K +
        '*([*^$|!~]?=)' +
        K +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        L +
        '))|)' +
        K +
        '*\\]',
      N =
        ':(' +
        L +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        M +
        ')*)|.*)\\)|)',
      O = new RegExp(K + '+', 'g'),
      P = new RegExp('^' + K + '+|((?:^|[^\\\\])(?:\\\\.)*)' + K + '+$', 'g'),
      Q = new RegExp('^' + K + '*,' + K + '*'),
      R = new RegExp('^' + K + '*([>+~]|' + K + ')' + K + '*'),
      S = new RegExp('=' + K + '*([^\\]\'"]*?)' + K + '*\\]', 'g'),
      T = new RegExp(N),
      U = new RegExp('^' + L + '$'),
      V = {
        ID: new RegExp('^#(' + L + ')'),
        CLASS: new RegExp('^\\.(' + L + ')'),
        TAG: new RegExp('^(' + L + '|[*])'),
        ATTR: new RegExp('^' + M),
        PSEUDO: new RegExp('^' + N),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            K +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            K +
            '*(?:([+-]|)' +
            K +
            '*(\\d+)|))' +
            K +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + J + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            K +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            K +
            '*((?:-\\d)?\\d*)' +
            K +
            '*\\)|)(?=[^-]|$)',
          'i'
        )
      },
      W = /^(?:input|select|textarea|button)$/i,
      X = /^h\d$/i,
      Y = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      $ = /[+~]/,
      _ = new RegExp('\\\\([\\da-f]{1,6}' + K + '?|(' + K + ')|.)', 'ig'),
      aa = function (a, b, c) {
        var d = '0x' + b - 65536
        return d !== d || c
          ? b
          : d < 0
          ? String.fromCharCode(d + 65536)
          : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320)
      },
      ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ca = function (a, b) {
        return b
          ? '\0' === a
            ? '\ufffd'
            : a.slice(0, -1) +
              '\\' +
              a.charCodeAt(a.length - 1).toString(16) +
              ' '
          : '\\' + a
      },
      da = function () {
        m()
      },
      ea = ta(
        function (a) {
          return a.disabled === !0 && ('form' in a || 'label' in a)
        },
        { dir: 'parentNode', next: 'legend' }
      )
    try {
      G.apply((D = H.call(v.childNodes)), v.childNodes),
        D[v.childNodes.length].nodeType
    } catch (fa) {
      G = {
        apply: D.length
          ? function (a, b) {
              F.apply(a, H.call(b))
            }
          : function (a, b) {
              var c = a.length,
                d = 0
              while ((a[c++] = b[d++]));
              a.length = c - 1
            }
      }
    }
    function ga (a, b, d, e) {
      var f,
        h,
        j,
        k,
        l,
        o,
        r,
        s = b && b.ownerDocument,
        w = b ? b.nodeType : 9
      if (
        ((d = d || []),
        'string' != typeof a || !a || (1 !== w && 9 !== w && 11 !== w))
      )
        return d
      if (
        !e &&
        ((b ? b.ownerDocument || b : v) !== n && m(b), (b = b || n), p)
      ) {
        if (11 !== w && (l = Z.exec(a)))
          if ((f = l[1])) {
            if (9 === w) {
              if (!(j = b.getElementById(f))) return d
              if (j.id === f) return d.push(j), d
            } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f)
              return d.push(j), d
          } else {
            if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d
            if (
              (f = l[3]) &&
              c.getElementsByClassName &&
              b.getElementsByClassName
            )
              return G.apply(d, b.getElementsByClassName(f)), d
          }
        if (c.qsa && !A[a + ' '] && (!q || !q.test(a))) {
          if (1 !== w) (s = b), (r = a)
          else if ('object' !== b.nodeName.toLowerCase()) {
            ;(k = b.getAttribute('id'))
              ? (k = k.replace(ba, ca))
              : b.setAttribute('id', (k = u)),
              (o = g(a)),
              (h = o.length)
            while (h--) o[h] = '#' + k + ' ' + sa(o[h])
            ;(r = o.join(',')), (s = ($.test(a) && qa(b.parentNode)) || b)
          }
          if (r)
            try {
              return G.apply(d, s.querySelectorAll(r)), d
            } catch (x) {
            } finally {
              k === u && b.removeAttribute('id')
            }
        }
      }
      return i(a.replace(P, '$1'), b, d, e)
    }
    function ha () {
      var a = []
      function b (c, e) {
        return (
          a.push(c + ' ') > d.cacheLength && delete b[a.shift()],
          (b[c + ' '] = e)
        )
      }
      return b
    }
    function ia (a) {
      return (a[u] = !0), a
    }
    function ja (a) {
      var b = n.createElement('fieldset')
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), (b = null)
      }
    }
    function ka (a, b) {
      var c = a.split('|'),
        e = c.length
      while (e--) d.attrHandle[c[e]] = b
    }
    function la (a, b) {
      var c = b && a,
        d =
          c &&
          1 === a.nodeType &&
          1 === b.nodeType &&
          a.sourceIndex - b.sourceIndex
      if (d) return d
      if (c) while ((c = c.nextSibling)) if (c === b) return -1
      return a ? 1 : -1
    }
    function ma (a) {
      return function (b) {
        var c = b.nodeName.toLowerCase()
        return 'input' === c && b.type === a
      }
    }
    function na (a) {
      return function (b) {
        var c = b.nodeName.toLowerCase()
        return ('input' === c || 'button' === c) && b.type === a
      }
    }
    function oa (a) {
      return function (b) {
        return 'form' in b
          ? b.parentNode && b.disabled === !1
            ? 'label' in b
              ? 'label' in b.parentNode
                ? b.parentNode.disabled === a
                : b.disabled === a
              : b.isDisabled === a || (b.isDisabled !== !a && ea(b) === a)
            : b.disabled === a
          : 'label' in b && b.disabled === a
      }
    }
    function pa (a) {
      return ia(function (b) {
        return (
          (b = +b),
          ia(function (c, d) {
            var e,
              f = a([], c.length, b),
              g = f.length
            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]))
          })
        )
      })
    }
    function qa (a) {
      return a && 'undefined' != typeof a.getElementsByTagName && a
    }
    ;(c = ga.support = {}),
      (f = ga.isXML =
        function (a) {
          var b = a && (a.ownerDocument || a).documentElement
          return !!b && 'HTML' !== b.nodeName
        }),
      (m = ga.setDocument =
        function (a) {
          var b,
            e,
            g = a ? a.ownerDocument || a : v
          return g !== n && 9 === g.nodeType && g.documentElement
            ? ((n = g),
              (o = n.documentElement),
              (p = !f(n)),
              v !== n &&
                (e = n.defaultView) &&
                e.top !== e &&
                (e.addEventListener
                  ? e.addEventListener('unload', da, !1)
                  : e.attachEvent && e.attachEvent('onunload', da)),
              (c.attributes = ja(function (a) {
                return (a.className = 'i'), !a.getAttribute('className')
              })),
              (c.getElementsByTagName = ja(function (a) {
                return (
                  a.appendChild(n.createComment('')),
                  !a.getElementsByTagName('*').length
                )
              })),
              (c.getElementsByClassName = Y.test(n.getElementsByClassName)),
              (c.getById = ja(function (a) {
                return (
                  (o.appendChild(a).id = u),
                  !n.getElementsByName || !n.getElementsByName(u).length
                )
              })),
              c.getById
                ? ((d.filter.ID = function (a) {
                    var b = a.replace(_, aa)
                    return function (a) {
                      return a.getAttribute('id') === b
                    }
                  }),
                  (d.find.ID = function (a, b) {
                    if ('undefined' != typeof b.getElementById && p) {
                      var c = b.getElementById(a)
                      return c ? [c] : []
                    }
                  }))
                : ((d.filter.ID = function (a) {
                    var b = a.replace(_, aa)
                    return function (a) {
                      var c =
                        'undefined' != typeof a.getAttributeNode &&
                        a.getAttributeNode('id')
                      return c && c.value === b
                    }
                  }),
                  (d.find.ID = function (a, b) {
                    if ('undefined' != typeof b.getElementById && p) {
                      var c,
                        d,
                        e,
                        f = b.getElementById(a)
                      if (f) {
                        if (
                          ((c = f.getAttributeNode('id')), c && c.value === a)
                        )
                          return [f]
                        ;(e = b.getElementsByName(a)), (d = 0)
                        while ((f = e[d++]))
                          if (
                            ((c = f.getAttributeNode('id')), c && c.value === a)
                          )
                            return [f]
                      }
                      return []
                    }
                  })),
              (d.find.TAG = c.getElementsByTagName
                ? function (a, b) {
                    return 'undefined' != typeof b.getElementsByTagName
                      ? b.getElementsByTagName(a)
                      : c.qsa
                      ? b.querySelectorAll(a)
                      : void 0
                  }
                : function (a, b) {
                    var c,
                      d = [],
                      e = 0,
                      f = b.getElementsByTagName(a)
                    if ('*' === a) {
                      while ((c = f[e++])) 1 === c.nodeType && d.push(c)
                      return d
                    }
                    return f
                  }),
              (d.find.CLASS =
                c.getElementsByClassName &&
                function (a, b) {
                  if ('undefined' != typeof b.getElementsByClassName && p)
                    return b.getElementsByClassName(a)
                }),
              (r = []),
              (q = []),
              (c.qsa = Y.test(n.querySelectorAll)) &&
                (ja(function (a) {
                  ;(o.appendChild(a).innerHTML =
                    "<a id='" +
                    u +
                    "'></a><select id='" +
                    u +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    a.querySelectorAll("[msallowcapture^='']").length &&
                      q.push('[*^$]=' + K + '*(?:\'\'|"")'),
                    a.querySelectorAll('[selected]').length ||
                      q.push('\\[' + K + '*(?:value|' + J + ')'),
                    a.querySelectorAll('[id~=' + u + '-]').length ||
                      q.push('~='),
                    a.querySelectorAll(':checked').length || q.push(':checked'),
                    a.querySelectorAll('a#' + u + '+*').length ||
                      q.push('.#.+[+~]')
                }),
                ja(function (a) {
                  a.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
                  var b = n.createElement('input')
                  b.setAttribute('type', 'hidden'),
                    a.appendChild(b).setAttribute('name', 'D'),
                    a.querySelectorAll('[name=d]').length &&
                      q.push('name' + K + '*[*^$|!~]?='),
                    2 !== a.querySelectorAll(':enabled').length &&
                      q.push(':enabled', ':disabled'),
                    (o.appendChild(a).disabled = !0),
                    2 !== a.querySelectorAll(':disabled').length &&
                      q.push(':enabled', ':disabled'),
                    a.querySelectorAll('*,:x'),
                    q.push(',.*:')
                })),
              (c.matchesSelector = Y.test(
                (s =
                  o.matches ||
                  o.webkitMatchesSelector ||
                  o.mozMatchesSelector ||
                  o.oMatchesSelector ||
                  o.msMatchesSelector)
              )) &&
                ja(function (a) {
                  ;(c.disconnectedMatch = s.call(a, '*')),
                    s.call(a, "[s!='']:x"),
                    r.push('!=', N)
                }),
              (q = q.length && new RegExp(q.join('|'))),
              (r = r.length && new RegExp(r.join('|'))),
              (b = Y.test(o.compareDocumentPosition)),
              (t =
                b || Y.test(o.contains)
                  ? function (a, b) {
                      var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode
                      return (
                        a === d ||
                        !(
                          !d ||
                          1 !== d.nodeType ||
                          !(c.contains
                            ? c.contains(d)
                            : a.compareDocumentPosition &&
                              16 & a.compareDocumentPosition(d))
                        )
                      )
                    }
                  : function (a, b) {
                      if (b) while ((b = b.parentNode)) if (b === a) return !0
                      return !1
                    }),
              (B = b
                ? function (a, b) {
                    if (a === b) return (l = !0), 0
                    var d =
                      !a.compareDocumentPosition - !b.compareDocumentPosition
                    return d
                      ? d
                      : ((d =
                          (a.ownerDocument || a) === (b.ownerDocument || b)
                            ? a.compareDocumentPosition(b)
                            : 1),
                        1 & d ||
                        (!c.sortDetached && b.compareDocumentPosition(a) === d)
                          ? a === n || (a.ownerDocument === v && t(v, a))
                            ? -1
                            : b === n || (b.ownerDocument === v && t(v, b))
                            ? 1
                            : k
                            ? I(k, a) - I(k, b)
                            : 0
                          : 4 & d
                          ? -1
                          : 1)
                  }
                : function (a, b) {
                    if (a === b) return (l = !0), 0
                    var c,
                      d = 0,
                      e = a.parentNode,
                      f = b.parentNode,
                      g = [a],
                      h = [b]
                    if (!e || !f)
                      return a === n
                        ? -1
                        : b === n
                        ? 1
                        : e
                        ? -1
                        : f
                        ? 1
                        : k
                        ? I(k, a) - I(k, b)
                        : 0
                    if (e === f) return la(a, b)
                    c = a
                    while ((c = c.parentNode)) g.unshift(c)
                    c = b
                    while ((c = c.parentNode)) h.unshift(c)
                    while (g[d] === h[d]) d++
                    return d
                      ? la(g[d], h[d])
                      : g[d] === v
                      ? -1
                      : h[d] === v
                      ? 1
                      : 0
                  }),
              n)
            : n
        }),
      (ga.matches = function (a, b) {
        return ga(a, null, null, b)
      }),
      (ga.matchesSelector = function (a, b) {
        if (
          ((a.ownerDocument || a) !== n && m(a),
          (b = b.replace(S, "='$1']")),
          c.matchesSelector &&
            p &&
            !A[b + ' '] &&
            (!r || !r.test(b)) &&
            (!q || !q.test(b)))
        )
          try {
            var d = s.call(a, b)
            if (
              d ||
              c.disconnectedMatch ||
              (a.document && 11 !== a.document.nodeType)
            )
              return d
          } catch (e) {}
        return ga(b, n, null, [a]).length > 0
      }),
      (ga.contains = function (a, b) {
        return (a.ownerDocument || a) !== n && m(a), t(a, b)
      }),
      (ga.attr = function (a, b) {
        ;(a.ownerDocument || a) !== n && m(a)
        var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0
        return void 0 !== f
          ? f
          : c.attributes || !p
          ? a.getAttribute(b)
          : (f = a.getAttributeNode(b)) && f.specified
          ? f.value
          : null
      }),
      (ga.escape = function (a) {
        return (a + '').replace(ba, ca)
      }),
      (ga.error = function (a) {
        throw new Error('Syntax error, unrecognized expression: ' + a)
      }),
      (ga.uniqueSort = function (a) {
        var b,
          d = [],
          e = 0,
          f = 0
        if (
          ((l = !c.detectDuplicates),
          (k = !c.sortStable && a.slice(0)),
          a.sort(B),
          l)
        ) {
          while ((b = a[f++])) b === a[f] && (e = d.push(f))
          while (e--) a.splice(d[e], 1)
        }
        return (k = null), a
      }),
      (e = ga.getText =
        function (a) {
          var b,
            c = '',
            d = 0,
            f = a.nodeType
          if (f) {
            if (1 === f || 9 === f || 11 === f) {
              if ('string' == typeof a.textContent) return a.textContent
              for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
            } else if (3 === f || 4 === f) return a.nodeValue
          } else while ((b = a[d++])) c += e(b)
          return c
        }),
      (d = ga.selectors =
        {
          cacheLength: 50,
          createPseudo: ia,
          match: V,
          attrHandle: {},
          find: {},
          relative: {
            '>': { dir: 'parentNode', first: !0 },
            ' ': { dir: 'parentNode' },
            '+': { dir: 'previousSibling', first: !0 },
            '~': { dir: 'previousSibling' }
          },
          preFilter: {
            ATTR: function (a) {
              return (
                (a[1] = a[1].replace(_, aa)),
                (a[3] = (a[3] || a[4] || a[5] || '').replace(_, aa)),
                '~=' === a[2] && (a[3] = ' ' + a[3] + ' '),
                a.slice(0, 4)
              )
            },
            CHILD: function (a) {
              return (
                (a[1] = a[1].toLowerCase()),
                'nth' === a[1].slice(0, 3)
                  ? (a[3] || ga.error(a[0]),
                    (a[4] = +(a[4]
                      ? a[5] + (a[6] || 1)
                      : 2 * ('even' === a[3] || 'odd' === a[3]))),
                    (a[5] = +(a[7] + a[8] || 'odd' === a[3])))
                  : a[3] && ga.error(a[0]),
                a
              )
            },
            PSEUDO: function (a) {
              var b,
                c = !a[6] && a[2]
              return V.CHILD.test(a[0])
                ? null
                : (a[3]
                    ? (a[2] = a[4] || a[5] || '')
                    : c &&
                      T.test(c) &&
                      (b = g(c, !0)) &&
                      (b = c.indexOf(')', c.length - b) - c.length) &&
                      ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                  a.slice(0, 3))
            }
          },
          filter: {
            TAG: function (a) {
              var b = a.replace(_, aa).toLowerCase()
              return '*' === a
                ? function () {
                    return !0
                  }
                : function (a) {
                    return a.nodeName && a.nodeName.toLowerCase() === b
                  }
            },
            CLASS: function (a) {
              var b = y[a + ' ']
              return (
                b ||
                ((b = new RegExp('(^|' + K + ')' + a + '(' + K + '|$)')) &&
                  y(a, function (a) {
                    return b.test(
                      ('string' == typeof a.className && a.className) ||
                        ('undefined' != typeof a.getAttribute &&
                          a.getAttribute('class')) ||
                        ''
                    )
                  }))
              )
            },
            ATTR: function (a, b, c) {
              return function (d) {
                var e = ga.attr(d, a)
                return null == e
                  ? '!=' === b
                  : !b ||
                      ((e += ''),
                      '=' === b
                        ? e === c
                        : '!=' === b
                        ? e !== c
                        : '^=' === b
                        ? c && 0 === e.indexOf(c)
                        : '*=' === b
                        ? c && e.indexOf(c) > -1
                        : '$=' === b
                        ? c && e.slice(-c.length) === c
                        : '~=' === b
                        ? (' ' + e.replace(O, ' ') + ' ').indexOf(c) > -1
                        : '|=' === b &&
                          (e === c || e.slice(0, c.length + 1) === c + '-'))
              }
            },
            CHILD: function (a, b, c, d, e) {
              var f = 'nth' !== a.slice(0, 3),
                g = 'last' !== a.slice(-4),
                h = 'of-type' === b
              return 1 === d && 0 === e
                ? function (a) {
                    return !!a.parentNode
                  }
                : function (b, c, i) {
                    var j,
                      k,
                      l,
                      m,
                      n,
                      o,
                      p = f !== g ? 'nextSibling' : 'previousSibling',
                      q = b.parentNode,
                      r = h && b.nodeName.toLowerCase(),
                      s = !i && !h,
                      t = !1
                    if (q) {
                      if (f) {
                        while (p) {
                          m = b
                          while ((m = m[p]))
                            if (
                              h
                                ? m.nodeName.toLowerCase() === r
                                : 1 === m.nodeType
                            )
                              return !1
                          o = p = 'only' === a && !o && 'nextSibling'
                        }
                        return !0
                      }
                      if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                        ;(m = q),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n && j[2]),
                          (m = n && q.childNodes[n])
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (1 === m.nodeType && ++t && m === b) {
                            k[a] = [w, n, t]
                            break
                          }
                      } else if (
                        (s &&
                          ((m = b),
                          (l = m[u] || (m[u] = {})),
                          (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                          (j = k[a] || []),
                          (n = j[0] === w && j[1]),
                          (t = n)),
                        t === !1)
                      )
                        while (
                          (m = (++n && m && m[p]) || (t = n = 0) || o.pop())
                        )
                          if (
                            (h
                              ? m.nodeName.toLowerCase() === r
                              : 1 === m.nodeType) &&
                            ++t &&
                            (s &&
                              ((l = m[u] || (m[u] = {})),
                              (k = l[m.uniqueID] || (l[m.uniqueID] = {})),
                              (k[a] = [w, t])),
                            m === b)
                          )
                            break
                      return (t -= e), t === d || (t % d === 0 && t / d >= 0)
                    }
                  }
            },
            PSEUDO: function (a, b) {
              var c,
                e =
                  d.pseudos[a] ||
                  d.setFilters[a.toLowerCase()] ||
                  ga.error('unsupported pseudo: ' + a)
              return e[u]
                ? e(b)
                : e.length > 1
                ? ((c = [a, a, '', b]),
                  d.setFilters.hasOwnProperty(a.toLowerCase())
                    ? ia(function (a, c) {
                        var d,
                          f = e(a, b),
                          g = f.length
                        while (g--) (d = I(a, f[g])), (a[d] = !(c[d] = f[g]))
                      })
                    : function (a) {
                        return e(a, 0, c)
                      })
                : e
            }
          },
          pseudos: {
            not: ia(function (a) {
              var b = [],
                c = [],
                d = h(a.replace(P, '$1'))
              return d[u]
                ? ia(function (a, b, c, e) {
                    var f,
                      g = d(a, null, e, []),
                      h = a.length
                    while (h--) (f = g[h]) && (a[h] = !(b[h] = f))
                  })
                : function (a, e, f) {
                    return (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                  }
            }),
            has: ia(function (a) {
              return function (b) {
                return ga(a, b).length > 0
              }
            }),
            contains: ia(function (a) {
              return (
                (a = a.replace(_, aa)),
                function (b) {
                  return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                }
              )
            }),
            lang: ia(function (a) {
              return (
                U.test(a || '') || ga.error('unsupported lang: ' + a),
                (a = a.replace(_, aa).toLowerCase()),
                function (b) {
                  var c
                  do
                    if (
                      (c = p
                        ? b.lang
                        : b.getAttribute('xml:lang') || b.getAttribute('lang'))
                    )
                      return (
                        (c = c.toLowerCase()),
                        c === a || 0 === c.indexOf(a + '-')
                      )
                  while ((b = b.parentNode) && 1 === b.nodeType)
                  return !1
                }
              )
            }),
            target: function (b) {
              var c = a.location && a.location.hash
              return c && c.slice(1) === b.id
            },
            root: function (a) {
              return a === o
            },
            focus: function (a) {
              return (
                a === n.activeElement &&
                (!n.hasFocus || n.hasFocus()) &&
                !!(a.type || a.href || ~a.tabIndex)
              )
            },
            enabled: oa(!1),
            disabled: oa(!0),
            checked: function (a) {
              var b = a.nodeName.toLowerCase()
              return (
                ('input' === b && !!a.checked) ||
                ('option' === b && !!a.selected)
              )
            },
            selected: function (a) {
              return (
                a.parentNode && a.parentNode.selectedIndex, a.selected === !0
              )
            },
            empty: function (a) {
              for (a = a.firstChild; a; a = a.nextSibling)
                if (a.nodeType < 6) return !1
              return !0
            },
            parent: function (a) {
              return !d.pseudos.empty(a)
            },
            header: function (a) {
              return X.test(a.nodeName)
            },
            input: function (a) {
              return W.test(a.nodeName)
            },
            button: function (a) {
              var b = a.nodeName.toLowerCase()
              return ('input' === b && 'button' === a.type) || 'button' === b
            },
            text: function (a) {
              var b
              return (
                'input' === a.nodeName.toLowerCase() &&
                'text' === a.type &&
                (null == (b = a.getAttribute('type')) ||
                  'text' === b.toLowerCase())
              )
            },
            first: pa(function () {
              return [0]
            }),
            last: pa(function (a, b) {
              return [b - 1]
            }),
            eq: pa(function (a, b, c) {
              return [c < 0 ? c + b : c]
            }),
            even: pa(function (a, b) {
              for (var c = 0; c < b; c += 2) a.push(c)
              return a
            }),
            odd: pa(function (a, b) {
              for (var c = 1; c < b; c += 2) a.push(c)
              return a
            }),
            lt: pa(function (a, b, c) {
              for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d)
              return a
            }),
            gt: pa(function (a, b, c) {
              for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d)
              return a
            })
          }
        }),
      (d.pseudos.nth = d.pseudos.eq)
    for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      d.pseudos[b] = ma(b)
    for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b)
    function ra () {}
    ;(ra.prototype = d.filters = d.pseudos),
      (d.setFilters = new ra()),
      (g = ga.tokenize =
        function (a, b) {
          var c,
            e,
            f,
            g,
            h,
            i,
            j,
            k = z[a + ' ']
          if (k) return b ? 0 : k.slice(0)
          ;(h = a), (i = []), (j = d.preFilter)
          while (h) {
            ;(c && !(e = Q.exec(h))) ||
              (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
              (c = !1),
              (e = R.exec(h)) &&
                ((c = e.shift()),
                f.push({ value: c, type: e[0].replace(P, ' ') }),
                (h = h.slice(c.length)))
            for (g in d.filter)
              !(e = V[g].exec(h)) ||
                (j[g] && !(e = j[g](e))) ||
                ((c = e.shift()),
                f.push({ value: c, type: g, matches: e }),
                (h = h.slice(c.length)))
            if (!c) break
          }
          return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        })
    function sa (a) {
      for (var b = 0, c = a.length, d = ''; b < c; b++) d += a[b].value
      return d
    }
    function ta (a, b, c) {
      var d = b.dir,
        e = b.next,
        f = e || d,
        g = c && 'parentNode' === f,
        h = x++
      return b.first
        ? function (b, c, e) {
            while ((b = b[d])) if (1 === b.nodeType || g) return a(b, c, e)
            return !1
          }
        : function (b, c, i) {
            var j,
              k,
              l,
              m = [w, h]
            if (i) {
              while ((b = b[d]))
                if ((1 === b.nodeType || g) && a(b, c, i)) return !0
            } else
              while ((b = b[d]))
                if (1 === b.nodeType || g)
                  if (
                    ((l = b[u] || (b[u] = {})),
                    (k = l[b.uniqueID] || (l[b.uniqueID] = {})),
                    e && e === b.nodeName.toLowerCase())
                  )
                    b = b[d] || b
                  else {
                    if ((j = k[f]) && j[0] === w && j[1] === h)
                      return (m[2] = j[2])
                    if (((k[f] = m), (m[2] = a(b, c, i)))) return !0
                  }
            return !1
          }
    }
    function ua (a) {
      return a.length > 1
        ? function (b, c, d) {
            var e = a.length
            while (e--) if (!a[e](b, c, d)) return !1
            return !0
          }
        : a[0]
    }
    function va (a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) ga(a, b[d], c)
      return c
    }
    function wa (a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)
        (f = a[h]) && ((c && !c(f, d, e)) || (g.push(f), j && b.push(h)))
      return g
    }
    function xa (a, b, c, d, e, f) {
      return (
        d && !d[u] && (d = xa(d)),
        e && !e[u] && (e = xa(e, f)),
        ia(function (f, g, h, i) {
          var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || '*', h.nodeType ? [h] : h, []),
            q = !a || (!f && b) ? p : wa(p, m, a, h, i),
            r = c ? (e || (f ? a : o || d) ? [] : g) : q
          if ((c && c(q, r, h, i), d)) {
            ;(j = wa(r, n)), d(j, [], h, i), (k = j.length)
            while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
          }
          if (f) {
            if (e || a) {
              if (e) {
                ;(j = []), (k = r.length)
                while (k--) (l = r[k]) && j.push((q[k] = l))
                e(null, (r = []), j, i)
              }
              k = r.length
              while (k--)
                (l = r[k]) &&
                  (j = e ? I(f, l) : m[k]) > -1 &&
                  (f[j] = !(g[j] = l))
            }
          } else (r = wa(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : G.apply(g, r)
        })
      )
    }
    function ya (a) {
      for (
        var b,
          c,
          e,
          f = a.length,
          g = d.relative[a[0].type],
          h = g || d.relative[' '],
          i = g ? 1 : 0,
          k = ta(
            function (a) {
              return a === b
            },
            h,
            !0
          ),
          l = ta(
            function (a) {
              return I(b, a) > -1
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              var e =
                (!g && (d || c !== j)) ||
                ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
              return (b = null), e
            }
          ];
        i < f;
        i++
      )
        if ((c = d.relative[a[i].type])) m = [ta(ua(m), c)]
        else {
          if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
            for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break
            return xa(
              i > 1 && ua(m),
              i > 1 &&
                sa(
                  a
                    .slice(0, i - 1)
                    .concat({ value: ' ' === a[i - 2].type ? '*' : '' })
                ).replace(P, '$1'),
              c,
              i < e && ya(a.slice(i, e)),
              e < f && ya((a = a.slice(e))),
              e < f && sa(a)
            )
          }
          m.push(c)
        }
      return ua(m)
    }
    function za (a, b) {
      var c = b.length > 0,
        e = a.length > 0,
        f = function (f, g, h, i, k) {
          var l,
            o,
            q,
            r = 0,
            s = '0',
            t = f && [],
            u = [],
            v = j,
            x = f || (e && d.find.TAG('*', k)),
            y = (w += null == v ? 1 : Math.random() || 0.1),
            z = x.length
          for (
            k && (j = g === n || g || k);
            s !== z && null != (l = x[s]);
            s++
          ) {
            if (e && l) {
              ;(o = 0), g || l.ownerDocument === n || (m(l), (h = !p))
              while ((q = a[o++]))
                if (q(l, g || n, h)) {
                  i.push(l)
                  break
                }
              k && (w = y)
            }
            c && ((l = !q && l) && r--, f && t.push(l))
          }
          if (((r += s), c && s !== r)) {
            o = 0
            while ((q = b[o++])) q(t, u, g, h)
            if (f) {
              if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i))
              u = wa(u)
            }
            G.apply(i, u),
              k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
          }
          return k && ((w = y), (j = v)), t
        }
      return c ? ia(f) : f
    }
    return (
      (h = ga.compile =
        function (a, b) {
          var c,
            d = [],
            e = [],
            f = A[a + ' ']
          if (!f) {
            b || (b = g(a)), (c = b.length)
            while (c--) (f = ya(b[c])), f[u] ? d.push(f) : e.push(f)
            ;(f = A(a, za(e, d))), (f.selector = a)
          }
          return f
        }),
      (i = ga.select =
        function (a, b, c, e) {
          var f,
            i,
            j,
            k,
            l,
            m = 'function' == typeof a && a,
            n = !e && g((a = m.selector || a))
          if (((c = c || []), 1 === n.length)) {
            if (
              ((i = n[0] = n[0].slice(0)),
              i.length > 2 &&
                'ID' === (j = i[0]).type &&
                9 === b.nodeType &&
                p &&
                d.relative[i[1].type])
            ) {
              if (
                ((b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0]), !b)
              )
                return c
              m && (b = b.parentNode), (a = a.slice(i.shift().value.length))
            }
            f = V.needsContext.test(a) ? 0 : i.length
            while (f--) {
              if (((j = i[f]), d.relative[(k = j.type)])) break
              if (
                (l = d.find[k]) &&
                (e = l(
                  j.matches[0].replace(_, aa),
                  ($.test(i[0].type) && qa(b.parentNode)) || b
                ))
              ) {
                if ((i.splice(f, 1), (a = e.length && sa(i)), !a))
                  return G.apply(c, e), c
                break
              }
            }
          }
          return (
            (m || h(a, n))(
              e,
              b,
              !p,
              c,
              !b || ($.test(a) && qa(b.parentNode)) || b
            ),
            c
          )
        }),
      (c.sortStable = u.split('').sort(B).join('') === u),
      (c.detectDuplicates = !!l),
      m(),
      (c.sortDetached = ja(function (a) {
        return 1 & a.compareDocumentPosition(n.createElement('fieldset'))
      })),
      ja(function (a) {
        return (
          (a.innerHTML = "<a href='#'></a>"),
          '#' === a.firstChild.getAttribute('href')
        )
      }) ||
        ka('type|href|height|width', function (a, b, c) {
          if (!c) return a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2)
        }),
      (c.attributes &&
        ja(function (a) {
          return (
            (a.innerHTML = '<input/>'),
            a.firstChild.setAttribute('value', ''),
            '' === a.firstChild.getAttribute('value')
          )
        })) ||
        ka('value', function (a, b, c) {
          if (!c && 'input' === a.nodeName.toLowerCase()) return a.defaultValue
        }),
      ja(function (a) {
        return null == a.getAttribute('disabled')
      }) ||
        ka(J, function (a, b, c) {
          var d
          if (!c)
            return a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null
        }),
      ga
    )
  })(a)
  ;(r.find = x),
    (r.expr = x.selectors),
    (r.expr[':'] = r.expr.pseudos),
    (r.uniqueSort = r.unique = x.uniqueSort),
    (r.text = x.getText),
    (r.isXMLDoc = x.isXML),
    (r.contains = x.contains),
    (r.escapeSelector = x.escape)
  var y = function (a, b, c) {
      var d = [],
        e = void 0 !== c
      while ((a = a[b]) && 9 !== a.nodeType)
        if (1 === a.nodeType) {
          if (e && r(a).is(c)) break
          d.push(a)
        }
      return d
    },
    z = function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a)
      return c
    },
    A = r.expr.match.needsContext,
    B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    C = /^.[^:#\[\.,]*$/
  function D (a, b, c) {
    return r.isFunction(b)
      ? r.grep(a, function (a, d) {
          return !!b.call(a, d, a) !== c
        })
      : b.nodeType
      ? r.grep(a, function (a) {
          return (a === b) !== c
        })
      : 'string' != typeof b
      ? r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c
        })
      : C.test(b)
      ? r.filter(b, a, c)
      : ((b = r.filter(b, a)),
        r.grep(a, function (a) {
          return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
  }
  ;(r.filter = function (a, b, c) {
    var d = b[0]
    return (
      c && (a = ':not(' + a + ')'),
      1 === b.length && 1 === d.nodeType
        ? r.find.matchesSelector(d, a)
          ? [d]
          : []
        : r.find.matches(
            a,
            r.grep(b, function (a) {
              return 1 === a.nodeType
            })
          )
    )
  }),
    r.fn.extend({
      find: function (a) {
        var b,
          c,
          d = this.length,
          e = this
        if ('string' != typeof a)
          return this.pushStack(
            r(a).filter(function () {
              for (b = 0; b < d; b++) if (r.contains(e[b], this)) return !0
            })
          )
        for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c)
        return d > 1 ? r.uniqueSort(c) : c
      },
      filter: function (a) {
        return this.pushStack(D(this, a || [], !1))
      },
      not: function (a) {
        return this.pushStack(D(this, a || [], !0))
      },
      is: function (a) {
        return !!D(this, 'string' == typeof a && A.test(a) ? r(a) : a || [], !1)
          .length
      }
    })
  var E,
    F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    G = (r.fn.init = function (a, b, c) {
      var e, f
      if (!a) return this
      if (((c = c || E), 'string' == typeof a)) {
        if (
          ((e =
            '<' === a[0] && '>' === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : F.exec(a)),
          !e || (!e[1] && b))
        )
          return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a)
        if (e[1]) {
          if (
            ((b = b instanceof r ? b[0] : b),
            r.merge(
              this,
              r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)
            ),
            B.test(e[1]) && r.isPlainObject(b))
          )
            for (e in b)
              r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e])
          return this
        }
        return (
          (f = d.getElementById(e[2])),
          f && ((this[0] = f), (this.length = 1)),
          this
        )
      }
      return a.nodeType
        ? ((this[0] = a), (this.length = 1), this)
        : r.isFunction(a)
        ? void 0 !== c.ready
          ? c.ready(a)
          : a(r)
        : r.makeArray(a, this)
    })
  ;(G.prototype = r.fn), (E = r(d))
  var H = /^(?:parents|prev(?:Until|All))/,
    I = { children: !0, contents: !0, next: !0, prev: !0 }
  r.fn.extend({
    has: function (a) {
      var b = r(a, this),
        c = b.length
      return this.filter(function () {
        for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return !0
      })
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = 'string' != typeof a && r(a)
      if (!A.test(a))
        for (; d < e; d++)
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && r.find.matchesSelector(c, a))
            ) {
              f.push(c)
              break
            }
      return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
    },
    index: function (a) {
      return a
        ? 'string' == typeof a
          ? i.call(r(a), this[0])
          : i.call(this, a.jquery ? a[0] : a)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1
    },
    add: function (a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  })
  function J (a, b) {
    while ((a = a[b]) && 1 !== a.nodeType);
    return a
  }
  r.each(
    {
      parent: function (a) {
        var b = a.parentNode
        return b && 11 !== b.nodeType ? b : null
      },
      parents: function (a) {
        return y(a, 'parentNode')
      },
      parentsUntil: function (a, b, c) {
        return y(a, 'parentNode', c)
      },
      next: function (a) {
        return J(a, 'nextSibling')
      },
      prev: function (a) {
        return J(a, 'previousSibling')
      },
      nextAll: function (a) {
        return y(a, 'nextSibling')
      },
      prevAll: function (a) {
        return y(a, 'previousSibling')
      },
      nextUntil: function (a, b, c) {
        return y(a, 'nextSibling', c)
      },
      prevUntil: function (a, b, c) {
        return y(a, 'previousSibling', c)
      },
      siblings: function (a) {
        return z((a.parentNode || {}).firstChild, a)
      },
      children: function (a) {
        return z(a.firstChild)
      },
      contents: function (a) {
        return a.contentDocument || r.merge([], a.childNodes)
      }
    },
    function (a, b) {
      r.fn[a] = function (c, d) {
        var e = r.map(this, b, c)
        return (
          'Until' !== a.slice(-5) && (d = c),
          d && 'string' == typeof d && (e = r.filter(d, e)),
          this.length > 1 &&
            (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()),
          this.pushStack(e)
        )
      }
    }
  )
  var K = /[^\x20\t\r\n\f]+/g
  function L (a) {
    var b = {}
    return (
      r.each(a.match(K) || [], function (a, c) {
        b[c] = !0
      }),
      b
    )
  }
  r.Callbacks = function (a) {
    a = 'string' == typeof a ? L(a) : r.extend({}, a)
    var b,
      c,
      d,
      e,
      f = [],
      g = [],
      h = -1,
      i = function () {
        for (e = a.once, d = b = !0; g.length; h = -1) {
          c = g.shift()
          while (++h < f.length)
            f[h].apply(c[0], c[1]) === !1 &&
              a.stopOnFalse &&
              ((h = f.length), (c = !1))
        }
        a.memory || (c = !1), (b = !1), e && (f = c ? [] : '')
      },
      j = {
        add: function () {
          return (
            f &&
              (c && !b && ((h = f.length - 1), g.push(c)),
              (function d (b) {
                r.each(b, function (b, c) {
                  r.isFunction(c)
                    ? (a.unique && j.has(c)) || f.push(c)
                    : c && c.length && 'string' !== r.type(c) && d(c)
                })
              })(arguments),
              c && !b && i()),
            this
          )
        },
        remove: function () {
          return (
            r.each(arguments, function (a, b) {
              var c
              while ((c = r.inArray(b, f, c)) > -1)
                f.splice(c, 1), c <= h && h--
            }),
            this
          )
        },
        has: function (a) {
          return a ? r.inArray(a, f) > -1 : f.length > 0
        },
        empty: function () {
          return f && (f = []), this
        },
        disable: function () {
          return (e = g = []), (f = c = ''), this
        },
        disabled: function () {
          return !f
        },
        lock: function () {
          return (e = g = []), c || b || (f = c = ''), this
        },
        locked: function () {
          return !!e
        },
        fireWith: function (a, c) {
          return (
            e ||
              ((c = c || []),
              (c = [a, c.slice ? c.slice() : c]),
              g.push(c),
              b || i()),
            this
          )
        },
        fire: function () {
          return j.fireWith(this, arguments), this
        },
        fired: function () {
          return !!d
        }
      }
    return j
  }
  function M (a) {
    return a
  }
  function N (a) {
    throw a
  }
  function O (a, b, c) {
    var d
    try {
      a && r.isFunction((d = a.promise))
        ? d.call(a).done(b).fail(c)
        : a && r.isFunction((d = a.then))
        ? d.call(a, b, c)
        : b.call(void 0, a)
    } catch (a) {
      c.call(void 0, a)
    }
  }
  r.extend({
    Deferred: function (b) {
      var c = [
          [
            'notify',
            'progress',
            r.Callbacks('memory'),
            r.Callbacks('memory'),
            2
          ],
          [
            'resolve',
            'done',
            r.Callbacks('once memory'),
            r.Callbacks('once memory'),
            0,
            'resolved'
          ],
          [
            'reject',
            'fail',
            r.Callbacks('once memory'),
            r.Callbacks('once memory'),
            1,
            'rejected'
          ]
        ],
        d = 'pending',
        e = {
          state: function () {
            return d
          },
          always: function () {
            return f.done(arguments).fail(arguments), this
          },
          catch: function (a) {
            return e.then(null, a)
          },
          pipe: function () {
            var a = arguments
            return r
              .Deferred(function (b) {
                r.each(c, function (c, d) {
                  var e = r.isFunction(a[d[4]]) && a[d[4]]
                  f[d[1]](function () {
                    var a = e && e.apply(this, arguments)
                    a && r.isFunction(a.promise)
                      ? a
                          .promise()
                          .progress(b.notify)
                          .done(b.resolve)
                          .fail(b.reject)
                      : b[d[0] + 'With'](this, e ? [a] : arguments)
                  })
                }),
                  (a = null)
              })
              .promise()
          },
          then: function (b, d, e) {
            var f = 0
            function g (b, c, d, e) {
              return function () {
                var h = this,
                  i = arguments,
                  j = function () {
                    var a, j
                    if (!(b < f)) {
                      if (((a = d.apply(h, i)), a === c.promise()))
                        throw new TypeError('Thenable self-resolution')
                      ;(j =
                        a &&
                        ('object' == typeof a || 'function' == typeof a) &&
                        a.then),
                        r.isFunction(j)
                          ? e
                            ? j.call(a, g(f, c, M, e), g(f, c, N, e))
                            : (f++,
                              j.call(
                                a,
                                g(f, c, M, e),
                                g(f, c, N, e),
                                g(f, c, M, c.notifyWith)
                              ))
                          : (d !== M && ((h = void 0), (i = [a])),
                            (e || c.resolveWith)(h, i))
                    }
                  },
                  k = e
                    ? j
                    : function () {
                        try {
                          j()
                        } catch (a) {
                          r.Deferred.exceptionHook &&
                            r.Deferred.exceptionHook(a, k.stackTrace),
                            b + 1 >= f &&
                              (d !== N && ((h = void 0), (i = [a])),
                              c.rejectWith(h, i))
                        }
                      }
                b
                  ? k()
                  : (r.Deferred.getStackHook &&
                      (k.stackTrace = r.Deferred.getStackHook()),
                    a.setTimeout(k))
              }
            }
            return r
              .Deferred(function (a) {
                c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)),
                  c[1][3].add(g(0, a, r.isFunction(b) ? b : M)),
                  c[2][3].add(g(0, a, r.isFunction(d) ? d : N))
              })
              .promise()
          },
          promise: function (a) {
            return null != a ? r.extend(a, e) : e
          }
        },
        f = {}
      return (
        r.each(c, function (a, b) {
          var g = b[2],
            h = b[5]
          ;(e[b[1]] = g.add),
            h &&
              g.add(
                function () {
                  d = h
                },
                c[3 - a][2].disable,
                c[0][2].lock
              ),
            g.add(b[3].fire),
            (f[b[0]] = function () {
              return (
                f[b[0] + 'With'](this === f ? void 0 : this, arguments), this
              )
            }),
            (f[b[0] + 'With'] = g.fireWith)
        }),
        e.promise(f),
        b && b.call(f, f),
        f
      )
    },
    when: function (a) {
      var b = arguments.length,
        c = b,
        d = Array(c),
        e = f.call(arguments),
        g = r.Deferred(),
        h = function (a) {
          return function (c) {
            ;(d[a] = this),
              (e[a] = arguments.length > 1 ? f.call(arguments) : c),
              --b || g.resolveWith(d, e)
          }
        }
      if (
        b <= 1 &&
        (O(a, g.done(h(c)).resolve, g.reject),
        'pending' === g.state() || r.isFunction(e[c] && e[c].then))
      )
        return g.then()
      while (c--) O(e[c], h(c), g.reject)
      return g.promise()
    }
  })
  var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
  ;(r.Deferred.exceptionHook = function (b, c) {
    a.console &&
      a.console.warn &&
      b &&
      P.test(b.name) &&
      a.console.warn('jQuery.Deferred exception: ' + b.message, b.stack, c)
  }),
    (r.readyException = function (b) {
      a.setTimeout(function () {
        throw b
      })
    })
  var Q = r.Deferred()
  ;(r.fn.ready = function (a) {
    return (
      Q.then(a)['catch'](function (a) {
        r.readyException(a)
      }),
      this
    )
  }),
    r.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? r.readyWait++ : r.ready(!0)
      },
      ready: function (a) {
        ;(a === !0 ? --r.readyWait : r.isReady) ||
          ((r.isReady = !0),
          (a !== !0 && --r.readyWait > 0) || Q.resolveWith(d, [r]))
      }
    }),
    (r.ready.then = Q.then)
  function R () {
    d.removeEventListener('DOMContentLoaded', R),
      a.removeEventListener('load', R),
      r.ready()
  }
  'complete' === d.readyState ||
  ('loading' !== d.readyState && !d.documentElement.doScroll)
    ? a.setTimeout(r.ready)
    : (d.addEventListener('DOMContentLoaded', R), a.addEventListener('load', R))
  var S = function (a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c
      if ('object' === r.type(c)) {
        e = !0
        for (h in c) S(a, b, h, c[h], !0, f, g)
      } else if (
        void 0 !== d &&
        ((e = !0),
        r.isFunction(d) || (g = !0),
        j &&
          (g
            ? (b.call(a, d), (b = null))
            : ((j = b),
              (b = function (a, b, c) {
                return j.call(r(a), c)
              }))),
        b)
      )
        for (; h < i; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    T = function (a) {
      return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }
  function U () {
    this.expando = r.expando + U.uid++
  }
  ;(U.uid = 1),
    (U.prototype = {
      cache: function (a) {
        var b = a[this.expando]
        return (
          b ||
            ((b = {}),
            T(a) &&
              (a.nodeType
                ? (a[this.expando] = b)
                : Object.defineProperty(a, this.expando, {
                    value: b,
                    configurable: !0
                  }))),
          b
        )
      },
      set: function (a, b, c) {
        var d,
          e = this.cache(a)
        if ('string' == typeof b) e[r.camelCase(b)] = c
        else for (d in b) e[r.camelCase(d)] = b[d]
        return e
      },
      get: function (a, b) {
        return void 0 === b
          ? this.cache(a)
          : a[this.expando] && a[this.expando][r.camelCase(b)]
      },
      access: function (a, b, c) {
        return void 0 === b || (b && 'string' == typeof b && void 0 === c)
          ? this.get(a, b)
          : (this.set(a, b, c), void 0 !== c ? c : b)
      },
      remove: function (a, b) {
        var c,
          d = a[this.expando]
        if (void 0 !== d) {
          if (void 0 !== b) {
            r.isArray(b)
              ? (b = b.map(r.camelCase))
              : ((b = r.camelCase(b)), (b = b in d ? [b] : b.match(K) || [])),
              (c = b.length)
            while (c--) delete d[b[c]]
          }
          ;(void 0 === b || r.isEmptyObject(d)) &&
            (a.nodeType ? (a[this.expando] = void 0) : delete a[this.expando])
        }
      },
      hasData: function (a) {
        var b = a[this.expando]
        return void 0 !== b && !r.isEmptyObject(b)
      }
    })
  var V = new U(),
    W = new U(),
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Y = /[A-Z]/g
  function Z (a) {
    return (
      'true' === a ||
      ('false' !== a &&
        ('null' === a
          ? null
          : a === +a + ''
          ? +a
          : X.test(a)
          ? JSON.parse(a)
          : a))
    )
  }
  function $ (a, b, c) {
    var d
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = 'data-' + b.replace(Y, '-$&').toLowerCase()),
        (c = a.getAttribute(d)),
        'string' == typeof c)
      ) {
        try {
          c = Z(c)
        } catch (e) {}
        W.set(a, b, c)
      } else c = void 0
    return c
  }
  r.extend({
    hasData: function (a) {
      return W.hasData(a) || V.hasData(a)
    },
    data: function (a, b, c) {
      return W.access(a, b, c)
    },
    removeData: function (a, b) {
      W.remove(a, b)
    },
    _data: function (a, b, c) {
      return V.access(a, b, c)
    },
    _removeData: function (a, b) {
      V.remove(a, b)
    }
  }),
    r.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes
        if (void 0 === a) {
          if (
            this.length &&
            ((e = W.get(f)), 1 === f.nodeType && !V.get(f, 'hasDataAttrs'))
          ) {
            c = g.length
            while (c--)
              g[c] &&
                ((d = g[c].name),
                0 === d.indexOf('data-') &&
                  ((d = r.camelCase(d.slice(5))), $(f, d, e[d])))
            V.set(f, 'hasDataAttrs', !0)
          }
          return e
        }
        return 'object' == typeof a
          ? this.each(function () {
              W.set(this, a)
            })
          : S(
              this,
              function (b) {
                var c
                if (f && void 0 === b) {
                  if (((c = W.get(f, a)), void 0 !== c)) return c
                  if (((c = $(f, a)), void 0 !== c)) return c
                } else
                  this.each(function () {
                    W.set(this, a, b)
                  })
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            )
      },
      removeData: function (a) {
        return this.each(function () {
          W.remove(this, a)
        })
      }
    }),
    r.extend({
      queue: function (a, b, c) {
        var d
        if (a)
          return (
            (b = (b || 'fx') + 'queue'),
            (d = V.get(a, b)),
            c &&
              (!d || r.isArray(c)
                ? (d = V.access(a, b, r.makeArray(c)))
                : d.push(c)),
            d || []
          )
      },
      dequeue: function (a, b) {
        b = b || 'fx'
        var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function () {
            r.dequeue(a, b)
          }
        'inprogress' === e && ((e = c.shift()), d--),
          e &&
            ('fx' === b && c.unshift('inprogress'),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire()
      },
      _queueHooks: function (a, b) {
        var c = b + 'queueHooks'
        return (
          V.get(a, c) ||
          V.access(a, c, {
            empty: r.Callbacks('once memory').add(function () {
              V.remove(a, [b + 'queue', c])
            })
          })
        )
      }
    }),
    r.fn.extend({
      queue: function (a, b) {
        var c = 2
        return (
          'string' != typeof a && ((b = a), (a = 'fx'), c--),
          arguments.length < c
            ? r.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = r.queue(this, a, b)
                r._queueHooks(this, a),
                  'fx' === a && 'inprogress' !== c[0] && r.dequeue(this, a)
              })
        )
      },
      dequeue: function (a) {
        return this.each(function () {
          r.dequeue(this, a)
        })
      },
      clearQueue: function (a) {
        return this.queue(a || 'fx', [])
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f])
          }
        'string' != typeof a && ((b = a), (a = void 0)), (a = a || 'fx')
        while (g--)
          (c = V.get(f[g], a + 'queueHooks')),
            c && c.empty && (d++, c.empty.add(h))
        return h(), e.promise(b)
      }
    })
  var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    aa = new RegExp('^(?:([+-])=|)(' + _ + ')([a-z%]*)$', 'i'),
    ba = ['Top', 'Right', 'Bottom', 'Left'],
    ca = function (a, b) {
      return (
        (a = b || a),
        'none' === a.style.display ||
          ('' === a.style.display &&
            r.contains(a.ownerDocument, a) &&
            'none' === r.css(a, 'display'))
      )
    },
    da = function (a, b, c, d) {
      var e,
        f,
        g = {}
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f])
      e = c.apply(a, d || [])
      for (f in b) a.style[f] = g[f]
      return e
    }
  function ea (a, b, c, d) {
    var e,
      f = 1,
      g = 20,
      h = d
        ? function () {
            return d.cur()
          }
        : function () {
            return r.css(a, b, '')
          },
      i = h(),
      j = (c && c[3]) || (r.cssNumber[b] ? '' : 'px'),
      k = (r.cssNumber[b] || ('px' !== j && +i)) && aa.exec(r.css(a, b))
    if (k && k[3] !== j) {
      ;(j = j || k[3]), (c = c || []), (k = +i || 1)
      do (f = f || '.5'), (k /= f), r.style(a, b, k + j)
      while (f !== (f = h() / i) && 1 !== f && --g)
    }
    return (
      c &&
        ((k = +k || +i || 0),
        (e = c[1] ? k + (c[1] + 1) * c[2] : +c[2]),
        d && ((d.unit = j), (d.start = k), (d.end = e))),
      e
    )
  }
  var fa = {}
  function ga (a) {
    var b,
      c = a.ownerDocument,
      d = a.nodeName,
      e = fa[d]
    return e
      ? e
      : ((b = c.body.appendChild(c.createElement(d))),
        (e = r.css(b, 'display')),
        b.parentNode.removeChild(b),
        'none' === e && (e = 'block'),
        (fa[d] = e),
        e)
  }
  function ha (a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++)
      (d = a[f]),
        d.style &&
          ((c = d.style.display),
          b
            ? ('none' === c &&
                ((e[f] = V.get(d, 'display') || null),
                e[f] || (d.style.display = '')),
              '' === d.style.display && ca(d) && (e[f] = ga(d)))
            : 'none' !== c && ((e[f] = 'none'), V.set(d, 'display', c)))
    for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f])
    return a
  }
  r.fn.extend({
    show: function () {
      return ha(this, !0)
    },
    hide: function () {
      return ha(this)
    },
    toggle: function (a) {
      return 'boolean' == typeof a
        ? a
          ? this.show()
          : this.hide()
        : this.each(function () {
            ca(this) ? r(this).show() : r(this).hide()
          })
    }
  })
  var ia = /^(?:checkbox|radio)$/i,
    ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    ka = /^$|\/(?:java|ecma)script/i,
    la = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      thead: [1, '<table>', '</table>'],
      col: [2, '<table><colgroup>', '</colgroup></table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      _default: [0, '', '']
    }
  ;(la.optgroup = la.option),
    (la.tbody = la.tfoot = la.colgroup = la.caption = la.thead),
    (la.th = la.td)
  function ma (a, b) {
    var c
    return (
      (c =
        'undefined' != typeof a.getElementsByTagName
          ? a.getElementsByTagName(b || '*')
          : 'undefined' != typeof a.querySelectorAll
          ? a.querySelectorAll(b || '*')
          : []),
      void 0 === b || (b && r.nodeName(a, b)) ? r.merge([a], c) : c
    )
  }
  function na (a, b) {
    for (var c = 0, d = a.length; c < d; c++)
      V.set(a[c], 'globalEval', !b || V.get(b[c], 'globalEval'))
  }
  var oa = /<|&#?\w+;/
  function pa (a, b, c, d, e) {
    for (
      var f,
        g,
        h,
        i,
        j,
        k,
        l = b.createDocumentFragment(),
        m = [],
        n = 0,
        o = a.length;
      n < o;
      n++
    )
      if (((f = a[n]), f || 0 === f))
        if ('object' === r.type(f)) r.merge(m, f.nodeType ? [f] : f)
        else if (oa.test(f)) {
          ;(g = g || l.appendChild(b.createElement('div'))),
            (h = (ja.exec(f) || ['', ''])[1].toLowerCase()),
            (i = la[h] || la._default),
            (g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2]),
            (k = i[0])
          while (k--) g = g.lastChild
          r.merge(m, g.childNodes), (g = l.firstChild), (g.textContent = '')
        } else m.push(b.createTextNode(f))
    ;(l.textContent = ''), (n = 0)
    while ((f = m[n++]))
      if (d && r.inArray(f, d) > -1) e && e.push(f)
      else if (
        ((j = r.contains(f.ownerDocument, f)),
        (g = ma(l.appendChild(f), 'script')),
        j && na(g),
        c)
      ) {
        k = 0
        while ((f = g[k++])) ka.test(f.type || '') && c.push(f)
      }
    return l
  }
  !(function () {
    var a = d.createDocumentFragment(),
      b = a.appendChild(d.createElement('div')),
      c = d.createElement('input')
    c.setAttribute('type', 'radio'),
      c.setAttribute('checked', 'checked'),
      c.setAttribute('name', 't'),
      b.appendChild(c),
      (o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = '<textarea>x</textarea>'),
      (o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue)
  })()
  var qa = d.documentElement,
    ra = /^key/,
    sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ta = /^([^.]*)(?:\.(.+)|)/
  function ua () {
    return !0
  }
  function va () {
    return !1
  }
  function wa () {
    try {
      return d.activeElement
    } catch (a) {}
  }
  function xa (a, b, c, d, e, f) {
    var g, h
    if ('object' == typeof b) {
      'string' != typeof c && ((d = d || c), (c = void 0))
      for (h in b) xa(a, h, c, d, b[h], f)
      return a
    }
    if (
      (null == d && null == e
        ? ((e = c), (d = c = void 0))
        : null == e &&
          ('string' == typeof c
            ? ((e = d), (d = void 0))
            : ((e = d), (d = c), (c = void 0))),
      e === !1)
    )
      e = va
    else if (!e) return a
    return (
      1 === f &&
        ((g = e),
        (e = function (a) {
          return r().off(a), g.apply(this, arguments)
        }),
        (e.guid = g.guid || (g.guid = r.guid++))),
      a.each(function () {
        r.event.add(this, b, e, d, c)
      })
    )
  }
  ;(r.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = V.get(a)
      if (q) {
        c.handler && ((f = c), (c = f.handler), (e = f.selector)),
          e && r.find.matchesSelector(qa, e),
          c.guid || (c.guid = r.guid++),
          (i = q.events) || (i = q.events = {}),
          (g = q.handle) ||
            (g = q.handle =
              function (b) {
                return 'undefined' != typeof r && r.event.triggered !== b.type
                  ? r.event.dispatch.apply(a, arguments)
                  : void 0
              }),
          (b = (b || '').match(K) || ['']),
          (j = b.length)
        while (j--)
          (h = ta.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || '').split('.').sort()),
            n &&
              ((l = r.event.special[n] || {}),
              (n = (e ? l.delegateType : l.bindType) || n),
              (l = r.event.special[n] || {}),
              (k = r.extend(
                {
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && r.expr.match.needsContext.test(e),
                  namespace: o.join('.')
                },
                f
              )),
              (m = i[n]) ||
                ((m = i[n] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(n, g))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (r.event.global[n] = !0))
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = V.hasData(a) && V.get(a)
      if (q && (i = q.events)) {
        ;(b = (b || '').match(K) || ['']), (j = b.length)
        while (j--)
          if (
            ((h = ta.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || '').split('.').sort()),
            n)
          ) {
            ;(l = r.event.special[n] || {}),
              (n = (d ? l.delegateType : l.bindType) || n),
              (m = i[n] || []),
              (h =
                h[2] &&
                new RegExp('(^|\\.)' + o.join('\\.(?:.*\\.|)') + '(\\.|$)')),
              (g = f = m.length)
            while (f--)
              (k = m[f]),
                (!e && p !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ('**' !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k))
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                r.removeEvent(a, n, q.handle),
              delete i[n])
          } else for (n in i) r.event.remove(a, n + b[j], c, d, !0)
        r.isEmptyObject(i) && V.remove(a, 'handle events')
      }
    },
    dispatch: function (a) {
      var b = r.event.fix(a),
        c,
        d,
        e,
        f,
        g,
        h,
        i = new Array(arguments.length),
        j = (V.get(this, 'events') || {})[b.type] || [],
        k = r.event.special[b.type] || {}
      for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c]
      if (
        ((b.delegateTarget = this),
        !k.preDispatch || k.preDispatch.call(this, b) !== !1)
      ) {
        ;(h = r.event.handlers.call(this, b, j)), (c = 0)
        while ((f = h[c++]) && !b.isPropagationStopped()) {
          ;(b.currentTarget = f.elem), (d = 0)
          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped())
            (b.rnamespace && !b.rnamespace.test(g.namespace)) ||
              ((b.handleObj = g),
              (b.data = g.data),
              (e = (
                (r.event.special[g.origType] || {}).handle || g.handler
              ).apply(f.elem, i)),
              void 0 !== e &&
                (b.result = e) === !1 &&
                (b.preventDefault(), b.stopPropagation()))
        }
        return k.postDispatch && k.postDispatch.call(this, b), b.result
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g,
        h = [],
        i = b.delegateCount,
        j = a.target
      if (i && j.nodeType && !('click' === a.type && a.button >= 1))
        for (; j !== this; j = j.parentNode || this)
          if (1 === j.nodeType && ('click' !== a.type || j.disabled !== !0)) {
            for (f = [], g = {}, c = 0; c < i; c++)
              (d = b[c]),
                (e = d.selector + ' '),
                void 0 === g[e] &&
                  (g[e] = d.needsContext
                    ? r(e, this).index(j) > -1
                    : r.find(e, this, null, [j]).length),
                g[e] && f.push(d)
            f.length && h.push({ elem: j, handlers: f })
          }
      return (
        (j = this), i < b.length && h.push({ elem: j, handlers: b.slice(i) }), h
      )
    },
    addProp: function (a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b)
          ? function () {
              if (this.originalEvent) return b(this.originalEvent)
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[a]
            },
        set: function (b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b
          })
        }
      })
    },
    fix: function (a) {
      return a[r.expando] ? a : new r.Event(a)
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== wa() && this.focus) return this.focus(), !1
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          if (this === wa() && this.blur) return this.blur(), !1
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          if (
            'checkbox' === this.type &&
            this.click &&
            r.nodeName(this, 'input')
          )
            return this.click(), !1
        },
        _default: function (a) {
          return r.nodeName(a.target, 'a')
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result &&
            a.originalEvent &&
            (a.originalEvent.returnValue = a.result)
        }
      }
    }
  }),
    (r.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c)
    }),
    (r.Event = function (a, b) {
      return this instanceof r.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented && a.returnValue === !1)
                  ? ua
                  : va),
              (this.target =
                a.target && 3 === a.target.nodeType
                  ? a.target.parentNode
                  : a.target),
              (this.currentTarget = a.currentTarget),
              (this.relatedTarget = a.relatedTarget))
            : (this.type = a),
          b && r.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || r.now()),
          void (this[r.expando] = !0))
        : new r.Event(a, b)
    }),
    (r.Event.prototype = {
      constructor: r.Event,
      isDefaultPrevented: va,
      isPropagationStopped: va,
      isImmediatePropagationStopped: va,
      isSimulated: !1,
      preventDefault: function () {
        var a = this.originalEvent
        ;(this.isDefaultPrevented = ua),
          a && !this.isSimulated && a.preventDefault()
      },
      stopPropagation: function () {
        var a = this.originalEvent
        ;(this.isPropagationStopped = ua),
          a && !this.isSimulated && a.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var a = this.originalEvent
        ;(this.isImmediatePropagationStopped = ua),
          a && !this.isSimulated && a.stopImmediatePropagation(),
          this.stopPropagation()
      }
    }),
    r.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (a) {
          var b = a.button
          return null == a.which && ra.test(a.type)
            ? null != a.charCode
              ? a.charCode
              : a.keyCode
            : !a.which && void 0 !== b && sa.test(a.type)
            ? 1 & b
              ? 1
              : 2 & b
              ? 3
              : 4 & b
              ? 2
              : 0
            : a.which
        }
      },
      r.event.addProp
    ),
    r.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout'
      },
      function (a, b) {
        r.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj
            return (
              (e && (e === d || r.contains(d, e))) ||
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            )
          }
        }
      }
    ),
    r.fn.extend({
      on: function (a, b, c, d) {
        return xa(this, a, b, c, d)
      },
      one: function (a, b, c, d) {
        return xa(this, a, b, c, d, 1)
      },
      off: function (a, b, c) {
        var d, e
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            r(a.delegateTarget).off(
              d.namespace ? d.origType + '.' + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          )
        if ('object' == typeof a) {
          for (e in a) this.off(e, b, a[e])
          return this
        }
        return (
          (b !== !1 && 'function' != typeof b) || ((c = b), (b = void 0)),
          c === !1 && (c = va),
          this.each(function () {
            r.event.remove(this, a, c, b)
          })
        )
      }
    })
  var ya =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    za = /<script|<style|<link/i,
    Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ba = /^true\/(.*)/,
    Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
  function Da (a, b) {
    return r.nodeName(a, 'table') &&
      r.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr')
      ? a.getElementsByTagName('tbody')[0] || a
      : a
  }
  function Ea (a) {
    return (a.type = (null !== a.getAttribute('type')) + '/' + a.type), a
  }
  function Fa (a) {
    var b = Ba.exec(a.type)
    return b ? (a.type = b[1]) : a.removeAttribute('type'), a
  }
  function Ga (a, b) {
    var c, d, e, f, g, h, i, j
    if (1 === b.nodeType) {
      if (
        V.hasData(a) &&
        ((f = V.access(a)), (g = V.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {})
        for (e in j)
          for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
      }
      W.hasData(a) && ((h = W.access(a)), (i = r.extend({}, h)), W.set(b, i))
    }
  }
  function Ha (a, b) {
    var c = b.nodeName.toLowerCase()
    'input' === c && ia.test(a.type)
      ? (b.checked = a.checked)
      : ('input' !== c && 'textarea' !== c) || (b.defaultValue = a.defaultValue)
  }
  function Ia (a, b, c, d) {
    b = g.apply([], b)
    var e,
      f,
      h,
      i,
      j,
      k,
      l = 0,
      m = a.length,
      n = m - 1,
      q = b[0],
      s = r.isFunction(q)
    if (s || (m > 1 && 'string' == typeof q && !o.checkClone && Aa.test(q)))
      return a.each(function (e) {
        var f = a.eq(e)
        s && (b[0] = q.call(this, e, f.html())), Ia(f, b, c, d)
      })
    if (
      m &&
      ((e = pa(b, a[0].ownerDocument, !1, a, d)),
      (f = e.firstChild),
      1 === e.childNodes.length && (e = f),
      f || d)
    ) {
      for (h = r.map(ma(e, 'script'), Ea), i = h.length; l < m; l++)
        (j = e),
          l !== n &&
            ((j = r.clone(j, !0, !0)), i && r.merge(h, ma(j, 'script'))),
          c.call(a[l], j, l)
      if (i)
        for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++)
          (j = h[l]),
            ka.test(j.type || '') &&
              !V.access(j, 'globalEval') &&
              r.contains(k, j) &&
              (j.src
                ? r._evalUrl && r._evalUrl(j.src)
                : p(j.textContent.replace(Ca, ''), k))
    }
    return a
  }
  function Ja (a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++)
      c || 1 !== d.nodeType || r.cleanData(ma(d)),
        d.parentNode &&
          (c && r.contains(d.ownerDocument, d) && na(ma(d, 'script')),
          d.parentNode.removeChild(d))
    return a
  }
  r.extend({
    htmlPrefilter: function (a) {
      return a.replace(ya, '<$1></$2>')
    },
    clone: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h = a.cloneNode(!0),
        i = r.contains(a.ownerDocument, a)
      if (
        !(
          o.noCloneChecked ||
          (1 !== a.nodeType && 11 !== a.nodeType) ||
          r.isXMLDoc(a)
        )
      )
        for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++)
          Ha(f[d], g[d])
      if (b)
        if (c)
          for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++)
            Ga(f[d], g[d])
        else Ga(a, h)
      return (
        (g = ma(h, 'script')), g.length > 0 && na(g, !i && ma(a, 'script')), h
      )
    },
    cleanData: function (a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++)
        if (T(c)) {
          if ((b = c[V.expando])) {
            if (b.events)
              for (d in b.events)
                e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle)
            c[V.expando] = void 0
          }
          c[W.expando] && (c[W.expando] = void 0)
        }
    }
  }),
    r.fn.extend({
      detach: function (a) {
        return Ja(this, a, !0)
      },
      remove: function (a) {
        return Ja(this, a)
      },
      text: function (a) {
        return S(
          this,
          function (a) {
            return void 0 === a
              ? r.text(this)
              : this.empty().each(function () {
                  ;(1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = a)
                })
          },
          null,
          a,
          arguments.length
        )
      },
      append: function () {
        return Ia(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Da(this, a)
            b.appendChild(a)
          }
        })
      },
      prepend: function () {
        return Ia(this, arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = Da(this, a)
            b.insertBefore(a, b.firstChild)
          }
        })
      },
      before: function () {
        return Ia(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this)
        })
      },
      after: function () {
        return Ia(this, arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (r.cleanData(ma(a, !1)), (a.textContent = ''))
        return this
      },
      clone: function (a, b) {
        return (
          (a = null != a && a),
          (b = null == b ? a : b),
          this.map(function () {
            return r.clone(this, a, b)
          })
        )
      },
      html: function (a) {
        return S(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML
            if (
              'string' == typeof a &&
              !za.test(a) &&
              !la[(ja.exec(a) || ['', ''])[1].toLowerCase()]
            ) {
              a = r.htmlPrefilter(a)
              try {
                for (; c < d; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (r.cleanData(ma(b, !1)), (b.innerHTML = a))
                b = 0
              } catch (e) {}
            }
            b && this.empty().append(a)
          },
          null,
          a,
          arguments.length
        )
      },
      replaceWith: function () {
        var a = []
        return Ia(
          this,
          arguments,
          function (b) {
            var c = this.parentNode
            r.inArray(this, a) < 0 &&
              (r.cleanData(ma(this)), c && c.replaceChild(b, this))
          },
          a
        )
      }
    }),
    r.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith'
      },
      function (a, b) {
        r.fn[a] = function (a) {
          for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++)
            (c = g === f ? this : this.clone(!0)),
              r(e[g])[b](c),
              h.apply(d, c.get())
          return this.pushStack(d)
        }
      }
    )
  var Ka = /^margin/,
    La = new RegExp('^(' + _ + ')(?!px)[a-z%]+$', 'i'),
    Ma = function (b) {
      var c = b.ownerDocument.defaultView
      return (c && c.opener) || (c = a), c.getComputedStyle(b)
    }
  !(function () {
    function b () {
      if (i) {
        ;(i.style.cssText =
          'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%'),
          (i.innerHTML = ''),
          qa.appendChild(h)
        var b = a.getComputedStyle(i)
        ;(c = '1%' !== b.top),
          (g = '2px' === b.marginLeft),
          (e = '4px' === b.width),
          (i.style.marginRight = '50%'),
          (f = '4px' === b.marginRight),
          qa.removeChild(h),
          (i = null)
      }
    }
    var c,
      e,
      f,
      g,
      h = d.createElement('div'),
      i = d.createElement('div')
    i.style &&
      ((i.style.backgroundClip = 'content-box'),
      (i.cloneNode(!0).style.backgroundClip = ''),
      (o.clearCloneStyle = 'content-box' === i.style.backgroundClip),
      (h.style.cssText =
        'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
      h.appendChild(i),
      r.extend(o, {
        pixelPosition: function () {
          return b(), c
        },
        boxSizingReliable: function () {
          return b(), e
        },
        pixelMarginRight: function () {
          return b(), f
        },
        reliableMarginLeft: function () {
          return b(), g
        }
      }))
  })()
  function Na (a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style
    return (
      (c = c || Ma(a)),
      c &&
        ((g = c.getPropertyValue(b) || c[b]),
        '' !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)),
        !o.pixelMarginRight() &&
          La.test(g) &&
          Ka.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + '' : g
    )
  }
  function Oa (a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments)
      }
    }
  }
  var Pa = /^(none|table(?!-c[ea]).+)/,
    Qa = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ra = { letterSpacing: '0', fontWeight: '400' },
    Sa = ['Webkit', 'Moz', 'ms'],
    Ta = d.createElement('div').style
  function Ua (a) {
    if (a in Ta) return a
    var b = a[0].toUpperCase() + a.slice(1),
      c = Sa.length
    while (c--) if (((a = Sa[c] + b), a in Ta)) return a
  }
  function Va (a, b, c) {
    var d = aa.exec(b)
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || 'px') : b
  }
  function Wa (a, b, c, d, e) {
    var f,
      g = 0
    for (
      f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0;
      f < 4;
      f += 2
    )
      'margin' === c && (g += r.css(a, c + ba[f], !0, e)),
        d
          ? ('content' === c && (g -= r.css(a, 'padding' + ba[f], !0, e)),
            'margin' !== c &&
              (g -= r.css(a, 'border' + ba[f] + 'Width', !0, e)))
          : ((g += r.css(a, 'padding' + ba[f], !0, e)),
            'padding' !== c &&
              (g += r.css(a, 'border' + ba[f] + 'Width', !0, e)))
    return g
  }
  function Xa (a, b, c) {
    var d,
      e = !0,
      f = Ma(a),
      g = 'border-box' === r.css(a, 'boxSizing', !1, f)
    if (
      (a.getClientRects().length && (d = a.getBoundingClientRect()[b]),
      d <= 0 || null == d)
    ) {
      if (
        ((d = Na(a, b, f)),
        (d < 0 || null == d) && (d = a.style[b]),
        La.test(d))
      )
        return d
      ;(e = g && (o.boxSizingReliable() || d === a.style[b])),
        (d = parseFloat(d) || 0)
    }
    return d + Wa(a, b, c || (g ? 'border' : 'content'), e, f) + 'px'
  }
  r.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Na(a, 'opacity')
            return '' === c ? '1' : c
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: 'cssFloat' },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = r.camelCase(b),
          i = a.style
        return (
          (b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h)),
          (g = r.cssHooks[b] || r.cssHooks[h]),
          void 0 === c
            ? g && 'get' in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              'string' === f &&
                (e = aa.exec(c)) &&
                e[1] &&
                ((c = ea(a, b, e)), (f = 'number')),
              null != c &&
                c === c &&
                ('number' === f &&
                  (c += (e && e[3]) || (r.cssNumber[h] ? '' : 'px')),
                o.clearCloneStyle ||
                  '' !== c ||
                  0 !== b.indexOf('background') ||
                  (i[b] = 'inherit'),
                (g && 'set' in g && void 0 === (c = g.set(a, c, d))) ||
                  (i[b] = c)),
              void 0)
        )
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = r.camelCase(b)
      return (
        (b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h)),
        (g = r.cssHooks[b] || r.cssHooks[h]),
        g && 'get' in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = Na(a, b, d)),
        'normal' === e && b in Ra && (e = Ra[b]),
        '' === c || c
          ? ((f = parseFloat(e)), c === !0 || isFinite(f) ? f || 0 : e)
          : e
      )
    }
  }),
    r.each(['height', 'width'], function (a, b) {
      r.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return !Pa.test(r.css(a, 'display')) ||
              (a.getClientRects().length && a.getBoundingClientRect().width)
              ? Xa(a, b, d)
              : da(a, Qa, function () {
                  return Xa(a, b, d)
                })
        },
        set: function (a, c, d) {
          var e,
            f = d && Ma(a),
            g =
              d && Wa(a, b, d, 'border-box' === r.css(a, 'boxSizing', !1, f), f)
          return (
            g &&
              (e = aa.exec(c)) &&
              'px' !== (e[3] || 'px') &&
              ((a.style[b] = c), (c = r.css(a, b))),
            Va(a, c, g)
          )
        }
      }
    }),
    (r.cssHooks.marginLeft = Oa(o.reliableMarginLeft, function (a, b) {
      if (b)
        return (
          (parseFloat(Na(a, 'marginLeft')) ||
            a.getBoundingClientRect().left -
              da(a, { marginLeft: 0 }, function () {
                return a.getBoundingClientRect().left
              })) + 'px'
        )
    })),
    r.each({ margin: '', padding: '', border: 'Width' }, function (a, b) {
      ;(r.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = 'string' == typeof c ? c.split(' ') : [c];
            d < 4;
            d++
          )
            e[a + ba[d] + b] = f[d] || f[d - 2] || f[0]
          return e
        }
      }),
        Ka.test(a) || (r.cssHooks[a + b].set = Va)
    }),
    r.fn.extend({
      css: function (a, b) {
        return S(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0
            if (r.isArray(b)) {
              for (d = Ma(a), e = b.length; g < e; g++)
                f[b[g]] = r.css(a, b[g], !1, d)
              return f
            }
            return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
          },
          a,
          b,
          arguments.length > 1
        )
      }
    })
  function Ya (a, b, c, d, e) {
    return new Ya.prototype.init(a, b, c, d, e)
  }
  ;(r.Tween = Ya),
    (Ya.prototype = {
      constructor: Ya,
      init: function (a, b, c, d, e, f) {
        ;(this.elem = a),
          (this.prop = c),
          (this.easing = e || r.easing._default),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (r.cssNumber[c] ? '' : 'px'))
      },
      cur: function () {
        var a = Ya.propHooks[this.prop]
        return a && a.get ? a.get(this) : Ya.propHooks._default.get(this)
      },
      run: function (a) {
        var b,
          c = Ya.propHooks[this.prop]
        return (
          this.options.duration
            ? (this.pos = b =
                r.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : Ya.propHooks._default.set(this),
          this
        )
      }
    }),
    (Ya.prototype.init.prototype = Ya.prototype),
    (Ya.propHooks = {
      _default: {
        get: function (a) {
          var b
          return 1 !== a.elem.nodeType ||
            (null != a.elem[a.prop] && null == a.elem.style[a.prop])
            ? a.elem[a.prop]
            : ((b = r.css(a.elem, a.prop, '')), b && 'auto' !== b ? b : 0)
        },
        set: function (a) {
          r.fx.step[a.prop]
            ? r.fx.step[a.prop](a)
            : 1 !== a.elem.nodeType ||
              (null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop])
            ? (a.elem[a.prop] = a.now)
            : r.style(a.elem, a.prop, a.now + a.unit)
        }
      }
    }),
    (Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
      }),
    (r.easing = {
      linear: function (a) {
        return a
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2
      },
      _default: 'swing'
    }),
    (r.fx = Ya.prototype.init),
    (r.fx.step = {})
  var Za,
    $a,
    _a = /^(?:toggle|show|hide)$/,
    ab = /queueHooks$/
  function bb () {
    $a && (a.requestAnimationFrame(bb), r.fx.tick())
  }
  function cb () {
    return (
      a.setTimeout(function () {
        Za = void 0
      }),
      (Za = r.now())
    )
  }
  function db (a, b) {
    var c,
      d = 0,
      e = { height: a }
    for (b = b ? 1 : 0; d < 4; d += 2 - b)
      (c = ba[d]), (e['margin' + c] = e['padding' + c] = a)
    return b && (e.opacity = e.width = a), e
  }
  function eb (a, b, c) {
    for (
      var d,
        e = (hb.tweeners[b] || []).concat(hb.tweeners['*']),
        f = 0,
        g = e.length;
      f < g;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d
  }
  function fb (a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = 'width' in b || 'height' in b,
      m = this,
      n = {},
      o = a.style,
      p = a.nodeType && ca(a),
      q = V.get(a, 'fxshow')
    c.queue ||
      ((g = r._queueHooks(a, 'fx')),
      null == g.unqueued &&
        ((g.unqueued = 0),
        (h = g.empty.fire),
        (g.empty.fire = function () {
          g.unqueued || h()
        })),
      g.unqueued++,
      m.always(function () {
        m.always(function () {
          g.unqueued--, r.queue(a, 'fx').length || g.empty.fire()
        })
      }))
    for (d in b)
      if (((e = b[d]), _a.test(e))) {
        if (
          (delete b[d], (f = f || 'toggle' === e), e === (p ? 'hide' : 'show'))
        ) {
          if ('show' !== e || !q || void 0 === q[d]) continue
          p = !0
        }
        n[d] = (q && q[d]) || r.style(a, d)
      }
    if (((i = !r.isEmptyObject(b)), i || !r.isEmptyObject(n))) {
      l &&
        1 === a.nodeType &&
        ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
        (j = q && q.display),
        null == j && (j = V.get(a, 'display')),
        (k = r.css(a, 'display')),
        'none' === k &&
          (j
            ? (k = j)
            : (ha([a], !0),
              (j = a.style.display || j),
              (k = r.css(a, 'display')),
              ha([a]))),
        ('inline' === k || ('inline-block' === k && null != j)) &&
          'none' === r.css(a, 'float') &&
          (i ||
            (m.done(function () {
              o.display = j
            }),
            null == j && ((k = o.display), (j = 'none' === k ? '' : k))),
          (o.display = 'inline-block'))),
        c.overflow &&
          ((o.overflow = 'hidden'),
          m.always(function () {
            ;(o.overflow = c.overflow[0]),
              (o.overflowX = c.overflow[1]),
              (o.overflowY = c.overflow[2])
          })),
        (i = !1)
      for (d in n)
        i ||
          (q
            ? 'hidden' in q && (p = q.hidden)
            : (q = V.access(a, 'fxshow', { display: j })),
          f && (q.hidden = !p),
          p && ha([a], !0),
          m.done(function () {
            p || ha([a]), V.remove(a, 'fxshow')
            for (d in n) r.style(a, d, n[d])
          })),
          (i = eb(p ? q[d] : 0, d, m)),
          d in q || ((q[d] = i.start), p && ((i.end = i.start), (i.start = 0)))
    }
  }
  function gb (a, b) {
    var c, d, e, f, g
    for (c in a)
      if (
        ((d = r.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        r.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = r.cssHooks[d]),
        g && 'expand' in g)
      ) {
        ;(f = g.expand(f)), delete a[d]
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e))
      } else b[d] = e
  }
  function hb (a, b, c) {
    var d,
      e,
      f = 0,
      g = hb.prefilters.length,
      h = r.Deferred().always(function () {
        delete i.elem
      }),
      i = function () {
        if (e) return !1
        for (
          var b = Za || cb(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          g < i;
          g++
        )
          j.tweens[g].run(f)
        return (
          h.notifyWith(a, [j, f, c]),
          f < 1 && i ? c : (h.resolveWith(a, [j]), !1)
        )
      },
      j = h.promise({
        elem: a,
        props: r.extend({}, b),
        opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Za || cb(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = r.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          )
          return j.tweens.push(d), d
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0
          if (e) return this
          for (e = !0; c < d; c++) j.tweens[c].run(1)
          return (
            b
              ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b]))
              : h.rejectWith(a, [j, b]),
            this
          )
        }
      }),
      k = j.props
    for (gb(k, j.opts.specialEasing); f < g; f++)
      if ((d = hb.prefilters[f].call(j, a, k, j.opts)))
        return (
          r.isFunction(d.stop) &&
            (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
          d
        )
    return (
      r.map(k, eb, j),
      r.isFunction(j.opts.start) && j.opts.start.call(a, j),
      r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    )
  }
  ;(r.Animation = r.extend(hb, {
    tweeners: {
      '*': [
        function (a, b) {
          var c = this.createTween(a, b)
          return ea(c.elem, a, aa.exec(b), c), c
        }
      ]
    },
    tweener: function (a, b) {
      r.isFunction(a) ? ((b = a), (a = ['*'])) : (a = a.match(K))
      for (var c, d = 0, e = a.length; d < e; d++)
        (c = a[d]),
          (hb.tweeners[c] = hb.tweeners[c] || []),
          hb.tweeners[c].unshift(b)
    },
    prefilters: [fb],
    prefilter: function (a, b) {
      b ? hb.prefilters.unshift(a) : hb.prefilters.push(a)
    }
  })),
    (r.speed = function (a, b, c) {
      var e =
        a && 'object' == typeof a
          ? r.extend({}, a)
          : {
              complete: c || (!c && b) || (r.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !r.isFunction(b) && b)
            }
      return (
        r.fx.off || d.hidden
          ? (e.duration = 0)
          : 'number' != typeof e.duration &&
            (e.duration in r.fx.speeds
              ? (e.duration = r.fx.speeds[e.duration])
              : (e.duration = r.fx.speeds._default)),
        (null != e.queue && e.queue !== !0) || (e.queue = 'fx'),
        (e.old = e.complete),
        (e.complete = function () {
          r.isFunction(e.old) && e.old.call(this),
            e.queue && r.dequeue(this, e.queue)
        }),
        e
      )
    }),
    r.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(ca)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d)
      },
      animate: function (a, b, c, d) {
        var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function () {
            var b = hb(this, r.extend({}, a), f)
            ;(e || V.get(this, 'finish')) && b.stop(!0)
          }
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        )
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop
          delete a.stop, b(c)
        }
        return (
          'string' != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || 'fx', []),
          this.each(function () {
            var b = !0,
              e = null != a && a + 'queueHooks',
              f = r.timers,
              g = V.get(this)
            if (e) g[e] && g[e].stop && d(g[e])
            else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e])
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1))
            ;(!b && c) || r.dequeue(this, a)
          })
        )
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || 'fx'),
          this.each(function () {
            var b,
              c = V.get(this),
              d = c[a + 'queue'],
              e = c[a + 'queueHooks'],
              f = r.timers,
              g = d ? d.length : 0
            for (
              c.finish = !0,
                r.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1))
            for (b = 0; b < g; b++)
              d[b] && d[b].finish && d[b].finish.call(this)
            delete c.finish
          })
        )
      }
    }),
    r.each(['toggle', 'show', 'hide'], function (a, b) {
      var c = r.fn[b]
      r.fn[b] = function (a, d, e) {
        return null == a || 'boolean' == typeof a
          ? c.apply(this, arguments)
          : this.animate(db(b, !0), a, d, e)
      }
    }),
    r.each(
      {
        slideDown: db('show'),
        slideUp: db('hide'),
        slideToggle: db('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' }
      },
      function (a, b) {
        r.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d)
        }
      }
    ),
    (r.timers = []),
    (r.fx.tick = function () {
      var a,
        b = 0,
        c = r.timers
      for (Za = r.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1)
      c.length || r.fx.stop(), (Za = void 0)
    }),
    (r.fx.timer = function (a) {
      r.timers.push(a), a() ? r.fx.start() : r.timers.pop()
    }),
    (r.fx.interval = 13),
    (r.fx.start = function () {
      $a ||
        ($a = a.requestAnimationFrame
          ? a.requestAnimationFrame(bb)
          : a.setInterval(r.fx.tick, r.fx.interval))
    }),
    (r.fx.stop = function () {
      a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a),
        ($a = null)
    }),
    (r.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (r.fn.delay = function (b, c) {
      return (
        (b = r.fx ? r.fx.speeds[b] || b : b),
        (c = c || 'fx'),
        this.queue(c, function (c, d) {
          var e = a.setTimeout(c, b)
          d.stop = function () {
            a.clearTimeout(e)
          }
        })
      )
    }),
    (function () {
      var a = d.createElement('input'),
        b = d.createElement('select'),
        c = b.appendChild(d.createElement('option'))
      ;(a.type = 'checkbox'),
        (o.checkOn = '' !== a.value),
        (o.optSelected = c.selected),
        (a = d.createElement('input')),
        (a.value = 't'),
        (a.type = 'radio'),
        (o.radioValue = 't' === a.value)
    })()
  var ib,
    jb = r.expr.attrHandle
  r.fn.extend({
    attr: function (a, b) {
      return S(this, r.attr, a, b, arguments.length > 1)
    },
    removeAttr: function (a) {
      return this.each(function () {
        r.removeAttr(this, a)
      })
    }
  }),
    r.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType
        if (3 !== f && 8 !== f && 2 !== f)
          return 'undefined' == typeof a.getAttribute
            ? r.prop(a, b, c)
            : ((1 === f && r.isXMLDoc(a)) ||
                (e =
                  r.attrHooks[b.toLowerCase()] ||
                  (r.expr.match.bool.test(b) ? ib : void 0)),
              void 0 !== c
                ? null === c
                  ? void r.removeAttr(a, b)
                  : e && 'set' in e && void 0 !== (d = e.set(a, c, b))
                  ? d
                  : (a.setAttribute(b, c + ''), c)
                : e && 'get' in e && null !== (d = e.get(a, b))
                ? d
                : ((d = r.find.attr(a, b)), null == d ? void 0 : d))
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!o.radioValue && 'radio' === b && r.nodeName(a, 'input')) {
              var c = a.value
              return a.setAttribute('type', b), c && (a.value = c), b
            }
          }
        }
      },
      removeAttr: function (a, b) {
        var c,
          d = 0,
          e = b && b.match(K)
        if (e && 1 === a.nodeType) while ((c = e[d++])) a.removeAttribute(c)
      }
    }),
    (ib = {
      set: function (a, b, c) {
        return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c
      }
    }),
    r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = jb[b] || r.find.attr
      jb[b] = function (a, b, d) {
        var e,
          f,
          g = b.toLowerCase()
        return (
          d ||
            ((f = jb[g]),
            (jb[g] = e),
            (e = null != c(a, b, d) ? g : null),
            (jb[g] = f)),
          e
        )
      }
    })
  var kb = /^(?:input|select|textarea|button)$/i,
    lb = /^(?:a|area)$/i
  r.fn.extend({
    prop: function (a, b) {
      return S(this, r.prop, a, b, arguments.length > 1)
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[r.propFix[a] || a]
      })
    }
  }),
    r.extend({
      prop: function (a, b, c) {
        var d,
          e,
          f = a.nodeType
        if (3 !== f && 8 !== f && 2 !== f)
          return (
            (1 === f && r.isXMLDoc(a)) ||
              ((b = r.propFix[b] || b), (e = r.propHooks[b])),
            void 0 !== c
              ? e && 'set' in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && 'get' in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          )
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var b = r.find.attr(a, 'tabindex')
            return b
              ? parseInt(b, 10)
              : kb.test(a.nodeName) || (lb.test(a.nodeName) && a.href)
              ? 0
              : -1
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' }
    }),
    o.optSelected ||
      (r.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode
          return b && b.parentNode && b.parentNode.selectedIndex, null
        },
        set: function (a) {
          var b = a.parentNode
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
      }),
    r.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable'
      ],
      function () {
        r.propFix[this.toLowerCase()] = this
      }
    )
  function mb (a) {
    var b = a.match(K) || []
    return b.join(' ')
  }
  function nb (a) {
    return (a.getAttribute && a.getAttribute('class')) || ''
  }
  r.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).addClass(a.call(this, b, nb(this)))
        })
      if ('string' == typeof a && a) {
        b = a.match(K) || []
        while ((c = this[i++]))
          if (((e = nb(c)), (d = 1 === c.nodeType && ' ' + mb(e) + ' '))) {
            g = 0
            while ((f = b[g++])) d.indexOf(' ' + f + ' ') < 0 && (d += f + ' ')
            ;(h = mb(d)), e !== h && c.setAttribute('class', h)
          }
      }
      return this
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i = 0
      if (r.isFunction(a))
        return this.each(function (b) {
          r(this).removeClass(a.call(this, b, nb(this)))
        })
      if (!arguments.length) return this.attr('class', '')
      if ('string' == typeof a && a) {
        b = a.match(K) || []
        while ((c = this[i++]))
          if (((e = nb(c)), (d = 1 === c.nodeType && ' ' + mb(e) + ' '))) {
            g = 0
            while ((f = b[g++]))
              while (d.indexOf(' ' + f + ' ') > -1)
                d = d.replace(' ' + f + ' ', ' ')
            ;(h = mb(d)), e !== h && c.setAttribute('class', h)
          }
      }
      return this
    },
    toggleClass: function (a, b) {
      var c = typeof a
      return 'boolean' == typeof b && 'string' === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : r.isFunction(a)
        ? this.each(function (c) {
            r(this).toggleClass(a.call(this, c, nb(this), b), b)
          })
        : this.each(function () {
            var b, d, e, f
            if ('string' === c) {
              ;(d = 0), (e = r(this)), (f = a.match(K) || [])
              while ((b = f[d++]))
                e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
            } else (void 0 !== a && 'boolean' !== c) || ((b = nb(this)), b && V.set(this, '__className__', b), this.setAttribute && this.setAttribute('class', b || a === !1 ? '' : V.get(this, '__className__') || ''))
          })
    },
    hasClass: function (a) {
      var b,
        c,
        d = 0
      b = ' ' + a + ' '
      while ((c = this[d++]))
        if (1 === c.nodeType && (' ' + mb(nb(c)) + ' ').indexOf(b) > -1)
          return !0
      return !1
    }
  })
  var ob = /\r/g
  r.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0]
      {
        if (arguments.length)
          return (
            (d = r.isFunction(a)),
            this.each(function (c) {
              var e
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, r(this).val()) : a),
                null == e
                  ? (e = '')
                  : 'number' == typeof e
                  ? (e += '')
                  : r.isArray(e) &&
                    (e = r.map(e, function (a) {
                      return null == a ? '' : a + ''
                    })),
                (b =
                  r.valHooks[this.type] ||
                  r.valHooks[this.nodeName.toLowerCase()]),
                (b && 'set' in b && void 0 !== b.set(this, e, 'value')) ||
                  (this.value = e))
            })
          )
        if (e)
          return (
            (b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()]),
            b && 'get' in b && void 0 !== (c = b.get(e, 'value'))
              ? c
              : ((c = e.value),
                'string' == typeof c ? c.replace(ob, '') : null == c ? '' : c)
          )
      }
    }
  }),
    r.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = r.find.attr(a, 'value')
            return null != b ? b : mb(r.text(a))
          }
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = 'select-one' === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length
            for (d = f < 0 ? i : g ? f : 0; d < i; d++)
              if (
                ((c = e[d]),
                (c.selected || d === f) &&
                  !c.disabled &&
                  (!c.parentNode.disabled ||
                    !r.nodeName(c.parentNode, 'optgroup')))
              ) {
                if (((b = r(c).val()), g)) return b
                h.push(b)
              }
            return h
          },
          set: function (a, b) {
            var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length
            while (g--)
              (d = e[g]),
                (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) &&
                  (c = !0)
            return c || (a.selectedIndex = -1), f
          }
        }
      }
    }),
    r.each(['radio', 'checkbox'], function () {
      ;(r.valHooks[this] = {
        set: function (a, b) {
          if (r.isArray(b)) return (a.checked = r.inArray(r(a).val(), b) > -1)
        }
      }),
        o.checkOn ||
          (r.valHooks[this].get = function (a) {
            return null === a.getAttribute('value') ? 'on' : a.value
          })
    })
  var pb = /^(?:focusinfocus|focusoutblur)$/
  r.extend(r.event, {
    trigger: function (b, c, e, f) {
      var g,
        h,
        i,
        j,
        k,
        m,
        n,
        o = [e || d],
        p = l.call(b, 'type') ? b.type : b,
        q = l.call(b, 'namespace') ? b.namespace.split('.') : []
      if (
        ((h = i = e = e || d),
        3 !== e.nodeType &&
          8 !== e.nodeType &&
          !pb.test(p + r.event.triggered) &&
          (p.indexOf('.') > -1 &&
            ((q = p.split('.')), (p = q.shift()), q.sort()),
          (k = p.indexOf(':') < 0 && 'on' + p),
          (b = b[r.expando] ? b : new r.Event(p, 'object' == typeof b && b)),
          (b.isTrigger = f ? 2 : 3),
          (b.namespace = q.join('.')),
          (b.rnamespace = b.namespace
            ? new RegExp('(^|\\.)' + q.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (b.result = void 0),
          b.target || (b.target = e),
          (c = null == c ? [b] : r.makeArray(c, [b])),
          (n = r.event.special[p] || {}),
          f || !n.trigger || n.trigger.apply(e, c) !== !1))
      ) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (
            j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode);
            h;
            h = h.parentNode
          )
            o.push(h), (i = h)
          i === (e.ownerDocument || d) &&
            o.push(i.defaultView || i.parentWindow || a)
        }
        g = 0
        while ((h = o[g++]) && !b.isPropagationStopped())
          (b.type = g > 1 ? j : n.bindType || p),
            (m = (V.get(h, 'events') || {})[b.type] && V.get(h, 'handle')),
            m && m.apply(h, c),
            (m = k && h[k]),
            m &&
              m.apply &&
              T(h) &&
              ((b.result = m.apply(h, c)),
              b.result === !1 && b.preventDefault())
        return (
          (b.type = p),
          f ||
            b.isDefaultPrevented() ||
            (n._default && n._default.apply(o.pop(), c) !== !1) ||
            !T(e) ||
            (k &&
              r.isFunction(e[p]) &&
              !r.isWindow(e) &&
              ((i = e[k]),
              i && (e[k] = null),
              (r.event.triggered = p),
              e[p](),
              (r.event.triggered = void 0),
              i && (e[k] = i))),
          b.result
        )
      }
    },
    simulate: function (a, b, c) {
      var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 })
      r.event.trigger(d, null, b)
    }
  }),
    r.fn.extend({
      trigger: function (a, b) {
        return this.each(function () {
          r.event.trigger(a, b, this)
        })
      },
      triggerHandler: function (a, b) {
        var c = this[0]
        if (c) return r.event.trigger(a, b, c, !0)
      }
    }),
    r.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (a, b) {
        r.fn[b] = function (a, c) {
          return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
      }
    ),
    r.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
      }
    }),
    (o.focusin = 'onfocusin' in a),
    o.focusin ||
      r.each({ focus: 'focusin', blur: 'focusout' }, function (a, b) {
        var c = function (a) {
          r.event.simulate(b, a.target, r.event.fix(a))
        }
        r.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = V.access(d, b)
            e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1)
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = V.access(d, b) - 1
            e
              ? V.access(d, b, e)
              : (d.removeEventListener(a, c, !0), V.remove(d, b))
          }
        }
      })
  var qb = a.location,
    rb = r.now(),
    sb = /\?/
  r.parseXML = function (b) {
    var c
    if (!b || 'string' != typeof b) return null
    try {
      c = new a.DOMParser().parseFromString(b, 'text/xml')
    } catch (d) {
      c = void 0
    }
    return (
      (c && !c.getElementsByTagName('parsererror').length) ||
        r.error('Invalid XML: ' + b),
      c
    )
  }
  var tb = /\[\]$/,
    ub = /\r?\n/g,
    vb = /^(?:submit|button|image|reset|file)$/i,
    wb = /^(?:input|select|textarea|keygen)/i
  function xb (a, b, c, d) {
    var e
    if (r.isArray(b))
      r.each(b, function (b, e) {
        c || tb.test(a)
          ? d(a, e)
          : xb(
              a + '[' + ('object' == typeof e && null != e ? b : '') + ']',
              e,
              c,
              d
            )
      })
    else if (c || 'object' !== r.type(b)) d(a, b)
    else for (e in b) xb(a + '[' + e + ']', b[e], c, d)
  }
  ;(r.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        var c = r.isFunction(b) ? b() : b
        d[d.length] =
          encodeURIComponent(a) + '=' + encodeURIComponent(null == c ? '' : c)
      }
    if (r.isArray(a) || (a.jquery && !r.isPlainObject(a)))
      r.each(a, function () {
        e(this.name, this.value)
      })
    else for (c in a) xb(c, a[c], b, e)
    return d.join('&')
  }),
    r.fn.extend({
      serialize: function () {
        return r.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var a = r.prop(this, 'elements')
          return a ? r.makeArray(a) : this
        })
          .filter(function () {
            var a = this.type
            return (
              this.name &&
              !r(this).is(':disabled') &&
              wb.test(this.nodeName) &&
              !vb.test(a) &&
              (this.checked || !ia.test(a))
            )
          })
          .map(function (a, b) {
            var c = r(this).val()
            return null == c
              ? null
              : r.isArray(c)
              ? r.map(c, function (a) {
                  return { name: b.name, value: a.replace(ub, '\r\n') }
                })
              : { name: b.name, value: c.replace(ub, '\r\n') }
          })
          .get()
      }
    })
  var yb = /%20/g,
    zb = /#.*$/,
    Ab = /([?&])_=[^&]*/,
    Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Db = /^(?:GET|HEAD)$/,
    Eb = /^\/\//,
    Fb = {},
    Gb = {},
    Hb = '*/'.concat('*'),
    Ib = d.createElement('a')
  Ib.href = qb.href
  function Jb (a) {
    return function (b, c) {
      'string' != typeof b && ((c = b), (b = '*'))
      var d,
        e = 0,
        f = b.toLowerCase().match(K) || []
      if (r.isFunction(c))
        while ((d = f[e++]))
          '+' === d[0]
            ? ((d = d.slice(1) || '*'), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c)
    }
  }
  function Kb (a, b, c, d) {
    var e = {},
      f = a === Gb
    function g (h) {
      var i
      return (
        (e[h] = !0),
        r.each(a[h] || [], function (a, h) {
          var j = h(b, c, d)
          return 'string' != typeof j || f || e[j]
            ? f
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), g(j), !1)
        }),
        i
      )
    }
    return g(b.dataTypes[0]) || (!e['*'] && g('*'))
  }
  function Lb (a, b) {
    var c,
      d,
      e = r.ajaxSettings.flatOptions || {}
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c])
    return d && r.extend(!0, a, d), a
  }
  function Mb (a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.contents,
      i = a.dataTypes
    while ('*' === i[0])
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader('Content-Type'))
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e)
          break
        }
    if (i[0] in c) f = i[0]
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + ' ' + i[0]]) {
          f = e
          break
        }
        g || (g = e)
      }
      f = f || g
    }
    if (f) return f !== i[0] && i.unshift(f), c[f]
  }
  function Nb (a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice()
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]
    f = k.shift()
    while (f)
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ('*' === f) f = i
        else if ('*' !== i && i !== f) {
          if (((g = j[i + ' ' + f] || j['* ' + f]), !g))
            for (e in j)
              if (
                ((h = e.split(' ')),
                h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]))
                break
              }
          if (g !== !0)
            if (g && a['throws']) b = g(b)
            else
              try {
                b = g(b)
              } catch (l) {
                return {
                  state: 'parsererror',
                  error: g ? l : 'No conversion from ' + i + ' to ' + f
                }
              }
        }
    return { state: 'success', data: b }
  }
  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: qb.href,
      type: 'GET',
      isLocal: Cb.test(qb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Hb,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': JSON.parse,
        'text xml': r.parseXML
      },
      flatOptions: { url: !0, context: !0 }
    },
    ajaxSetup: function (a, b) {
      return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
    },
    ajaxPrefilter: Jb(Fb),
    ajaxTransport: Jb(Gb),
    ajax: function (b, c) {
      'object' == typeof b && ((c = b), (b = void 0)), (c = c || {})
      var e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o = r.ajaxSetup({}, c),
        p = o.context || o,
        q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
        s = r.Deferred(),
        t = r.Callbacks('once memory'),
        u = o.statusCode || {},
        v = {},
        w = {},
        x = 'canceled',
        y = {
          readyState: 0,
          getResponseHeader: function (a) {
            var b
            if (k) {
              if (!h) {
                h = {}
                while ((b = Bb.exec(g))) h[b[1].toLowerCase()] = b[2]
              }
              b = h[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function () {
            return k ? g : null
          },
          setRequestHeader: function (a, b) {
            return (
              null == k &&
                ((a = w[a.toLowerCase()] = w[a.toLowerCase()] || a),
                (v[a] = b)),
              this
            )
          },
          overrideMimeType: function (a) {
            return null == k && (o.mimeType = a), this
          },
          statusCode: function (a) {
            var b
            if (a)
              if (k) y.always(a[y.status])
              else for (b in a) u[b] = [u[b], a[b]]
            return this
          },
          abort: function (a) {
            var b = a || x
            return e && e.abort(b), A(0, b), this
          }
        }
      if (
        (s.promise(y),
        (o.url = ((b || o.url || qb.href) + '').replace(
          Eb,
          qb.protocol + '//'
        )),
        (o.type = c.method || c.type || o.method || o.type),
        (o.dataTypes = (o.dataType || '*').toLowerCase().match(K) || ['']),
        null == o.crossDomain)
      ) {
        j = d.createElement('a')
        try {
          ;(j.href = o.url),
            (j.href = j.href),
            (o.crossDomain =
              Ib.protocol + '//' + Ib.host != j.protocol + '//' + j.host)
        } catch (z) {
          o.crossDomain = !0
        }
      }
      if (
        (o.data &&
          o.processData &&
          'string' != typeof o.data &&
          (o.data = r.param(o.data, o.traditional)),
        Kb(Fb, o, c, y),
        k)
      )
        return y
      ;(l = r.event && o.global),
        l && 0 === r.active++ && r.event.trigger('ajaxStart'),
        (o.type = o.type.toUpperCase()),
        (o.hasContent = !Db.test(o.type)),
        (f = o.url.replace(zb, '')),
        o.hasContent
          ? o.data &&
            o.processData &&
            0 ===
              (o.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (o.data = o.data.replace(yb, '+'))
          : ((n = o.url.slice(f.length)),
            o.data && ((f += (sb.test(f) ? '&' : '?') + o.data), delete o.data),
            o.cache === !1 &&
              ((f = f.replace(Ab, '$1')),
              (n = (sb.test(f) ? '&' : '?') + '_=' + rb++ + n)),
            (o.url = f + n)),
        o.ifModified &&
          (r.lastModified[f] &&
            y.setRequestHeader('If-Modified-Since', r.lastModified[f]),
          r.etag[f] && y.setRequestHeader('If-None-Match', r.etag[f])),
        ((o.data && o.hasContent && o.contentType !== !1) || c.contentType) &&
          y.setRequestHeader('Content-Type', o.contentType),
        y.setRequestHeader(
          'Accept',
          o.dataTypes[0] && o.accepts[o.dataTypes[0]]
            ? o.accepts[o.dataTypes[0]] +
                ('*' !== o.dataTypes[0] ? ', ' + Hb + '; q=0.01' : '')
            : o.accepts['*']
        )
      for (m in o.headers) y.setRequestHeader(m, o.headers[m])
      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k))
        return y.abort()
      if (
        ((x = 'abort'),
        t.add(o.complete),
        y.done(o.success),
        y.fail(o.error),
        (e = Kb(Gb, o, c, y)))
      ) {
        if (((y.readyState = 1), l && q.trigger('ajaxSend', [y, o]), k))
          return y
        o.async &&
          o.timeout > 0 &&
          (i = a.setTimeout(function () {
            y.abort('timeout')
          }, o.timeout))
        try {
          ;(k = !1), e.send(v, A)
        } catch (z) {
          if (k) throw z
          A(-1, z)
        }
      } else A(-1, 'No Transport')
      function A (b, c, d, h) {
        var j,
          m,
          n,
          v,
          w,
          x = c
        k ||
          ((k = !0),
          i && a.clearTimeout(i),
          (e = void 0),
          (g = h || ''),
          (y.readyState = b > 0 ? 4 : 0),
          (j = (b >= 200 && b < 300) || 304 === b),
          d && (v = Mb(o, y, d)),
          (v = Nb(o, v, y, j)),
          j
            ? (o.ifModified &&
                ((w = y.getResponseHeader('Last-Modified')),
                w && (r.lastModified[f] = w),
                (w = y.getResponseHeader('etag')),
                w && (r.etag[f] = w)),
              204 === b || 'HEAD' === o.type
                ? (x = 'nocontent')
                : 304 === b
                ? (x = 'notmodified')
                : ((x = v.state), (m = v.data), (n = v.error), (j = !n)))
            : ((n = x), (!b && x) || ((x = 'error'), b < 0 && (b = 0))),
          (y.status = b),
          (y.statusText = (c || x) + ''),
          j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]),
          y.statusCode(u),
          (u = void 0),
          l && q.trigger(j ? 'ajaxSuccess' : 'ajaxError', [y, o, j ? m : n]),
          t.fireWith(p, [y, x]),
          l &&
            (q.trigger('ajaxComplete', [y, o]),
            --r.active || r.event.trigger('ajaxStop')))
      }
      return y
    },
    getJSON: function (a, b, c) {
      return r.get(a, b, c, 'json')
    },
    getScript: function (a, b) {
      return r.get(a, void 0, b, 'script')
    }
  }),
    r.each(['get', 'post'], function (a, b) {
      r[b] = function (a, c, d, e) {
        return (
          r.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          r.ajax(
            r.extend(
              { url: a, type: b, dataType: e, data: c, success: d },
              r.isPlainObject(a) && a
            )
          )
        )
      }
    }),
    (r._evalUrl = function (a) {
      return r.ajax({
        url: a,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      })
    }),
    r.fn.extend({
      wrapAll: function (a) {
        var b
        return (
          this[0] &&
            (r.isFunction(a) && (a = a.call(this[0])),
            (b = r(a, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this
                while (a.firstElementChild) a = a.firstElementChild
                return a
              })
              .append(this)),
          this
        )
      },
      wrapInner: function (a) {
        return r.isFunction(a)
          ? this.each(function (b) {
              r(this).wrapInner(a.call(this, b))
            })
          : this.each(function () {
              var b = r(this),
                c = b.contents()
              c.length ? c.wrapAll(a) : b.append(a)
            })
      },
      wrap: function (a) {
        var b = r.isFunction(a)
        return this.each(function (c) {
          r(this).wrapAll(b ? a.call(this, c) : a)
        })
      },
      unwrap: function (a) {
        return (
          this.parent(a)
            .not('body')
            .each(function () {
              r(this).replaceWith(this.childNodes)
            }),
          this
        )
      }
    }),
    (r.expr.pseudos.hidden = function (a) {
      return !r.expr.pseudos.visible(a)
    }),
    (r.expr.pseudos.visible = function (a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }),
    (r.ajaxSettings.xhr = function () {
      try {
        return new a.XMLHttpRequest()
      } catch (b) {}
    })
  var Ob = { 0: 200, 1223: 204 },
    Pb = r.ajaxSettings.xhr()
  ;(o.cors = !!Pb && 'withCredentials' in Pb),
    (o.ajax = Pb = !!Pb),
    r.ajaxTransport(function (b) {
      var c, d
      if (o.cors || (Pb && !b.crossDomain))
        return {
          send: function (e, f) {
            var g,
              h = b.xhr()
            if (
              (h.open(b.type, b.url, b.async, b.username, b.password),
              b.xhrFields)
            )
              for (g in b.xhrFields) h[g] = b.xhrFields[g]
            b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
              b.crossDomain ||
                e['X-Requested-With'] ||
                (e['X-Requested-With'] = 'XMLHttpRequest')
            for (g in e) h.setRequestHeader(g, e[g])
            ;(c = function (a) {
              return function () {
                c &&
                  ((c =
                    d =
                    h.onload =
                    h.onerror =
                    h.onabort =
                    h.onreadystatechange =
                      null),
                  'abort' === a
                    ? h.abort()
                    : 'error' === a
                    ? 'number' != typeof h.status
                      ? f(0, 'error')
                      : f(h.status, h.statusText)
                    : f(
                        Ob[h.status] || h.status,
                        h.statusText,
                        'text' !== (h.responseType || 'text') ||
                          'string' != typeof h.responseText
                          ? { binary: h.response }
                          : { text: h.responseText },
                        h.getAllResponseHeaders()
                      ))
              }
            }),
              (h.onload = c()),
              (d = h.onerror = c('error')),
              void 0 !== h.onabort
                ? (h.onabort = d)
                : (h.onreadystatechange = function () {
                    4 === h.readyState &&
                      a.setTimeout(function () {
                        c && d()
                      })
                  }),
              (c = c('abort'))
            try {
              h.send((b.hasContent && b.data) || null)
            } catch (i) {
              if (c) throw i
            }
          },
          abort: function () {
            c && c()
          }
        }
    }),
    r.ajaxPrefilter(function (a) {
      a.crossDomain && (a.contents.script = !1)
    }),
    r.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (a) {
          return r.globalEval(a), a
        }
      }
    }),
    r.ajaxPrefilter('script', function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = 'GET')
    }),
    r.ajaxTransport('script', function (a) {
      if (a.crossDomain) {
        var b, c
        return {
          send: function (e, f) {
            ;(b = r('<script>')
              .prop({ charset: a.scriptCharset, src: a.url })
              .on(
                'load error',
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && f('error' === a.type ? 404 : 200, a.type)
                })
              )),
              d.head.appendChild(b[0])
          },
          abort: function () {
            c && c()
          }
        }
      }
    })
  var Qb = [],
    Rb = /(=)\?(?=&|$)|\?\?/
  r.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var a = Qb.pop() || r.expando + '_' + rb++
      return (this[a] = !0), a
    }
  }),
    r.ajaxPrefilter('json jsonp', function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Rb.test(b.url)
            ? 'url'
            : 'string' == typeof b.data &&
              0 ===
                (b.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Rb.test(b.data) &&
              'data')
      if (h || 'jsonp' === b.dataTypes[0])
        return (
          (e = b.jsonpCallback =
            r.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Rb, '$1' + e))
            : b.jsonp !== !1 &&
              (b.url += (sb.test(b.url) ? '&' : '?') + b.jsonp + '=' + e),
          (b.converters['script json'] = function () {
            return g || r.error(e + ' was not called'), g[0]
          }),
          (b.dataTypes[0] = 'json'),
          (f = a[e]),
          (a[e] = function () {
            g = arguments
          }),
          d.always(function () {
            void 0 === f ? r(a).removeProp(e) : (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Qb.push(e)),
              g && r.isFunction(f) && f(g[0]),
              (g = f = void 0)
          }),
          'script'
        )
    }),
    (o.createHTMLDocument = (function () {
      var a = d.implementation.createHTMLDocument('').body
      return (
        (a.innerHTML = '<form></form><form></form>'), 2 === a.childNodes.length
      )
    })()),
    (r.parseHTML = function (a, b, c) {
      if ('string' != typeof a) return []
      'boolean' == typeof b && ((c = b), (b = !1))
      var e, f, g
      return (
        b ||
          (o.createHTMLDocument
            ? ((b = d.implementation.createHTMLDocument('')),
              (e = b.createElement('base')),
              (e.href = d.location.href),
              b.head.appendChild(e))
            : (b = d)),
        (f = B.exec(a)),
        (g = !c && []),
        f
          ? [b.createElement(f[1])]
          : ((f = pa([a], b, g)),
            g && g.length && r(g).remove(),
            r.merge([], f.childNodes))
      )
    }),
    (r.fn.load = function (a, b, c) {
      var d,
        e,
        f,
        g = this,
        h = a.indexOf(' ')
      return (
        h > -1 && ((d = mb(a.slice(h))), (a = a.slice(0, h))),
        r.isFunction(b)
          ? ((c = b), (b = void 0))
          : b && 'object' == typeof b && (e = 'POST'),
        g.length > 0 &&
          r
            .ajax({ url: a, type: e || 'GET', dataType: 'html', data: b })
            .done(function (a) {
              ;(f = arguments),
                g.html(d ? r('<div>').append(r.parseHTML(a)).find(d) : a)
            })
            .always(
              c &&
                function (a, b) {
                  g.each(function () {
                    c.apply(this, f || [a.responseText, b, a])
                  })
                }
            ),
        this
      )
    }),
    r.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend'
      ],
      function (a, b) {
        r.fn[b] = function (a) {
          return this.on(b, a)
        }
      }
    ),
    (r.expr.pseudos.animated = function (a) {
      return r.grep(r.timers, function (b) {
        return a === b.elem
      }).length
    })
  function Sb (a) {
    return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
  }
  ;(r.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = r.css(a, 'position'),
        l = r(a),
        m = {}
      'static' === k && (a.style.position = 'relative'),
        (h = l.offset()),
        (f = r.css(a, 'top')),
        (i = r.css(a, 'left')),
        (j =
          ('absolute' === k || 'fixed' === k) && (f + i).indexOf('auto') > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        'using' in b ? b.using.call(a, m) : l.css(m)
    }
  }),
    r.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                r.offset.setOffset(this, a, b)
              })
        var b,
          c,
          d,
          e,
          f = this[0]
        if (f)
          return f.getClientRects().length
            ? ((d = f.getBoundingClientRect()),
              d.width || d.height
                ? ((e = f.ownerDocument),
                  (c = Sb(e)),
                  (b = e.documentElement),
                  {
                    top: d.top + c.pageYOffset - b.clientTop,
                    left: d.left + c.pageXOffset - b.clientLeft
                  })
                : d)
            : { top: 0, left: 0 }
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 }
          return (
            'fixed' === r.css(c, 'position')
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                r.nodeName(a[0], 'html') || (d = a.offset()),
                (d = {
                  top: d.top + r.css(a[0], 'borderTopWidth', !0),
                  left: d.left + r.css(a[0], 'borderLeftWidth', !0)
                })),
            {
              top: b.top - d.top - r.css(c, 'marginTop', !0),
              left: b.left - d.left - r.css(c, 'marginLeft', !0)
            }
          )
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent
          while (a && 'static' === r.css(a, 'position')) a = a.offsetParent
          return a || qa
        })
      }
    }),
    r.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (a, b) {
        var c = 'pageYOffset' === b
        r.fn[a] = function (d) {
          return S(
            this,
            function (a, d, e) {
              var f = Sb(a)
              return void 0 === e
                ? f
                  ? f[b]
                  : a[d]
                : void (f
                    ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset)
                    : (a[d] = e))
            },
            a,
            d,
            arguments.length
          )
        }
      }
    ),
    r.each(['top', 'left'], function (a, b) {
      r.cssHooks[b] = Oa(o.pixelPosition, function (a, c) {
        if (c) return (c = Na(a, b)), La.test(c) ? r(a).position()[b] + 'px' : c
      })
    }),
    r.each({ Height: 'height', Width: 'width' }, function (a, b) {
      r.each(
        { padding: 'inner' + a, content: b, '': 'outer' + a },
        function (c, d) {
          r.fn[d] = function (e, f) {
            var g = arguments.length && (c || 'boolean' != typeof e),
              h = c || (e === !0 || f === !0 ? 'margin' : 'border')
            return S(
              this,
              function (b, c, e) {
                var f
                return r.isWindow(b)
                  ? 0 === d.indexOf('outer')
                    ? b['inner' + a]
                    : b.document.documentElement['client' + a]
                  : 9 === b.nodeType
                  ? ((f = b.documentElement),
                    Math.max(
                      b.body['scroll' + a],
                      f['scroll' + a],
                      b.body['offset' + a],
                      f['offset' + a],
                      f['client' + a]
                    ))
                  : void 0 === e
                  ? r.css(b, c, h)
                  : r.style(b, c, e, h)
              },
              b,
              g ? e : void 0,
              g
            )
          }
        }
      )
    }),
    r.fn.extend({
      bind: function (a, b, c) {
        return this.on(a, null, b, c)
      },
      unbind: function (a, b) {
        return this.off(a, null, b)
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d)
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, '**')
          : this.off(b, a || '**', c)
      }
    }),
    (r.parseJSON = JSON.parse),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return r
      })
  var Tb = a.jQuery,
    Ub = a.$
  return (
    (r.noConflict = function (b) {
      return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r
    }),
    b || (a.jQuery = a.$ = r),
    r
  )
})

/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('jquery'), require('popper.js'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'jquery', 'popper.js'], e)
    : e(((t = t || self).bootstrap = {}), t.jQuery, t.Popper)
})(this, function (t, g, u) {
  'use strict'
  function i (t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n]
      ;(i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i)
    }
  }
  function s (t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t
  }
  function l (o) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(r)
      'function' == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(r).filter(function (t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable
          })
        )),
        e.forEach(function (t) {
          var e, n, i
          ;(e = o),
            (i = r[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[n] = i)
        })
    }
    return o
  }
  ;(g = g && g.hasOwnProperty('default') ? g.default : g),
    (u = u && u.hasOwnProperty('default') ? u.default : u)
  var e = 'transitionend'
  function n (t) {
    var e = this,
      n = !1
    return (
      g(this).one(_.TRANSITION_END, function () {
        n = !0
      }),
      setTimeout(function () {
        n || _.triggerTransitionEnd(e)
      }, t),
      this
    )
  }
  var _ = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function (t) {
      for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
      return t
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute('data-target')
      if (!e || '#' === e) {
        var n = t.getAttribute('href')
        e = n && '#' !== n ? n.trim() : ''
      }
      try {
        return document.querySelector(e) ? e : null
      } catch (t) {
        return null
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0
      var e = g(t).css('transition-duration'),
        n = g(t).css('transition-delay'),
        i = parseFloat(e),
        o = parseFloat(n)
      return i || o
        ? ((e = e.split(',')[0]),
          (n = n.split(',')[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0
    },
    reflow: function (t) {
      return t.offsetHeight
    },
    triggerTransitionEnd: function (t) {
      g(t).trigger(e)
    },
    supportsTransitionEnd: function () {
      return Boolean(e)
    },
    isElement: function (t) {
      return (t[0] || t).nodeType
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            s =
              r && _.isElement(r)
                ? 'element'
                : ((a = r),
                  {}.toString
                    .call(a)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase())
          if (!new RegExp(o).test(s))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                s +
                '" but expected type "' +
                o +
                '".'
            )
        }
      var a
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null
      if ('function' != typeof t.getRootNode)
        return t instanceof ShadowRoot
          ? t
          : t.parentNode
          ? _.findShadowRoot(t.parentNode)
          : null
      var e = t.getRootNode()
      return e instanceof ShadowRoot ? e : null
    }
  }
  ;(g.fn.emulateTransitionEnd = n),
    (g.event.special[_.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function (t) {
        if (g(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments)
      }
    })
  var o = 'alert',
    r = 'bs.alert',
    a = '.' + r,
    c = g.fn[o],
    h = {
      CLOSE: 'close' + a,
      CLOSED: 'closed' + a,
      CLICK_DATA_API: 'click' + a + '.data-api'
    },
    f = 'alert',
    d = 'fade',
    m = 'show',
    p = (function () {
      function i (t) {
        this._element = t
      }
      var t = i.prototype
      return (
        (t.close = function (t) {
          var e = this._element
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e)
        }),
        (t.dispose = function () {
          g.removeData(this._element, r), (this._element = null)
        }),
        (t._getRootElement = function (t) {
          var e = _.getSelectorFromElement(t),
            n = !1
          return (
            e && (n = document.querySelector(e)),
            n || (n = g(t).closest('.' + f)[0]),
            n
          )
        }),
        (t._triggerCloseEvent = function (t) {
          var e = g.Event(h.CLOSE)
          return g(t).trigger(e), e
        }),
        (t._removeElement = function (e) {
          var n = this
          if ((g(e).removeClass(m), g(e).hasClass(d))) {
            var t = _.getTransitionDurationFromElement(e)
            g(e)
              .one(_.TRANSITION_END, function (t) {
                return n._destroyElement(e, t)
              })
              .emulateTransitionEnd(t)
          } else this._destroyElement(e)
        }),
        (t._destroyElement = function (t) {
          g(t).detach().trigger(h.CLOSED).remove()
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = g(this),
              e = t.data(r)
            e || ((e = new i(this)), t.data(r, e)), 'close' === n && e[n](this)
          })
        }),
        (i._handleDismiss = function (e) {
          return function (t) {
            t && t.preventDefault(), e.close(this)
          }
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1'
            }
          }
        ]),
        i
      )
    })()
  g(document).on(
    h.CLICK_DATA_API,
    '[data-dismiss="alert"]',
    p._handleDismiss(new p())
  ),
    (g.fn[o] = p._jQueryInterface),
    (g.fn[o].Constructor = p),
    (g.fn[o].noConflict = function () {
      return (g.fn[o] = c), p._jQueryInterface
    })
  var v = 'button',
    y = 'bs.button',
    E = '.' + y,
    C = '.data-api',
    T = g.fn[v],
    S = 'active',
    b = 'btn',
    I = 'focus',
    D = '[data-toggle^="button"]',
    w = '[data-toggle="buttons"]',
    A = 'input:not([type="hidden"])',
    N = '.active',
    O = '.btn',
    k = {
      CLICK_DATA_API: 'click' + E + C,
      FOCUS_BLUR_DATA_API: 'focus' + E + C + ' blur' + E + C
    },
    P = (function () {
      function n (t) {
        this._element = t
      }
      var t = n.prototype
      return (
        (t.toggle = function () {
          var t = !0,
            e = !0,
            n = g(this._element).closest(w)[0]
          if (n) {
            var i = this._element.querySelector(A)
            if (i) {
              if ('radio' === i.type)
                if (i.checked && this._element.classList.contains(S)) t = !1
                else {
                  var o = n.querySelector(N)
                  o && g(o).removeClass(S)
                }
              if (t) {
                if (
                  i.hasAttribute('disabled') ||
                  n.hasAttribute('disabled') ||
                  i.classList.contains('disabled') ||
                  n.classList.contains('disabled')
                )
                  return
                ;(i.checked = !this._element.classList.contains(S)),
                  g(i).trigger('change')
              }
              i.focus(), (e = !1)
            }
          }
          e &&
            this._element.setAttribute(
              'aria-pressed',
              !this._element.classList.contains(S)
            ),
            t && g(this._element).toggleClass(S)
        }),
        (t.dispose = function () {
          g.removeData(this._element, y), (this._element = null)
        }),
        (n._jQueryInterface = function (e) {
          return this.each(function () {
            var t = g(this).data(y)
            t || ((t = new n(this)), g(this).data(y, t)),
              'toggle' === e && t[e]()
          })
        }),
        s(n, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1'
            }
          }
        ]),
        n
      )
    })()
  g(document)
    .on(k.CLICK_DATA_API, D, function (t) {
      t.preventDefault()
      var e = t.target
      g(e).hasClass(b) || (e = g(e).closest(O)),
        P._jQueryInterface.call(g(e), 'toggle')
    })
    .on(k.FOCUS_BLUR_DATA_API, D, function (t) {
      var e = g(t.target).closest(O)[0]
      g(e).toggleClass(I, /^focus(in)?$/.test(t.type))
    }),
    (g.fn[v] = P._jQueryInterface),
    (g.fn[v].Constructor = P),
    (g.fn[v].noConflict = function () {
      return (g.fn[v] = T), P._jQueryInterface
    })
  var L = 'carousel',
    j = 'bs.carousel',
    H = '.' + j,
    R = '.data-api',
    x = g.fn[L],
    F = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0,
      touch: !0
    },
    U = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean'
    },
    W = 'next',
    q = 'prev',
    M = 'left',
    K = 'right',
    Q = {
      SLIDE: 'slide' + H,
      SLID: 'slid' + H,
      KEYDOWN: 'keydown' + H,
      MOUSEENTER: 'mouseenter' + H,
      MOUSELEAVE: 'mouseleave' + H,
      TOUCHSTART: 'touchstart' + H,
      TOUCHMOVE: 'touchmove' + H,
      TOUCHEND: 'touchend' + H,
      POINTERDOWN: 'pointerdown' + H,
      POINTERUP: 'pointerup' + H,
      DRAG_START: 'dragstart' + H,
      LOAD_DATA_API: 'load' + H + R,
      CLICK_DATA_API: 'click' + H + R
    },
    B = 'carousel',
    V = 'active',
    Y = 'slide',
    z = 'carousel-item-right',
    X = 'carousel-item-left',
    $ = 'carousel-item-next',
    G = 'carousel-item-prev',
    J = 'pointer-event',
    Z = '.active',
    tt = '.active.carousel-item',
    et = '.carousel-item',
    nt = '.carousel-item img',
    it = '.carousel-item-next, .carousel-item-prev',
    ot = '.carousel-indicators',
    rt = '[data-slide], [data-slide-to]',
    st = '[data-ride="carousel"]',
    at = { TOUCH: 'touch', PEN: 'pen' },
    lt = (function () {
      function r (t, e) {
        ;(this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(ot)),
          (this._touchSupported =
            'ontouchstart' in document.documentElement ||
            0 < navigator.maxTouchPoints),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners()
      }
      var t = r.prototype
      return (
        (t.next = function () {
          this._isSliding || this._slide(W)
        }),
        (t.nextWhenVisible = function () {
          !document.hidden &&
            g(this._element).is(':visible') &&
            'hidden' !== g(this._element).css('visibility') &&
            this.next()
        }),
        (t.prev = function () {
          this._isSliding || this._slide(q)
        }),
        (t.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(it) &&
              (_.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null)
        }),
        (t.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              ))
        }),
        (t.to = function (t) {
          var e = this
          this._activeElement = this._element.querySelector(tt)
          var n = this._getItemIndex(this._activeElement)
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              g(this._element).one(Q.SLID, function () {
                return e.to(t)
              })
            else {
              if (n === t) return this.pause(), void this.cycle()
              var i = n < t ? W : q
              this._slide(i, this._items[t])
            }
        }),
        (t.dispose = function () {
          g(this._element).off(H),
            g.removeData(this._element, j),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null)
        }),
        (t._getConfig = function (t) {
          return (t = l({}, F, t)), _.typeCheckConfig(L, t, U), t
        }),
        (t._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX)
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX
            0 < e && this.prev(), e < 0 && this.next()
          }
        }),
        (t._addEventListeners = function () {
          var e = this
          this._config.keyboard &&
            g(this._element).on(Q.KEYDOWN, function (t) {
              return e._keydown(t)
            }),
            'hover' === this._config.pause &&
              g(this._element)
                .on(Q.MOUSEENTER, function (t) {
                  return e.pause(t)
                })
                .on(Q.MOUSELEAVE, function (t) {
                  return e.cycle(t)
                }),
            this._config.touch && this._addTouchEventListeners()
        }),
        (t._addTouchEventListeners = function () {
          var n = this
          if (this._touchSupported) {
            var e = function (t) {
                n._pointerEvent && at[t.originalEvent.pointerType.toUpperCase()]
                  ? (n.touchStartX = t.originalEvent.clientX)
                  : n._pointerEvent ||
                    (n.touchStartX = t.originalEvent.touches[0].clientX)
              },
              i = function (t) {
                n._pointerEvent &&
                  at[t.originalEvent.pointerType.toUpperCase()] &&
                  (n.touchDeltaX = t.originalEvent.clientX - n.touchStartX),
                  n._handleSwipe(),
                  'hover' === n._config.pause &&
                    (n.pause(),
                    n.touchTimeout && clearTimeout(n.touchTimeout),
                    (n.touchTimeout = setTimeout(function (t) {
                      return n.cycle(t)
                    }, 500 + n._config.interval)))
              }
            g(this._element.querySelectorAll(nt)).on(
              Q.DRAG_START,
              function (t) {
                return t.preventDefault()
              }
            ),
              this._pointerEvent
                ? (g(this._element).on(Q.POINTERDOWN, function (t) {
                    return e(t)
                  }),
                  g(this._element).on(Q.POINTERUP, function (t) {
                    return i(t)
                  }),
                  this._element.classList.add(J))
                : (g(this._element).on(Q.TOUCHSTART, function (t) {
                    return e(t)
                  }),
                  g(this._element).on(Q.TOUCHMOVE, function (t) {
                    var e
                    ;(e = t).originalEvent.touches &&
                    1 < e.originalEvent.touches.length
                      ? (n.touchDeltaX = 0)
                      : (n.touchDeltaX =
                          e.originalEvent.touches[0].clientX - n.touchStartX)
                  }),
                  g(this._element).on(Q.TOUCHEND, function (t) {
                    return i(t)
                  }))
          }
        }),
        (t._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev()
                break
              case 39:
                t.preventDefault(), this.next()
            }
        }),
        (t._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll(et))
                : []),
            this._items.indexOf(t)
          )
        }),
        (t._getItemByDirection = function (t, e) {
          var n = t === W,
            i = t === q,
            o = this._getItemIndex(e),
            r = this._items.length - 1
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap) return e
          var s = (o + (t === q ? -1 : 1)) % this._items.length
          return -1 === s ? this._items[this._items.length - 1] : this._items[s]
        }),
        (t._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            i = this._getItemIndex(this._element.querySelector(tt)),
            o = g.Event(Q.SLIDE, {
              relatedTarget: t,
              direction: e,
              from: i,
              to: n
            })
          return g(this._element).trigger(o), o
        }),
        (t._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(this._indicatorsElement.querySelectorAll(Z))
            g(e).removeClass(V)
            var n = this._indicatorsElement.children[this._getItemIndex(t)]
            n && g(n).addClass(V)
          }
        }),
        (t._slide = function (t, e) {
          var n,
            i,
            o,
            r = this,
            s = this._element.querySelector(tt),
            a = this._getItemIndex(s),
            l = e || (s && this._getItemByDirection(t, s)),
            c = this._getItemIndex(l),
            h = Boolean(this._interval)
          if (
            ((o = t === W ? ((n = X), (i = $), M) : ((n = z), (i = G), K)),
            l && g(l).hasClass(V))
          )
            this._isSliding = !1
          else if (
            !this._triggerSlideEvent(l, o).isDefaultPrevented() &&
            s &&
            l
          ) {
            ;(this._isSliding = !0),
              h && this.pause(),
              this._setActiveIndicatorElement(l)
            var u = g.Event(Q.SLID, {
              relatedTarget: l,
              direction: o,
              from: a,
              to: c
            })
            if (g(this._element).hasClass(Y)) {
              g(l).addClass(i), _.reflow(l), g(s).addClass(n), g(l).addClass(n)
              var f = parseInt(l.getAttribute('data-interval'), 10)
              this._config.interval = f
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  f)
                : this._config.defaultInterval || this._config.interval
              var d = _.getTransitionDurationFromElement(s)
              g(s)
                .one(_.TRANSITION_END, function () {
                  g(l)
                    .removeClass(n + ' ' + i)
                    .addClass(V),
                    g(s).removeClass(V + ' ' + i + ' ' + n),
                    (r._isSliding = !1),
                    setTimeout(function () {
                      return g(r._element).trigger(u)
                    }, 0)
                })
                .emulateTransitionEnd(d)
            } else
              g(s).removeClass(V),
                g(l).addClass(V),
                (this._isSliding = !1),
                g(this._element).trigger(u)
            h && this.cycle()
          }
        }),
        (r._jQueryInterface = function (i) {
          return this.each(function () {
            var t = g(this).data(j),
              e = l({}, F, g(this).data())
            'object' == typeof i && (e = l({}, e, i))
            var n = 'string' == typeof i ? i : e.slide
            if (
              (t || ((t = new r(this, e)), g(this).data(j, t)),
              'number' == typeof i)
            )
              t.to(i)
            else if ('string' == typeof n) {
              if ('undefined' == typeof t[n])
                throw new TypeError('No method named "' + n + '"')
              t[n]()
            } else e.interval && e.ride && (t.pause(), t.cycle())
          })
        }),
        (r._dataApiClickHandler = function (t) {
          var e = _.getSelectorFromElement(this)
          if (e) {
            var n = g(e)[0]
            if (n && g(n).hasClass(B)) {
              var i = l({}, g(n).data(), g(this).data()),
                o = this.getAttribute('data-slide-to')
              o && (i.interval = !1),
                r._jQueryInterface.call(g(n), i),
                o && g(n).data(j).to(o),
                t.preventDefault()
            }
          }
        }),
        s(r, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1'
            }
          },
          {
            key: 'Default',
            get: function () {
              return F
            }
          }
        ]),
        r
      )
    })()
  g(document).on(Q.CLICK_DATA_API, rt, lt._dataApiClickHandler),
    g(window).on(Q.LOAD_DATA_API, function () {
      for (
        var t = [].slice.call(document.querySelectorAll(st)),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = g(t[e])
        lt._jQueryInterface.call(i, i.data())
      }
    }),
    (g.fn[L] = lt._jQueryInterface),
    (g.fn[L].Constructor = lt),
    (g.fn[L].noConflict = function () {
      return (g.fn[L] = x), lt._jQueryInterface
    })
  var ct = 'collapse',
    ht = 'bs.collapse',
    ut = '.' + ht,
    ft = g.fn[ct],
    dt = { toggle: !0, parent: '' },
    gt = { toggle: 'boolean', parent: '(string|element)' },
    _t = {
      SHOW: 'show' + ut,
      SHOWN: 'shown' + ut,
      HIDE: 'hide' + ut,
      HIDDEN: 'hidden' + ut,
      CLICK_DATA_API: 'click' + ut + '.data-api'
    },
    mt = 'show',
    pt = 'collapse',
    vt = 'collapsing',
    yt = 'collapsed',
    Et = 'width',
    Ct = 'height',
    Tt = '.show, .collapsing',
    St = '[data-toggle="collapse"]',
    bt = (function () {
      function a (e, t) {
        ;(this._isTransitioning = !1),
          (this._element = e),
          (this._config = this._getConfig(t)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                e.id +
                '"],[data-toggle="collapse"][data-target="#' +
                e.id +
                '"]'
            )
          ))
        for (
          var n = [].slice.call(document.querySelectorAll(St)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            s = _.getSelectorFromElement(r),
            a = [].slice
              .call(document.querySelectorAll(s))
              .filter(function (t) {
                return t === e
              })
          null !== s &&
            0 < a.length &&
            ((this._selector = s), this._triggerArray.push(r))
        }
        ;(this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle()
      }
      var t = a.prototype
      return (
        (t.toggle = function () {
          g(this._element).hasClass(mt) ? this.hide() : this.show()
        }),
        (t.show = function () {
          var t,
            e,
            n = this
          if (
            !this._isTransitioning &&
            !g(this._element).hasClass(mt) &&
            (this._parent &&
              0 ===
                (t = [].slice
                  .call(this._parent.querySelectorAll(Tt))
                  .filter(function (t) {
                    return 'string' == typeof n._config.parent
                      ? t.getAttribute('data-parent') === n._config.parent
                      : t.classList.contains(pt)
                  })).length &&
              (t = null),
            !(
              t &&
              (e = g(t).not(this._selector).data(ht)) &&
              e._isTransitioning
            ))
          ) {
            var i = g.Event(_t.SHOW)
            if ((g(this._element).trigger(i), !i.isDefaultPrevented())) {
              t &&
                (a._jQueryInterface.call(g(t).not(this._selector), 'hide'),
                e || g(t).data(ht, null))
              var o = this._getDimension()
              g(this._element).removeClass(pt).addClass(vt),
                (this._element.style[o] = 0),
                this._triggerArray.length &&
                  g(this._triggerArray)
                    .removeClass(yt)
                    .attr('aria-expanded', !0),
                this.setTransitioning(!0)
              var r = 'scroll' + (o[0].toUpperCase() + o.slice(1)),
                s = _.getTransitionDurationFromElement(this._element)
              g(this._element)
                .one(_.TRANSITION_END, function () {
                  g(n._element).removeClass(vt).addClass(pt).addClass(mt),
                    (n._element.style[o] = ''),
                    n.setTransitioning(!1),
                    g(n._element).trigger(_t.SHOWN)
                })
                .emulateTransitionEnd(s),
                (this._element.style[o] = this._element[r] + 'px')
            }
          }
        }),
        (t.hide = function () {
          var t = this
          if (!this._isTransitioning && g(this._element).hasClass(mt)) {
            var e = g.Event(_t.HIDE)
            if ((g(this._element).trigger(e), !e.isDefaultPrevented())) {
              var n = this._getDimension()
              ;(this._element.style[n] =
                this._element.getBoundingClientRect()[n] + 'px'),
                _.reflow(this._element),
                g(this._element).addClass(vt).removeClass(pt).removeClass(mt)
              var i = this._triggerArray.length
              if (0 < i)
                for (var o = 0; o < i; o++) {
                  var r = this._triggerArray[o],
                    s = _.getSelectorFromElement(r)
                  if (null !== s)
                    g([].slice.call(document.querySelectorAll(s))).hasClass(
                      mt
                    ) || g(r).addClass(yt).attr('aria-expanded', !1)
                }
              this.setTransitioning(!0)
              this._element.style[n] = ''
              var a = _.getTransitionDurationFromElement(this._element)
              g(this._element)
                .one(_.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    g(t._element)
                      .removeClass(vt)
                      .addClass(pt)
                      .trigger(_t.HIDDEN)
                })
                .emulateTransitionEnd(a)
            }
          }
        }),
        (t.setTransitioning = function (t) {
          this._isTransitioning = t
        }),
        (t.dispose = function () {
          g.removeData(this._element, ht),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null)
        }),
        (t._getConfig = function (t) {
          return (
            ((t = l({}, dt, t)).toggle = Boolean(t.toggle)),
            _.typeCheckConfig(ct, t, gt),
            t
          )
        }),
        (t._getDimension = function () {
          return g(this._element).hasClass(Et) ? Et : Ct
        }),
        (t._getParent = function () {
          var t,
            n = this
          _.isElement(this._config.parent)
            ? ((t = this._config.parent),
              'undefined' != typeof this._config.parent.jquery &&
                (t = this._config.parent[0]))
            : (t = document.querySelector(this._config.parent))
          var e =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            i = [].slice.call(t.querySelectorAll(e))
          return (
            g(i).each(function (t, e) {
              n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
            }),
            t
          )
        }),
        (t._addAriaAndCollapsedClass = function (t, e) {
          var n = g(t).hasClass(mt)
          e.length && g(e).toggleClass(yt, !n).attr('aria-expanded', n)
        }),
        (a._getTargetFromElement = function (t) {
          var e = _.getSelectorFromElement(t)
          return e ? document.querySelector(e) : null
        }),
        (a._jQueryInterface = function (i) {
          return this.each(function () {
            var t = g(this),
              e = t.data(ht),
              n = l({}, dt, t.data(), 'object' == typeof i && i ? i : {})
            if (
              (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
              e || ((e = new a(this, n)), t.data(ht, e)),
              'string' == typeof i)
            ) {
              if ('undefined' == typeof e[i])
                throw new TypeError('No method named "' + i + '"')
              e[i]()
            }
          })
        }),
        s(a, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1'
            }
          },
          {
            key: 'Default',
            get: function () {
              return dt
            }
          }
        ]),
        a
      )
    })()
  g(document).on(_t.CLICK_DATA_API, St, function (t) {
    'A' === t.currentTarget.tagName && t.preventDefault()
    var n = g(this),
      e = _.getSelectorFromElement(this),
      i = [].slice.call(document.querySelectorAll(e))
    g(i).each(function () {
      var t = g(this),
        e = t.data(ht) ? 'toggle' : n.data()
      bt._jQueryInterface.call(t, e)
    })
  }),
    (g.fn[ct] = bt._jQueryInterface),
    (g.fn[ct].Constructor = bt),
    (g.fn[ct].noConflict = function () {
      return (g.fn[ct] = ft), bt._jQueryInterface
    })
  var It = 'dropdown',
    Dt = 'bs.dropdown',
    wt = '.' + Dt,
    At = '.data-api',
    Nt = g.fn[It],
    Ot = new RegExp('38|40|27'),
    kt = {
      HIDE: 'hide' + wt,
      HIDDEN: 'hidden' + wt,
      SHOW: 'show' + wt,
      SHOWN: 'shown' + wt,
      CLICK: 'click' + wt,
      CLICK_DATA_API: 'click' + wt + At,
      KEYDOWN_DATA_API: 'keydown' + wt + At,
      KEYUP_DATA_API: 'keyup' + wt + At
    },
    Pt = 'disabled',
    Lt = 'show',
    jt = 'dropup',
    Ht = 'dropright',
    Rt = 'dropleft',
    xt = 'dropdown-menu-right',
    Ft = 'position-static',
    Ut = '[data-toggle="dropdown"]',
    Wt = '.dropdown form',
    qt = '.dropdown-menu',
    Mt = '.navbar-nav',
    Kt = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
    Qt = 'top-start',
    Bt = 'top-end',
    Vt = 'bottom-start',
    Yt = 'bottom-end',
    zt = 'right-start',
    Xt = 'left-start',
    $t = {
      offset: 0,
      flip: !0,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic'
    },
    Gt = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string'
    },
    Jt = (function () {
      function c (t, e) {
        ;(this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners()
      }
      var t = c.prototype
      return (
        (t.toggle = function () {
          if (!this._element.disabled && !g(this._element).hasClass(Pt)) {
            var t = c._getParentFromElement(this._element),
              e = g(this._menu).hasClass(Lt)
            if ((c._clearMenus(), !e)) {
              var n = { relatedTarget: this._element },
                i = g.Event(kt.SHOW, n)
              if ((g(t).trigger(i), !i.isDefaultPrevented())) {
                if (!this._inNavbar) {
                  if ('undefined' == typeof u)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper.js (https://popper.js.org/)"
                    )
                  var o = this._element
                  'parent' === this._config.reference
                    ? (o = t)
                    : _.isElement(this._config.reference) &&
                      ((o = this._config.reference),
                      'undefined' != typeof this._config.reference.jquery &&
                        (o = this._config.reference[0])),
                    'scrollParent' !== this._config.boundary &&
                      g(t).addClass(Ft),
                    (this._popper = new u(
                      o,
                      this._menu,
                      this._getPopperConfig()
                    ))
                }
                'ontouchstart' in document.documentElement &&
                  0 === g(t).closest(Mt).length &&
                  g(document.body).children().on('mouseover', null, g.noop),
                  this._element.focus(),
                  this._element.setAttribute('aria-expanded', !0),
                  g(this._menu).toggleClass(Lt),
                  g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN, n))
              }
            }
          }
        }),
        (t.show = function () {
          if (
            !(
              this._element.disabled ||
              g(this._element).hasClass(Pt) ||
              g(this._menu).hasClass(Lt)
            )
          ) {
            var t = { relatedTarget: this._element },
              e = g.Event(kt.SHOW, t),
              n = c._getParentFromElement(this._element)
            g(n).trigger(e),
              e.isDefaultPrevented() ||
                (g(this._menu).toggleClass(Lt),
                g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN, t)))
          }
        }),
        (t.hide = function () {
          if (
            !this._element.disabled &&
            !g(this._element).hasClass(Pt) &&
            g(this._menu).hasClass(Lt)
          ) {
            var t = { relatedTarget: this._element },
              e = g.Event(kt.HIDE, t),
              n = c._getParentFromElement(this._element)
            g(n).trigger(e),
              e.isDefaultPrevented() ||
                (g(this._menu).toggleClass(Lt),
                g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN, t)))
          }
        }),
        (t.dispose = function () {
          g.removeData(this._element, Dt),
            g(this._element).off(wt),
            (this._element = null),
            (this._menu = null) !== this._popper &&
              (this._popper.destroy(), (this._popper = null))
        }),
        (t.update = function () {
          ;(this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate()
        }),
        (t._addEventListeners = function () {
          var e = this
          g(this._element).on(kt.CLICK, function (t) {
            t.preventDefault(), t.stopPropagation(), e.toggle()
          })
        }),
        (t._getConfig = function (t) {
          return (
            (t = l({}, this.constructor.Default, g(this._element).data(), t)),
            _.typeCheckConfig(It, t, this.constructor.DefaultType),
            t
          )
        }),
        (t._getMenuElement = function () {
          if (!this._menu) {
            var t = c._getParentFromElement(this._element)
            t && (this._menu = t.querySelector(qt))
          }
          return this._menu
        }),
        (t._getPlacement = function () {
          var t = g(this._element.parentNode),
            e = Vt
          return (
            t.hasClass(jt)
              ? ((e = Qt), g(this._menu).hasClass(xt) && (e = Bt))
              : t.hasClass(Ht)
              ? (e = zt)
              : t.hasClass(Rt)
              ? (e = Xt)
              : g(this._menu).hasClass(xt) && (e = Yt),
            e
          )
        }),
        (t._detectNavbar = function () {
          return 0 < g(this._element).closest('.navbar').length
        }),
        (t._getOffset = function () {
          var e = this,
            t = {}
          return (
            'function' == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets, e._element) || {}
                    )),
                    t
                  )
                })
              : (t.offset = this._config.offset),
            t
          )
        }),
        (t._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary }
            }
          }
          return (
            'static' === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            t
          )
        }),
        (c._jQueryInterface = function (e) {
          return this.each(function () {
            var t = g(this).data(Dt)
            if (
              (t ||
                ((t = new c(this, 'object' == typeof e ? e : null)),
                g(this).data(Dt, t)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof t[e])
                throw new TypeError('No method named "' + e + '"')
              t[e]()
            }
          })
        }),
        (c._clearMenus = function (t) {
          if (!t || (3 !== t.which && ('keyup' !== t.type || 9 === t.which)))
            for (
              var e = [].slice.call(document.querySelectorAll(Ut)),
                n = 0,
                i = e.length;
              n < i;
              n++
            ) {
              var o = c._getParentFromElement(e[n]),
                r = g(e[n]).data(Dt),
                s = { relatedTarget: e[n] }
              if ((t && 'click' === t.type && (s.clickEvent = t), r)) {
                var a = r._menu
                if (
                  g(o).hasClass(Lt) &&
                  !(
                    t &&
                    (('click' === t.type &&
                      /input|textarea/i.test(t.target.tagName)) ||
                      ('keyup' === t.type && 9 === t.which)) &&
                    g.contains(o, t.target)
                  )
                ) {
                  var l = g.Event(kt.HIDE, s)
                  g(o).trigger(l),
                    l.isDefaultPrevented() ||
                      ('ontouchstart' in document.documentElement &&
                        g(document.body)
                          .children()
                          .off('mouseover', null, g.noop),
                      e[n].setAttribute('aria-expanded', 'false'),
                      g(a).removeClass(Lt),
                      g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN, s)))
                }
              }
            }
        }),
        (c._getParentFromElement = function (t) {
          var e,
            n = _.getSelectorFromElement(t)
          return n && (e = document.querySelector(n)), e || t.parentNode
        }),
        (c._dataApiKeydownHandler = function (t) {
          if (
            (/input|textarea/i.test(t.target.tagName)
              ? !(
                  32 === t.which ||
                  (27 !== t.which &&
                    ((40 !== t.which && 38 !== t.which) ||
                      g(t.target).closest(qt).length))
                )
              : Ot.test(t.which)) &&
            (t.preventDefault(),
            t.stopPropagation(),
            !this.disabled && !g(this).hasClass(Pt))
          ) {
            var e = c._getParentFromElement(this),
              n = g(e).hasClass(Lt)
            if (n && (!n || (27 !== t.which && 32 !== t.which))) {
              var i = [].slice.call(e.querySelectorAll(Kt))
              if (0 !== i.length) {
                var o = i.indexOf(t.target)
                38 === t.which && 0 < o && o--,
                  40 === t.which && o < i.length - 1 && o++,
                  o < 0 && (o = 0),
                  i[o].focus()
              }
            } else {
              if (27 === t.which) {
                var r = e.querySelector(Ut)
                g(r).trigger('focus')
              }
              g(this).trigger('click')
            }
          }
        }),
        s(c, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1'
            }
          },
          {
            key: 'Default',
            get: function () {
              return $t
            }
          },
          {
            key: 'DefaultType',
            get: function () {
              return Gt
            }
          }
        ]),
        c
      )
    })()
  g(document)
    .on(kt.KEYDOWN_DATA_API, Ut, Jt._dataApiKeydownHandler)
    .on(kt.KEYDOWN_DATA_API, qt, Jt._dataApiKeydownHandler)
    .on(kt.CLICK_DATA_API + ' ' + kt.KEYUP_DATA_API, Jt._clearMenus)
    .on(kt.CLICK_DATA_API, Ut, function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        Jt._jQueryInterface.call(g(this), 'toggle')
    })
    .on(kt.CLICK_DATA_API, Wt, function (t) {
      t.stopPropagation()
    }),
    (g.fn[It] = Jt._jQueryInterface),
    (g.fn[It].Constructor = Jt),
    (g.fn[It].noConflict = function () {
      return (g.fn[It] = Nt), Jt._jQueryInterface
    })
  var Zt = 'modal',
    te = 'bs.modal',
    ee = '.' + te,
    ne = g.fn[Zt],
    ie = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    oe = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean'
    },
    re = {
      HIDE: 'hide' + ee,
      HIDDEN: 'hidden' + ee,
      SHOW: 'show' + ee,
      SHOWN: 'shown' + ee,
      FOCUSIN: 'focusin' + ee,
      RESIZE: 'resize' + ee,
      CLICK_DISMISS: 'click.dismiss' + ee,
      KEYDOWN_DISMISS: 'keydown.dismiss' + ee,
      MOUSEUP_DISMISS: 'mouseup.dismiss' + ee,
      MOUSEDOWN_DISMISS: 'mousedown.dismiss' + ee,
      CLICK_DATA_API: 'click' + ee + '.data-api'
    },
    se = 'modal-dialog-scrollable',
    ae = 'modal-scrollbar-measure',
    le = 'modal-backdrop',
    ce = 'modal-open',
    he = 'fade',
    ue = 'show',
    fe = '.modal-dialog',
    de = '.modal-body',
    ge = '[data-toggle="modal"]',
    _e = '[data-dismiss="modal"]',
    me = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    pe = '.sticky-top',
    ve = (function () {
      function o (t, e) {
        ;(this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector(fe)),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0)
      }
      var t = o.prototype
      return (
        (t.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t)
        }),
        (t.show = function (t) {
          var e = this
          if (!this._isShown && !this._isTransitioning) {
            g(this._element).hasClass(he) && (this._isTransitioning = !0)
            var n = g.Event(re.SHOW, { relatedTarget: t })
            g(this._element).trigger(n),
              this._isShown ||
                n.isDefaultPrevented() ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g(this._element).on(re.CLICK_DISMISS, _e, function (t) {
                  return e.hide(t)
                }),
                g(this._dialog).on(re.MOUSEDOWN_DISMISS, function () {
                  g(e._element).one(re.MOUSEUP_DISMISS, function (t) {
                    g(t.target).is(e._element) && (e._ignoreBackdropClick = !0)
                  })
                }),
                this._showBackdrop(function () {
                  return e._showElement(t)
                }))
          }
        }),
        (t.hide = function (t) {
          var e = this
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = g.Event(re.HIDE)
            if (
              (g(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1
              var i = g(this._element).hasClass(he)
              if (
                (i && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                g(document).off(re.FOCUSIN),
                g(this._element).removeClass(ue),
                g(this._element).off(re.CLICK_DISMISS),
                g(this._dialog).off(re.MOUSEDOWN_DISMISS),
                i)
              ) {
                var o = _.getTransitionDurationFromElement(this._element)
                g(this._element)
                  .one(_.TRANSITION_END, function (t) {
                    return e._hideModal(t)
                  })
                  .emulateTransitionEnd(o)
              } else this._hideModal()
            }
          }
        }),
        (t.dispose = function () {
          ;[window, this._element, this._dialog].forEach(function (t) {
            return g(t).off(ee)
          }),
            g(document).off(re.FOCUSIN),
            g.removeData(this._element, te),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null)
        }),
        (t.handleUpdate = function () {
          this._adjustDialog()
        }),
        (t._getConfig = function (t) {
          return (t = l({}, ie, t)), _.typeCheckConfig(Zt, t, oe), t
        }),
        (t._showElement = function (t) {
          var e = this,
            n = g(this._element).hasClass(he)
          ;(this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', !0),
            g(this._dialog).hasClass(se)
              ? (this._dialog.querySelector(de).scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && _.reflow(this._element),
            g(this._element).addClass(ue),
            this._config.focus && this._enforceFocus()
          var i = g.Event(re.SHOWN, { relatedTarget: t }),
            o = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                g(e._element).trigger(i)
            }
          if (n) {
            var r = _.getTransitionDurationFromElement(this._dialog)
            g(this._dialog).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
          } else o()
        }),
        (t._enforceFocus = function () {
          var e = this
          g(document)
            .off(re.FOCUSIN)
            .on(re.FOCUSIN, function (t) {
              document !== t.target &&
                e._element !== t.target &&
                0 === g(e._element).has(t.target).length &&
                e._element.focus()
            })
        }),
        (t._setEscapeEvent = function () {
          var e = this
          this._isShown && this._config.keyboard
            ? g(this._element).on(re.KEYDOWN_DISMISS, function (t) {
                27 === t.which && (t.preventDefault(), e.hide())
              })
            : this._isShown || g(this._element).off(re.KEYDOWN_DISMISS)
        }),
        (t._setResizeEvent = function () {
          var e = this
          this._isShown
            ? g(window).on(re.RESIZE, function (t) {
                return e.handleUpdate(t)
              })
            : g(window).off(re.RESIZE)
        }),
        (t._hideModal = function () {
          var t = this
          ;(this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            this._element.removeAttribute('aria-modal'),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              g(document.body).removeClass(ce),
                t._resetAdjustments(),
                t._resetScrollbar(),
                g(t._element).trigger(re.HIDDEN)
            })
        }),
        (t._removeBackdrop = function () {
          this._backdrop &&
            (g(this._backdrop).remove(), (this._backdrop = null))
        }),
        (t._showBackdrop = function (t) {
          var e = this,
            n = g(this._element).hasClass(he) ? he : ''
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement('div')),
              (this._backdrop.className = le),
              n && this._backdrop.classList.add(n),
              g(this._backdrop).appendTo(document.body),
              g(this._element).on(re.CLICK_DISMISS, function (t) {
                e._ignoreBackdropClick
                  ? (e._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ('static' === e._config.backdrop
                      ? e._element.focus()
                      : e.hide())
              }),
              n && _.reflow(this._backdrop),
              g(this._backdrop).addClass(ue),
              !t)
            )
              return
            if (!n) return void t()
            var i = _.getTransitionDurationFromElement(this._backdrop)
            g(this._backdrop).one(_.TRANSITION_END, t).emulateTransitionEnd(i)
          } else if (!this._isShown && this._backdrop) {
            g(this._backdrop).removeClass(ue)
            var o = function () {
              e._removeBackdrop(), t && t()
            }
            if (g(this._element).hasClass(he)) {
              var r = _.getTransitionDurationFromElement(this._backdrop)
              g(this._backdrop).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
            } else o()
          } else t && t()
        }),
        (t._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + 'px')
        }),
        (t._resetAdjustments = function () {
          ;(this._element.style.paddingLeft = ''),
            (this._element.style.paddingRight = '')
        }),
        (t._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect()
          ;(this._isBodyOverflowing = t.left + t.right < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth())
        }),
        (t._setScrollbar = function () {
          var o = this
          if (this._isBodyOverflowing) {
            var t = [].slice.call(document.querySelectorAll(me)),
              e = [].slice.call(document.querySelectorAll(pe))
            g(t).each(function (t, e) {
              var n = e.style.paddingRight,
                i = g(e).css('padding-right')
              g(e)
                .data('padding-right', n)
                .css('padding-right', parseFloat(i) + o._scrollbarWidth + 'px')
            }),
              g(e).each(function (t, e) {
                var n = e.style.marginRight,
                  i = g(e).css('margin-right')
                g(e)
                  .data('margin-right', n)
                  .css('margin-right', parseFloat(i) - o._scrollbarWidth + 'px')
              })
            var n = document.body.style.paddingRight,
              i = g(document.body).css('padding-right')
            g(document.body)
              .data('padding-right', n)
              .css('padding-right', parseFloat(i) + this._scrollbarWidth + 'px')
          }
          g(document.body).addClass(ce)
        }),
        (t._resetScrollbar = function () {
          var t = [].slice.call(document.querySelectorAll(me))
          g(t).each(function (t, e) {
            var n = g(e).data('padding-right')
            g(e).removeData('padding-right'), (e.style.paddingRight = n || '')
          })
          var e = [].slice.call(document.querySelectorAll('' + pe))
          g(e).each(function (t, e) {
            var n = g(e).data('margin-right')
            'undefined' != typeof n &&
              g(e).css('margin-right', n).removeData('margin-right')
          })
          var n = g(document.body).data('padding-right')
          g(document.body).removeData('padding-right'),
            (document.body.style.paddingRight = n || '')
        }),
        (t._getScrollbarWidth = function () {
          var t = document.createElement('div')
          ;(t.className = ae), document.body.appendChild(t)
          var e = t.getBoundingClientRect().width - t.clientWidth
          return document.body.removeChild(t), e
        }),
        (o._jQueryInterface = function (n, i) {
          return this.each(function () {
            var t = g(this).data(te),
              e = l({}, ie, g(this).data(), 'object' == typeof n && n ? n : {})
            if (
              (t || ((t = new o(this, e)), g(this).data(te, t)),
              'string' == typeof n)
            ) {
              if ('undefined' == typeof t[n])
                throw new TypeError('No method named "' + n + '"')
              t[n](i)
            } else e.show && t.show(i)
          })
        }),
        s(o, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1'
            }
          },
          {
            key: 'Default',
            get: function () {
              return ie
            }
          }
        ]),
        o
      )
    })()
  g(document).on(re.CLICK_DATA_API, ge, function (t) {
    var e,
      n = this,
      i = _.getSelectorFromElement(this)
    i && (e = document.querySelector(i))
    var o = g(e).data(te) ? 'toggle' : l({}, g(e).data(), g(this).data())
    ;('A' !== this.tagName && 'AREA' !== this.tagName) || t.preventDefault()
    var r = g(e).one(re.SHOW, function (t) {
      t.isDefaultPrevented() ||
        r.one(re.HIDDEN, function () {
          g(n).is(':visible') && n.focus()
        })
    })
    ve._jQueryInterface.call(g(e), o, this)
  }),
    (g.fn[Zt] = ve._jQueryInterface),
    (g.fn[Zt].Constructor = ve),
    (g.fn[Zt].noConflict = function () {
      return (g.fn[Zt] = ne), ve._jQueryInterface
    })
  var ye = [
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href'
    ],
    Ee = {
      '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
      a: ['target', 'href', 'title', 'rel'],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ['src', 'alt', 'title', 'width', 'height'],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    Ce = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
    Te =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i
  function Se (t, s, e) {
    if (0 === t.length) return t
    if (e && 'function' == typeof e) return e(t)
    for (
      var n = new window.DOMParser().parseFromString(t, 'text/html'),
        a = Object.keys(s),
        l = [].slice.call(n.body.querySelectorAll('*')),
        i = function (t, e) {
          var n = l[t],
            i = n.nodeName.toLowerCase()
          if (-1 === a.indexOf(n.nodeName.toLowerCase()))
            return n.parentNode.removeChild(n), 'continue'
          var o = [].slice.call(n.attributes),
            r = [].concat(s['*'] || [], s[i] || [])
          o.forEach(function (t) {
            ;(function (t, e) {
              var n = t.nodeName.toLowerCase()
              if (-1 !== e.indexOf(n))
                return (
                  -1 === ye.indexOf(n) ||
                  Boolean(t.nodeValue.match(Ce) || t.nodeValue.match(Te))
                )
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (n.match(i[o])) return !0
              return !1
            })(t, r) || n.removeAttribute(t.nodeName)
          })
        },
        o = 0,
        r = l.length;
      o < r;
      o++
    )
      i(o)
    return n.body.innerHTML
  }
  var be = 'tooltip',
    Ie = 'bs.tooltip',
    De = '.' + Ie,
    we = g.fn[be],
    Ae = 'bs-tooltip',
    Ne = new RegExp('(^|\\s)' + Ae + '\\S+', 'g'),
    Oe = ['sanitize', 'whiteList', 'sanitizeFn'],
    ke = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object'
    },
    Pe = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left'
    },
    Le = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      sanitize: !0,
      sanitizeFn: null,
      whiteList: Ee
    },
    je = 'show',
    He = 'out',
    Re = {
      HIDE: 'hide' + De,
      HIDDEN: 'hidden' + De,
      SHOW: 'show' + De,
      SHOWN: 'shown' + De,
      INSERTED: 'inserted' + De,
      CLICK: 'click' + De,
      FOCUSIN: 'focusin' + De,
      FOCUSOUT: 'focusout' + De,
      MOUSEENTER: 'mouseenter' + De,
      MOUSELEAVE: 'mouseleave' + De
    },
    xe = 'fade',
    Fe = 'show',
    Ue = '.tooltip-inner',
    We = '.arrow',
    qe = 'hover',
    Me = 'focus',
    Ke = 'click',
    Qe = 'manual',
    Be = (function () {
      function i (t, e) {
        if ('undefined' == typeof u)
          throw new TypeError(
            "Bootstrap's tooltips require Popper.js (https://popper.js.org/)"
          )
        ;(this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ''),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners()
      }
      var t = i.prototype
      return (
        (t.enable = function () {
          this._isEnabled = !0
        }),
        (t.disable = function () {
          this._isEnabled = !1
        }),
        (t.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled
        }),
        (t.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = g(t.currentTarget).data(e)
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                g(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
            } else {
              if (g(this.getTipElement()).hasClass(Fe))
                return void this._leave(null, this)
              this._enter(null, this)
            }
        }),
        (t.dispose = function () {
          clearTimeout(this._timeout),
            g.removeData(this.element, this.constructor.DATA_KEY),
            g(this.element).off(this.constructor.EVENT_KEY),
            g(this.element).closest('.modal').off('hide.bs.modal'),
            this.tip && g(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null) !== this._popper &&
              this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null)
        }),
        (t.show = function () {
          var e = this
          if ('none' === g(this.element).css('display'))
            throw new Error('Please use show on visible elements')
          var t = g.Event(this.constructor.Event.SHOW)
          if (this.isWithContent() && this._isEnabled) {
            g(this.element).trigger(t)
            var n = _.findShadowRoot(this.element),
              i = g.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              )
            if (t.isDefaultPrevented() || !i) return
            var o = this.getTipElement(),
              r = _.getUID(this.constructor.NAME)
            o.setAttribute('id', r),
              this.element.setAttribute('aria-describedby', r),
              this.setContent(),
              this.config.animation && g(o).addClass(xe)
            var s =
                'function' == typeof this.config.placement
                  ? this.config.placement.call(this, o, this.element)
                  : this.config.placement,
              a = this._getAttachment(s)
            this.addAttachmentClass(a)
            var l = this._getContainer()
            g(o).data(this.constructor.DATA_KEY, this),
              g.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || g(o).appendTo(l),
              g(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new u(this.element, o, {
                placement: a,
                modifiers: {
                  offset: this._getOffset(),
                  flip: { behavior: this.config.fallbackPlacement },
                  arrow: { element: We },
                  preventOverflow: { boundariesElement: this.config.boundary }
                },
                onCreate: function (t) {
                  t.originalPlacement !== t.placement &&
                    e._handlePopperPlacementChange(t)
                },
                onUpdate: function (t) {
                  return e._handlePopperPlacementChange(t)
                }
              })),
              g(o).addClass(Fe),
              'ontouchstart' in document.documentElement &&
                g(document.body).children().on('mouseover', null, g.noop)
            var c = function () {
              e.config.animation && e._fixTransition()
              var t = e._hoverState
              ;(e._hoverState = null),
                g(e.element).trigger(e.constructor.Event.SHOWN),
                t === He && e._leave(null, e)
            }
            if (g(this.tip).hasClass(xe)) {
              var h = _.getTransitionDurationFromElement(this.tip)
              g(this.tip).one(_.TRANSITION_END, c).emulateTransitionEnd(h)
            } else c()
          }
        }),
        (t.hide = function (t) {
          var e = this,
            n = this.getTipElement(),
            i = g.Event(this.constructor.Event.HIDE),
            o = function () {
              e._hoverState !== je &&
                n.parentNode &&
                n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute('aria-describedby'),
                g(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t()
            }
          if ((g(this.element).trigger(i), !i.isDefaultPrevented())) {
            if (
              (g(n).removeClass(Fe),
              'ontouchstart' in document.documentElement &&
                g(document.body).children().off('mouseover', null, g.noop),
              (this._activeTrigger[Ke] = !1),
              (this._activeTrigger[Me] = !1),
              (this._activeTrigger[qe] = !1),
              g(this.tip).hasClass(xe))
            ) {
              var r = _.getTransitionDurationFromElement(n)
              g(n).one(_.TRANSITION_END, o).emulateTransitionEnd(r)
            } else o()
            this._hoverState = ''
          }
        }),
        (t.update = function () {
          null !== this._popper && this._popper.scheduleUpdate()
        }),
        (t.isWithContent = function () {
          return Boolean(this.getTitle())
        }),
        (t.addAttachmentClass = function (t) {
          g(this.getTipElement()).addClass(Ae + '-' + t)
        }),
        (t.getTipElement = function () {
          return (this.tip = this.tip || g(this.config.template)[0]), this.tip
        }),
        (t.setContent = function () {
          var t = this.getTipElement()
          this.setElementContent(g(t.querySelectorAll(Ue)), this.getTitle()),
            g(t).removeClass(xe + ' ' + Fe)
        }),
        (t.setElementContent = function (t, e) {
          'object' != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = Se(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? g(e).parent().is(t) || t.empty().append(e)
            : t.text(g(e).text())
        }),
        (t.getTitle = function () {
          var t = this.element.getAttribute('data-original-title')
          return (
            t ||
              (t =
                'function' == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          )
        }),
        (t._getOffset = function () {
          var e = this,
            t = {}
          return (
            'function' == typeof this.config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = l(
                      {},
                      t.offsets,
                      e.config.offset(t.offsets, e.element) || {}
                    )),
                    t
                  )
                })
              : (t.offset = this.config.offset),
            t
          )
        }),
        (t._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : _.isElement(this.config.container)
            ? g(this.config.container)
            : g(document).find(this.config.container)
        }),
        (t._getAttachment = function (t) {
          return Pe[t.toUpperCase()]
        }),
        (t._setListeners = function () {
          var i = this
          this.config.trigger.split(' ').forEach(function (t) {
            if ('click' === t)
              g(i.element).on(
                i.constructor.Event.CLICK,
                i.config.selector,
                function (t) {
                  return i.toggle(t)
                }
              )
            else if (t !== Qe) {
              var e =
                  t === qe
                    ? i.constructor.Event.MOUSEENTER
                    : i.constructor.Event.FOCUSIN,
                n =
                  t === qe
                    ? i.constructor.Event.MOUSELEAVE
                    : i.constructor.Event.FOCUSOUT
              g(i.element)
                .on(e, i.config.selector, function (t) {
                  return i._enter(t)
                })
                .on(n, i.config.selector, function (t) {
                  return i._leave(t)
                })
            }
          }),
            g(this.element)
              .closest('.modal')
              .on('hide.bs.modal', function () {
                i.element && i.hide()
              }),
            this.config.selector
              ? (this.config = l({}, this.config, {
                  trigger: 'manual',
                  selector: ''
                }))
              : this._fixTitle()
        }),
        (t._fixTitle = function () {
          var t = typeof this.element.getAttribute('data-original-title')
          ;(this.element.getAttribute('title') || 'string' !== t) &&
            (this.element.setAttribute(
              'data-original-title',
              this.element.getAttribute('title') || ''
            ),
            this.element.setAttribute('title', ''))
        }),
        (t._enter = function (t, e) {
          var n = this.constructor.DATA_KEY
          ;(e = e || g(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger['focusin' === t.type ? Me : qe] = !0),
            g(e.getTipElement()).hasClass(Fe) || e._hoverState === je
              ? (e._hoverState = je)
              : (clearTimeout(e._timeout),
                (e._hoverState = je),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === je && e.show()
                    }, e.config.delay.show))
                  : e.show())
        }),
        (t._leave = function (t, e) {
          var n = this.constructor.DATA_KEY
          ;(e = e || g(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            g(t.currentTarget).data(n, e)),
            t && (e._activeTrigger['focusout' === t.type ? Me : qe] = !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = He),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    e._hoverState === He && e.hide()
                  }, e.config.delay.hide))
                : e.hide())
        }),
        (t._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0
          return !1
        }),
        (t._getConfig = function (t) {
          var e = g(this.element).data()
          return (
            Object.keys(e).forEach(function (t) {
              ;-1 !== Oe.indexOf(t) && delete e[t]
            }),
            'number' ==
              typeof (t = l(
                {},
                this.constructor.Default,
                e,
                'object' == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            'number' == typeof t.title && (t.title = t.title.toString()),
            'number' == typeof t.content && (t.content = t.content.toString()),
            _.typeCheckConfig(be, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = Se(t.template, t.whiteList, t.sanitizeFn)),
            t
          )
        }),
        (t._getDelegateConfig = function () {
          var t = {}
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e])
          return t
        }),
        (t._cleanTipClass = function () {
          var t = g(this.getTipElement()),
            e = t.attr('class').match(Ne)
          null !== e && e.length && t.removeClass(e.join(''))
        }),
        (t._handlePopperPlacementChange = function (t) {
          var e = t.instance
          ;(this.tip = e.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement))
        }),
        (t._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation
          null === t.getAttribute('x-placement') &&
            (g(t).removeClass(xe),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e))
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = g(this).data(Ie),
              e = 'object' == typeof n && n
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), g(this).data(Ie, t)),
              'string' == typeof n)
            ) {
              if ('undefined' == typeof t[n])
                throw new TypeError('No method named "' + n + '"')
              t[n]()
            }
          })
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1'
            }
          },
          {
            key: 'Default',
            get: function () {
              return Le
            }
          },
          {
            key: 'NAME',
            get: function () {
              return be
            }
          },
          {
            key: 'DATA_KEY',
            get: function () {
              return Ie
            }
          },
          {
            key: 'Event',
            get: function () {
              return Re
            }
          },
          {
            key: 'EVENT_KEY',
            get: function () {
              return De
            }
          },
          {
            key: 'DefaultType',
            get: function () {
              return ke
            }
          }
        ]),
        i
      )
    })()
  ;(g.fn[be] = Be._jQueryInterface),
    (g.fn[be].Constructor = Be),
    (g.fn[be].noConflict = function () {
      return (g.fn[be] = we), Be._jQueryInterface
    })
  var Ve = 'popover',
    Ye = 'bs.popover',
    ze = '.' + Ye,
    Xe = g.fn[Ve],
    $e = 'bs-popover',
    Ge = new RegExp('(^|\\s)' + $e + '\\S+', 'g'),
    Je = l({}, Be.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }),
    Ze = l({}, Be.DefaultType, { content: '(string|element|function)' }),
    tn = 'fade',
    en = 'show',
    nn = '.popover-header',
    on = '.popover-body',
    rn = {
      HIDE: 'hide' + ze,
      HIDDEN: 'hidden' + ze,
      SHOW: 'show' + ze,
      SHOWN: 'shown' + ze,
      INSERTED: 'inserted' + ze,
      CLICK: 'click' + ze,
      FOCUSIN: 'focusin' + ze,
      FOCUSOUT: 'focusout' + ze,
      MOUSEENTER: 'mouseenter' + ze,
      MOUSELEAVE: 'mouseleave' + ze
    },
    sn = (function (t) {
      var e, n
      function i () {
        return t.apply(this, arguments) || this
      }
      ;(n = t),
        ((e = i).prototype = Object.create(n.prototype)),
        ((e.prototype.constructor = e).__proto__ = n)
      var o = i.prototype
      return (
        (o.isWithContent = function () {
          return this.getTitle() || this._getContent()
        }),
        (o.addAttachmentClass = function (t) {
          g(this.getTipElement()).addClass($e + '-' + t)
        }),
        (o.getTipElement = function () {
          return (this.tip = this.tip || g(this.config.template)[0]), this.tip
        }),
        (o.setContent = function () {
          var t = g(this.getTipElement())
          this.setElementContent(t.find(nn), this.getTitle())
          var e = this._getContent()
          'function' == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find(on), e),
            t.removeClass(tn + ' ' + en)
        }),
        (o._getContent = function () {
          return (
            this.element.getAttribute('data-content') || this.config.content
          )
        }),
        (o._cleanTipClass = function () {
          var t = g(this.getTipElement()),
            e = t.attr('class').match(Ge)
          null !== e && 0 < e.length && t.removeClass(e.join(''))
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = g(this).data(Ye),
              e = 'object' == typeof n ? n : null
            if (
              (t || !/dispose|hide/.test(n)) &&
              (t || ((t = new i(this, e)), g(this).data(Ye, t)),
              'string' == typeof n)
            ) {
              if ('undefined' == typeof t[n])
                throw new TypeError('No method named "' + n + '"')
              t[n]()
            }
          })
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1'
            }
          },
          {
            key: 'Default',
            get: function () {
              return Je
            }
          },
          {
            key: 'NAME',
            get: function () {
              return Ve
            }
          },
          {
            key: 'DATA_KEY',
            get: function () {
              return Ye
            }
          },
          {
            key: 'Event',
            get: function () {
              return rn
            }
          },
          {
            key: 'EVENT_KEY',
            get: function () {
              return ze
            }
          },
          {
            key: 'DefaultType',
            get: function () {
              return Ze
            }
          }
        ]),
        i
      )
    })(Be)
  ;(g.fn[Ve] = sn._jQueryInterface),
    (g.fn[Ve].Constructor = sn),
    (g.fn[Ve].noConflict = function () {
      return (g.fn[Ve] = Xe), sn._jQueryInterface
    })
  var an = 'scrollspy',
    ln = 'bs.scrollspy',
    cn = '.' + ln,
    hn = g.fn[an],
    un = { offset: 10, method: 'auto', target: '' },
    fn = { offset: 'number', method: 'string', target: '(string|element)' },
    dn = {
      ACTIVATE: 'activate' + cn,
      SCROLL: 'scroll' + cn,
      LOAD_DATA_API: 'load' + cn + '.data-api'
    },
    gn = 'dropdown-item',
    _n = 'active',
    mn = '[data-spy="scroll"]',
    pn = '.nav, .list-group',
    vn = '.nav-link',
    yn = '.nav-item',
    En = '.list-group-item',
    Cn = '.dropdown',
    Tn = '.dropdown-item',
    Sn = '.dropdown-toggle',
    bn = 'offset',
    In = 'position',
    Dn = (function () {
      function n (t, e) {
        var n = this
        ;(this._element = t),
          (this._scrollElement = 'BODY' === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            ' ' +
            vn +
            ',' +
            this._config.target +
            ' ' +
            En +
            ',' +
            this._config.target +
            ' ' +
            Tn),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          g(this._scrollElement).on(dn.SCROLL, function (t) {
            return n._process(t)
          }),
          this.refresh(),
          this._process()
      }
      var t = n.prototype
      return (
        (t.refresh = function () {
          var e = this,
            t = this._scrollElement === this._scrollElement.window ? bn : In,
            o = 'auto' === this._config.method ? t : this._config.method,
            r = o === In ? this._getScrollTop() : 0
          ;(this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  n = _.getSelectorFromElement(t)
                if ((n && (e = document.querySelector(n)), e)) {
                  var i = e.getBoundingClientRect()
                  if (i.width || i.height) return [g(e)[o]().top + r, n]
                }
                return null
              })
              .filter(function (t) {
                return t
              })
              .sort(function (t, e) {
                return t[0] - e[0]
              })
              .forEach(function (t) {
                e._offsets.push(t[0]), e._targets.push(t[1])
              })
        }),
        (t.dispose = function () {
          g.removeData(this._element, ln),
            g(this._scrollElement).off(cn),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null)
        }),
        (t._getConfig = function (t) {
          if (
            'string' !=
            typeof (t = l({}, un, 'object' == typeof t && t ? t : {})).target
          ) {
            var e = g(t.target).attr('id')
            e || ((e = _.getUID(an)), g(t.target).attr('id', e)),
              (t.target = '#' + e)
          }
          return _.typeCheckConfig(an, t, fn), t
        }),
        (t._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop
        }),
        (t._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          )
        }),
        (t._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height
        }),
        (t._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight()
          if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
            var i = this._targets[this._targets.length - 1]
            this._activeTarget !== i && this._activate(i)
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              0 < this._offsets[0]
            )
              return (this._activeTarget = null), void this._clear()
            for (var o = this._offsets.length; o--; ) {
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ('undefined' == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o])
            }
          }
        }),
        (t._activate = function (e) {
          ;(this._activeTarget = e), this._clear()
          var t = this._selector.split(',').map(function (t) {
              return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            }),
            n = g([].slice.call(document.querySelectorAll(t.join(','))))
          n.hasClass(gn)
            ? (n.closest(Cn).find(Sn).addClass(_n), n.addClass(_n))
            : (n.addClass(_n),
              n
                .parents(pn)
                .prev(vn + ', ' + En)
                .addClass(_n),
              n.parents(pn).prev(yn).children(vn).addClass(_n)),
            g(this._scrollElement).trigger(dn.ACTIVATE, { relatedTarget: e })
        }),
        (t._clear = function () {
          ;[].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains(_n)
            })
            .forEach(function (t) {
              return t.classList.remove(_n)
            })
        }),
        (n._jQueryInterface = function (e) {
          return this.each(function () {
            var t = g(this).data(ln)
            if (
              (t ||
                ((t = new n(this, 'object' == typeof e && e)),
                g(this).data(ln, t)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof t[e])
                throw new TypeError('No method named "' + e + '"')
              t[e]()
            }
          })
        }),
        s(n, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1'
            }
          },
          {
            key: 'Default',
            get: function () {
              return un
            }
          }
        ]),
        n
      )
    })()
  g(window).on(dn.LOAD_DATA_API, function () {
    for (
      var t = [].slice.call(document.querySelectorAll(mn)), e = t.length;
      e--;

    ) {
      var n = g(t[e])
      Dn._jQueryInterface.call(n, n.data())
    }
  }),
    (g.fn[an] = Dn._jQueryInterface),
    (g.fn[an].Constructor = Dn),
    (g.fn[an].noConflict = function () {
      return (g.fn[an] = hn), Dn._jQueryInterface
    })
  var wn = 'bs.tab',
    An = '.' + wn,
    Nn = g.fn.tab,
    On = {
      HIDE: 'hide' + An,
      HIDDEN: 'hidden' + An,
      SHOW: 'show' + An,
      SHOWN: 'shown' + An,
      CLICK_DATA_API: 'click' + An + '.data-api'
    },
    kn = 'dropdown-menu',
    Pn = 'active',
    Ln = 'disabled',
    jn = 'fade',
    Hn = 'show',
    Rn = '.dropdown',
    xn = '.nav, .list-group',
    Fn = '.active',
    Un = '> li > .active',
    Wn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    qn = '.dropdown-toggle',
    Mn = '> .dropdown-menu .active',
    Kn = (function () {
      function i (t) {
        this._element = t
      }
      var t = i.prototype
      return (
        (t.show = function () {
          var n = this
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                g(this._element).hasClass(Pn)) ||
              g(this._element).hasClass(Ln)
            )
          ) {
            var t,
              i,
              e = g(this._element).closest(xn)[0],
              o = _.getSelectorFromElement(this._element)
            if (e) {
              var r = 'UL' === e.nodeName || 'OL' === e.nodeName ? Un : Fn
              i = (i = g.makeArray(g(e).find(r)))[i.length - 1]
            }
            var s = g.Event(On.HIDE, { relatedTarget: this._element }),
              a = g.Event(On.SHOW, { relatedTarget: i })
            if (
              (i && g(i).trigger(s),
              g(this._element).trigger(a),
              !a.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              o && (t = document.querySelector(o)),
                this._activate(this._element, e)
              var l = function () {
                var t = g.Event(On.HIDDEN, { relatedTarget: n._element }),
                  e = g.Event(On.SHOWN, { relatedTarget: i })
                g(i).trigger(t), g(n._element).trigger(e)
              }
              t ? this._activate(t, t.parentNode, l) : l()
            }
          }
        }),
        (t.dispose = function () {
          g.removeData(this._element, wn), (this._element = null)
        }),
        (t._activate = function (t, e, n) {
          var i = this,
            o = (
              !e || ('UL' !== e.nodeName && 'OL' !== e.nodeName)
                ? g(e).children(Fn)
                : g(e).find(Un)
            )[0],
            r = n && o && g(o).hasClass(jn),
            s = function () {
              return i._transitionComplete(t, o, n)
            }
          if (o && r) {
            var a = _.getTransitionDurationFromElement(o)
            g(o)
              .removeClass(Hn)
              .one(_.TRANSITION_END, s)
              .emulateTransitionEnd(a)
          } else s()
        }),
        (t._transitionComplete = function (t, e, n) {
          if (e) {
            g(e).removeClass(Pn)
            var i = g(e.parentNode).find(Mn)[0]
            i && g(i).removeClass(Pn),
              'tab' === e.getAttribute('role') &&
                e.setAttribute('aria-selected', !1)
          }
          if (
            (g(t).addClass(Pn),
            'tab' === t.getAttribute('role') &&
              t.setAttribute('aria-selected', !0),
            _.reflow(t),
            t.classList.contains(jn) && t.classList.add(Hn),
            t.parentNode && g(t.parentNode).hasClass(kn))
          ) {
            var o = g(t).closest(Rn)[0]
            if (o) {
              var r = [].slice.call(o.querySelectorAll(qn))
              g(r).addClass(Pn)
            }
            t.setAttribute('aria-expanded', !0)
          }
          n && n()
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = g(this),
              e = t.data(wn)
            if (
              (e || ((e = new i(this)), t.data(wn, e)), 'string' == typeof n)
            ) {
              if ('undefined' == typeof e[n])
                throw new TypeError('No method named "' + n + '"')
              e[n]()
            }
          })
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1'
            }
          }
        ]),
        i
      )
    })()
  g(document).on(On.CLICK_DATA_API, Wn, function (t) {
    t.preventDefault(), Kn._jQueryInterface.call(g(this), 'show')
  }),
    (g.fn.tab = Kn._jQueryInterface),
    (g.fn.tab.Constructor = Kn),
    (g.fn.tab.noConflict = function () {
      return (g.fn.tab = Nn), Kn._jQueryInterface
    })
  var Qn = 'toast',
    Bn = 'bs.toast',
    Vn = '.' + Bn,
    Yn = g.fn[Qn],
    zn = {
      CLICK_DISMISS: 'click.dismiss' + Vn,
      HIDE: 'hide' + Vn,
      HIDDEN: 'hidden' + Vn,
      SHOW: 'show' + Vn,
      SHOWN: 'shown' + Vn
    },
    Xn = 'fade',
    $n = 'hide',
    Gn = 'show',
    Jn = 'showing',
    Zn = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
    ti = { animation: !0, autohide: !0, delay: 500 },
    ei = '[data-dismiss="toast"]',
    ni = (function () {
      function i (t, e) {
        ;(this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners()
      }
      var t = i.prototype
      return (
        (t.show = function () {
          var t = this
          g(this._element).trigger(zn.SHOW),
            this._config.animation && this._element.classList.add(Xn)
          var e = function () {
            t._element.classList.remove(Jn),
              t._element.classList.add(Gn),
              g(t._element).trigger(zn.SHOWN),
              t._config.autohide && t.hide()
          }
          if (
            (this._element.classList.remove($n),
            this._element.classList.add(Jn),
            this._config.animation)
          ) {
            var n = _.getTransitionDurationFromElement(this._element)
            g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
          } else e()
        }),
        (t.hide = function (t) {
          var e = this
          this._element.classList.contains(Gn) &&
            (g(this._element).trigger(zn.HIDE),
            t
              ? this._close()
              : (this._timeout = setTimeout(function () {
                  e._close()
                }, this._config.delay)))
        }),
        (t.dispose = function () {
          clearTimeout(this._timeout),
            (this._timeout = null),
            this._element.classList.contains(Gn) &&
              this._element.classList.remove(Gn),
            g(this._element).off(zn.CLICK_DISMISS),
            g.removeData(this._element, Bn),
            (this._element = null),
            (this._config = null)
        }),
        (t._getConfig = function (t) {
          return (
            (t = l(
              {},
              ti,
              g(this._element).data(),
              'object' == typeof t && t ? t : {}
            )),
            _.typeCheckConfig(Qn, t, this.constructor.DefaultType),
            t
          )
        }),
        (t._setListeners = function () {
          var t = this
          g(this._element).on(zn.CLICK_DISMISS, ei, function () {
            return t.hide(!0)
          })
        }),
        (t._close = function () {
          var t = this,
            e = function () {
              t._element.classList.add($n), g(t._element).trigger(zn.HIDDEN)
            }
          if ((this._element.classList.remove(Gn), this._config.animation)) {
            var n = _.getTransitionDurationFromElement(this._element)
            g(this._element).one(_.TRANSITION_END, e).emulateTransitionEnd(n)
          } else e()
        }),
        (i._jQueryInterface = function (n) {
          return this.each(function () {
            var t = g(this),
              e = t.data(Bn)
            if (
              (e ||
                ((e = new i(this, 'object' == typeof n && n)), t.data(Bn, e)),
              'string' == typeof n)
            ) {
              if ('undefined' == typeof e[n])
                throw new TypeError('No method named "' + n + '"')
              e[n](this)
            }
          })
        }),
        s(i, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.3.1'
            }
          },
          {
            key: 'DefaultType',
            get: function () {
              return Zn
            }
          },
          {
            key: 'Default',
            get: function () {
              return ti
            }
          }
        ]),
        i
      )
    })()
  ;(g.fn[Qn] = ni._jQueryInterface),
    (g.fn[Qn].Constructor = ni),
    (g.fn[Qn].noConflict = function () {
      return (g.fn[Qn] = Yn), ni._jQueryInterface
    }),
    (function () {
      if ('undefined' == typeof g)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        )
      var t = g.fn.jquery.split(' ')[0].split('.')
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        4 <= t[0]
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        )
    })(),
    (t.Util = _),
    (t.Alert = p),
    (t.Button = P),
    (t.Carousel = lt),
    (t.Collapse = bt),
    (t.Dropdown = Jt),
    (t.Modal = ve),
    (t.Popover = sn),
    (t.Scrollspy = Dn),
    (t.Tab = Kn),
    (t.Toast = ni),
    (t.Tooltip = Be),
    Object.defineProperty(t, '__esModule', { value: !0 })
})

// fancyBox v3.5.7
// ==================================================
!(function (t, e, n, o) {
  'use strict'
  function i (t, e) {
    var o,
      i,
      a,
      s = [],
      r = 0
    ;(t && t.isDefaultPrevented()) ||
      (t.preventDefault(),
      (e = e || {}),
      t && t.data && (e = h(t.data.options, e)),
      (o = e.$target || n(t.currentTarget).trigger('blur')),
      ((a = n.fancybox.getInstance()) && a.$trigger && a.$trigger.is(o)) ||
        (e.selector
          ? (s = n(e.selector))
          : ((i = o.attr('data-fancybox') || ''),
            i
              ? ((s = t.data ? t.data.items : []),
                (s = s.length
                  ? s.filter('[data-fancybox="' + i + '"]')
                  : n('[data-fancybox="' + i + '"]')))
              : (s = [o])),
        (r = n(s).index(o)),
        r < 0 && (r = 0),
        (a = n.fancybox.open(s, e, r)),
        (a.$trigger = o)))
  }
  if (((t.console = t.console || { info: function (t) {} }), n)) {
    if (n.fn.fancybox) return void console.info('fancyBox already initialized')
    var a = {
        closeExisting: !1,
        loop: !1,
        gutter: 50,
        keyboard: !0,
        preventCaptionOverlap: !0,
        arrows: !0,
        infobar: !0,
        smallBtn: 'auto',
        toolbar: 'auto',
        buttons: ['zoom', 'slideShow', 'thumbs', 'close'],
        idleTime: 3,
        protect: !1,
        modal: !1,
        image: { preload: !1 },
        ajax: { settings: { data: { fancybox: !0 } } },
        iframe: {
          tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
          preload: !0,
          css: {},
          attr: { scrolling: 'auto' }
        },
        video: {
          tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
          format: '',
          autoStart: !0
        },
        defaultType: 'image',
        animationEffect: 'zoom',
        animationDuration: 366,
        zoomOpacity: 'auto',
        transitionEffect: 'fade',
        transitionDuration: 366,
        slideClass: '',
        baseClass: '',
        baseTpl:
          '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
        spinnerTpl: '<div class="fancybox-loading"></div>',
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
        btnTpl: {
          download:
            '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
          zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
          close:
            '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
          arrowLeft:
            '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
          arrowRight:
            '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
          smallBtn:
            '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
        },
        parentEl: 'body',
        hideScrollbar: !0,
        autoFocus: !0,
        backFocus: !0,
        trapFocus: !0,
        fullScreen: { autoStart: !1 },
        touch: { vertical: !0, momentum: !0 },
        hash: null,
        media: {},
        slideShow: { autoStart: !1, speed: 3e3 },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: '.fancybox-container',
          axis: 'y'
        },
        wheel: 'auto',
        onInit: n.noop,
        beforeLoad: n.noop,
        afterLoad: n.noop,
        beforeShow: n.noop,
        afterShow: n.noop,
        beforeClose: n.noop,
        afterClose: n.noop,
        onActivate: n.noop,
        onDeactivate: n.noop,
        clickContent: function (t, e) {
          return 'image' === t.type && 'zoom'
        },
        clickSlide: 'close',
        clickOutside: 'close',
        dblclickContent: !1,
        dblclickSlide: !1,
        dblclickOutside: !1,
        mobile: {
          preventCaptionOverlap: !1,
          idleTime: !1,
          clickContent: function (t, e) {
            return 'image' === t.type && 'toggleControls'
          },
          clickSlide: function (t, e) {
            return 'image' === t.type ? 'toggleControls' : 'close'
          },
          dblclickContent: function (t, e) {
            return 'image' === t.type && 'zoom'
          },
          dblclickSlide: function (t, e) {
            return 'image' === t.type && 'zoom'
          }
        },
        lang: 'en',
        i18n: {
          en: {
            CLOSE: 'Close',
            NEXT: 'Next',
            PREV: 'Previous',
            ERROR:
              'The requested content cannot be loaded. <br/> Please try again later.',
            PLAY_START: 'Start slideshow',
            PLAY_STOP: 'Pause slideshow',
            FULL_SCREEN: 'Full screen',
            THUMBS: 'Thumbnails',
            DOWNLOAD: 'Download',
            SHARE: 'Share',
            ZOOM: 'Zoom'
          },
          de: {
            CLOSE: 'Schlie&szlig;en',
            NEXT: 'Weiter',
            PREV: 'Zur&uuml;ck',
            ERROR:
              'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.',
            PLAY_START: 'Diaschau starten',
            PLAY_STOP: 'Diaschau beenden',
            FULL_SCREEN: 'Vollbild',
            THUMBS: 'Vorschaubilder',
            DOWNLOAD: 'Herunterladen',
            SHARE: 'Teilen',
            ZOOM: 'Vergr&ouml;&szlig;ern'
          }
        }
      },
      s = n(t),
      r = n(e),
      c = 0,
      l = function (t) {
        return t && t.hasOwnProperty && t instanceof n
      },
      d = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60)
          }
        )
      })(),
      u = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e)
          }
        )
      })(),
      f = (function () {
        var t,
          n = e.createElement('fakeelement'),
          o = {
            transition: 'transitionend',
            OTransition: 'oTransitionEnd',
            MozTransition: 'transitionend',
            WebkitTransition: 'webkitTransitionEnd'
          }
        for (t in o) if (void 0 !== n.style[t]) return o[t]
        return 'transitionend'
      })(),
      p = function (t) {
        return t && t.length && t[0].offsetHeight
      },
      h = function (t, e) {
        var o = n.extend(!0, {}, t, e)
        return (
          n.each(e, function (t, e) {
            n.isArray(e) && (o[t] = e)
          }),
          o
        )
      },
      g = function (t) {
        var o, i
        return (
          !(!t || t.ownerDocument !== e) &&
          (n('.fancybox-container').css('pointer-events', 'none'),
          (o = {
            x: t.getBoundingClientRect().left + t.offsetWidth / 2,
            y: t.getBoundingClientRect().top + t.offsetHeight / 2
          }),
          (i = e.elementFromPoint(o.x, o.y) === t),
          n('.fancybox-container').css('pointer-events', ''),
          i)
        )
      },
      b = function (t, e, o) {
        var i = this
        ;(i.opts = h({ index: o }, n.fancybox.defaults)),
          n.isPlainObject(e) && (i.opts = h(i.opts, e)),
          n.fancybox.isMobile && (i.opts = h(i.opts, i.opts.mobile)),
          (i.id = i.opts.id || ++c),
          (i.currIndex = parseInt(i.opts.index, 10) || 0),
          (i.prevIndex = null),
          (i.prevPos = null),
          (i.currPos = 0),
          (i.firstRun = !0),
          (i.group = []),
          (i.slides = {}),
          i.addContent(t),
          i.group.length && i.init()
      }
    n.extend(b.prototype, {
      init: function () {
        var o,
          i,
          a = this,
          s = a.group[a.currIndex],
          r = s.opts
        r.closeExisting && n.fancybox.close(!0),
          n('body').addClass('fancybox-active'),
          !n.fancybox.getInstance() &&
            !1 !== r.hideScrollbar &&
            !n.fancybox.isMobile &&
            e.body.scrollHeight > t.innerHeight &&
            (n('head').append(
              '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                (t.innerWidth - e.documentElement.clientWidth) +
                'px;}</style>'
            ),
            n('body').addClass('compensate-for-scrollbar')),
          (i = ''),
          n.each(r.buttons, function (t, e) {
            i += r.btnTpl[e] || ''
          }),
          (o = n(
            a.translate(
              a,
              r.baseTpl
                .replace('{{buttons}}', i)
                .replace('{{arrows}}', r.btnTpl.arrowLeft + r.btnTpl.arrowRight)
            )
          )
            .attr('id', 'fancybox-container-' + a.id)
            .addClass(r.baseClass)
            .data('FancyBox', a)
            .appendTo(r.parentEl)),
          (a.$refs = { container: o }),
          [
            'bg',
            'inner',
            'infobar',
            'toolbar',
            'stage',
            'caption',
            'navigation'
          ].forEach(function (t) {
            a.$refs[t] = o.find('.fancybox-' + t)
          }),
          a.trigger('onInit'),
          a.activate(),
          a.jumpTo(a.currIndex)
      },
      translate: function (t, e) {
        var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en
        return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
          return void 0 === n[e] ? t : n[e]
        })
      },
      addContent: function (t) {
        var e,
          o = this,
          i = n.makeArray(t)
        n.each(i, function (t, e) {
          var i,
            a,
            s,
            r,
            c,
            l = {},
            d = {}
          n.isPlainObject(e)
            ? ((l = e), (d = e.opts || e))
            : 'object' === n.type(e) && n(e).length
            ? ((i = n(e)),
              (d = i.data() || {}),
              (d = n.extend(!0, {}, d, d.options)),
              (d.$orig = i),
              (l.src = o.opts.src || d.src || i.attr('href')),
              l.type || l.src || ((l.type = 'inline'), (l.src = e)))
            : (l = { type: 'html', src: e + '' }),
            (l.opts = n.extend(!0, {}, o.opts, d)),
            n.isArray(d.buttons) && (l.opts.buttons = d.buttons),
            n.fancybox.isMobile &&
              l.opts.mobile &&
              (l.opts = h(l.opts, l.opts.mobile)),
            (a = l.type || l.opts.type),
            (r = l.src || ''),
            !a &&
              r &&
              ((s = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                ? ((a = 'video'),
                  l.opts.video.format ||
                    (l.opts.video.format =
                      'video/' + ('ogv' === s[1] ? 'ogg' : s[1])))
                : r.match(
                    /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                  )
                ? (a = 'image')
                : r.match(/\.(pdf)((\?|#).*)?$/i)
                ? ((a = 'iframe'),
                  (l = n.extend(!0, l, {
                    contentType: 'pdf',
                    opts: { iframe: { preload: !1 } }
                  })))
                : '#' === r.charAt(0) && (a = 'inline')),
            a ? (l.type = a) : o.trigger('objectNeedsType', l),
            l.contentType ||
              (l.contentType =
                n.inArray(l.type, ['html', 'inline', 'ajax']) > -1
                  ? 'html'
                  : l.type),
            (l.index = o.group.length),
            'auto' == l.opts.smallBtn &&
              (l.opts.smallBtn =
                n.inArray(l.type, ['html', 'inline', 'ajax']) > -1),
            'auto' === l.opts.toolbar && (l.opts.toolbar = !l.opts.smallBtn),
            (l.$thumb = l.opts.$thumb || null),
            l.opts.$trigger &&
              l.index === o.opts.index &&
              ((l.$thumb = l.opts.$trigger.find('img:first')),
              l.$thumb.length && (l.opts.$orig = l.opts.$trigger)),
            (l.$thumb && l.$thumb.length) ||
              !l.opts.$orig ||
              (l.$thumb = l.opts.$orig.find('img:first')),
            l.$thumb && !l.$thumb.length && (l.$thumb = null),
            (l.thumb = l.opts.thumb || (l.$thumb ? l.$thumb[0].src : null)),
            'function' === n.type(l.opts.caption) &&
              (l.opts.caption = l.opts.caption.apply(e, [o, l])),
            'function' === n.type(o.opts.caption) &&
              (l.opts.caption = o.opts.caption.apply(e, [o, l])),
            l.opts.caption instanceof n ||
              (l.opts.caption =
                void 0 === l.opts.caption ? '' : l.opts.caption + ''),
            'ajax' === l.type &&
              ((c = r.split(/\s+/, 2)),
              c.length > 1 &&
                ((l.src = c.shift()), (l.opts.filter = c.shift()))),
            l.opts.modal &&
              (l.opts = n.extend(!0, l.opts, {
                trapFocus: !0,
                infobar: 0,
                toolbar: 0,
                smallBtn: 0,
                keyboard: 0,
                slideShow: 0,
                fullScreen: 0,
                thumbs: 0,
                touch: 0,
                clickContent: !1,
                clickSlide: !1,
                clickOutside: !1,
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1
              })),
            o.group.push(l)
        }),
          Object.keys(o.slides).length &&
            (o.updateControls(),
            (e = o.Thumbs) && e.isActive && (e.create(), e.focus()))
      },
      addEvents: function () {
        var e = this
        e.removeEvents(),
          e.$refs.container
            .on('click.fb-close', '[data-fancybox-close]', function (t) {
              t.stopPropagation(), t.preventDefault(), e.close(t)
            })
            .on(
              'touchstart.fb-prev click.fb-prev',
              '[data-fancybox-prev]',
              function (t) {
                t.stopPropagation(), t.preventDefault(), e.previous()
              }
            )
            .on(
              'touchstart.fb-next click.fb-next',
              '[data-fancybox-next]',
              function (t) {
                t.stopPropagation(), t.preventDefault(), e.next()
              }
            )
            .on('click.fb', '[data-fancybox-zoom]', function (t) {
              e[e.isScaledDown() ? 'scaleToActual' : 'scaleToFit']()
            }),
          s.on('orientationchange.fb resize.fb', function (t) {
            t && t.originalEvent && 'resize' === t.originalEvent.type
              ? (e.requestId && u(e.requestId),
                (e.requestId = d(function () {
                  e.update(t)
                })))
              : (e.current &&
                  'iframe' === e.current.type &&
                  e.$refs.stage.hide(),
                setTimeout(
                  function () {
                    e.$refs.stage.show(), e.update(t)
                  },
                  n.fancybox.isMobile ? 600 : 250
                ))
          }),
          r.on('keydown.fb', function (t) {
            var o = n.fancybox ? n.fancybox.getInstance() : null,
              i = o.current,
              a = t.keyCode || t.which
            if (9 == a) return void (i.opts.trapFocus && e.focus(t))
            if (
              !(
                !i.opts.keyboard ||
                t.ctrlKey ||
                t.altKey ||
                t.shiftKey ||
                n(t.target).is('input,textarea,video,audio,select')
              )
            )
              return 8 === a || 27 === a
                ? (t.preventDefault(), void e.close(t))
                : 37 === a || 38 === a
                ? (t.preventDefault(), void e.previous())
                : 39 === a || 40 === a
                ? (t.preventDefault(), void e.next())
                : void e.trigger('afterKeydown', t, a)
          }),
          e.group[e.currIndex].opts.idleTime &&
            ((e.idleSecondsCounter = 0),
            r.on(
              'mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle',
              function (t) {
                ;(e.idleSecondsCounter = 0),
                  e.isIdle && e.showControls(),
                  (e.isIdle = !1)
              }
            ),
            (e.idleInterval = t.setInterval(function () {
              ++e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime &&
                !e.isDragging &&
                ((e.isIdle = !0), (e.idleSecondsCounter = 0), e.hideControls())
            }, 1e3)))
      },
      removeEvents: function () {
        var e = this
        s.off('orientationchange.fb resize.fb'),
          r.off('keydown.fb .fb-idle'),
          this.$refs.container.off('.fb-close .fb-prev .fb-next'),
          e.idleInterval &&
            (t.clearInterval(e.idleInterval), (e.idleInterval = null))
      },
      previous: function (t) {
        return this.jumpTo(this.currPos - 1, t)
      },
      next: function (t) {
        return this.jumpTo(this.currPos + 1, t)
      },
      jumpTo: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          d,
          u,
          f = this,
          h = f.group.length
        if (!(f.isDragging || f.isClosing || (f.isAnimating && f.firstRun))) {
          if (
            ((t = parseInt(t, 10)),
            !(a = f.current ? f.current.opts.loop : f.opts.loop) &&
              (t < 0 || t >= h))
          )
            return !1
          if (
            ((o = f.firstRun = !Object.keys(f.slides).length),
            (r = f.current),
            (f.prevIndex = f.currIndex),
            (f.prevPos = f.currPos),
            (s = f.createSlide(t)),
            h > 1 &&
              ((a || s.index < h - 1) && f.createSlide(t + 1),
              (a || s.index > 0) && f.createSlide(t - 1)),
            (f.current = s),
            (f.currIndex = s.index),
            (f.currPos = s.pos),
            f.trigger('beforeShow', o),
            f.updateControls(),
            (s.forcedDuration = void 0),
            n.isNumeric(e)
              ? (s.forcedDuration = e)
              : (e = s.opts[o ? 'animationDuration' : 'transitionDuration']),
            (e = parseInt(e, 10)),
            (i = f.isMoved(s)),
            s.$slide.addClass('fancybox-slide--current'),
            o)
          )
            return (
              s.opts.animationEffect &&
                e &&
                f.$refs.container.css('transition-duration', e + 'ms'),
              f.$refs.container.addClass('fancybox-is-open').trigger('focus'),
              f.loadSlide(s),
              void f.preload('image')
            )
          ;(c = n.fancybox.getTranslate(r.$slide)),
            (l = n.fancybox.getTranslate(f.$refs.stage)),
            n.each(f.slides, function (t, e) {
              n.fancybox.stop(e.$slide, !0)
            }),
            r.pos !== s.pos && (r.isComplete = !1),
            r.$slide.removeClass(
              'fancybox-slide--complete fancybox-slide--current'
            ),
            i
              ? ((u = c.left - (r.pos * c.width + r.pos * r.opts.gutter)),
                n.each(f.slides, function (t, o) {
                  o.$slide
                    .removeClass('fancybox-animated')
                    .removeClass(function (t, e) {
                      return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(' ')
                    })
                  var i = o.pos * c.width + o.pos * o.opts.gutter
                  n.fancybox.setTranslate(o.$slide, {
                    top: 0,
                    left: i - l.left + u
                  }),
                    o.pos !== s.pos &&
                      o.$slide.addClass(
                        'fancybox-slide--' +
                          (o.pos > s.pos ? 'next' : 'previous')
                      ),
                    p(o.$slide),
                    n.fancybox.animate(
                      o.$slide,
                      {
                        top: 0,
                        left:
                          (o.pos - s.pos) * c.width +
                          (o.pos - s.pos) * o.opts.gutter
                      },
                      e,
                      function () {
                        o.$slide
                          .css({ transform: '', opacity: '' })
                          .removeClass(
                            'fancybox-slide--next fancybox-slide--previous'
                          ),
                          o.pos === f.currPos && f.complete()
                      }
                    )
                }))
              : e &&
                s.opts.transitionEffect &&
                ((d =
                  'fancybox-animated fancybox-fx-' + s.opts.transitionEffect),
                r.$slide.addClass(
                  'fancybox-slide--' + (r.pos > s.pos ? 'next' : 'previous')
                ),
                n.fancybox.animate(
                  r.$slide,
                  d,
                  e,
                  function () {
                    r.$slide
                      .removeClass(d)
                      .removeClass(
                        'fancybox-slide--next fancybox-slide--previous'
                      )
                  },
                  !1
                )),
            s.isLoaded ? f.revealContent(s) : f.loadSlide(s),
            f.preload('image')
        }
      },
      createSlide: function (t) {
        var e,
          o,
          i = this
        return (
          (o = t % i.group.length),
          (o = o < 0 ? i.group.length + o : o),
          !i.slides[t] &&
            i.group[o] &&
            ((e = n('<div class="fancybox-slide"></div>').appendTo(
              i.$refs.stage
            )),
            (i.slides[t] = n.extend(!0, {}, i.group[o], {
              pos: t,
              $slide: e,
              isLoaded: !1
            })),
            i.updateSlide(i.slides[t])),
          i.slides[t]
        )
      },
      scaleToActual: function (t, e, o) {
        var i,
          a,
          s,
          r,
          c,
          l = this,
          d = l.current,
          u = d.$content,
          f = n.fancybox.getTranslate(d.$slide).width,
          p = n.fancybox.getTranslate(d.$slide).height,
          h = d.width,
          g = d.height
        l.isAnimating ||
          l.isMoved() ||
          !u ||
          'image' != d.type ||
          !d.isLoaded ||
          d.hasError ||
          ((l.isAnimating = !0),
          n.fancybox.stop(u),
          (t = void 0 === t ? 0.5 * f : t),
          (e = void 0 === e ? 0.5 * p : e),
          (i = n.fancybox.getTranslate(u)),
          (i.top -= n.fancybox.getTranslate(d.$slide).top),
          (i.left -= n.fancybox.getTranslate(d.$slide).left),
          (r = h / i.width),
          (c = g / i.height),
          (a = 0.5 * f - 0.5 * h),
          (s = 0.5 * p - 0.5 * g),
          h > f &&
            ((a = i.left * r - (t * r - t)),
            a > 0 && (a = 0),
            a < f - h && (a = f - h)),
          g > p &&
            ((s = i.top * c - (e * c - e)),
            s > 0 && (s = 0),
            s < p - g && (s = p - g)),
          l.updateCursor(h, g),
          n.fancybox.animate(
            u,
            { top: s, left: a, scaleX: r, scaleY: c },
            o || 366,
            function () {
              l.isAnimating = !1
            }
          ),
          l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
      },
      scaleToFit: function (t) {
        var e,
          o = this,
          i = o.current,
          a = i.$content
        o.isAnimating ||
          o.isMoved() ||
          !a ||
          'image' != i.type ||
          !i.isLoaded ||
          i.hasError ||
          ((o.isAnimating = !0),
          n.fancybox.stop(a),
          (e = o.getFitPos(i)),
          o.updateCursor(e.width, e.height),
          n.fancybox.animate(
            a,
            {
              top: e.top,
              left: e.left,
              scaleX: e.width / a.width(),
              scaleY: e.height / a.height()
            },
            t || 366,
            function () {
              o.isAnimating = !1
            }
          ))
      },
      getFitPos: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$content,
          c = t.$slide,
          l = t.width || t.opts.width,
          d = t.height || t.opts.height,
          u = {}
        return (
          !!(t.isLoaded && r && r.length) &&
          ((e = n.fancybox.getTranslate(s.$refs.stage).width),
          (o = n.fancybox.getTranslate(s.$refs.stage).height),
          (e -=
            parseFloat(c.css('paddingLeft')) +
            parseFloat(c.css('paddingRight')) +
            parseFloat(r.css('marginLeft')) +
            parseFloat(r.css('marginRight'))),
          (o -=
            parseFloat(c.css('paddingTop')) +
            parseFloat(c.css('paddingBottom')) +
            parseFloat(r.css('marginTop')) +
            parseFloat(r.css('marginBottom'))),
          (l && d) || ((l = e), (d = o)),
          (i = Math.min(1, e / l, o / d)),
          (l *= i),
          (d *= i),
          l > e - 0.5 && (l = e),
          d > o - 0.5 && (d = o),
          'image' === t.type
            ? ((u.top =
                Math.floor(0.5 * (o - d)) + parseFloat(c.css('paddingTop'))),
              (u.left =
                Math.floor(0.5 * (e - l)) + parseFloat(c.css('paddingLeft'))))
            : 'video' === t.contentType &&
              ((a =
                t.opts.width && t.opts.height ? l / d : t.opts.ratio || 16 / 9),
              d > l / a ? (d = l / a) : l > d * a && (l = d * a)),
          (u.width = l),
          (u.height = d),
          u)
        )
      },
      update: function (t) {
        var e = this
        n.each(e.slides, function (n, o) {
          e.updateSlide(o, t)
        })
      },
      updateSlide: function (t, e) {
        var o = this,
          i = t && t.$content,
          a = t.width || t.opts.width,
          s = t.height || t.opts.height,
          r = t.$slide
        o.adjustCaption(t),
          i &&
            (a || s || 'video' === t.contentType) &&
            !t.hasError &&
            (n.fancybox.stop(i),
            n.fancybox.setTranslate(i, o.getFitPos(t)),
            t.pos === o.currPos && ((o.isAnimating = !1), o.updateCursor())),
          o.adjustLayout(t),
          r.length &&
            (r.trigger('refresh'),
            t.pos === o.currPos &&
              o.$refs.toolbar
                .add(o.$refs.navigation.find('.fancybox-button--arrow_right'))
                .toggleClass(
                  'compensate-for-scrollbar',
                  r.get(0).scrollHeight > r.get(0).clientHeight
                )),
          o.trigger('onUpdate', t, e)
      },
      centerSlide: function (t) {
        var e = this,
          o = e.current,
          i = o.$slide
        !e.isClosing &&
          o &&
          (i.siblings().css({ transform: '', opacity: '' }),
          i
            .parent()
            .children()
            .removeClass('fancybox-slide--previous fancybox-slide--next'),
          n.fancybox.animate(
            i,
            { top: 0, left: 0, opacity: 1 },
            void 0 === t ? 0 : t,
            function () {
              i.css({ transform: '', opacity: '' }),
                o.isComplete || e.complete()
            },
            !1
          ))
      },
      isMoved: function (t) {
        var e,
          o,
          i = t || this.current
        return (
          !!i &&
          ((o = n.fancybox.getTranslate(this.$refs.stage)),
          (e = n.fancybox.getTranslate(i.$slide)),
          !i.$slide.hasClass('fancybox-animated') &&
            (Math.abs(e.top - o.top) > 0.5 || Math.abs(e.left - o.left) > 0.5))
        )
      },
      updateCursor: function (t, e) {
        var o,
          i,
          a = this,
          s = a.current,
          r = a.$refs.container
        s &&
          !a.isClosing &&
          a.Guestures &&
          (r.removeClass(
            'fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan'
          ),
          (o = a.canPan(t, e)),
          (i = !!o || a.isZoomable()),
          r.toggleClass('fancybox-is-zoomable', i),
          n('[data-fancybox-zoom]').prop('disabled', !i),
          o
            ? r.addClass('fancybox-can-pan')
            : i &&
              ('zoom' === s.opts.clickContent ||
                (n.isFunction(s.opts.clickContent) &&
                  'zoom' == s.opts.clickContent(s)))
            ? r.addClass('fancybox-can-zoomIn')
            : s.opts.touch &&
              (s.opts.touch.vertical || a.group.length > 1) &&
              'video' !== s.contentType &&
              r.addClass('fancybox-can-swipe'))
      },
      isZoomable: function () {
        var t,
          e = this,
          n = e.current
        if (n && !e.isClosing && 'image' === n.type && !n.hasError) {
          if (!n.isLoaded) return !0
          if (
            (t = e.getFitPos(n)) &&
            (n.width > t.width || n.height > t.height)
          )
            return !0
        }
        return !1
      },
      isScaledDown: function (t, e) {
        var o = this,
          i = !1,
          a = o.current,
          s = a.$content
        return (
          void 0 !== t && void 0 !== e
            ? (i = t < a.width && e < a.height)
            : s &&
              ((i = n.fancybox.getTranslate(s)),
              (i = i.width < a.width && i.height < a.height)),
          i
        )
      },
      canPan: function (t, e) {
        var o = this,
          i = o.current,
          a = null,
          s = !1
        return (
          'image' === i.type &&
            (i.isComplete || (t && e)) &&
            !i.hasError &&
            ((s = o.getFitPos(i)),
            void 0 !== t && void 0 !== e
              ? (a = { width: t, height: e })
              : i.isComplete && (a = n.fancybox.getTranslate(i.$content)),
            a &&
              s &&
              (s =
                Math.abs(a.width - s.width) > 1.5 ||
                Math.abs(a.height - s.height) > 1.5)),
          s
        )
      },
      loadSlide: function (t) {
        var e,
          o,
          i,
          a = this
        if (!t.isLoading && !t.isLoaded) {
          if (((t.isLoading = !0), !1 === a.trigger('beforeLoad', t)))
            return (t.isLoading = !1), !1
          switch (
            ((e = t.type),
            (o = t.$slide),
            o.off('refresh').trigger('onReset').addClass(t.opts.slideClass),
            e)
          ) {
            case 'image':
              a.setImage(t)
              break
            case 'iframe':
              a.setIframe(t)
              break
            case 'html':
              a.setContent(t, t.src || t.content)
              break
            case 'video':
              a.setContent(
                t,
                t.opts.video.tpl
                  .replace(/\{\{src\}\}/gi, t.src)
                  .replace(
                    '{{format}}',
                    t.opts.videoFormat || t.opts.video.format || ''
                  )
                  .replace('{{poster}}', t.thumb || '')
              )
              break
            case 'inline':
              n(t.src).length ? a.setContent(t, n(t.src)) : a.setError(t)
              break
            case 'ajax':
              a.showLoading(t),
                (i = n.ajax(
                  n.extend({}, t.opts.ajax.settings, {
                    url: t.src,
                    success: function (e, n) {
                      'success' === n && a.setContent(t, e)
                    },
                    error: function (e, n) {
                      e && 'abort' !== n && a.setError(t)
                    }
                  })
                )),
                o.one('onReset', function () {
                  i.abort()
                })
              break
            default:
              a.setError(t)
          }
          return !0
        }
      },
      setImage: function (t) {
        var o,
          i = this
        setTimeout(function () {
          var e = t.$image
          i.isClosing ||
            !t.isLoading ||
            (e && e.length && e[0].complete) ||
            t.hasError ||
            i.showLoading(t)
        }, 50),
          i.checkSrcset(t),
          (t.$content = n('<div class="fancybox-content"></div>')
            .addClass('fancybox-is-hidden')
            .appendTo(t.$slide.addClass('fancybox-slide--image'))),
          !1 !== t.opts.preload &&
            t.opts.width &&
            t.opts.height &&
            t.thumb &&
            ((t.width = t.opts.width),
            (t.height = t.opts.height),
            (o = e.createElement('img')),
            (o.onerror = function () {
              n(this).remove(), (t.$ghost = null)
            }),
            (o.onload = function () {
              i.afterLoad(t)
            }),
            (t.$ghost = n(o)
              .addClass('fancybox-image')
              .appendTo(t.$content)
              .attr('src', t.thumb))),
          i.setBigImage(t)
      },
      checkSrcset: function (e) {
        var n,
          o,
          i,
          a,
          s = e.opts.srcset || e.opts.image.srcset
        if (s) {
          ;(i = t.devicePixelRatio || 1),
            (a = t.innerWidth * i),
            (o = s.split(',').map(function (t) {
              var e = {}
              return (
                t
                  .trim()
                  .split(/\s+/)
                  .forEach(function (t, n) {
                    var o = parseInt(t.substring(0, t.length - 1), 10)
                    if (0 === n) return (e.url = t)
                    o && ((e.value = o), (e.postfix = t[t.length - 1]))
                  }),
                e
              )
            })),
            o.sort(function (t, e) {
              return t.value - e.value
            })
          for (var r = 0; r < o.length; r++) {
            var c = o[r]
            if (
              ('w' === c.postfix && c.value >= a) ||
              ('x' === c.postfix && c.value >= i)
            ) {
              n = c
              break
            }
          }
          !n && o.length && (n = o[o.length - 1]),
            n &&
              ((e.src = n.url),
              e.width &&
                e.height &&
                'w' == n.postfix &&
                ((e.height = (e.width / e.height) * n.value),
                (e.width = n.value)),
              (e.opts.srcset = s))
        }
      },
      setBigImage: function (t) {
        var o = this,
          i = e.createElement('img'),
          a = n(i)
        ;(t.$image = a
          .one('error', function () {
            o.setError(t)
          })
          .one('load', function () {
            var e
            t.$ghost ||
              (o.resolveImageSlideSize(
                t,
                this.naturalWidth,
                this.naturalHeight
              ),
              o.afterLoad(t)),
              o.isClosing ||
                (t.opts.srcset &&
                  ((e = t.opts.sizes),
                  (e && 'auto' !== e) ||
                    (e =
                      (t.width / t.height > 1 && s.width() / s.height() > 1
                        ? '100'
                        : Math.round((t.width / t.height) * 100)) + 'vw'),
                  a.attr('sizes', e).attr('srcset', t.opts.srcset)),
                t.$ghost &&
                  setTimeout(function () {
                    t.$ghost && !o.isClosing && t.$ghost.hide()
                  }, Math.min(300, Math.max(1e3, t.height / 1600))),
                o.hideLoading(t))
          })
          .addClass('fancybox-image')
          .attr('src', t.src)
          .appendTo(t.$content)),
          (i.complete || 'complete' == i.readyState) &&
          a.naturalWidth &&
          a.naturalHeight
            ? a.trigger('load')
            : i.error && a.trigger('error')
      },
      resolveImageSlideSize: function (t, e, n) {
        var o = parseInt(t.opts.width, 10),
          i = parseInt(t.opts.height, 10)
        ;(t.width = e),
          (t.height = n),
          o > 0 && ((t.width = o), (t.height = Math.floor((o * n) / e))),
          i > 0 && ((t.width = Math.floor((i * e) / n)), (t.height = i))
      },
      setIframe: function (t) {
        var e,
          o = this,
          i = t.opts.iframe,
          a = t.$slide
        ;(t.$content = n(
          '<div class="fancybox-content' +
            (i.preload ? ' fancybox-is-hidden' : '') +
            '"></div>'
        )
          .css(i.css)
          .appendTo(a)),
          a.addClass('fancybox-slide--' + t.contentType),
          (t.$iframe = e =
            n(i.tpl.replace(/\{rnd\}/g, new Date().getTime()))
              .attr(i.attr)
              .appendTo(t.$content)),
          i.preload
            ? (o.showLoading(t),
              e.on('load.fb error.fb', function (e) {
                ;(this.isReady = 1), t.$slide.trigger('refresh'), o.afterLoad(t)
              }),
              a.on('refresh.fb', function () {
                var n,
                  o,
                  s = t.$content,
                  r = i.css.width,
                  c = i.css.height
                if (1 === e[0].isReady) {
                  try {
                    ;(n = e.contents()), (o = n.find('body'))
                  } catch (t) {}
                  o &&
                    o.length &&
                    o.children().length &&
                    (a.css('overflow', 'visible'),
                    s.css({
                      width: '100%',
                      'max-width': '100%',
                      height: '9999px'
                    }),
                    void 0 === r &&
                      (r = Math.ceil(
                        Math.max(o[0].clientWidth, o.outerWidth(!0))
                      )),
                    s.css('width', r || '').css('max-width', ''),
                    void 0 === c &&
                      (c = Math.ceil(
                        Math.max(o[0].clientHeight, o.outerHeight(!0))
                      )),
                    s.css('height', c || ''),
                    a.css('overflow', 'auto')),
                    s.removeClass('fancybox-is-hidden')
                }
              }))
            : o.afterLoad(t),
          e.attr('src', t.src),
          a.one('onReset', function () {
            try {
              n(this)
                .find('iframe')
                .hide()
                .unbind()
                .attr('src', '//about:blank')
            } catch (t) {}
            n(this).off('refresh.fb').empty(),
              (t.isLoaded = !1),
              (t.isRevealed = !1)
          })
      },
      setContent: function (t, e) {
        var o = this
        o.isClosing ||
          (o.hideLoading(t),
          t.$content && n.fancybox.stop(t.$content),
          t.$slide.empty(),
          l(e) && e.parent().length
            ? ((e.hasClass('fancybox-content') ||
                e.parent().hasClass('fancybox-content')) &&
                e.parents('.fancybox-slide').trigger('onReset'),
              (t.$placeholder = n('<div>').hide().insertAfter(e)),
              e.css('display', 'inline-block'))
            : t.hasError ||
              ('string' === n.type(e) &&
                (e = n('<div>').append(n.trim(e)).contents()),
              t.opts.filter && (e = n('<div>').html(e).find(t.opts.filter))),
          t.$slide.one('onReset', function () {
            n(this).find('video,audio').trigger('pause'),
              t.$placeholder &&
                (t.$placeholder
                  .after(e.removeClass('fancybox-content').hide())
                  .remove(),
                (t.$placeholder = null)),
              t.$smallBtn && (t.$smallBtn.remove(), (t.$smallBtn = null)),
              t.hasError ||
                (n(this).empty(), (t.isLoaded = !1), (t.isRevealed = !1))
          }),
          n(e).appendTo(t.$slide),
          n(e).is('video,audio') &&
            (n(e).addClass('fancybox-video'),
            n(e).wrap('<div></div>'),
            (t.contentType = 'video'),
            (t.opts.width = t.opts.width || n(e).attr('width')),
            (t.opts.height = t.opts.height || n(e).attr('height'))),
          (t.$content = t.$slide
            .children()
            .filter('div,form,main,video,audio,article,.fancybox-content')
            .first()),
          t.$content.siblings().hide(),
          t.$content.length ||
            (t.$content = t.$slide.wrapInner('<div></div>').children().first()),
          t.$content.addClass('fancybox-content'),
          t.$slide.addClass('fancybox-slide--' + t.contentType),
          o.afterLoad(t))
      },
      setError: function (t) {
        ;(t.hasError = !0),
          t.$slide
            .trigger('onReset')
            .removeClass('fancybox-slide--' + t.contentType)
            .addClass('fancybox-slide--error'),
          (t.contentType = 'html'),
          this.setContent(t, this.translate(t, t.opts.errorTpl)),
          t.pos === this.currPos && (this.isAnimating = !1)
      },
      showLoading: function (t) {
        var e = this
        ;(t = t || e.current) &&
          !t.$spinner &&
          (t.$spinner = n(e.translate(e, e.opts.spinnerTpl))
            .appendTo(t.$slide)
            .hide()
            .fadeIn('fast'))
      },
      hideLoading: function (t) {
        var e = this
        ;(t = t || e.current) &&
          t.$spinner &&
          (t.$spinner.stop().remove(), delete t.$spinner)
      },
      afterLoad: function (t) {
        var e = this
        e.isClosing ||
          ((t.isLoading = !1),
          (t.isLoaded = !0),
          e.trigger('afterLoad', t),
          e.hideLoading(t),
          !t.opts.smallBtn ||
            (t.$smallBtn && t.$smallBtn.length) ||
            (t.$smallBtn = n(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(
              t.$content
            )),
          t.opts.protect &&
            t.$content &&
            !t.hasError &&
            (t.$content.on('contextmenu.fb', function (t) {
              return 2 == t.button && t.preventDefault(), !0
            }),
            'image' === t.type &&
              n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),
          e.adjustCaption(t),
          e.adjustLayout(t),
          t.pos === e.currPos && e.updateCursor(),
          e.revealContent(t))
      },
      adjustCaption: function (t) {
        var e,
          n = this,
          o = t || n.current,
          i = o.opts.caption,
          a = o.opts.preventCaptionOverlap,
          s = n.$refs.caption,
          r = !1
        s.toggleClass('fancybox-caption--separate', a),
          a &&
            i &&
            i.length &&
            (o.pos !== n.currPos
              ? ((e = s.clone().appendTo(s.parent())),
                e.children().eq(0).empty().html(i),
                (r = e.outerHeight(!0)),
                e.empty().remove())
              : n.$caption && (r = n.$caption.outerHeight(!0)),
            o.$slide.css('padding-bottom', r || ''))
      },
      adjustLayout: function (t) {
        var e,
          n,
          o,
          i,
          a = this,
          s = t || a.current
        s.isLoaded &&
          !0 !== s.opts.disableLayoutFix &&
          (s.$content.css('margin-bottom', ''),
          s.$content.outerHeight() > s.$slide.height() + 0.5 &&
            ((o = s.$slide[0].style['padding-bottom']),
            (i = s.$slide.css('padding-bottom')),
            parseFloat(i) > 0 &&
              ((e = s.$slide[0].scrollHeight),
              s.$slide.css('padding-bottom', 0),
              Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i),
              s.$slide.css('padding-bottom', o))),
          s.$content.css('margin-bottom', n))
      },
      revealContent: function (t) {
        var e,
          o,
          i,
          a,
          s = this,
          r = t.$slide,
          c = !1,
          l = !1,
          d = s.isMoved(t),
          u = t.isRevealed
        return (
          (t.isRevealed = !0),
          (e = t.opts[s.firstRun ? 'animationEffect' : 'transitionEffect']),
          (i = t.opts[s.firstRun ? 'animationDuration' : 'transitionDuration']),
          (i = parseInt(
            void 0 === t.forcedDuration ? i : t.forcedDuration,
            10
          )),
          (!d && t.pos === s.currPos && i) || (e = !1),
          'zoom' === e &&
            (t.pos === s.currPos &&
            i &&
            'image' === t.type &&
            !t.hasError &&
            (l = s.getThumbPos(t))
              ? (c = s.getFitPos(t))
              : (e = 'fade')),
          'zoom' === e
            ? ((s.isAnimating = !0),
              (c.scaleX = c.width / l.width),
              (c.scaleY = c.height / l.height),
              (a = t.opts.zoomOpacity),
              'auto' == a &&
                (a = Math.abs(t.width / t.height - l.width / l.height) > 0.1),
              a && ((l.opacity = 0.1), (c.opacity = 1)),
              n.fancybox.setTranslate(
                t.$content.removeClass('fancybox-is-hidden'),
                l
              ),
              p(t.$content),
              void n.fancybox.animate(t.$content, c, i, function () {
                ;(s.isAnimating = !1), s.complete()
              }))
            : (s.updateSlide(t),
              e
                ? (n.fancybox.stop(r),
                  (o =
                    'fancybox-slide--' +
                    (t.pos >= s.prevPos ? 'next' : 'previous') +
                    ' fancybox-animated fancybox-fx-' +
                    e),
                  r.addClass(o).removeClass('fancybox-slide--current'),
                  t.$content.removeClass('fancybox-is-hidden'),
                  p(r),
                  'image' !== t.type && t.$content.hide().show(0),
                  void n.fancybox.animate(
                    r,
                    'fancybox-slide--current',
                    i,
                    function () {
                      r.removeClass(o).css({ transform: '', opacity: '' }),
                        t.pos === s.currPos && s.complete()
                    },
                    !0
                  ))
                : (t.$content.removeClass('fancybox-is-hidden'),
                  u ||
                    !d ||
                    'image' !== t.type ||
                    t.hasError ||
                    t.$content.hide().fadeIn('fast'),
                  void (t.pos === s.currPos && s.complete())))
        )
      },
      getThumbPos: function (t) {
        var e,
          o,
          i,
          a,
          s,
          r = !1,
          c = t.$thumb
        return (
          !(!c || !g(c[0])) &&
          ((e = n.fancybox.getTranslate(c)),
          (o = parseFloat(c.css('border-top-width') || 0)),
          (i = parseFloat(c.css('border-right-width') || 0)),
          (a = parseFloat(c.css('border-bottom-width') || 0)),
          (s = parseFloat(c.css('border-left-width') || 0)),
          (r = {
            top: e.top + o,
            left: e.left + s,
            width: e.width - i - s,
            height: e.height - o - a,
            scaleX: 1,
            scaleY: 1
          }),
          e.width > 0 && e.height > 0 && r)
        )
      },
      complete: function () {
        var t,
          e = this,
          o = e.current,
          i = {}
        !e.isMoved() &&
          o.isLoaded &&
          (o.isComplete ||
            ((o.isComplete = !0),
            o.$slide.siblings().trigger('onReset'),
            e.preload('inline'),
            p(o.$slide),
            o.$slide.addClass('fancybox-slide--complete'),
            n.each(e.slides, function (t, o) {
              o.pos >= e.currPos - 1 && o.pos <= e.currPos + 1
                ? (i[o.pos] = o)
                : o && (n.fancybox.stop(o.$slide), o.$slide.off().remove())
            }),
            (e.slides = i)),
          (e.isAnimating = !1),
          e.updateCursor(),
          e.trigger('afterShow'),
          o.opts.video.autoStart &&
            o.$slide
              .find('video,audio')
              .filter(':visible:first')
              .trigger('play')
              .one('ended', function () {
                Document.exitFullscreen
                  ? Document.exitFullscreen()
                  : this.webkitExitFullscreen && this.webkitExitFullscreen(),
                  e.next()
              }),
          o.opts.autoFocus &&
            'html' === o.contentType &&
            ((t = o.$content.find('input[autofocus]:enabled:visible:first')),
            t.length ? t.trigger('focus') : e.focus(null, !0)),
          o.$slide.scrollTop(0).scrollLeft(0))
      },
      preload: function (t) {
        var e,
          n,
          o = this
        o.group.length < 2 ||
          ((n = o.slides[o.currPos + 1]),
          (e = o.slides[o.currPos - 1]),
          e && e.type === t && o.loadSlide(e),
          n && n.type === t && o.loadSlide(n))
      },
      focus: function (t, o) {
        var i,
          a,
          s = this,
          r = [
            'a[href]',
            'area[href]',
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            'select:not([disabled]):not([aria-hidden])',
            'textarea:not([disabled]):not([aria-hidden])',
            'button:not([disabled]):not([aria-hidden])',
            'iframe',
            'object',
            'embed',
            'video',
            'audio',
            '[contenteditable]',
            '[tabindex]:not([tabindex^="-"])'
          ].join(',')
        s.isClosing ||
          ((i =
            !t && s.current && s.current.isComplete
              ? s.current.$slide.find(
                  '*:visible' + (o ? ':not(.fancybox-close-small)' : '')
                )
              : s.$refs.container.find('*:visible')),
          (i = i.filter(r).filter(function () {
            return (
              'hidden' !== n(this).css('visibility') &&
              !n(this).hasClass('disabled')
            )
          })),
          i.length
            ? ((a = i.index(e.activeElement)),
              t && t.shiftKey
                ? (a < 0 || 0 == a) &&
                  (t.preventDefault(), i.eq(i.length - 1).trigger('focus'))
                : (a < 0 || a == i.length - 1) &&
                  (t && t.preventDefault(), i.eq(0).trigger('focus')))
            : s.$refs.container.trigger('focus'))
      },
      activate: function () {
        var t = this
        n('.fancybox-container').each(function () {
          var e = n(this).data('FancyBox')
          e &&
            e.id !== t.id &&
            !e.isClosing &&
            (e.trigger('onDeactivate'), e.removeEvents(), (e.isVisible = !1))
        }),
          (t.isVisible = !0),
          (t.current || t.isIdle) && (t.update(), t.updateControls()),
          t.trigger('onActivate'),
          t.addEvents()
      },
      close: function (t, e) {
        var o,
          i,
          a,
          s,
          r,
          c,
          l,
          u = this,
          f = u.current,
          h = function () {
            u.cleanUp(t)
          }
        return (
          !u.isClosing &&
          ((u.isClosing = !0),
          !1 === u.trigger('beforeClose', t)
            ? ((u.isClosing = !1),
              d(function () {
                u.update()
              }),
              !1)
            : (u.removeEvents(),
              (a = f.$content),
              (o = f.opts.animationEffect),
              (i = n.isNumeric(e) ? e : o ? f.opts.animationDuration : 0),
              f.$slide.removeClass(
                'fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated'
              ),
              !0 !== t ? n.fancybox.stop(f.$slide) : (o = !1),
              f.$slide.siblings().trigger('onReset').remove(),
              i &&
                u.$refs.container
                  .removeClass('fancybox-is-open')
                  .addClass('fancybox-is-closing')
                  .css('transition-duration', i + 'ms'),
              u.hideLoading(f),
              u.hideControls(!0),
              u.updateCursor(),
              'zoom' !== o ||
                (a &&
                  i &&
                  'image' === f.type &&
                  !u.isMoved() &&
                  !f.hasError &&
                  (l = u.getThumbPos(f))) ||
                (o = 'fade'),
              'zoom' === o
                ? (n.fancybox.stop(a),
                  (s = n.fancybox.getTranslate(a)),
                  (c = {
                    top: s.top,
                    left: s.left,
                    scaleX: s.width / l.width,
                    scaleY: s.height / l.height,
                    width: l.width,
                    height: l.height
                  }),
                  (r = f.opts.zoomOpacity),
                  'auto' == r &&
                    (r =
                      Math.abs(f.width / f.height - l.width / l.height) > 0.1),
                  r && (l.opacity = 0),
                  n.fancybox.setTranslate(a, c),
                  p(a),
                  n.fancybox.animate(a, l, i, h),
                  !0)
                : (o && i
                    ? n.fancybox.animate(
                        f.$slide
                          .addClass('fancybox-slide--previous')
                          .removeClass('fancybox-slide--current'),
                        'fancybox-animated fancybox-fx-' + o,
                        i,
                        h
                      )
                    : !0 === t
                    ? setTimeout(h, i)
                    : h(),
                  !0)))
        )
      },
      cleanUp: function (e) {
        var o,
          i,
          a,
          s = this,
          r = s.current.opts.$orig
        s.current.$slide.trigger('onReset'),
          s.$refs.container.empty().remove(),
          s.trigger('afterClose', e),
          s.current.opts.backFocus &&
            ((r && r.length && r.is(':visible')) || (r = s.$trigger),
            r &&
              r.length &&
              ((i = t.scrollX),
              (a = t.scrollY),
              r.trigger('focus'),
              n('html, body').scrollTop(a).scrollLeft(i))),
          (s.current = null),
          (o = n.fancybox.getInstance()),
          o
            ? o.activate()
            : (n('body').removeClass(
                'fancybox-active compensate-for-scrollbar'
              ),
              n('#fancybox-style-noscroll').remove())
      },
      trigger: function (t, e) {
        var o,
          i = Array.prototype.slice.call(arguments, 1),
          a = this,
          s = e && e.opts ? e : a.current
        if (
          (s ? i.unshift(s) : (s = a),
          i.unshift(a),
          n.isFunction(s.opts[t]) && (o = s.opts[t].apply(s, i)),
          !1 === o)
        )
          return o
        'afterClose' !== t && a.$refs
          ? a.$refs.container.trigger(t + '.fb', i)
          : r.trigger(t + '.fb', i)
      },
      updateControls: function () {
        var t = this,
          o = t.current,
          i = o.index,
          a = t.$refs.container,
          s = t.$refs.caption,
          r = o.opts.caption
        o.$slide.trigger('refresh'),
          r && r.length
            ? ((t.$caption = s), s.children().eq(0).html(r))
            : (t.$caption = null),
          t.hasHiddenControls || t.isIdle || t.showControls(),
          a.find('[data-fancybox-count]').html(t.group.length),
          a.find('[data-fancybox-index]').html(i + 1),
          a
            .find('[data-fancybox-prev]')
            .prop('disabled', !o.opts.loop && i <= 0),
          a
            .find('[data-fancybox-next]')
            .prop('disabled', !o.opts.loop && i >= t.group.length - 1),
          'image' === o.type
            ? a
                .find('[data-fancybox-zoom]')
                .show()
                .end()
                .find('[data-fancybox-download]')
                .attr('href', o.opts.image.src || o.src)
                .show()
            : o.opts.toolbar &&
              a.find('[data-fancybox-download],[data-fancybox-zoom]').hide(),
          n(e.activeElement).is(':hidden,[disabled]') &&
            t.$refs.container.trigger('focus')
      },
      hideControls: function (t) {
        var e = this,
          n = ['infobar', 'toolbar', 'nav']
        ;(!t && e.current.opts.preventCaptionOverlap) || n.push('caption'),
          this.$refs.container.removeClass(
            n
              .map(function (t) {
                return 'fancybox-show-' + t
              })
              .join(' ')
          ),
          (this.hasHiddenControls = !0)
      },
      showControls: function () {
        var t = this,
          e = t.current ? t.current.opts : t.opts,
          n = t.$refs.container
        ;(t.hasHiddenControls = !1),
          (t.idleSecondsCounter = 0),
          n
            .toggleClass('fancybox-show-toolbar', !(!e.toolbar || !e.buttons))
            .toggleClass(
              'fancybox-show-infobar',
              !!(e.infobar && t.group.length > 1)
            )
            .toggleClass('fancybox-show-caption', !!t.$caption)
            .toggleClass(
              'fancybox-show-nav',
              !!(e.arrows && t.group.length > 1)
            )
            .toggleClass('fancybox-is-modal', !!e.modal)
      },
      toggleControls: function () {
        this.hasHiddenControls ? this.showControls() : this.hideControls()
      }
    }),
      (n.fancybox = {
        version: '3.5.7',
        defaults: a,
        getInstance: function (t) {
          var e = n(
              '.fancybox-container:not(".fancybox-is-closing"):last'
            ).data('FancyBox'),
            o = Array.prototype.slice.call(arguments, 1)
          return (
            e instanceof b &&
            ('string' === n.type(t)
              ? e[t].apply(e, o)
              : 'function' === n.type(t) && t.apply(e, o),
            e)
          )
        },
        open: function (t, e, n) {
          return new b(t, e, n)
        },
        close: function (t) {
          var e = this.getInstance()
          e && (e.close(), !0 === t && this.close(t))
        },
        destroy: function () {
          this.close(!0), r.add('body').off('click.fb-start', '**')
        },
        isMobile:
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ),
        use3d: (function () {
          var n = e.createElement('div')
          return (
            t.getComputedStyle &&
            t.getComputedStyle(n) &&
            t.getComputedStyle(n).getPropertyValue('transform') &&
            !(e.documentMode && e.documentMode < 11)
          )
        })(),
        getTranslate: function (t) {
          var e
          return (
            !(!t || !t.length) &&
            ((e = t[0].getBoundingClientRect()),
            {
              top: e.top || 0,
              left: e.left || 0,
              width: e.width,
              height: e.height,
              opacity: parseFloat(t.css('opacity'))
            })
          )
        },
        setTranslate: function (t, e) {
          var n = '',
            o = {}
          if (t && e)
            return (
              (void 0 === e.left && void 0 === e.top) ||
                ((n =
                  (void 0 === e.left ? t.position().left : e.left) +
                  'px, ' +
                  (void 0 === e.top ? t.position().top : e.top) +
                  'px'),
                (n = this.use3d
                  ? 'translate3d(' + n + ', 0px)'
                  : 'translate(' + n + ')')),
              void 0 !== e.scaleX && void 0 !== e.scaleY
                ? (n += ' scale(' + e.scaleX + ', ' + e.scaleY + ')')
                : void 0 !== e.scaleX && (n += ' scaleX(' + e.scaleX + ')'),
              n.length && (o.transform = n),
              void 0 !== e.opacity && (o.opacity = e.opacity),
              void 0 !== e.width && (o.width = e.width),
              void 0 !== e.height && (o.height = e.height),
              t.css(o)
            )
        },
        animate: function (t, e, o, i, a) {
          var s,
            r = this
          n.isFunction(o) && ((i = o), (o = null)),
            r.stop(t),
            (s = r.getTranslate(t)),
            t.on(f, function (c) {
              ;(!c ||
                !c.originalEvent ||
                (t.is(c.originalEvent.target) &&
                  'z-index' != c.originalEvent.propertyName)) &&
                (r.stop(t),
                n.isNumeric(o) && t.css('transition-duration', ''),
                n.isPlainObject(e)
                  ? void 0 !== e.scaleX &&
                    void 0 !== e.scaleY &&
                    r.setTranslate(t, {
                      top: e.top,
                      left: e.left,
                      width: s.width * e.scaleX,
                      height: s.height * e.scaleY,
                      scaleX: 1,
                      scaleY: 1
                    })
                  : !0 !== a && t.removeClass(e),
                n.isFunction(i) && i(c))
            }),
            n.isNumeric(o) && t.css('transition-duration', o + 'ms'),
            n.isPlainObject(e)
              ? (void 0 !== e.scaleX &&
                  void 0 !== e.scaleY &&
                  (delete e.width,
                  delete e.height,
                  t.parent().hasClass('fancybox-slide--image') &&
                    t.parent().addClass('fancybox-is-scaling')),
                n.fancybox.setTranslate(t, e))
              : t.addClass(e),
            t.data(
              'timer',
              setTimeout(function () {
                t.trigger(f)
              }, o + 33)
            )
        },
        stop: function (t, e) {
          t &&
            t.length &&
            (clearTimeout(t.data('timer')),
            e && t.trigger(f),
            t.off(f).css('transition-duration', ''),
            t.parent().removeClass('fancybox-is-scaling'))
        }
      }),
      (n.fn.fancybox = function (t) {
        var e
        return (
          (t = t || {}),
          (e = t.selector || !1),
          e
            ? n('body')
                .off('click.fb-start', e)
                .on('click.fb-start', e, { options: t }, i)
            : this.off('click.fb-start').on(
                'click.fb-start',
                { items: this, options: t },
                i
              ),
          this
        )
      }),
      r.on('click.fb-start', '[data-fancybox]', i),
      r.on('click.fb-start', '[data-fancybox-trigger]', function (t) {
        n('[data-fancybox="' + n(this).attr('data-fancybox-trigger') + '"]')
          .eq(n(this).attr('data-fancybox-index') || 0)
          .trigger('click.fb-start', { $trigger: n(this) })
      }),
      (function () {
        var t = null
        r.on('mousedown mouseup focus blur', '.fancybox-button', function (e) {
          switch (e.type) {
            case 'mousedown':
              t = n(this)
              break
            case 'mouseup':
              t = null
              break
            case 'focusin':
              n('.fancybox-button').removeClass('fancybox-focus'),
                n(this).is(t) ||
                  n(this).is('[disabled]') ||
                  n(this).addClass('fancybox-focus')
              break
            case 'focusout':
              n('.fancybox-button').removeClass('fancybox-focus')
          }
        })
      })()
  }
})(window, document, jQuery),
  (function (t) {
    'use strict'
    var e = {
        youtube: {
          matcher:
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
          params: {
            autoplay: 1,
            autohide: 1,
            fs: 1,
            rel: 0,
            hd: 1,
            wmode: 'transparent',
            enablejsapi: 1,
            html5: 1
          },
          paramPlace: 8,
          type: 'iframe',
          url: 'https://www.youtube-nocookie.com/embed/$4',
          thumb: 'https://img.youtube.com/vi/$4/hqdefault.jpg'
        },
        vimeo: {
          matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
          params: {
            autoplay: 1,
            hd: 1,
            show_title: 1,
            show_byline: 1,
            show_portrait: 0,
            fullscreen: 1
          },
          paramPlace: 3,
          type: 'iframe',
          url: '//player.vimeo.com/video/$2'
        },
        instagram: {
          matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
          type: 'image',
          url: '//$1/p/$2/media/?size=l'
        },
        gmap_place: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
          type: 'iframe',
          url: function (t) {
            return (
              '//maps.google.' +
              t[2] +
              '/?ll=' +
              (t[9]
                ? t[9] +
                  '&z=' +
                  Math.floor(t[10]) +
                  (t[12] ? t[12].replace(/^\//, '&') : '')
                : t[12] + ''
              ).replace(/\?/, '&') +
              '&output=' +
              (t[12] && t[12].indexOf('layer=c') > 0 ? 'svembed' : 'embed')
            )
          }
        },
        gmap_search: {
          matcher:
            /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
          type: 'iframe',
          url: function (t) {
            return (
              '//maps.google.' +
              t[2] +
              '/maps?q=' +
              t[5].replace('query=', 'q=').replace('api=1', '') +
              '&output=embed'
            )
          }
        }
      },
      n = function (e, n, o) {
        if (e)
          return (
            (o = o || ''),
            'object' === t.type(o) && (o = t.param(o, !0)),
            t.each(n, function (t, n) {
              e = e.replace('$' + t, n || '')
            }),
            o.length && (e += (e.indexOf('?') > 0 ? '&' : '?') + o),
            e
          )
      }
    t(document).on('objectNeedsType.fb', function (o, i, a) {
      var s,
        r,
        c,
        l,
        d,
        u,
        f,
        p = a.src || '',
        h = !1
      ;(s = t.extend(!0, {}, e, a.opts.media)),
        t.each(s, function (e, o) {
          if ((c = p.match(o.matcher))) {
            if (
              ((h = o.type), (f = e), (u = {}), o.paramPlace && c[o.paramPlace])
            ) {
              ;(d = c[o.paramPlace]),
                '?' == d[0] && (d = d.substring(1)),
                (d = d.split('&'))
              for (var i = 0; i < d.length; ++i) {
                var s = d[i].split('=', 2)
                2 == s.length &&
                  (u[s[0]] = decodeURIComponent(s[1].replace(/\+/g, ' ')))
              }
            }
            return (
              (l = t.extend(!0, {}, o.params, a.opts[e], u)),
              (p =
                'function' === t.type(o.url)
                  ? o.url.call(this, c, l, a)
                  : n(o.url, c, l)),
              (r =
                'function' === t.type(o.thumb)
                  ? o.thumb.call(this, c, l, a)
                  : n(o.thumb, c)),
              'youtube' === e
                ? (p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                    return (
                      '&start=' +
                      ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                    )
                  }))
                : 'vimeo' === e && (p = p.replace('&%23', '#')),
              !1
            )
          }
        }),
        h
          ? (a.opts.thumb ||
              (a.opts.$thumb && a.opts.$thumb.length) ||
              (a.opts.thumb = r),
            'iframe' === h &&
              (a.opts = t.extend(!0, a.opts, {
                iframe: { preload: !1, attr: { scrolling: 'no' } }
              })),
            t.extend(a, {
              type: h,
              src: p,
              origSrc: a.src,
              contentSource: f,
              contentType:
                'image' === h
                  ? 'image'
                  : 'gmap_place' == f || 'gmap_search' == f
                  ? 'map'
                  : 'video'
            }))
          : p && (a.type = a.opts.defaultType)
    })
    var o = {
      youtube: {
        src: 'https://www.youtube.com/iframe_api',
        class: 'YT',
        loading: !1,
        loaded: !1
      },
      vimeo: {
        src: 'https://player.vimeo.com/api/player.js',
        class: 'Vimeo',
        loading: !1,
        loaded: !1
      },
      load: function (t) {
        var e,
          n = this
        if (this[t].loaded)
          return void setTimeout(function () {
            n.done(t)
          })
        this[t].loading ||
          ((this[t].loading = !0),
          (e = document.createElement('script')),
          (e.type = 'text/javascript'),
          (e.src = this[t].src),
          'youtube' === t
            ? (window.onYouTubeIframeAPIReady = function () {
                ;(n[t].loaded = !0), n.done(t)
              })
            : (e.onload = function () {
                ;(n[t].loaded = !0), n.done(t)
              }),
          document.body.appendChild(e))
      },
      done: function (e) {
        var n, o, i
        'youtube' === e && delete window.onYouTubeIframeAPIReady,
          (n = t.fancybox.getInstance()) &&
            ((o = n.current.$content.find('iframe')),
            'youtube' === e && void 0 !== YT && YT
              ? (i = new YT.Player(o.attr('id'), {
                  events: {
                    onStateChange: function (t) {
                      0 == t.data && n.next()
                    }
                  }
                }))
              : 'vimeo' === e &&
                void 0 !== Vimeo &&
                Vimeo &&
                ((i = new Vimeo.Player(o)),
                i.on('ended', function () {
                  n.next()
                })))
      }
    }
    t(document).on({
      'afterShow.fb': function (t, e, n) {
        e.group.length > 1 &&
          ('youtube' === n.contentSource || 'vimeo' === n.contentSource) &&
          o.load(n.contentSource)
      }
    })
  })(jQuery),
  (function (t, e, n) {
    'use strict'
    var o = (function () {
        return (
          t.requestAnimationFrame ||
          t.webkitRequestAnimationFrame ||
          t.mozRequestAnimationFrame ||
          t.oRequestAnimationFrame ||
          function (e) {
            return t.setTimeout(e, 1e3 / 60)
          }
        )
      })(),
      i = (function () {
        return (
          t.cancelAnimationFrame ||
          t.webkitCancelAnimationFrame ||
          t.mozCancelAnimationFrame ||
          t.oCancelAnimationFrame ||
          function (e) {
            t.clearTimeout(e)
          }
        )
      })(),
      a = function (e) {
        var n = []
        ;(e = e.originalEvent || e || t.e),
          (e =
            e.touches && e.touches.length
              ? e.touches
              : e.changedTouches && e.changedTouches.length
              ? e.changedTouches
              : [e])
        for (var o in e)
          e[o].pageX
            ? n.push({ x: e[o].pageX, y: e[o].pageY })
            : e[o].clientX && n.push({ x: e[o].clientX, y: e[o].clientY })
        return n
      },
      s = function (t, e, n) {
        return e && t
          ? 'x' === n
            ? t.x - e.x
            : 'y' === n
            ? t.y - e.y
            : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          : 0
      },
      r = function (t) {
        if (
          t.is(
            'a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe'
          ) ||
          n.isFunction(t.get(0).onclick) ||
          t.data('selectable')
        )
          return !0
        for (var e = 0, o = t[0].attributes, i = o.length; e < i; e++)
          if ('data-fancybox-' === o[e].nodeName.substr(0, 14)) return !0
        return !1
      },
      c = function (e) {
        var n = t.getComputedStyle(e)['overflow-y'],
          o = t.getComputedStyle(e)['overflow-x'],
          i =
            ('scroll' === n || 'auto' === n) && e.scrollHeight > e.clientHeight,
          a = ('scroll' === o || 'auto' === o) && e.scrollWidth > e.clientWidth
        return i || a
      },
      l = function (t) {
        for (var e = !1; ; ) {
          if ((e = c(t.get(0)))) break
          if (
            ((t = t.parent()),
            !t.length || t.hasClass('fancybox-stage') || t.is('body'))
          )
            break
        }
        return e
      },
      d = function (t) {
        var e = this
        ;(e.instance = t),
          (e.$bg = t.$refs.bg),
          (e.$stage = t.$refs.stage),
          (e.$container = t.$refs.container),
          e.destroy(),
          e.$container.on(
            'touchstart.fb.touch mousedown.fb.touch',
            n.proxy(e, 'ontouchstart')
          )
      }
    ;(d.prototype.destroy = function () {
      var t = this
      t.$container.off('.fb.touch'),
        n(e).off('.fb.touch'),
        t.requestId && (i(t.requestId), (t.requestId = null)),
        t.tapped && (clearTimeout(t.tapped), (t.tapped = null))
    }),
      (d.prototype.ontouchstart = function (o) {
        var i = this,
          c = n(o.target),
          d = i.instance,
          u = d.current,
          f = u.$slide,
          p = u.$content,
          h = 'touchstart' == o.type
        if (
          (h && i.$container.off('mousedown.fb.touch'),
          (!o.originalEvent || 2 != o.originalEvent.button) &&
            f.length &&
            c.length &&
            !r(c) &&
            !r(c.parent()) &&
            (c.is('img') ||
              !(o.originalEvent.clientX > c[0].clientWidth + c.offset().left)))
        ) {
          if (!u || d.isAnimating || u.$slide.hasClass('fancybox-animated'))
            return o.stopPropagation(), void o.preventDefault()
          ;(i.realPoints = i.startPoints = a(o)),
            i.startPoints.length &&
              (u.touch && o.stopPropagation(),
              (i.startEvent = o),
              (i.canTap = !0),
              (i.$target = c),
              (i.$content = p),
              (i.opts = u.opts.touch),
              (i.isPanning = !1),
              (i.isSwiping = !1),
              (i.isZooming = !1),
              (i.isScrolling = !1),
              (i.canPan = d.canPan()),
              (i.startTime = new Date().getTime()),
              (i.distanceX = i.distanceY = i.distance = 0),
              (i.canvasWidth = Math.round(f[0].clientWidth)),
              (i.canvasHeight = Math.round(f[0].clientHeight)),
              (i.contentLastPos = null),
              (i.contentStartPos = n.fancybox.getTranslate(i.$content) || {
                top: 0,
                left: 0
              }),
              (i.sliderStartPos = n.fancybox.getTranslate(f)),
              (i.stagePos = n.fancybox.getTranslate(d.$refs.stage)),
              (i.sliderStartPos.top -= i.stagePos.top),
              (i.sliderStartPos.left -= i.stagePos.left),
              (i.contentStartPos.top -= i.stagePos.top),
              (i.contentStartPos.left -= i.stagePos.left),
              n(e)
                .off('.fb.touch')
                .on(
                  h
                    ? 'touchend.fb.touch touchcancel.fb.touch'
                    : 'mouseup.fb.touch mouseleave.fb.touch',
                  n.proxy(i, 'ontouchend')
                )
                .on(
                  h ? 'touchmove.fb.touch' : 'mousemove.fb.touch',
                  n.proxy(i, 'ontouchmove')
                ),
              n.fancybox.isMobile &&
                e.addEventListener('scroll', i.onscroll, !0),
              (((i.opts || i.canPan) &&
                (c.is(i.$stage) || i.$stage.find(c).length)) ||
                (c.is('.fancybox-image') && o.preventDefault(),
                n.fancybox.isMobile &&
                  c.parents('.fancybox-caption').length)) &&
                ((i.isScrollable = l(c) || l(c.parent())),
                (n.fancybox.isMobile && i.isScrollable) || o.preventDefault(),
                (1 === i.startPoints.length || u.hasError) &&
                  (i.canPan
                    ? (n.fancybox.stop(i.$content), (i.isPanning = !0))
                    : (i.isSwiping = !0),
                  i.$container.addClass('fancybox-is-grabbing')),
                2 === i.startPoints.length &&
                  'image' === u.type &&
                  (u.isLoaded || u.$ghost) &&
                  ((i.canTap = !1),
                  (i.isSwiping = !1),
                  (i.isPanning = !1),
                  (i.isZooming = !0),
                  n.fancybox.stop(i.$content),
                  (i.centerPointStartX =
                    0.5 * (i.startPoints[0].x + i.startPoints[1].x) -
                    n(t).scrollLeft()),
                  (i.centerPointStartY =
                    0.5 * (i.startPoints[0].y + i.startPoints[1].y) -
                    n(t).scrollTop()),
                  (i.percentageOfImageAtPinchPointX =
                    (i.centerPointStartX - i.contentStartPos.left) /
                    i.contentStartPos.width),
                  (i.percentageOfImageAtPinchPointY =
                    (i.centerPointStartY - i.contentStartPos.top) /
                    i.contentStartPos.height),
                  (i.startDistanceBetweenFingers = s(
                    i.startPoints[0],
                    i.startPoints[1]
                  )))))
        }
      }),
      (d.prototype.onscroll = function (t) {
        var n = this
        ;(n.isScrolling = !0), e.removeEventListener('scroll', n.onscroll, !0)
      }),
      (d.prototype.ontouchmove = function (t) {
        var e = this
        return void 0 !== t.originalEvent.buttons &&
          0 === t.originalEvent.buttons
          ? void e.ontouchend(t)
          : e.isScrolling
          ? void (e.canTap = !1)
          : ((e.newPoints = a(t)),
            void (
              (e.opts || e.canPan) &&
              e.newPoints.length &&
              e.newPoints.length &&
              ((e.isSwiping && !0 === e.isSwiping) || t.preventDefault(),
              (e.distanceX = s(e.newPoints[0], e.startPoints[0], 'x')),
              (e.distanceY = s(e.newPoints[0], e.startPoints[0], 'y')),
              (e.distance = s(e.newPoints[0], e.startPoints[0])),
              e.distance > 0 &&
                (e.isSwiping
                  ? e.onSwipe(t)
                  : e.isPanning
                  ? e.onPan()
                  : e.isZooming && e.onZoom()))
            ))
      }),
      (d.prototype.onSwipe = function (e) {
        var a,
          s = this,
          r = s.instance,
          c = s.isSwiping,
          l = s.sliderStartPos.left || 0
        if (!0 !== c)
          'x' == c &&
            (s.distanceX > 0 &&
            (s.instance.group.length < 2 ||
              (0 === s.instance.current.index && !s.instance.current.opts.loop))
              ? (l += Math.pow(s.distanceX, 0.8))
              : s.distanceX < 0 &&
                (s.instance.group.length < 2 ||
                  (s.instance.current.index === s.instance.group.length - 1 &&
                    !s.instance.current.opts.loop))
              ? (l -= Math.pow(-s.distanceX, 0.8))
              : (l += s.distanceX)),
            (s.sliderLastPos = {
              top: 'x' == c ? 0 : s.sliderStartPos.top + s.distanceY,
              left: l
            }),
            s.requestId && (i(s.requestId), (s.requestId = null)),
            (s.requestId = o(function () {
              s.sliderLastPos &&
                (n.each(s.instance.slides, function (t, e) {
                  var o = e.pos - s.instance.currPos
                  n.fancybox.setTranslate(e.$slide, {
                    top: s.sliderLastPos.top,
                    left:
                      s.sliderLastPos.left +
                      o * s.canvasWidth +
                      o * e.opts.gutter
                  })
                }),
                s.$container.addClass('fancybox-is-sliding'))
            }))
        else if (Math.abs(s.distance) > 10) {
          if (
            ((s.canTap = !1),
            r.group.length < 2 && s.opts.vertical
              ? (s.isSwiping = 'y')
              : r.isDragging ||
                !1 === s.opts.vertical ||
                ('auto' === s.opts.vertical && n(t).width() > 800)
              ? (s.isSwiping = 'x')
              : ((a = Math.abs(
                  (180 * Math.atan2(s.distanceY, s.distanceX)) / Math.PI
                )),
                (s.isSwiping = a > 45 && a < 135 ? 'y' : 'x')),
            'y' === s.isSwiping && n.fancybox.isMobile && s.isScrollable)
          )
            return void (s.isScrolling = !0)
          ;(r.isDragging = s.isSwiping),
            (s.startPoints = s.newPoints),
            n.each(r.slides, function (t, e) {
              var o, i
              n.fancybox.stop(e.$slide),
                (o = n.fancybox.getTranslate(e.$slide)),
                (i = n.fancybox.getTranslate(r.$refs.stage)),
                e.$slide
                  .css({
                    transform: '',
                    opacity: '',
                    'transition-duration': ''
                  })
                  .removeClass('fancybox-animated')
                  .removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(' ')
                  }),
                e.pos === r.current.pos &&
                  ((s.sliderStartPos.top = o.top - i.top),
                  (s.sliderStartPos.left = o.left - i.left)),
                n.fancybox.setTranslate(e.$slide, {
                  top: o.top - i.top,
                  left: o.left - i.left
                })
            }),
            r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
        }
      }),
      (d.prototype.onPan = function () {
        var t = this
        if (s(t.newPoints[0], t.realPoints[0]) < (n.fancybox.isMobile ? 10 : 5))
          return void (t.startPoints = t.newPoints)
        ;(t.canTap = !1),
          (t.contentLastPos = t.limitMovement()),
          t.requestId && i(t.requestId),
          (t.requestId = o(function () {
            n.fancybox.setTranslate(t.$content, t.contentLastPos)
          }))
      }),
      (d.prototype.limitMovement = function () {
        var t,
          e,
          n,
          o,
          i,
          a,
          s = this,
          r = s.canvasWidth,
          c = s.canvasHeight,
          l = s.distanceX,
          d = s.distanceY,
          u = s.contentStartPos,
          f = u.left,
          p = u.top,
          h = u.width,
          g = u.height
        return (
          (i = h > r ? f + l : f),
          (a = p + d),
          (t = Math.max(0, 0.5 * r - 0.5 * h)),
          (e = Math.max(0, 0.5 * c - 0.5 * g)),
          (n = Math.min(r - h, 0.5 * r - 0.5 * h)),
          (o = Math.min(c - g, 0.5 * c - 0.5 * g)),
          l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, 0.8) || 0),
          l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, 0.8) || 0),
          d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, 0.8) || 0),
          d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, 0.8) || 0),
          { top: a, left: i }
        )
      }),
      (d.prototype.limitPosition = function (t, e, n, o) {
        var i = this,
          a = i.canvasWidth,
          s = i.canvasHeight
        return (
          n > a
            ? ((t = t > 0 ? 0 : t), (t = t < a - n ? a - n : t))
            : (t = Math.max(0, a / 2 - n / 2)),
          o > s
            ? ((e = e > 0 ? 0 : e), (e = e < s - o ? s - o : e))
            : (e = Math.max(0, s / 2 - o / 2)),
          { top: e, left: t }
        )
      }),
      (d.prototype.onZoom = function () {
        var e = this,
          a = e.contentStartPos,
          r = a.width,
          c = a.height,
          l = a.left,
          d = a.top,
          u = s(e.newPoints[0], e.newPoints[1]),
          f = u / e.startDistanceBetweenFingers,
          p = Math.floor(r * f),
          h = Math.floor(c * f),
          g = (r - p) * e.percentageOfImageAtPinchPointX,
          b = (c - h) * e.percentageOfImageAtPinchPointY,
          m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - n(t).scrollLeft(),
          v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - n(t).scrollTop(),
          y = m - e.centerPointStartX,
          x = v - e.centerPointStartY,
          w = l + (g + y),
          $ = d + (b + x),
          S = { top: $, left: w, scaleX: f, scaleY: f }
        ;(e.canTap = !1),
          (e.newWidth = p),
          (e.newHeight = h),
          (e.contentLastPos = S),
          e.requestId && i(e.requestId),
          (e.requestId = o(function () {
            n.fancybox.setTranslate(e.$content, e.contentLastPos)
          }))
      }),
      (d.prototype.ontouchend = function (t) {
        var o = this,
          s = o.isSwiping,
          r = o.isPanning,
          c = o.isZooming,
          l = o.isScrolling
        if (
          ((o.endPoints = a(t)),
          (o.dMs = Math.max(new Date().getTime() - o.startTime, 1)),
          o.$container.removeClass('fancybox-is-grabbing'),
          n(e).off('.fb.touch'),
          e.removeEventListener('scroll', o.onscroll, !0),
          o.requestId && (i(o.requestId), (o.requestId = null)),
          (o.isSwiping = !1),
          (o.isPanning = !1),
          (o.isZooming = !1),
          (o.isScrolling = !1),
          (o.instance.isDragging = !1),
          o.canTap)
        )
          return o.onTap(t)
        ;(o.speed = 100),
          (o.velocityX = (o.distanceX / o.dMs) * 0.5),
          (o.velocityY = (o.distanceY / o.dMs) * 0.5),
          r ? o.endPanning() : c ? o.endZooming() : o.endSwiping(s, l)
      }),
      (d.prototype.endSwiping = function (t, e) {
        var o = this,
          i = !1,
          a = o.instance.group.length,
          s = Math.abs(o.distanceX),
          r = 'x' == t && a > 1 && ((o.dMs > 130 && s > 10) || s > 50)
        ;(o.sliderLastPos = null),
          'y' == t && !e && Math.abs(o.distanceY) > 50
            ? (n.fancybox.animate(
                o.instance.current.$slide,
                {
                  top: o.sliderStartPos.top + o.distanceY + 150 * o.velocityY,
                  opacity: 0
                },
                200
              ),
              (i = o.instance.close(!0, 250)))
            : r && o.distanceX > 0
            ? (i = o.instance.previous(300))
            : r && o.distanceX < 0 && (i = o.instance.next(300)),
          !1 !== i || ('x' != t && 'y' != t) || o.instance.centerSlide(200),
          o.$container.removeClass('fancybox-is-sliding')
      }),
      (d.prototype.endPanning = function () {
        var t,
          e,
          o,
          i = this
        i.contentLastPos &&
          (!1 === i.opts.momentum || i.dMs > 350
            ? ((t = i.contentLastPos.left), (e = i.contentLastPos.top))
            : ((t = i.contentLastPos.left + 500 * i.velocityX),
              (e = i.contentLastPos.top + 500 * i.velocityY)),
          (o = i.limitPosition(
            t,
            e,
            i.contentStartPos.width,
            i.contentStartPos.height
          )),
          (o.width = i.contentStartPos.width),
          (o.height = i.contentStartPos.height),
          n.fancybox.animate(i.$content, o, 366))
      }),
      (d.prototype.endZooming = function () {
        var t,
          e,
          o,
          i,
          a = this,
          s = a.instance.current,
          r = a.newWidth,
          c = a.newHeight
        a.contentLastPos &&
          ((t = a.contentLastPos.left),
          (e = a.contentLastPos.top),
          (i = { top: e, left: t, width: r, height: c, scaleX: 1, scaleY: 1 }),
          n.fancybox.setTranslate(a.$content, i),
          r < a.canvasWidth && c < a.canvasHeight
            ? a.instance.scaleToFit(150)
            : r > s.width || c > s.height
            ? a.instance.scaleToActual(
                a.centerPointStartX,
                a.centerPointStartY,
                150
              )
            : ((o = a.limitPosition(t, e, r, c)),
              n.fancybox.animate(a.$content, o, 150)))
      }),
      (d.prototype.onTap = function (e) {
        var o,
          i = this,
          s = n(e.target),
          r = i.instance,
          c = r.current,
          l = (e && a(e)) || i.startPoints,
          d = l[0] ? l[0].x - n(t).scrollLeft() - i.stagePos.left : 0,
          u = l[0] ? l[0].y - n(t).scrollTop() - i.stagePos.top : 0,
          f = function (t) {
            var o = c.opts[t]
            if ((n.isFunction(o) && (o = o.apply(r, [c, e])), o))
              switch (o) {
                case 'close':
                  r.close(i.startEvent)
                  break
                case 'toggleControls':
                  r.toggleControls()
                  break
                case 'next':
                  r.next()
                  break
                case 'nextOrClose':
                  r.group.length > 1 ? r.next() : r.close(i.startEvent)
                  break
                case 'zoom':
                  'image' == c.type &&
                    (c.isLoaded || c.$ghost) &&
                    (r.canPan()
                      ? r.scaleToFit()
                      : r.isScaledDown()
                      ? r.scaleToActual(d, u)
                      : r.group.length < 2 && r.close(i.startEvent))
              }
          }
        if (
          (!e.originalEvent || 2 != e.originalEvent.button) &&
          (s.is('img') || !(d > s[0].clientWidth + s.offset().left))
        ) {
          if (
            s.is(
              '.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container'
            )
          )
            o = 'Outside'
          else if (s.is('.fancybox-slide')) o = 'Slide'
          else {
            if (
              !r.current.$content ||
              !r.current.$content.find(s).addBack().filter(s).length
            )
              return
            o = 'Content'
          }
          if (i.tapped) {
            if (
              (clearTimeout(i.tapped),
              (i.tapped = null),
              Math.abs(d - i.tapX) > 50 || Math.abs(u - i.tapY) > 50)
            )
              return this
            f('dblclick' + o)
          } else
            (i.tapX = d),
              (i.tapY = u),
              c.opts['dblclick' + o] &&
              c.opts['dblclick' + o] !== c.opts['click' + o]
                ? (i.tapped = setTimeout(function () {
                    ;(i.tapped = null), r.isAnimating || f('click' + o)
                  }, 500))
                : f('click' + o)
          return this
        }
      }),
      n(e)
        .on('onActivate.fb', function (t, e) {
          e && !e.Guestures && (e.Guestures = new d(e))
        })
        .on('beforeClose.fb', function (t, e) {
          e && e.Guestures && e.Guestures.destroy()
        })
  })(window, document, jQuery),
  (function (t, e) {
    'use strict'
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        slideShow:
          '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
      },
      slideShow: { autoStart: !1, speed: 3e3, progress: !0 }
    })
    var n = function (t) {
      ;(this.instance = t), this.init()
    }
    e.extend(n.prototype, {
      timer: null,
      isActive: !1,
      $button: null,
      init: function () {
        var t = this,
          n = t.instance,
          o = n.group[n.currIndex].opts.slideShow
        ;(t.$button = n.$refs.toolbar
          .find('[data-fancybox-play]')
          .on('click', function () {
            t.toggle()
          })),
          n.group.length < 2 || !o
            ? t.$button.hide()
            : o.progress &&
              (t.$progress = e(
                '<div class="fancybox-progress"></div>'
              ).appendTo(n.$refs.inner))
      },
      set: function (t) {
        var n = this,
          o = n.instance,
          i = o.current
        i && (!0 === t || i.opts.loop || o.currIndex < o.group.length - 1)
          ? n.isActive &&
            'video' !== i.contentType &&
            (n.$progress &&
              e.fancybox.animate(
                n.$progress.show(),
                { scaleX: 1 },
                i.opts.slideShow.speed
              ),
            (n.timer = setTimeout(function () {
              o.current.opts.loop || o.current.index != o.group.length - 1
                ? o.next()
                : o.jumpTo(0)
            }, i.opts.slideShow.speed)))
          : (n.stop(), (o.idleSecondsCounter = 0), o.showControls())
      },
      clear: function () {
        var t = this
        clearTimeout(t.timer),
          (t.timer = null),
          t.$progress && t.$progress.removeAttr('style').hide()
      },
      start: function () {
        var t = this,
          e = t.instance.current
        e &&
          (t.$button
            .attr(
              'title',
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP
            )
            .removeClass('fancybox-button--play')
            .addClass('fancybox-button--pause'),
          (t.isActive = !0),
          e.isComplete && t.set(!0),
          t.instance.trigger('onSlideShowChange', !0))
      },
      stop: function () {
        var t = this,
          e = t.instance.current
        t.clear(),
          t.$button
            .attr(
              'title',
              (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START
            )
            .removeClass('fancybox-button--pause')
            .addClass('fancybox-button--play'),
          (t.isActive = !1),
          t.instance.trigger('onSlideShowChange', !1),
          t.$progress && t.$progress.removeAttr('style').hide()
      },
      toggle: function () {
        var t = this
        t.isActive ? t.stop() : t.start()
      }
    }),
      e(t).on({
        'onInit.fb': function (t, e) {
          e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        'beforeShow.fb': function (t, e, n, o) {
          var i = e && e.SlideShow
          o
            ? i && n.opts.slideShow.autoStart && i.start()
            : i && i.isActive && i.clear()
        },
        'afterShow.fb': function (t, e, n) {
          var o = e && e.SlideShow
          o && o.isActive && o.set()
        },
        'afterKeydown.fb': function (n, o, i, a, s) {
          var r = o && o.SlideShow
          !r ||
            !i.opts.slideShow ||
            (80 !== s && 32 !== s) ||
            e(t.activeElement).is('button,a,input') ||
            (a.preventDefault(), r.toggle())
        },
        'beforeClose.fb onDeactivate.fb': function (t, e) {
          var n = e && e.SlideShow
          n && n.stop()
        }
      }),
      e(t).on('visibilitychange', function () {
        var n = e.fancybox.getInstance(),
          o = n && n.SlideShow
        o && o.isActive && (t.hidden ? o.clear() : o.set())
      })
  })(document, jQuery),
  (function (t, e) {
    'use strict'
    var n = (function () {
      for (
        var e = [
            [
              'requestFullscreen',
              'exitFullscreen',
              'fullscreenElement',
              'fullscreenEnabled',
              'fullscreenchange',
              'fullscreenerror'
            ],
            [
              'webkitRequestFullscreen',
              'webkitExitFullscreen',
              'webkitFullscreenElement',
              'webkitFullscreenEnabled',
              'webkitfullscreenchange',
              'webkitfullscreenerror'
            ],
            [
              'webkitRequestFullScreen',
              'webkitCancelFullScreen',
              'webkitCurrentFullScreenElement',
              'webkitCancelFullScreen',
              'webkitfullscreenchange',
              'webkitfullscreenerror'
            ],
            [
              'mozRequestFullScreen',
              'mozCancelFullScreen',
              'mozFullScreenElement',
              'mozFullScreenEnabled',
              'mozfullscreenchange',
              'mozfullscreenerror'
            ],
            [
              'msRequestFullscreen',
              'msExitFullscreen',
              'msFullscreenElement',
              'msFullscreenEnabled',
              'MSFullscreenChange',
              'MSFullscreenError'
            ]
          ],
          n = {},
          o = 0;
        o < e.length;
        o++
      ) {
        var i = e[o]
        if (i && i[1] in t) {
          for (var a = 0; a < i.length; a++) n[e[0][a]] = i[a]
          return n
        }
      }
      return !1
    })()
    if (n) {
      var o = {
        request: function (e) {
          ;(e = e || t.documentElement),
            e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
        },
        exit: function () {
          t[n.exitFullscreen]()
        },
        toggle: function (e) {
          ;(e = e || t.documentElement),
            this.isFullscreen() ? this.exit() : this.request(e)
        },
        isFullscreen: function () {
          return Boolean(t[n.fullscreenElement])
        },
        enabled: function () {
          return Boolean(t[n.fullscreenEnabled])
        }
      }
      e.extend(!0, e.fancybox.defaults, {
        btnTpl: {
          fullScreen:
            '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
        },
        fullScreen: { autoStart: !1 }
      }),
        e(t).on(n.fullscreenchange, function () {
          var t = o.isFullscreen(),
            n = e.fancybox.getInstance()
          n &&
            (n.current &&
              'image' === n.current.type &&
              n.isAnimating &&
              ((n.isAnimating = !1),
              n.update(!0, !0, 0),
              n.isComplete || n.complete()),
            n.trigger('onFullscreenChange', t),
            n.$refs.container.toggleClass('fancybox-is-fullscreen', t),
            n.$refs.toolbar
              .find('[data-fancybox-fullscreen]')
              .toggleClass('fancybox-button--fsenter', !t)
              .toggleClass('fancybox-button--fsexit', t))
        })
    }
    e(t).on({
      'onInit.fb': function (t, e) {
        var i
        if (!n)
          return void e.$refs.toolbar
            .find('[data-fancybox-fullscreen]')
            .remove()
        e && e.group[e.currIndex].opts.fullScreen
          ? ((i = e.$refs.container),
            i.on(
              'click.fb-fullscreen',
              '[data-fancybox-fullscreen]',
              function (t) {
                t.stopPropagation(), t.preventDefault(), o.toggle()
              }
            ),
            e.opts.fullScreen &&
              !0 === e.opts.fullScreen.autoStart &&
              o.request(),
            (e.FullScreen = o))
          : e && e.$refs.toolbar.find('[data-fancybox-fullscreen]').hide()
      },
      'afterKeydown.fb': function (t, e, n, o, i) {
        e &&
          e.FullScreen &&
          70 === i &&
          (o.preventDefault(), e.FullScreen.toggle())
      },
      'beforeClose.fb': function (t, e) {
        e &&
          e.FullScreen &&
          e.$refs.container.hasClass('fancybox-is-fullscreen') &&
          o.exit()
      }
    })
  })(document, jQuery),
  (function (t, e) {
    'use strict'
    var n = 'fancybox-thumbs'
    e.fancybox.defaults = e.extend(
      !0,
      {
        btnTpl: {
          thumbs:
            '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
          autoStart: !1,
          hideOnClose: !0,
          parentEl: '.fancybox-container',
          axis: 'y'
        }
      },
      e.fancybox.defaults
    )
    var o = function (t) {
      this.init(t)
    }
    e.extend(o.prototype, {
      $button: null,
      $grid: null,
      $list: null,
      isVisible: !1,
      isActive: !1,
      init: function (t) {
        var e = this,
          n = t.group,
          o = 0
        ;(e.instance = t),
          (e.opts = n[t.currIndex].opts.thumbs),
          (t.Thumbs = e),
          (e.$button = t.$refs.toolbar.find('[data-fancybox-thumbs]'))
        for (
          var i = 0, a = n.length;
          i < a && (n[i].thumb && o++, !(o > 1));
          i++
        );
        o > 1 && e.opts
          ? (e.$button.removeAttr('style').on('click', function () {
              e.toggle()
            }),
            (e.isActive = !0))
          : e.$button.hide()
      },
      create: function () {
        var t,
          o = this,
          i = o.instance,
          a = o.opts.parentEl,
          s = []
        o.$grid ||
          ((o.$grid = e(
            '<div class="' + n + ' ' + n + '-' + o.opts.axis + '"></div>'
          ).appendTo(i.$refs.container.find(a).addBack().filter(a))),
          o.$grid.on('click', 'a', function () {
            i.jumpTo(e(this).attr('data-index'))
          })),
          o.$list ||
            (o.$list = e('<div class="' + n + '__list">').appendTo(o.$grid)),
          e.each(i.group, function (e, n) {
            ;(t = n.thumb),
              t || 'image' !== n.type || (t = n.src),
              s.push(
                '<a href="javascript:;" tabindex="0" data-index="' +
                  e +
                  '"' +
                  (t && t.length
                    ? ' style="background-image:url(' + t + ')"'
                    : 'class="fancybox-thumbs-missing"') +
                  '></a>'
              )
          }),
          (o.$list[0].innerHTML = s.join('')),
          'x' === o.opts.axis &&
            o.$list.width(
              parseInt(o.$grid.css('padding-right'), 10) +
                i.group.length * o.$list.children().eq(0).outerWidth(!0)
            )
      },
      focus: function (t) {
        var e,
          n,
          o = this,
          i = o.$list,
          a = o.$grid
        o.instance.current &&
          ((e = i
            .children()
            .removeClass('fancybox-thumbs-active')
            .filter('[data-index="' + o.instance.current.index + '"]')
            .addClass('fancybox-thumbs-active')),
          (n = e.position()),
          'y' === o.opts.axis &&
          (n.top < 0 || n.top > i.height() - e.outerHeight())
            ? i.stop().animate({ scrollTop: i.scrollTop() + n.top }, t)
            : 'x' === o.opts.axis &&
              (n.left < a.scrollLeft() ||
                n.left > a.scrollLeft() + (a.width() - e.outerWidth())) &&
              i.parent().stop().animate({ scrollLeft: n.left }, t))
      },
      update: function () {
        var t = this
        t.instance.$refs.container.toggleClass(
          'fancybox-show-thumbs',
          this.isVisible
        ),
          t.isVisible
            ? (t.$grid || t.create(),
              t.instance.trigger('onThumbsShow'),
              t.focus(0))
            : t.$grid && t.instance.trigger('onThumbsHide'),
          t.instance.update()
      },
      hide: function () {
        ;(this.isVisible = !1), this.update()
      },
      show: function () {
        ;(this.isVisible = !0), this.update()
      },
      toggle: function () {
        ;(this.isVisible = !this.isVisible), this.update()
      }
    }),
      e(t).on({
        'onInit.fb': function (t, e) {
          var n
          e &&
            !e.Thumbs &&
            ((n = new o(e)), n.isActive && !0 === n.opts.autoStart && n.show())
        },
        'beforeShow.fb': function (t, e, n, o) {
          var i = e && e.Thumbs
          i && i.isVisible && i.focus(o ? 0 : 250)
        },
        'afterKeydown.fb': function (t, e, n, o, i) {
          var a = e && e.Thumbs
          a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
        },
        'beforeClose.fb': function (t, e) {
          var n = e && e.Thumbs
          n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
      })
  })(document, jQuery),
  (function (t, e) {
    'use strict'
    function n (t) {
      var e = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
      }
      return String(t).replace(/[&<>"'`=\/]/g, function (t) {
        return e[t]
      })
    }
    e.extend(!0, e.fancybox.defaults, {
      btnTpl: {
        share:
          '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
      },
      share: {
        url: function (t, e) {
          return (
            (!t.currentHash &&
              'inline' !== e.type &&
              'html' !== e.type &&
              (e.origSrc || e.src)) ||
            window.location
          )
        },
        tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
      }
    }),
      e(t).on('click', '[data-fancybox-share]', function () {
        var t,
          o,
          i = e.fancybox.getInstance(),
          a = i.current || null
        a &&
          ('function' === e.type(a.opts.share.url) &&
            (t = a.opts.share.url.apply(a, [i, a])),
          (o = a.opts.share.tpl
            .replace(
              /\{\{media\}\}/g,
              'image' === a.type ? encodeURIComponent(a.src) : ''
            )
            .replace(/\{\{url\}\}/g, encodeURIComponent(t))
            .replace(/\{\{url_raw\}\}/g, n(t))
            .replace(
              /\{\{descr\}\}/g,
              i.$caption ? encodeURIComponent(i.$caption.text()) : ''
            )),
          e.fancybox.open({
            src: i.translate(i, o),
            type: 'html',
            opts: {
              touch: !1,
              animationEffect: !1,
              afterLoad: function (t, e) {
                i.$refs.container.one('beforeClose.fb', function () {
                  t.close(null, 0)
                }),
                  e.$content.find('.fancybox-share__button').click(function () {
                    return (
                      window.open(this.href, 'Share', 'width=550, height=450'),
                      !1
                    )
                  })
              },
              mobile: { autoFocus: !1 }
            }
          }))
      })
  })(document, jQuery),
  (function (t, e, n) {
    'use strict'
    function o () {
      var e = t.location.hash.substr(1),
        n = e.split('-'),
        o =
          n.length > 1 && /^\+?\d+$/.test(n[n.length - 1])
            ? parseInt(n.pop(-1), 10) || 1
            : 1,
        i = n.join('-')
      return { hash: e, index: o < 1 ? 1 : o, gallery: i }
    }
    function i (t) {
      '' !== t.gallery &&
        n("[data-fancybox='" + n.escapeSelector(t.gallery) + "']")
          .eq(t.index - 1)
          .focus()
          .trigger('click.fb-start')
    }
    function a (t) {
      var e, n
      return (
        !!t &&
        ((e = t.current ? t.current.opts : t.opts),
        '' !==
          (n =
            e.hash ||
            (e.$orig
              ? e.$orig.data('fancybox') || e.$orig.data('fancybox-trigger')
              : '')) && n)
      )
    }
    n.escapeSelector ||
      (n.escapeSelector = function (t) {
        return (t + '').replace(
          /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
          function (t, e) {
            return e
              ? '\0' === t
                ? 'ï¿½'
                : t.slice(0, -1) +
                  '\\' +
                  t.charCodeAt(t.length - 1).toString(16) +
                  ' '
              : '\\' + t
          }
        )
      }),
      n(function () {
        !1 !== n.fancybox.defaults.hash &&
          (n(e).on({
            'onInit.fb': function (t, e) {
              var n, i
              !1 !== e.group[e.currIndex].opts.hash &&
                ((n = o()),
                (i = a(e)) &&
                  n.gallery &&
                  i == n.gallery &&
                  (e.currIndex = n.index - 1))
            },
            'beforeShow.fb': function (n, o, i, s) {
              var r
              i &&
                !1 !== i.opts.hash &&
                (r = a(o)) &&
                ((o.currentHash =
                  r + (o.group.length > 1 ? '-' + (i.index + 1) : '')),
                t.location.hash !== '#' + o.currentHash &&
                  (s && !o.origHash && (o.origHash = t.location.hash),
                  o.hashTimer && clearTimeout(o.hashTimer),
                  (o.hashTimer = setTimeout(function () {
                    'replaceState' in t.history
                      ? (t.history[s ? 'pushState' : 'replaceState'](
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            '#' +
                            o.currentHash
                        ),
                        s && (o.hasCreatedHistory = !0))
                      : (t.location.hash = o.currentHash),
                      (o.hashTimer = null)
                  }, 300))))
            },
            'beforeClose.fb': function (n, o, i) {
              i &&
                !1 !== i.opts.hash &&
                (clearTimeout(o.hashTimer),
                o.currentHash && o.hasCreatedHistory
                  ? t.history.back()
                  : o.currentHash &&
                    ('replaceState' in t.history
                      ? t.history.replaceState(
                          {},
                          e.title,
                          t.location.pathname +
                            t.location.search +
                            (o.origHash || '')
                        )
                      : (t.location.hash = o.origHash)),
                (o.currentHash = null))
            }
          }),
          n(t).on('hashchange.fb', function () {
            var t = o(),
              e = null
            n.each(n('.fancybox-container').get().reverse(), function (t, o) {
              var i = n(o).data('FancyBox')
              if (i && i.currentHash) return (e = i), !1
            }),
              e
                ? e.currentHash === t.gallery + '-' + t.index ||
                  (1 === t.index && e.currentHash == t.gallery) ||
                  ((e.currentHash = null), e.close())
                : '' !== t.gallery && i(t)
          }),
          setTimeout(function () {
            n.fancybox.getInstance() || i(o())
          }, 50))
      })
  })(window, document, jQuery),
  (function (t, e) {
    'use strict'
    var n = new Date().getTime()
    e(t).on({
      'onInit.fb': function (t, e, o) {
        e.$refs.stage.on(
          'mousewheel DOMMouseScroll wheel MozMousePixelScroll',
          function (t) {
            var o = e.current,
              i = new Date().getTime()
            e.group.length < 2 ||
              !1 === o.opts.wheel ||
              ('auto' === o.opts.wheel && 'image' !== o.type) ||
              (t.preventDefault(),
              t.stopPropagation(),
              o.$slide.hasClass('fancybox-animated') ||
                ((t = t.originalEvent || t),
                i - n < 250 ||
                  ((n = i),
                  e[
                    (-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0
                      ? 'next'
                      : 'previous'
                  ]())))
          }
        )
      }
    })
  })(document, jQuery)

/*
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function (a, b, c, d) {
  function e (b, c) {
    ;(this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ['busy'],
          animating: ['busy'],
          dragging: ['interacting']
        }
      }),
      a.each(
        ['onResize', 'onThrottledResize'],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this)
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) })
        }, this)
      ),
      this.setup(),
      this.initialize()
  }
  ;(e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: 'swing',
    slideTransition: '',
    info: !1,
    nestedItemSelector: !1,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab'
  }),
    (e.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }),
    (e.Type = { Event: 'event', State: 'state' }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ['width', 'settings'],
        run: function () {
          this._width = this.$element.width()
        }
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)]
        }
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          this.$stage.children('.cloned').remove()
        }
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = this.settings.margin || '',
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: 'auto',
              'margin-left': d ? b : '',
              'margin-right': d ? '' : b
            }
          !c && this.$stage.children().css(e), (a.css = e)
        }
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = []
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width())
          this._widths = f
        }
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = '',
            i = ''
          for (g /= 2; g > 0; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i),
              (g -= 1)
          ;(this._clones = b),
            a(h).addClass('cloned').appendTo(this.$stage),
            a(i).addClass('cloned').prependTo(this.$stage)
        }
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a)
          this._coordinates = f
        }
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              'padding-left': a || '',
              'padding-right': a || ''
            }
          this.$stage.css(c)
        }
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children()
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css)
          else c && ((a.css.width = a.items.width), d.css(a.css))
        }
      },
      {
        filter: ['items'],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr('style')
        }
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          ;(a.current = a.current
            ? this.$stage.children().index(a.current)
            : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current)
        }
      },
      {
        filter: ['position'],
        run: function () {
          this.animate(this.coordinates(this._current))
        }
      },
      {
        filter: ['width', 'position', 'items', 'settings'],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = []
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, '<=', g) && this.op(a, '>', h)) ||
                (this.op(b, '<', g) && this.op(b, '>', h))) &&
                i.push(c)
          this.$stage.children('.active').removeClass('active'),
            this.$stage
              .children(':eq(' + i.join('), :eq(') + ')')
              .addClass('active'),
            this.$stage.children('.center').removeClass('center'),
            this.settings.center &&
              this.$stage.children().eq(this.current()).addClass('center')
        }
      }
    ]),
    (e.prototype.initializeStage = function () {
      ;(this.$stage = this.$element.find('.' + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a('<' + this.settings.stageElement + '>', {
            class: this.settings.stageClass
          }).wrap(a('<div/>', { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()))
    }),
    (e.prototype.initializeItems = function () {
      var b = this.$element.find('.owl-item')
      if (b.length)
        return (
          (this._items = b.get().map(function (b) {
            return a(b)
          })),
          (this._mergers = this._items.map(function () {
            return 1
          })),
          void this.refresh()
        )
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate('width'),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass)
    }),
    (e.prototype.initialize = function () {
      if (
        (this.enter('initializing'),
        this.trigger('initialize'),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is('pre-loading'))
      ) {
        var a, b, c
        ;(a = this.$element.find('img')),
          (b = this.settings.nestedItemSelector
            ? '.' + this.settings.nestedItemSelector
            : d),
          (c = this.$element.children(b).width()),
          a.length && c <= 0 && this.preloadAutoWidthImages(a)
      }
      this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave('initializing'),
        this.trigger('initialized')
    }),
    (e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(':visible')
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a))
          }),
          (e = a.extend({}, this.options, c[d])),
          'function' == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              'class',
              this.$element
                .attr('class')
                .replace(
                  new RegExp(
                    '(' + this.options.responsiveClass + '-)\\S+\\s',
                    'g'
                  ),
                  '$1' + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger('change', { property: { name: 'settings', value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate('settings'),
        this.trigger('changed', {
          property: { name: 'settings', value: this.settings }
        })
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1))
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger('prepare', { content: b })
      return (
        c.data ||
          (c.data = a('<' + this.settings.itemElement + '/>')
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger('prepared', { content: c.data }),
        c.data
      )
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a]
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++
      ;(this._invalidated = {}), !this.is('valid') && this.enter('valid')
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          )
      }
    }),
    (e.prototype.refresh = function () {
      this.enter('refreshing'),
        this.trigger('refresh'),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave('refreshing'),
        this.trigger('refreshed')
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ))
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter('resizing'),
        this.trigger('resize').isDefaultPrevented()
          ? (this.leave('resizing'), !1)
          : (this.invalidate('width'),
            this.refresh(),
            this.leave('resizing'),
            void this.trigger('resized')))
      )
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + '.owl.core',
          a.proxy(this.onTransitionEnd, this)
        ),
        !1 !== this.settings.responsive &&
          this.on(b, 'resize', this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on('mousedown.owl.core', a.proxy(this.onDragStart, this)),
          this.$stage.on(
            'dragstart.owl.core selectstart.owl.core',
            function () {
              return !1
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            'touchstart.owl.core',
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on('touchcancel.owl.core', a.proxy(this.onDragEnd, this)))
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css('transform')
              .replace(/.*\(|\)| /g, '')
              .split(',')),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5]
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top
            })),
        this.is('animating') &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate('position')),
        this.$element.toggleClass(
          this.options.grabClass,
          'mousedown' === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          'mouseup.owl.core touchend.owl.core',
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          'mousemove.owl.core touchmove.owl.core',
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b))
            a(c).on(
              'mousemove.owl.core touchmove.owl.core',
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is('valid')) ||
                (b.preventDefault(),
                this.enter('dragging'),
                this.trigger('drag'))
          }, this)
        ))
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e)
      this.is('dragging') &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x))
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? 'left' : 'right'
      a(c).off('.owl.core'),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is('dragging')) || !this.is('valid')) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate('position'),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one('click.owl.core', function () {
              return !1
            })),
        this.is('dragging') && (this.leave('dragging'), this.trigger('dragged'))
    }),
    (e.prototype.closest = function (b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates()
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function (a, i) {
              return (
                'left' === c && b > i - f && b < i + f
                  ? (e = a)
                  : 'right' === c && b > i - g - f && b < i - g + f
                  ? (e = a + 1)
                  : this.op(b, '<', i) &&
                    this.op(b, '>', h[a + 1] !== d ? h[a + 1] : i - g) &&
                    (e = 'left' === c ? a + 1 : a),
                -1 === e
              )
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, '>', h[this.minimum()])
            ? (e = b = this.minimum())
            : this.op(b, '<', h[this.maximum()]) && (e = b = this.maximum())),
        e
      )
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0
      this.is('animating') && this.onTransitionEnd(),
        c && (this.enter('animating'), this.trigger('translate')),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: 'translate3d(' + b + 'px,0px,0px)',
              transition:
                this.speed() / 1e3 +
                's' +
                (this.settings.slideTransition
                  ? ' ' + this.settings.slideTransition
                  : '')
            })
          : c
          ? this.$stage.animate(
              { left: b + 'px' },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + 'px' })
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current
      if (0 === this._items.length) return d
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger('change', {
          property: { name: 'position', value: a }
        })
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate('position'),
          this.trigger('changed', {
            property: { name: 'position', value: this._current }
          })
      }
      return this._current
    }),
    (e.prototype.invalidate = function (b) {
      return (
        'string' === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is('valid') && this.leave('valid')),
        a.map(this._invalidated, function (a, b) {
          return b
        })
      )
    }),
    (e.prototype.reset = function (a) {
      ;(a = this.normalize(a)) !== d &&
        ((this._speed = 0),
        (this._current = a),
        this.suppress(['translate', 'translated']),
        this.animate(this.coordinates(a)),
        this.release(['translate', 'translated']))
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      )
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0)
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length))
          for (
            c = this._items[--b].width(), d = this.$element.width();
            b-- && !((c += this._items[b].width() + this.settings.margin) > d);

          );
        f = b + 1
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items
      return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a])
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a])
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2
        }
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b)
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
          })
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b)
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)))
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed)
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum()
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h) !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update()
    }),
    (e.prototype.next = function (a) {
      ;(a = a || !1), this.to(this.relative(this.current()) + 1, a)
    }),
    (e.prototype.prev = function (a) {
      ;(a = a || !1), this.to(this.relative(this.current()) - 1, a)
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1
      this.leave('animating'), this.trigger('translated')
    }),
    (e.prototype.viewport = function () {
      var d
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn('Can not detect viewport width.'),
        d
      )
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find('.' + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType
          })
          .each(
            a.proxy(function (a, b) {
              ;(b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find('[data-merge]')
                      .addBack('[data-merge]')
                      .attr('data-merge') || 1
                )
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate('items')
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current)
      ;(c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger('add', { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find('[data-merge]')
                  .addBack('[data-merge]')
                  .attr('data-merge') || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find('[data-merge]')
                  .addBack('[data-merge]')
                  .attr('data-merge') || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate('items'),
        this.trigger('added', { content: b, position: c })
    }),
    (e.prototype.remove = function (a) {
      ;(a = this.normalize(a, !0)) !== d &&
        (this.trigger('remove', { content: this._items[a], position: a }),
        this._items[a].remove(),
        this._items.splice(a, 1),
        this._mergers.splice(a, 1),
        this.invalidate('items'),
        this.trigger('removed', { content: null, position: a }))
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter('pre-loading'),
            (c = a(c)),
            a(new Image())
              .one(
                'load',
                a.proxy(function (a) {
                  c.attr('src', a.target.src),
                    c.css('opacity', 1),
                    this.leave('pre-loading'),
                    !this.is('pre-loading') &&
                      !this.is('initializing') &&
                      this.refresh()
                }, this)
              )
              .attr(
                'src',
                c.attr('src') || c.attr('data-src') || c.attr('data-src-retina')
              )
        }, this)
      )
    }),
    (e.prototype.destroy = function () {
      this.$element.off('.owl.core'),
        this.$stage.off('.owl.core'),
        a(c).off('.owl.core'),
        !1 !== this.settings.responsive &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, 'resize', this._handlers.onThrottledResize))
      for (var d in this._plugins) this._plugins[d].destroy()
      this.$stage.children('.cloned').remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            'class',
            this.$element
              .attr('class')
              .replace(
                new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'),
                ''
              )
          )
          .removeData('owl.carousel')
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl
      switch (b) {
        case '<':
          return d ? a > c : a < c
        case '>':
          return d ? a < c : a > c
        case '>=':
          return d ? a <= c : a >= c
        case '<=':
          return d ? a >= c : a <= c
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent('on' + b, c)
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent('on' + b, c)
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(['on', b, d], function (a) {
              return a
            })
            .join('-')
            .toLowerCase()
        ),
        j = a.Event(
          [b, 'owl', d || 'carousel'].join('.').toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        )
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j)
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            'function' == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      )
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++
        }, this)
      )
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--
        }, this)
      )
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default
          ;(a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && -1 !== a.namespace.indexOf('owl'))
              ? a.namespace && a.namespace.indexOf('owl') > -1
              : c.apply(this, arguments)
          }),
            (a.event.special[b.name].owl = !0)
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d
            }, this)
          )))
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0
        }, this)
      )
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b]
        }, this)
      )
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null }
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      )
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a))
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y }
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return this.each(function () {
        var d = a(this),
          f = d.data('owl.carousel')
        f ||
          ((f = new e(this, 'object' == typeof b && b)),
          d.data('owl.carousel', f),
          a.each(
            [
              'next',
              'prev',
              'to',
              'destroy',
              'refresh',
              'replace',
              'add',
              'remove'
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + '.owl.carousel.core',
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]))
                  }, f)
                )
            }
          )),
          'string' == typeof b && '_' !== b.charAt(0) && f[b].apply(f, c)
      })
    }),
    (a.fn.owlCarousel.Constructor = e)
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch()
          }, this)
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers)
    }
    ;(e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )))
      }),
      (e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass('owl-hidden', !this._visible),
          this._visible &&
            this._core.invalidate('width') &&
            this._core.refresh())
      }),
      (e.prototype.destroy = function () {
        var a, c
        b.clearInterval(this._interval)
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a])
        for (c in Object.getOwnPropertyNames(this))
          'function' != typeof this[c] && (this[c] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._loaded = []),
        (this._handlers = {
          'initialized.owl.carousel change.owl.carousel resized.owl.carousel':
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && 'position' == b.property.name) ||
                  'initialized' == b.type)
              ) {
                var c = this._core.settings,
                  e = (c.center && Math.ceil(c.items / 2)) || c.items,
                  f = (c.center && -1 * e) || 0,
                  g =
                    (b.property && b.property.value !== d
                      ? b.property.value
                      : this._core.current()) + f,
                  h = this._core.clones().length,
                  i = a.proxy(function (a, b) {
                    this.load(b)
                  }, this)
                for (
                  c.lazyLoadEager > 0 &&
                  ((e += c.lazyLoadEager),
                  c.loop && ((g -= c.lazyLoadEager), e++));
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++
              }
            }, this)
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers)
    }
    ;(e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find('.owl-lazy')
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr('data-src-retina')) ||
                  f.attr('data-src') ||
                  f.attr('data-srcset')
              this._core.trigger('load', { element: f, url: g }, 'lazy'),
                f.is('img')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function () {
                          f.css('opacity', 1),
                            this._core.trigger(
                              'loaded',
                              { element: f, url: g },
                              'lazy'
                            )
                        }, this)
                      )
                      .attr('src', g)
                  : f.is('source')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function () {
                          this._core.trigger(
                            'loaded',
                            { element: f, url: g },
                            'lazy'
                          )
                        }, this)
                      )
                      .attr('srcset', g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        'background-image': 'url("' + g + '")',
                        opacity: '1'
                      }),
                        this._core.trigger(
                          'loaded',
                          { element: f, url: g },
                          'lazy'
                        )
                    }, this)),
                    (e.src = g))
            }, this)
          ),
          this._loaded.push(d.get(0)))
      }),
      (e.prototype.destroy = function () {
        var a, b
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (c) {
      ;(this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          'initialized.owl.carousel refreshed.owl.carousel': a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update()
          },
          this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              'position' === a.property.name &&
              this.update()
          }, this),
          'loaded.owl.lazy': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest('.' + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update()
          }, this)
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null)
      var d = this
      a(b).on('load', function () {
        d._core.settings.autoHeight && d.update()
      }),
        a(b).resize(function () {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function () {
              d.update()
            }, 250)))
        })
    }
    ;(e.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0
        a.each(e, function (b, c) {
          f.push(a(c).height())
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage
            .parent()
            .height(g)
            .addClass(this._core.settings.autoHeightClass)
      }),
      (e.prototype.destroy = function () {
        var a, b
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: 'state',
                name: 'playing',
                tags: ['interacting']
              })
          }, this),
          'resize.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault()
          }, this),
          'refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.is('resizing') &&
              this._core.$stage.find('.cloned .owl-video-frame').remove()
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              'position' === a.property.name &&
              this._playing &&
              this.stop()
          }, this),
          'prepared.owl.carousel': a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find('.owl-video')
              c.length &&
                (c.css('display', 'none'), this.fetch(c, a(b.content)))
            }
          }, this)
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          'click.owl.video',
          '.owl-video-play-icon',
          a.proxy(function (a) {
            this.play(a)
          }, this)
        )
    }
    ;(e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr('data-vimeo-id')
              ? 'vimeo'
              : a.attr('data-vzaar-id')
              ? 'vzaar'
              : 'youtube'
          })(),
          d =
            a.attr('data-vimeo-id') ||
            a.attr('data-youtube-id') ||
            a.attr('data-vzaar-id'),
          e = a.attr('data-width') || this._core.settings.videoWidth,
          f = a.attr('data-height') || this._core.settings.videoHeight,
          g = a.attr('href')
        if (!g) throw new Error('Missing video URL.')
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf('youtu') > -1)
        )
          c = 'youtube'
        else if (d[3].indexOf('vimeo') > -1) c = 'vimeo'
        else {
          if (!(d[3].indexOf('vzaar') > -1))
            throw new Error('Video URL not supported.')
          c = 'vzaar'
        }
        ;(d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr('data-video', g),
          this.thumbnail(a, this._videos[g])
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'width:' + c.width + 'px;height:' + c.height + 'px;'
              : '',
          h = b.find('img'),
          i = 'src',
          j = '',
          k = this._core.settings,
          l = function (c) {
            ;(e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? a('<div/>', { class: 'owl-video-tn ' + j, srcType: c })
                : a('<div/>', {
                    class: 'owl-video-tn',
                    style: 'opacity:1;background-image:url(' + c + ')'
                  })),
              b.after(d),
              b.after(e)
          }
        if (
          (b.wrap(a('<div/>', { class: 'owl-video-wrapper', style: g })),
          this._core.settings.lazyLoad && ((i = 'data-src'), (j = 'owl-lazy')),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1
        'youtube' === c.type
          ? ((f = '//img.youtube.com/vi/' + c.id + '/hqdefault.jpg'), l(f))
          : 'vimeo' === c.type
          ? a.ajax({
              type: 'GET',
              url: '//vimeo.com/api/v2/video/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (a) {
                ;(f = a[0].thumbnail_large), l(f)
              }
            })
          : 'vzaar' === c.type &&
            a.ajax({
              type: 'GET',
              url: '//vzaar.com/api/videos/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (a) {
                ;(f = a.framegrab_url), l(f)
              }
            })
      }),
      (e.prototype.stop = function () {
        this._core.trigger('stop', null, 'video'),
          this._playing.find('.owl-video-frame').remove(),
          this._playing.removeClass('owl-video-playing'),
          (this._playing = null),
          this._core.leave('playing'),
          this._core.trigger('stopped', null, 'video')
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest('.' + this._core.settings.itemClass),
          f = this._videos[e.attr('data-video')],
          g = f.width || '100%',
          h = f.height || this._core.$stage.height()
        this._playing ||
          (this._core.enter('playing'),
          this._core.trigger('play', null, 'video'),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )),
          c.attr('height', h),
          c.attr('width', g),
          'youtube' === f.type
            ? c.attr(
                'src',
                '//www.youtube.com/embed/' +
                  f.id +
                  '?autoplay=1&rel=0&v=' +
                  f.id
              )
            : 'vimeo' === f.type
            ? c.attr('src', '//player.vimeo.com/video/' + f.id + '?autoplay=1')
            : 'vzaar' === f.type &&
              c.attr(
                'src',
                '//view.vzaar.com/' + f.id + '/player?autoplay=true'
              ),
          a(c)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(e.find('.owl-video')),
          (this._playing = e.addClass('owl-video-playing')))
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement
        return b && a(b).parent().hasClass('owl-video-frame')
      }),
      (e.prototype.destroy = function () {
        var a, b
        this._core.$element.off('click.owl.video')
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          'change.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              'position' == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value))
          }, this),
          'drag.owl.carousel dragged.owl.carousel translated.owl.carousel':
            a.proxy(function (a) {
              a.namespace && (this.swapping = 'translated' == a.type)
            }, this),
          'translate.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap()
          }, this)
        }),
        this.core.$element.on(this.handlers)
    }
    ;(e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0)
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass('animated owl-animated-in')
                .addClass(f))
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: '' })
          .removeClass('animated owl-animated-out owl-animated-in')
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd()
      }),
      (e.prototype.destroy = function () {
        var a, b
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'settings' === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                'position' === a.property.name &&
                this._paused &&
                (this._time = 0)
          }, this),
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play()
          }, this),
          'play.owl.autoplay': a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c)
          }, this),
          'stop.owl.autoplay': a.proxy(function (a) {
            a.namespace && this.stop()
          }, this),
          'mouseover.owl.autoplay': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.pause()
          }, this),
          'mouseleave.owl.autoplay': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.play()
          }, this),
          'touchstart.owl.core': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.pause()
          }, this),
          'touchend.owl.core': a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play()
          }, this)
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options))
    }
    ;(e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1
    }),
      (e.prototype._next = function (d) {
        ;(this._call = b.setTimeout(
          a.proxy(this._next, this, d),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is('interacting') ||
            c.hidden ||
            this._core.next(d || this._core.settings.autoplaySpeed)
      }),
      (e.prototype.read = function () {
        return new Date().getTime() - this._time
      }),
      (e.prototype.play = function (c, d) {
        var e
        this._core.is('rotating') || this._core.enter('rotating'),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e))
      }),
      (e.prototype.stop = function () {
        this._core.is('rotating') &&
          ((this._time = 0),
          (this._paused = !0),
          b.clearTimeout(this._call),
          this._core.leave('rotating'))
      }),
      (e.prototype.pause = function () {
        this._core.is('rotating') &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          b.clearTimeout(this._call))
      }),
      (e.prototype.destroy = function () {
        var a, b
        this.stop()
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    'use strict'
    var e = function (b) {
      ;(this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to
        }),
        (this._handlers = {
          'prepared.owl.carousel': a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find('[data-dot]')
                    .addBack('[data-dot]')
                    .attr('data-dot') +
                  '</div>'
              )
          }, this),
          'added.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop())
          }, this),
          'remove.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1)
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'position' == a.property.name && this.draw()
          }, this),
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger('initialize', null, 'navigation'),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger('initialized', null, 'navigation'))
          }, this),
          'refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger('refresh', null, 'navigation'),
              this.update(),
              this.draw(),
              this._core.trigger('refreshed', null, 'navigation'))
          }, this)
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers)
    }
    ;(e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>'
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: 'owl-nav',
      navClass: ['owl-prev', 'owl-next'],
      slideBy: 1,
      dotClass: 'owl-dot',
      dotsClass: 'owl-dots',
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings
        ;(this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a('<div>').addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass('disabled')),
          (this._controls.$previous = a('<' + c.navElement + '>')
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function (a) {
                this.prev(c.navSpeed)
              }, this)
            )),
          (this._controls.$next = a('<' + c.navElement + '>')
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function (a) {
                this.next(c.navSpeed)
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a('<button role="button">')
                .addClass(c.dotClass)
                .append(a('<span>'))
                .prop('outerHTML')
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a('<div>').addClass(c.dotsClass).appendTo(this.$element)
          ).addClass('disabled')),
          this._controls.$absolute.on(
            'click',
            'button',
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index()
              b.preventDefault(), this.to(d, c.dotsSpeed)
            }, this)
          )
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d, e
        e = this._core.settings
        for (a in this._handlers) this.$element.off(a, this._handlers[a])
        for (b in this._controls)
          '$relative' === b && e.navContainer
            ? this._controls[b].html('')
            : this._controls[b].remove()
        for (d in this.overides) this._core[d] = this._overrides[d]
        for (c in Object.getOwnPropertyNames(this))
          'function' != typeof this[c] && (this[c] = null)
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items
        if (
          ('page' !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || 'page' == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1
                }),
                Math.min(f, a - d) === f)
              )
                break
              ;(b = 0), ++c
            }
            b += this._core.mergers(this._core.relative(a))
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind
        this._controls.$relative.toggleClass('disabled', !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              'disabled',
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              'disabled',
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass('disabled', !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(''))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find('.active').removeClass('active'),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass('active'))
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current())
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b
            }, this)
          )
          .pop()
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings
        return (
          'page' == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        )
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
      }),
      (e.prototype.to = function (b, c, d) {
        var e
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    'use strict'
    var e = function (c) {
      ;(this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (c) {
            c.namespace &&
              'URLHash' === this._core.settings.startPosition &&
              a(b).trigger('hashchange.owl.navigation')
          }, this),
          'prepared.owl.carousel': a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find('[data-hash]')
                .addBack('[data-hash]')
                .attr('data-hash')
              if (!c) return
              this._hashes[c] = b.content
            }
          }, this),
          'changed.owl.carousel': a.proxy(function (c) {
            if (c.namespace && 'position' === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null
                  })
                  .join()
              if (!e || b.location.hash.slice(1) === e) return
              b.location.hash = e
            }
          }, this)
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          'hashchange.owl.navigation',
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c])
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0)
          }, this)
        )
    }
    ;(e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d
        a(b).off('hashchange.owl.navigation')
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c])
        for (d in Object.getOwnPropertyNames(this))
          'function' != typeof this[d] && (this[d] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e (b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1)
      return (
        a.each((b + ' ' + h.join(f + ' ') + f).split(' '), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1
        }),
        e
      )
    }
    function f (a) {
      return e(a, !0)
    }
    var g = a('<support>').get(0).style,
      h = 'Webkit Moz O ms'.split(' '),
      i = {
        transition: {
          end: {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd',
            transition: 'transitionend'
          }
        },
        animation: {
          end: {
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'animationend',
            OAnimation: 'oAnimationEnd',
            animation: 'animationend'
          }
        }
      },
      j = {
        csstransforms: function () {
          return !!e('transform')
        },
        csstransforms3d: function () {
          return !!e('perspective')
        },
        csstransitions: function () {
          return !!e('transition')
        },
        cssanimations: function () {
          return !!e('animation')
        }
      }
    j.csstransitions() &&
      ((a.support.transition = new String(f('transition'))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f('animation'))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f('transform'))),
        (a.support.transform3d = j.csstransforms3d()))
  })(window.Zepto || window.jQuery, window, document)

/*------------ //////// ---------------*/

// AOS JS
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.AOS = t())
    : (e.AOS = t())
})(this, function () {
  return (function (e) {
    function t (o) {
      if (n[o]) return n[o].exports
      var i = (n[o] = { exports: {}, id: o, loaded: !1 })
      return e[o].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports
    }
    var n = {}
    return (t.m = e), (t.c = n), (t.p = 'dist/'), t(0)
  })([
    function (e, t, n) {
      'use strict'
      function o (e) {
        return e && e.__esModule ? e : { default: e }
      }
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
          },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        f = o(c),
        s = n(8),
        d = o(s),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = {
          offset: 120,
          delay: 0,
          easing: 'ease',
          duration: 400,
          disable: !1,
          once: !1,
          startEvent: 'DOMContentLoaded',
          throttleDelay: 99,
          debounceDelay: 50,
          disableMutationObserver: !1
        },
        j = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
          if ((e && (k = !0), k))
            return (w = (0, y.default)(w, x)), (0, b.default)(w, x.once), w
        },
        O = function () {
          ;(w = (0, h.default)()), j()
        },
        _ = function () {
          w.forEach(function (e, t) {
            e.node.removeAttribute('data-aos'),
              e.node.removeAttribute('data-aos-easing'),
              e.node.removeAttribute('data-aos-duration'),
              e.node.removeAttribute('data-aos-delay')
          })
        },
        S = function (e) {
          return (
            e === !0 ||
            ('mobile' === e && p.default.mobile()) ||
            ('phone' === e && p.default.phone()) ||
            ('tablet' === e && p.default.tablet()) ||
            ('function' == typeof e && e() === !0)
          )
        },
        z = function (e) {
          ;(x = i(x, e)), (w = (0, h.default)())
          var t = document.all && !window.atob
          return S(x.disable) || t
            ? _()
            : (document
                .querySelector('body')
                .setAttribute('data-aos-easing', x.easing),
              document
                .querySelector('body')
                .setAttribute('data-aos-duration', x.duration),
              document
                .querySelector('body')
                .setAttribute('data-aos-delay', x.delay),
              'DOMContentLoaded' === x.startEvent &&
              ['complete', 'interactive'].indexOf(document.readyState) > -1
                ? j(!0)
                : 'load' === x.startEvent
                ? window.addEventListener(x.startEvent, function () {
                    j(!0)
                  })
                : document.addEventListener(x.startEvent, function () {
                    j(!0)
                  }),
              window.addEventListener(
                'resize',
                (0, f.default)(j, x.debounceDelay, !0)
              ),
              window.addEventListener(
                'orientationchange',
                (0, f.default)(j, x.debounceDelay, !0)
              ),
              window.addEventListener(
                'scroll',
                (0, u.default)(function () {
                  ;(0, b.default)(w, x.once)
                }, x.throttleDelay)
              ),
              x.disableMutationObserver || (0, d.default)('[data-aos]', O),
              w)
        }
      e.exports = { init: z, refresh: j, refreshHard: O }
    },
    function (e, t) {},
    ,
    ,
    ,
    ,
    function (e, t) {
      ;(function (t) {
        'use strict'
        function n (e, t, n) {
          function o (t) {
            var n = b,
              o = v
            return (b = v = void 0), (k = t), (g = e.apply(o, n))
          }
          function r (e) {
            return (k = e), (h = setTimeout(s, t)), _ ? o(e) : g
          }
          function a (e) {
            var n = e - w,
              o = e - k,
              i = t - n
            return S ? j(i, y - o) : i
          }
          function c (e) {
            var n = e - w,
              o = e - k
            return void 0 === w || n >= t || n < 0 || (S && o >= y)
          }
          function s () {
            var e = O()
            return c(e) ? d(e) : void (h = setTimeout(s, a(e)))
          }
          function d (e) {
            return (h = void 0), z && b ? o(e) : ((b = v = void 0), g)
          }
          function l () {
            void 0 !== h && clearTimeout(h), (k = 0), (b = w = v = h = void 0)
          }
          function p () {
            return void 0 === h ? g : d(O())
          }
          function m () {
            var e = O(),
              n = c(e)
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w)
              if (S) return (h = setTimeout(s, t)), o(w)
            }
            return void 0 === h && (h = setTimeout(s, t)), g
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            _ = !1,
            S = !1,
            z = !0
          if ('function' != typeof e) throw new TypeError(f)
          return (
            (t = u(t) || 0),
            i(n) &&
              ((_ = !!n.leading),
              (S = 'maxWait' in n),
              (y = S ? x(u(n.maxWait) || 0, t) : y),
              (z = 'trailing' in n ? !!n.trailing : z)),
            (m.cancel = l),
            (m.flush = p),
            m
          )
        }
        function o (e, t, o) {
          var r = !0,
            a = !0
          if ('function' != typeof e) throw new TypeError(f)
          return (
            i(o) &&
              ((r = 'leading' in o ? !!o.leading : r),
              (a = 'trailing' in o ? !!o.trailing : a)),
            n(e, t, { leading: r, maxWait: t, trailing: a })
          )
        }
        function i (e) {
          var t = 'undefined' == typeof e ? 'undefined' : c(e)
          return !!e && ('object' == t || 'function' == t)
        }
        function r (e) {
          return (
            !!e && 'object' == ('undefined' == typeof e ? 'undefined' : c(e))
          )
        }
        function a (e) {
          return (
            'symbol' == ('undefined' == typeof e ? 'undefined' : c(e)) ||
            (r(e) && k.call(e) == d)
          )
        }
        function u (e) {
          if ('number' == typeof e) return e
          if (a(e)) return s
          if (i(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e
            e = i(t) ? t + '' : t
          }
          if ('string' != typeof e) return 0 === e ? e : +e
          e = e.replace(l, '')
          var n = m.test(e)
          return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
        }
        var c =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                },
          f = 'Expected a function',
          s = NaN,
          d = '[object Symbol]',
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y =
            'object' == ('undefined' == typeof t ? 'undefined' : c(t)) &&
            t &&
            t.Object === Object &&
            t,
          g =
            'object' == ('undefined' == typeof self ? 'undefined' : c(self)) &&
            self &&
            self.Object === Object &&
            self,
          h = y || g || Function('return this')(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function () {
            return h.Date.now()
          }
        e.exports = o
      }.call(
        t,
        (function () {
          return this
        })()
      ))
    },
    function (e, t) {
      ;(function (t) {
        'use strict'
        function n (e, t, n) {
          function i (t) {
            var n = b,
              o = v
            return (b = v = void 0), (O = t), (g = e.apply(o, n))
          }
          function r (e) {
            return (O = e), (h = setTimeout(s, t)), _ ? i(e) : g
          }
          function u (e) {
            var n = e - w,
              o = e - O,
              i = t - n
            return S ? x(i, y - o) : i
          }
          function f (e) {
            var n = e - w,
              o = e - O
            return void 0 === w || n >= t || n < 0 || (S && o >= y)
          }
          function s () {
            var e = j()
            return f(e) ? d(e) : void (h = setTimeout(s, u(e)))
          }
          function d (e) {
            return (h = void 0), z && b ? i(e) : ((b = v = void 0), g)
          }
          function l () {
            void 0 !== h && clearTimeout(h), (O = 0), (b = w = v = h = void 0)
          }
          function p () {
            return void 0 === h ? g : d(j())
          }
          function m () {
            var e = j(),
              n = f(e)
            if (((b = arguments), (v = this), (w = e), n)) {
              if (void 0 === h) return r(w)
              if (S) return (h = setTimeout(s, t)), i(w)
            }
            return void 0 === h && (h = setTimeout(s, t)), g
          }
          var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            _ = !1,
            S = !1,
            z = !0
          if ('function' != typeof e) throw new TypeError(c)
          return (
            (t = a(t) || 0),
            o(n) &&
              ((_ = !!n.leading),
              (S = 'maxWait' in n),
              (y = S ? k(a(n.maxWait) || 0, t) : y),
              (z = 'trailing' in n ? !!n.trailing : z)),
            (m.cancel = l),
            (m.flush = p),
            m
          )
        }
        function o (e) {
          var t = 'undefined' == typeof e ? 'undefined' : u(e)
          return !!e && ('object' == t || 'function' == t)
        }
        function i (e) {
          return (
            !!e && 'object' == ('undefined' == typeof e ? 'undefined' : u(e))
          )
        }
        function r (e) {
          return (
            'symbol' == ('undefined' == typeof e ? 'undefined' : u(e)) ||
            (i(e) && w.call(e) == s)
          )
        }
        function a (e) {
          if ('number' == typeof e) return e
          if (r(e)) return f
          if (o(e)) {
            var t = 'function' == typeof e.valueOf ? e.valueOf() : e
            e = o(t) ? t + '' : t
          }
          if ('string' != typeof e) return 0 === e ? e : +e
          e = e.replace(d, '')
          var n = p.test(e)
          return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
        }
        var u =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e
                },
          c = 'Expected a function',
          f = NaN,
          s = '[object Symbol]',
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v =
            'object' == ('undefined' == typeof t ? 'undefined' : u(t)) &&
            t &&
            t.Object === Object &&
            t,
          y =
            'object' == ('undefined' == typeof self ? 'undefined' : u(self)) &&
            self &&
            self.Object === Object &&
            self,
          g = v || y || Function('return this')(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function () {
            return g.Date.now()
          }
        e.exports = n
      }.call(
        t,
        (function () {
          return this
        })()
      ))
    },
    function (e, t) {
      'use strict'
      function n (e, t) {
        var n = window.document,
          r =
            window.MutationObserver ||
            window.WebKitMutationObserver ||
            window.MozMutationObserver,
          a = new r(o)
        ;(i = t),
          a.observe(n.documentElement, {
            childList: !0,
            subtree: !0,
            removedNodes: !0
          })
      }
      function o (e) {
        e &&
          e.forEach(function (e) {
            var t = Array.prototype.slice.call(e.addedNodes),
              n = Array.prototype.slice.call(e.removedNodes),
              o = t.concat(n).filter(function (e) {
                return e.hasAttribute && e.hasAttribute('data-aos')
              }).length
            o && i()
          })
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = function () {}
      t.default = n
    },
    function (e, t) {
      'use strict'
      function n (e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function')
      }
      function o () {
        return navigator.userAgent || navigator.vendor || window.opera || ''
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = (function () {
          function e (e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n]
              ;(o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                'value' in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o)
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t
          }
        })(),
        r =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u =
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c =
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        f = (function () {
          function e () {
            n(this, e)
          }
          return (
            i(e, [
              {
                key: 'phone',
                value: function () {
                  var e = o()
                  return !(!r.test(e) && !a.test(e.substr(0, 4)))
                }
              },
              {
                key: 'mobile',
                value: function () {
                  var e = o()
                  return !(!u.test(e) && !c.test(e.substr(0, 4)))
                }
              },
              {
                key: 'tablet',
                value: function () {
                  return this.mobile() && !this.phone()
                }
              }
            ]),
            e
          )
        })()
      t.default = new f()
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = function (e, t, n) {
          var o = e.node.getAttribute('data-aos-once')
          t > e.position
            ? e.node.classList.add('aos-animate')
            : 'undefined' != typeof o &&
              ('false' === o || (!n && 'true' !== o)) &&
              e.node.classList.remove('aos-animate')
        },
        o = function (e, t) {
          var o = window.pageYOffset,
            i = window.innerHeight
          e.forEach(function (e, r) {
            n(e, i + o, t)
          })
        }
      t.default = o
    },
    function (e, t, n) {
      'use strict'
      function o (e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(12),
        r = o(i),
        a = function (e, t) {
          return (
            e.forEach(function (e, n) {
              e.node.classList.add('aos-init'),
                (e.position = (0, r.default)(e.node, t.offset))
            }),
            e
          )
        }
      t.default = a
    },
    function (e, t, n) {
      'use strict'
      function o (e) {
        return e && e.__esModule ? e : { default: e }
      }
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i = n(13),
        r = o(i),
        a = function (e, t) {
          var n = 0,
            o = 0,
            i = window.innerHeight,
            a = {
              offset: e.getAttribute('data-aos-offset'),
              anchor: e.getAttribute('data-aos-anchor'),
              anchorPlacement: e.getAttribute('data-aos-anchor-placement')
            }
          switch (
            (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)),
            a.anchor &&
              document.querySelectorAll(a.anchor) &&
              (e = document.querySelectorAll(a.anchor)[0]),
            (n = (0, r.default)(e).top),
            a.anchorPlacement)
          ) {
            case 'top-bottom':
              break
            case 'center-bottom':
              n += e.offsetHeight / 2
              break
            case 'bottom-bottom':
              n += e.offsetHeight
              break
            case 'top-center':
              n += i / 2
              break
            case 'bottom-center':
              n += i / 2 + e.offsetHeight
              break
            case 'center-center':
              n += i / 2 + e.offsetHeight / 2
              break
            case 'top-top':
              n += i
              break
            case 'bottom-top':
              n += e.offsetHeight + i
              break
            case 'center-top':
              n += e.offsetHeight / 2 + i
          }
          return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
        }
      t.default = a
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = function (e) {
        for (
          var t = 0, n = 0;
          e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);

        )
          (t += e.offsetLeft - ('BODY' != e.tagName ? e.scrollLeft : 0)),
            (n += e.offsetTop - ('BODY' != e.tagName ? e.scrollTop : 0)),
            (e = e.offsetParent)
        return { top: n, left: t }
      }
      t.default = n
    },
    function (e, t) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var n = function (e) {
        return (
          (e = e || document.querySelectorAll('[data-aos]')),
          Array.prototype.map.call(e, function (e) {
            return { node: e }
          })
        )
      }
      t.default = n
    }
  ])
})

/*------------ //////// ---------------*/

// SlimScroll JS
;(function (e) {
  e.fn.extend({
    slimScroll: function (f) {
      var a = e.extend(
        {
          width: 'auto',
          height: '250px',
          size: '7px',
          color: '#000',
          position: 'right',
          distance: '1px',
          start: 'top',
          opacity: 0.4,
          alwaysVisible: !1,
          disableFadeOut: !1,
          railVisible: !1,
          railColor: '#333',
          railOpacity: 0.2,
          railDraggable: !0,
          railClass: 'slimScrollRail',
          barClass: 'slimScrollBar',
          wrapperClass: 'slimScrollDiv',
          allowPageScroll: !1,
          wheelStep: 20,
          touchScrollStep: 200,
          borderRadius: '7px',
          railBorderRadius: '7px'
        },
        f
      )
      this.each(function () {
        function v (d) {
          if (r) {
            d = d || window.event
            var c = 0
            d.wheelDelta && (c = -d.wheelDelta / 120)
            d.detail && (c = d.detail / 3)
            e(d.target || d.srcTarget || d.srcElement)
              .closest('.' + a.wrapperClass)
              .is(b.parent()) && n(c, !0)
            d.preventDefault && !k && d.preventDefault()
            k || (d.returnValue = !1)
          }
        }
        function n (d, g, e) {
          k = !1
          var f = b.outerHeight() - c.outerHeight()
          g &&
            ((g =
              parseInt(c.css('top')) +
              ((d * parseInt(a.wheelStep)) / 100) * c.outerHeight()),
            (g = Math.min(Math.max(g, 0), f)),
            (g = 0 < d ? Math.ceil(g) : Math.floor(g)),
            c.css({ top: g + 'px' }))
          l = parseInt(c.css('top')) / (b.outerHeight() - c.outerHeight())
          g = l * (b[0].scrollHeight - b.outerHeight())
          e &&
            ((g = d),
            (d = (g / b[0].scrollHeight) * b.outerHeight()),
            (d = Math.min(Math.max(d, 0), f)),
            c.css({ top: d + 'px' }))
          b.scrollTop(g)
          b.trigger('slimscrolling', ~~g)
          w()
          p()
        }
        function x () {
          u = Math.max(
            (b.outerHeight() / b[0].scrollHeight) * b.outerHeight(),
            30
          )
          c.css({ height: u + 'px' })
          var a = u == b.outerHeight() ? 'none' : 'block'
          c.css({ display: a })
        }
        function w () {
          x()
          clearTimeout(B)
          l == ~~l
            ? ((k = a.allowPageScroll),
              C != l && b.trigger('slimscroll', 0 == ~~l ? 'top' : 'bottom'))
            : (k = !1)
          C = l
          u >= b.outerHeight()
            ? (k = !0)
            : (c.stop(!0, !0).fadeIn('fast'),
              a.railVisible && m.stop(!0, !0).fadeIn('fast'))
        }
        function p () {
          a.alwaysVisible ||
            (B = setTimeout(function () {
              ;(a.disableFadeOut && r) ||
                y ||
                z ||
                (c.fadeOut('slow'), m.fadeOut('slow'))
            }, 1e3))
        }
        var r,
          y,
          z,
          B,
          A,
          u,
          l,
          C,
          k = !1,
          b = e(this)
        if (b.parent().hasClass(a.wrapperClass)) {
          var q = b.scrollTop(),
            c = b.siblings('.' + a.barClass),
            m = b.siblings('.' + a.railClass)
          x()
          if (e.isPlainObject(f)) {
            if ('height' in f && 'auto' == f.height) {
              b.parent().css('height', 'auto')
              b.css('height', 'auto')
              var h = b.parent().parent().height()
              b.parent().css('height', h)
              b.css('height', h)
            } else
              'height' in f &&
                ((h = f.height),
                b.parent().css('height', h),
                b.css('height', h))
            if ('scrollTo' in f) q = parseInt(a.scrollTo)
            else if ('scrollBy' in f) q += parseInt(a.scrollBy)
            else if ('destroy' in f) {
              c.remove()
              m.remove()
              b.unwrap()
              return
            }
            n(q, !1, !0)
          }
        } else if (!(e.isPlainObject(f) && 'destroy' in f)) {
          a.height = 'auto' == a.height ? b.parent().height() : a.height
          q = e('<div></div>')
            .addClass(a.wrapperClass)
            .css({
              position: 'relative',
              overflow: 'hidden',
              width: a.width,
              height: a.height
            })
          b.css({ overflow: 'hidden', width: a.width, height: a.height })
          var m = e('<div></div>')
              .addClass(a.railClass)
              .css({
                width: a.size,
                height: '100%',
                position: 'absolute',
                top: 0,
                display: a.alwaysVisible && a.railVisible ? 'block' : 'none',
                'border-radius': a.railBorderRadius,
                background: a.railColor,
                opacity: a.railOpacity,
                zIndex: 90
              }),
            c = e('<div></div>')
              .addClass(a.barClass)
              .css({
                background: a.color,
                width: a.size,
                position: 'absolute',
                top: 0,
                opacity: a.opacity,
                display: a.alwaysVisible ? 'block' : 'none',
                'border-radius': a.borderRadius,
                BorderRadius: a.borderRadius,
                MozBorderRadius: a.borderRadius,
                WebkitBorderRadius: a.borderRadius,
                zIndex: 99
              }),
            h =
              'right' == a.position
                ? { right: a.distance }
                : { left: a.distance }
          m.css(h)
          c.css(h)
          b.wrap(q)
          b.parent().append(c)
          b.parent().append(m)
          a.railDraggable &&
            c
              .bind('mousedown', function (a) {
                var b = e(document)
                z = !0
                t = parseFloat(c.css('top'))
                pageY = a.pageY
                b.bind('mousemove.slimscroll', function (a) {
                  currTop = t + a.pageY - pageY
                  c.css('top', currTop)
                  n(0, c.position().top, !1)
                })
                b.bind('mouseup.slimscroll', function (a) {
                  z = !1
                  p()
                  b.unbind('.slimscroll')
                })
                return !1
              })
              .bind('selectstart.slimscroll', function (a) {
                a.stopPropagation()
                a.preventDefault()
                return !1
              })
          m.hover(
            function () {
              w()
            },
            function () {
              p()
            }
          )
          c.hover(
            function () {
              y = !0
            },
            function () {
              y = !1
            }
          )
          b.hover(
            function () {
              r = !0
              w()
              p()
            },
            function () {
              r = !1
              p()
            }
          )
          b.bind('touchstart', function (a, b) {
            a.originalEvent.touches.length &&
              (A = a.originalEvent.touches[0].pageY)
          })
          b.bind('touchmove', function (b) {
            k || b.originalEvent.preventDefault()
            b.originalEvent.touches.length &&
              (n(
                (A - b.originalEvent.touches[0].pageY) / a.touchScrollStep,
                !0
              ),
              (A = b.originalEvent.touches[0].pageY))
          })
          x()
          'bottom' === a.start
            ? (c.css({ top: b.outerHeight() - c.outerHeight() }), n(0, !0))
            : 'top' !== a.start &&
              (n(e(a.start).position().top, null, !0),
              a.alwaysVisible || c.hide())
          window.addEventListener
            ? (this.addEventListener('DOMMouseScroll', v, !1),
              this.addEventListener('mousewheel', v, !1))
            : document.attachEvent('onmousewheel', v)
        }
      })
      return this
    }
  })
  e.fn.extend({ slimscroll: e.fn.slimScroll })
})(jQuery)

/*------------ //////// ---------------*/

/*!
 * GSAP 3.4.0
 */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], e)
    : e(((t = t || self).window = t.window || {}))
})(this, function (e) {
  'use strict'
  function _inheritsLoose (t, e) {
    ;(t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e)
  }
  function _assertThisInitialized (t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      )
    return t
  }
  function n (t) {
    return 'string' == typeof t
  }
  function o (t) {
    return 'function' == typeof t
  }
  function p (t) {
    return 'number' == typeof t
  }
  function q (t) {
    return void 0 === t
  }
  function r (t) {
    return 'object' == typeof t
  }
  function s (t) {
    return !1 !== t
  }
  function t () {
    return 'undefined' != typeof window
  }
  function u (t) {
    return o(t) || n(t)
  }
  function K (t) {
    return (l = pt(t, at)) && ie
  }
  function L (t, e) {
    return console.warn(
      'Invalid property',
      t,
      'set to',
      e,
      'Missing plugin? gsap.registerPlugin()'
    )
  }
  function M (t, e) {
    return !e && console.warn(t)
  }
  function N (t, e) {
    return (t && (at[t] = e) && l && (l[t] = e)) || at
  }
  function O () {
    return 0
  }
  function Y (t) {
    var e,
      i,
      n = t[0]
    if ((r(n) || o(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
      for (i = dt.length; i-- && !dt[i].targetTest(n); );
      e = dt[i]
    }
    for (i = t.length; i--; )
      (t[i] && (t[i]._gsap || (t[i]._gsap = new Et(t[i], e)))) || t.splice(i, 1)
    return t
  }
  function Z (t) {
    return t._gsap || Y(yt(t))[0]._gsap
  }
  function $ (t, e) {
    var r = t[e]
    return o(r) ? t[e]() : (q(r) && t.getAttribute(e)) || r
  }
  function _ (t, e) {
    return (t = t.split(',')).forEach(e) || t
  }
  function aa (t) {
    return Math.round(1e5 * t) / 1e5 || 0
  }
  function ba (t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r
  }
  function ca (t, e, r) {
    var i,
      n = p(t[1]),
      a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[a]
    if ((n && (o.duration = t[1]), (o.parent = r), e)) {
      for (i = o; r && !('immediateRender' in i); )
        (i = r.vars.defaults || {}), (r = s(r.vars.inherit) && r.parent)
      ;(o.immediateRender = s(i.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1])
    }
    return o
  }
  function da () {
    var t,
      e,
      r = ot.length,
      i = ot.slice(0)
    for (ut = {}, t = ot.length = 0; t < r; t++)
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
  }
  function ea (t, e, r, i) {
    ot.length && da(), t.render(e, r, i), ot.length && da()
  }
  function fa (t) {
    var e = parseFloat(t)
    return (e || 0 === e) && (t + '').match(nt).length < 2 ? e : t
  }
  function ga (t) {
    return t
  }
  function ha (t, e) {
    for (var r in e) r in t || (t[r] = e[r])
    return t
  }
  function ia (t, e) {
    for (var r in e) r in t || 'duration' === r || 'ease' === r || (t[r] = e[r])
  }
  function ka (t, e) {
    for (var i in e) t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i]
    return t
  }
  function la (t, e) {
    var r,
      i = {}
    for (r in t) r in e || (i[r] = t[r])
    return i
  }
  function ma (t) {
    var e = t.parent || E,
      r = t.keyframes ? ia : ha
    if (s(t.inherit)) for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp)
    return t
  }
  function pa (t, e, r, i) {
    void 0 === r && (r = '_first'), void 0 === i && (i = '_last')
    var n = e._prev,
      a = e._next
    n ? (n._next = a) : t[r] === e && (t[r] = a),
      a ? (a._prev = n) : t[i] === e && (t[i] = n),
      (e._next = e._prev = e.parent = null)
  }
  function qa (t, e) {
    !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
      (t._act = 0)
  }
  function ra (t) {
    for (var e = t; e; ) (e._dirty = 1), (e = e.parent)
    return t
  }
  function ua (t) {
    return t._repeat ? _t(t._tTime, (t = t.duration() + t._rDelay)) * t : 0
  }
  function wa (t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    )
  }
  function xa (t) {
    return (t._end = aa(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || R) || 0)
    ))
  }
  function ya (t, e) {
    var r = t._dp
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = aa(
          t._dp._time -
            (0 < t._ts
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        xa(t),
        r._dirty || ra(r)),
      t
    )
  }
  function za (t, e) {
    var r
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((r = wa(t.rawTime(), e)),
        (!e._dur || gt(0, e.totalDuration(), r) - e._tTime > R) &&
          e.render(r, !0)),
      ra(t)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp; )
          0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp)
      t._zTime = -R
    }
  }
  function Aa (t, e, r, i) {
    return (
      e.parent && qa(e),
      (e._start = aa(r + e._delay)),
      (e._end = aa(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      (function _addLinkedListItem (t, e, r, i, n) {
        void 0 === r && (r = '_first'), void 0 === i && (i = '_last')
        var a,
          s = t[i]
        if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev
        s
          ? ((e._next = s._next), (s._next = e))
          : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[i] = e),
          (e._prev = s),
          (e.parent = e._dp = t)
      })(t, e, '_first', '_last', t._sort ? '_start' : 0),
      (t._recent = e),
      i || za(t, e),
      t
    )
  }
  function Ba (t, e) {
    return (
      (at.ScrollTrigger || L('scrollTrigger', e)) &&
      at.ScrollTrigger.create(e, t)
    )
  }
  function Ca (t, e, r, i) {
    return (
      qt(t, e),
      t._initted
        ? !r &&
          t._pt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          d !== Mt.frame
          ? (ot.push(t), (t._lazy = [e, i]), 1)
          : void 0
        : 1
    )
  }
  function Fa (t, e, r) {
    var i = t._repeat,
      n = aa(e) || 0
    return (
      (t._dur = n),
      (t._tDur = i ? (i < 0 ? 1e10 : aa(n * (i + 1) + t._rDelay * i)) : n),
      t._time > n && ((t._time = n), (t._tTime = Math.min(t._tTime, t._tDur))),
      r || ra(t.parent),
      t.parent && xa(t),
      t
    )
  }
  function Ga (t) {
    return t instanceof Rt ? ra(t) : Fa(t, t._dur)
  }
  function Ia (t, e) {
    var r,
      i,
      a = t.labels,
      s = t._recent || mt,
      o = t.duration() >= z ? s.endTime(!1) : t._dur
    return n(e) && (isNaN(e) || e in a)
      ? '<' === (r = e.charAt(0)) || '>' === r
        ? ('<' === r ? s._start : s.endTime(0 <= s._repeat)) +
          (parseFloat(e.substr(1)) || 0)
        : (r = e.indexOf('=')) < 0
        ? (e in a || (a[e] = o), a[e])
        : ((i = +(e.charAt(r - 1) + e.substr(r + 1))),
          1 < r ? Ia(t, e.substr(0, r - 1)) + i : o + i)
      : null == e
      ? o
      : +e
  }
  function Ja (t, e) {
    return t || 0 === t ? e(t) : e
  }
  function La (t) {
    return (t + '').substr((parseFloat(t) + '').length)
  }
  function Oa (t, e) {
    return (
      t &&
      r(t) &&
      'length' in t &&
      ((!e && !t.length) || (t.length - 1 in t && r(t[0]))) &&
      !t.nodeType &&
      t !== i
    )
  }
  function Ra (t) {
    return t.sort(function () {
      return 0.5 - Math.random()
    })
  }
  function Sa (t) {
    if (o(t)) return t
    var p = r(t) ? t : { each: t },
      _ = Ft(p.ease),
      m = p.from || 0,
      g = parseFloat(p.base) || 0,
      v = {},
      e = 0 < m && m < 1,
      y = isNaN(m) || e,
      T = p.axis,
      b = m,
      w = m
    return (
      n(m)
        ? (b = w = { center: 0.5, edges: 0.5, end: 1 }[m] || 0)
        : !e && y && ((b = m[0]), (w = m[1])),
      function (t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || p).length,
          c = v[d]
        if (!c) {
          if (!(f = 'auto' === p.grid ? 0 : (p.grid || [1, z])[1])) {
            for (
              h = -z;
              h < (h = r[f++].getBoundingClientRect().left) && f < d;

            );
            f--
          }
          for (
            c = v[d] = [],
              i = y ? Math.min(f, d) * b - 0.5 : m % f,
              n = y ? (d * w) / f - 0.5 : (m / f) | 0,
              l = z,
              u = h = 0;
            u < d;
            u++
          )
            (a = (u % f) - i),
              (s = n - ((u / f) | 0)),
              (c[u] = o = T ? Math.abs('y' === T ? s : a) : j(a * a + s * s)),
              h < o && (h = o),
              o < l && (l = o)
          'random' === m && Ra(c),
            (c.max = h - l),
            (c.min = l),
            (c.v = d =
              (parseFloat(p.amount) ||
                parseFloat(p.each) *
                  (d < f
                    ? d - 1
                    : T
                    ? 'y' === T
                      ? d / f
                      : f
                    : Math.max(f, d / f)) ||
                0) * ('edges' === m ? -1 : 1)),
            (c.b = d < 0 ? g - d : g),
            (c.u = La(p.amount || p.each) || 0),
            (_ = _ && d < 0 ? Dt(_) : _)
        }
        return (
          (d = (c[t] - c.min) / c.max || 0),
          aa(c.b + (_ ? _(d) : d) * c.v) + c.u
        )
      }
    )
  }
  function Ta (e) {
    var r = e < 1 ? Math.pow(10, (e + '').length - 2) : 1
    return function (t) {
      return (
        Math.floor(Math.round(parseFloat(t) / e) * e * r) / r +
        (p(t) ? 0 : La(t))
      )
    }
  }
  function Ua (u, t) {
    var h,
      l,
      e = J(u)
    return (
      !e &&
        r(u) &&
        ((h = e = u.radius || z),
        u.values
          ? ((u = yt(u.values)), (l = !p(u[0])) && (h *= h))
          : (u = Ta(u.increment))),
      Ja(
        t,
        e
          ? o(u)
            ? function (t) {
                return (l = u(t)), Math.abs(l - t) <= h ? l : t
              }
            : function (t) {
                for (
                  var e,
                    r,
                    i = parseFloat(l ? t.x : t),
                    n = parseFloat(l ? t.y : 0),
                    a = z,
                    s = 0,
                    o = u.length;
                  o--;

                )
                  (e = l
                    ? (e = u[o].x - i) * e + (r = u[o].y - n) * r
                    : Math.abs(u[o] - i)) < a && ((a = e), (s = o))
                return (
                  (s = !h || a <= h ? u[s] : t),
                  l || s === t || p(t) ? s : s + La(t)
                )
              }
          : Ta(u)
      )
    )
  }
  function Va (t, e, r, i) {
    return Ja(J(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return J(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + '').length - 2) : 1) &&
            Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) /
              i
    })
  }
  function Za (e, r, t) {
    return Ja(t, function (t) {
      return e[~~r(t)]
    })
  }
  function ab (t) {
    for (var e, r, i, n, a = 0, s = ''; ~(e = t.indexOf('random(', a)); )
      (i = t.indexOf(')', e)),
        (n = '[' === t.charAt(e + 7)),
        (r = t.substr(e + 7, i - e - 7).match(n ? nt : W)),
        (s += t.substr(a, e - a) + Va(n ? r : +r[0], +r[1], +r[2] || 1e-5)),
        (a = i + 1)
    return s + t.substr(a, t.length - a)
  }
  function db (t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = z
    for (i in s)
      (n = s[i] - e) < 0 == !!r &&
        n &&
        o > (n = Math.abs(n)) &&
        ((a = i), (o = n))
    return a
  }
  function fb (t) {
    return qa(t), t.progress() < 1 && bt(t, 'onInterrupt'), t
  }
  function kb (t, e, r) {
    return (
      ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        wt +
        0.5) |
      0
    )
  }
  function lb (t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      d,
      c = t ? (p(t) ? [t >> 16, (t >> 8) & wt, t & wt] : 0) : xt.black
    if (!c) {
      if ((',' === t.substr(-1) && (t = t.substr(0, t.length - 1)), xt[t]))
        c = xt[t]
      else if ('#' === t.charAt(0))
        4 === t.length &&
          (t =
            '#' +
            (i = t.charAt(1)) +
            i +
            (n = t.charAt(2)) +
            n +
            (a = t.charAt(3)) +
            a),
          (c = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & wt, t & wt])
      else if ('hsl' === t.substr(0, 3))
        if (((c = d = t.match(W)), e)) {
          if (~t.indexOf('='))
            return (c = t.match(H)), r && c.length < 4 && (c[3] = 1), c
        } else
          (s = (+c[0] % 360) / 360),
            (o = c[1] / 100),
            (i =
              2 * (u = c[2] / 100) -
              (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
            3 < c.length && (c[3] *= 1),
            (c[0] = kb(s + 1 / 3, i, n)),
            (c[1] = kb(s, i, n)),
            (c[2] = kb(s - 1 / 3, i, n))
      else c = t.match(W) || xt.transparent
      c = c.map(Number)
    }
    return (
      e &&
        !d &&
        ((i = c[0] / wt),
        (n = c[1] / wt),
        (a = c[2] / wt),
        (u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2),
        h === l
          ? (s = o = 0)
          : ((f = h - l),
            (o = 0.5 < u ? f / (2 - h - l) : f / (h + l)),
            (s =
              h === i
                ? (n - a) / f + (n < a ? 6 : 0)
                : h === n
                ? (a - i) / f + 2
                : (i - n) / f + 4),
            (s *= 60)),
        (c[0] = ~~(s + 0.5)),
        (c[1] = ~~(100 * o + 0.5)),
        (c[2] = ~~(100 * u + 0.5))),
      r && c.length < 4 && (c[3] = 1),
      c
    )
  }
  function mb (t) {
    var r = [],
      i = [],
      n = -1
    return (
      t.split(kt).forEach(function (t) {
        var e = t.match(tt) || []
        r.push.apply(r, e), i.push((n += e.length + 1))
      }),
      (r.c = i),
      r
    )
  }
  function nb (t, e, r) {
    var i,
      n,
      a,
      s,
      o = '',
      u = (t + o).match(kt),
      h = e ? 'hsla(' : 'rgba(',
      l = 0
    if (!u) return t
    if (
      ((u = u.map(function (t) {
        return (
          (t = lb(t, e, 1)) &&
          h +
            (e ? t[0] + ',' + t[1] + '%,' + t[2] + '%,' + t[3] : t.join(',')) +
            ')'
        )
      })),
      r && ((a = mb(t)), (i = r.c).join(o) !== a.c.join(o)))
    )
      for (s = (n = t.replace(kt, '1').split(tt)).length - 1; l < s; l++)
        o +=
          n[l] +
          (~i.indexOf(l)
            ? u.shift() || h + '0,0,0,0)'
            : (a.length ? a : u.length ? u : r).shift())
    if (!n) for (s = (n = t.split(kt)).length - 1; l < s; l++) o += n[l] + u[l]
    return o + n[s]
  }
  function qb (t) {
    var e,
      r = t.join(' ')
    if (((kt.lastIndex = 0), kt.test(r)))
      return (
        (e = Ot.test(r)),
        (t[1] = nb(t[1], e)),
        (t[0] = nb(t[0], e, mb(t[1]))),
        !0
      )
  }
  function yb (t) {
    var e = (t + '').split('('),
      r = At[e[0]]
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf('{')
            ? [
                (function _parseObjectInString (t) {
                  for (
                    var e,
                      r,
                      i,
                      n = {},
                      a = t.substr(1, t.length - 3).split(':'),
                      s = a[0],
                      o = 1,
                      u = a.length;
                    o < u;
                    o++
                  )
                    (r = a[o]),
                      (e = o !== u - 1 ? r.lastIndexOf(',') : r.length),
                      (i = r.substr(0, e)),
                      (n[s] = isNaN(i) ? i.replace(St, '').trim() : +i),
                      (s = r.substr(e + 1).trim())
                  return n
                })(e[1])
              ]
            : rt.exec(t)[1].split(',').map(fa)
        )
      : At._CE && Pt.test(t)
      ? At._CE('', t)
      : r
  }
  function Ab (t, e) {
    for (var r, i = t._first; i; )
      i instanceof Rt
        ? Ab(i, e)
        : !i.vars.yoyoEase ||
          (i._yoyo && i._repeat) ||
          i._yoyo === e ||
          (i.timeline
            ? Ab(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next)
  }
  function Cb (t, e, r, i) {
    void 0 === r &&
      (r = function easeOut (t) {
        return 1 - e(1 - t)
      }),
      void 0 === i &&
        (i = function easeInOut (t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        })
    var n,
      a = { easeIn: e, easeOut: r, easeInOut: i }
    return (
      _(t, function (t) {
        for (var e in ((At[t] = at[t] = a), (At[(n = t.toLowerCase())] = r), a))
          At[
            n + ('easeIn' === e ? '.in' : 'easeOut' === e ? '.out' : '.inOut')
          ] = At[t + '.' + e] = a[e]
      }),
      a
    )
  }
  function Db (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2
    }
  }
  function Eb (r, t, e) {
    function il (t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Q((t - a) * n) + 1
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / B) * (Math.asin(1 / i) || 0),
      s =
        'out' === r
          ? il
          : 'in' === r
          ? function (t) {
              return 1 - il(1 - t)
            }
          : Db(il)
    return (
      (n = B / n),
      (s.config = function (t, e) {
        return Eb(r, t, e)
      }),
      s
    )
  }
  function Fb (e, r) {
    function ql (t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0
    }
    void 0 === r && (r = 1.70158)
    var t =
      'out' === e
        ? ql
        : 'in' === e
        ? function (t) {
            return 1 - ql(1 - t)
          }
        : Db(ql)
    return (
      (t.config = function (t) {
        return Fb(e, t)
      }),
      t
    )
  }
  var E,
    i,
    a,
    h,
    l,
    f,
    d,
    c,
    m,
    g,
    v,
    y,
    T,
    b,
    w,
    x,
    k,
    C,
    A,
    P,
    S,
    D,
    F,
    U = {
      autoSleep: 120,
      force3D: 'auto',
      nullTargetWarn: 1,
      units: { lineHeight: '' }
    },
    I = { duration: 0.5, overwrite: !1, delay: 0 },
    z = 1e8,
    R = 1 / z,
    B = 2 * Math.PI,
    X = B / 4,
    V = 0,
    j = Math.sqrt,
    G = Math.cos,
    Q = Math.sin,
    J = Array.isArray,
    W = /(?:-?\.?\d|\.)+/gi,
    H = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
    tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    et = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
    rt = /\(([^()]+)\)/i,
    it = /[+-]=-?[\.\d]+/,
    nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    at = {},
    st = {},
    ot = [],
    ut = {},
    ht = {},
    lt = {},
    ft = 30,
    dt = [],
    ct = '',
    pt = function _merge (t, e) {
      for (var r in e) t[r] = e[r]
      return t
    },
    _t = function _animationCycle (t, e) {
      return (t /= e) && ~~t === t ? ~~t - 1 : ~~t
    },
    mt = { _start: 0, endTime: O },
    gt = function _clamp (t, e, r) {
      return r < t ? t : e < r ? e : r
    },
    vt = [].slice,
    yt = function toArray (t, e) {
      return !n(t) || e || (!a && Ct())
        ? J(t)
          ? (function _flatten (t, e, r) {
              return (
                void 0 === r && (r = []),
                t.forEach(function (t) {
                  return (n(t) && !e) || Oa(t, 1)
                    ? r.push.apply(r, yt(t))
                    : r.push(t)
                }) || r
              )
            })(t, e)
          : Oa(t)
          ? vt.call(t, 0)
          : t
          ? [t]
          : []
        : vt.call(h.querySelectorAll(t), 0)
    },
    Tt = function mapRange (e, t, r, i, n) {
      var a = t - e,
        s = i - r
      return Ja(n, function (t) {
        return r + (((t - e) / a) * s || 0)
      })
    },
    bt = function _callback (t, e, r) {
      var i,
        n,
        a = t.vars,
        s = a[e]
      if (s)
        return (
          (i = a[e + 'Params']),
          (n = a.callbackScope || t),
          r && ot.length && da(),
          i ? s.apply(n, i) : s.call(n)
        )
    },
    wt = 255,
    xt = {
      aqua: [0, wt, wt],
      lime: [0, wt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, wt],
      navy: [0, 0, 128],
      white: [wt, wt, wt],
      olive: [128, 128, 0],
      yellow: [wt, wt, 0],
      orange: [wt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [wt, 0, 0],
      pink: [wt, 192, 203],
      cyan: [0, wt, wt],
      transparent: [wt, wt, wt, 0]
    },
    kt = (function () {
      var t,
        e =
          '(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b'
      for (t in xt) e += '|' + t + '\\b'
      return new RegExp(e + ')', 'gi')
    })(),
    Ot = /hsl[a]?\(/,
    Mt =
      ((b = Date.now),
      (w = 500),
      (x = 33),
      (k = b()),
      (C = k),
      (P = A = 1 / 240),
      (T = {
        time: 0,
        frame: 0,
        tick: function tick () {
          kk(!0)
        },
        wake: function wake () {
          f &&
            (!a &&
              t() &&
              ((i = a = window),
              (h = i.document || {}),
              (at.gsap = ie),
              (i.gsapVersions || (i.gsapVersions = [])).push(ie.version),
              K(l || i.GreenSockGlobals || (!i.gsap && i) || {}),
              (y = i.requestAnimationFrame)),
            g && T.sleep(),
            (v =
              y ||
              function (t) {
                return setTimeout(t, (1e3 * (P - T.time) + 1) | 0)
              }),
            (m = 1),
            kk(2))
        },
        sleep: function sleep () {
          ;(y ? i.cancelAnimationFrame : clearTimeout)(g), (m = 0), (v = O)
        },
        lagSmoothing: function lagSmoothing (t, e) {
          ;(w = t || 1e8), (x = Math.min(e, w, 0))
        },
        fps: function fps (t) {
          ;(A = 1 / (t || 240)), (P = T.time + A)
        },
        add: function add (t) {
          S.indexOf(t) < 0 && S.push(t), Ct()
        },
        remove: function remove (t) {
          var e
          ~(e = S.indexOf(t)) && S.splice(e, 1)
        },
        _listeners: (S = [])
      })),
    Ct = function _wake () {
      return !m && Mt.wake()
    },
    At = {},
    Pt = /^[\d.\-M][\d.\-,\s]/,
    St = /["']/g,
    Dt = function _invertEase (e) {
      return function (t) {
        return 1 - e(1 - t)
      }
    },
    Ft = function _parseEase (t, e) {
      return (t && (o(t) ? t : At[t] || yb(t))) || e
    }
  function kk (e) {
    var t,
      r,
      i = b() - C,
      n = !0 === e
    w < i && (k += i - x),
      (C += i),
      (T.time = (C - k) / 1e3),
      (0 < (t = T.time - P) || n) &&
        (T.frame++, (P += t + (A <= t ? 0.004 : A - t)), (r = 1)),
      n || (g = v(kk)),
      r &&
        S.forEach(function (t) {
          return t(T.time, i, T.frame, e)
        })
  }
  function Hl (t) {
    return t < F
      ? D * t * t
      : t < 0.7272727272727273
      ? D * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? D * (t -= 2.25 / 2.75) * t + 0.9375
      : D * Math.pow(t - 2.625 / 2.75, 2) + 0.984375
  }
  _('Linear,Quad,Cubic,Quart,Quint,Strong', function (t, e) {
    var r = e < 5 ? e + 1 : e
    Cb(
      t + ',Power' + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r)
          }
        : function (t) {
            return t
          },
      function (t) {
        return 1 - Math.pow(1 - t, r)
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2
      }
    )
  }),
    (At.Linear.easeNone = At.none = At.Linear.easeIn),
    Cb('Elastic', Eb('in'), Eb('out'), Eb()),
    (D = 7.5625),
    (F = 1 / 2.75),
    Cb(
      'Bounce',
      function (t) {
        return 1 - Hl(1 - t)
      },
      Hl
    ),
    Cb('Expo', function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    Cb('Circ', function (t) {
      return -(j(1 - t * t) - 1)
    }),
    Cb('Sine', function (t) {
      return 1 === t ? 1 : 1 - G(t * X)
    }),
    Cb('Back', Fb('in'), Fb('out'), Fb()),
    (At.SteppedEase =
      At.steps =
      at.SteppedEase =
        {
          config: function config (t, e) {
            void 0 === t && (t = 1)
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0
            return function (t) {
              return (((i * gt(0, 0.99999999, t)) | 0) + n) * r
            }
          }
        }),
    (I.ease = At['quad.out']),
    _(
      'onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt',
      function (t) {
        return (ct += t + ',' + t + 'Params,')
      }
    )
  var zt,
    Et = function GSCache (t, e) {
      ;(this.id = V++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : $),
        (this.set = e ? e.getSetter : Gt)
    },
    It =
      (((zt = Animation.prototype).delay = function delay (t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay
      }),
      (zt.duration = function duration (t) {
        return arguments.length
          ? this.totalDuration(
              0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur
      }),
      (zt.totalDuration = function totalDuration (t) {
        if (!arguments.length) return this._tDur
        this._dirty = 0
        var e = this._time / this._dur || 0
        return (
          Fa(
            this,
            this._repeat < 0
              ? t
              : (t - this._repeat * this._rDelay) / (this._repeat + 1)
          ),
          this._tTime ? ya(this, e * t + ua(this)) : this
        )
      }),
      (zt.totalTime = function totalTime (t, e) {
        if ((Ct(), !arguments.length)) return this._tTime
        var r = this._dp
        if (r && r.smoothChildTiming && this._ts) {
          for (ya(this, t); r.parent; )
            r.parent._time !==
              r._start +
                (0 <= r._ts
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent)
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) ||
              (this._ts < 0 && 0 < t) ||
              (!this._tDur && !t)) &&
            Aa(this._dp, this, this._start - this._delay)
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === R) ||
            (!t && !this._initted)) &&
            (this._ts || (this._pTime = t), ea(this, t, e)),
          this
        )
      }),
      (zt.time = function time (t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + ua(this)) % this._dur ||
                (t ? this._dur : 0),
              e
            )
          : this._time
      }),
      (zt.totalProgress = function totalProgress (t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio
      }),
      (zt.progress = function progress (t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                ua(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio
      }),
      (zt.iteration = function iteration (t, e) {
        var r = this.duration() + this._rDelay
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? _t(this._tTime, r) + 1
          : 1
      }),
      (zt.timeScale = function timeScale (t) {
        if (!arguments.length) return this._rts === -R ? 0 : this._rts
        if (this._rts === t) return this
        var e =
          this.parent && this._ts ? wa(this.parent._time, this) : this._tTime
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -R ? 0 : this._rts),
          (function _recacheAncestors (t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent)
            return t
          })(this.totalTime(gt(-this._delay, this._tDur, e), !0))
        )
      }),
      (zt.paused = function paused (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Ct(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      (this._tTime -= R) &&
                      Math.abs(this._zTime) !== R
                  ))),
            this)
          : this._ps
      }),
      (zt.startTime = function startTime (t) {
        if (arguments.length) {
          this._start = t
          var e = this.parent || this._dp
          return (
            !e || (!e._sort && this.parent) || Aa(e, this, t - this._delay),
            this
          )
        }
        return this._start
      }),
      (zt.endTime = function endTime (t) {
        return (
          this._start +
          (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        )
      }),
      (zt.rawTime = function rawTime (t) {
        var e = this.parent || this._dp
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? wa(e.rawTime(t), this)
            : this._tTime
          : this._tTime
      }),
      (zt.globalTime = function globalTime (t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
          (r = e._start + r / (e._ts || 1)), (e = e._dp)
        return r
      }),
      (zt.repeat = function repeat (t) {
        return arguments.length ? ((this._repeat = t), Ga(this)) : this._repeat
      }),
      (zt.repeatDelay = function repeatDelay (t) {
        return arguments.length ? ((this._rDelay = t), Ga(this)) : this._rDelay
      }),
      (zt.yoyo = function yoyo (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo
      }),
      (zt.seek = function seek (t, e) {
        return this.totalTime(Ia(this, t), s(e))
      }),
      (zt.restart = function restart (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, s(e))
      }),
      (zt.play = function play (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
      }),
      (zt.reverse = function reverse (t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        )
      }),
      (zt.pause = function pause (t, e) {
        return null != t && this.seek(t, e), this.paused(!0)
      }),
      (zt.resume = function resume () {
        return this.paused(!1)
      }),
      (zt.reversed = function reversed (t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -R : 0)),
            this)
          : this._rts < 0
      }),
      (zt.invalidate = function invalidate () {
        return (this._initted = 0), (this._zTime = -R), this
      }),
      (zt.isActive = function isActive () {
        var t,
          e = this.parent || this._dp,
          r = this._start
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= r &&
            t < this.endTime(!0) - R
          )
        )
      }),
      (zt.eventCallback = function eventCallback (t, e, r) {
        var i = this.vars
        return 1 < arguments.length
          ? (e
              ? ((i[t] = e),
                r && (i[t + 'Params'] = r),
                'onUpdate' === t && (this._onUpdate = e))
              : delete i[t],
            this)
          : i[t]
      }),
      (zt.then = function then (t) {
        var i = this
        return new Promise(function (e) {
          function Zm () {
            var t = i.then
            ;(i.then = null),
              o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
              e(r),
              (i.then = t)
          }
          var r = o(t) ? t : ga
          ;(i._initted && 1 === i.totalProgress() && 0 <= i._ts) ||
          (!i._tTime && i._ts < 0)
            ? Zm()
            : (i._prom = Zm)
        })
      }),
      (zt.kill = function kill () {
        fb(this)
      }),
      Animation)
  function Animation (t, e) {
    var r = t.parent || E
    ;(this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      Fa(this, +t.duration, 1),
      (this.data = t.data),
      m || Mt.wake(),
      r && Aa(r, this, e || 0 === e ? e : r._time, 1),
      t.reversed && this.reverse(),
      t.paused && this.paused(!0)
  }
  ha(It.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -R,
    _prom: 0,
    _ps: !1,
    _rts: 1
  })
  var Rt = (function (i) {
    function Timeline (t, e) {
      var r
      return (
        void 0 === t && (t = {}),
        ((r = i.call(this, t, e) || this).labels = {}),
        (r.smoothChildTiming = !!t.smoothChildTiming),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = s(t.sortChildren)),
        r.parent && za(r.parent, _assertThisInitialized(r)),
        t.scrollTrigger && Ba(_assertThisInitialized(r), t.scrollTrigger),
        r
      )
    }
    _inheritsLoose(Timeline, i)
    var t = Timeline.prototype
    return (
      (t.to = function to (t, e, r, i) {
        return new Xt(t, ca(arguments, 0, this), Ia(this, p(e) ? i : r)), this
      }),
      (t.from = function from (t, e, r, i) {
        return new Xt(t, ca(arguments, 1, this), Ia(this, p(e) ? i : r)), this
      }),
      (t.fromTo = function fromTo (t, e, r, i, n) {
        return new Xt(t, ca(arguments, 2, this), Ia(this, p(e) ? n : i)), this
      }),
      (t.set = function set (t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          ma(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Xt(t, e, Ia(this, r), 1),
          this
        )
      }),
      (t.call = function call (t, e, r) {
        return Aa(this, Xt.delayedCall(0, t, e), Ia(this, r))
      }),
      (t.staggerTo = function staggerTo (t, e, r, i, n, a, s) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = a),
          (r.onCompleteParams = s),
          (r.parent = this),
          new Xt(t, r, Ia(this, n)),
          this
        )
      }),
      (t.staggerFrom = function staggerFrom (t, e, r, i, n, a, o) {
        return (
          (r.runBackwards = 1),
          (ma(r).immediateRender = s(r.immediateRender)),
          this.staggerTo(t, e, r, i, n, a, o)
        )
      }),
      (t.staggerFromTo = function staggerFromTo (t, e, r, i, n, a, o, u) {
        return (
          (i.startAt = r),
          (ma(i).immediateRender = s(i.immediateRender)),
          this.staggerTo(t, e, i, n, a, o, u)
        )
      }),
      (t.render = function render (t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = this !== E && m - R < t && 0 <= t ? m : t < R ? 0 : t,
          y = this._zTime < 0 != t < 0 && (this._initted || !g)
        if (v !== this._tTime || r || y) {
          if (
            (_ !== this._time &&
              g &&
              ((v += this._time - _), (t += this._time - _)),
            (i = v),
            (f = this._start),
            (u = !(l = this._ts)),
            y && (g || (_ = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat &&
              ((c = this._yoyo),
              (o = g + this._rDelay),
              (g < (i = aa(v % o)) || m === v) && (i = g),
              (s = ~~(v / o)) && s === v / o && ((i = g), s--),
              (d = _t(this._tTime, o)),
              !_ && this._tTime && d !== s && (d = s),
              c && 1 & s && ((i = g - i), (p = 1)),
              s !== d && !this._lock))
          ) {
            var T = c && 1 & d,
              b = T === (c && 1 & s)
            if (
              (s < d && (T = !T),
              (_ = T ? 0 : g),
              (this._lock = 1),
              (this.render(_ || (p ? 0 : aa(s * o)), e, !g)._lock = 0),
              !e && this.parent && bt(this, 'onRepeat'),
              this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1),
              _ !== this._time || u != !this._ts)
            )
              return this
            if (
              (b &&
                ((this._lock = 2),
                (_ = T ? g + 1e-4 : -1e-4),
                this.render(_, !0),
                this.vars.repeatRefresh && !p && this.invalidate()),
              (this._lock = 0),
              !this._ts && !u)
            )
              return this
            Ab(this, p)
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween (t, e, r) {
                var i
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if (!i._dur && 'isPause' === i.data && i._start > e)
                      return i
                    i = i._next
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if (!i._dur && 'isPause' === i.data && i._start < e)
                      return i
                    i = i._prev
                  }
              })(this, aa(_), aa(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t)),
            _ || !i || e || bt(this, 'onStart'),
            _ <= i && 0 <= t)
          )
            for (n = this._first; n; ) {
              if (
                ((a = n._next), (n._act || i >= n._start) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r)
                if (
                  (n.render(
                    0 < n._ts
                      ? (i - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (i - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  ;(h = 0), a && (v += this._zTime = -R)
                  break
                }
              }
              n = a
            }
          else {
            n = this._last
            for (var w = t < 0 ? t : i; n; ) {
              if (
                ((a = n._prev), (n._act || w <= n._end) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r)
                if (
                  (n.render(
                    0 < n._ts
                      ? (w - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (w - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  ;(h = 0), a && (v += this._zTime = w ? -R : R)
                  break
                }
              }
              n = a
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(_ <= i ? 0 : -R)._zTime = _ <= i ? 1 : -1),
            this._ts)
          )
            return (this._start = f), xa(this), this.render(t, e, r)
          this._onUpdate && !e && bt(this, 'onUpdate', !0),
            ((v === m && m >= this.totalDuration()) || (!v && _)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && g) ||
                  !((v === m && 0 < this._ts) || (!v && this._ts < 0)) ||
                  qa(this, 1),
                e ||
                  (t < 0 && !_) ||
                  (!v && !_) ||
                  (bt(this, v === m ? 'onComplete' : 'onReverseComplete', !0),
                  !this._prom ||
                    (v < m && 0 < this.timeScale()) ||
                    this._prom())))
        }
        return this
      }),
      (t.add = function add (t, e) {
        var r = this
        if ((p(e) || (e = Ia(this, e)), !(t instanceof It))) {
          if (J(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e)
              }),
              ra(this)
            )
          if (n(t)) return this.addLabel(t, e)
          if (!o(t)) return this
          t = Xt.delayedCall(0, t)
        }
        return this !== t ? Aa(this, t, e) : this
      }),
      (t.getChildren = function getChildren (t, e, r, i) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -z)
        for (var n = [], a = this._first; a; )
          a._start >= i &&
            (a instanceof Xt
              ? e && n.push(a)
              : (r && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, r)))),
            (a = a._next)
        return n
      }),
      (t.getById = function getById (t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r]
      }),
      (t.remove = function remove (t) {
        return n(t)
          ? this.removeLabel(t)
          : o(t)
          ? this.killTweensOf(t)
          : (pa(this, t),
            t === this._recent && (this._recent = this._last),
            ra(this))
      }),
      (t.totalTime = function totalTime (t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = aa(
                Mt.time -
                  (0 < this._ts
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            i.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime
      }),
      (t.addLabel = function addLabel (t, e) {
        return (this.labels[t] = Ia(this, e)), this
      }),
      (t.removeLabel = function removeLabel (t) {
        return delete this.labels[t], this
      }),
      (t.addPause = function addPause (t, e, r) {
        var i = Xt.delayedCall(0, e || O, r)
        return (
          (i.data = 'isPause'), (this._hasPause = 1), Aa(this, i, Ia(this, t))
        )
      }),
      (t.removePause = function removePause (t) {
        var e = this._first
        for (t = Ia(this, t); e; )
          e._start === t && 'isPause' === e.data && qa(e), (e = e._next)
      }),
      (t.killTweensOf = function killTweensOf (t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; )
          Lt !== i[n] && i[n].kill(t, e)
        return this
      }),
      (t.getTweensOf = function getTweensOf (t, e) {
        for (var r, i = [], n = yt(t), a = this._first, s = p(e); a; )
          a instanceof Xt
            ? ba(a._targets, n) &&
              (s
                ? (!Lt || (a._initted && a._ts)) &&
                  a.globalTime(0) <= e &&
                  a.globalTime(a.totalDuration()) > e
                : !e || a.isActive()) &&
              i.push(a)
            : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r),
            (a = a._next)
        return i
      }),
      (t.tweenTo = function tweenTo (t, e) {
        e = e || {}
        var r = this,
          i = Ia(r, t),
          n = e.startAt,
          a = e.onStart,
          s = e.onStartParams,
          o = Xt.to(
            r,
            ha(e, {
              ease: 'none',
              lazy: !1,
              time: i,
              duration:
                e.duration ||
                Math.abs(
                  (i - (n && 'time' in n ? n.time : r._time)) / r.timeScale()
                ) ||
                R,
              onStart: function onStart () {
                r.pause()
                var t = e.duration || Math.abs((i - r._time) / r.timeScale())
                o._dur !== t && Fa(o, t).render(o._time, !0, !0),
                  a && a.apply(o, s || [])
              }
            })
          )
        return o
      }),
      (t.tweenFromTo = function tweenFromTo (t, e, r) {
        return this.tweenTo(e, ha({ startAt: { time: Ia(this, t) } }, r))
      }),
      (t.recent = function recent () {
        return this._recent
      }),
      (t.nextLabel = function nextLabel (t) {
        return void 0 === t && (t = this._time), db(this, Ia(this, t))
      }),
      (t.previousLabel = function previousLabel (t) {
        return void 0 === t && (t = this._time), db(this, Ia(this, t), 1)
      }),
      (t.currentLabel = function currentLabel (t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + R)
      }),
      (t.shiftChildren = function shiftChildren (t, e, r) {
        void 0 === r && (r = 0)
        for (var i, n = this._first, a = this.labels; n; )
          n._start >= r && (n._start += t), (n = n._next)
        if (e) for (i in a) a[i] >= r && (a[i] += t)
        return ra(this)
      }),
      (t.invalidate = function invalidate () {
        var t = this._first
        for (this._lock = 0; t; ) t.invalidate(), (t = t._next)
        return i.prototype.invalidate.call(this)
      }),
      (t.clear = function clear (t) {
        void 0 === t && (t = !0)
        for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e)
        return (
          (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          ra(this)
        )
      }),
      (t.totalDuration = function totalDuration (t) {
        var e,
          r,
          i,
          n,
          a = 0,
          s = this,
          o = s._last,
          u = z
        if (arguments.length)
          return s.timeScale(
            (s._repeat < 0 ? s.duration() : s.totalDuration()) /
              (s.reversed() ? -t : t)
          )
        if (s._dirty) {
          for (n = s.parent; o; )
            (e = o._prev),
              o._dirty && o.totalDuration(),
              u < (i = o._start) && s._sort && o._ts && !s._lock
                ? ((s._lock = 1), (Aa(s, o, i - o._delay, 1)._lock = 0))
                : (u = i),
              i < 0 &&
                o._ts &&
                ((a -= i),
                ((!n && !s._dp) || (n && n.smoothChildTiming)) &&
                  ((s._start += i / s._ts), (s._time -= i), (s._tTime -= i)),
                s.shiftChildren(-i, !1, -Infinity),
                (u = 0)),
              a < (r = xa(o)) && o._ts && (a = r),
              (o = e)
          Fa(s, s === E && s._time > a ? s._time : a, 1), (s._dirty = 0)
        }
        return s._tDur
      }),
      (Timeline.updateRoot = function updateRoot (t) {
        if ((E._ts && (ea(E, wa(t, E)), (d = Mt.frame)), Mt.frame >= ft)) {
          ft += U.autoSleep || 120
          var e = E._first
          if ((!e || !e._ts) && U.autoSleep && Mt._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next
            e || Mt.sleep()
          }
        }
      }),
      Timeline
    )
  })(It)
  ha(Rt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 })
  function Mb (t, e, i, a, s, u) {
    var h, l, f, d
    if (
      ht[t] &&
      !1 !==
        (h = new ht[t]()).init(
          s,
          h.rawVars
            ? e[t]
            : (function _processVars (t, e, i, a, s) {
                if (
                  (o(t) && (t = Yt(t, s, e, i, a)),
                  !r(t) || (t.style && t.nodeType) || J(t))
                )
                  return n(t) ? Yt(t, s, e, i, a) : t
                var u,
                  h = {}
                for (u in t) h[u] = Yt(t[u], s, e, i, a)
                return h
              })(e[t], a, s, u, i),
          i,
          a,
          u
        ) &&
      ((i._pt = l = new ee(i._pt, s, t, 0, 1, h.render, h, 0, h.priority)),
      i !== c)
    )
      for (f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--; )
        f[h._props[d]] = l
    return h
  }
  var Lt,
    Bt = function _addPropTween (t, e, r, i, a, s, u, h, l) {
      o(i) && (i = i(a || 0, t, s))
      var f,
        d = t[e],
        c =
          'get' !== r
            ? r
            : o(d)
            ? l
              ? t[
                  e.indexOf('set') || !o(t['get' + e.substr(3)])
                    ? e
                    : 'get' + e.substr(3)
                ](l)
              : t[e]()
            : d,
        p = o(d) ? (l ? jt : Vt) : Zt
      if (
        (n(i) &&
          (~i.indexOf('random(') && (i = ab(i)),
          '=' === i.charAt(1) &&
            (i =
              parseFloat(c) +
              parseFloat(i.substr(2)) * ('-' === i.charAt(0) ? -1 : 1) +
              (La(c) || 0))),
        c !== i)
      )
        return isNaN(c * i)
          ? (d || e in t || L(e, i),
            function _addComplexStringPropTween (t, e, r, i, n, a, s) {
              var o,
                u,
                h,
                l,
                f,
                d,
                c,
                p,
                _ = new ee(this._pt, t, e, 0, 1, Wt, null, n),
                m = 0,
                g = 0
              for (
                _.b = r,
                  _.e = i,
                  r += '',
                  (c = ~(i += '').indexOf('random(')) && (i = ab(i)),
                  a && (a((p = [r, i]), t, e), (r = p[0]), (i = p[1])),
                  u = r.match(et) || [];
                (o = et.exec(i));

              )
                (l = o[0]),
                  (f = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : 'rgba(' === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((d = parseFloat(u[g - 1]) || 0),
                    (_._pt = {
                      _next: _._pt,
                      p: f || 1 === g ? f : ',',
                      s: d,
                      c:
                        '=' === l.charAt(1)
                          ? parseFloat(l.substr(2)) *
                            ('-' === l.charAt(0) ? -1 : 1)
                          : parseFloat(l) - d,
                      m: h && h < 4 ? Math.round : 0
                    }),
                    (m = et.lastIndex))
              return (
                (_.c = m < i.length ? i.substring(m, i.length) : ''),
                (_.fp = s),
                (it.test(i) || c) && (_.e = 0),
                (this._pt = _)
              )
            }.call(this, t, e, c, i, p, h || U.stringFilter, l))
          : ((f = new ee(
              this._pt,
              t,
              e,
              +c || 0,
              i - (c || 0),
              'boolean' == typeof d ? Jt : Qt,
              0,
              p
            )),
            l && (f.fp = l),
            u && f.modifier(u, this, t),
            (this._pt = f))
    },
    qt = function _initTween (t, e) {
      var r,
        i,
        n,
        a,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _ = t.vars,
        m = _.ease,
        g = _.startAt,
        v = _.immediateRender,
        y = _.lazy,
        T = _.onUpdate,
        b = _.onUpdateParams,
        w = _.callbackScope,
        x = _.runBackwards,
        k = _.yoyoEase,
        O = _.keyframes,
        M = _.autoRevert,
        C = t._dur,
        A = t._startAt,
        P = t._targets,
        S = t.parent,
        D = S && 'nested' === S.data ? S.parent._targets : P,
        F = 'auto' === t._overwrite,
        z = t.timeline
      if (
        (!z || (O && m) || (m = 'none'),
        (t._ease = Ft(m, I.ease)),
        (t._yEase = k ? Dt(Ft(!0 === k ? m : k, I.ease)) : 0),
        k &&
          t._yoyo &&
          !t._repeat &&
          ((k = t._yEase), (t._yEase = t._ease), (t._ease = k)),
        !z)
      ) {
        if (
          ((p = (l = P[0] ? Z(P[0]).harness : 0) && _[l.prop]),
          (r = la(_, st)),
          A && A.render(-1, !0).kill(),
          g)
        ) {
          if (
            (qa(
              (t._startAt = Xt.set(
                P,
                ha(
                  {
                    data: 'isStart',
                    overwrite: !1,
                    parent: S,
                    immediateRender: !0,
                    lazy: s(y),
                    startAt: null,
                    delay: 0,
                    onUpdate: T,
                    onUpdateParams: b,
                    callbackScope: w,
                    stagger: 0
                  },
                  g
                )
              ))
            ),
            v)
          )
            if (0 < e) M || (t._startAt = 0)
            else if (C && !(e < 0 && A)) return void (t._zTime = e)
        } else if (x && C)
          if (A) M || (t._startAt = 0)
          else if (
            (e && (v = !1),
            (n = ha(
              {
                overwrite: !1,
                data: 'isFromStart',
                lazy: v && s(y),
                immediateRender: v,
                stagger: 0,
                parent: S
              },
              r
            )),
            p && (n[l.prop] = p),
            qa((t._startAt = Xt.set(P, n))),
            v)
          ) {
            if (!e) return
          } else _initTween(t._startAt, R)
        for (
          t._pt = 0, y = (C && s(y)) || (y && !C), i = 0;
          i < P.length;
          i++
        ) {
          if (
            ((h = (o = P[i])._gsap || Y(P)[i]._gsap),
            (t._ptLookup[i] = d = {}),
            ut[h.id] && da(),
            (c = D === P ? i : D.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, p || r, t, c, D) &&
              ((t._pt = a =
                new ee(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                d[t] = a
              }),
              f.priority && (u = 1)),
            !l || p)
          )
            for (n in r)
              ht[n] && (f = Mb(n, r, t, c, o, D))
                ? f.priority && (u = 1)
                : (d[n] = a =
                    Bt.call(t, o, n, 'get', r[n], c, D, 0, _.stringFilter))
          t._op && t._op[i] && t.kill(o, t._op[i]),
            F &&
              t._pt &&
              ((Lt = t), E.killTweensOf(o, d, t.globalTime(0)), (Lt = 0)),
            t._pt && y && (ut[h.id] = 1)
        }
        u && te(t), t._onInit && t._onInit(t)
      }
      ;(t._from = !z && !!_.runBackwards),
        (t._onUpdate = T),
        (t._initted = !!t.parent)
    },
    Yt = function _parseFuncOrString (t, e, r, i, a) {
      return o(t)
        ? t.call(e, r, i, a)
        : n(t) && ~t.indexOf('random(')
        ? ab(t)
        : t
    },
    Nt = ct + 'repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase',
    Ut = (Nt + ',id,stagger,delay,duration,paused,scrollTrigger').split(','),
    Xt = (function (D) {
      function Tween (t, e, i, n) {
        var a
        'number' == typeof e && ((i.duration = e), (e = i), (i = null))
        var o,
          h,
          l,
          f,
          d,
          c,
          _,
          m,
          g = (a = D.call(this, n ? e : ma(e), i) || this).vars,
          v = g.duration,
          y = g.delay,
          T = g.immediateRender,
          b = g.stagger,
          w = g.overwrite,
          x = g.keyframes,
          k = g.defaults,
          C = g.scrollTrigger,
          A = g.yoyoEase,
          P = a.parent,
          S = (J(t) ? p(t[0]) : 'length' in e) ? [t] : yt(t)
        if (
          ((a._targets = S.length
            ? Y(S)
            : M(
                'GSAP target ' + t + ' not found. https://greensock.com',
                !U.nullTargetWarn
              ) || []),
          (a._ptLookup = []),
          (a._overwrite = w),
          x || b || u(v) || u(y))
        ) {
          if (
            ((e = a.vars),
            (o = a.timeline =
              new Rt({ data: 'nested', defaults: k || {} })).kill(),
            (o.parent = _assertThisInitialized(a)),
            x)
          )
            ha(o.vars.defaults, { ease: 'none' }),
              x.forEach(function (t) {
                return o.to(S, t, '>')
              })
          else {
            if (((f = S.length), (_ = b ? Sa(b) : O), r(b)))
              for (d in b) ~Nt.indexOf(d) && ((m = m || {})[d] = b[d])
            for (h = 0; h < f; h++) {
              for (d in ((l = {}), e)) Ut.indexOf(d) < 0 && (l[d] = e[d])
              ;(l.stagger = 0),
                A && (l.yoyoEase = A),
                m && pt(l, m),
                (c = S[h]),
                (l.duration = +Yt(v, _assertThisInitialized(a), h, c, S)),
                (l.delay =
                  (+Yt(y, _assertThisInitialized(a), h, c, S) || 0) - a._delay),
                !b &&
                  1 === f &&
                  l.delay &&
                  ((a._delay = y = l.delay), (a._start += y), (l.delay = 0)),
                o.to(c, l, _(h, c, S))
            }
            o.duration() ? (v = y = 0) : (a.timeline = 0)
          }
          v || a.duration((v = o.duration()))
        } else a.timeline = 0
        return (
          !0 === w &&
            ((Lt = _assertThisInitialized(a)), E.killTweensOf(S), (Lt = 0)),
          P && za(P, _assertThisInitialized(a)),
          (T ||
            (!v &&
              !x &&
              a._start === aa(P._time) &&
              s(T) &&
              (function _hasNoPausedAncestors (t) {
                return !t || (t._ts && _hasNoPausedAncestors(t.parent))
              })(_assertThisInitialized(a)) &&
              'nested' !== P.data)) &&
            ((a._tTime = -R), a.render(Math.max(0, -y))),
          C && Ba(_assertThisInitialized(a), C),
          a
        )
      }
      _inheritsLoose(Tween, D)
      var t = Tween.prototype
      return (
        (t.render = function render (t, e, r) {
          var i,
            n,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            d = this._time,
            c = this._tDur,
            p = this._dur,
            _ = c - R < t && 0 <= t ? c : t < R ? 0 : t
          if (p) {
            if (
              _ !== this._tTime ||
              !t ||
              r ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((i = _), (l = this.timeline), this._repeat)) {
                if (
                  ((s = p + this._rDelay),
                  (p < (i = aa(_ % s)) || c === _) && (i = p),
                  (a = ~~(_ / s)) && a === _ / s && ((i = p), a--),
                  (u = this._yoyo && 1 & a) && ((f = this._yEase), (i = p - i)),
                  (o = _t(this._tTime, s)),
                  i === d && !r && this._initted)
                )
                  return this
                a !== o &&
                  (l && this._yEase && Ab(l, u),
                  !this.vars.repeatRefresh ||
                    u ||
                    this._lock ||
                    ((this._lock = r = 1),
                    (this.render(aa(s * a), !0).invalidate()._lock = 0)))
              }
              if (!this._initted) {
                if (Ca(this, t < 0 ? t : i, r, e))
                  return (this._tTime = 0), this
                if (p !== this._dur) return this.render(t, e, r)
              }
              for (
                this._tTime = _,
                  this._time = i,
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  this.ratio = h = (f || this._ease)(i / p),
                  this._from && (this.ratio = h = 1 - h),
                  !i || d || e || bt(this, 'onStart'),
                  n = this._pt;
                n;

              )
                n.r(h, n.d), (n = n._next)
              ;(l && l.render(t < 0 ? t : !i && u ? -R : l._dur * h, e, r)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                  bt(this, 'onUpdate')),
                this._repeat &&
                  a !== o &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  bt(this, 'onRepeat'),
                (_ !== this._tDur && _) ||
                  this._tTime !== _ ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, !0),
                  (!t && p) ||
                    !(
                      (_ === this._tDur && 0 < this._ts) ||
                      (!_ && this._ts < 0)
                    ) ||
                    qa(this, 1),
                  e ||
                    (t < 0 && !d) ||
                    (!_ && !d) ||
                    (bt(this, _ === c ? 'onComplete' : 'onReverseComplete', !0),
                    !this._prom ||
                      (_ < c && 0 < this.timeScale()) ||
                      this._prom()))
            }
          } else
            !(function _renderZeroDurationTween (t, e, r, i) {
              var n,
                a,
                s = t.ratio,
                o =
                  e < 0 ||
                  (!e && s && !t._start && t._zTime > R && !t._dp._lock) ||
                  t._ts < 0 ||
                  t._dp._ts < 0
                    ? 0
                    : 1,
                u = t._rDelay,
                h = 0
              if (
                (u &&
                  t._repeat &&
                  ((h = gt(0, t._tDur, e)),
                  _t(h, u) !== (a = _t(t._tTime, u)) &&
                    ((s = 1 - o),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                t._initted || !Ca(t, e, i, r))
              )
                if (o !== s || i || t._zTime === R || (!e && t._zTime)) {
                  for (
                    a = t._zTime,
                      t._zTime = e || (r ? R : 0),
                      r = r || (e && !a),
                      t.ratio = o,
                      t._from && (o = 1 - o),
                      t._time = 0,
                      t._tTime = h,
                      r || bt(t, 'onStart'),
                      n = t._pt;
                    n;

                  )
                    n.r(o, n.d), (n = n._next)
                  t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                    t._onUpdate && !r && bt(t, 'onUpdate'),
                    h && t._repeat && !r && t.parent && bt(t, 'onRepeat'),
                    (e >= t._tDur || e < 0) &&
                      t.ratio === o &&
                      (o && qa(t, 1),
                      r ||
                        (bt(t, o ? 'onComplete' : 'onReverseComplete', !0),
                        t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            })(this, t, e, r)
          return this
        }),
        (t.targets = function targets () {
          return this._targets
        }),
        (t.invalidate = function invalidate () {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._act =
              this._lazy =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            D.prototype.invalidate.call(this)
          )
        }),
        (t.kill = function kill (t, e) {
          if (
            (void 0 === e && (e = 'all'),
            !(t || (e && 'all' !== e)) && ((this._lazy = 0), this.parent))
          )
            return fb(this)
          if (this.timeline) {
            var r = this.timeline.totalDuration()
            return (
              this.timeline.killTweensOf(t, e, Lt && !0 !== Lt.vars.overwrite)
                ._first || fb(this),
              this.parent &&
                r !== this.timeline.totalDuration() &&
                Fa(this, (this._dur * this.timeline._tDur) / r),
              this
            )
          }
          var i,
            a,
            s,
            o,
            u,
            h,
            l,
            f = this._targets,
            d = t ? yt(t) : f,
            c = this._ptLookup,
            p = this._pt
          if (
            (!e || 'all' === e) &&
            (function _arraysMatch (t, e) {
              for (
                var r = t.length, i = r === e.length;
                i && r-- && t[r] === e[r];

              );
              return r < 0
            })(f, d)
          )
            return fb(this)
          for (
            i = this._op = this._op || [],
              'all' !== e &&
                (n(e) &&
                  ((u = {}),
                  _(e, function (t) {
                    return (u[t] = 1)
                  }),
                  (e = u)),
                (e = (function _addAliasesToVars (t, e) {
                  var r,
                    i,
                    n,
                    a,
                    s = t[0] ? Z(t[0]).harness : 0,
                    o = s && s.aliases
                  if (!o) return e
                  for (i in ((r = pt({}, e)), o))
                    if ((i in r))
                      for (n = (a = o[i].split(',')).length; n--; )
                        r[a[n]] = r[i]
                  return r
                })(f, e))),
              l = f.length;
            l--;

          )
            if (~d.indexOf(f[l]))
              for (u in ((a = c[l]),
              'all' === e
                ? ((i[l] = e), (o = a), (s = {}))
                : ((s = i[l] = i[l] || {}), (o = e)),
              o))
                (h = a && a[u]) &&
                  (('kill' in h.d && !0 !== h.d.kill(u)) || pa(this, h, '_pt'),
                  delete a[u]),
                  'all' !== s && (s[u] = 1)
          return this._initted && !this._pt && p && fb(this), this
        }),
        (Tween.to = function to (t, e, r) {
          return new Tween(t, e, r)
        }),
        (Tween.from = function from (t, e) {
          return new Tween(t, ca(arguments, 1))
        }),
        (Tween.delayedCall = function delayedCall (t, e, r, i) {
          return new Tween(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i
          })
        }),
        (Tween.fromTo = function fromTo (t, e, r) {
          return new Tween(t, ca(arguments, 2))
        }),
        (Tween.set = function set (t, e) {
          return (
            (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e)
          )
        }),
        (Tween.killTweensOf = function killTweensOf (t, e, r) {
          return E.killTweensOf(t, e, r)
        }),
        Tween
      )
    })(It)
  ha(Xt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    _('staggerTo,staggerFrom,staggerFromTo', function (r) {
      Xt[r] = function () {
        var t = new Rt(),
          e = vt.call(arguments, 0)
        return e.splice('staggerFromTo' === r ? 5 : 4, 0, 0), t[r].apply(t, e)
      }
    })
  function Xb (t, e, r) {
    return t.setAttribute(e, r)
  }
  function dc (t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
  }
  var Zt = function _setterPlain (t, e, r) {
      return (t[e] = r)
    },
    Vt = function _setterFunc (t, e, r) {
      return t[e](r)
    },
    jt = function _setterFuncWithParam (t, e, r, i) {
      return t[e](i.fp, r)
    },
    Gt = function _getSetter (t, e) {
      return o(t[e]) ? Vt : q(t[e]) && t.setAttribute ? Xb : Zt
    },
    Qt = function _renderPlain (t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
    },
    Jt = function _renderBoolean (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e)
    },
    Wt = function _renderComplexString (t, e) {
      var r = e._pt,
        i = ''
      if (!t && e.b) i = e.b
      else if (1 === t && e.e) i = e.e
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            i),
            (r = r._next)
        i += e.c
      }
      e.set(e.t, e.p, i, e)
    },
    $t = function _renderPropTweens (t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next)
    },
    Ht = function _addPluginModifier (t, e, r, i) {
      for (var n, a = this._pt; a; )
        (n = a._next), a.p === i && a.modifier(t, e, r), (a = n)
    },
    Kt = function _killPropTweensOf (t) {
      for (var e, r, i = this._pt; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? pa(this, i, '_pt')
            : i.dep || (e = 1),
          (i = r)
      return !e
    },
    te = function _sortPropTweensByPriority (t) {
      for (var e, r, i, n, a = t._pt; a; ) {
        for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next
        ;(a._prev = r ? r._prev : n) ? (a._prev._next = a) : (i = a),
          (a._next = r) ? (r._prev = a) : (n = a),
          (a = e)
      }
      t._pt = i
    },
    ee =
      ((PropTween.prototype.modifier = function modifier (t, e, r) {
        ;(this.mSet = this.mSet || this.set),
          (this.set = dc),
          (this.m = t),
          (this.mt = r),
          (this.tween = e)
      }),
      PropTween)
  function PropTween (t, e, r, i, n, a, s, o, u) {
    ;(this.t = e),
      (this.s = i),
      (this.c = n),
      (this.p = r),
      (this.r = a || Qt),
      (this.d = s || this),
      (this.set = o || Zt),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this)
  }
  _(
    ct +
      'parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger',
    function (t) {
      return (st[t] = 1)
    }
  ),
    (at.TweenMax = at.TweenLite = Xt),
    (at.TimelineLite = at.TimelineMax = Rt),
    (E = new Rt({
      sortChildren: !1,
      defaults: I,
      autoRemoveChildren: !0,
      id: 'root',
      smoothChildTiming: !0
    })),
    (U.stringFilter = qb)
  var re = {
    registerPlugin: function registerPlugin () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r]
      e.forEach(function (t) {
        return (function _createPlugin (t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = o(t),
            i =
              e && !r && t.init
                ? function () {
                    this._props = []
                  }
                : t,
            n = {
              init: O,
              render: $t,
              add: Bt,
              kill: Kt,
              modifier: Ht,
              rawVars: 0
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Gt,
              aliases: {},
              register: 0
            }
          if ((Ct(), t !== i)) {
            if (ht[e]) return
            ha(i, ha(la(t, n), a)),
              pt(i.prototype, pt(n, la(t, a))),
              (ht[(i.prop = e)] = i),
              t.targetTest && (dt.push(i), (st[e] = 1)),
              (e =
                ('css' === e
                  ? 'CSS'
                  : e.charAt(0).toUpperCase() + e.substr(1)) + 'Plugin')
          }
          N(e, i), t.register && t.register(ie, i, ee)
        })(t)
      })
    },
    timeline: function timeline (t) {
      return new Rt(t)
    },
    getTweensOf: function getTweensOf (t, e) {
      return E.getTweensOf(t, e)
    },
    getProperty: function getProperty (i, t, e, r) {
      n(i) && (i = yt(i)[0])
      var a = Z(i || {}).get,
        s = e ? ga : fa
      return (
        'native' === e && (e = ''),
        i
          ? t
            ? s(((ht[t] && ht[t].get) || a)(i, t, e, r))
            : function (t, e, r) {
                return s(((ht[t] && ht[t].get) || a)(i, t, e, r))
              }
          : i
      )
    },
    quickSetter: function quickSetter (r, e, i) {
      if (1 < (r = yt(r)).length) {
        var n = r.map(function (t) {
            return ie.quickSetter(t, e, i)
          }),
          a = n.length
        return function (t) {
          for (var e = a; e--; ) n[e](t)
        }
      }
      r = r[0] || {}
      var s = ht[e],
        o = Z(r),
        u = (o.harness && (o.harness.aliases || {})[e]) || e,
        h = s
          ? function (t) {
              var e = new s()
              ;(c._pt = 0),
                e.init(r, i ? t + i : t, c, 0, [r]),
                e.render(1, e),
                c._pt && $t(1, c)
            }
          : o.set(r, u)
      return s
        ? h
        : function (t) {
            return h(r, u, i ? t + i : t, o, 1)
          }
    },
    isTweening: function isTweening (t) {
      return 0 < E.getTweensOf(t, !0).length
    },
    defaults: function defaults (t) {
      return t && t.ease && (t.ease = Ft(t.ease, I.ease)), ka(I, t || {})
    },
    config: function config (t) {
      return ka(U, t || {})
    },
    registerEffect: function registerEffect (t) {
      var n = t.name,
        i = t.effect,
        e = t.plugins,
        a = t.defaults,
        s = t.extendTimeline
      ;(e || '').split(',').forEach(function (t) {
        return (
          t && !ht[t] && !at[t] && M(n + ' effect requires ' + t + ' plugin.')
        )
      }),
        (lt[n] = function (t, e, r) {
          return i(yt(t), ha(e || {}, a), r)
        }),
        s &&
          (Rt.prototype[n] = function (t, e, i) {
            return this.add(lt[n](t, r(e) ? e : (i = e) && {}, this), i)
          })
    },
    registerEase: function registerEase (t, e) {
      At[t] = Ft(e)
    },
    parseEase: function parseEase (t, e) {
      return arguments.length ? Ft(t, e) : At
    },
    getById: function getById (t) {
      return E.getById(t)
    },
    exportRoot: function exportRoot (t, e) {
      void 0 === t && (t = {})
      var r,
        i,
        n = new Rt(t)
      for (
        n.smoothChildTiming = s(t.smoothChildTiming),
          E.remove(n),
          n._dp = 0,
          n._time = n._tTime = E._time,
          r = E._first;
        r;

      )
        (i = r._next),
          (!e &&
            !r._dur &&
            r instanceof Xt &&
            r.vars.onComplete === r._targets[0]) ||
            Aa(n, r, r._start - r._delay),
          (r = i)
      return Aa(E, n, 0), n
    },
    utils: {
      wrap: function wrap (e, t, r) {
        var i = t - e
        return J(e)
          ? Za(e, wrap(0, e.length), t)
          : Ja(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e
            })
      },
      wrapYoyo: function wrapYoyo (e, t, r) {
        var i = t - e,
          n = 2 * i
        return J(e)
          ? Za(e, wrapYoyo(0, e.length - 1), t)
          : Ja(r, function (t) {
              return e + (i < (t = (n + ((t - e) % n)) % n || 0) ? n - t : t)
            })
      },
      distribute: Sa,
      random: Va,
      snap: Ua,
      normalize: function normalize (t, e, r) {
        return Tt(t, e, 0, 1, r)
      },
      getUnit: La,
      clamp: function clamp (e, r, t) {
        return Ja(t, function (t) {
          return gt(e, r, t)
        })
      },
      splitColor: lb,
      toArray: yt,
      mapRange: Tt,
      pipe: function pipe () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r]
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t)
          }, t)
        }
      },
      unitize: function unitize (e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || La(t))
        }
      },
      interpolate: function interpolate (e, r, t, i) {
        var a = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r
            }
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = n(e),
            d = {}
          if ((!0 === t && (i = 1) && (t = null), f))
            (e = { p: e }), (r = { p: r })
          else if (J(e) && !J(r)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
              u.push(interpolate(e[o - 1], e[o]))
            h--,
              (a = function func (t) {
                t *= h
                var e = Math.min(l, ~~t)
                return u[e](t - e)
              }),
              (t = r)
          } else i || (e = pt(J(e) ? [] : {}, e))
          if (!u) {
            for (s in r) Bt.call(d, e, s, 'get', r[s])
            a = function func (t) {
              return $t(t, d) || (f ? e.p : e)
            }
          }
        }
        return Ja(t, a)
      },
      shuffle: Ra
    },
    install: K,
    effects: lt,
    ticker: Mt,
    updateRoot: Rt.updateRoot,
    plugins: ht,
    globalTimeline: E,
    core: {
      PropTween: ee,
      globals: N,
      Tween: Xt,
      Timeline: Rt,
      Animation: It,
      getCache: Z,
      _removeLinkedListItem: pa
    }
  }
  _('to,from,fromTo,delayedCall,set,killTweensOf', function (t) {
    return (re[t] = Xt[t])
  }),
    Mt.add(Rt.updateRoot),
    (c = re.to({}, { duration: 0 }))
  function hc (t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next
    return r
  }
  function jc (t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init (t, i, e) {
        e._onInit = function (t) {
          var e, r
          if (
            (n(i) &&
              ((e = {}),
              _(i, function (t) {
                return (e[t] = 1)
              }),
              (i = e)),
            a)
          ) {
            for (r in ((e = {}), i)) e[r] = a(i[r])
            i = e
          }
          !(function _addModifiers (t, e) {
            var r,
              i,
              n,
              a = t._targets
            for (r in e)
              for (i = a.length; i--; )
                (n = (n = t._ptLookup[i][r]) && n.d) &&
                  (n._pt && (n = hc(n, r)),
                  n && n.modifier && n.modifier(e[r], t, a[i], r))
          })(t, i)
        }
      }
    }
  }
  var ie =
    re.registerPlugin(
      {
        name: 'attr',
        init: function init (t, e, r, i, n) {
          var a, s
          for (a in e)
            (s = this.add(
              t,
              'setAttribute',
              (t.getAttribute(a) || 0) + '',
              e[a],
              i,
              n,
              0,
              0,
              a
            )) && (s.op = a),
              this._props.push(a)
        }
      },
      {
        name: 'endArray',
        init: function init (t, e) {
          for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r])
        }
      },
      jc('roundProps', Ta),
      jc('modifiers'),
      jc('snap', Ua)
    ) || re
  ;(Xt.version = Rt.version = ie.version = '3.4.0'), (f = 1), t() && Ct()
  function Uc (t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
  }
  function Vc (t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    )
  }
  function Wc (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    )
  }
  function Xc (t, e) {
    var r = e.s + e.c * t
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e)
  }
  function Yc (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e)
  }
  function Zc (t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
  }
  function $c (t, e, r) {
    return (t.style[e] = r)
  }
  function _c (t, e, r) {
    return t.style.setProperty(e, r)
  }
  function ad (t, e, r) {
    return (t._gsap[e] = r)
  }
  function bd (t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r)
  }
  function cd (t, e, r, i, n) {
    var a = t._gsap
    ;(a.scaleX = a.scaleY = r), a.renderTransform(n, a)
  }
  function dd (t, e, r, i, n) {
    var a = t._gsap
    ;(a[e] = r), a.renderTransform(n, a)
  }
  function hd (t, e) {
    var r = ae.createElementNS
      ? ae.createElementNS(
          (e || 'http://www.w3.org/1999/xhtml').replace(/^https/, 'http'),
          t
        )
      : ae.createElement(t)
    return r.style ? r : ae.createElement(t)
  }
  function id (t, e, r) {
    var i = getComputedStyle(t)
    return (
      i[e] ||
      i.getPropertyValue(e.replace(Ee, '-$1').toLowerCase()) ||
      i.getPropertyValue(e) ||
      (!r && id(t, Ne(e) || e, 1)) ||
      ''
    )
  }
  function ld () {
    ;(function _windowExists () {
      return 'undefined' != typeof window
    })() &&
      window.document &&
      ((ne = window),
      (ae = ne.document),
      (se = ae.documentElement),
      (ue = hd('div') || { style: {} }),
      (he = hd('div')),
      (Be = Ne(Be)),
      (qe = Be + 'Origin'),
      (ue.style.cssText =
        'border-width:0;line-height:0;position:absolute;padding:0'),
      (fe = !!Ne('perspective')),
      (oe = 1))
  }
  function md (t) {
    var e,
      r = hd(
        'svg',
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute('xmlns')) ||
          'http://www.w3.org/2000/svg'
      ),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText
    if (
      (se.appendChild(r),
      r.appendChild(this),
      (this.style.display = 'block'),
      t)
    )
      try {
        ;(e = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = md)
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox())
    return (
      i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
      se.removeChild(r),
      (this.style.cssText = a),
      e
    )
  }
  function nd (t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
  }
  function od (e) {
    var r
    try {
      r = e.getBBox()
    } catch (t) {
      r = md.call(e, !0)
    }
    return (
      (r && (r.width || r.height)) || e.getBBox === md || (r = md.call(e, !0)),
      !r || r.width || r.x || r.y
        ? r
        : {
            x: +nd(e, ['x', 'cx', 'x1']) || 0,
            y: +nd(e, ['y', 'cy', 'y1']) || 0,
            width: 0,
            height: 0
          }
    )
  }
  function pd (t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !od(t))
  }
  function qd (t, e) {
    if (e) {
      var r = t.style
      e in Se && e !== qe && (e = Be),
        r.removeProperty
          ? (('ms' !== e.substr(0, 2) && 'webkit' !== e.substr(0, 6)) ||
              (e = '-' + e),
            r.removeProperty(e.replace(Ee, '-$1').toLowerCase()))
          : r.removeAttribute(e)
    }
  }
  function rd (t, e, r, i, n, a) {
    var s = new ee(t._pt, e, r, 0, 1, a ? Zc : Yc)
    return ((t._pt = s).b = i), (s.e = n), t._props.push(r), s
  }
  function td (t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + '').trim().substr((u + '').length) || 'px',
      l = ue.style,
      f = Ie.test(e),
      d = 'svg' === t.tagName.toLowerCase(),
      c = (d ? 'client' : 'offset') + (f ? 'Width' : 'Height'),
      p = 'px' === i,
      _ = '%' === i
    return i === h || !u || Ue[i] || Ue[h]
      ? u
      : ('px' === h || p || (u = td(t, e, r, 'px')),
        (o = t.getCTM && pd(t)),
        _ && (Se[e] || ~e.indexOf('adius'))
          ? aa((u / (o ? t.getBBox()[f ? 'width' : 'height'] : t[c])) * 100)
          : ((l[f ? 'width' : 'height'] = 100 + (p ? h : i)),
            (a =
              ~e.indexOf('adius') || ('em' === i && t.appendChild && !d)
                ? t
                : t.parentNode),
            o && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== ae && a.appendChild) || (a = ae.body),
            (s = a._gsap) && _ && s.width && f && s.time === Mt.time
              ? aa((u / s.width) * 100)
              : ((!_ && '%' !== h) || (l.position = id(t, 'position')),
                a === t && (l.position = 'static'),
                a.appendChild(ue),
                (n = ue[c]),
                a.removeChild(ue),
                (l.position = 'absolute'),
                f && _ && (((s = Z(a)).time = Mt.time), (s.width = a[c])),
                aa(p ? (n * u) / 100 : n && u ? (100 / n) * u : 0))))
  }
  function ud (t, e, r, i) {
    var n
    return (
      oe || ld(),
      e in Le &&
        'transform' !== e &&
        ~(e = Le[e]).indexOf(',') &&
        (e = e.split(',')[0]),
      Se[e] && 'transform' !== e
        ? ((n = Ge(t, i)),
          (n =
            'transformOrigin' !== e
              ? n[e]
              : Qe(id(t, qe)) + ' ' + n.zOrigin + 'px'))
        : ((n = t.style[e]) &&
            'auto' !== n &&
            !i &&
            !~(n + '').indexOf('calc(')) ||
          (n =
            (Ze[e] && Ze[e](t, e, r)) ||
            id(t, e) ||
            $(t, e) ||
            ('opacity' === e ? 1 : 0)),
      r && !~(n + '').indexOf(' ') ? td(t, e, n, r) + r : n
    )
  }
  function vd (t, e, r, i) {
    if (!r || 'none' === r) {
      var n = Ne(e, t, 1),
        a = n && id(t, n, 1)
      a && a !== r
        ? ((e = n), (r = a))
        : 'borderColor' === e && (r = id(t, 'borderTopColor'))
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      d,
      c,
      p,
      _,
      m,
      g,
      v = new ee(this._pt, t.style, e, 0, 1, Wt),
      y = 0,
      T = 0
    if (
      ((v.b = r),
      (v.e = i),
      (r += ''),
      'auto' === (i += '') &&
        ((t.style[e] = i), (i = id(t, e) || i), (t.style[e] = r)),
      qb((s = [r, i])),
      (i = s[1]),
      (u = (r = s[0]).match(tt) || []),
      (i.match(tt) || []).length)
    ) {
      for (; (o = tt.exec(i)); )
        (d = o[0]),
          (p = i.substring(y, o.index)),
          l
            ? (l = (l + 1) % 5)
            : ('rgba(' !== p.substr(-5) && 'hsla(' !== p.substr(-5)) || (l = 1),
          d !== (f = u[T++] || '') &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + '').length)),
            (g = '=' === d.charAt(1) ? +(d.charAt(0) + '1') : 0) &&
              (d = d.substr(2)),
            (c = parseFloat(d)),
            (_ = d.substr((c + '').length)),
            (y = tt.lastIndex - _.length),
            _ ||
              ((_ = _ || U.units[e] || m),
              y === i.length && ((i += _), (v.e += _))),
            m !== _ && (h = td(t, e, f, _) || 0),
            (v._pt = {
              _next: v._pt,
              p: p || 1 === T ? p : ',',
              s: h,
              c: g ? g * c : c - h,
              m: l && l < 4 ? Math.round : 0
            }))
      v.c = y < i.length ? i.substring(y, i.length) : ''
    } else v.r = 'display' === e && 'none' === i ? Zc : Yc
    return it.test(i) && (v.e = 0), (this._pt = v)
  }
  function xd (t) {
    var e = t.split(' '),
      r = e[0],
      i = e[1] || '50%'
    return (
      ('top' !== r && 'bottom' !== r && 'left' !== i && 'right' !== i) ||
        ((t = r), (r = i), (i = t)),
      (e[0] = Xe[r] || r),
      (e[1] = Xe[i] || i),
      e.join(' ')
    )
  }
  function yd (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap
      if ('all' === o || !0 === o) (s.cssText = ''), (i = 1)
      else
        for (n = (o = o.split(',')).length; -1 < --n; )
          (r = o[n]),
            Se[r] && ((i = 1), (r = 'transformOrigin' === r ? qe : Be)),
            qd(a, r)
      i &&
        (qd(a, Be),
        u &&
          (u.svg && a.removeAttribute('transform'), Ge(a, 1), (u.uncache = 1)))
    }
  }
  function Cd (t) {
    return 'matrix(1, 0, 0, 1, 0, 0)' === t || 'none' === t || !t
  }
  function Dd (t) {
    var e = id(t, Be)
    return Cd(e) ? Ve : e.substr(7).match(H).map(aa)
  }
  function Ed (t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || Z(t),
      o = t.style,
      u = Dd(t)
    return s.svg && t.getAttribute('transform')
      ? '1,0,0,1,0,0' ===
        (u = [
          (n = t.transform.baseVal.consolidate().matrix).a,
          n.b,
          n.c,
          n.d,
          n.e,
          n.f
        ]).join(',')
        ? Ve
        : u
      : (u !== Ve ||
          t.offsetParent ||
          t === se ||
          s.svg ||
          ((n = o.display),
          (o.display = 'block'),
          ((r = t.parentNode) && t.offsetParent) ||
            ((a = 1), (i = t.nextSibling), se.appendChild(t)),
          (u = Dd(t)),
          n ? (o.display = n) : qd(t, 'display'),
          a &&
            (i
              ? r.insertBefore(t, i)
              : r
              ? r.appendChild(t)
              : se.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
  }
  function Fd (t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || Ed(t, !0),
      f = h.xOrigin || 0,
      d = h.yOrigin || 0,
      c = h.xOffset || 0,
      p = h.yOffset || 0,
      _ = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(' '),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0
    r
      ? l !== Ve &&
        (o = _ * v - m * g) &&
        ((u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o),
        (w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o),
        (x = u))
      : ((w = (s = od(t)).x + (~b[0].indexOf('%') ? (w / 100) * s.width : w)),
        (x = s.y + (~(b[1] || b[0]).indexOf('%') ? (x / 100) * s.height : x))),
      i || (!1 !== i && h.smooth)
        ? ((y = w - f),
          (T = x - d),
          (h.xOffset = c + (y * _ + T * g) - y),
          (h.yOffset = p + (y * m + T * v) - T))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = w),
      (h.yOrigin = x),
      (h.smooth = !!i),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[qe] = '0px 0px'),
      a &&
        (rd(a, h, 'xOrigin', f, w),
        rd(a, h, 'yOrigin', d, x),
        rd(a, h, 'xOffset', c, h.xOffset),
        rd(a, h, 'yOffset', p, h.yOffset)),
      t.setAttribute('data-svg-origin', w + ' ' + x)
  }
  function Id (t, e, r) {
    var i = La(e)
    return aa(parseFloat(e) + parseFloat(td(t, 'x', r + 'px', i))) + i
  }
  function Pd (t, e, r, i, a, s) {
    var o,
      u,
      h = 360,
      l = n(a),
      f = parseFloat(a) * (l && ~a.indexOf('rad') ? De : 1),
      d = s ? f * s : f - i,
      c = i + d + 'deg'
    return (
      l &&
        ('short' === (o = a.split('_')[1]) &&
          (d %= h) !== d % 180 &&
          (d += d < 0 ? h : -h),
        'cw' === o && d < 0
          ? (d = ((d + 36e9) % h) - ~~(d / h) * h)
          : 'ccw' === o && 0 < d && (d = ((d - 36e9) % h) - ~~(d / h) * h)),
      (t._pt = u = new ee(t._pt, e, r, i, d, Vc)),
      (u.e = c),
      (u.u = 'deg'),
      t._props.push(r),
      u
    )
  }
  function Qd (t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = he.style,
      f = r._gsap
    for (n in ((l.cssText =
      getComputedStyle(r).cssText + ';position:absolute;display:block;'),
    (l[Be] = e),
    ae.body.appendChild(he),
    (i = Ge(he, 1)),
    Se))
      (a = f[n]) !== (s = i[n]) &&
        'perspective,force3D,transformOrigin,svgOrigin'.indexOf(n) < 0 &&
        ((o = La(a) !== (h = La(s)) ? td(r, n, a, h) : parseFloat(a)),
        (u = parseFloat(s)),
        (t._pt = new ee(t._pt, f, n, o, u - o, Uc)),
        (t._pt.u = h || 0),
        t._props.push(n))
    ae.body.removeChild(he)
  }
  var ne,
    ae,
    se,
    oe,
    ue,
    he,
    le,
    fe,
    de = At.Power0,
    ce = At.Power1,
    pe = At.Power2,
    _e = At.Power3,
    me = At.Power4,
    ge = At.Linear,
    ve = At.Quad,
    ye = At.Cubic,
    Te = At.Quart,
    be = At.Quint,
    we = At.Strong,
    xe = At.Elastic,
    ke = At.Back,
    Oe = At.SteppedEase,
    Me = At.Bounce,
    Ce = At.Sine,
    Ae = At.Expo,
    Pe = At.Circ,
    Se = {},
    De = 180 / Math.PI,
    Fe = Math.PI / 180,
    ze = Math.atan2,
    Ee = /([A-Z])/g,
    Ie = /(?:left|right|width|margin|padding|x)/i,
    Re = /[\s,\(]\S/,
    Le = {
      autoAlpha: 'opacity,visibility',
      scale: 'scaleX,scaleY',
      alpha: 'opacity'
    },
    Be = 'transform',
    qe = Be + 'Origin',
    Ye = 'O,Moz,ms,Ms,Webkit'.split(','),
    Ne = function _checkPropPrefix (t, e, r) {
      var i = (e || ue).style,
        n = 5
      if (t in i && !r) return t
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(Ye[n] + t in i);

      );
      return n < 0 ? null : (3 === n ? 'ms' : 0 <= n ? Ye[n] : '') + t
    },
    Ue = { deg: 1, rad: 1, turn: 1 },
    Xe = {
      top: '0%',
      bottom: '100%',
      left: '0%',
      right: '100%',
      center: '50%'
    },
    Ze = {
      clearProps: function clearProps (t, e, r, i, n) {
        if ('isFromStart' !== n.data) {
          var a = (t._pt = new ee(t._pt, e, r, 0, 0, yd))
          return (a.u = i), (a.pr = -10), (a.tween = n), t._props.push(r), 1
        }
      }
    },
    Ve = [1, 0, 0, 1, 0, 0],
    je = {},
    Ge = function _parseTransform (t, e) {
      var r = t._gsap || new Et(t)
      if ('x' in r && !e && !r.uncache) return r
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        c,
        p,
        _,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        O,
        M,
        C,
        A,
        P,
        S,
        D,
        F,
        z,
        E,
        I = t.style,
        R = r.scaleX < 0,
        L = 'deg',
        B = id(t, qe) || '0'
      return (
        (i = n = a = u = h = l = f = d = c = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !pd(t))),
        (m = Ed(t, r.svg)),
        r.svg &&
          ((M = !r.uncache && t.getAttribute('data-svg-origin')),
          Fd(t, M || B, !!M || r.originIsAbsolute, !1 !== r.smooth, m)),
        (p = r.xOrigin || 0),
        (_ = r.yOrigin || 0),
        m !== Ve &&
          ((T = m[0]),
          (b = m[1]),
          (w = m[2]),
          (x = m[3]),
          (i = k = m[4]),
          (n = O = m[5]),
          6 === m.length
            ? ((s = Math.sqrt(T * T + b * b)),
              (o = Math.sqrt(x * x + w * w)),
              (u = T || b ? ze(b, T) * De : 0),
              (f = w || x ? ze(w, x) * De + u : 0) && (o *= Math.cos(f * Fe)),
              r.svg && ((i -= p - (p * T + _ * w)), (n -= _ - (p * b + _ * x))))
            : ((E = m[6]),
              (F = m[7]),
              (P = m[8]),
              (S = m[9]),
              (D = m[10]),
              (z = m[11]),
              (i = m[12]),
              (n = m[13]),
              (a = m[14]),
              (h = (g = ze(E, D)) * De),
              g &&
                ((M = k * (v = Math.cos(-g)) + P * (y = Math.sin(-g))),
                (C = O * v + S * y),
                (A = E * v + D * y),
                (P = k * -y + P * v),
                (S = O * -y + S * v),
                (D = E * -y + D * v),
                (z = F * -y + z * v),
                (k = M),
                (O = C),
                (E = A)),
              (l = (g = ze(-w, D)) * De),
              g &&
                ((v = Math.cos(-g)),
                (z = x * (y = Math.sin(-g)) + z * v),
                (T = M = T * v - P * y),
                (b = C = b * v - S * y),
                (w = A = w * v - D * y)),
              (u = (g = ze(b, T)) * De),
              g &&
                ((M = T * (v = Math.cos(g)) + b * (y = Math.sin(g))),
                (C = k * v + O * y),
                (b = b * v - T * y),
                (O = O * v - k * y),
                (T = M),
                (k = C)),
              h &&
                359.9 < Math.abs(h) + Math.abs(u) &&
                ((h = u = 0), (l = 180 - l)),
              (s = aa(Math.sqrt(T * T + b * b + w * w))),
              (o = aa(Math.sqrt(O * O + E * E))),
              (g = ze(k, O)),
              (f = 2e-4 < Math.abs(g) ? g * De : 0),
              (c = z ? 1 / (z < 0 ? -z : z) : 0)),
          r.svg &&
            ((M = t.getAttribute('transform')),
            (r.forceCSS = t.setAttribute('transform', '') || !Cd(id(t, Be))),
            M && t.setAttribute('transform', M))),
        90 < Math.abs(f) &&
          Math.abs(f) < 270 &&
          (R
            ? ((s *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (r.x =
          ((r.xPercent =
            i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)
            ? 0
            : i) + 'px'),
        (r.y =
          ((r.yPercent =
            n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)
            ? 0
            : n) + 'px'),
        (r.z = a + 'px'),
        (r.scaleX = aa(s)),
        (r.scaleY = aa(o)),
        (r.rotation = aa(u) + L),
        (r.rotationX = aa(h) + L),
        (r.rotationY = aa(l) + L),
        (r.skewX = f + L),
        (r.skewY = d + L),
        (r.transformPerspective = c + 'px'),
        (r.zOrigin = parseFloat(B.split(' ')[2]) || 0) && (I[qe] = Qe(B)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = U.force3D),
        (r.renderTransform = r.svg ? tr : fe ? Ke : Je),
        (r.uncache = 0),
        r
      )
    },
    Qe = function _firstTwoOnly (t) {
      return (t = t.split(' '))[0] + ' ' + t[1]
    },
    Je = function _renderNon3DTransforms (t, e) {
      ;(e.z = '0px'),
        (e.rotationY = e.rotationX = '0deg'),
        (e.force3D = 0),
        Ke(t, e)
    },
    We = '0deg',
    $e = '0px',
    He = ') ',
    Ke = function _renderCSSTransforms (t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        c = r.scaleX,
        p = r.scaleY,
        _ = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = '',
        T = ('auto' === m && t && 1 !== t) || !0 === m
      if (v && (l !== We || h !== We)) {
        var b,
          w = parseFloat(h) * Fe,
          x = Math.sin(w),
          k = Math.cos(w)
        ;(w = parseFloat(l) * Fe),
          (b = Math.cos(w)),
          (a = Id(g, a, x * b * -v)),
          (s = Id(g, s, -Math.sin(w) * -v)),
          (o = Id(g, o, k * b * -v + v))
      }
      _ !== $e && (y += 'perspective(' + _ + He),
        (i || n) && (y += 'translate(' + i + '%, ' + n + '%) '),
        (!T && a === $e && s === $e && o === $e) ||
          (y +=
            o !== $e || T
              ? 'translate3d(' + a + ', ' + s + ', ' + o + ') '
              : 'translate(' + a + ', ' + s + He),
        u !== We && (y += 'rotate(' + u + He),
        h !== We && (y += 'rotateY(' + h + He),
        l !== We && (y += 'rotateX(' + l + He),
        (f === We && d === We) || (y += 'skew(' + f + ', ' + d + He),
        (1 === c && 1 === p) || (y += 'scale(' + c + ', ' + p + He),
        (g.style[Be] = y || 'translate(0, 0)')
    },
    tr = function _renderSVGTransforms (t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        c = o.skewX,
        p = o.skewY,
        _ = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f)
      ;(d = parseFloat(d)),
        (c = parseFloat(c)),
        (p = parseFloat(p)) && ((c += p = parseFloat(p)), (d += p)),
        d || c
          ? ((d *= Fe),
            (c *= Fe),
            (r = Math.cos(d) * _),
            (i = Math.sin(d) * _),
            (n = Math.sin(d - c) * -m),
            (a = Math.cos(d - c) * m),
            c &&
              ((p *= Fe),
              (s = Math.tan(c - p)),
              (n *= s = Math.sqrt(1 + s * s)),
              (a *= s),
              p &&
                ((s = Math.tan(p)), (r *= s = Math.sqrt(1 + s * s)), (i *= s))),
            (r = aa(r)),
            (i = aa(i)),
            (n = aa(n)),
            (a = aa(a)))
          : ((r = _), (a = m), (i = n = 0)),
        ((x && !~(l + '').indexOf('px')) || (k && !~(f + '').indexOf('px'))) &&
          ((x = td(g, 'x', l, 'px')), (k = td(g, 'y', f, 'px'))),
        (v || y || T || b) &&
          ((x = aa(x + v - (v * r + y * n) + T)),
          (k = aa(k + y - (v * i + y * a) + b))),
        (u || h) &&
          ((s = g.getBBox()),
          (x = aa(x + (u / 100) * s.width)),
          (k = aa(k + (h / 100) * s.height))),
        (s =
          'matrix(' +
          r +
          ',' +
          i +
          ',' +
          n +
          ',' +
          a +
          ',' +
          x +
          ',' +
          k +
          ')'),
        g.setAttribute('transform', s),
        w && (g.style[Be] = s)
    }
  _('padding,margin,Width,Radius', function (e, r) {
    var t = 'Right',
      i = 'Bottom',
      n = 'Left',
      o = (r < 3 ? ['Top', t, i, n] : ['Top' + n, 'Top' + t, i + t, i + n]).map(
        function (t) {
          return r < 2 ? e + t : 'border' + t + e
        }
      )
    Ze[1 < r ? 'border' + e : e] = function (e, t, r, i, n) {
      var a, s
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return ud(e, t, r)
          })),
          5 === (s = a.join(' ')).split(a[0]).length ? a[0] : s
        )
      ;(a = (i + '').split(' ')),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0])
        }),
        e.init(t, s, n)
    }
  })
  var er,
    rr,
    ir,
    nr = {
      name: 'css',
      register: ld,
      targetTest: function targetTest (t) {
        return t.style && t.nodeType
      },
      init: function init (t, e, r, i, n) {
        var a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _,
          m,
          g,
          v,
          y,
          T = this._props,
          b = t.style
        for (f in (oe || ld(), e))
          if (
            'autoRound' !== f &&
            ((s = e[f]), !ht[f] || !Mb(f, e, r, i, t, n))
          )
            if (
              ((h = typeof s),
              (l = Ze[f]),
              'function' === h && (h = typeof (s = s.call(r, i, t, n))),
              'string' === h && ~s.indexOf('random(') && (s = ab(s)),
              l)
            )
              l(this, t, f, s, r) && (y = 1)
            else if ('--' === f.substr(0, 2))
              this.add(
                b,
                'setProperty',
                getComputedStyle(t).getPropertyValue(f) + '',
                s + '',
                i,
                n,
                0,
                0,
                f
              )
            else {
              if (
                ((a = ud(t, f)),
                (u = parseFloat(a)),
                (p =
                  'string' === h && '=' === s.charAt(1)
                    ? +(s.charAt(0) + '1')
                    : 0) && (s = s.substr(2)),
                (o = parseFloat(s)),
                f in Le &&
                  ('autoAlpha' === f &&
                    (1 === u &&
                      'hidden' === ud(t, 'visibility') &&
                      o &&
                      (u = 0),
                    rd(
                      this,
                      b,
                      'visibility',
                      u ? 'inherit' : 'hidden',
                      o ? 'inherit' : 'hidden',
                      !o
                    )),
                  'scale' !== f &&
                    'transform' !== f &&
                    ~(f = Le[f]).indexOf(',') &&
                    (f = f.split(',')[0])),
                (_ = f in Se))
              )
                if (
                  (m ||
                    ((g = t._gsap).renderTransform || Ge(t),
                    (v = !1 !== e.smoothOrigin && g.smooth),
                    ((m = this._pt =
                      new ee(
                        this._pt,
                        b,
                        Be,
                        0,
                        1,
                        g.renderTransform,
                        g,
                        0,
                        -1
                      )).dep = 1)),
                  'scale' === f)
                )
                  (this._pt = new ee(
                    this._pt,
                    g,
                    'scaleY',
                    g.scaleY,
                    p ? p * o : o - g.scaleY
                  )),
                    T.push('scaleY', f),
                    (f += 'X')
                else {
                  if ('transformOrigin' === f) {
                    ;(s = xd(s)),
                      g.svg
                        ? Fd(t, s, 0, v, 0, this)
                        : ((c = parseFloat(s.split(' ')[2]) || 0) !==
                            g.zOrigin && rd(this, g, 'zOrigin', g.zOrigin, c),
                          rd(this, b, f, Qe(a), Qe(s)))
                    continue
                  }
                  if ('svgOrigin' === f) {
                    Fd(t, s, 1, v, 0, this)
                    continue
                  }
                  if (f in je) {
                    Pd(this, g, f, u, s, p)
                    continue
                  }
                  if ('smoothOrigin' === f) {
                    rd(this, g, 'smooth', g.smooth, s)
                    continue
                  }
                  if ('force3D' === f) {
                    g[f] = s
                    continue
                  }
                  if ('transform' === f) {
                    Qd(this, s, t)
                    continue
                  }
                }
              else f in b || (f = Ne(f) || f)
              if (
                _ ||
                ((o || 0 === o) && (u || 0 === u) && !Re.test(s) && f in b)
              )
                (d = (a + '').substr((u + '').length)) !==
                  (c =
                    (s + '').substr(((o = o || 0) + '').length) ||
                    (f in U.units ? U.units[f] : d)) && (u = td(t, f, a, c)),
                  (this._pt = new ee(
                    this._pt,
                    _ ? g : b,
                    f,
                    u,
                    p ? p * o : o - u,
                    'px' !== c || !1 === e.autoRound || _ ? Uc : Xc
                  )),
                  (this._pt.u = c || 0),
                  d !== c && ((this._pt.b = a), (this._pt.r = Wc))
              else if (f in b) vd.call(this, t, f, a, s)
              else {
                if (!(f in t)) {
                  L(f, s)
                  continue
                }
                this.add(t, f, t[f], s, i, n)
              }
              T.push(f)
            }
        y && te(this)
      },
      get: ud,
      aliases: Le,
      getSetter: function getSetter (t, e, r) {
        var i = Le[e]
        return (
          i && i.indexOf(',') < 0 && (e = i),
          e in Se && e !== qe && (t._gsap.x || ud(t, 'x'))
            ? r && le === r
              ? 'scale' === e
                ? bd
                : ad
              : (le = r || {}) && ('scale' === e ? cd : dd)
            : t.style && !q(t.style[e])
            ? $c
            : ~e.indexOf('-')
            ? _c
            : Gt(t, e)
        )
      },
      core: { _removeProperty: qd, _getMatrix: Ed }
    }
  ;(ie.utils.checkPrefix = Ne),
    (ir = _(
      (er = 'x,y,z,scale,scaleX,scaleY,xPercent,yPercent') +
        ',' +
        (rr = 'rotation,rotationX,rotationY,skewX,skewY') +
        ',transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective',
      function (t) {
        Se[t] = 1
      }
    )),
    _(rr, function (t) {
      ;(U.units[t] = 'deg'), (je[t] = 1)
    }),
    (Le[ir[13]] = er + ',' + rr),
    _(
      '0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY',
      function (t) {
        var e = t.split(':')
        Le[e[1]] = ir[e[0]]
      }
    ),
    _(
      'x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective',
      function (t) {
        U.units[t] = 'px'
      }
    ),
    ie.registerPlugin(nr)
  var ar = ie.registerPlugin(nr) || ie,
    sr = ar.core.Tween
  ;(e.Back = ke),
    (e.Bounce = Me),
    (e.CSSPlugin = nr),
    (e.Circ = Pe),
    (e.Cubic = ye),
    (e.Elastic = xe),
    (e.Expo = Ae),
    (e.Linear = ge),
    (e.Power0 = de),
    (e.Power1 = ce),
    (e.Power2 = pe),
    (e.Power3 = _e),
    (e.Power4 = me),
    (e.Quad = ve),
    (e.Quart = Te),
    (e.Quint = be),
    (e.Sine = Ce),
    (e.SteppedEase = Oe),
    (e.Strong = we),
    (e.TimelineLite = Rt),
    (e.TimelineMax = Rt),
    (e.TweenLite = Xt),
    (e.TweenMax = sr),
    (e.default = ar),
    (e.gsap = ar)
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 })
  } else {
    delete e.default
  }
})
/*------------ //////// ---------------*/

/*!
 * ScrollTrigger 3.3.3
 * https://greensock.com
 */
!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t(((e = e || self).window = e.window || {}))
})(this, function (e) {
  'use strict'
  function z (e) {
    return e
  }
  function A () {
    return 'undefined' != typeof window
  }
  function B () {
    return xe || (A() && (xe = window.gsap) && xe.registerPlugin && xe)
  }
  function C (e) {
    return !!~i.indexOf(e)
  }
  function D (t, e) {
    var r = e.s
    return function (e) {
      return arguments.length ? (t[r] = e) : t[r]
    }
  }
  function E (e, t) {
    var r = t.s,
      n = t.d2
    return (r = 'scroll' + n) && C(e)
      ? Math.max(x[r], Se[r]) -
          (we['inner' + n] || x['client' + n] || Se['client' + n])
      : e[r] - e['offset' + n]
  }
  function F (e) {
    return 'string' == typeof e
  }
  function G (e) {
    return 'function' == typeof e
  }
  function H (e) {
    return 'number' == typeof e
  }
  function I (e) {
    return 'object' == typeof e
  }
  function ba (e) {
    return we.getComputedStyle(e)
  }
  function da (e, t) {
    for (var r in t) r in e || (e[r] = t[r])
    return e
  }
  function ea (e, t) {
    var r =
        t &&
        'matrix(1, 0, 0, 1, 0, 0)' !== ba(e)[f] &&
        xe
          .to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0
          })
          .progress(1),
      n = e.getBoundingClientRect()
    return r && r.progress(0).kill(), n
  }
  function fa (e, t) {
    var r = t.d2
    return e['offset' + r] || e['client' + r] || 0
  }
  function ha (t, r, e, n) {
    return e.split(',').forEach(function (e) {
      return t(r, e, n)
    })
  }
  function ia (e, t, r) {
    return e.addEventListener(t, r, { passive: !0 })
  }
  function ja (e, t, r) {
    return e.removeEventListener(t, r)
  }
  function na (e, t) {
    if (F(e)) {
      var r = e.indexOf('='),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0
      n && (e.indexOf('%') > r && (n *= t / 100), (e = e.substr(0, r - 1))),
        (e =
          n +
          (e in g
            ? g[e] * t
            : ~e.indexOf('%')
            ? (parseFloat(e) * t) / 100
            : parseFloat(e) || 0))
    }
    return e
  }
  function oa (e, t, r, n, o, i, a) {
    var s = o.startColor,
      l = o.endColor,
      c = o.fontSize,
      f = o.indent,
      u = o.fontWeight,
      p = Te.createElement('div'),
      d = C(r),
      g = -1 !== e.indexOf('scroller'),
      h = d ? Se : r,
      v = -1 !== e.indexOf('start'),
      m = v ? s : l,
      b =
        'border-color:' +
        m +
        ';font-size:' +
        c +
        ';color:' +
        m +
        ';font-weight:' +
        u +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;'
    return (
      (b += 'position:' + (g && d ? 'fixed;' : 'absolute;')),
      (!g && d) ||
        (b += (n === Xe ? y : w) + ':' + (i + parseFloat(f)) + 'px;'),
      a &&
        (b +=
          'box-sizing:border-box;text-align:left;width:' +
          a.offsetWidth +
          'px;'),
      (p._isStart = v),
      p.setAttribute('class', 'gsap-marker-' + e),
      (p.style.cssText = b),
      (p.innerText = t || 0 === t ? e + '-' + t : e),
      h.insertBefore(p, h.children[0]),
      (p._offset = p['offset' + n.op.d2]),
      T(p, 0, n, d, v),
      p
    )
  }
  function sa () {
    return (l = l || s(m))
  }
  function ta () {
    l || ((l = s(m)), ze || v('scrollStart'), (ze = Oe()))
  }
  function ua () {
    return !Me && 200 < Oe() - ze && a.restart(!0)
  }
  function ya (e) {
    for (var t = v('refreshInit'), r = Ve.length, n = r; n--; )
      Ve[n].scroll.rec = Ve[n].scroll()
    for (n = 0; n < r; n++) Ve[n] && Ve[n].refresh(!0 !== e)
    for (
      t.forEach(function (e) {
        return e && e.render && e.render(-1)
      }),
        n = Ve.length;
      n--;

    )
      Ve[n].scroll.rec = 0
    v('refresh')
  }
  function Ca (e, t, r) {
    if (($e(r), e.parentNode === t)) {
      var n = t.parentNode
      n && (n.insertBefore(e, t), n.removeChild(t))
    }
  }
  function Da (e, t, r) {
    if (e.parentNode !== t) {
      for (var n, o = b.length, i = t.style, a = e.style; o--; )
        i[(n = b[o])] = r[n]
      ;(i.position = 'absolute' === r.position ? 'absolute' : 'relative'),
        (a[w] = a[y] = 'auto'),
        (i.overflow = 'visible'),
        (i.boxSizing = 'border-box'),
        (i[Ie] = fa(e, Je) + qe),
        (i[Le] = fa(e, Xe) + qe),
        (i[Re] = a[je] = a[d] = a[p] = '0'),
        (a[Ie] = r[Ie]),
        (a[Le] = r[Le]),
        (a[Re] = r[Re]),
        e.parentNode.insertBefore(t, e),
        t.appendChild(e)
    }
  }
  function Ga (e) {
    for (var t = S.length, r = e.style, n = [], o = 0; o < t; o++)
      n.push(S[o], r[S[o]])
    return (n.t = e), n
  }
  function Ja (e, t, r, n, o, i, a, s, l, c, f, u) {
    if (
      (G(e) && (e = e(s)),
      F(e) &&
        'max' === e.substr(0, 3) &&
        (e = u + ('=' === e.charAt(4) ? na('0' + e.substr(3), r) : 0)),
      H(e))
    )
      a && T(a, r, n, f, !0)
    else {
      G(t) && (t = t(s))
      var p,
        d,
        g,
        h = Ce(t)[0] || Se,
        v = ea(h) || {},
        m = e.split(' ')
      ;(v && (v.left || v.top)) ||
        'none' !== ba(h).display ||
        ((g = h.style.display),
        (h.style.display = 'block'),
        (v = ea(h)),
        g ? (h.style.display = g) : h.style.removeProperty('display')),
        (p = na(m[0], v[n.d])),
        (d = na(m[1] || '0', r)),
        (e = v[n.p] - l[n.p] - c + p + o - d),
        a && T(a, d, n, f, r - d < 20 || (a._isStart && 20 < d)),
        (r -= r - d)
    }
    if (i) {
      var b = e + r,
        y = i._isStart
      ;(u = 'scroll' + n.d2),
        T(
          i,
          b,
          n,
          f,
          (y && 20 < b) ||
            (!y && (f ? Math.max(Se[u], x[u]) : i.parentNode[u]) <= b + 1)
        ),
        f &&
          ((l = ea(a)),
          f && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + qe))
    }
    return Math.round(e)
  }
  function Ma (l, e) {
    var c,
      f = C(l) ? e.sc : D(l, e),
      u = '_scroll' + e.p2
    return (
      (l[u] = f),
      function getTween (e, t, r, n, o) {
        var i = getTween.tween,
          a = t.onComplete,
          s = {}
        return (
          i && i.kill(),
          (c = f()),
          (t[u] = e),
          ((t.modifiers = s)[u] = function (e) {
            return (
              f() !== c
                ? (i.kill(), (getTween.tween = 0), (e = f()))
                : n && (e = r + n * i.ratio + o * i.ratio * i.ratio),
              (c = Math.round(e))
            )
          }),
          (t.onComplete = function () {
            ;(getTween.tween = 0), a && a.call(i)
          }),
          (i = getTween.tween = xe.to(l, t))
        )
      }
    )
  }
  var xe,
    o,
    we,
    Te,
    x,
    Se,
    i,
    a,
    s,
    l,
    Ce,
    ke,
    _e,
    c,
    Me,
    Pe,
    f,
    Ee = 1,
    Oe = Date.now,
    u = Oe(),
    ze = 0,
    Fe = 1,
    Ae = Math.abs,
    t = 'scrollLeft',
    r = 'scrollTop',
    p = 'left',
    d = 'top',
    y = 'right',
    w = 'bottom',
    Ie = 'width',
    Le = 'height',
    De = 'Right',
    Be = 'Left',
    Ge = 'Top',
    Ne = 'Bottom',
    Re = 'padding',
    je = 'margin',
    He = 'Width',
    We = 'Height',
    qe = 'px',
    Je = {
      s: t,
      p: p,
      p2: Be,
      os: y,
      os2: De,
      d: Ie,
      d2: He,
      a: 'x',
      sc: function sc (e) {
        return arguments.length
          ? we.scrollTo(e, Xe.sc())
          : we.pageXOffset || Te[t] || x[t] || Se[t] || 0
      }
    },
    Xe = {
      s: r,
      p: d,
      p2: Ge,
      os: w,
      os2: Ne,
      d: Le,
      d2: We,
      a: 'y',
      op: Je,
      sc: function sc (e) {
        return arguments.length
          ? we.scrollTo(Je.sc(), e)
          : we.pageYOffset || Te[r] || x[r] || Se[r] || 0
      }
    },
    Ye = {
      startColor: 'green',
      endColor: 'red',
      indent: 0,
      fontSize: '16px',
      fontWeight: 'normal'
    },
    Ue = { toggleActions: 'play', anticipatePin: 0 },
    g = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
    T = function _positionMarker (e, t, r, n, o) {
      var i = {},
        a = r[o ? 'os2' : 'p2'],
        s = r[o ? 'p2' : 'os2']
      ;(e._isFlipped = o),
        (i[r.a + 'Percent'] = o ? -100 : 0),
        (i[r.a] = o ? 1 : 0),
        (i['border' + a + He] = 1),
        (i['border' + s + He] = 0),
        (i[r.p] = t),
        xe.set(e, i)
    },
    Ve = [],
    Ze = {},
    h = {},
    n = [],
    v = function _dispatch (e) {
      return (
        (h[e] &&
          h[e].map(function (e) {
            return e()
          })) ||
        n
      )
    },
    m = function _updateAll () {
      var e = Ve.length,
        t = 0,
        r = Oe(),
        n = 50 <= r - u
      for (
        n &&
        (ze && !Pe && 200 < r - ze && ((ze = 0), v('scrollEnd')),
        (_e = u),
        (u = r));
        t < e;
        t++
      )
        Ve[t] && Ve[t].update(0, n)
      l = 0
    },
    b = [
      p,
      d,
      w,
      y,
      je + Ne,
      je + De,
      je + Ge,
      je + Be,
      'display',
      'flexShrink'
    ],
    S = b.concat([
      Ie,
      Le,
      'boxSizing',
      'max' + He,
      'max' + We,
      'position',
      je,
      Re,
      Re + Ge,
      Re + De,
      Re + Ne,
      Re + Be
    ]),
    k = /([A-Z])/g,
    $e = function _setState (e) {
      for (var t, r, n = e.t.style, o = e.length, i = 0; i < o; i += 2)
        (r = e[i + 1]),
          (t = e[i]),
          r
            ? (n[t] = r)
            : n[t] && n.removeProperty(t.replace(k, '-$1').toLowerCase())
    },
    Ke = { left: 0, top: 0 },
    Qe = /(?:webkit|moz|length)/i
  Je.op = Xe
  var _ =
    ((ScrollTrigger.prototype.init = function init (y, x) {
      if (((this.progress = 0), this.vars && this.kill(1), Fe)) {
        var d,
          e,
          c,
          w,
          g,
          h,
          T,
          S,
          k,
          _,
          M,
          P,
          t,
          O,
          A,
          L,
          B,
          N,
          r,
          R,
          v,
          j,
          W,
          m,
          q,
          b,
          J,
          n,
          X,
          Y,
          U,
          V,
          o,
          f,
          Z,
          $,
          K = (y = da(F(y) || H(y) || y.nodeType ? { trigger: y } : y, Ue))
            .horizontal
            ? Je
            : Xe,
          Q = y.onUpdate,
          ee = y.toggleClass,
          i = y.id,
          te = y.onToggle,
          re = y.onRefresh,
          a = y.scrub,
          ne = y.trigger,
          oe = y.pin,
          ie = y.pinSpacing,
          ae = y.invalidateOnRefresh,
          se = y.anticipatePin,
          s = y.onScrubComplete,
          u = y.onSnapComplete,
          le = y.once,
          ce = y.snap,
          fe = y.pinReparent,
          ue = !a && 0 !== a,
          pe = Ce(y.scroller || we)[0],
          l = xe.core.getCache(pe),
          de = C(pe),
          ge = [y.onEnter, y.onLeave, y.onEnterBack, y.onLeaveBack],
          he = ue && (le ? 'play' : y.toggleActions).split(' '),
          p = 'markers' in y ? y.markers : Ue.markers,
          ve = de ? 0 : parseFloat(ba(pe)['border' + K.p2 + He]) || 0,
          me = this,
          be = function softRefresh () {
            return (
              ScrollTrigger.removeEventListener('scrollEnd', softRefresh) ||
              me.refresh()
            )
          },
          ye =
            y.onRefreshInit &&
            function () {
              return y.onRefreshInit(me)
            }
        ;(se *= 45),
          Ve.push(me),
          (me.scroller = pe),
          (me.scroll = de ? K.sc : D(pe, K)),
          (g = me.scroll()),
          (me.vars = y),
          (x = x || y.animation),
          (l.tweenScroll = l.tweenScroll || {
            top: Ma(pe, Xe),
            left: Ma(pe, Je)
          }),
          (me.tweenTo = d = l.tweenScroll[K.p]),
          x &&
            ((x.vars.lazy = !1),
            x._initted ||
              (!1 !== x.vars.immediateRender && x.render(-0.01, !0, !0)),
            (me.animation = x.pause()),
            (x.scrollTrigger = me),
            (o = H(a) && a) &&
              (V = xe.to(x, {
                ease: 'power3',
                duration: o,
                onComplete: function onComplete () {
                  return s && s(me)
                }
              })),
            (X = 0),
            (i = i || x.vars.id)),
          ce &&
            (I(ce) || (ce = { snapTo: ce }),
            (c = G(ce.snapTo)
              ? ce.snapTo
              : 'labels' === ce.snapTo
              ? (function _getLabels (i) {
                  return function (e) {
                    var t,
                      r = [],
                      n = i.labels,
                      o = i.duration()
                    for (t in n) r.push(n[t] / o)
                    return xe.utils.snap(r, e)
                  }
                })(x)
              : xe.utils.snap(ce.snapTo)),
            (f = ce.duration || { min: 0.1, max: 2 }),
            (f = I(f) ? ke(f.min, f.max) : ke(f, f)),
            (Z = xe
              .delayedCall(ce.delay || o / 2 || 0.1, function () {
                if (!ze || (ze === U && !Pe)) {
                  var e = x && !ue ? x.totalProgress() : me.progress,
                    t = ((e - Y) / (Oe() - _e)) * 1e3 || 0,
                    r = (Ae(t / 2) * t) / 0.185,
                    n = e + r,
                    o = ke(0, 1, c(n, me)),
                    i = o - e - r,
                    a = me.scroll(),
                    s = Math.round(T + o * O),
                    l = d.tween
                  if (a <= S && T <= a) {
                    if (l && !l._initted) {
                      if (l.data <= Math.abs(s - a)) return
                      l.kill()
                    }
                    d(
                      s,
                      {
                        duration: f(
                          Ae(
                            (0.185 * Math.max(Ae(n - e), Ae(o - e))) /
                              t /
                              0.05 || 0
                          )
                        ),
                        ease: ce.ease || 'power3',
                        data: Math.abs(s - a),
                        onComplete: function onComplete () {
                          ;(X = Y = x && !ue ? x.totalProgress() : me.progress),
                            u && u(me)
                        }
                      },
                      T + e * O,
                      r * O,
                      i * O
                    )
                  }
                } else Z.restart(!0)
              })
              .pause())),
          i && (Ze[i] = me),
          (ne = me.trigger = Ce(ne || oe)[0]),
          (oe = !0 === oe ? ne : Ce(oe)[0]),
          F(ee) && (ee = { targets: ne, className: ee }),
          oe &&
            (!1 === ie ||
              ie === je ||
              (ie = 'flex' !== ba(oe.parentNode).display && Re),
            (me.pin = oe),
            !1 !== y.force3D && xe.set(oe, { force3D: !0 }),
            (e = xe.core.getCache(oe)).spacer
              ? (A = e.pinState)
              : ((e.spacer = N = Te.createElement('div')),
                N.setAttribute(
                  'class',
                  'pin-spacer' + (i ? ' pin-spacer-' + i : '')
                ),
                (e.pinState = A = Ga(oe))),
            (me.spacer = N = e.spacer),
            (n = ba(oe)),
            (m = n[ie + K.os2]),
            (R = xe.getProperty(oe)),
            (v = xe.quickSetter(oe, K.a, qe)),
            Da(oe, N, n),
            (B = Ga(oe))),
          p &&
            ((t = I(p) ? da(p, Ye) : Ye),
            (M = oa('scroller-start', i, pe, K, t, 0)),
            (P = oa('scroller-end', i, pe, K, t, 0, M)),
            (r = M['offset' + K.op.d2]),
            (k = oa('start', i, pe, K, t, r)),
            (_ = oa('end', i, pe, K, t, r)),
            de ||
              ((function _makePositionable (e) {
                e.style.position =
                  'absolute' === ba(e).position ? 'absolute' : 'relative'
              })(pe),
              xe.set([M, P], { force3D: !0 }),
              (b = xe.quickSetter(M, K.a, qe)),
              (J = xe.quickSetter(P, K.a, qe)))),
          (me.revert = function (e) {
            var t = !1 !== e
            t !== w && (me.update(t), oe && t && Ca(oe, N, A), (w = t))
          }),
          (me.refresh = function (e) {
            if (!Me && $)
              if (oe && e && ze) ia(ScrollTrigger, 'scrollEnd', be)
              else {
                var t = Math.max(me.scroll(), me.scroll.rec || 0),
                  r = me.progress
                ;(Me = 1),
                  V && V.kill(),
                  ae && x && x.progress(0).invalidate().progress(me.progress),
                  w || me.revert()
                var n,
                  o,
                  i,
                  a,
                  s,
                  l,
                  c,
                  f = (de ? we['inner' + K.d2] : pe['client' + K.d2]) || 0,
                  u = de ? Ke : ea(pe),
                  p = E(pe, K),
                  d = 0,
                  g = 0,
                  h = y.end,
                  v = y.endTrigger || ne,
                  m = y.start || (oe || !ne ? '0 0' : '0 100%'),
                  b = (oe && Math.max(0, Ve.indexOf(me))) || 0
                if (b) for (l = b; l--; ) Ve[l].pin === oe && Ve[l].revert()
                if (
                  ((T =
                    Ja(m, ne, f, K, me.scroll(), k, M, me, u, ve, de, p) ||
                    (oe ? -0.001 : 0)),
                  G(h) && (h = h(me)),
                  F(h) &&
                    !h.indexOf('+=') &&
                    (~h.indexOf(' ')
                      ? (h = (F(m) ? m.split(' ')[0] : '') + h)
                      : ((d = na(h.substr(2), f)),
                        (h = F(m) ? m : T + d),
                        (v = ne))),
                  (S =
                    Math.max(
                      T,
                      Ja(
                        h || (v ? '100% 0' : p),
                        v,
                        f,
                        K,
                        me.scroll() + d,
                        _,
                        P,
                        me,
                        u,
                        ve,
                        de,
                        p
                      )
                    ) || -0.001),
                  (O = S - T || ((T -= 0.01) && 0.001)),
                  oe)
                ) {
                  for (l = b; l--; )
                    (c = Ve[l]).pin === oe &&
                      c.start - c._pinPush < T &&
                      (g += c.end - c.start)
                  if (
                    ((T += g),
                    (S += g),
                    (me._pinPush = g),
                    k && g && (((n = {})[K.a] = '+=' + g), xe.set([k, _], n)),
                    (n = ba(oe)),
                    (a = K === Xe),
                    (i = me.scroll()),
                    (j = parseFloat(R(K.a)) + g),
                    Da(oe, N, n),
                    (B = Ga(oe)),
                    (o = ea(oe, !0)),
                    ie &&
                      ((N.style[ie + K.os2] = O + g + qe),
                      (q = ie === Re ? fa(oe, K) + O + g : 0) &&
                        (N.style[K.d] = q + qe),
                      de && me.scroll(t)),
                    de &&
                      (((s = {
                        top: o.top + (a ? i - T : 0) + qe,
                        left: o.left + (a ? 0 : i - T) + qe,
                        boxSizing: 'border-box',
                        position: 'fixed'
                      })[Ie] = s.maxWidth =
                        Math.ceil(o.width) + qe),
                      (s[Le] = s['max' + We] = Math.ceil(o.height) + qe),
                      (s[je] =
                        s[je + Ge] =
                        s[je + De] =
                        s[je + Ne] =
                        s[je + Be] =
                          '0'),
                      (s[Re] = n[Re]),
                      (s[Re + Ge] = n[Re + Ge]),
                      (s[Re + De] = n[Re + De]),
                      (s[Re + Ne] = n[Re + Ne]),
                      (s[Re + Be] = n[Re + Be]),
                      (L = (function _copyState (e, t, r) {
                        for (
                          var n, o = [], i = e.length, a = r ? 8 : 0;
                          a < i;
                          a += 2
                        )
                          (n = e[a]), o.push(n, n in t ? t[n] : e[a + 1])
                        return (o.t = e.t), o
                      })(A, s, fe))),
                    x
                      ? (x.progress(1, !0),
                        (W = R(K.a) - j + O + g),
                        O !== W && L.splice(L.length - 2, 2),
                        x.progress(0, !0))
                      : (W = O),
                    b)
                  )
                    for (l = 0; l < b; l++) Ve[l].pin === oe && Ve[l].revert(!1)
                } else if (ne && me.scroll())
                  for (o = ne.parentNode; o && o !== Se; )
                    o._pinOffset && ((T -= o._pinOffset), (S -= o._pinOffset)),
                      (o = o.parentNode)
                ;(me.start = T),
                  (me.end = S),
                  me.scroll() < t && me.scroll(t),
                  me.revert(!1),
                  (Me = 0),
                  r !== me.progress &&
                    (V && x.totalProgress(r, !0),
                    (me.progress = r),
                    me.update()),
                  oe && ie && (N._pinOffset = Math.round(me.progress * W)),
                  re && re(me)
              }
          }),
          (me.getVelocity = function () {
            return ((me.scroll() - h) / (Oe() - _e)) * 1e3 || 0
          }),
          (me.update = function (e, t) {
            var r,
              n,
              o,
              i,
              a,
              s = me.scroll(),
              l = e ? 0 : (s - T) / O,
              c = l < 0 ? 0 : 1 < l ? 1 : l || 0,
              f = me.progress
            if (
              (t &&
                ((h = g),
                (g = s),
                ce && ((Y = X), (X = x && !ue ? x.totalProgress() : c))),
              se &&
                !c &&
                oe &&
                !Me &&
                T < s + ((s - h) / (Oe() - _e)) * se &&
                (c = 1e-4),
              c !== f && $)
            ) {
              if (
                ((i =
                  (a = (r = me.isActive = !!c && c < 1) != (!!f && f < 1)) ||
                  !!c != !!f),
                (me.direction = f < c ? 1 : -1),
                (me.progress = c),
                ue ||
                  (!V || Me || Ee
                    ? x && x.totalProgress(c, !!Me)
                    : ((V.vars.totalProgress = c), V.invalidate().restart())),
                oe)
              )
                if ((e && ie && (N.style[ie + K.os2] = m), de)) {
                  if (i) {
                    if (((o = !e && s + 1 >= E(pe, K)), fe)) {
                      if (!Me && (r || o)) {
                        var u = ea(oe, !0),
                          p = s - T
                        ;(oe.style.top = u.top + (K === Xe ? p : 0) + qe),
                          (oe.style.left = u.left + (K === Xe ? 0 : p) + qe)
                      }
                      !(function _reparent (e, t) {
                        if (e.parentNode !== t) {
                          var r,
                            n,
                            o = e.style
                          if (t === Se)
                            for (r in ((e._stOrig = o.cssText), (n = ba(e))))
                              +r ||
                                Qe.test(r) ||
                                !n[r] ||
                                'string' != typeof o[r] ||
                                '0' === r ||
                                (o[r] = n[r])
                          else o.cssText = e._stOrig
                          t.appendChild(e)
                        }
                      })(oe, Me || (!r && !o) ? N : Se)
                    }
                    $e(r || o ? L : B),
                      (W !== O && c < 1 && r) || v(j + (1 !== c || o ? 0 : W))
                  }
                } else v(j + W * c)
              !ce || d.tween || Me || Ee || ((U = ze), Z.restart(!0)),
                ee &&
                  a &&
                  (!le || r) &&
                  Ce(ee.targets).forEach(function (e) {
                    return e.classList[r ? 'add' : 'remove'](ee.className)
                  }),
                !Q || ue || e || Q(me),
                i && !Me
                  ? ((n = c && !f ? 0 : 1 === c ? 1 : 1 === f ? 2 : 3),
                    1 === c && le
                      ? me.kill()
                      : ue &&
                        ((o =
                          (!a && 'none' !== he[n + 1] && he[n + 1]) || he[n]),
                        x &&
                          ('complete' === o || 'reset' === o || o in x) &&
                          ('complete' === o
                            ? x.pause().totalProgress(1)
                            : 'reset' === o
                            ? x.restart(!0).pause()
                            : x[o]()),
                        Q && Q(me)),
                    (!a && Ee) ||
                      (te && a && te(me),
                      ge[n] && ge[n](me),
                      le && (ge[n] = 0),
                      a || (ge[(n = 1 === c ? 1 : 3)] && ge[n](me))))
                  : ue && Q && !Me && Q(me)
            }
            J && (b(s + (M._isFlipped ? 1 : 0)), J(s))
          }),
          (me.enable = function () {
            $ ||
              (($ = !0),
              ia(pe, 'resize', ua),
              ia(pe, 'scroll', ta),
              ye && ia(ScrollTrigger, 'refreshInit', ye),
              x &&
                (x.add
                  ? xe.delayedCall(0.01, me.refresh) &&
                    (O = 0.01) &&
                    (T = S = 0)
                  : me.refresh()))
          }),
          (me.disable = function (e) {
            if (
              $ &&
              (($ = me.isActive = !1),
              V && V.pause(),
              e !== $ && me.update(1),
              oe && Ca(oe, N, A),
              ye && ja(ScrollTrigger, 'refreshInit', ye),
              Z && (Z.pause(), d.tween && d.tween.kill()),
              !de)
            ) {
              for (var t = Ve.length; t--; )
                if (Ve[t].scroller === pe && Ve[t] !== me) return
              ja(pe, 'resize', ua), ja(pe, 'scroll', ta)
            }
          }),
          (me.kill = function (e) {
            me.disable(e),
              i && delete Ze[i],
              Ve.splice(Ve.indexOf(me), 1),
              x && (x.scrollTrigger = null)
          }),
          me.enable()
      } else this.update = this.refresh = this.kill = z
    }),
    (ScrollTrigger.register = function register (e) {
      if (
        ((xe = e || B()),
        A() &&
          window.document &&
          ((we = window),
          (Te = document),
          (x = Te.documentElement),
          (Se = Te.body)),
        xe &&
          ((Ce = xe.utils.toArray),
          (ke = xe.utils.clamp),
          xe.core.globals('ScrollTrigger', ScrollTrigger),
          Se))
      ) {
        ;(s =
          we.requestAnimationFrame ||
          function (e) {
            return setTimeout(e, 16)
          }),
          ia(we, 'mousewheel', ta),
          (i = [we, Te, x, Se]),
          ia(Te, 'scroll', ta)
        var t,
          r = Se.style,
          n = r.borderTop
        ;(r.borderTop = '1px solid #000'),
          (t = ea(Se)),
          (Xe.m = Math.round(t.top + Xe.sc()) || 0),
          (Je.m = Math.round(t.left + Je.sc()) || 0),
          n ? (r.borderTop = n) : r.removeProperty('border-top'),
          (c = setInterval(sa, 100)),
          xe.delayedCall(0.5, function () {
            return (Ee = 0)
          }),
          ia(Te, 'touchcancel', z),
          ia(Se, 'touchstart', z),
          ha(ia, Te, 'pointerdown,touchstart,mousedown', function () {
            return (Pe = 1)
          }),
          ha(ia, Te, 'pointerup,touchend,mouseup', function () {
            return (Pe = 0)
          }),
          (f = xe.utils.checkPrefix('transform')),
          S.push(f),
          (o = Oe()),
          (a = xe.delayedCall(0.2, ya).pause()),
          ia(Te, 'visibilitychange', function () {
            return Te.hidden || ya()
          }),
          ia(Te, 'DOMContentLoaded', ya),
          ia(we, 'load', function () {
            return ze || ya()
          }),
          ia(we, 'resize', ua)
      }
      return o
    }),
    (ScrollTrigger.defaults = function defaults (e) {
      for (var t in e) Ue[t] = e[t]
    }),
    (ScrollTrigger.kill = function kill () {
      ;(Fe = 0),
        Ve.slice(0).forEach(function (e) {
          return e.kill(1)
        })
    }),
    ScrollTrigger)
  function ScrollTrigger (e, t) {
    o ||
      ScrollTrigger.register(xe) ||
      console.warn('Please gsap.registerPlugin(ScrollTrigger)'),
      this.init(e, t)
  }
  ;(_.version = '3.3.3'),
    (_.create = function (e, t) {
      return new _(e, t)
    }),
    (_.refresh = function (e) {
      return e ? ua() : ya(!0)
    }),
    (_.update = m),
    (_.maxScroll = function (e, t) {
      return E(e, t ? Je : Xe)
    }),
    (_.getScrollFunc = function (e, t) {
      return (t = t ? Je : Xe) && (C(e) ? t.sc : D(e, t))
    }),
    (_.getById = function (e) {
      return Ze[e]
    }),
    (_.getAll = function () {
      return Ve.slice(0)
    }),
    (_.syncInterval = function (e) {
      return clearInterval(c) || ((c = e) && setInterval(sa, e))
    }),
    (_.isScrolling = function () {
      return !!ze
    }),
    (_.addEventListener = function (e, t) {
      var r = h[e] || (h[e] = [])
      ~r.indexOf(t) || r.push(t)
    }),
    (_.removeEventListener = function (e, t) {
      var r = h[e],
        n = r && r.indexOf(t)
      0 <= n && r.splice(n, 1)
    }),
    (_.batch = function (e, t) {
      function wg (e, t) {
        var r = [],
          n = [],
          o = xe
            .delayedCall(i, function () {
              t(r, n), (r = []), (n = [])
            })
            .pause()
        return function (e) {
          r.length || o.restart(!0),
            r.push(e.trigger),
            n.push(e),
            a <= r.length && o.progress(1)
        }
      }
      var r,
        n = [],
        o = {},
        i = t.interval || 0.016,
        a = t.batchMax || 1e9
      for (r in t)
        o[r] =
          'on' === r.substr(0, 2) && G(t[r]) && 'onRefreshInit' !== r
            ? wg(0, t[r])
            : t[r]
      return (
        G(a) &&
          ((a = a()),
          _.addEventListener('refresh', function () {
            return (a = t.batchMax())
          })),
        Ce(e).forEach(function (e) {
          var t = {}
          for (r in o) t[r] = o[r]
          ;(t.trigger = e), n.push(_.create(t))
        }),
        n
      )
    }),
    B() && xe.registerPlugin(_),
    (e.ScrollTrigger = _),
    (e.default = _)
  if (typeof window === 'undefined' || window !== e) {
    Object.defineProperty(e, '__esModule', { value: !0 })
  } else {
    delete e.default
  }
})

// custom-js
function nextPrev (e) {
  $(".form_submission input[name='name']").isValid() &&
    1 == e &&
    ($('.tab-1').hide(),
    $('.tab-2').show(),
    $('.tab-1-btn').hide(),
    $('.tab-2-btn').show()),
    $(".form_submission input[name='email']").isValid() &&
      2 == e &&
      ($('.tab-2').hide(),
      $('.tab-1').show(),
      $('.tab-2-btn').hide(),
      $('.tab-1-btn').show()),
    $(".form_submission input[name='email']").isValid() &&
      3 == e &&
      ($('.tab-2').hide(),
      $('.tab-3').show(),
      $('.tab-2-btn').hide(),
      $('.tab-3-btn').show()),
    $(".form_submission input[name='phone']").isValid() &&
      4 == e &&
      ($('.tab-3').hide(),
      $('.tab-2').show(),
      $('.tab-3-btn').hide(),
      $('.tab-2-btn').show())
}
function charLimit (e, t) {
  $(e).val().length > t && $(e).val($(e).val().substring(0, t))
}
function validateForm () {
  var e,
    t,
    a = !0
  for (
    e = document
      .getElementsByClassName('tab')
      [currentTab].getElementsByTagName('input'),
      t = 0;
    t < e.length;
    t++
  )
    '' == e[t].value && ((e[t].className += ' invalid'), (a = !1))
  return a
}
AOS.init({
  disable: function () {
    return window.innerWidth < 991
  }
}),
  document.addEventListener('DOMContentLoaded', function () {
    if ('IntersectionObserver' in window) {
      e = document.querySelectorAll('.lazy')
      var e,
        t,
        a = new IntersectionObserver(function (e, t) {
          e.forEach(function (e) {
            if (e.isIntersecting) {
              var t = e.target
              ;(t.src = t.dataset.src),
                t.classList.remove('lazy'),
                a.unobserve(t)
            }
          })
        })
      e.forEach(function (e) {
        a.observe(e)
      })
    } else {
      function s () {
        t && clearTimeout(t),
          (t = setTimeout(function () {
            var t = window.pageYOffset
            e.forEach(function (e) {
              e.offsetTop < window.innerHeight + t &&
                ((e.src = e.dataset.src), e.classList.remove('lazy'))
            }),
              0 == e.length &&
                (document.removeEventListener('scroll', s),
                window.removeEventListener('resize', s),
                window.removeEventListener('orientationChange', s))
          }, 20))
      }
      ;(e = document.querySelectorAll('.lazy')),
        document.addEventListener('scroll', s),
        window.addEventListener('resize', s),
        window.addEventListener('orientationChange', s)
    }
  }),
  ($.fn.isValid = function () {
    return this[0].checkValidity()
  }),
  $('#regForm').keypress(function (e) {
    var t = e.which
    return 13 == t && $('.tab-1').is(':visible')
      ? ($('.tab-1-btn.next').click(),
        $('.tab-2 input[type="email"]').focus(),
        !1)
      : 13 == t && $('.tab-2').is(':visible')
      ? ($('.tab-2-btn.next').click(),
        $('.tab-3 input[type="number"]').focus(),
        !1)
      : 13 == t && $('.tab-3').is(':visible')
      ? ($('.tab-3-btn.submit').click(), !1)
      : void 0
  }),
  $(document).ready(function () {
    $('.tab-3 input[type="number"]').on('input propertychange', function () {
      charLimit(this, 12)
    })
  }),
  $('.menuBlock li a span').hover(
    function () {
      $(this).parents('.detailHeader').addClass('default-color'),
        'Mobile Apps' == $(this).text()
          ? ($(this).parents('.detailHeader').css('background-color', '#fff'),
            $(this).parents('.detailHeader').addClass('color-white'))
          : 'Web Development' == $(this).text()
          ? ($(this)
              .parents('.detailHeader')
              .css('background-color', '#001129'),
            $(this).parents('.detailHeader').addClass('color-red'))
          : 'Branding' == $(this).text()
          ? ($(this).parents('.detailHeader').css('background-color', '#000'),
            $(this).parents('.detailHeader').addClass('color-black'))
          : 'Digital Marketing' == $(this).text()
          ? ($(this).parents('.detailHeader').css('background-color', '#fff'),
            $(this).parents('.detailHeader').addClass('color-white'))
          : 'Software Solutions' == $(this).text() &&
            ($(this)
              .parents('.detailHeader')
              .css('background-color', '#001129'),
            $(this).parents('.detailHeader').addClass('color-red'))
    },
    function () {
      $(this).parents('.detailHeader').addClass('default-color'),
        'Mobile Apps' == $(this).text()
          ? $(this).parents('.detailHeader').removeClass('color-white')
          : 'Web Development' == $(this).text()
          ? $(this).parents('.detailHeader').removeClass('color-red')
          : 'Branding' == $(this).text()
          ? $(this).parents('.detailHeader').removeClass('color-black')
          : 'Digital Marketing' == $(this).text()
          ? $(this).parents('.detailHeader').removeClass('color-white')
          : 'Software Solutions' == $(this).text() &&
            $(this).parents('.detailHeader').removeClass('color-red'),
        $(this).parents('.detailHeader').css('background-color', '#fff')
    }
  ),
  $('.navicon .nav-toggle').on('click', function () {
    $(this).toggleClass('active'),
      $('.detailHeader').toggleClass('active'),
      $('body').toggleClass('headerOpen')
  }),
  $().scroll(function () {
    $(this).scrollTop() > 50
      ? $('.main-header').addClass('newClass')
      : $('.main-header').removeClass('newClass')
  }),
  $(document).scroll(function () {
    'use strict'
    $(this).scrollTop() > 800
      ? ($('.floating_wrap').addClass('visible'),
        $('.floatbutton').addClass('visible'))
      : ($('.floating_wrap').removeClass('visible'),
        $('.floatbutton').removeClass('visible'),
        $('.floatbutton').removeClass('active'))
  }),
  $('.floating_strip .rotate_box a').on('click', function (e) {
    $('.floating_form').toggleClass('open'),
      $('body').toggleClass('scroll'),
      e.preventDefault()
  }),
  $('.floating_wrap .floating_strip').click(function (e) {
    $(this).parent().toggleClass('active'),
      $('.formOverlaySide').toggleClass('active'),
      e.stopPropagation()
  }),
  $('.popupBox').click(function () {
    var e = $(this).parents('.packagebox').find('.price').text(),
      t = $(this).parents('.packagebox').find('.title').text()
    $('#getQuote input[name="price"]').val(e),
      $('#getQuote input[name="title"]').val(t),
      $('#getQuote').modal('show')
  }),
  $('.trust-scroll').slimScroll({
    size: '5px',
    width: '100%',
    height: '100px',
    color: '#ccc',
    opacity: '1',
    allowPageScroll: !0,
    alwaysVisible: !0
  }),
  gsap.registerPlugin(ScrollTrigger)
let revealContainers = document.querySelectorAll('.main-banner')
revealContainers.forEach(e => {
  let t = e.querySelectorAll('.banner_box')
  ;(bannerClr = e.querySelectorAll('.bannerClr_overlay')),
    (bannerImg = e.querySelectorAll('.bannerImg_overlay')),
    (boxAnim = e.querySelectorAll('.box-anim-elm')),
    gsap
      .timeline({
        scrollTrigger: { trigger: e, toggleActions: 'play none none none' }
      })
      .set(bannerImg, { scale: 1.3, transformOrigin: 'top left' })
      .set(boxAnim, { y: -20, opacity: 0 })
      .to(t, { x: 0, duration: 2, ease: Power4.easeInOut })
      .to(bannerClr, { x: '100%', duration: 1.2 }, '=-0.5')
      .to(
        bannerImg,
        { scale: 1, duration: 1.1, borderBottomRightRadius: 200 },
        '=-0.4'
      )
      .to(boxAnim, { y: 0, opacity: 1, stagger: 0.3, delay: 0.1 }, '=-0.8')
}),
  $('.trustpilot-slider').owlCarousel({
    loop: !1,
    rewind: !0,
    margin: 20,
    nav: !1,
    dots: !1,
    autoplay: !0,
    autoplayTimeout: 4e3,
    autoplayHoverPause: !0,
    responsive: {
      0: { items: 1 },
      575: { items: 2 },
      991: { items: 3 },
      1024: { items: 4 },
      1200: { items: 5 }
    }
  }),
  $('.case-study-slider').owlCarousel({
    loop: !1,
    rewind: !0,
    margin: 20,
    nav: !0,
    navText: [
      '<i class="far fa-arrow-alt-circle-left"></i>',
      '<i class="far fa-arrow-alt-circle-right"></i>'
    ],
    dots: !1,
    autoplay: !0,
    autoplayTimeout: 6e3,
    autoplayHoverPause: !1,
    responsive: {
      0: { items: 1 },
      575: { items: 1 },
      991: { items: 1 },
      1024: { items: 1 },
      1200: { items: 1 }
    }
  }),
  992 >= $(window).width() &&
    ($('.banner-review-slider').addClass('owl-carousel owl-theme'),
    $('.banner-review-slider').owlCarousel({
      loop: !1,
      rewind: !0,
      margin: 20,
      nav: !1,
      dots: !0,
      autoplay: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      mouseDrag: !0,
      responsive: {
        0: { items: 1 },
        460: { items: 2 },
        767: { items: 2 },
        991: { items: 3 }
      }
    })),
  992 >= $(window).width() &&
    ($('.services-responsive-slider').addClass('owl-carousel owl-theme'),
    $('.services-responsive-slider').owlCarousel({
      loop: !1,
      rewind: !0,
      margin: 0,
      nav: !1,
      dots: !0,
      autoplay: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      mouseDrag: !0,
      responsive: {
        0: { items: 1 },
        460: { items: 1 },
        767: { items: 2 },
        991: { items: 2 }
      }
    })),
  992 >= $(window).width() &&
    ($('.industry-responsive-slider').addClass('owl-carousel owl-theme'),
    $('.industry-responsive-slider').owlCarousel({
      loop: !1,
      rewind: !0,
      margin: 0,
      nav: !1,
      dots: !0,
      autoplay: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      mouseDrag: !0,
      responsive: {
        0: { items: 1 },
        460: { items: 1 },
        767: { items: 2 },
        991: { items: 3 }
      }
    })),
  992 >= $(window).width() &&
    ($('.technology-responsive-slider').addClass('owl-carousel owl-theme'),
    $('.technology-responsive-slider').owlCarousel({
      loop: !1,
      rewind: !0,
      margin: 0,
      nav: !1,
      dots: !1,
      autoplay: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      mouseDrag: !0,
      responsive: {
        0: { items: 2 },
        460: { items: 2 },
        767: { items: 4 },
        991: { items: 5 }
      }
    })),
  $('.visually-slider-wrap').owlCarousel({
    loop: !1,
    rewind: !0,
    margin: 0,
    nav: !0,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>'
    ],
    dots: !1,
    autoplay: !0,
    autoplayTimeout: 4e3,
    autoplayHoverPause: !0,
    responsive: {
      0: { items: 1 },
      575: { items: 1 },
      991: { items: 1 },
      1024: { items: 1 },
      1200: { items: 1 }
    }
  }),
  $('.smarter-slider-wrapp').owlCarousel({
    stagePadding: 0,
    loop: !1,
    rewind: !0,
    margin: 10,
    nav: !0,
    navText: [
      "<i class='fas fa-arrow-left'></i>",
      "<i class='fas fa-arrow-right'></i>"
    ],
    dots: !1,
    responsive: {
      0: { items: 1 },
      767: { items: 2 },
      992: { items: 2 },
      1400: { items: 3 }
    }
  }),
  992 >= $(window).width() &&
    ($('.inner-about-choose-slider').addClass('owl-carousel owl-theme'),
    $('.inner-about-choose-slider').owlCarousel({
      loop: !1,
      rewind: !0,
      margin: 0,
      nav: !1,
      dots: !0,
      autoplay: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      mouseDrag: !0,
      responsive: {
        0: { items: 1 },
        460: { items: 1 },
        767: { items: 1 },
        991: { items: 2 }
      }
    })),
  992 >= $(window).width() &&
    ($('.inner-about-review-slider').addClass('owl-carousel owl-theme'),
    $('.inner-about-review-slider').owlCarousel({
      loop: !1,
      rewind: !0,
      margin: 20,
      nav: !1,
      dots: !0,
      autoplay: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      mouseDrag: !0,
      responsive: {
        0: { items: 1 },
        460: { items: 1 },
        767: { items: 2 },
        991: { items: 2 }
      }
    })),
  992 >= $(window).width() &&
    ($('.mobile-app-box-slider').addClass('owl-carousel owl-theme'),
    $('.mobile-app-box-slider').owlCarousel({
      loop: !1,
      rewind: !0,
      margin: 20,
      nav: !1,
      dots: !0,
      autoplay: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      mouseDrag: !0,
      responsive: {
        0: { items: 1 },
        460: { items: 1 },
        767: { items: 2 },
        991: { items: 2 }
      }
    })),
  992 >= $(window).width() &&
    ($('.result-responsive-slider').addClass('owl-carousel owl-theme'),
    $('.result-responsive-slider').owlCarousel({
      loop: !1,
      rewind: !0,
      margin: 20,
      nav: !1,
      dots: !0,
      autoplay: !1,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      mouseDrag: !0,
      responsive: {
        0: { items: 1 },
        460: { items: 1 },
        767: { items: 1 },
        991: { items: 1 }
      }
    })),
  992 >= $(window).width() &&
    ($('.modules-responsive-slider').addClass('owl-carousel owl-theme'),
    $('.modules-responsive-slider').owlCarousel({
      loop: !1,
      rewind: !0,
      margin: 20,
      nav: !1,
      dots: !0,
      autoplay: !1,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      mouseDrag: !0,
      responsive: {
        0: { items: 1 },
        460: { items: 1 },
        767: { items: 1 },
        991: { items: 1 }
      }
    })),
  992 >= $(window).width() &&
    ($('.service-box-slider').addClass('owl-carousel owl-theme'),
    $('.service-box-slider').owlCarousel({
      loop: !1,
      rewind: !0,
      margin: 0,
      nav: !1,
      dots: !0,
      autoplay: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      mouseDrag: !0,
      responsive: {
        0: { items: 1 },
        460: { items: 1 },
        767: { items: 2 },
        991: { items: 2 }
      }
    })),
  992 >= $(window).width() &&
    ($('.case-study-client-responsive').addClass('owl-carousel owl-theme'),
    $('.case-study-client-responsive').owlCarousel({
      loop: !1,
      rewind: !0,
      margin: 0,
      nav: !1,
      dots: !0,
      autoplay: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      mouseDrag: !0,
      responsive: {
        0: { items: 1 },
        460: { items: 1 },
        767: { items: 2 },
        991: { items: 3 }
      }
    })),
  992 >= $(window).width() &&
    ($('.developer-responsive-slider').addClass('owl-carousel owl-theme'),
    $('.developer-responsive-slider').owlCarousel({
      loop: !1,
      rewind: !0,
      margin: 0,
      nav: !1,
      dots: !0,
      autoplay: !0,
      autoplayTimeout: 3e3,
      autoplayHoverPause: !0,
      mouseDrag: !0,
      responsive: {
        0: { items: 1 },
        460: { items: 2 },
        767: { items: 3 },
        991: { items: 3 }
      }
    })),
  $('.location_slider').owlCarousel({
    loop: !0,
    margin: 0,
    nav: !1,
    dots: !0,
    autoplay: !0,
    autoplayTimeout: 4e3,
    autoplayHoverPause: !0,
    responsive: { 0: { items: 1 } }
  }),
  $('.banner_slider').owlCarousel({
    loop: !0,
    margin: 0,
    nav: !1,
    dots: !0,
    mouseDrag: !1,
    animateOut: 'fadeOut',
    autoplay: !0,
    autoplayTimeout: 7e3,
    autoplayHoverPause: !1,
    responsive: { 0: { items: 1 } }
  })