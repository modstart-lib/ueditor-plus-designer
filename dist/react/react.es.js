var zt = Object.defineProperty;
var Ut = (r, o, t) => o in r ? zt(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t;
var B = (r, o, t) => Ut(r, typeof o != "symbol" ? o + "" : o, t);
import dt, { forwardRef as Mt, useRef as Ft, useImperativeHandle as Ht } from "react";
import { applyVueInReact as Vt } from "veaury";
import { ref as R, onMounted as Je, watch as ve, defineComponent as _e, onUnmounted as ft, createElementBlock as O, openBlock as D, createElementVNode as c, normalizeClass as Ve, Fragment as Be, renderList as Ne, createCommentVNode as ue, toDisplayString as ye, withModifiers as Bt, withDirectives as W, withKeys as Nt, vModelText as Y, normalizeStyle as Wt, createVNode as Ye, createBlock as Yt, unref as N, createTextVNode as qt } from "vue";
var qe = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function Kt() {
  if (lt) return he;
  lt = 1;
  var r = dt, o = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(u, a, v) {
    var f, h = {}, L = null, H = null;
    v !== void 0 && (L = "" + v), a.key !== void 0 && (L = "" + a.key), a.ref !== void 0 && (H = a.ref);
    for (f in a) n.call(a, f) && !d.hasOwnProperty(f) && (h[f] = a[f]);
    if (u && u.defaultProps) for (f in a = u.defaultProps, a) h[f] === void 0 && (h[f] = a[f]);
    return { $$typeof: o, type: u, key: L, ref: H, props: h, _owner: s.current };
  }
  return he.Fragment = t, he.jsx = b, he.jsxs = b, he;
}
var me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function Jt() {
  return ct || (ct = 1, process.env.NODE_ENV !== "production" && function() {
    var r = dt, o = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), u = Symbol.for("react.context"), a = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), H = Symbol.for("react.offscreen"), G = Symbol.iterator, X = "@@iterator";
    function de(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = G && e[G] || e[X];
      return typeof i == "function" ? i : null;
    }
    var q = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          l[p - 1] = arguments[p];
        U("error", e, l);
      }
    }
    function U(e, i, l) {
      {
        var p = q.ReactDebugCurrentFrame, _ = p.getStackAddendum();
        _ !== "" && (i += "%s", l = l.concat([_]));
        var C = l.map(function(y) {
          return String(y);
        });
        C.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, C);
      }
    }
    var E = !1, ie = !1, M = !1, fe = !1, Le = !1, be;
    be = Symbol.for("react.module.reference");
    function je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === d || Le || e === s || e === v || e === f || fe || e === H || E || ie || M || typeof e == "object" && e !== null && (e.$$typeof === L || e.$$typeof === h || e.$$typeof === b || e.$$typeof === u || e.$$typeof === a || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === be || e.getModuleId !== void 0));
    }
    function we(e, i, l) {
      var p = e.displayName;
      if (p)
        return p;
      var _ = i.displayName || i.name || "";
      return _ !== "" ? l + "(" + _ + ")" : l;
    }
    function Ce(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
            return Ce(i) + ".Consumer";
          case b:
            var l = e;
            return Ce(l._context) + ".Provider";
          case a:
            return we(e, e.render, "ForwardRef");
          case h:
            var p = e.displayName || null;
            return p !== null ? p : K(e.type) || "Memo";
          case L: {
            var _ = e, C = _._payload, y = _._init;
            try {
              return K(y(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, ee = 0, Se, Ee, Re, pe, $e, se, V;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function Ae() {
      {
        if (ee === 0) {
          Se = console.log, Ee = console.info, Re = console.warn, pe = console.error, $e = console.group, se = console.groupCollapsed, V = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ke,
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
        ee++;
      }
    }
    function Ie() {
      {
        if (ee--, ee === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, e, {
              value: Se
            }),
            info: Z({}, e, {
              value: Ee
            }),
            warn: Z({}, e, {
              value: Re
            }),
            error: Z({}, e, {
              value: pe
            }),
            group: Z({}, e, {
              value: $e
            }),
            groupCollapsed: Z({}, e, {
              value: se
            }),
            groupEnd: Z({}, e, {
              value: V
            })
          });
        }
        ee < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = q.ReactCurrentDispatcher, De;
    function m(e, i, l) {
      {
        if (De === void 0)
          try {
            throw Error();
          } catch (_) {
            var p = _.stack.trim().match(/\n( *(at )?)/);
            De = p && p[1] || "";
          }
        return `
` + De + e;
      }
    }
    var w = !1, z;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      z = new te();
    }
    function oe(e, i) {
      if (!e || w)
        return "";
      {
        var l = z.get(e);
        if (l !== void 0)
          return l;
      }
      var p;
      w = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = xe.current, xe.current = null, Ae();
      try {
        if (i) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (I) {
              p = I;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (I) {
              p = I;
            }
            e.call(y.prototype);
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
          for (var g = I.stack.split(`
`), A = p.stack.split(`
`), $ = g.length - 1, x = A.length - 1; $ >= 1 && x >= 0 && g[$] !== A[x]; )
            x--;
          for (; $ >= 1 && x >= 0; $--, x--)
            if (g[$] !== A[x]) {
              if ($ !== 1 || x !== 1)
                do
                  if ($--, x--, x < 0 || g[$] !== A[x]) {
                    var F = `
` + g[$].replace(" at new ", " at ");
                    return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && z.set(e, F), F;
                  }
                while ($ >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        w = !1, xe.current = C, Ie(), Error.prepareStackTrace = _;
      }
      var le = e ? e.displayName || e.name : "", ne = le ? m(le) : "";
      return typeof e == "function" && z.set(e, ne), ne;
    }
    function S(e, i, l) {
      return oe(e, !1);
    }
    function j(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function k(e, i, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return oe(e, j(e));
      if (typeof e == "string")
        return m(e);
      switch (e) {
        case v:
          return m("Suspense");
        case f:
          return m("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            return S(e.render);
          case h:
            return k(e.type, i, l);
          case L: {
            var p = e, _ = p._payload, C = p._init;
            try {
              return k(C(_), i, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Q = Object.prototype.hasOwnProperty, J = {}, Te = q.ReactDebugCurrentFrame;
    function Pe(e) {
      if (e) {
        var i = e._owner, l = k(e.type, e._source, i ? i.type : null);
        Te.setExtraStackFrame(l);
      } else
        Te.setExtraStackFrame(null);
    }
    function ht(e, i, l, p, _) {
      {
        var C = Function.call.bind(Q);
        for (var y in e)
          if (C(e, y)) {
            var g = void 0;
            try {
              if (typeof e[y] != "function") {
                var A = Error((p || "React class") + ": " + l + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              g = e[y](i, y, p, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              g = $;
            }
            g && !(g instanceof Error) && (Pe(_), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", l, y, typeof g), Pe(null)), g instanceof Error && !(g.message in J) && (J[g.message] = !0, Pe(_), T("Failed %s type: %s", l, g.message), Pe(null));
          }
      }
    }
    var mt = Array.isArray;
    function ze(e) {
      return mt(e);
    }
    function gt(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, l = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function yt(e) {
      try {
        return Ge(e), !1;
      } catch {
        return !0;
      }
    }
    function Ge(e) {
      return "" + e;
    }
    function Xe(e) {
      if (yt(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gt(e)), Ge(e);
    }
    var Ze = q.ReactCurrentOwner, _t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Qe, et;
    function bt(e) {
      if (Q.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function wt(e) {
      if (Q.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ct(e, i) {
      typeof e.ref == "string" && Ze.current;
    }
    function St(e, i) {
      {
        var l = function() {
          Qe || (Qe = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
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
          et || (et = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Rt = function(e, i, l, p, _, C, y) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: i,
        ref: l,
        props: y,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function $t(e, i, l, p, _) {
      {
        var C, y = {}, g = null, A = null;
        l !== void 0 && (Xe(l), g = "" + l), wt(i) && (Xe(i.key), g = "" + i.key), bt(i) && (A = i.ref, Ct(i, _));
        for (C in i)
          Q.call(i, C) && !_t.hasOwnProperty(C) && (y[C] = i[C]);
        if (e && e.defaultProps) {
          var $ = e.defaultProps;
          for (C in $)
            y[C] === void 0 && (y[C] = $[C]);
        }
        if (g || A) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && St(y, x), A && Et(y, x);
        }
        return Rt(e, g, A, _, p, Ze.current, y);
      }
    }
    var Ue = q.ReactCurrentOwner, tt = q.ReactDebugCurrentFrame;
    function ae(e) {
      if (e) {
        var i = e._owner, l = k(e.type, e._source, i ? i.type : null);
        tt.setExtraStackFrame(l);
      } else
        tt.setExtraStackFrame(null);
    }
    var Me;
    Me = !1;
    function Fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function ot() {
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
    var nt = {};
    function xt(e) {
      {
        var i = ot();
        if (!i) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (i = `

Check the top-level render call using <` + l + ">.");
        }
        return i;
      }
    }
    function rt(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = xt(i);
        if (nt[l])
          return;
        nt[l] = !0;
        var p = "";
        e && e._owner && e._owner !== Ue.current && (p = " It was passed a child from " + K(e._owner.type) + "."), ae(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, p), ae(null);
      }
    }
    function it(e, i) {
      {
        if (typeof e != "object")
          return;
        if (ze(e))
          for (var l = 0; l < e.length; l++) {
            var p = e[l];
            Fe(p) && rt(p, i);
          }
        else if (Fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var _ = de(e);
          if (typeof _ == "function" && _ !== e.entries)
            for (var C = _.call(e), y; !(y = C.next()).done; )
              Fe(y.value) && rt(y.value, i);
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
        i.$$typeof === h))
          l = i.propTypes;
        else
          return;
        if (l) {
          var p = K(i);
          ht(l, e.props, "prop", p, e);
        } else if (i.PropTypes !== void 0 && !Me) {
          Me = !0;
          var _ = K(i);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(e) {
      {
        for (var i = Object.keys(e.props), l = 0; l < i.length; l++) {
          var p = i[l];
          if (p !== "children" && p !== "key") {
            ae(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ae(null);
            break;
          }
        }
        e.ref !== null && (ae(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), ae(null));
      }
    }
    var st = {};
    function at(e, i, l, p, _, C) {
      {
        var y = je(e);
        if (!y) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = kt();
          A ? g += A : g += ot();
          var $;
          e === null ? $ = "null" : ze(e) ? $ = "array" : e !== void 0 && e.$$typeof === o ? ($ = "<" + (K(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, g);
        }
        var x = $t(e, i, l, _, C);
        if (x == null)
          return x;
        if (y) {
          var F = i.children;
          if (F !== void 0)
            if (p)
              if (ze(F)) {
                for (var le = 0; le < F.length; le++)
                  it(F[le], e);
                Object.freeze && Object.freeze(F);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              it(F, e);
        }
        if (Q.call(i, "key")) {
          var ne = K(e), I = Object.keys(i).filter(function(It) {
            return It !== "key";
          }), He = I.length > 0 ? "{key: someKey, " + I.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!st[ne + He]) {
            var At = I.length > 0 ? "{" + I.join(": ..., ") + ": ...}" : "{}";
            T(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, He, ne, At, ne), st[ne + He] = !0;
          }
        }
        return e === n ? Tt(x) : Dt(x), x;
      }
    }
    function Pt(e, i, l) {
      return at(e, i, l, !0);
    }
    function Ot(e, i, l) {
      return at(e, i, l, !1);
    }
    var Lt = Ot, jt = Pt;
    me.Fragment = n, me.jsx = Lt, me.jsxs = jt;
  }()), me;
}
process.env.NODE_ENV === "production" ? qe.exports = Kt() : qe.exports = Jt();
var Gt = qe.exports;
const pt = "https://paiban.tecmz.com/api/live_rich_editor";
async function Xt() {
  var r;
  try {
    const o = await fetch(`${pt}/categories`, {
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
    return vt(t.data.tree);
  } catch (o) {
    return console.error("Failed to fetch categories:", o), [];
  }
}
function vt(r) {
  return r.map((o) => ({
    id: o.id,
    title: o.title,
    pid: o.pid,
    sort: o.sort || 0,
    _child: o._child ? vt(o._child) : void 0
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
    const t = await fetch(`${pt}/paginate`, {
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
let ge = !1, ut = !1;
const We = [];
function no(r = "/ueditor-plus") {
  return new Promise((o, t) => {
    if (ut && window.UE) {
      o(window.UE);
      return;
    }
    if (ge) {
      We.push(() => o(window.UE));
      return;
    }
    ge = !0;
    const n = r.endsWith("/") ? r : `${r}/`;
    window.UEDITOR_HOME_URL = n;
    const s = document.createElement("script");
    s.src = `${n}ueditor.config.js`, s.onload = () => {
      const d = document.createElement("script");
      d.src = `${n}ueditor.all.js`, d.onload = () => {
        ut = !0, ge = !1, We.forEach((b) => b()), We.length = 0, o(window.UE);
      }, d.onerror = () => {
        ge = !1, t(new Error("Failed to load UEditor main script"));
      }, document.head.appendChild(d);
    }, s.onerror = () => {
      ge = !1, t(new Error("Failed to load UEditor config script"));
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
    t.id = this.editorId, this.container.appendChild(t), this.editorElement = t, this.registerUIPlugin();
    const n = {
      autoHeightEnabled: !1,
      initialFrameWidth: "100%",
      ...this.config.ueditorConfig
    };
    this.editor = o.getEditor(this.editorId, n), this.editor.ready(() => {
      this.setupResizeListener(), this.doLayout(), this.config.onReady(), this.emit("ready");
    }), this.editor.addListener("contentChange", () => {
      const s = this.getContent();
      this.config.onChange(s), this.emit("change", s);
    });
  }
  /**
   * 注册UI插件 - 必须在 UE.getEditor() 调用前执行
   */
  registerUIPlugin() {
    window.UE.registerUI("liveeditor", (t, n) => {
      t.on("click", (s, d) => {
        const b = d.target, u = b.closest(`.${P.SectionClass}`);
        if (!u || (t.document.querySelectorAll(`.${P.SectionClass}`).forEach((L) => {
          L.classList.remove(P.SectionActiveClass);
        }), u.classList.add(P.SectionActiveClass), t.selection.getText()))
          return;
        let f = null;
        const h = t.selection.getRange().getClosedNode();
        h && h.tagName && h.tagName.toLowerCase() === "img" && (f = h), this.emit("section-click", { section: u, element: b, image: f });
      }), t.addListener("mouseover mouseout", (s, d) => {
        const b = d.target;
        if (t.document.querySelectorAll(`section:not(.${P.SectionClass})`).forEach((a) => {
          a.classList.remove(P.SectionHoverClass);
        }), !b.classList.contains(P.SectionClass)) {
          const a = b.closest(`section:not(.${P.SectionClass})`);
          s === "mouseover" && a && a.classList.add(P.SectionHoverClass);
        }
      });
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
  const o = R([]), t = R([]), n = R(0), s = R(!1), d = R(!1), b = R(!1), u = R(0), a = R(""), v = R(1), f = R(100), h = R(!0), L = () => r.categoryLoader ? r.categoryLoader : P.DefaultCategoryLoader, H = () => r.styleLoader ? r.styleLoader : P.DefaultStyleLoader, G = async () => {
    const U = L();
    if (U) {
      b.value = !0;
      try {
        o.value = await U();
      } catch (E) {
        console.error("Failed to load categories:", E), o.value = [];
      } finally {
        b.value = !1;
      }
    }
  }, X = async (U, E = !1) => {
    const ie = H();
    if (ie) {
      E ? d.value = !0 : s.value = !0;
      try {
        const M = await ie({
          categoryId: u.value,
          keywords: a.value,
          page: v.value,
          pageSize: f.value,
          ...U
        });
        E ? t.value = [...t.value, ...M.records] : t.value = M.records, n.value = M.total, f.value = M.pageSize;
        const fe = Math.ceil(M.total / f.value);
        h.value = v.value < fe;
      } catch (M) {
        console.error("Failed to load materials:", M), E || (t.value = [], n.value = 0, h.value = !1);
      } finally {
        E ? d.value = !1 : s.value = !1;
      }
    }
  }, de = async () => {
    d.value || !h.value || (v.value++, await X(void 0, !0));
  }, q = (U) => {
    u.value = U, v.value = 1, h.value = !0, X();
  }, T = (U) => {
    a.value = U, v.value = 1, h.value = !0, X();
  };
  return Je(async () => {
    await G(), await X();
  }), {
    // Data
    categories: o,
    materials: t,
    total: n,
    // Loading states
    loading: s,
    loadingMore: d,
    loadingCategories: b,
    // Filter states
    currentCategory: u,
    keywords: a,
    currentPage: v,
    hasMore: h,
    // Methods
    loadMaterials: X,
    loadMore: de,
    changeCategory: q,
    search: T
  };
}
const ce = class ce {
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
        const [s, d] = n.split(":").map((b) => b.trim());
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
    for (const n of ce.prefixes) {
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
      for (const n of ce.prefixes) {
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
          for (const s of ce.prefixes) {
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
B(ce, "prefixes", ["-moz-", "-o-", "-webkit-", "-ms-"]);
let Ke = ce;
const re = {
  /**
   * 从DOM元素创建处理器
   */
  fromDom(r) {
    return new Ke().dom(r);
  }
};
function ao() {
  const r = R(null), o = R(null), t = R({
    id: "",
    width: 100,
    rotate: 0,
    opacity: 1
  }), n = R({
    show: !1,
    element: null,
    width: 100,
    opacity: 1
  }), s = (u) => {
    r.value = u, t.value.id = u.getAttribute("data-section-id") || "";
    const a = re.fromDom(u), v = u.style.width || "100%";
    t.value.width = parseInt(v) || 100, t.value.rotate = a.get("rotatez", 0), t.value.opacity = a.get("opacity", 1);
  }, d = (u, a) => {
    n.value.element = a, n.value.show = !0, r.value = u;
    const v = re.fromDom(a), f = a.style.width || "100%";
    n.value.width = parseInt(f) || 100, n.value.opacity = v.get("opacity", 1);
  }, b = () => {
    r.value = null, o.value = null, n.value.show = !1, n.value.element = null;
  };
  return ve(() => t.value.width, (u) => {
    r.value && re.fromDom(r.value).merge("margin", "0 auto").merge("width", `${u}%`).toDom().remove("max-width").removeDomAttr("width");
  }), ve(() => t.value.rotate, (u) => {
    r.value && re.fromDom(r.value).merge("rotatez", u).toDom();
  }), ve(() => t.value.opacity, (u) => {
    r.value && re.fromDom(r.value).merge("opacity", u).toDom();
  }), ve(() => n.value.width, (u) => {
    n.value.element && re.fromDom(n.value.element).remove("max-width").merge("width", `${u}%`).toDom().removeDomAttr("width");
  }), ve(() => n.value.opacity, (u) => {
    n.value.element && re.fromDom(n.value.element).merge("opacity", u).toDom();
  }), {
    currentSection: r,
    currentElement: o,
    sectionData: t,
    imageData: n,
    prepareSectionStyle: s,
    prepareImageStyle: d,
    clearSelection: b
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
      const h = document.createElement("p"), L = document.createElement("br");
      h.appendChild(L), f.appendChild(h), r(u, () => {
        var H, G;
        v === "before" ? (H = a.parentNode) == null || H.insertBefore(f, a) : (G = a.parentNode) == null || G.insertBefore(f, a.nextSibling);
      }), u.selection.getRange().setStart(h, 0).setCursor(!1, !0);
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
}, Po = /* @__PURE__ */ _e({
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
    const t = r, n = o, s = R(""), d = R(null), b = () => {
      n("search", s.value);
    }, u = () => {
      if (!d.value || t.loading || t.loadingMore || !t.hasMore)
        return;
      const a = d.value, v = a.scrollTop, f = a.scrollHeight, h = a.clientHeight;
      v + h >= f - 50 && n("load-more");
    };
    return Je(() => {
      d.value = document.querySelector(".upd-material-item"), d.value && d.value.addEventListener("scroll", u);
    }), ft(() => {
      d.value && d.value.removeEventListener("scroll", u);
    }), (a, v) => (D(), O("div", co, [
      c("div", uo, [
        c("div", fo, [
          c("div", po, [
            c("div", vo, [
              c("div", ho, [
                c("div", {
                  class: Ve(["upd-category__title", { "upd-category__title--active": r.currentCategory === 0 }]),
                  onClick: v[0] || (v[0] = (f) => a.$emit("change-category", 0))
                }, " 全部 ", 2)
              ]),
              (D(!0), O(Be, null, Ne(r.categories, (f) => (D(), O("div", {
                key: f.id,
                class: "upd-category__item"
              }, [
                c("div", {
                  class: Ve(["upd-category__title", {
                    "upd-category__title--active": f.id === r.currentCategory || f._child && f._child.some((h) => h.id === r.currentCategory)
                  }]),
                  onClick: (h) => a.$emit("change-category", f.id)
                }, ye(f.title), 11, mo),
                f._child && f._child.length ? (D(), O("div", go, [
                  (D(!0), O(Be, null, Ne(f._child, (h) => (D(), O("div", {
                    key: h.id,
                    class: Ve(["upd-category__child-title", { "upd-category__child-title--active": h.id === r.currentCategory }]),
                    onClick: Bt((L) => a.$emit("change-category", h.id), ["stop"])
                  }, ye(h.title), 11, yo))), 128))
                ])) : ue("", !0)
              ]))), 128))
            ]),
            c("div", _o, [
              v[2] || (v[2] = c("div", { class: "upd-filter__text" }, null, -1)),
              c("div", bo, [
                W(c("input", {
                  "onUpdate:modelValue": v[1] || (v[1] = (f) => s.value = f),
                  type: "text",
                  placeholder: "样式ID或关键词",
                  onKeyup: Nt(b, ["enter"])
                }, null, 544), [
                  [Y, s.value]
                ])
              ])
            ])
          ]),
          c("div", wo, [
            r.loading ? (D(), O("div", Co, " 加载中... ")) : (D(), O("div", So, [
              (D(!0), O(Be, null, Ne(r.materials, (f) => (D(), O("div", {
                key: f.id,
                class: "upd-material-list__item",
                onClick: (h) => a.$emit("select", f)
              }, [
                c("div", {
                  class: "upd-material-list__preview",
                  innerHTML: f.html
                }, null, 8, Ro),
                c("div", $o, [
                  c("span", ko, ye(f.title), 1),
                  c("span", xo, "ID: " + ye(f.id), 1)
                ])
              ], 8, Eo))), 128)),
              r.loadingMore ? (D(), O("div", Do, " 加载更多... ")) : !r.hasMore && r.materials.length > 0 ? (D(), O("div", To, " 没有更多数据了 ")) : ue("", !0)
            ]))
          ])
        ])
      ])
    ]));
  }
}), Oe = (r, o) => {
  const t = r.__vccOpts || r;
  for (const [n, s] of o)
    t[n] = s;
  return t;
}, Oo = /* @__PURE__ */ Oe(Po, [["__scopeId", "data-v-797b48ca"]]), Lo = ["width", "height", "stroke"], jo = /* @__PURE__ */ _e({
  __name: "IconClose",
  props: {
    size: { default: 24 },
    strokeColor: { default: "currentColor" }
  },
  setup(r) {
    return (o, t) => (D(), O("svg", {
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
}), Ao = /* @__PURE__ */ Oe(jo, [["__scopeId", "data-v-218750c8"]]), Io = {
  key: 0,
  class: "upd-section-tools__panel"
}, zo = { class: "upd-section-tools__body" }, Uo = { class: "upd-section-tools__actions" }, Mo = { class: "upd-section-tools__line" }, Fo = { class: "upd-section-tools__field" }, Ho = { class: "upd-section-tools__line" }, Vo = { class: "upd-section-tools__field" }, Bo = { class: "upd-section-tools__panel" }, No = { class: "upd-section-tools__head" }, Wo = { class: "upd-section-tools__desc" }, Yo = { class: "upd-section-tools__body" }, qo = { class: "upd-section-tools__actions" }, Ko = { class: "upd-section-tools__line" }, Jo = { class: "upd-section-tools__field" }, Go = { class: "upd-section-tools__line" }, Xo = { class: "upd-section-tools__field" }, Zo = { class: "upd-section-tools__line" }, Qo = { class: "upd-section-tools__field" }, en = /* @__PURE__ */ _e({
  __name: "SectionTools",
  props: {
    sectionData: {},
    imageData: {},
    position: {}
  },
  emits: ["action", "image-action", "close"],
  setup(r) {
    return (o, t) => (D(), O("div", {
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
        Ye(Ao, {
          size: 16,
          "stroke-color": "#fff"
        })
      ]),
      r.imageData.show ? (D(), O("div", Io, [
        t[21] || (t[21] = c("div", { class: "upd-section-tools__head" }, [
          c("span", { class: "upd-section-tools__title" }, "图片")
        ], -1)),
        c("div", zo, [
          c("div", Uo, [
            c("div", {
              class: "upd-section-tools__action-btn",
              onClick: t[1] || (t[1] = (n) => o.$emit("image-action", "change"))
            }, " 换图 ")
          ]),
          c("div", Mo, [
            t[19] || (t[19] = c("div", { class: "upd-section-tools__label" }, "宽度%", -1)),
            c("div", Fo, [
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
      ])) : ue("", !0),
      c("div", Bo, [
        c("div", No, [
          t[22] || (t[22] = c("span", { class: "upd-section-tools__title" }, "内容块", -1)),
          c("span", Wo, " 样式ID " + ye(r.sectionData.id || "-"), 1)
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
}), tn = /* @__PURE__ */ Oe(en, [["__scopeId", "data-v-f465a212"]]), on = ["width", "height", "stroke"], nn = /* @__PURE__ */ _e({
  __name: "IconCheck",
  props: {
    size: { default: 24 },
    strokeColor: { default: "currentColor" }
  },
  setup(r) {
    return (o, t) => (D(), O("svg", {
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
}), rn = /* @__PURE__ */ Oe(nn, [["__scopeId", "data-v-0ae058a4"]]), sn = { class: "ueditor-plus-designer" }, an = { class: "ueditor-plus-designer__body" }, ln = {
  key: 0,
  class: "ueditor-plus-designer__material"
}, cn = { class: "ueditor-plus-designer__editor" }, un = { class: "upd-editor-instance" }, dn = ["id"], fn = {
  key: 0,
  class: "upd-toolbar"
}, pn = /* @__PURE__ */ _e({
  __name: "Designer",
  props: {
    config: { default: () => ({}) },
    isIframe: { type: Boolean, default: !1 }
  },
  emits: ["ready", "change", "confirm"],
  setup(r, { expose: o, emit: t }) {
    const n = r, s = t, d = R(null), b = R(`upd_${Date.now()}`), u = R(!0), a = R(!1), v = R({ left: 0, top: 0 }), {
      categories: f,
      materials: h,
      total: L,
      loading: H,
      loadingMore: G,
      currentCategory: X,
      hasMore: de,
      changeCategory: q,
      search: T,
      loadMore: U
    } = so(n.config), {
      currentSection: E,
      sectionData: ie,
      imageData: M,
      prepareSectionStyle: fe,
      prepareImageStyle: Le,
      clearSelection: be
    } = ao(), {
      clearSectionFormat: je,
      insertSection: we,
      selectSection: Ce,
      deleteSection: K,
      moveSectionUp: Z,
      moveSectionDown: ee
    } = lo();
    Je(async () => {
      const m = document.getElementById(b.value);
      if (m) {
        d.value = new io({
          ...n.config,
          container: m
        });
        try {
          await d.value.init(), d.value.on("ready", () => {
            s("ready"), se();
          }), d.value.on("change", (w) => {
            s("change", w);
          }), d.value.on("section-click", Re), window.addEventListener("resize", se);
        } catch (w) {
          console.error("Failed to initialize designer:", w);
        }
      }
    }), ft(() => {
      var m;
      window.removeEventListener("resize", se), (m = d.value) == null || m.destroy();
    });
    const Se = (m) => {
      d.value && d.value.insertSection(m.html, { id: m.id });
    }, Ee = (m) => {
      T(m);
    }, Re = ({ section: m, element: w, image: z }) => {
      E.value = m, fe(m), z ? Le(m, z) : M.value.show = !1, a.value = !0, pe(m);
    }, pe = (m) => {
      if (!d.value) return;
      const w = d.value.getEditor();
      if (!w) return;
      const z = document.querySelector(`#${b.value}`);
      if (!z) return;
      const te = z.querySelector(".edui-editor-iframeholder > iframe");
      if (!te) return;
      const oe = w.document, S = $e(m, te, oe), j = 320, k = 350;
      let Q = S.left + (S.width - j) / 2 - S.relativeLeft;
      Q = Math.max(0, Math.min(Q, S.containerWidth - j));
      let J;
      if (S.spaceTop > S.spaceBottom && S.spaceTop > k)
        J = S.top - k - S.relativeTop, J = Math.max(0, J);
      else {
        J = S.top + S.height - S.relativeTop;
        const Te = S.top + S.height + S.spaceBottom - S.relativeTop - k;
        J = Math.min(J, Te);
      }
      v.value = {
        left: Q,
        top: J
      };
    }, $e = (m, w, z) => {
      const te = document.querySelector(".ueditor-plus-designer");
      if (!te)
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
      const oe = w.getBoundingClientRect(), S = m.getBoundingClientRect(), j = te.getBoundingClientRect(), k = {
        left: oe.left + S.left - z.documentElement.scrollLeft,
        top: oe.top + S.top - z.documentElement.scrollTop,
        width: S.width,
        height: S.height,
        containerWidth: j.width,
        containerHeight: j.height,
        spaceTop: 0,
        spaceBottom: 0,
        spaceLeft: 0,
        spaceRight: 0,
        relativeLeft: j.left,
        relativeTop: j.top
      };
      return k.spaceTop = k.top - j.top, k.spaceLeft = k.left - j.left, k.spaceBottom = j.top + j.height - (k.top + k.height), k.spaceRight = j.left + j.width - (k.left + k.width), k;
    }, se = () => {
      a.value && E.value && pe(E.value);
    }, V = () => {
      E.value && E.value.classList.remove(P.SectionActiveClass), a.value = !1, be();
    }, ke = (m) => {
      if (!d.value || !E.value) return;
      const w = d.value.getEditor();
      if (w)
        switch (m) {
          case "clearFormat":
            je(w, E.value), V();
            break;
          case "newSectionBefore":
            we(w, E.value, "before"), V();
            break;
          case "newSectionAfter":
            we(w, E.value, "after"), V();
            break;
          case "select":
            Ce(w, E.value), V();
            break;
          case "delete":
            K(w, E.value), V();
            break;
          case "moveUp":
            Z(w, E.value), V();
            break;
          case "moveDown":
            ee(w, E.value), V();
            break;
        }
    }, Ae = (m) => {
      console.log("Image action:", m);
    }, Ie = () => {
      if (d.value) {
        const m = d.value.getContent();
        s("confirm", m);
      }
    };
    return o({
      getContent: () => {
        var m;
        return ((m = d.value) == null ? void 0 : m.getContent()) || "";
      },
      setContent: (m) => {
        var w;
        (w = d.value) == null || w.setContent(m);
      }
    }), (m, w) => (D(), O("div", sn, [
      c("div", an, [
        u.value ? (D(), O("div", ln, [
          Ye(Oo, {
            categories: N(f),
            materials: N(h),
            total: N(L),
            "current-category": N(X),
            loading: N(H),
            "loading-more": N(G),
            "has-more": N(de),
            onSelect: Se,
            onChangeCategory: N(q),
            onSearch: Ee,
            onLoadMore: N(U)
          }, null, 8, ["categories", "materials", "total", "current-category", "loading", "loading-more", "has-more", "onChangeCategory", "onLoadMore"])
        ])) : ue("", !0),
        c("div", cn, [
          c("div", un, [
            c("div", {
              id: b.value,
              style: { height: "100%" }
            }, null, 8, dn)
          ]),
          r.isIframe ? (D(), O("div", fn, [
            c("a", {
              class: "upd-toolbar__item",
              href: "javascript:;",
              onClick: Ie
            }, [
              Ye(rn, { size: 16 }),
              w[0] || (w[0] = qt(" 完成 ", -1))
            ])
          ])) : ue("", !0)
        ])
      ]),
      a.value ? (D(), Yt(tn, {
        key: 0,
        "section-data": N(ie),
        "image-data": N(M),
        position: v.value,
        onAction: ke,
        onImageAction: Ae,
        onClose: V
      }, null, 8, ["section-data", "image-data", "position"])) : ue("", !0)
    ]));
  }
}), vn = Vt(pn), _n = Mt((r, o) => {
  const t = Ft(null);
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
