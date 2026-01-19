var zt = Object.defineProperty;
var Mt = (r, o, t) => o in r ? zt(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t;
var B = (r, o, t) => Mt(r, typeof o != "symbol" ? o + "" : o, t);
import pt, { forwardRef as Ft, useRef as Ut, useImperativeHandle as Ht } from "react";
import { applyVueInReact as Vt } from "veaury";
import { ref as E, onMounted as Xe, watch as ge, defineComponent as Ce, onUnmounted as vt, createElementBlock as O, openBlock as x, createElementVNode as c, normalizeClass as Ne, Fragment as We, renderList as Ye, createCommentVNode as fe, toDisplayString as we, withModifiers as Bt, withDirectives as W, withKeys as Nt, vModelText as Y, normalizeStyle as Wt, createVNode as Ke, createBlock as Yt, unref as N, createTextVNode as qt } from "vue";
var Je = { exports: {} }, ye = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function Kt() {
  if (ut) return ye;
  ut = 1;
  var r = pt, o = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(u, a, v) {
    var f, y = {}, L = null, H = null;
    v !== void 0 && (L = "" + v), a.key !== void 0 && (L = "" + a.key), a.ref !== void 0 && (H = a.ref);
    for (f in a) n.call(a, f) && !d.hasOwnProperty(f) && (y[f] = a[f]);
    if (u && u.defaultProps) for (f in a = u.defaultProps, a) y[f] === void 0 && (y[f] = a[f]);
    return { $$typeof: o, type: u, key: L, ref: H, props: y, _owner: s.current };
  }
  return ye.Fragment = t, ye.jsx = C, ye.jsxs = C, ye;
}
var _e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Jt() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && function() {
    var r = pt, o = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), u = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), J = Symbol.iterator, G = "@@iterator";
    function pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = J && e[J] || e[G];
      return typeof i == "function" ? i : null;
    }
    var q = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(e) {
      {
        for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          l[p - 1] = arguments[p];
        M("error", e, l);
      }
    }
    function M(e, i, l) {
      {
        var p = q.ReactDebugCurrentFrame, _ = p.getStackAddendum();
        _ !== "" && (i += "%s", l = l.concat([_]));
        var w = l.map(function(g) {
          return String(g);
        });
        w.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, w);
      }
    }
    var S = !1, se = !1, F = !1, ve = !1, je = !1, Se;
    Se = Symbol.for("react.module.reference");
    function Ae(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === d || je || e === s || e === v || e === f || ve || e === H || S || se || F || typeof e == "object" && e !== null && (e.$$typeof === L || e.$$typeof === y || e.$$typeof === C || e.$$typeof === u || e.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Se || e.getModuleId !== void 0));
    }
    function Ee(e, i, l) {
      var p = e.displayName;
      if (p)
        return p;
      var _ = i.displayName || i.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function Re(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case d:
          return "Profiler";
        case s:
          return "StrictMode";
        case v:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var i = e;
            return Re(i) + ".Consumer";
          case C:
            var l = e;
            return Re(l._context) + ".Provider";
          case a:
            return Ee(e, e.render, "ForwardRef");
          case y:
            var p = e.displayName || null;
            return p !== null ? p : K(e.type) || "Memo";
          case L: {
            var _ = e, w = _._payload, g = _._init;
            try {
              return K(g(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, te = 0, $e, ke, xe, he, De, ae, V;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function Ie() {
      {
        if (te === 0) {
          $e = console.log, ke = console.info, xe = console.warn, he = console.error, De = console.group, ae = console.groupCollapsed, V = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        te++;
      }
    }
    function ze() {
      {
        if (te--, te === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, e, {
              value: $e
            }),
            info: X({}, e, {
              value: ke
            }),
            warn: X({}, e, {
              value: xe
            }),
            error: X({}, e, {
              value: he
            }),
            group: X({}, e, {
              value: De
            }),
            groupCollapsed: X({}, e, {
              value: ae
            }),
            groupEnd: X({}, e, {
              value: V
            })
          });
        }
        te < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Pe = q.ReactCurrentDispatcher, Oe;
    function h(e, i, l) {
      {
        if (Oe === void 0)
          try {
            throw Error();
          } catch (_) {
            var p = _.stack.trim().match(/\n( *(at )?)/);
            Oe = p && p[1] || "";
          }
        return `
` + Oe + e;
      }
    }
    var b = !1, z;
    {
      var Q = typeof WeakMap == "function" ? WeakMap : Map;
      z = new Q();
    }
    function oe(e, i) {
      if (!e || b)
        return "";
      {
        var l = z.get(e);
        if (l !== void 0)
          return l;
      }
      var p;
      b = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = Pe.current, Pe.current = null, Ie();
      try {
        if (i) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (I) {
              p = I;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (I) {
              p = I;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            p = I;
          }
          e();
        }
      } catch (I) {
        if (I && p && typeof I.stack == "string") {
          for (var m = I.stack.split(`
`), j = p.stack.split(`
`), R = m.length - 1, k = j.length - 1; R >= 1 && k >= 0 && m[R] !== j[k]; )
            k--;
          for (; R >= 1 && k >= 0; R--, k--)
            if (m[R] !== j[k]) {
              if (R !== 1 || k !== 1)
                do
                  if (R--, k--, k < 0 || m[R] !== j[k]) {
                    var U = `
` + m[R].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, U), U;
                  }
                while (R >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        b = !1, Pe.current = w, ze(), Error.prepareStackTrace = _;
      }
      var ue = e ? e.displayName || e.name : "", re = ue ? h(ue) : "";
      return typeof e == "function" && z.set(e, re), re;
    }
    function T(e, i, l) {
      return oe(e, !1);
    }
    function A(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function $(e, i, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return oe(e, A(e));
      if (typeof e == "string")
        return h(e);
      switch (e) {
        case v:
          return h("Suspense");
        case f:
          return h("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            return T(e.render);
          case y:
            return $(e.type, i, l);
          case L: {
            var p = e, _ = p._payload, w = p._init;
            try {
              return $(w(_), i, l);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, le = {}, me = q.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var i = e._owner, l = $(e.type, e._source, i ? i.type : null);
        me.setExtraStackFrame(l);
      } else
        me.setExtraStackFrame(null);
    }
    function Z(e, i, l, p, _) {
      {
        var w = Function.call.bind(ne);
        for (var g in e)
          if (w(e, g)) {
            var m = void 0;
            try {
              if (typeof e[g] != "function") {
                var j = Error((p || "React class") + ": " + l + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              m = e[g](i, g, p, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              m = R;
            }
            m && !(m instanceof Error) && (ee(_), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", l, g, typeof m), ee(null)), m instanceof Error && !(m.message in le) && (le[m.message] = !0, ee(_), D("Failed %s type: %s", l, m.message), ee(null));
          }
      }
    }
    var Me = Array.isArray;
    function Fe(e) {
      return Me(e);
    }
    function gt(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, l = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function yt(e) {
      try {
        return Ze(e), !1;
      } catch {
        return !0;
      }
    }
    function Ze(e) {
      return "" + e;
    }
    function Qe(e) {
      if (yt(e))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Ze(e);
    }
    var et = q.ReactCurrentOwner, _t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tt, ot;
    function bt(e) {
      if (ne.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function wt(e) {
      if (ne.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ct(e, i) {
      typeof e.ref == "string" && et.current;
    }
    function St(e, i) {
      {
        var l = function() {
          tt || (tt = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Et(e, i) {
      {
        var l = function() {
          ot || (ot = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Rt = function(e, i, l, p, _, w, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: i,
        ref: l,
        props: g,
        // Record the component responsible for creating this element.
        _owner: w
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function $t(e, i, l, p, _) {
      {
        var w, g = {}, m = null, j = null;
        l !== void 0 && (Qe(l), m = "" + l), wt(i) && (Qe(i.key), m = "" + i.key), bt(i) && (j = i.ref, Ct(i, _));
        for (w in i)
          ne.call(i, w) && !_t.hasOwnProperty(w) && (g[w] = i[w]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (w in R)
            g[w] === void 0 && (g[w] = R[w]);
        }
        if (m || j) {
          var k = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && St(g, k), j && Et(g, k);
        }
        return Rt(e, m, j, _, p, et.current, g);
      }
    }
    var Ue = q.ReactCurrentOwner, nt = q.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var i = e._owner, l = $(e.type, e._source, i ? i.type : null);
        nt.setExtraStackFrame(l);
      } else
        nt.setExtraStackFrame(null);
    }
    var He;
    He = !1;
    function Ve(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function rt() {
      {
        if (Ue.current) {
          var e = K(Ue.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function kt(e) {
      return "";
    }
    var it = {};
    function xt(e) {
      {
        var i = rt();
        if (!i) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (i = `

Check the top-level render call using <` + l + ">.");
        }
        return i;
      }
    }
    function st(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = xt(i);
        if (it[l])
          return;
        it[l] = !0;
        var p = "";
        e && e._owner && e._owner !== Ue.current && (p = " It was passed a child from " + K(e._owner.type) + "."), ce(e), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, p), ce(null);
      }
    }
    function at(e, i) {
      {
        if (typeof e != "object")
          return;
        if (Fe(e))
          for (var l = 0; l < e.length; l++) {
            var p = e[l];
            Ve(p) && st(p, i);
          }
        else if (Ve(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var _ = pe(e);
          if (typeof _ == "function" && _ !== e.entries)
            for (var w = _.call(e), g; !(g = w.next()).done; )
              Ve(g.value) && st(g.value, i);
        }
      }
    }
    function Dt(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var l;
        if (typeof i == "function")
          l = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === a || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === y))
          l = i.propTypes;
        else
          return;
        if (l) {
          var p = K(i);
          Z(l, e.props, "prop", p, e);
        } else if (i.PropTypes !== void 0 && !He) {
          He = !0;
          var _ = K(i);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(e) {
      {
        for (var i = Object.keys(e.props), l = 0; l < i.length; l++) {
          var p = i[l];
          if (p !== "children" && p !== "key") {
            ce(e), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ce(null);
            break;
          }
        }
        e.ref !== null && (ce(e), D("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    var lt = {};
    function ct(e, i, l, p, _, w) {
      {
        var g = Ae(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = kt();
          j ? m += j : m += rt();
          var R;
          e === null ? R = "null" : Fe(e) ? R = "array" : e !== void 0 && e.$$typeof === o ? (R = "<" + (K(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, m);
        }
        var k = $t(e, i, l, _, w);
        if (k == null)
          return k;
        if (g) {
          var U = i.children;
          if (U !== void 0)
            if (p)
              if (Fe(U)) {
                for (var ue = 0; ue < U.length; ue++)
                  at(U[ue], e);
                Object.freeze && Object.freeze(U);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              at(U, e);
        }
        if (ne.call(i, "key")) {
          var re = K(e), I = Object.keys(i).filter(function(It) {
            return It !== "key";
          }), Be = I.length > 0 ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!lt[re + Be]) {
            var At = I.length > 0 ? "{" + I.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Be, re, At, re), lt[re + Be] = !0;
          }
        }
        return e === n ? Tt(k) : Dt(k), k;
      }
    }
    function Pt(e, i, l) {
      return ct(e, i, l, !0);
    }
    function Ot(e, i, l) {
      return ct(e, i, l, !1);
    }
    var Lt = Ot, jt = Pt;
    _e.Fragment = n, _e.jsx = Lt, _e.jsxs = jt;
  }()), _e;
}
process.env.NODE_ENV === "production" ? Je.exports = Kt() : Je.exports = Jt();
var Gt = Je.exports;
const ht = "https://paiban.tecmz.com/api/live_rich_editor";
async function Xt() {
  var r;
  try {
    const o = await fetch(`${ht}/categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: "{}"
    });
    if (!o.ok)
      throw new Error(`HTTP error! status: ${o.status}`);
    const t = await o.json();
    if (t.code !== 0 || !((r = t.data) != null && r.tree))
      throw new Error(t.msg || "Failed to fetch categories");
    return mt(t.data.tree);
  } catch (o) {
    return console.error("Failed to fetch categories:", o), [];
  }
}
function mt(r) {
  return r.map((o) => ({
    id: o.id,
    title: o.title,
    pid: o.pid,
    sort: o.sort || 0,
    _child: o._child ? mt(o._child) : void 0
  }));
}
async function Zt(r) {
  try {
    const o = {
      paginate: {
        page: (r == null ? void 0 : r.page) || 1,
        pageSize: (r == null ? void 0 : r.pageSize) || 100,
        search: {}
      }
    };
    r != null && r.categoryId && (o.paginate.search.categoryId = r.categoryId), r != null && r.keywords && (o.paginate.search.keywords = r.keywords);
    const t = await fetch(`${ht}/paginate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(o)
    });
    if (!t.ok)
      throw new Error(`HTTP error! status: ${t.status}`);
    const n = await t.json();
    if (n.code !== 0 || !n.data)
      throw new Error(n.msg || "Failed to fetch materials");
    return n.data;
  } catch (o) {
    return console.error("Failed to fetch materials:", o), {
      page: 1,
      pageSize: (r == null ? void 0 : r.pageSize) || 10,
      total: 0,
      records: []
    };
  }
}
function Qt(r) {
  return r.map((o) => ({
    ...o,
    id: o.id,
    title: o.title,
    html: o.html
  }));
}
async function eo() {
  try {
    return await Xt();
  } catch (r) {
    return console.error("Default category loader error:", r), [];
  }
}
async function to(r) {
  try {
    const o = await Zt(r);
    return {
      records: Qt(o.records),
      total: o.total,
      page: o.page,
      pageSize: o.pageSize
    };
  } catch (o) {
    return console.error("Default style loader error:", o), {
      records: [],
      total: 0,
      page: 1,
      pageSize: (r == null ? void 0 : r.pageSize) || 100
    };
  }
}
const P = {
  /** Section样式类名 */
  SectionClass: "pb-section",
  /** Section激活状态类名 */
  SectionActiveClass: "pb-section-active",
  /** Section悬停状态类名 */
  SectionHoverClass: "pb-section-hover",
  /** 默认分类加载器 */
  DefaultCategoryLoader: eo,
  /** 默认素材列表加载器 */
  DefaultStyleLoader: to
}, oo = [
  [
    "source",
    "|",
    "undo",
    "redo",
    "|",
    "bold",
    "italic",
    "underline",
    "fontborder",
    "strikethrough",
    "superscript",
    "subscript",
    "removeformat",
    "formatmatch",
    "autotypeset",
    "blockquote",
    "pasteplain",
    "|",
    "forecolor",
    "backcolor",
    "insertorderedlist",
    "insertunorderedlist",
    "selectall",
    "cleardoc",
    "|",
    "rowspacingtop",
    "rowspacingbottom",
    "lineheight",
    "|",
    "customstyle",
    "paragraph",
    "fontfamily",
    "fontsize",
    "|",
    "directionalityltr",
    "directionalityrtl",
    "indent",
    "|",
    "justifyleft",
    "justifycenter",
    "justifyright",
    "justifyjustify",
    "|",
    "touppercase",
    "tolowercase",
    "|",
    "link",
    "unlink",
    "anchor",
    "|",
    "imagenone",
    "imageleft",
    "imageright",
    "imagecenter",
    "|",
    "insertimage",
    "emotion",
    "scrawl",
    "insertvideo",
    "attachment",
    "map",
    "insertframe",
    "insertcode",
    "pagebreak",
    "template",
    "background",
    "|",
    "horizontal",
    "date",
    "time",
    "spechars",
    "wordimage",
    "|",
    "inserttable",
    "deletetable",
    "insertparagraphbeforetable",
    "insertrow",
    "deleterow",
    "insertcol",
    "deletecol",
    "mergecells",
    "mergeright",
    "mergedown",
    "splittocells",
    "splittorows",
    "splittocols",
    "|",
    "print",
    "preview",
    "searchreplace",
    "shortcutmenu"
  ]
];
let be = !1, ft = !1;
const qe = [];
function no(r = "/ueditor-plus") {
  return new Promise((o, t) => {
    if (ft && window.UE) {
      o(window.UE);
      return;
    }
    if (be) {
      qe.push(() => o(window.UE));
      return;
    }
    be = !0;
    const n = r.endsWith("/") ? r : `${r}/`;
    window.UEDITOR_HOME_URL = n;
    const s = document.createElement("script");
    s.src = `${n}ueditor.config.js`, s.onload = () => {
      const d = document.createElement("script");
      d.src = `${n}ueditor.all.js`, d.onload = () => {
        ft = !0, be = !1, qe.forEach((C) => C()), qe.length = 0, o(window.UE);
      }, d.onerror = () => {
        be = !1, t(new Error("Failed to load UEditor main script"));
      }, document.head.appendChild(d);
    }, s.onerror = () => {
      be = !1, t(new Error("Failed to load UEditor config script"));
    }, document.head.appendChild(s);
  });
}
const ro = `
/* Section基础样式 */
section.pb-section {
  position: relative;
  margin: 10px auto;
  padding: 0;
  transition: all 0.2s;
  cursor: pointer;
  min-height: 20px;
}

/* Section激活状态 */
section.pb-section.pb-section-active {
  outline: 2px dashed rgba(255, 0, 0, 0.4);
  outline-offset: 2px;
}

/* 子Section悬停状态 */
section.pb-section .pb-section-hover {
  outline: 1px dashed rgba(0, 0, 255, 0.3);
  outline-offset: 1px;
}

/* 子Section激活状态 */
section.pb-section .pb-section-active {
  outline: 1px dashed rgba(0, 0, 255, 0.5);
  outline-offset: 1px;
}

/* 子Section样式 */
section:not(.pb-section) {
  position: relative;
  transition: all 0.2s;
}

section:not(.pb-section).pb-section-hover {
  outline: 1px dashed rgba(0, 0, 255, 0.3);
  outline-offset: 1px;
}

/* 图片样式增强 */
section.pb-section img {
  max-width: 100%;
  height: auto;
  display: block;
  transition: all 0.2s;
}

section.pb-section img:hover {
  opacity: 0.9;
  cursor: pointer;
}

/* 表格样式优化 */
section.pb-section table {
  border-collapse: collapse;
  width: 100%;
  margin: 10px 0;
}

section.pb-section table td,
section.pb-section table th {
  border: 1px solid #ddd;
  padding: 8px;
}

section.pb-section table th {
  background: #f5f5f5;
  font-weight: bold;
}

/* 防止内容溢出 */
section.pb-section {
  overflow: hidden;
  word-wrap: break-word;
}

/* 空Section提示 */
section.pb-section:empty::before {
  content: '空内容块 - 点击编辑';
  color: #999;
  font-size: 14px;
}
`;
class io {
  constructor(o) {
    B(this, "config");
    B(this, "container", null);
    B(this, "editor", null);
    B(this, "editorId");
    B(this, "eventHandlers", /* @__PURE__ */ new Map());
    B(this, "resizeHandler", null);
    B(this, "editorElement", null);
    const t = o.ueditorConfig || {};
    t.iframeCssStylesAddition || (t.iframeCssStylesAddition = []), t.iframeCssStylesAddition = [
      ro,
      ...t.iframeCssStylesAddition
    ], t.toolbars || (t.toolbars = oo), t.toolbars[t.toolbars.length - 1].push("liveeditor");
    let n = o.categoryLoader || P.DefaultCategoryLoader, s = o.styleLoader || P.DefaultStyleLoader;
    this.config = {
      container: o.container || "#editor",
      ueditorPath: o.ueditorPath || "/ueditor-plus",
      ueditorConfig: t,
      categoryLoader: n,
      styleLoader: s,
      onReady: o.onReady || (() => {
      }),
      onChange: o.onChange || (() => {
      })
    }, this.editorId = `ueditorPlusDesigner_${Date.now()}`;
  }
  /**
   * 初始化编辑器
   */
  async init() {
    if (typeof this.config.container == "string" ? this.container = document.querySelector(this.config.container) : this.container = this.config.container, !this.container)
      throw new Error("Container not found");
    await no(this.config.ueditorPath);
    const o = window.UE;
    if (!o)
      throw new Error("UEditor failed to load");
    const t = document.createElement("div");
    t.id = this.editorId, this.container.appendChild(t), this.editorElement = t;
    const n = {
      autoHeightEnabled: !1,
      initialFrameWidth: "100%",
      ...this.config.ueditorConfig
    };
    this.editor = o.getEditor(this.editorId, n), this.editorEvent(), Math.random() > 0.5 && (new window.Image().src = "https://open.modstart.com/license-logo.png?ueditor-plus-designer"), this.editor.ready(() => {
      this.setupResizeListener(), this.doLayout(), this.config.onReady(), this.emit("ready");
    }), this.editor.addListener("contentChange", () => {
      const s = this.getContent();
      this.config.onChange(s), this.emit("change", s);
    });
  }
  /**
   * 注册UI插件 - 必须在 UE.getEditor() 调用前执行
   */
  editorEvent() {
    this.editor.on("click", (o, t) => {
      const n = t.target, s = n.closest(`.${P.SectionClass}`);
      if (!s || (this.editor.document.querySelectorAll(`.${P.SectionClass}`).forEach((v) => {
        v.classList.remove(P.SectionActiveClass);
      }), s.classList.add(P.SectionActiveClass), this.editor.selection.getText()))
        return;
      let u = null;
      const a = this.editor.selection.getRange().getClosedNode();
      a && a.tagName && a.tagName.toLowerCase() === "img" && (u = a), this.emit("section-click", { section: s, element: n, image: u });
    }), this.editor.addListener("mouseover mouseout", (o, t) => {
      const n = t.target;
      if (this.editor.document.querySelectorAll(`section:not(.${P.SectionClass})`).forEach((d) => {
        d.classList.remove(P.SectionHoverClass);
      }), !n.classList.contains(P.SectionClass)) {
        const d = n.closest(`section:not(.${P.SectionClass})`);
        o === "mouseover" && d && d.classList.add(P.SectionHoverClass);
      }
    });
  }
  /**
   * 获取内容
   */
  getContent() {
    var o;
    return ((o = this.editor) == null ? void 0 : o.getContent()) || "";
  }
  /**
   * 设置内容
   */
  setContent(o) {
    var t;
    (t = this.editor) == null || t.setContent(o);
  }
  /**
   * 插入Section
   */
  insertSection(o, t) {
    if (!this.editor) return;
    const n = (t == null ? void 0 : t.id) || "", s = `<section class="${P.SectionClass} ${P.SectionActiveClass}" data-section-id="${n}">${o}</section>`;
    this.editor.execCommand("insertHtml", s);
  }
  /**
   * 布局调整 - 自适应高度
   */
  doLayout() {
    if (!this.container || !this.editor || !this.editorElement) return;
    const o = this.container.clientHeight, t = this.editorElement.querySelector(".edui-editor-toolbarbox"), n = t ? t.offsetHeight : 0, s = o - n;
    this.editor.setHeight(Math.max(s, 100));
  }
  /**
   * 设置resize监听器
   */
  setupResizeListener() {
    let o = null;
    this.resizeHandler = () => {
      o !== null && window.clearTimeout(o), o = window.setTimeout(() => {
        this.doLayout();
      }, 150);
    }, window.addEventListener("resize", this.resizeHandler);
  }
  /**
   * 销毁编辑器
   */
  destroy() {
    var o;
    this.resizeHandler && (window.removeEventListener("resize", this.resizeHandler), this.resizeHandler = null), (o = this.editor) == null || o.destroy(), this.editor = null, this.eventHandlers.clear();
  }
  /**
   * 事件监听
   */
  on(o, t) {
    this.eventHandlers.has(o) || this.eventHandlers.set(o, []), this.eventHandlers.get(o).push(t);
  }
  /**
   * 移除事件监听
   */
  off(o, t) {
    if (!t) {
      this.eventHandlers.delete(o);
      return;
    }
    const n = this.eventHandlers.get(o);
    if (n) {
      const s = n.indexOf(t);
      s > -1 && n.splice(s, 1);
    }
  }
  /**
   * 触发事件
   */
  emit(o, ...t) {
    const n = this.eventHandlers.get(o);
    n && n.forEach((s) => s(...t));
  }
  /**
   * 获取编辑器实例（UEditor原生实例）
   */
  getEditor() {
    return this.editor;
  }
}
function so(r) {
  const o = E([]), t = E([]), n = E(0), s = E(!1), d = E(!1), C = E(!1), u = E(0), a = E(""), v = E(1), f = E(100), y = E(!0), L = () => r.categoryLoader ? r.categoryLoader : P.DefaultCategoryLoader, H = () => r.styleLoader ? r.styleLoader : P.DefaultStyleLoader, J = async () => {
    const M = L();
    if (M) {
      C.value = !0;
      try {
        o.value = await M();
      } catch (S) {
        console.error("Failed to load categories:", S), o.value = [];
      } finally {
        C.value = !1;
      }
    }
  }, G = async (M, S = !1) => {
    const se = H();
    if (se) {
      S ? d.value = !0 : s.value = !0;
      try {
        const F = await se({
          categoryId: u.value,
          keywords: a.value,
          page: v.value,
          pageSize: f.value,
          ...M
        });
        S ? t.value = [...t.value, ...F.records] : t.value = F.records, n.value = F.total, f.value = F.pageSize;
        const ve = Math.ceil(F.total / f.value);
        y.value = v.value < ve;
      } catch (F) {
        console.error("Failed to load materials:", F), S || (t.value = [], n.value = 0, y.value = !1);
      } finally {
        S ? d.value = !1 : s.value = !1;
      }
    }
  }, pe = async () => {
    d.value || !y.value || (v.value++, await G(void 0, !0));
  }, q = (M) => {
    u.value = M, v.value = 1, y.value = !0, G();
  }, D = (M) => {
    a.value = M, v.value = 1, y.value = !0, G();
  };
  return Xe(async () => {
    await J(), await G();
  }), {
    // Data
    categories: o,
    materials: t,
    total: n,
    // Loading states
    loading: s,
    loadingMore: d,
    loadingCategories: C,
    // Filter states
    currentCategory: u,
    keywords: a,
    currentPage: v,
    hasMore: y,
    // Methods
    loadMaterials: G,
    loadMore: pe,
    changeCategory: q,
    search: D
  };
}
const de = class de {
  constructor() {
    B(this, "element", null);
    B(this, "styles", {});
  }
  /**
   * 绑定DOM元素并解析样式
   */
  dom(o) {
    return this.element = o, this.parse(), this;
  }
  /**
   * 解析元素的style属性
   */
  parse() {
    if (this.styles = {}, !this.element) return this;
    const o = this.element.getAttribute("style");
    if (o) {
      const t = o.split(";");
      for (const n of t) {
        if (!n.trim()) continue;
        const [s, d] = n.split(":").map((C) => C.trim());
        s && d && (this.styles[s] = d);
      }
    }
    return this;
  }
  /**
   * 移除样式属性
   */
  remove(o) {
    return o in this.styles && delete this.styles[o], this;
  }
  /**
   * 移除DOM属性
   */
  removeDomAttr(o) {
    var t;
    return (t = this.element) == null || t.removeAttribute(o), this;
  }
  /**
   * 获取带前缀的样式键名
   */
  getStyleKeys(o) {
    const t = [];
    for (const n of de.prefixes) {
      const s = `${n}${o}`;
      if (s in this.styles) {
        t.push(s);
        break;
      }
    }
    return t.length ? t : [o];
  }
  /**
   * 设置样式值（支持回调处理）
   */
  setStyleValues(o, t) {
    const n = this.getStyleKeys(o);
    if (!n.length)
      this.styles[o] = t("");
    else
      for (const s of n) {
        const d = this.styles[s] || "";
        this.styles[s] = t(d);
      }
  }
  /**
   * 合并样式
   */
  merge(o, t) {
    if (o === "rotatez") {
      const n = `rotatez(${t}deg)`;
      this.setStyleValues("transform", (s) => /rotatez\(.*?\)/.test(s) ? s.replace(/rotatez\(.*?\)/, n) : s ? `${s} ${n}` : n);
    } else {
      this.styles[o] = String(t);
      for (const n of de.prefixes) {
        const s = `${n}${o}`;
        s in this.styles && (this.styles[s] = String(t));
      }
    }
    return this;
  }
  /**
   * 获取样式值
   */
  get(o, t = null) {
    if (!this.element) return t;
    switch (o) {
      case "opacity": {
        let n = this.element.style.opacity;
        if (!n)
          for (const s of de.prefixes) {
            const d = `${s}${o}`;
            if (d in this.styles) {
              n = this.styles[d];
              break;
            }
          }
        return n ? parseFloat(n) : t;
      }
      case "rotatez": {
        const n = this.element.style.transform || "";
        let s = 0;
        if (n.toLowerCase().indexOf("rotatez(") >= 0) {
          const d = n.toLowerCase().replace(/rotatex\s*\(\s*[0-9\-]*\s*deg\s*\)/g, "").replace(/rotatey\s*\(\s*[0-9\-]*\s*deg\s*\)/g, "").match(/rotatez\s*\(\s*([0-9\-]+)\s*deg\s*\)/);
          d && (s = parseInt(d[1]), s > 180 ? s -= 360 : s < -180 && (s += 360));
        }
        return s;
      }
      default:
        return this.styles[o] || t;
    }
  }
  /**
   * 将样式应用到DOM元素
   */
  toDom() {
    if (!this.element) return this;
    const o = [];
    for (const t in this.styles)
      o.push(`${t}:${this.styles[t]}`);
    return o.length ? this.element.setAttribute("style", o.join(";")) : this.element.removeAttribute("style"), this;
  }
};
// CSS前缀
B(de, "prefixes", ["-moz-", "-o-", "-webkit-", "-ms-"]);
let Ge = de;
const ie = {
  /**
   * 从DOM元素创建处理器
   */
  fromDom(r) {
    return new Ge().dom(r);
  }
};
function ao() {
  const r = E(null), o = E(null), t = E({
    id: "",
    width: 100,
    rotate: 0,
    opacity: 1
  }), n = E({
    show: !1,
    element: null,
    width: 100,
    opacity: 1
  }), s = (u) => {
    r.value = u, t.value.id = u.getAttribute("data-section-id") || "";
    const a = ie.fromDom(u), v = u.style.width || "100%";
    t.value.width = parseInt(v) || 100, t.value.rotate = a.get("rotatez", 0), t.value.opacity = a.get("opacity", 1);
  }, d = (u, a) => {
    n.value.element = a, n.value.show = !0, r.value = u;
    const v = ie.fromDom(a), f = a.style.width || "100%";
    n.value.width = parseInt(f) || 100, n.value.opacity = v.get("opacity", 1);
  }, C = () => {
    r.value = null, o.value = null, n.value.show = !1, n.value.element = null;
  };
  return ge(() => t.value.width, (u) => {
    r.value && ie.fromDom(r.value).merge("margin", "0 auto").merge("width", `${u}%`).toDom().remove("max-width").removeDomAttr("width");
  }), ge(() => t.value.rotate, (u) => {
    r.value && ie.fromDom(r.value).merge("rotatez", u).toDom();
  }), ge(() => t.value.opacity, (u) => {
    r.value && ie.fromDom(r.value).merge("opacity", u).toDom();
  }), ge(() => n.value.width, (u) => {
    n.value.element && ie.fromDom(n.value.element).remove("max-width").merge("width", `${u}%`).toDom().removeDomAttr("width");
  }), ge(() => n.value.opacity, (u) => {
    n.value.element && ie.fromDom(n.value.element).merge("opacity", u).toDom();
  }), {
    currentSection: r,
    currentElement: o,
    sectionData: t,
    imageData: n,
    prepareSectionStyle: s,
    prepareImageStyle: d,
    clearSelection: C
  };
}
function lo() {
  const r = (u, a) => {
    u && (u.undoManger.save(), a(), u.undoManger.save(), u.syncCommandState());
  };
  return {
    clearSectionFormat: (u, a) => {
      !u || !a || r(u, () => {
        u.selection.getRange().selectNode(a).select(), u.execCommand("removeformat"), a.className = `${P.SectionClass} ${P.SectionActiveClass}`;
      });
    },
    insertSection: (u, a, v) => {
      if (!u || !a) return;
      const f = document.createElement("section");
      f.className = P.SectionClass, f.setAttribute("data-section-id", "");
      const y = document.createElement("p"), L = document.createElement("br");
      y.appendChild(L), f.appendChild(y), r(u, () => {
        var H, J;
        v === "before" ? (H = a.parentNode) == null || H.insertBefore(f, a) : (J = a.parentNode) == null || J.insertBefore(f, a.nextSibling);
      }), u.selection.getRange().setStart(y, 0).setCursor(!1, !0);
    },
    selectSection: (u, a) => {
      !u || !a || r(u, () => {
        u.selection.getRange().selectNode(a).select();
      });
    },
    deleteSection: (u, a) => {
      !u || !a || r(u, () => {
        a.remove();
      });
    },
    moveSectionUp: (u, a) => {
      if (!u || !a) return;
      const v = a.previousElementSibling;
      v && r(u, () => {
        var f;
        (f = a.parentNode) == null || f.insertBefore(a, v);
      });
    },
    moveSectionDown: (u, a) => {
      if (!u || !a) return;
      const v = a.nextElementSibling;
      v && r(u, () => {
        var f;
        (f = a.parentNode) == null || f.insertBefore(a, v.nextSibling);
      });
    }
  };
}
const co = { class: "upd-material-panel" }, uo = { class: "upd-material-body" }, fo = { class: "upd-material-item" }, po = { class: "upd-material-item__head" }, vo = { class: "upd-category" }, ho = { class: "upd-category__item" }, mo = ["onClick"], go = {
  key: 0,
  class: "upd-category__children"
}, yo = ["onClick"], _o = { class: "upd-filter" }, bo = { class: "upd-filter__search" }, wo = { class: "upd-material-item__body" }, Co = {
  key: 0,
  class: "upd-loading"
}, So = {
  key: 1,
  class: "upd-material-list"
}, Eo = ["onClick"], Ro = ["innerHTML"], $o = { class: "upd-material-list__info" }, ko = { class: "upd-material-list__title" }, xo = { class: "upd-material-list__id" }, Do = {
  key: 0,
  class: "upd-loading-more"
}, To = {
  key: 1,
  class: "upd-no-more"
}, Po = /* @__PURE__ */ Ce({
  __name: "MaterialPanel",
  props: {
    categories: {},
    materials: {},
    total: {},
    currentCategory: {},
    loading: { type: Boolean, default: !1 },
    loadingMore: { type: Boolean, default: !1 },
    hasMore: { type: Boolean, default: !0 }
  },
  emits: ["select", "change-category", "search", "load-more"],
  setup(r, { emit: o }) {
    const t = r, n = o, s = E(""), d = E(null), C = () => {
      n("search", s.value);
    }, u = () => {
      if (!d.value || t.loading || t.loadingMore || !t.hasMore)
        return;
      const a = d.value, v = a.scrollTop, f = a.scrollHeight, y = a.clientHeight;
      v + y >= f - 50 && n("load-more");
    };
    return Xe(() => {
      d.value = document.querySelector(".upd-material-item"), d.value && d.value.addEventListener("scroll", u);
    }), vt(() => {
      d.value && d.value.removeEventListener("scroll", u);
    }), (a, v) => (x(), O("div", co, [
      c("div", uo, [
        c("div", fo, [
          c("div", po, [
            c("div", vo, [
              c("div", ho, [
                c("div", {
                  class: Ne(["upd-category__title", { "upd-category__title--active": r.currentCategory === 0 }]),
                  onClick: v[0] || (v[0] = (f) => a.$emit("change-category", 0))
                }, " 全部 ", 2)
              ]),
              (x(!0), O(We, null, Ye(r.categories, (f) => (x(), O("div", {
                key: f.id,
                class: "upd-category__item"
              }, [
                c("div", {
                  class: Ne(["upd-category__title", {
                    "upd-category__title--active": f.id === r.currentCategory || f._child && f._child.some((y) => y.id === r.currentCategory)
                  }]),
                  onClick: (y) => a.$emit("change-category", f.id)
                }, we(f.title), 11, mo),
                f._child && f._child.length ? (x(), O("div", go, [
                  (x(!0), O(We, null, Ye(f._child, (y) => (x(), O("div", {
                    key: y.id,
                    class: Ne(["upd-category__child-title", { "upd-category__child-title--active": y.id === r.currentCategory }]),
                    onClick: Bt((L) => a.$emit("change-category", y.id), ["stop"])
                  }, we(y.title), 11, yo))), 128))
                ])) : fe("", !0)
              ]))), 128))
            ]),
            c("div", _o, [
              v[2] || (v[2] = c("div", { class: "upd-filter__text" }, null, -1)),
              c("div", bo, [
                W(c("input", {
                  "onUpdate:modelValue": v[1] || (v[1] = (f) => s.value = f),
                  type: "text",
                  placeholder: "样式ID或关键词",
                  onKeyup: Nt(C, ["enter"])
                }, null, 544), [
                  [Y, s.value]
                ])
              ])
            ])
          ]),
          c("div", wo, [
            r.loading ? (x(), O("div", Co, " 加载中... ")) : (x(), O("div", So, [
              (x(!0), O(We, null, Ye(r.materials, (f) => (x(), O("div", {
                key: f.id,
                class: "upd-material-list__item",
                onClick: (y) => a.$emit("select", f)
              }, [
                c("div", {
                  class: "upd-material-list__preview",
                  innerHTML: f.html
                }, null, 8, Ro),
                c("div", $o, [
                  c("span", ko, we(f.title), 1),
                  c("span", xo, "ID: " + we(f.id), 1)
                ])
              ], 8, Eo))), 128)),
              r.loadingMore ? (x(), O("div", Do, " 加载更多... ")) : !r.hasMore && r.materials.length > 0 ? (x(), O("div", To, " 没有更多数据了 ")) : fe("", !0)
            ]))
          ])
        ])
      ])
    ]));
  }
}), Le = (r, o) => {
  const t = r.__vccOpts || r;
  for (const [n, s] of o)
    t[n] = s;
  return t;
}, Oo = /* @__PURE__ */ Le(Po, [["__scopeId", "data-v-797b48ca"]]), Lo = ["width", "height", "stroke"], jo = /* @__PURE__ */ Ce({
  __name: "IconClose",
  props: {
    size: { default: 24 },
    strokeColor: { default: "currentColor" }
  },
  setup(r) {
    return (o, t) => (x(), O("svg", {
      width: r.size,
      height: r.size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: r.strokeColor,
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "icon"
    }, [...t[0] || (t[0] = [
      c("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
      }, null, -1),
      c("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
      }, null, -1)
    ])], 8, Lo));
  }
}), Ao = /* @__PURE__ */ Le(jo, [["__scopeId", "data-v-218750c8"]]), Io = {
  key: 0,
  class: "upd-section-tools__panel"
}, zo = { class: "upd-section-tools__body" }, Mo = { class: "upd-section-tools__actions" }, Fo = { class: "upd-section-tools__line" }, Uo = { class: "upd-section-tools__field" }, Ho = { class: "upd-section-tools__line" }, Vo = { class: "upd-section-tools__field" }, Bo = { class: "upd-section-tools__panel" }, No = { class: "upd-section-tools__head" }, Wo = { class: "upd-section-tools__desc" }, Yo = { class: "upd-section-tools__body" }, qo = { class: "upd-section-tools__actions" }, Ko = { class: "upd-section-tools__line" }, Jo = { class: "upd-section-tools__field" }, Go = { class: "upd-section-tools__line" }, Xo = { class: "upd-section-tools__field" }, Zo = { class: "upd-section-tools__line" }, Qo = { class: "upd-section-tools__field" }, en = /* @__PURE__ */ Ce({
  __name: "SectionTools",
  props: {
    sectionData: {},
    imageData: {},
    position: {}
  },
  emits: ["action", "image-action", "close"],
  setup(r) {
    return (o, t) => (x(), O("div", {
      class: "upd-section-tools",
      style: Wt({
        left: r.position.left + "px",
        top: r.position.top + "px"
      })
    }, [
      c("div", {
        class: "upd-section-tools__close",
        onClick: t[0] || (t[0] = (n) => o.$emit("close"))
      }, [
        Ke(Ao, {
          size: 16,
          "stroke-color": "#fff"
        })
      ]),
      r.imageData.show ? (x(), O("div", Io, [
        t[21] || (t[21] = c("div", { class: "upd-section-tools__head" }, [
          c("span", { class: "upd-section-tools__title" }, "图片")
        ], -1)),
        c("div", zo, [
          c("div", Mo, [
            c("div", {
              class: "upd-section-tools__action-btn",
              onClick: t[1] || (t[1] = (n) => o.$emit("image-action", "change"))
            }, " 换图 ")
          ]),
          c("div", Fo, [
            t[19] || (t[19] = c("div", { class: "upd-section-tools__label" }, "宽度%", -1)),
            c("div", Uo, [
              W(c("input", {
                "onUpdate:modelValue": t[2] || (t[2] = (n) => r.imageData.width = n),
                type: "range",
                min: "0",
                max: "100",
                class: "upd-slider"
              }, null, 512), [
                [
                  Y,
                  r.imageData.width,
                  void 0,
                  { number: !0 }
                ]
              ]),
              W(c("input", {
                "onUpdate:modelValue": t[3] || (t[3] = (n) => r.imageData.width = n),
                type: "number",
                min: "0",
                max: "100",
                class: "upd-input-number"
              }, null, 512), [
                [
                  Y,
                  r.imageData.width,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ]),
          c("div", Ho, [
            t[20] || (t[20] = c("div", { class: "upd-section-tools__label" }, "透明度", -1)),
            c("div", Vo, [
              W(c("input", {
                "onUpdate:modelValue": t[4] || (t[4] = (n) => r.imageData.opacity = n),
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                class: "upd-slider"
              }, null, 512), [
                [
                  Y,
                  r.imageData.opacity,
                  void 0,
                  { number: !0 }
                ]
              ]),
              W(c("input", {
                "onUpdate:modelValue": t[5] || (t[5] = (n) => r.imageData.opacity = n),
                type: "number",
                min: "0",
                max: "1",
                step: "0.01",
                class: "upd-input-number"
              }, null, 512), [
                [
                  Y,
                  r.imageData.opacity,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ])
        ])
      ])) : fe("", !0),
      c("div", Bo, [
        c("div", No, [
          t[22] || (t[22] = c("span", { class: "upd-section-tools__title" }, "内容块", -1)),
          c("span", Wo, " 样式ID " + we(r.sectionData.id || "-"), 1)
        ]),
        c("div", Yo, [
          c("div", qo, [
            c("div", {
              class: "upd-section-tools__action-btn",
              onClick: t[6] || (t[6] = (n) => o.$emit("action", "clearFormat"))
            }, " 清除样式 "),
            c("div", {
              class: "upd-section-tools__action-btn",
              onClick: t[7] || (t[7] = (n) => o.$emit("action", "newSectionBefore"))
            }, " 前空行 "),
            c("div", {
              class: "upd-section-tools__action-btn",
              onClick: t[8] || (t[8] = (n) => o.$emit("action", "newSectionAfter"))
            }, " 后空行 "),
            c("div", {
              class: "upd-section-tools__action-btn",
              onClick: t[9] || (t[9] = (n) => o.$emit("action", "select"))
            }, " 选中 "),
            c("div", {
              class: "upd-section-tools__action-btn",
              onClick: t[10] || (t[10] = (n) => o.$emit("action", "delete"))
            }, " 删除 "),
            c("div", {
              class: "upd-section-tools__action-btn",
              onClick: t[11] || (t[11] = (n) => o.$emit("action", "moveUp"))
            }, " 上移 "),
            c("div", {
              class: "upd-section-tools__action-btn",
              onClick: t[12] || (t[12] = (n) => o.$emit("action", "moveDown"))
            }, " 下移 ")
          ]),
          c("div", Ko, [
            t[23] || (t[23] = c("div", { class: "upd-section-tools__label" }, "宽度%", -1)),
            c("div", Jo, [
              W(c("input", {
                "onUpdate:modelValue": t[13] || (t[13] = (n) => r.sectionData.width = n),
                type: "range",
                min: "0",
                max: "100",
                class: "upd-slider"
              }, null, 512), [
                [
                  Y,
                  r.sectionData.width,
                  void 0,
                  { number: !0 }
                ]
              ]),
              W(c("input", {
                "onUpdate:modelValue": t[14] || (t[14] = (n) => r.sectionData.width = n),
                type: "number",
                min: "0",
                max: "100",
                class: "upd-input-number"
              }, null, 512), [
                [
                  Y,
                  r.sectionData.width,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ]),
          c("div", Go, [
            t[24] || (t[24] = c("div", { class: "upd-section-tools__label" }, "旋转角度", -1)),
            c("div", Xo, [
              W(c("input", {
                "onUpdate:modelValue": t[15] || (t[15] = (n) => r.sectionData.rotate = n),
                type: "range",
                min: "-180",
                max: "180",
                class: "upd-slider"
              }, null, 512), [
                [
                  Y,
                  r.sectionData.rotate,
                  void 0,
                  { number: !0 }
                ]
              ]),
              W(c("input", {
                "onUpdate:modelValue": t[16] || (t[16] = (n) => r.sectionData.rotate = n),
                type: "number",
                min: "-180",
                max: "180",
                class: "upd-input-number"
              }, null, 512), [
                [
                  Y,
                  r.sectionData.rotate,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ]),
          c("div", Zo, [
            t[25] || (t[25] = c("div", { class: "upd-section-tools__label" }, "透明度", -1)),
            c("div", Qo, [
              W(c("input", {
                "onUpdate:modelValue": t[17] || (t[17] = (n) => r.sectionData.opacity = n),
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                class: "upd-slider"
              }, null, 512), [
                [
                  Y,
                  r.sectionData.opacity,
                  void 0,
                  { number: !0 }
                ]
              ]),
              W(c("input", {
                "onUpdate:modelValue": t[18] || (t[18] = (n) => r.sectionData.opacity = n),
                type: "number",
                min: "0",
                max: "1",
                step: "0.01",
                class: "upd-input-number"
              }, null, 512), [
                [
                  Y,
                  r.sectionData.opacity,
                  void 0,
                  { number: !0 }
                ]
              ])
            ])
          ])
        ])
      ])
    ], 4));
  }
}), tn = /* @__PURE__ */ Le(en, [["__scopeId", "data-v-f465a212"]]), on = ["width", "height", "stroke"], nn = /* @__PURE__ */ Ce({
  __name: "IconCheck",
  props: {
    size: { default: 24 },
    strokeColor: { default: "currentColor" }
  },
  setup(r) {
    return (o, t) => (x(), O("svg", {
      width: r.size,
      height: r.size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: r.strokeColor,
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "icon"
    }, [...t[0] || (t[0] = [
      c("polyline", { points: "20 6 9 17 4 12" }, null, -1)
    ])], 8, on));
  }
}), rn = /* @__PURE__ */ Le(nn, [["__scopeId", "data-v-0ae058a4"]]), sn = { class: "ueditor-plus-designer" }, an = { class: "ueditor-plus-designer__body" }, ln = {
  key: 0,
  class: "ueditor-plus-designer__material"
}, cn = { class: "ueditor-plus-designer__editor" }, un = { class: "upd-editor-instance" }, dn = ["id"], fn = {
  key: 0,
  class: "upd-toolbar"
}, pn = /* @__PURE__ */ Ce({
  __name: "Designer",
  props: {
    config: { default: () => ({}) },
    isIframe: { type: Boolean, default: !1 }
  },
  emits: ["ready", "change", "confirm"],
  setup(r, { expose: o, emit: t }) {
    const n = r, s = t, d = E(null), C = E(`upd_${Date.now()}`), u = E(!0), a = E(!1), v = E({ left: 0, top: 0 }), {
      categories: f,
      materials: y,
      total: L,
      loading: H,
      loadingMore: J,
      currentCategory: G,
      hasMore: pe,
      changeCategory: q,
      search: D,
      loadMore: M
    } = so(n.config), {
      currentSection: S,
      sectionData: se,
      imageData: F,
      prepareSectionStyle: ve,
      prepareImageStyle: je,
      clearSelection: Se
    } = ao(), {
      clearSectionFormat: Ae,
      insertSection: Ee,
      selectSection: Re,
      deleteSection: K,
      moveSectionUp: X,
      moveSectionDown: te
    } = lo();
    Xe(async () => {
      const h = document.getElementById(C.value);
      if (h) {
        d.value = new io({
          ...n.config,
          container: h
        });
        try {
          await d.value.init(), d.value.on("ready", () => {
            s("ready"), ae();
          }), d.value.on("change", (b) => {
            s("change", b);
          }), d.value.on("section-click", xe), window.addEventListener("resize", ae);
        } catch (b) {
          console.error("Failed to initialize designer:", b);
        }
      }
    }), vt(() => {
      var h;
      window.removeEventListener("resize", ae), (h = d.value) == null || h.destroy();
    });
    const $e = (h) => {
      d.value && d.value.insertSection(h.html, { id: h.id });
    }, ke = (h) => {
      D(h);
    }, xe = ({ section: h, element: b, image: z }) => {
      S.value = h, ve(h), z ? je(h, z) : F.value.show = !1, a.value = !0, he(h);
    }, he = (h) => {
      if (!d.value) return;
      const b = d.value.getEditor();
      if (!b) return;
      const z = document.querySelector(`#${C.value}`);
      if (!z) return;
      const Q = z.querySelector(".edui-editor-iframeholder > iframe");
      if (!Q) return;
      const oe = b.document, T = De(h, Q, oe), A = 320, $ = 350, ne = Q.getBoundingClientRect(), le = document.querySelector(".ueditor-plus-designer"), me = le == null ? void 0 : le.getBoundingClientRect();
      if (!me) return;
      let ee = ne.left - me.left - A;
      ee = Math.max(0, ee);
      let Z;
      if (T.spaceTop > T.spaceBottom && T.spaceTop > $)
        Z = T.top - $ - T.relativeTop, Z = Math.max(0, Z);
      else {
        Z = T.top + T.height - T.relativeTop;
        const Me = T.top + T.height + T.spaceBottom - T.relativeTop - $;
        Z = Math.min(Z, Me);
      }
      v.value = {
        left: ee,
        top: Z
      };
    }, De = (h, b, z) => {
      const Q = document.querySelector(".ueditor-plus-designer");
      if (!Q)
        return {
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          containerWidth: 0,
          containerHeight: 0,
          spaceTop: 0,
          spaceBottom: 0,
          spaceLeft: 0,
          spaceRight: 0,
          relativeLeft: 0,
          relativeTop: 0
        };
      const oe = b.getBoundingClientRect(), T = h.getBoundingClientRect(), A = Q.getBoundingClientRect(), $ = {
        left: oe.left + T.left - z.documentElement.scrollLeft,
        top: oe.top + T.top - z.documentElement.scrollTop,
        width: T.width,
        height: T.height,
        containerWidth: A.width,
        containerHeight: A.height,
        spaceTop: 0,
        spaceBottom: 0,
        spaceLeft: 0,
        spaceRight: 0,
        relativeLeft: A.left,
        relativeTop: A.top
      };
      return $.spaceTop = $.top - A.top, $.spaceLeft = $.left - A.left, $.spaceBottom = A.top + A.height - ($.top + $.height), $.spaceRight = A.left + A.width - ($.left + $.width), $;
    }, ae = () => {
      a.value && S.value && he(S.value);
    }, V = () => {
      S.value && S.value.classList.remove(P.SectionActiveClass), a.value = !1, Se();
    }, Te = (h) => {
      if (!d.value || !S.value) return;
      const b = d.value.getEditor();
      if (b)
        switch (h) {
          case "clearFormat":
            Ae(b, S.value), V();
            break;
          case "newSectionBefore":
            Ee(b, S.value, "before"), V();
            break;
          case "newSectionAfter":
            Ee(b, S.value, "after"), V();
            break;
          case "select":
            Re(b, S.value), V();
            break;
          case "delete":
            K(b, S.value), V();
            break;
          case "moveUp":
            X(b, S.value), V();
            break;
          case "moveDown":
            te(b, S.value), V();
            break;
        }
    }, Ie = (h) => {
      console.log("Image action:", h);
    }, ze = () => {
      if (d.value) {
        const h = d.value.getContent();
        s("confirm", h);
      }
    };
    return o({
      getContent: () => {
        var h;
        return ((h = d.value) == null ? void 0 : h.getContent()) || "";
      },
      setContent: (h) => {
        var b;
        (b = d.value) == null || b.setContent(h);
      }
    }), (h, b) => (x(), O("div", sn, [
      c("div", an, [
        u.value ? (x(), O("div", ln, [
          Ke(Oo, {
            categories: N(f),
            materials: N(y),
            total: N(L),
            "current-category": N(G),
            loading: N(H),
            "loading-more": N(J),
            "has-more": N(pe),
            onSelect: $e,
            onChangeCategory: N(q),
            onSearch: ke,
            onLoadMore: N(M)
          }, null, 8, ["categories", "materials", "total", "current-category", "loading", "loading-more", "has-more", "onChangeCategory", "onLoadMore"])
        ])) : fe("", !0),
        c("div", cn, [
          c("div", un, [
            c("div", {
              id: C.value,
              style: { height: "100%" }
            }, null, 8, dn)
          ]),
          r.isIframe ? (x(), O("div", fn, [
            c("a", {
              class: "upd-toolbar__item",
              href: "javascript:;",
              onClick: ze
            }, [
              Ke(rn, { size: 16 }),
              b[0] || (b[0] = qt(" 完成 ", -1))
            ])
          ])) : fe("", !0)
        ])
      ]),
      a.value ? (x(), Yt(tn, {
        key: 0,
        "section-data": N(se),
        "image-data": N(F),
        position: v.value,
        onAction: Te,
        onImageAction: Ie,
        onClose: V
      }, null, 8, ["section-data", "image-data", "position"])) : fe("", !0)
    ]));
  }
}), vn = Vt(pn), _n = Ft((r, o) => {
  const t = Ut(null);
  return Ht(o, () => ({
    getContent: () => {
      const n = t.current;
      return n ? n.__veauryVueRef__ && typeof n.__veauryVueRef__.getContent == "function" ? n.__veauryVueRef__.getContent() : typeof n.getContent == "function" ? n.getContent() : n.$refs && n.$refs.component && typeof n.$refs.component.getContent == "function" ? n.$refs.component.getContent() : n.exposed && typeof n.exposed.getContent == "function" ? n.exposed.getContent() : n.$exposed && typeof n.$exposed.getContent == "function" ? n.$exposed.getContent() : (console.error("Cannot find getContent method in:", n), console.error("Available properties:", Object.keys(n)), "") : "";
    },
    setContent: (n) => {
      const s = t.current;
      if (s) {
        if (s.__veauryVueRef__ && typeof s.__veauryVueRef__.setContent == "function") {
          s.__veauryVueRef__.setContent(n);
          return;
        }
        typeof s.setContent == "function" ? s.setContent(n) : s.$refs && s.$refs.component && typeof s.$refs.component.setContent == "function" ? s.$refs.component.setContent(n) : s.exposed && typeof s.exposed.setContent == "function" ? s.exposed.setContent(n) : s.$exposed && typeof s.$exposed.setContent == "function" ? s.$exposed.setContent(n) : (console.error("Cannot find setContent method in:", s), console.error("Available properties:", Object.keys(s)));
      }
    }
  })), /* @__PURE__ */ Gt.jsx(vn, { ref: t, ...r });
});
export {
  _n as UEditorPlusDesigner,
  _n as default
};
