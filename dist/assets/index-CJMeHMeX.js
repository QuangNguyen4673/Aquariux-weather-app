var Z1 = (a, i) => () => (i || a((i = { exports: {} }).exports, i), i.exports);
var ED = Z1((wD, vs) => {
  (function () {
    const i = document.createElement("link").relList;
    if (i && i.supports && i.supports("modulepreload")) return;
    for (const f of document.querySelectorAll('link[rel="modulepreload"]'))
      s(f);
    new MutationObserver((f) => {
      for (const o of f)
        if (o.type === "childList")
          for (const h of o.addedNodes)
            h.tagName === "LINK" && h.rel === "modulepreload" && s(h);
    }).observe(document, { childList: !0, subtree: !0 });
    function u(f) {
      const o = {};
      return (
        f.integrity && (o.integrity = f.integrity),
        f.referrerPolicy && (o.referrerPolicy = f.referrerPolicy),
        f.crossOrigin === "use-credentials"
          ? (o.credentials = "include")
          : f.crossOrigin === "anonymous"
            ? (o.credentials = "omit")
            : (o.credentials = "same-origin"),
        o
      );
    }
    function s(f) {
      if (f.ep) return;
      f.ep = !0;
      const o = u(f);
      fetch(f.href, o);
    }
  })();
  function p0(a) {
    return a &&
      a.__esModule &&
      Object.prototype.hasOwnProperty.call(a, "default")
      ? a.default
      : a;
  }
  var Xf = { exports: {} },
    _u = {};
  /**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ny;
  function X1() {
    if (Ny) return _u;
    Ny = 1;
    var a = Symbol.for("react.transitional.element"),
      i = Symbol.for("react.fragment");
    function u(s, f, o) {
      var h = null;
      if (
        (o !== void 0 && (h = "" + o),
        f.key !== void 0 && (h = "" + f.key),
        "key" in f)
      ) {
        o = {};
        for (var g in f) g !== "key" && (o[g] = f[g]);
      } else o = f;
      return (
        (f = o.ref),
        { $$typeof: a, type: s, key: h, ref: f !== void 0 ? f : null, props: o }
      );
    }
    return (_u.Fragment = i), (_u.jsx = u), (_u.jsxs = u), _u;
  }
  var zy;
  function Q1() {
    return zy || ((zy = 1), (Xf.exports = X1())), Xf.exports;
  }
  var fe = Q1(),
    Qf = { exports: {} },
    _e = {};
  /**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Yy;
  function K1() {
    if (Yy) return _e;
    Yy = 1;
    var a = Symbol.for("react.transitional.element"),
      i = Symbol.for("react.portal"),
      u = Symbol.for("react.fragment"),
      s = Symbol.for("react.strict_mode"),
      f = Symbol.for("react.profiler"),
      o = Symbol.for("react.consumer"),
      h = Symbol.for("react.context"),
      g = Symbol.for("react.forward_ref"),
      v = Symbol.for("react.suspense"),
      y = Symbol.for("react.memo"),
      S = Symbol.for("react.lazy"),
      A = Symbol.iterator;
    function T(b) {
      return b === null || typeof b != "object"
        ? null
        : ((b = (A && b[A]) || b["@@iterator"]),
          typeof b == "function" ? b : null);
    }
    var U = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      C = Object.assign,
      Q = {};
    function G(b, B, W) {
      (this.props = b),
        (this.context = B),
        (this.refs = Q),
        (this.updater = W || U);
    }
    (G.prototype.isReactComponent = {}),
      (G.prototype.setState = function (b, B) {
        if (typeof b != "object" && typeof b != "function" && b != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables.",
          );
        this.updater.enqueueSetState(this, b, B, "setState");
      }),
      (G.prototype.forceUpdate = function (b) {
        this.updater.enqueueForceUpdate(this, b, "forceUpdate");
      });
    function q() {}
    q.prototype = G.prototype;
    function J(b, B, W) {
      (this.props = b),
        (this.context = B),
        (this.refs = Q),
        (this.updater = W || U);
    }
    var P = (J.prototype = new q());
    (P.constructor = J), C(P, G.prototype), (P.isPureReactComponent = !0);
    var ye = Array.isArray,
      E = { H: null, A: null, T: null, S: null, V: null },
      he = Object.prototype.hasOwnProperty;
    function be(b, B, W, K, re, Ee) {
      return (
        (W = Ee.ref),
        {
          $$typeof: a,
          type: b,
          key: B,
          ref: W !== void 0 ? W : null,
          props: Ee,
        }
      );
    }
    function de(b, B) {
      return be(b.type, B, void 0, void 0, void 0, b.props);
    }
    function De(b) {
      return typeof b == "object" && b !== null && b.$$typeof === a;
    }
    function Qe(b) {
      var B = { "=": "=0", ":": "=2" };
      return (
        "$" +
        b.replace(/[=:]/g, function (W) {
          return B[W];
        })
      );
    }
    var ot = /\/+/g;
    function st(b, B) {
      return typeof b == "object" && b !== null && b.key != null
        ? Qe("" + b.key)
        : B.toString(36);
    }
    function Ct() {}
    function ea(b) {
      switch (b.status) {
        case "fulfilled":
          return b.value;
        case "rejected":
          throw b.reason;
        default:
          switch (
            (typeof b.status == "string"
              ? b.then(Ct, Ct)
              : ((b.status = "pending"),
                b.then(
                  function (B) {
                    b.status === "pending" &&
                      ((b.status = "fulfilled"), (b.value = B));
                  },
                  function (B) {
                    b.status === "pending" &&
                      ((b.status = "rejected"), (b.reason = B));
                  },
                )),
            b.status)
          ) {
            case "fulfilled":
              return b.value;
            case "rejected":
              throw b.reason;
          }
      }
      throw b;
    }
    function Ue(b, B, W, K, re) {
      var Ee = typeof b;
      (Ee === "undefined" || Ee === "boolean") && (b = null);
      var Se = !1;
      if (b === null) Se = !0;
      else
        switch (Ee) {
          case "bigint":
          case "string":
          case "number":
            Se = !0;
            break;
          case "object":
            switch (b.$$typeof) {
              case a:
              case i:
                Se = !0;
                break;
              case S:
                return (Se = b._init), Ue(Se(b._payload), B, W, K, re);
            }
        }
      if (Se)
        return (
          (re = re(b)),
          (Se = K === "" ? "." + st(b, 0) : K),
          ye(re)
            ? ((W = ""),
              Se != null && (W = Se.replace(ot, "$&/") + "/"),
              Ue(re, B, W, "", function (it) {
                return it;
              }))
            : re != null &&
              (De(re) &&
                (re = de(
                  re,
                  W +
                    (re.key == null || (b && b.key === re.key)
                      ? ""
                      : ("" + re.key).replace(ot, "$&/") + "/") +
                    Se,
                )),
              B.push(re)),
          1
        );
      Se = 0;
      var Ht = K === "" ? "." : K + ":";
      if (ye(b))
        for (var Ie = 0; Ie < b.length; Ie++)
          (K = b[Ie]), (Ee = Ht + st(K, Ie)), (Se += Ue(K, B, W, Ee, re));
      else if (((Ie = T(b)), typeof Ie == "function"))
        for (b = Ie.call(b), Ie = 0; !(K = b.next()).done; )
          (K = K.value), (Ee = Ht + st(K, Ie++)), (Se += Ue(K, B, W, Ee, re));
      else if (Ee === "object") {
        if (typeof b.then == "function") return Ue(ea(b), B, W, K, re);
        throw (
          ((B = String(b)),
          Error(
            "Objects are not valid as a React child (found: " +
              (B === "[object Object]"
                ? "object with keys {" + Object.keys(b).join(", ") + "}"
                : B) +
              "). If you meant to render a collection of children, use an array instead.",
          ))
        );
      }
      return Se;
    }
    function H(b, B, W) {
      if (b == null) return b;
      var K = [],
        re = 0;
      return (
        Ue(b, K, "", "", function (Ee) {
          return B.call(W, Ee, re++);
        }),
        K
      );
    }
    function F(b) {
      if (b._status === -1) {
        var B = b._result;
        (B = B()),
          B.then(
            function (W) {
              (b._status === 0 || b._status === -1) &&
                ((b._status = 1), (b._result = W));
            },
            function (W) {
              (b._status === 0 || b._status === -1) &&
                ((b._status = 2), (b._result = W));
            },
          ),
          b._status === -1 && ((b._status = 0), (b._result = B));
      }
      if (b._status === 1) return b._result.default;
      throw b._result;
    }
    var ue =
      typeof reportError == "function"
        ? reportError
        : function (b) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var B = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof b == "object" &&
                  b !== null &&
                  typeof b.message == "string"
                    ? String(b.message)
                    : String(b),
                error: b,
              });
              if (!window.dispatchEvent(B)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", b);
              return;
            }
            console.error(b);
          };
    function Oe() {}
    return (
      (_e.Children = {
        map: H,
        forEach: function (b, B, W) {
          H(
            b,
            function () {
              B.apply(this, arguments);
            },
            W,
          );
        },
        count: function (b) {
          var B = 0;
          return (
            H(b, function () {
              B++;
            }),
            B
          );
        },
        toArray: function (b) {
          return (
            H(b, function (B) {
              return B;
            }) || []
          );
        },
        only: function (b) {
          if (!De(b))
            throw Error(
              "React.Children.only expected to receive a single React element child.",
            );
          return b;
        },
      }),
      (_e.Component = G),
      (_e.Fragment = u),
      (_e.Profiler = f),
      (_e.PureComponent = J),
      (_e.StrictMode = s),
      (_e.Suspense = v),
      (_e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E),
      (_e.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function (b) {
          return E.H.useMemoCache(b);
        },
      }),
      (_e.cache = function (b) {
        return function () {
          return b.apply(null, arguments);
        };
      }),
      (_e.cloneElement = function (b, B, W) {
        if (b == null)
          throw Error(
            "The argument must be a React element, but you passed " + b + ".",
          );
        var K = C({}, b.props),
          re = b.key,
          Ee = void 0;
        if (B != null)
          for (Se in (B.ref !== void 0 && (Ee = void 0),
          B.key !== void 0 && (re = "" + B.key),
          B))
            !he.call(B, Se) ||
              Se === "key" ||
              Se === "__self" ||
              Se === "__source" ||
              (Se === "ref" && B.ref === void 0) ||
              (K[Se] = B[Se]);
        var Se = arguments.length - 2;
        if (Se === 1) K.children = W;
        else if (1 < Se) {
          for (var Ht = Array(Se), Ie = 0; Ie < Se; Ie++)
            Ht[Ie] = arguments[Ie + 2];
          K.children = Ht;
        }
        return be(b.type, re, void 0, void 0, Ee, K);
      }),
      (_e.createContext = function (b) {
        return (
          (b = {
            $$typeof: h,
            _currentValue: b,
            _currentValue2: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }),
          (b.Provider = b),
          (b.Consumer = { $$typeof: o, _context: b }),
          b
        );
      }),
      (_e.createElement = function (b, B, W) {
        var K,
          re = {},
          Ee = null;
        if (B != null)
          for (K in (B.key !== void 0 && (Ee = "" + B.key), B))
            he.call(B, K) &&
              K !== "key" &&
              K !== "__self" &&
              K !== "__source" &&
              (re[K] = B[K]);
        var Se = arguments.length - 2;
        if (Se === 1) re.children = W;
        else if (1 < Se) {
          for (var Ht = Array(Se), Ie = 0; Ie < Se; Ie++)
            Ht[Ie] = arguments[Ie + 2];
          re.children = Ht;
        }
        if (b && b.defaultProps)
          for (K in ((Se = b.defaultProps), Se))
            re[K] === void 0 && (re[K] = Se[K]);
        return be(b, Ee, void 0, void 0, null, re);
      }),
      (_e.createRef = function () {
        return { current: null };
      }),
      (_e.forwardRef = function (b) {
        return { $$typeof: g, render: b };
      }),
      (_e.isValidElement = De),
      (_e.lazy = function (b) {
        return { $$typeof: S, _payload: { _status: -1, _result: b }, _init: F };
      }),
      (_e.memo = function (b, B) {
        return { $$typeof: y, type: b, compare: B === void 0 ? null : B };
      }),
      (_e.startTransition = function (b) {
        var B = E.T,
          W = {};
        E.T = W;
        try {
          var K = b(),
            re = E.S;
          re !== null && re(W, K),
            typeof K == "object" &&
              K !== null &&
              typeof K.then == "function" &&
              K.then(Oe, ue);
        } catch (Ee) {
          ue(Ee);
        } finally {
          E.T = B;
        }
      }),
      (_e.unstable_useCacheRefresh = function () {
        return E.H.useCacheRefresh();
      }),
      (_e.use = function (b) {
        return E.H.use(b);
      }),
      (_e.useActionState = function (b, B, W) {
        return E.H.useActionState(b, B, W);
      }),
      (_e.useCallback = function (b, B) {
        return E.H.useCallback(b, B);
      }),
      (_e.useContext = function (b) {
        return E.H.useContext(b);
      }),
      (_e.useDebugValue = function () {}),
      (_e.useDeferredValue = function (b, B) {
        return E.H.useDeferredValue(b, B);
      }),
      (_e.useEffect = function (b, B, W) {
        var K = E.H;
        if (typeof W == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React.",
          );
        return K.useEffect(b, B);
      }),
      (_e.useId = function () {
        return E.H.useId();
      }),
      (_e.useImperativeHandle = function (b, B, W) {
        return E.H.useImperativeHandle(b, B, W);
      }),
      (_e.useInsertionEffect = function (b, B) {
        return E.H.useInsertionEffect(b, B);
      }),
      (_e.useLayoutEffect = function (b, B) {
        return E.H.useLayoutEffect(b, B);
      }),
      (_e.useMemo = function (b, B) {
        return E.H.useMemo(b, B);
      }),
      (_e.useOptimistic = function (b, B) {
        return E.H.useOptimistic(b, B);
      }),
      (_e.useReducer = function (b, B, W) {
        return E.H.useReducer(b, B, W);
      }),
      (_e.useRef = function (b) {
        return E.H.useRef(b);
      }),
      (_e.useState = function (b) {
        return E.H.useState(b);
      }),
      (_e.useSyncExternalStore = function (b, B, W) {
        return E.H.useSyncExternalStore(b, B, W);
      }),
      (_e.useTransition = function () {
        return E.H.useTransition();
      }),
      (_e.version = "19.1.0"),
      _e
    );
  }
  var Uy;
  function po() {
    return Uy || ((Uy = 1), (Qf.exports = K1())), Qf.exports;
  }
  var z = po();
  const S0 = p0(z);
  var Kf = { exports: {} },
    Mu = {},
    Wf = { exports: {} },
    Jf = {};
  /**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Cy;
  function W1() {
    return (
      Cy ||
        ((Cy = 1),
        (function (a) {
          function i(H, F) {
            var ue = H.length;
            H.push(F);
            e: for (; 0 < ue; ) {
              var Oe = (ue - 1) >>> 1,
                b = H[Oe];
              if (0 < f(b, F)) (H[Oe] = F), (H[ue] = b), (ue = Oe);
              else break e;
            }
          }
          function u(H) {
            return H.length === 0 ? null : H[0];
          }
          function s(H) {
            if (H.length === 0) return null;
            var F = H[0],
              ue = H.pop();
            if (ue !== F) {
              H[0] = ue;
              e: for (var Oe = 0, b = H.length, B = b >>> 1; Oe < B; ) {
                var W = 2 * (Oe + 1) - 1,
                  K = H[W],
                  re = W + 1,
                  Ee = H[re];
                if (0 > f(K, ue))
                  re < b && 0 > f(Ee, K)
                    ? ((H[Oe] = Ee), (H[re] = ue), (Oe = re))
                    : ((H[Oe] = K), (H[W] = ue), (Oe = W));
                else if (re < b && 0 > f(Ee, ue))
                  (H[Oe] = Ee), (H[re] = ue), (Oe = re);
                else break e;
              }
            }
            return F;
          }
          function f(H, F) {
            var ue = H.sortIndex - F.sortIndex;
            return ue !== 0 ? ue : H.id - F.id;
          }
          if (
            ((a.unstable_now = void 0),
            typeof performance == "object" &&
              typeof performance.now == "function")
          ) {
            var o = performance;
            a.unstable_now = function () {
              return o.now();
            };
          } else {
            var h = Date,
              g = h.now();
            a.unstable_now = function () {
              return h.now() - g;
            };
          }
          var v = [],
            y = [],
            S = 1,
            A = null,
            T = 3,
            U = !1,
            C = !1,
            Q = !1,
            G = !1,
            q = typeof setTimeout == "function" ? setTimeout : null,
            J = typeof clearTimeout == "function" ? clearTimeout : null,
            P = typeof setImmediate < "u" ? setImmediate : null;
          function ye(H) {
            for (var F = u(y); F !== null; ) {
              if (F.callback === null) s(y);
              else if (F.startTime <= H)
                s(y), (F.sortIndex = F.expirationTime), i(v, F);
              else break;
              F = u(y);
            }
          }
          function E(H) {
            if (((Q = !1), ye(H), !C))
              if (u(v) !== null) (C = !0), he || ((he = !0), st());
              else {
                var F = u(y);
                F !== null && Ue(E, F.startTime - H);
              }
          }
          var he = !1,
            be = -1,
            de = 5,
            De = -1;
          function Qe() {
            return G ? !0 : !(a.unstable_now() - De < de);
          }
          function ot() {
            if (((G = !1), he)) {
              var H = a.unstable_now();
              De = H;
              var F = !0;
              try {
                e: {
                  (C = !1), Q && ((Q = !1), J(be), (be = -1)), (U = !0);
                  var ue = T;
                  try {
                    t: {
                      for (
                        ye(H), A = u(v);
                        A !== null && !(A.expirationTime > H && Qe());

                      ) {
                        var Oe = A.callback;
                        if (typeof Oe == "function") {
                          (A.callback = null), (T = A.priorityLevel);
                          var b = Oe(A.expirationTime <= H);
                          if (
                            ((H = a.unstable_now()), typeof b == "function")
                          ) {
                            (A.callback = b), ye(H), (F = !0);
                            break t;
                          }
                          A === u(v) && s(v), ye(H);
                        } else s(v);
                        A = u(v);
                      }
                      if (A !== null) F = !0;
                      else {
                        var B = u(y);
                        B !== null && Ue(E, B.startTime - H), (F = !1);
                      }
                    }
                    break e;
                  } finally {
                    (A = null), (T = ue), (U = !1);
                  }
                  F = void 0;
                }
              } finally {
                F ? st() : (he = !1);
              }
            }
          }
          var st;
          if (typeof P == "function")
            st = function () {
              P(ot);
            };
          else if (typeof MessageChannel < "u") {
            var Ct = new MessageChannel(),
              ea = Ct.port2;
            (Ct.port1.onmessage = ot),
              (st = function () {
                ea.postMessage(null);
              });
          } else
            st = function () {
              q(ot, 0);
            };
          function Ue(H, F) {
            be = q(function () {
              H(a.unstable_now());
            }, F);
          }
          (a.unstable_IdlePriority = 5),
            (a.unstable_ImmediatePriority = 1),
            (a.unstable_LowPriority = 4),
            (a.unstable_NormalPriority = 3),
            (a.unstable_Profiling = null),
            (a.unstable_UserBlockingPriority = 2),
            (a.unstable_cancelCallback = function (H) {
              H.callback = null;
            }),
            (a.unstable_forceFrameRate = function (H) {
              0 > H || 125 < H
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                  )
                : (de = 0 < H ? Math.floor(1e3 / H) : 5);
            }),
            (a.unstable_getCurrentPriorityLevel = function () {
              return T;
            }),
            (a.unstable_next = function (H) {
              switch (T) {
                case 1:
                case 2:
                case 3:
                  var F = 3;
                  break;
                default:
                  F = T;
              }
              var ue = T;
              T = F;
              try {
                return H();
              } finally {
                T = ue;
              }
            }),
            (a.unstable_requestPaint = function () {
              G = !0;
            }),
            (a.unstable_runWithPriority = function (H, F) {
              switch (H) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                  break;
                default:
                  H = 3;
              }
              var ue = T;
              T = H;
              try {
                return F();
              } finally {
                T = ue;
              }
            }),
            (a.unstable_scheduleCallback = function (H, F, ue) {
              var Oe = a.unstable_now();
              switch (
                (typeof ue == "object" && ue !== null
                  ? ((ue = ue.delay),
                    (ue = typeof ue == "number" && 0 < ue ? Oe + ue : Oe))
                  : (ue = Oe),
                H)
              ) {
                case 1:
                  var b = -1;
                  break;
                case 2:
                  b = 250;
                  break;
                case 5:
                  b = 1073741823;
                  break;
                case 4:
                  b = 1e4;
                  break;
                default:
                  b = 5e3;
              }
              return (
                (b = ue + b),
                (H = {
                  id: S++,
                  callback: F,
                  priorityLevel: H,
                  startTime: ue,
                  expirationTime: b,
                  sortIndex: -1,
                }),
                ue > Oe
                  ? ((H.sortIndex = ue),
                    i(y, H),
                    u(v) === null &&
                      H === u(y) &&
                      (Q ? (J(be), (be = -1)) : (Q = !0), Ue(E, ue - Oe)))
                  : ((H.sortIndex = b),
                    i(v, H),
                    C || U || ((C = !0), he || ((he = !0), st()))),
                H
              );
            }),
            (a.unstable_shouldYield = Qe),
            (a.unstable_wrapCallback = function (H) {
              var F = T;
              return function () {
                var ue = T;
                T = F;
                try {
                  return H.apply(this, arguments);
                } finally {
                  T = ue;
                }
              };
            });
        })(Jf)),
      Jf
    );
  }
  var Hy;
  function J1() {
    return Hy || ((Hy = 1), (Wf.exports = W1())), Wf.exports;
  }
  var Ff = { exports: {} },
    Yt = {};
  /**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ly;
  function F1() {
    if (Ly) return Yt;
    Ly = 1;
    var a = po();
    function i(v) {
      var y = "https://react.dev/errors/" + v;
      if (1 < arguments.length) {
        y += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var S = 2; S < arguments.length; S++)
          y += "&args[]=" + encodeURIComponent(arguments[S]);
      }
      return (
        "Minified React error #" +
        v +
        "; visit " +
        y +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function u() {}
    var s = {
        d: {
          f: u,
          r: function () {
            throw Error(i(522));
          },
          D: u,
          C: u,
          L: u,
          m: u,
          X: u,
          S: u,
          M: u,
        },
        p: 0,
        findDOMNode: null,
      },
      f = Symbol.for("react.portal");
    function o(v, y, S) {
      var A =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: f,
        key: A == null ? null : "" + A,
        children: v,
        containerInfo: y,
        implementation: S,
      };
    }
    var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function g(v, y) {
      if (v === "font") return "";
      if (typeof y == "string") return y === "use-credentials" ? y : "";
    }
    return (
      (Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
      (Yt.createPortal = function (v, y) {
        var S =
          2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
          throw Error(i(299));
        return o(v, y, null, S);
      }),
      (Yt.flushSync = function (v) {
        var y = h.T,
          S = s.p;
        try {
          if (((h.T = null), (s.p = 2), v)) return v();
        } finally {
          (h.T = y), (s.p = S), s.d.f();
        }
      }),
      (Yt.preconnect = function (v, y) {
        typeof v == "string" &&
          (y
            ? ((y = y.crossOrigin),
              (y =
                typeof y == "string"
                  ? y === "use-credentials"
                    ? y
                    : ""
                  : void 0))
            : (y = null),
          s.d.C(v, y));
      }),
      (Yt.prefetchDNS = function (v) {
        typeof v == "string" && s.d.D(v);
      }),
      (Yt.preinit = function (v, y) {
        if (typeof v == "string" && y && typeof y.as == "string") {
          var S = y.as,
            A = g(S, y.crossOrigin),
            T = typeof y.integrity == "string" ? y.integrity : void 0,
            U = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
          S === "style"
            ? s.d.S(
                v,
                typeof y.precedence == "string" ? y.precedence : void 0,
                { crossOrigin: A, integrity: T, fetchPriority: U },
              )
            : S === "script" &&
              s.d.X(v, {
                crossOrigin: A,
                integrity: T,
                fetchPriority: U,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0,
              });
        }
      }),
      (Yt.preinitModule = function (v, y) {
        if (typeof v == "string")
          if (typeof y == "object" && y !== null) {
            if (y.as == null || y.as === "script") {
              var S = g(y.as, y.crossOrigin);
              s.d.M(v, {
                crossOrigin: S,
                integrity:
                  typeof y.integrity == "string" ? y.integrity : void 0,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0,
              });
            }
          } else y == null && s.d.M(v);
      }),
      (Yt.preload = function (v, y) {
        if (
          typeof v == "string" &&
          typeof y == "object" &&
          y !== null &&
          typeof y.as == "string"
        ) {
          var S = y.as,
            A = g(S, y.crossOrigin);
          s.d.L(v, S, {
            crossOrigin: A,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            type: typeof y.type == "string" ? y.type : void 0,
            fetchPriority:
              typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
            referrerPolicy:
              typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
            imageSrcSet:
              typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
            imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
            media: typeof y.media == "string" ? y.media : void 0,
          });
        }
      }),
      (Yt.preloadModule = function (v, y) {
        if (typeof v == "string")
          if (y) {
            var S = g(y.as, y.crossOrigin);
            s.d.m(v, {
              as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
              crossOrigin: S,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            });
          } else s.d.m(v);
      }),
      (Yt.requestFormReset = function (v) {
        s.d.r(v);
      }),
      (Yt.unstable_batchedUpdates = function (v, y) {
        return v(y);
      }),
      (Yt.useFormState = function (v, y, S) {
        return h.H.useFormState(v, y, S);
      }),
      (Yt.useFormStatus = function () {
        return h.H.useHostTransitionStatus();
      }),
      (Yt.version = "19.1.0"),
      Yt
    );
  }
  var jy;
  function $1() {
    if (jy) return Ff.exports;
    jy = 1;
    function a() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
        } catch (i) {
          console.error(i);
        }
    }
    return a(), (Ff.exports = F1()), Ff.exports;
  }
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ky;
  function P1() {
    if (ky) return Mu;
    ky = 1;
    var a = J1(),
      i = po(),
      u = $1();
    function s(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++)
          t += "&args[]=" + encodeURIComponent(arguments[l]);
      }
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function f(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function o(e) {
      var t = e,
        l = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
        while (e);
      }
      return t.tag === 3 ? l : null;
    }
    function h(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function g(e) {
      if (o(e) !== e) throw Error(s(188));
    }
    function v(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = o(e)), t === null)) throw Error(s(188));
        return t !== e ? null : e;
      }
      for (var l = e, n = t; ; ) {
        var r = l.return;
        if (r === null) break;
        var c = r.alternate;
        if (c === null) {
          if (((n = r.return), n !== null)) {
            l = n;
            continue;
          }
          break;
        }
        if (r.child === c.child) {
          for (c = r.child; c; ) {
            if (c === l) return g(r), e;
            if (c === n) return g(r), t;
            c = c.sibling;
          }
          throw Error(s(188));
        }
        if (l.return !== n.return) (l = r), (n = c);
        else {
          for (var d = !1, m = r.child; m; ) {
            if (m === l) {
              (d = !0), (l = r), (n = c);
              break;
            }
            if (m === n) {
              (d = !0), (n = r), (l = c);
              break;
            }
            m = m.sibling;
          }
          if (!d) {
            for (m = c.child; m; ) {
              if (m === l) {
                (d = !0), (l = c), (n = r);
                break;
              }
              if (m === n) {
                (d = !0), (n = c), (l = r);
                break;
              }
              m = m.sibling;
            }
            if (!d) throw Error(s(189));
          }
        }
        if (l.alternate !== n) throw Error(s(190));
      }
      if (l.tag !== 3) throw Error(s(188));
      return l.stateNode.current === l ? e : t;
    }
    function y(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (((t = y(e)), t !== null)) return t;
        e = e.sibling;
      }
      return null;
    }
    var S = Object.assign,
      A = Symbol.for("react.element"),
      T = Symbol.for("react.transitional.element"),
      U = Symbol.for("react.portal"),
      C = Symbol.for("react.fragment"),
      Q = Symbol.for("react.strict_mode"),
      G = Symbol.for("react.profiler"),
      q = Symbol.for("react.provider"),
      J = Symbol.for("react.consumer"),
      P = Symbol.for("react.context"),
      ye = Symbol.for("react.forward_ref"),
      E = Symbol.for("react.suspense"),
      he = Symbol.for("react.suspense_list"),
      be = Symbol.for("react.memo"),
      de = Symbol.for("react.lazy"),
      De = Symbol.for("react.activity"),
      Qe = Symbol.for("react.memo_cache_sentinel"),
      ot = Symbol.iterator;
    function st(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (ot && e[ot]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var Ct = Symbol.for("react.client.reference");
    function ea(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Ct ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case C:
          return "Fragment";
        case G:
          return "Profiler";
        case Q:
          return "StrictMode";
        case E:
          return "Suspense";
        case he:
          return "SuspenseList";
        case De:
          return "Activity";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case U:
            return "Portal";
          case P:
            return (e.displayName || "Context") + ".Provider";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case ye:
            var t = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = t.displayName || t.name || ""),
                (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
              e
            );
          case be:
            return (
              (t = e.displayName || null), t !== null ? t : ea(e.type) || "Memo"
            );
          case de:
            (t = e._payload), (e = e._init);
            try {
              return ea(e(t));
            } catch {}
        }
      return null;
    }
    var Ue = Array.isArray,
      H = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      F = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      ue = { pending: !1, data: null, method: null, action: null },
      Oe = [],
      b = -1;
    function B(e) {
      return { current: e };
    }
    function W(e) {
      0 > b || ((e.current = Oe[b]), (Oe[b] = null), b--);
    }
    function K(e, t) {
      b++, (Oe[b] = e.current), (e.current = t);
    }
    var re = B(null),
      Ee = B(null),
      Se = B(null),
      Ht = B(null);
    function Ie(e, t) {
      switch ((K(Se, t), K(Ee, e), K(re, null), t.nodeType)) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? iy(e) : 0;
          break;
        default:
          if (((e = t.tagName), (t = t.namespaceURI)))
            (t = iy(t)), (e = uy(t, e));
          else
            switch (e) {
              case "svg":
                e = 1;
                break;
              case "math":
                e = 2;
                break;
              default:
                e = 0;
            }
      }
      W(re), K(re, e);
    }
    function it() {
      W(re), W(Ee), W(Se);
    }
    function Ra(e) {
      e.memoizedState !== null && K(Ht, e);
      var t = re.current,
        l = uy(t, e.type);
      t !== l && (K(Ee, e), K(re, l));
    }
    function Il(e) {
      Ee.current === e && (W(re), W(Ee)),
        Ht.current === e && (W(Ht), (vu._currentValue = ue));
    }
    var bi = Object.prototype.hasOwnProperty,
      pa = a.unstable_scheduleCallback,
      _i = a.unstable_cancelCallback,
      js = a.unstable_shouldYield,
      Xu = a.unstable_requestPaint,
      ta = a.unstable_now,
      ks = a.unstable_getCurrentPriorityLevel,
      Qu = a.unstable_ImmediatePriority,
      Ku = a.unstable_UserBlockingPriority,
      aa = a.unstable_NormalPriority,
      en = a.unstable_LowPriority,
      Mi = a.unstable_IdlePriority,
      Di = a.log,
      Oa = a.unstable_setDisableYieldValue,
      Lt = null,
      Nt = null;
    function la(e) {
      if (
        (typeof Di == "function" && Oa(e),
        Nt && typeof Nt.setStrictMode == "function")
      )
        try {
          Nt.setStrictMode(Lt, e);
        } catch {}
    }
    var jt = Math.clz32 ? Math.clz32 : Ju,
      xa = Math.log,
      Wu = Math.LN2;
    function Ju(e) {
      return (e >>>= 0), e === 0 ? 32 : (31 - ((xa(e) / Wu) | 0)) | 0;
    }
    var tn = 256,
      Rn = 4194304;
    function Aa(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function Za(e, t, l) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var r = 0,
        c = e.suspendedLanes,
        d = e.pingedLanes;
      e = e.warmLanes;
      var m = n & 134217727;
      return (
        m !== 0
          ? ((n = m & ~c),
            n !== 0
              ? (r = Aa(n))
              : ((d &= m),
                d !== 0
                  ? (r = Aa(d))
                  : l || ((l = m & ~e), l !== 0 && (r = Aa(l)))))
          : ((m = n & ~c),
            m !== 0
              ? (r = Aa(m))
              : d !== 0
                ? (r = Aa(d))
                : l || ((l = n & ~e), l !== 0 && (r = Aa(l)))),
        r === 0
          ? 0
          : t !== 0 &&
              t !== r &&
              (t & c) === 0 &&
              ((c = r & -r),
              (l = t & -t),
              c >= l || (c === 32 && (l & 4194048) !== 0))
            ? t
            : r
      );
    }
    function gl(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Ei(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Fu() {
      var e = tn;
      return (tn <<= 1), (tn & 4194048) === 0 && (tn = 256), e;
    }
    function Ti() {
      var e = Rn;
      return (Rn <<= 1), (Rn & 62914560) === 0 && (Rn = 4194304), e;
    }
    function wi(e) {
      for (var t = [], l = 0; 31 > l; l++) t.push(e);
      return t;
    }
    function pl(e, t) {
      (e.pendingLanes |= t),
        t !== 268435456 &&
          ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
    }
    function On(e, t, l, n, r, c) {
      var d = e.pendingLanes;
      (e.pendingLanes = l),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.warmLanes = 0),
        (e.expiredLanes &= l),
        (e.entangledLanes &= l),
        (e.errorRecoveryDisabledLanes &= l),
        (e.shellSuspendCounter = 0);
      var m = e.entanglements,
        p = e.expirationTimes,
        O = e.hiddenUpdates;
      for (l = d & ~l; 0 < l; ) {
        var L = 31 - jt(l),
          k = 1 << L;
        (m[L] = 0), (p[L] = -1);
        var x = O[L];
        if (x !== null)
          for (O[L] = null, L = 0; L < x.length; L++) {
            var N = x[L];
            N !== null && (N.lane &= -536870913);
          }
        l &= ~k;
      }
      n !== 0 && an(e, n, 0),
        c !== 0 &&
          r === 0 &&
          e.tag !== 0 &&
          (e.suspendedLanes |= c & ~(d & ~t));
    }
    function an(e, t, l) {
      (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
      var n = 31 - jt(t);
      (e.entangledLanes |= t),
        (e.entanglements[n] = e.entanglements[n] | 1073741824 | (l & 4194090));
    }
    function $u(e, t) {
      var l = (e.entangledLanes |= t);
      for (e = e.entanglements; l; ) {
        var n = 31 - jt(l),
          r = 1 << n;
        (r & t) | (e[n] & t) && (e[n] |= t), (l &= ~r);
      }
    }
    function Ri(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function _(e) {
      return (
        (e &= -e),
        2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
      );
    }
    function w() {
      var e = F.p;
      return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Ty(e.type));
    }
    function Y(e, t) {
      var l = F.p;
      try {
        return (F.p = e), t();
      } finally {
        F.p = l;
      }
    }
    var V = Math.random().toString(36).slice(2),
      X = "__reactFiber$" + V,
      ae = "__reactProps$" + V,
      se = "__reactContainer$" + V,
      le = "__reactEvents$" + V,
      ce = "__reactListeners$" + V,
      I = "__reactHandles$" + V,
      ne = "__reactResources$" + V,
      me = "__reactMarker$" + V;
    function ze(e) {
      delete e[X], delete e[ae], delete e[le], delete e[ce], delete e[I];
    }
    function qe(e) {
      var t = e[X];
      if (t) return t;
      for (var l = e.parentNode; l; ) {
        if ((t = l[se] || l[X])) {
          if (
            ((l = t.alternate),
            t.child !== null || (l !== null && l.child !== null))
          )
            for (e = fy(e); e !== null; ) {
              if ((l = e[X])) return l;
              e = fy(e);
            }
          return t;
        }
        (e = l), (l = e.parentNode);
      }
      return null;
    }
    function ct(e) {
      if ((e = e[X] || e[se])) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function et(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(s(33));
    }
    function Ve(e) {
      var t = e[ne];
      return (
        t ||
          (t = e[ne] =
            { hoistableStyles: new Map(), hoistableScripts: new Map() }),
        t
      );
    }
    function we(e) {
      e[me] = !0;
    }
    var Xa = new Set(),
      Sl = {};
    function wt(e, t) {
      Rt(e, t), Rt(e + "Capture", t);
    }
    function Rt(e, t) {
      for (Sl[e] = t, e = 0; e < t.length; e++) Xa.add(t[e]);
    }
    var Oi = RegExp(
        "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
      ),
      bl = {},
      Na = {};
    function xn(e) {
      return bi.call(Na, e)
        ? !0
        : bi.call(bl, e)
          ? !1
          : Oi.test(e)
            ? (Na[e] = !0)
            : ((bl[e] = !0), !1);
    }
    function Qa(e, t, l) {
      if (xn(t))
        if (l === null) e.removeAttribute(t);
        else {
          switch (typeof l) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var n = t.toLowerCase().slice(0, 5);
              if (n !== "data-" && n !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, "" + l);
        }
    }
    function Be(e, t, l) {
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, "" + l);
      }
    }
    function tt(e, t, l, n) {
      if (n === null) e.removeAttribute(l);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(l);
            return;
        }
        e.setAttributeNS(t, l, "" + n);
      }
    }
    var _l, Ml;
    function $e(e) {
      if (_l === void 0)
        try {
          throw Error();
        } catch (l) {
          var t = l.stack.trim().match(/\n( *(at )?)/);
          (_l = (t && t[1]) || ""),
            (Ml =
              -1 <
              l.stack.indexOf(`
    at`)
                ? " (<anonymous>)"
                : -1 < l.stack.indexOf("@")
                  ? "@unknown:0:0"
                  : "");
        }
      return (
        `
` +
        _l +
        e +
        Ml
      );
    }
    var za = !1;
    function An(e, t) {
      if (!e || za) return "";
      za = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var n = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var k = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(k.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(k, []);
                  } catch (N) {
                    var x = N;
                  }
                  Reflect.construct(e, [], k);
                } else {
                  try {
                    k.call();
                  } catch (N) {
                    x = N;
                  }
                  e.call(k.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (N) {
                  x = N;
                }
                (k = e()) &&
                  typeof k.catch == "function" &&
                  k.catch(function () {});
              }
            } catch (N) {
              if (N && x && typeof N.stack == "string")
                return [N.stack, x.stack];
            }
            return [null, null];
          },
        };
        n.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        var r = Object.getOwnPropertyDescriptor(
          n.DetermineComponentFrameRoot,
          "name",
        );
        r &&
          r.configurable &&
          Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        var c = n.DetermineComponentFrameRoot(),
          d = c[0],
          m = c[1];
        if (d && m) {
          var p = d.split(`
`),
            O = m.split(`
`);
          for (
            r = n = 0;
            n < p.length && !p[n].includes("DetermineComponentFrameRoot");

          )
            n++;
          for (
            ;
            r < O.length && !O[r].includes("DetermineComponentFrameRoot");

          )
            r++;
          if (n === p.length || r === O.length)
            for (
              n = p.length - 1, r = O.length - 1;
              1 <= n && 0 <= r && p[n] !== O[r];

            )
              r--;
          for (; 1 <= n && 0 <= r; n--, r--)
            if (p[n] !== O[r]) {
              if (n !== 1 || r !== 1)
                do
                  if ((n--, r--, 0 > r || p[n] !== O[r])) {
                    var L =
                      `
` + p[n].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        L.includes("<anonymous>") &&
                        (L = L.replace("<anonymous>", e.displayName)),
                      L
                    );
                  }
                while (1 <= n && 0 <= r);
              break;
            }
        }
      } finally {
        (za = !1), (Error.prepareStackTrace = l);
      }
      return (l = e ? e.displayName || e.name : "") ? $e(l) : "";
    }
    function Bs(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return $e(e.type);
        case 16:
          return $e("Lazy");
        case 13:
          return $e("Suspense");
        case 19:
          return $e("SuspenseList");
        case 0:
        case 15:
          return An(e.type, !1);
        case 11:
          return An(e.type.render, !1);
        case 1:
          return An(e.type, !0);
        case 31:
          return $e("Activity");
        default:
          return "";
      }
    }
    function Io(e) {
      try {
        var t = "";
        do (t += Bs(e)), (e = e.return);
        while (e);
        return t;
      } catch (l) {
        return (
          `
Error generating stack: ` +
          l.message +
          `
` +
          l.stack
        );
      }
    }
    function na(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function ed(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
      );
    }
    function kv(e) {
      var t = ed(e) ? "checked" : "value",
        l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        n = "" + e[t];
      if (
        !e.hasOwnProperty(t) &&
        typeof l < "u" &&
        typeof l.get == "function" &&
        typeof l.set == "function"
      ) {
        var r = l.get,
          c = l.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return r.call(this);
            },
            set: function (d) {
              (n = "" + d), c.call(this, d);
            },
          }),
          Object.defineProperty(e, t, { enumerable: l.enumerable }),
          {
            getValue: function () {
              return n;
            },
            setValue: function (d) {
              n = "" + d;
            },
            stopTracking: function () {
              (e._valueTracker = null), delete e[t];
            },
          }
        );
      }
    }
    function Pu(e) {
      e._valueTracker || (e._valueTracker = kv(e));
    }
    function td(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var l = t.getValue(),
        n = "";
      return (
        e && (n = ed(e) ? (e.checked ? "true" : "false") : e.value),
        (e = n),
        e !== l ? (t.setValue(e), !0) : !1
      );
    }
    function Iu(e) {
      if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Bv = /[\n"\\]/g;
    function ia(e) {
      return e.replace(Bv, function (t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function Gs(e, t, l, n, r, c, d, m) {
      (e.name = ""),
        d != null &&
        typeof d != "function" &&
        typeof d != "symbol" &&
        typeof d != "boolean"
          ? (e.type = d)
          : e.removeAttribute("type"),
        t != null
          ? d === "number"
            ? ((t === 0 && e.value === "") || e.value != t) &&
              (e.value = "" + na(t))
            : e.value !== "" + na(t) && (e.value = "" + na(t))
          : (d !== "submit" && d !== "reset") || e.removeAttribute("value"),
        t != null
          ? qs(e, d, na(t))
          : l != null
            ? qs(e, d, na(l))
            : n != null && e.removeAttribute("value"),
        r == null && c != null && (e.defaultChecked = !!c),
        r != null &&
          (e.checked = r && typeof r != "function" && typeof r != "symbol"),
        m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean"
          ? (e.name = "" + na(m))
          : e.removeAttribute("name");
    }
    function ad(e, t, l, n, r, c, d, m) {
      if (
        (c != null &&
          typeof c != "function" &&
          typeof c != "symbol" &&
          typeof c != "boolean" &&
          (e.type = c),
        t != null || l != null)
      ) {
        if (!((c !== "submit" && c !== "reset") || t != null)) return;
        (l = l != null ? "" + na(l) : ""),
          (t = t != null ? "" + na(t) : l),
          m || t === e.value || (e.value = t),
          (e.defaultValue = t);
      }
      (n = n ?? r),
        (n = typeof n != "function" && typeof n != "symbol" && !!n),
        (e.checked = m ? e.checked : !!n),
        (e.defaultChecked = !!n),
        d != null &&
          typeof d != "function" &&
          typeof d != "symbol" &&
          typeof d != "boolean" &&
          (e.name = d);
    }
    function qs(e, t, l) {
      (t === "number" && Iu(e.ownerDocument) === e) ||
        e.defaultValue === "" + l ||
        (e.defaultValue = "" + l);
    }
    function Nn(e, t, l, n) {
      if (((e = e.options), t)) {
        t = {};
        for (var r = 0; r < l.length; r++) t["$" + l[r]] = !0;
        for (l = 0; l < e.length; l++)
          (r = t.hasOwnProperty("$" + e[l].value)),
            e[l].selected !== r && (e[l].selected = r),
            r && n && (e[l].defaultSelected = !0);
      } else {
        for (l = "" + na(l), t = null, r = 0; r < e.length; r++) {
          if (e[r].value === l) {
            (e[r].selected = !0), n && (e[r].defaultSelected = !0);
            return;
          }
          t !== null || e[r].disabled || (t = e[r]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function ld(e, t, l) {
      if (
        t != null &&
        ((t = "" + na(t)), t !== e.value && (e.value = t), l == null)
      ) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = l != null ? "" + na(l) : "";
    }
    function nd(e, t, l, n) {
      if (t == null) {
        if (n != null) {
          if (l != null) throw Error(s(92));
          if (Ue(n)) {
            if (1 < n.length) throw Error(s(93));
            n = n[0];
          }
          l = n;
        }
        l == null && (l = ""), (t = l);
      }
      (l = na(t)),
        (e.defaultValue = l),
        (n = e.textContent),
        n === l && n !== "" && n !== null && (e.value = n);
    }
    function zn(e, t) {
      if (t) {
        var l = e.firstChild;
        if (l && l === e.lastChild && l.nodeType === 3) {
          l.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Gv = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " ",
      ),
    );
    function id(e, t, l) {
      var n = t.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === ""
        ? n
          ? e.setProperty(t, "")
          : t === "float"
            ? (e.cssFloat = "")
            : (e[t] = "")
        : n
          ? e.setProperty(t, l)
          : typeof l != "number" || l === 0 || Gv.has(t)
            ? t === "float"
              ? (e.cssFloat = l)
              : (e[t] = ("" + l).trim())
            : (e[t] = l + "px");
    }
    function ud(e, t, l) {
      if (t != null && typeof t != "object") throw Error(s(62));
      if (((e = e.style), l != null)) {
        for (var n in l)
          !l.hasOwnProperty(n) ||
            (t != null && t.hasOwnProperty(n)) ||
            (n.indexOf("--") === 0
              ? e.setProperty(n, "")
              : n === "float"
                ? (e.cssFloat = "")
                : (e[n] = ""));
        for (var r in t)
          (n = t[r]), t.hasOwnProperty(r) && l[r] !== n && id(e, r, n);
      } else for (var c in t) t.hasOwnProperty(c) && id(e, c, t[c]);
    }
    function Vs(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var qv = new Map([
        ["acceptCharset", "accept-charset"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"],
        ["crossOrigin", "crossorigin"],
        ["accentHeight", "accent-height"],
        ["alignmentBaseline", "alignment-baseline"],
        ["arabicForm", "arabic-form"],
        ["baselineShift", "baseline-shift"],
        ["capHeight", "cap-height"],
        ["clipPath", "clip-path"],
        ["clipRule", "clip-rule"],
        ["colorInterpolation", "color-interpolation"],
        ["colorInterpolationFilters", "color-interpolation-filters"],
        ["colorProfile", "color-profile"],
        ["colorRendering", "color-rendering"],
        ["dominantBaseline", "dominant-baseline"],
        ["enableBackground", "enable-background"],
        ["fillOpacity", "fill-opacity"],
        ["fillRule", "fill-rule"],
        ["floodColor", "flood-color"],
        ["floodOpacity", "flood-opacity"],
        ["fontFamily", "font-family"],
        ["fontSize", "font-size"],
        ["fontSizeAdjust", "font-size-adjust"],
        ["fontStretch", "font-stretch"],
        ["fontStyle", "font-style"],
        ["fontVariant", "font-variant"],
        ["fontWeight", "font-weight"],
        ["glyphName", "glyph-name"],
        ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
        ["glyphOrientationVertical", "glyph-orientation-vertical"],
        ["horizAdvX", "horiz-adv-x"],
        ["horizOriginX", "horiz-origin-x"],
        ["imageRendering", "image-rendering"],
        ["letterSpacing", "letter-spacing"],
        ["lightingColor", "lighting-color"],
        ["markerEnd", "marker-end"],
        ["markerMid", "marker-mid"],
        ["markerStart", "marker-start"],
        ["overlinePosition", "overline-position"],
        ["overlineThickness", "overline-thickness"],
        ["paintOrder", "paint-order"],
        ["panose-1", "panose-1"],
        ["pointerEvents", "pointer-events"],
        ["renderingIntent", "rendering-intent"],
        ["shapeRendering", "shape-rendering"],
        ["stopColor", "stop-color"],
        ["stopOpacity", "stop-opacity"],
        ["strikethroughPosition", "strikethrough-position"],
        ["strikethroughThickness", "strikethrough-thickness"],
        ["strokeDasharray", "stroke-dasharray"],
        ["strokeDashoffset", "stroke-dashoffset"],
        ["strokeLinecap", "stroke-linecap"],
        ["strokeLinejoin", "stroke-linejoin"],
        ["strokeMiterlimit", "stroke-miterlimit"],
        ["strokeOpacity", "stroke-opacity"],
        ["strokeWidth", "stroke-width"],
        ["textAnchor", "text-anchor"],
        ["textDecoration", "text-decoration"],
        ["textRendering", "text-rendering"],
        ["transformOrigin", "transform-origin"],
        ["underlinePosition", "underline-position"],
        ["underlineThickness", "underline-thickness"],
        ["unicodeBidi", "unicode-bidi"],
        ["unicodeRange", "unicode-range"],
        ["unitsPerEm", "units-per-em"],
        ["vAlphabetic", "v-alphabetic"],
        ["vHanging", "v-hanging"],
        ["vIdeographic", "v-ideographic"],
        ["vMathematical", "v-mathematical"],
        ["vectorEffect", "vector-effect"],
        ["vertAdvY", "vert-adv-y"],
        ["vertOriginX", "vert-origin-x"],
        ["vertOriginY", "vert-origin-y"],
        ["wordSpacing", "word-spacing"],
        ["writingMode", "writing-mode"],
        ["xmlnsXlink", "xmlns:xlink"],
        ["xHeight", "x-height"],
      ]),
      Vv =
        /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function er(e) {
      return Vv.test("" + e)
        ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
        : e;
    }
    var Zs = null;
    function Xs(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Yn = null,
      Un = null;
    function rd(e) {
      var t = ct(e);
      if (t && (e = t.stateNode)) {
        var l = e[ae] || null;
        e: switch (((e = t.stateNode), t.type)) {
          case "input":
            if (
              (Gs(
                e,
                l.value,
                l.defaultValue,
                l.defaultValue,
                l.checked,
                l.defaultChecked,
                l.type,
                l.name,
              ),
              (t = l.name),
              l.type === "radio" && t != null)
            ) {
              for (l = e; l.parentNode; ) l = l.parentNode;
              for (
                l = l.querySelectorAll(
                  'input[name="' + ia("" + t) + '"][type="radio"]',
                ),
                  t = 0;
                t < l.length;
                t++
              ) {
                var n = l[t];
                if (n !== e && n.form === e.form) {
                  var r = n[ae] || null;
                  if (!r) throw Error(s(90));
                  Gs(
                    n,
                    r.value,
                    r.defaultValue,
                    r.defaultValue,
                    r.checked,
                    r.defaultChecked,
                    r.type,
                    r.name,
                  );
                }
              }
              for (t = 0; t < l.length; t++)
                (n = l[t]), n.form === e.form && td(n);
            }
            break e;
          case "textarea":
            ld(e, l.value, l.defaultValue);
            break e;
          case "select":
            (t = l.value), t != null && Nn(e, !!l.multiple, t, !1);
        }
      }
    }
    var Qs = !1;
    function sd(e, t, l) {
      if (Qs) return e(t, l);
      Qs = !0;
      try {
        var n = e(t);
        return n;
      } finally {
        if (
          ((Qs = !1),
          (Yn !== null || Un !== null) &&
            (kr(), Yn && ((t = Yn), (e = Un), (Un = Yn = null), rd(t), e)))
        )
          for (t = 0; t < e.length; t++) rd(e[t]);
      }
    }
    function xi(e, t) {
      var l = e.stateNode;
      if (l === null) return null;
      var n = l[ae] || null;
      if (n === null) return null;
      l = n[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (n = !n.disabled) ||
            ((e = e.type),
            (n = !(
              e === "button" ||
              e === "input" ||
              e === "select" ||
              e === "textarea"
            ))),
            (e = !n);
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (l && typeof l != "function") throw Error(s(231, t, typeof l));
      return l;
    }
    var Ka = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      Ks = !1;
    if (Ka)
      try {
        var Ai = {};
        Object.defineProperty(Ai, "passive", {
          get: function () {
            Ks = !0;
          },
        }),
          window.addEventListener("test", Ai, Ai),
          window.removeEventListener("test", Ai, Ai);
      } catch {
        Ks = !1;
      }
    var Dl = null,
      Ws = null,
      tr = null;
    function cd() {
      if (tr) return tr;
      var e,
        t = Ws,
        l = t.length,
        n,
        r = "value" in Dl ? Dl.value : Dl.textContent,
        c = r.length;
      for (e = 0; e < l && t[e] === r[e]; e++);
      var d = l - e;
      for (n = 1; n <= d && t[l - n] === r[c - n]; n++);
      return (tr = r.slice(e, 1 < n ? 1 - n : void 0));
    }
    function ar(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function lr() {
      return !0;
    }
    function fd() {
      return !1;
    }
    function Bt(e) {
      function t(l, n, r, c, d) {
        (this._reactName = l),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = c),
          (this.target = d),
          (this.currentTarget = null);
        for (var m in e)
          e.hasOwnProperty(m) && ((l = e[m]), (this[m] = l ? l(c) : c[m]));
        return (
          (this.isDefaultPrevented = (
            c.defaultPrevented != null
              ? c.defaultPrevented
              : c.returnValue === !1
          )
            ? lr
            : fd),
          (this.isPropagationStopped = fd),
          this
        );
      }
      return (
        S(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var l = this.nativeEvent;
            l &&
              (l.preventDefault
                ? l.preventDefault()
                : typeof l.returnValue != "unknown" && (l.returnValue = !1),
              (this.isDefaultPrevented = lr));
          },
          stopPropagation: function () {
            var l = this.nativeEvent;
            l &&
              (l.stopPropagation
                ? l.stopPropagation()
                : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
              (this.isPropagationStopped = lr));
          },
          persist: function () {},
          isPersistent: lr,
        }),
        t
      );
    }
    var ln = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      nr = Bt(ln),
      Ni = S({}, ln, { view: 0, detail: 0 }),
      Zv = Bt(Ni),
      Js,
      Fs,
      zi,
      ir = S({}, Ni, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ps,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== zi &&
                (zi && e.type === "mousemove"
                  ? ((Js = e.screenX - zi.screenX),
                    (Fs = e.screenY - zi.screenY))
                  : (Fs = Js = 0),
                (zi = e)),
              Js);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : Fs;
        },
      }),
      od = Bt(ir),
      Xv = S({}, ir, { dataTransfer: 0 }),
      Qv = Bt(Xv),
      Kv = S({}, Ni, { relatedTarget: 0 }),
      $s = Bt(Kv),
      Wv = S({}, ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Jv = Bt(Wv),
      Fv = S({}, ln, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      $v = Bt(Fv),
      Pv = S({}, ln, { data: 0 }),
      dd = Bt(Pv),
      Iv = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      eg = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      tg = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function ag(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = tg[e])
          ? !!t[e]
          : !1;
    }
    function Ps() {
      return ag;
    }
    var lg = S({}, Ni, {
        key: function (e) {
          if (e.key) {
            var t = Iv[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress"
            ? ((e = ar(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
              ? eg[e.keyCode] || "Unidentified"
              : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ps,
        charCode: function (e) {
          return e.type === "keypress" ? ar(e) : 0;
        },
        keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === "keypress"
            ? ar(e)
            : e.type === "keydown" || e.type === "keyup"
              ? e.keyCode
              : 0;
        },
      }),
      ng = Bt(lg),
      ig = S({}, ir, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      hd = Bt(ig),
      ug = S({}, Ni, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ps,
      }),
      rg = Bt(ug),
      sg = S({}, ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      cg = Bt(sg),
      fg = S({}, ir, {
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      og = Bt(fg),
      dg = S({}, ln, { newState: 0, oldState: 0 }),
      hg = Bt(dg),
      mg = [9, 13, 27, 32],
      Is = Ka && "CompositionEvent" in window,
      Yi = null;
    Ka && "documentMode" in document && (Yi = document.documentMode);
    var yg = Ka && "TextEvent" in window && !Yi,
      md = Ka && (!Is || (Yi && 8 < Yi && 11 >= Yi)),
      yd = " ",
      vd = !1;
    function gd(e, t) {
      switch (e) {
        case "keyup":
          return mg.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function pd(e) {
      return (
        (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
      );
    }
    var Cn = !1;
    function vg(e, t) {
      switch (e) {
        case "compositionend":
          return pd(t);
        case "keypress":
          return t.which !== 32 ? null : ((vd = !0), yd);
        case "textInput":
          return (e = t.data), e === yd && vd ? null : e;
        default:
          return null;
      }
    }
    function gg(e, t) {
      if (Cn)
        return e === "compositionend" || (!Is && gd(e, t))
          ? ((e = cd()), (tr = Ws = Dl = null), (Cn = !1), e)
          : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return md && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var pg = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Sd(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!pg[e.type] : t === "textarea";
    }
    function bd(e, t, l, n) {
      Yn ? (Un ? Un.push(n) : (Un = [n])) : (Yn = n),
        (t = Xr(t, "onChange")),
        0 < t.length &&
          ((l = new nr("onChange", "change", null, l, n)),
          e.push({ event: l, listeners: t }));
    }
    var Ui = null,
      Ci = null;
    function Sg(e) {
      ey(e, 0);
    }
    function ur(e) {
      var t = et(e);
      if (td(t)) return e;
    }
    function _d(e, t) {
      if (e === "change") return t;
    }
    var Md = !1;
    if (Ka) {
      var ec;
      if (Ka) {
        var tc = "oninput" in document;
        if (!tc) {
          var Dd = document.createElement("div");
          Dd.setAttribute("oninput", "return;"),
            (tc = typeof Dd.oninput == "function");
        }
        ec = tc;
      } else ec = !1;
      Md = ec && (!document.documentMode || 9 < document.documentMode);
    }
    function Ed() {
      Ui && (Ui.detachEvent("onpropertychange", Td), (Ci = Ui = null));
    }
    function Td(e) {
      if (e.propertyName === "value" && ur(Ci)) {
        var t = [];
        bd(t, Ci, e, Xs(e)), sd(Sg, t);
      }
    }
    function bg(e, t, l) {
      e === "focusin"
        ? (Ed(), (Ui = t), (Ci = l), Ui.attachEvent("onpropertychange", Td))
        : e === "focusout" && Ed();
    }
    function _g(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ur(Ci);
    }
    function Mg(e, t) {
      if (e === "click") return ur(t);
    }
    function Dg(e, t) {
      if (e === "input" || e === "change") return ur(t);
    }
    function Eg(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var Xt = typeof Object.is == "function" ? Object.is : Eg;
    function Hi(e, t) {
      if (Xt(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      var l = Object.keys(e),
        n = Object.keys(t);
      if (l.length !== n.length) return !1;
      for (n = 0; n < l.length; n++) {
        var r = l[n];
        if (!bi.call(t, r) || !Xt(e[r], t[r])) return !1;
      }
      return !0;
    }
    function wd(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Rd(e, t) {
      var l = wd(e);
      e = 0;
      for (var n; l; ) {
        if (l.nodeType === 3) {
          if (((n = e + l.textContent.length), e <= t && n >= t))
            return { node: l, offset: t - e };
          e = n;
        }
        e: {
          for (; l; ) {
            if (l.nextSibling) {
              l = l.nextSibling;
              break e;
            }
            l = l.parentNode;
          }
          l = void 0;
        }
        l = wd(l);
      }
    }
    function Od(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Od(e, t.parentNode)
              : "contains" in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function xd(e) {
      e =
        e != null &&
        e.ownerDocument != null &&
        e.ownerDocument.defaultView != null
          ? e.ownerDocument.defaultView
          : window;
      for (var t = Iu(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var l = typeof t.contentWindow.location.href == "string";
        } catch {
          l = !1;
        }
        if (l) e = t.contentWindow;
        else break;
        t = Iu(e.document);
      }
      return t;
    }
    function ac(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === "input" &&
          (e.type === "text" ||
            e.type === "search" ||
            e.type === "tel" ||
            e.type === "url" ||
            e.type === "password")) ||
          t === "textarea" ||
          e.contentEditable === "true")
      );
    }
    var Tg = Ka && "documentMode" in document && 11 >= document.documentMode,
      Hn = null,
      lc = null,
      Li = null,
      nc = !1;
    function Ad(e, t, l) {
      var n =
        l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      nc ||
        Hn == null ||
        Hn !== Iu(n) ||
        ((n = Hn),
        "selectionStart" in n && ac(n)
          ? (n = { start: n.selectionStart, end: n.selectionEnd })
          : ((n = (
              (n.ownerDocument && n.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (n = {
              anchorNode: n.anchorNode,
              anchorOffset: n.anchorOffset,
              focusNode: n.focusNode,
              focusOffset: n.focusOffset,
            })),
        (Li && Hi(Li, n)) ||
          ((Li = n),
          (n = Xr(lc, "onSelect")),
          0 < n.length &&
            ((t = new nr("onSelect", "select", null, t, l)),
            e.push({ event: t, listeners: n }),
            (t.target = Hn))));
    }
    function nn(e, t) {
      var l = {};
      return (
        (l[e.toLowerCase()] = t.toLowerCase()),
        (l["Webkit" + e] = "webkit" + t),
        (l["Moz" + e] = "moz" + t),
        l
      );
    }
    var Ln = {
        animationend: nn("Animation", "AnimationEnd"),
        animationiteration: nn("Animation", "AnimationIteration"),
        animationstart: nn("Animation", "AnimationStart"),
        transitionrun: nn("Transition", "TransitionRun"),
        transitionstart: nn("Transition", "TransitionStart"),
        transitioncancel: nn("Transition", "TransitionCancel"),
        transitionend: nn("Transition", "TransitionEnd"),
      },
      ic = {},
      Nd = {};
    Ka &&
      ((Nd = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete Ln.animationend.animation,
        delete Ln.animationiteration.animation,
        delete Ln.animationstart.animation),
      "TransitionEvent" in window || delete Ln.transitionend.transition);
    function un(e) {
      if (ic[e]) return ic[e];
      if (!Ln[e]) return e;
      var t = Ln[e],
        l;
      for (l in t) if (t.hasOwnProperty(l) && l in Nd) return (ic[e] = t[l]);
      return e;
    }
    var zd = un("animationend"),
      Yd = un("animationiteration"),
      Ud = un("animationstart"),
      wg = un("transitionrun"),
      Rg = un("transitionstart"),
      Og = un("transitioncancel"),
      Cd = un("transitionend"),
      Hd = new Map(),
      uc =
        "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " ",
        );
    uc.push("scrollEnd");
    function Sa(e, t) {
      Hd.set(e, t), wt(t, [e]);
    }
    var Ld = new WeakMap();
    function ua(e, t) {
      if (typeof e == "object" && e !== null) {
        var l = Ld.get(e);
        return l !== void 0
          ? l
          : ((t = { value: e, source: t, stack: Io(t) }), Ld.set(e, t), t);
      }
      return { value: e, source: t, stack: Io(t) };
    }
    var ra = [],
      jn = 0,
      rc = 0;
    function rr() {
      for (var e = jn, t = (rc = jn = 0); t < e; ) {
        var l = ra[t];
        ra[t++] = null;
        var n = ra[t];
        ra[t++] = null;
        var r = ra[t];
        ra[t++] = null;
        var c = ra[t];
        if (((ra[t++] = null), n !== null && r !== null)) {
          var d = n.pending;
          d === null ? (r.next = r) : ((r.next = d.next), (d.next = r)),
            (n.pending = r);
        }
        c !== 0 && jd(l, r, c);
      }
    }
    function sr(e, t, l, n) {
      (ra[jn++] = e),
        (ra[jn++] = t),
        (ra[jn++] = l),
        (ra[jn++] = n),
        (rc |= n),
        (e.lanes |= n),
        (e = e.alternate),
        e !== null && (e.lanes |= n);
    }
    function sc(e, t, l, n) {
      return sr(e, t, l, n), cr(e);
    }
    function kn(e, t) {
      return sr(e, null, null, t), cr(e);
    }
    function jd(e, t, l) {
      e.lanes |= l;
      var n = e.alternate;
      n !== null && (n.lanes |= l);
      for (var r = !1, c = e.return; c !== null; )
        (c.childLanes |= l),
          (n = c.alternate),
          n !== null && (n.childLanes |= l),
          c.tag === 22 &&
            ((e = c.stateNode), e === null || e._visibility & 1 || (r = !0)),
          (e = c),
          (c = c.return);
      return e.tag === 3
        ? ((c = e.stateNode),
          r &&
            t !== null &&
            ((r = 31 - jt(l)),
            (e = c.hiddenUpdates),
            (n = e[r]),
            n === null ? (e[r] = [t]) : n.push(t),
            (t.lane = l | 536870912)),
          c)
        : null;
    }
    function cr(e) {
      if (50 < su) throw ((su = 0), (yf = null), Error(s(185)));
      for (var t = e.return; t !== null; ) (e = t), (t = e.return);
      return e.tag === 3 ? e.stateNode : null;
    }
    var Bn = {};
    function xg(e, t, l, n) {
      (this.tag = e),
        (this.key = l),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.refCleanup = this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = n),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
    }
    function Qt(e, t, l, n) {
      return new xg(e, t, l, n);
    }
    function cc(e) {
      return (e = e.prototype), !(!e || !e.isReactComponent);
    }
    function Wa(e, t) {
      var l = e.alternate;
      return (
        l === null
          ? ((l = Qt(e.tag, t, e.key, e.mode)),
            (l.elementType = e.elementType),
            (l.type = e.type),
            (l.stateNode = e.stateNode),
            (l.alternate = e),
            (e.alternate = l))
          : ((l.pendingProps = t),
            (l.type = e.type),
            (l.flags = 0),
            (l.subtreeFlags = 0),
            (l.deletions = null)),
        (l.flags = e.flags & 65011712),
        (l.childLanes = e.childLanes),
        (l.lanes = e.lanes),
        (l.child = e.child),
        (l.memoizedProps = e.memoizedProps),
        (l.memoizedState = e.memoizedState),
        (l.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (l.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (l.sibling = e.sibling),
        (l.index = e.index),
        (l.ref = e.ref),
        (l.refCleanup = e.refCleanup),
        l
      );
    }
    function kd(e, t) {
      e.flags &= 65011714;
      var l = e.alternate;
      return (
        l === null
          ? ((e.childLanes = 0),
            (e.lanes = t),
            (e.child = null),
            (e.subtreeFlags = 0),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.dependencies = null),
            (e.stateNode = null))
          : ((e.childLanes = l.childLanes),
            (e.lanes = l.lanes),
            (e.child = l.child),
            (e.subtreeFlags = 0),
            (e.deletions = null),
            (e.memoizedProps = l.memoizedProps),
            (e.memoizedState = l.memoizedState),
            (e.updateQueue = l.updateQueue),
            (e.type = l.type),
            (t = l.dependencies),
            (e.dependencies =
              t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext })),
        e
      );
    }
    function fr(e, t, l, n, r, c) {
      var d = 0;
      if (((n = e), typeof e == "function")) cc(e) && (d = 1);
      else if (typeof e == "string")
        d = N1(e, l, re.current)
          ? 26
          : e === "html" || e === "head" || e === "body"
            ? 27
            : 5;
      else
        e: switch (e) {
          case De:
            return (
              (e = Qt(31, l, t, r)), (e.elementType = De), (e.lanes = c), e
            );
          case C:
            return rn(l.children, r, c, t);
          case Q:
            (d = 8), (r |= 24);
            break;
          case G:
            return (
              (e = Qt(12, l, t, r | 2)), (e.elementType = G), (e.lanes = c), e
            );
          case E:
            return (e = Qt(13, l, t, r)), (e.elementType = E), (e.lanes = c), e;
          case he:
            return (
              (e = Qt(19, l, t, r)), (e.elementType = he), (e.lanes = c), e
            );
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case q:
                case P:
                  d = 10;
                  break e;
                case J:
                  d = 9;
                  break e;
                case ye:
                  d = 11;
                  break e;
                case be:
                  d = 14;
                  break e;
                case de:
                  (d = 16), (n = null);
                  break e;
              }
            (d = 29),
              (l = Error(s(130, e === null ? "null" : typeof e, ""))),
              (n = null);
        }
      return (
        (t = Qt(d, l, t, r)),
        (t.elementType = e),
        (t.type = n),
        (t.lanes = c),
        t
      );
    }
    function rn(e, t, l, n) {
      return (e = Qt(7, e, n, t)), (e.lanes = l), e;
    }
    function fc(e, t, l) {
      return (e = Qt(6, e, null, t)), (e.lanes = l), e;
    }
    function oc(e, t, l) {
      return (
        (t = Qt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = l),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    var Gn = [],
      qn = 0,
      or = null,
      dr = 0,
      sa = [],
      ca = 0,
      sn = null,
      Ja = 1,
      Fa = "";
    function cn(e, t) {
      (Gn[qn++] = dr), (Gn[qn++] = or), (or = e), (dr = t);
    }
    function Bd(e, t, l) {
      (sa[ca++] = Ja), (sa[ca++] = Fa), (sa[ca++] = sn), (sn = e);
      var n = Ja;
      e = Fa;
      var r = 32 - jt(n) - 1;
      (n &= ~(1 << r)), (l += 1);
      var c = 32 - jt(t) + r;
      if (30 < c) {
        var d = r - (r % 5);
        (c = (n & ((1 << d) - 1)).toString(32)),
          (n >>= d),
          (r -= d),
          (Ja = (1 << (32 - jt(t) + r)) | (l << r) | n),
          (Fa = c + e);
      } else (Ja = (1 << c) | (l << r) | n), (Fa = e);
    }
    function dc(e) {
      e.return !== null && (cn(e, 1), Bd(e, 1, 0));
    }
    function hc(e) {
      for (; e === or; )
        (or = Gn[--qn]), (Gn[qn] = null), (dr = Gn[--qn]), (Gn[qn] = null);
      for (; e === sn; )
        (sn = sa[--ca]),
          (sa[ca] = null),
          (Fa = sa[--ca]),
          (sa[ca] = null),
          (Ja = sa[--ca]),
          (sa[ca] = null);
    }
    var kt = null,
      dt = null,
      Ge = !1,
      fn = null,
      Ya = !1,
      mc = Error(s(519));
    function on(e) {
      var t = Error(s(418, ""));
      throw (Bi(ua(t, e)), mc);
    }
    function Gd(e) {
      var t = e.stateNode,
        l = e.type,
        n = e.memoizedProps;
      switch (((t[X] = e), (t[ae] = n), l)) {
        case "dialog":
          Ae("cancel", t), Ae("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Ae("load", t);
          break;
        case "video":
        case "audio":
          for (l = 0; l < fu.length; l++) Ae(fu[l], t);
          break;
        case "source":
          Ae("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Ae("error", t), Ae("load", t);
          break;
        case "details":
          Ae("toggle", t);
          break;
        case "input":
          Ae("invalid", t),
            ad(
              t,
              n.value,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
              !0,
            ),
            Pu(t);
          break;
        case "select":
          Ae("invalid", t);
          break;
        case "textarea":
          Ae("invalid", t), nd(t, n.value, n.defaultValue, n.children), Pu(t);
      }
      (l = n.children),
        (typeof l != "string" &&
          typeof l != "number" &&
          typeof l != "bigint") ||
        t.textContent === "" + l ||
        n.suppressHydrationWarning === !0 ||
        ny(t.textContent, l)
          ? (n.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)),
            n.onScroll != null && Ae("scroll", t),
            n.onScrollEnd != null && Ae("scrollend", t),
            n.onClick != null && (t.onclick = Qr),
            (t = !0))
          : (t = !1),
        t || on(e);
    }
    function qd(e) {
      for (kt = e.return; kt; )
        switch (kt.tag) {
          case 5:
          case 13:
            Ya = !1;
            return;
          case 27:
          case 3:
            Ya = !0;
            return;
          default:
            kt = kt.return;
        }
    }
    function ji(e) {
      if (e !== kt) return !1;
      if (!Ge) return qd(e), (Ge = !0), !1;
      var t = e.tag,
        l;
      if (
        ((l = t !== 3 && t !== 27) &&
          ((l = t === 5) &&
            ((l = e.type),
            (l =
              !(l !== "form" && l !== "button") ||
              Nf(e.type, e.memoizedProps))),
          (l = !l)),
        l && dt && on(e),
        qd(e),
        t === 13)
      ) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(s(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8)
              if (((l = e.data), l === "/$")) {
                if (t === 0) {
                  dt = _a(e.nextSibling);
                  break e;
                }
                t--;
              } else (l !== "$" && l !== "$!" && l !== "$?") || t++;
            e = e.nextSibling;
          }
          dt = null;
        }
      } else
        t === 27
          ? ((t = dt),
            kl(e.type) ? ((e = Cf), (Cf = null), (dt = e)) : (dt = t))
          : (dt = kt ? _a(e.stateNode.nextSibling) : null);
      return !0;
    }
    function ki() {
      (dt = kt = null), (Ge = !1);
    }
    function Vd() {
      var e = fn;
      return (
        e !== null &&
          (Vt === null ? (Vt = e) : Vt.push.apply(Vt, e), (fn = null)),
        e
      );
    }
    function Bi(e) {
      fn === null ? (fn = [e]) : fn.push(e);
    }
    var yc = B(null),
      dn = null,
      $a = null;
    function El(e, t, l) {
      K(yc, t._currentValue), (t._currentValue = l);
    }
    function Pa(e) {
      (e._currentValue = yc.current), W(yc);
    }
    function vc(e, t, l) {
      for (; e !== null; ) {
        var n = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
            : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
          e === l)
        )
          break;
        e = e.return;
      }
    }
    function gc(e, t, l, n) {
      var r = e.child;
      for (r !== null && (r.return = e); r !== null; ) {
        var c = r.dependencies;
        if (c !== null) {
          var d = r.child;
          c = c.firstContext;
          e: for (; c !== null; ) {
            var m = c;
            c = r;
            for (var p = 0; p < t.length; p++)
              if (m.context === t[p]) {
                (c.lanes |= l),
                  (m = c.alternate),
                  m !== null && (m.lanes |= l),
                  vc(c.return, l, e),
                  n || (d = null);
                break e;
              }
            c = m.next;
          }
        } else if (r.tag === 18) {
          if (((d = r.return), d === null)) throw Error(s(341));
          (d.lanes |= l),
            (c = d.alternate),
            c !== null && (c.lanes |= l),
            vc(d, l, e),
            (d = null);
        } else d = r.child;
        if (d !== null) d.return = r;
        else
          for (d = r; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (((r = d.sibling), r !== null)) {
              (r.return = d.return), (d = r);
              break;
            }
            d = d.return;
          }
        r = d;
      }
    }
    function Gi(e, t, l, n) {
      e = null;
      for (var r = t, c = !1; r !== null; ) {
        if (!c) {
          if ((r.flags & 524288) !== 0) c = !0;
          else if ((r.flags & 262144) !== 0) break;
        }
        if (r.tag === 10) {
          var d = r.alternate;
          if (d === null) throw Error(s(387));
          if (((d = d.memoizedProps), d !== null)) {
            var m = r.type;
            Xt(r.pendingProps.value, d.value) ||
              (e !== null ? e.push(m) : (e = [m]));
          }
        } else if (r === Ht.current) {
          if (((d = r.alternate), d === null)) throw Error(s(387));
          d.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
            (e !== null ? e.push(vu) : (e = [vu]));
        }
        r = r.return;
      }
      e !== null && gc(t, e, l, n), (t.flags |= 262144);
    }
    function hr(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Xt(e.context._currentValue, e.memoizedValue)) return !0;
        e = e.next;
      }
      return !1;
    }
    function hn(e) {
      (dn = e),
        ($a = null),
        (e = e.dependencies),
        e !== null && (e.firstContext = null);
    }
    function zt(e) {
      return Zd(dn, e);
    }
    function mr(e, t) {
      return dn === null && hn(e), Zd(e, t);
    }
    function Zd(e, t) {
      var l = t._currentValue;
      if (((t = { context: t, memoizedValue: l, next: null }), $a === null)) {
        if (e === null) throw Error(s(308));
        ($a = t),
          (e.dependencies = { lanes: 0, firstContext: t }),
          (e.flags |= 524288);
      } else $a = $a.next = t;
      return l;
    }
    var Ag =
        typeof AbortController < "u"
          ? AbortController
          : function () {
              var e = [],
                t = (this.signal = {
                  aborted: !1,
                  addEventListener: function (l, n) {
                    e.push(n);
                  },
                });
              this.abort = function () {
                (t.aborted = !0),
                  e.forEach(function (l) {
                    return l();
                  });
              };
            },
      Ng = a.unstable_scheduleCallback,
      zg = a.unstable_NormalPriority,
      bt = {
        $$typeof: P,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0,
      };
    function pc() {
      return { controller: new Ag(), data: new Map(), refCount: 0 };
    }
    function qi(e) {
      e.refCount--,
        e.refCount === 0 &&
          Ng(zg, function () {
            e.controller.abort();
          });
    }
    var Vi = null,
      Sc = 0,
      Vn = 0,
      Zn = null;
    function Yg(e, t) {
      if (Vi === null) {
        var l = (Vi = []);
        (Sc = 0),
          (Vn = Mf()),
          (Zn = {
            status: "pending",
            value: void 0,
            then: function (n) {
              l.push(n);
            },
          });
      }
      return Sc++, t.then(Xd, Xd), t;
    }
    function Xd() {
      if (--Sc === 0 && Vi !== null) {
        Zn !== null && (Zn.status = "fulfilled");
        var e = Vi;
        (Vi = null), (Vn = 0), (Zn = null);
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Ug(e, t) {
      var l = [],
        n = {
          status: "pending",
          value: null,
          reason: null,
          then: function (r) {
            l.push(r);
          },
        };
      return (
        e.then(
          function () {
            (n.status = "fulfilled"), (n.value = t);
            for (var r = 0; r < l.length; r++) (0, l[r])(t);
          },
          function (r) {
            for (n.status = "rejected", n.reason = r, r = 0; r < l.length; r++)
              (0, l[r])(void 0);
          },
        ),
        n
      );
    }
    var Qd = H.S;
    H.S = function (e, t) {
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Yg(e, t),
        Qd !== null && Qd(e, t);
    };
    var mn = B(null);
    function bc() {
      var e = mn.current;
      return e !== null ? e : at.pooledCache;
    }
    function yr(e, t) {
      t === null ? K(mn, mn.current) : K(mn, t.pool);
    }
    function Kd() {
      var e = bc();
      return e === null ? null : { parent: bt._currentValue, pool: e };
    }
    var Zi = Error(s(460)),
      Wd = Error(s(474)),
      vr = Error(s(542)),
      _c = { then: function () {} };
    function Jd(e) {
      return (e = e.status), e === "fulfilled" || e === "rejected";
    }
    function gr() {}
    function Fd(e, t, l) {
      switch (
        ((l = e[l]),
        l === void 0 ? e.push(t) : l !== t && (t.then(gr, gr), (t = l)),
        t.status)
      ) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw ((e = t.reason), Pd(e), e);
        default:
          if (typeof t.status == "string") t.then(gr, gr);
          else {
            if (((e = at), e !== null && 100 < e.shellSuspendCounter))
              throw Error(s(482));
            (e = t),
              (e.status = "pending"),
              e.then(
                function (n) {
                  if (t.status === "pending") {
                    var r = t;
                    (r.status = "fulfilled"), (r.value = n);
                  }
                },
                function (n) {
                  if (t.status === "pending") {
                    var r = t;
                    (r.status = "rejected"), (r.reason = n);
                  }
                },
              );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw ((e = t.reason), Pd(e), e);
          }
          throw ((Xi = t), Zi);
      }
    }
    var Xi = null;
    function $d() {
      if (Xi === null) throw Error(s(459));
      var e = Xi;
      return (Xi = null), e;
    }
    function Pd(e) {
      if (e === Zi || e === vr) throw Error(s(483));
    }
    var Tl = !1;
    function Mc(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null,
      };
    }
    function Dc(e, t) {
      (e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            callbacks: null,
          });
    }
    function wl(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function Rl(e, t, l) {
      var n = e.updateQueue;
      if (n === null) return null;
      if (((n = n.shared), (Ze & 2) !== 0)) {
        var r = n.pending;
        return (
          r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
          (n.pending = t),
          (t = cr(e)),
          jd(e, null, l),
          t
        );
      }
      return sr(e, n, t, l), cr(e);
    }
    function Qi(e, t, l) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (l & 4194048) !== 0))
      ) {
        var n = t.lanes;
        (n &= e.pendingLanes), (l |= n), (t.lanes = l), $u(e, l);
      }
    }
    function Ec(e, t) {
      var l = e.updateQueue,
        n = e.alternate;
      if (n !== null && ((n = n.updateQueue), l === n)) {
        var r = null,
          c = null;
        if (((l = l.firstBaseUpdate), l !== null)) {
          do {
            var d = {
              lane: l.lane,
              tag: l.tag,
              payload: l.payload,
              callback: null,
              next: null,
            };
            c === null ? (r = c = d) : (c = c.next = d), (l = l.next);
          } while (l !== null);
          c === null ? (r = c = t) : (c = c.next = t);
        } else r = c = t;
        (l = {
          baseState: n.baseState,
          firstBaseUpdate: r,
          lastBaseUpdate: c,
          shared: n.shared,
          callbacks: n.callbacks,
        }),
          (e.updateQueue = l);
        return;
      }
      (e = l.lastBaseUpdate),
        e === null ? (l.firstBaseUpdate = t) : (e.next = t),
        (l.lastBaseUpdate = t);
    }
    var Tc = !1;
    function Ki() {
      if (Tc) {
        var e = Zn;
        if (e !== null) throw e;
      }
    }
    function Wi(e, t, l, n) {
      Tc = !1;
      var r = e.updateQueue;
      Tl = !1;
      var c = r.firstBaseUpdate,
        d = r.lastBaseUpdate,
        m = r.shared.pending;
      if (m !== null) {
        r.shared.pending = null;
        var p = m,
          O = p.next;
        (p.next = null), d === null ? (c = O) : (d.next = O), (d = p);
        var L = e.alternate;
        L !== null &&
          ((L = L.updateQueue),
          (m = L.lastBaseUpdate),
          m !== d &&
            (m === null ? (L.firstBaseUpdate = O) : (m.next = O),
            (L.lastBaseUpdate = p)));
      }
      if (c !== null) {
        var k = r.baseState;
        (d = 0), (L = O = p = null), (m = c);
        do {
          var x = m.lane & -536870913,
            N = x !== m.lane;
          if (N ? (Ce & x) === x : (n & x) === x) {
            x !== 0 && x === Vn && (Tc = !0),
              L !== null &&
                (L = L.next =
                  {
                    lane: 0,
                    tag: m.tag,
                    payload: m.payload,
                    callback: null,
                    next: null,
                  });
            e: {
              var pe = e,
                ve = m;
              x = t;
              var Je = l;
              switch (ve.tag) {
                case 1:
                  if (((pe = ve.payload), typeof pe == "function")) {
                    k = pe.call(Je, k, x);
                    break e;
                  }
                  k = pe;
                  break e;
                case 3:
                  pe.flags = (pe.flags & -65537) | 128;
                case 0:
                  if (
                    ((pe = ve.payload),
                    (x = typeof pe == "function" ? pe.call(Je, k, x) : pe),
                    x == null)
                  )
                    break e;
                  k = S({}, k, x);
                  break e;
                case 2:
                  Tl = !0;
              }
            }
            (x = m.callback),
              x !== null &&
                ((e.flags |= 64),
                N && (e.flags |= 8192),
                (N = r.callbacks),
                N === null ? (r.callbacks = [x]) : N.push(x));
          } else
            (N = {
              lane: x,
              tag: m.tag,
              payload: m.payload,
              callback: m.callback,
              next: null,
            }),
              L === null ? ((O = L = N), (p = k)) : (L = L.next = N),
              (d |= x);
          if (((m = m.next), m === null)) {
            if (((m = r.shared.pending), m === null)) break;
            (N = m),
              (m = N.next),
              (N.next = null),
              (r.lastBaseUpdate = N),
              (r.shared.pending = null);
          }
        } while (!0);
        L === null && (p = k),
          (r.baseState = p),
          (r.firstBaseUpdate = O),
          (r.lastBaseUpdate = L),
          c === null && (r.shared.lanes = 0),
          (Cl |= d),
          (e.lanes = d),
          (e.memoizedState = k);
      }
    }
    function Id(e, t) {
      if (typeof e != "function") throw Error(s(191, e));
      e.call(t);
    }
    function eh(e, t) {
      var l = e.callbacks;
      if (l !== null)
        for (e.callbacks = null, e = 0; e < l.length; e++) Id(l[e], t);
    }
    var Xn = B(null),
      pr = B(0);
    function th(e, t) {
      (e = il), K(pr, e), K(Xn, t), (il = e | t.baseLanes);
    }
    function wc() {
      K(pr, il), K(Xn, Xn.current);
    }
    function Rc() {
      (il = pr.current), W(Xn), W(pr);
    }
    var Ol = 0,
      Te = null,
      Ke = null,
      gt = null,
      Sr = !1,
      Qn = !1,
      yn = !1,
      br = 0,
      Ji = 0,
      Kn = null,
      Cg = 0;
    function mt() {
      throw Error(s(321));
    }
    function Oc(e, t) {
      if (t === null) return !1;
      for (var l = 0; l < t.length && l < e.length; l++)
        if (!Xt(e[l], t[l])) return !1;
      return !0;
    }
    function xc(e, t, l, n, r, c) {
      return (
        (Ol = c),
        (Te = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (H.H = e === null || e.memoizedState === null ? jh : kh),
        (yn = !1),
        (c = l(n, r)),
        (yn = !1),
        Qn && (c = lh(t, l, n, r)),
        ah(e),
        c
      );
    }
    function ah(e) {
      H.H = wr;
      var t = Ke !== null && Ke.next !== null;
      if (
        ((Ol = 0), (gt = Ke = Te = null), (Sr = !1), (Ji = 0), (Kn = null), t)
      )
        throw Error(s(300));
      e === null ||
        Dt ||
        ((e = e.dependencies), e !== null && hr(e) && (Dt = !0));
    }
    function lh(e, t, l, n) {
      Te = e;
      var r = 0;
      do {
        if ((Qn && (Kn = null), (Ji = 0), (Qn = !1), 25 <= r))
          throw Error(s(301));
        if (((r += 1), (gt = Ke = null), e.updateQueue != null)) {
          var c = e.updateQueue;
          (c.lastEffect = null),
            (c.events = null),
            (c.stores = null),
            c.memoCache != null && (c.memoCache.index = 0);
        }
        (H.H = qg), (c = t(l, n));
      } while (Qn);
      return c;
    }
    function Hg() {
      var e = H.H,
        t = e.useState()[0];
      return (
        (t = typeof t.then == "function" ? Fi(t) : t),
        (e = e.useState()[0]),
        (Ke !== null ? Ke.memoizedState : null) !== e && (Te.flags |= 1024),
        t
      );
    }
    function Ac() {
      var e = br !== 0;
      return (br = 0), e;
    }
    function Nc(e, t, l) {
      (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
    }
    function zc(e) {
      if (Sr) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), (e = e.next);
        }
        Sr = !1;
      }
      (Ol = 0), (gt = Ke = Te = null), (Qn = !1), (Ji = br = 0), (Kn = null);
    }
    function Gt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return gt === null ? (Te.memoizedState = gt = e) : (gt = gt.next = e), gt;
    }
    function pt() {
      if (Ke === null) {
        var e = Te.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ke.next;
      var t = gt === null ? Te.memoizedState : gt.next;
      if (t !== null) (gt = t), (Ke = e);
      else {
        if (e === null)
          throw Te.alternate === null ? Error(s(467)) : Error(s(310));
        (Ke = e),
          (e = {
            memoizedState: Ke.memoizedState,
            baseState: Ke.baseState,
            baseQueue: Ke.baseQueue,
            queue: Ke.queue,
            next: null,
          }),
          gt === null ? (Te.memoizedState = gt = e) : (gt = gt.next = e);
      }
      return gt;
    }
    function Yc() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function Fi(e) {
      var t = Ji;
      return (
        (Ji += 1),
        Kn === null && (Kn = []),
        (e = Fd(Kn, e, t)),
        (t = Te),
        (gt === null ? t.memoizedState : gt.next) === null &&
          ((t = t.alternate),
          (H.H = t === null || t.memoizedState === null ? jh : kh)),
        e
      );
    }
    function _r(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return Fi(e);
        if (e.$$typeof === P) return zt(e);
      }
      throw Error(s(438, String(e)));
    }
    function Uc(e) {
      var t = null,
        l = Te.updateQueue;
      if ((l !== null && (t = l.memoCache), t == null)) {
        var n = Te.alternate;
        n !== null &&
          ((n = n.updateQueue),
          n !== null &&
            ((n = n.memoCache),
            n != null &&
              (t = {
                data: n.data.map(function (r) {
                  return r.slice();
                }),
                index: 0,
              })));
      }
      if (
        (t == null && (t = { data: [], index: 0 }),
        l === null && ((l = Yc()), (Te.updateQueue = l)),
        (l.memoCache = t),
        (l = t.data[t.index]),
        l === void 0)
      )
        for (l = t.data[t.index] = Array(e), n = 0; n < e; n++) l[n] = Qe;
      return t.index++, l;
    }
    function Ia(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Mr(e) {
      var t = pt();
      return Cc(t, Ke, e);
    }
    function Cc(e, t, l) {
      var n = e.queue;
      if (n === null) throw Error(s(311));
      n.lastRenderedReducer = l;
      var r = e.baseQueue,
        c = n.pending;
      if (c !== null) {
        if (r !== null) {
          var d = r.next;
          (r.next = c.next), (c.next = d);
        }
        (t.baseQueue = r = c), (n.pending = null);
      }
      if (((c = e.baseState), r === null)) e.memoizedState = c;
      else {
        t = r.next;
        var m = (d = null),
          p = null,
          O = t,
          L = !1;
        do {
          var k = O.lane & -536870913;
          if (k !== O.lane ? (Ce & k) === k : (Ol & k) === k) {
            var x = O.revertLane;
            if (x === 0)
              p !== null &&
                (p = p.next =
                  {
                    lane: 0,
                    revertLane: 0,
                    action: O.action,
                    hasEagerState: O.hasEagerState,
                    eagerState: O.eagerState,
                    next: null,
                  }),
                k === Vn && (L = !0);
            else if ((Ol & x) === x) {
              (O = O.next), x === Vn && (L = !0);
              continue;
            } else
              (k = {
                lane: 0,
                revertLane: O.revertLane,
                action: O.action,
                hasEagerState: O.hasEagerState,
                eagerState: O.eagerState,
                next: null,
              }),
                p === null ? ((m = p = k), (d = c)) : (p = p.next = k),
                (Te.lanes |= x),
                (Cl |= x);
            (k = O.action),
              yn && l(c, k),
              (c = O.hasEagerState ? O.eagerState : l(c, k));
          } else
            (x = {
              lane: k,
              revertLane: O.revertLane,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null,
            }),
              p === null ? ((m = p = x), (d = c)) : (p = p.next = x),
              (Te.lanes |= k),
              (Cl |= k);
          O = O.next;
        } while (O !== null && O !== t);
        if (
          (p === null ? (d = c) : (p.next = m),
          !Xt(c, e.memoizedState) && ((Dt = !0), L && ((l = Zn), l !== null)))
        )
          throw l;
        (e.memoizedState = c),
          (e.baseState = d),
          (e.baseQueue = p),
          (n.lastRenderedState = c);
      }
      return r === null && (n.lanes = 0), [e.memoizedState, n.dispatch];
    }
    function Hc(e) {
      var t = pt(),
        l = t.queue;
      if (l === null) throw Error(s(311));
      l.lastRenderedReducer = e;
      var n = l.dispatch,
        r = l.pending,
        c = t.memoizedState;
      if (r !== null) {
        l.pending = null;
        var d = (r = r.next);
        do (c = e(c, d.action)), (d = d.next);
        while (d !== r);
        Xt(c, t.memoizedState) || (Dt = !0),
          (t.memoizedState = c),
          t.baseQueue === null && (t.baseState = c),
          (l.lastRenderedState = c);
      }
      return [c, n];
    }
    function nh(e, t, l) {
      var n = Te,
        r = pt(),
        c = Ge;
      if (c) {
        if (l === void 0) throw Error(s(407));
        l = l();
      } else l = t();
      var d = !Xt((Ke || r).memoizedState, l);
      d && ((r.memoizedState = l), (Dt = !0)), (r = r.queue);
      var m = rh.bind(null, n, r, e);
      if (
        ($i(2048, 8, m, [e]),
        r.getSnapshot !== t || d || (gt !== null && gt.memoizedState.tag & 1))
      ) {
        if (
          ((n.flags |= 2048),
          Wn(9, Dr(), uh.bind(null, n, r, l, t), null),
          at === null)
        )
          throw Error(s(349));
        c || (Ol & 124) !== 0 || ih(n, t, l);
      }
      return l;
    }
    function ih(e, t, l) {
      (e.flags |= 16384),
        (e = { getSnapshot: t, value: l }),
        (t = Te.updateQueue),
        t === null
          ? ((t = Yc()), (Te.updateQueue = t), (t.stores = [e]))
          : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
    }
    function uh(e, t, l, n) {
      (t.value = l), (t.getSnapshot = n), sh(t) && ch(e);
    }
    function rh(e, t, l) {
      return l(function () {
        sh(t) && ch(e);
      });
    }
    function sh(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var l = t();
        return !Xt(e, l);
      } catch {
        return !0;
      }
    }
    function ch(e) {
      var t = kn(e, 2);
      t !== null && $t(t, e, 2);
    }
    function Lc(e) {
      var t = Gt();
      if (typeof e == "function") {
        var l = e;
        if (((e = l()), yn)) {
          la(!0);
          try {
            l();
          } finally {
            la(!1);
          }
        }
      }
      return (
        (t.memoizedState = t.baseState = e),
        (t.queue = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ia,
          lastRenderedState: e,
        }),
        t
      );
    }
    function fh(e, t, l, n) {
      return (e.baseState = l), Cc(e, Ke, typeof n == "function" ? n : Ia);
    }
    function Lg(e, t, l, n, r) {
      if (Tr(e)) throw Error(s(485));
      if (((e = t.action), e !== null)) {
        var c = {
          payload: r,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function (d) {
            c.listeners.push(d);
          },
        };
        H.T !== null ? l(!0) : (c.isTransition = !1),
          n(c),
          (l = t.pending),
          l === null
            ? ((c.next = t.pending = c), oh(t, c))
            : ((c.next = l.next), (t.pending = l.next = c));
      }
    }
    function oh(e, t) {
      var l = t.action,
        n = t.payload,
        r = e.state;
      if (t.isTransition) {
        var c = H.T,
          d = {};
        H.T = d;
        try {
          var m = l(r, n),
            p = H.S;
          p !== null && p(d, m), dh(e, t, m);
        } catch (O) {
          jc(e, t, O);
        } finally {
          H.T = c;
        }
      } else
        try {
          (c = l(r, n)), dh(e, t, c);
        } catch (O) {
          jc(e, t, O);
        }
    }
    function dh(e, t, l) {
      l !== null && typeof l == "object" && typeof l.then == "function"
        ? l.then(
            function (n) {
              hh(e, t, n);
            },
            function (n) {
              return jc(e, t, n);
            },
          )
        : hh(e, t, l);
    }
    function hh(e, t, l) {
      (t.status = "fulfilled"),
        (t.value = l),
        mh(t),
        (e.state = l),
        (t = e.pending),
        t !== null &&
          ((l = t.next),
          l === t
            ? (e.pending = null)
            : ((l = l.next), (t.next = l), oh(e, l)));
    }
    function jc(e, t, l) {
      var n = e.pending;
      if (((e.pending = null), n !== null)) {
        n = n.next;
        do (t.status = "rejected"), (t.reason = l), mh(t), (t = t.next);
        while (t !== n);
      }
      e.action = null;
    }
    function mh(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function yh(e, t) {
      return t;
    }
    function vh(e, t) {
      if (Ge) {
        var l = at.formState;
        if (l !== null) {
          e: {
            var n = Te;
            if (Ge) {
              if (dt) {
                t: {
                  for (var r = dt, c = Ya; r.nodeType !== 8; ) {
                    if (!c) {
                      r = null;
                      break t;
                    }
                    if (((r = _a(r.nextSibling)), r === null)) {
                      r = null;
                      break t;
                    }
                  }
                  (c = r.data), (r = c === "F!" || c === "F" ? r : null);
                }
                if (r) {
                  (dt = _a(r.nextSibling)), (n = r.data === "F!");
                  break e;
                }
              }
              on(n);
            }
            n = !1;
          }
          n && (t = l[0]);
        }
      }
      return (
        (l = Gt()),
        (l.memoizedState = l.baseState = t),
        (n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: yh,
          lastRenderedState: t,
        }),
        (l.queue = n),
        (l = Ch.bind(null, Te, n)),
        (n.dispatch = l),
        (n = Lc(!1)),
        (c = Vc.bind(null, Te, !1, n.queue)),
        (n = Gt()),
        (r = { state: t, dispatch: null, action: e, pending: null }),
        (n.queue = r),
        (l = Lg.bind(null, Te, r, c, l)),
        (r.dispatch = l),
        (n.memoizedState = e),
        [t, l, !1]
      );
    }
    function gh(e) {
      var t = pt();
      return ph(t, Ke, e);
    }
    function ph(e, t, l) {
      if (
        ((t = Cc(e, t, yh)[0]),
        (e = Mr(Ia)[0]),
        typeof t == "object" && t !== null && typeof t.then == "function")
      )
        try {
          var n = Fi(t);
        } catch (d) {
          throw d === Zi ? vr : d;
        }
      else n = t;
      t = pt();
      var r = t.queue,
        c = r.dispatch;
      return (
        l !== t.memoizedState &&
          ((Te.flags |= 2048), Wn(9, Dr(), jg.bind(null, r, l), null)),
        [n, c, e]
      );
    }
    function jg(e, t) {
      e.action = t;
    }
    function Sh(e) {
      var t = pt(),
        l = Ke;
      if (l !== null) return ph(t, l, e);
      pt(), (t = t.memoizedState), (l = pt());
      var n = l.queue.dispatch;
      return (l.memoizedState = e), [t, n, !1];
    }
    function Wn(e, t, l, n) {
      return (
        (e = { tag: e, create: l, deps: n, inst: t, next: null }),
        (t = Te.updateQueue),
        t === null && ((t = Yc()), (Te.updateQueue = t)),
        (l = t.lastEffect),
        l === null
          ? (t.lastEffect = e.next = e)
          : ((n = l.next), (l.next = e), (e.next = n), (t.lastEffect = e)),
        e
      );
    }
    function Dr() {
      return { destroy: void 0, resource: void 0 };
    }
    function bh() {
      return pt().memoizedState;
    }
    function Er(e, t, l, n) {
      var r = Gt();
      (n = n === void 0 ? null : n),
        (Te.flags |= e),
        (r.memoizedState = Wn(1 | t, Dr(), l, n));
    }
    function $i(e, t, l, n) {
      var r = pt();
      n = n === void 0 ? null : n;
      var c = r.memoizedState.inst;
      Ke !== null && n !== null && Oc(n, Ke.memoizedState.deps)
        ? (r.memoizedState = Wn(t, c, l, n))
        : ((Te.flags |= e), (r.memoizedState = Wn(1 | t, c, l, n)));
    }
    function _h(e, t) {
      Er(8390656, 8, e, t);
    }
    function Mh(e, t) {
      $i(2048, 8, e, t);
    }
    function Dh(e, t) {
      return $i(4, 2, e, t);
    }
    function Eh(e, t) {
      return $i(4, 4, e, t);
    }
    function Th(e, t) {
      if (typeof t == "function") {
        e = e();
        var l = t(e);
        return function () {
          typeof l == "function" ? l() : t(null);
        };
      }
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function wh(e, t, l) {
      (l = l != null ? l.concat([e]) : null), $i(4, 4, Th.bind(null, t, e), l);
    }
    function kc() {}
    function Rh(e, t) {
      var l = pt();
      t = t === void 0 ? null : t;
      var n = l.memoizedState;
      return t !== null && Oc(t, n[1]) ? n[0] : ((l.memoizedState = [e, t]), e);
    }
    function Oh(e, t) {
      var l = pt();
      t = t === void 0 ? null : t;
      var n = l.memoizedState;
      if (t !== null && Oc(t, n[1])) return n[0];
      if (((n = e()), yn)) {
        la(!0);
        try {
          e();
        } finally {
          la(!1);
        }
      }
      return (l.memoizedState = [n, t]), n;
    }
    function Bc(e, t, l) {
      return l === void 0 || (Ol & 1073741824) !== 0
        ? (e.memoizedState = t)
        : ((e.memoizedState = l), (e = Nm()), (Te.lanes |= e), (Cl |= e), l);
    }
    function xh(e, t, l, n) {
      return Xt(l, t)
        ? l
        : Xn.current !== null
          ? ((e = Bc(e, l, n)), Xt(e, t) || (Dt = !0), e)
          : (Ol & 42) === 0
            ? ((Dt = !0), (e.memoizedState = l))
            : ((e = Nm()), (Te.lanes |= e), (Cl |= e), t);
    }
    function Ah(e, t, l, n, r) {
      var c = F.p;
      F.p = c !== 0 && 8 > c ? c : 8;
      var d = H.T,
        m = {};
      (H.T = m), Vc(e, !1, t, l);
      try {
        var p = r(),
          O = H.S;
        if (
          (O !== null && O(m, p),
          p !== null && typeof p == "object" && typeof p.then == "function")
        ) {
          var L = Ug(p, n);
          Pi(e, t, L, Ft(e));
        } else Pi(e, t, n, Ft(e));
      } catch (k) {
        Pi(e, t, { then: function () {}, status: "rejected", reason: k }, Ft());
      } finally {
        (F.p = c), (H.T = d);
      }
    }
    function kg() {}
    function Gc(e, t, l, n) {
      if (e.tag !== 5) throw Error(s(476));
      var r = Nh(e).queue;
      Ah(
        e,
        r,
        t,
        ue,
        l === null
          ? kg
          : function () {
              return zh(e), l(n);
            },
      );
    }
    function Nh(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: ue,
        baseState: ue,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ia,
          lastRenderedState: ue,
        },
        next: null,
      };
      var l = {};
      return (
        (t.next = {
          memoizedState: l,
          baseState: l,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ia,
            lastRenderedState: l,
          },
          next: null,
        }),
        (e.memoizedState = t),
        (e = e.alternate),
        e !== null && (e.memoizedState = t),
        t
      );
    }
    function zh(e) {
      var t = Nh(e).next.queue;
      Pi(e, t, {}, Ft());
    }
    function qc() {
      return zt(vu);
    }
    function Yh() {
      return pt().memoizedState;
    }
    function Uh() {
      return pt().memoizedState;
    }
    function Bg(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var l = Ft();
            e = wl(l);
            var n = Rl(t, e, l);
            n !== null && ($t(n, t, l), Qi(n, t, l)),
              (t = { cache: pc() }),
              (e.payload = t);
            return;
        }
        t = t.return;
      }
    }
    function Gg(e, t, l) {
      var n = Ft();
      (l = {
        lane: n,
        revertLane: 0,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
        Tr(e)
          ? Hh(t, l)
          : ((l = sc(e, t, l, n)), l !== null && ($t(l, e, n), Lh(l, t, n)));
    }
    function Ch(e, t, l) {
      var n = Ft();
      Pi(e, t, l, n);
    }
    function Pi(e, t, l, n) {
      var r = {
        lane: n,
        revertLane: 0,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
      if (Tr(e)) Hh(t, r);
      else {
        var c = e.alternate;
        if (
          e.lanes === 0 &&
          (c === null || c.lanes === 0) &&
          ((c = t.lastRenderedReducer), c !== null)
        )
          try {
            var d = t.lastRenderedState,
              m = c(d, l);
            if (((r.hasEagerState = !0), (r.eagerState = m), Xt(m, d)))
              return sr(e, t, r, 0), at === null && rr(), !1;
          } catch {
          } finally {
          }
        if (((l = sc(e, t, r, n)), l !== null))
          return $t(l, e, n), Lh(l, t, n), !0;
      }
      return !1;
    }
    function Vc(e, t, l, n) {
      if (
        ((n = {
          lane: 2,
          revertLane: Mf(),
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        Tr(e))
      ) {
        if (t) throw Error(s(479));
      } else (t = sc(e, l, n, 2)), t !== null && $t(t, e, 2);
    }
    function Tr(e) {
      var t = e.alternate;
      return e === Te || (t !== null && t === Te);
    }
    function Hh(e, t) {
      Qn = Sr = !0;
      var l = e.pending;
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (e.pending = t);
    }
    function Lh(e, t, l) {
      if ((l & 4194048) !== 0) {
        var n = t.lanes;
        (n &= e.pendingLanes), (l |= n), (t.lanes = l), $u(e, l);
      }
    }
    var wr = {
        readContext: zt,
        use: _r,
        useCallback: mt,
        useContext: mt,
        useEffect: mt,
        useImperativeHandle: mt,
        useLayoutEffect: mt,
        useInsertionEffect: mt,
        useMemo: mt,
        useReducer: mt,
        useRef: mt,
        useState: mt,
        useDebugValue: mt,
        useDeferredValue: mt,
        useTransition: mt,
        useSyncExternalStore: mt,
        useId: mt,
        useHostTransitionStatus: mt,
        useFormState: mt,
        useActionState: mt,
        useOptimistic: mt,
        useMemoCache: mt,
        useCacheRefresh: mt,
      },
      jh = {
        readContext: zt,
        use: _r,
        useCallback: function (e, t) {
          return (Gt().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: zt,
        useEffect: _h,
        useImperativeHandle: function (e, t, l) {
          (l = l != null ? l.concat([e]) : null),
            Er(4194308, 4, Th.bind(null, t, e), l);
        },
        useLayoutEffect: function (e, t) {
          return Er(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          Er(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var l = Gt();
          t = t === void 0 ? null : t;
          var n = e();
          if (yn) {
            la(!0);
            try {
              e();
            } finally {
              la(!1);
            }
          }
          return (l.memoizedState = [n, t]), n;
        },
        useReducer: function (e, t, l) {
          var n = Gt();
          if (l !== void 0) {
            var r = l(t);
            if (yn) {
              la(!0);
              try {
                l(t);
              } finally {
                la(!1);
              }
            }
          } else r = t;
          return (
            (n.memoizedState = n.baseState = r),
            (e = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: r,
            }),
            (n.queue = e),
            (e = e.dispatch = Gg.bind(null, Te, e)),
            [n.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Gt();
          return (e = { current: e }), (t.memoizedState = e);
        },
        useState: function (e) {
          e = Lc(e);
          var t = e.queue,
            l = Ch.bind(null, Te, t);
          return (t.dispatch = l), [e.memoizedState, l];
        },
        useDebugValue: kc,
        useDeferredValue: function (e, t) {
          var l = Gt();
          return Bc(l, e, t);
        },
        useTransition: function () {
          var e = Lc(!1);
          return (
            (e = Ah.bind(null, Te, e.queue, !0, !1)),
            (Gt().memoizedState = e),
            [!1, e]
          );
        },
        useSyncExternalStore: function (e, t, l) {
          var n = Te,
            r = Gt();
          if (Ge) {
            if (l === void 0) throw Error(s(407));
            l = l();
          } else {
            if (((l = t()), at === null)) throw Error(s(349));
            (Ce & 124) !== 0 || ih(n, t, l);
          }
          r.memoizedState = l;
          var c = { value: l, getSnapshot: t };
          return (
            (r.queue = c),
            _h(rh.bind(null, n, c, e), [e]),
            (n.flags |= 2048),
            Wn(9, Dr(), uh.bind(null, n, c, l, t), null),
            l
          );
        },
        useId: function () {
          var e = Gt(),
            t = at.identifierPrefix;
          if (Ge) {
            var l = Fa,
              n = Ja;
            (l = (n & ~(1 << (32 - jt(n) - 1))).toString(32) + l),
              (t = "«" + t + "R" + l),
              (l = br++),
              0 < l && (t += "H" + l.toString(32)),
              (t += "»");
          } else (l = Cg++), (t = "«" + t + "r" + l.toString(32) + "»");
          return (e.memoizedState = t);
        },
        useHostTransitionStatus: qc,
        useFormState: vh,
        useActionState: vh,
        useOptimistic: function (e) {
          var t = Gt();
          t.memoizedState = t.baseState = e;
          var l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null,
          };
          return (
            (t.queue = l),
            (t = Vc.bind(null, Te, !0, l)),
            (l.dispatch = t),
            [e, t]
          );
        },
        useMemoCache: Uc,
        useCacheRefresh: function () {
          return (Gt().memoizedState = Bg.bind(null, Te));
        },
      },
      kh = {
        readContext: zt,
        use: _r,
        useCallback: Rh,
        useContext: zt,
        useEffect: Mh,
        useImperativeHandle: wh,
        useInsertionEffect: Dh,
        useLayoutEffect: Eh,
        useMemo: Oh,
        useReducer: Mr,
        useRef: bh,
        useState: function () {
          return Mr(Ia);
        },
        useDebugValue: kc,
        useDeferredValue: function (e, t) {
          var l = pt();
          return xh(l, Ke.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Mr(Ia)[0],
            t = pt().memoizedState;
          return [typeof e == "boolean" ? e : Fi(e), t];
        },
        useSyncExternalStore: nh,
        useId: Yh,
        useHostTransitionStatus: qc,
        useFormState: gh,
        useActionState: gh,
        useOptimistic: function (e, t) {
          var l = pt();
          return fh(l, Ke, e, t);
        },
        useMemoCache: Uc,
        useCacheRefresh: Uh,
      },
      qg = {
        readContext: zt,
        use: _r,
        useCallback: Rh,
        useContext: zt,
        useEffect: Mh,
        useImperativeHandle: wh,
        useInsertionEffect: Dh,
        useLayoutEffect: Eh,
        useMemo: Oh,
        useReducer: Hc,
        useRef: bh,
        useState: function () {
          return Hc(Ia);
        },
        useDebugValue: kc,
        useDeferredValue: function (e, t) {
          var l = pt();
          return Ke === null ? Bc(l, e, t) : xh(l, Ke.memoizedState, e, t);
        },
        useTransition: function () {
          var e = Hc(Ia)[0],
            t = pt().memoizedState;
          return [typeof e == "boolean" ? e : Fi(e), t];
        },
        useSyncExternalStore: nh,
        useId: Yh,
        useHostTransitionStatus: qc,
        useFormState: Sh,
        useActionState: Sh,
        useOptimistic: function (e, t) {
          var l = pt();
          return Ke !== null
            ? fh(l, Ke, e, t)
            : ((l.baseState = e), [e, l.queue.dispatch]);
        },
        useMemoCache: Uc,
        useCacheRefresh: Uh,
      },
      Jn = null,
      Ii = 0;
    function Rr(e) {
      var t = Ii;
      return (Ii += 1), Jn === null && (Jn = []), Fd(Jn, e, t);
    }
    function eu(e, t) {
      (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
    }
    function Or(e, t) {
      throw t.$$typeof === A
        ? Error(s(525))
        : ((e = Object.prototype.toString.call(t)),
          Error(
            s(
              31,
              e === "[object Object]"
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e,
            ),
          ));
    }
    function Bh(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Gh(e) {
      function t(D, M) {
        if (e) {
          var R = D.deletions;
          R === null ? ((D.deletions = [M]), (D.flags |= 16)) : R.push(M);
        }
      }
      function l(D, M) {
        if (!e) return null;
        for (; M !== null; ) t(D, M), (M = M.sibling);
        return null;
      }
      function n(D) {
        for (var M = new Map(); D !== null; )
          D.key !== null ? M.set(D.key, D) : M.set(D.index, D), (D = D.sibling);
        return M;
      }
      function r(D, M) {
        return (D = Wa(D, M)), (D.index = 0), (D.sibling = null), D;
      }
      function c(D, M, R) {
        return (
          (D.index = R),
          e
            ? ((R = D.alternate),
              R !== null
                ? ((R = R.index), R < M ? ((D.flags |= 67108866), M) : R)
                : ((D.flags |= 67108866), M))
            : ((D.flags |= 1048576), M)
        );
      }
      function d(D) {
        return e && D.alternate === null && (D.flags |= 67108866), D;
      }
      function m(D, M, R, j) {
        return M === null || M.tag !== 6
          ? ((M = fc(R, D.mode, j)), (M.return = D), M)
          : ((M = r(M, R)), (M.return = D), M);
      }
      function p(D, M, R, j) {
        var te = R.type;
        return te === C
          ? L(D, M, R.props.children, j, R.key)
          : M !== null &&
              (M.elementType === te ||
                (typeof te == "object" &&
                  te !== null &&
                  te.$$typeof === de &&
                  Bh(te) === M.type))
            ? ((M = r(M, R.props)), eu(M, R), (M.return = D), M)
            : ((M = fr(R.type, R.key, R.props, null, D.mode, j)),
              eu(M, R),
              (M.return = D),
              M);
      }
      function O(D, M, R, j) {
        return M === null ||
          M.tag !== 4 ||
          M.stateNode.containerInfo !== R.containerInfo ||
          M.stateNode.implementation !== R.implementation
          ? ((M = oc(R, D.mode, j)), (M.return = D), M)
          : ((M = r(M, R.children || [])), (M.return = D), M);
      }
      function L(D, M, R, j, te) {
        return M === null || M.tag !== 7
          ? ((M = rn(R, D.mode, j, te)), (M.return = D), M)
          : ((M = r(M, R)), (M.return = D), M);
      }
      function k(D, M, R) {
        if (
          (typeof M == "string" && M !== "") ||
          typeof M == "number" ||
          typeof M == "bigint"
        )
          return (M = fc("" + M, D.mode, R)), (M.return = D), M;
        if (typeof M == "object" && M !== null) {
          switch (M.$$typeof) {
            case T:
              return (
                (R = fr(M.type, M.key, M.props, null, D.mode, R)),
                eu(R, M),
                (R.return = D),
                R
              );
            case U:
              return (M = oc(M, D.mode, R)), (M.return = D), M;
            case de:
              var j = M._init;
              return (M = j(M._payload)), k(D, M, R);
          }
          if (Ue(M) || st(M))
            return (M = rn(M, D.mode, R, null)), (M.return = D), M;
          if (typeof M.then == "function") return k(D, Rr(M), R);
          if (M.$$typeof === P) return k(D, mr(D, M), R);
          Or(D, M);
        }
        return null;
      }
      function x(D, M, R, j) {
        var te = M !== null ? M.key : null;
        if (
          (typeof R == "string" && R !== "") ||
          typeof R == "number" ||
          typeof R == "bigint"
        )
          return te !== null ? null : m(D, M, "" + R, j);
        if (typeof R == "object" && R !== null) {
          switch (R.$$typeof) {
            case T:
              return R.key === te ? p(D, M, R, j) : null;
            case U:
              return R.key === te ? O(D, M, R, j) : null;
            case de:
              return (te = R._init), (R = te(R._payload)), x(D, M, R, j);
          }
          if (Ue(R) || st(R)) return te !== null ? null : L(D, M, R, j, null);
          if (typeof R.then == "function") return x(D, M, Rr(R), j);
          if (R.$$typeof === P) return x(D, M, mr(D, R), j);
          Or(D, R);
        }
        return null;
      }
      function N(D, M, R, j, te) {
        if (
          (typeof j == "string" && j !== "") ||
          typeof j == "number" ||
          typeof j == "bigint"
        )
          return (D = D.get(R) || null), m(M, D, "" + j, te);
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case T:
              return (
                (D = D.get(j.key === null ? R : j.key) || null), p(M, D, j, te)
              );
            case U:
              return (
                (D = D.get(j.key === null ? R : j.key) || null), O(M, D, j, te)
              );
            case de:
              var Re = j._init;
              return (j = Re(j._payload)), N(D, M, R, j, te);
          }
          if (Ue(j) || st(j))
            return (D = D.get(R) || null), L(M, D, j, te, null);
          if (typeof j.then == "function") return N(D, M, R, Rr(j), te);
          if (j.$$typeof === P) return N(D, M, R, mr(M, j), te);
          Or(M, j);
        }
        return null;
      }
      function pe(D, M, R, j) {
        for (
          var te = null, Re = null, ie = M, ge = (M = 0), Tt = null;
          ie !== null && ge < R.length;
          ge++
        ) {
          ie.index > ge ? ((Tt = ie), (ie = null)) : (Tt = ie.sibling);
          var Le = x(D, ie, R[ge], j);
          if (Le === null) {
            ie === null && (ie = Tt);
            break;
          }
          e && ie && Le.alternate === null && t(D, ie),
            (M = c(Le, M, ge)),
            Re === null ? (te = Le) : (Re.sibling = Le),
            (Re = Le),
            (ie = Tt);
        }
        if (ge === R.length) return l(D, ie), Ge && cn(D, ge), te;
        if (ie === null) {
          for (; ge < R.length; ge++)
            (ie = k(D, R[ge], j)),
              ie !== null &&
                ((M = c(ie, M, ge)),
                Re === null ? (te = ie) : (Re.sibling = ie),
                (Re = ie));
          return Ge && cn(D, ge), te;
        }
        for (ie = n(ie); ge < R.length; ge++)
          (Tt = N(ie, D, ge, R[ge], j)),
            Tt !== null &&
              (e &&
                Tt.alternate !== null &&
                ie.delete(Tt.key === null ? ge : Tt.key),
              (M = c(Tt, M, ge)),
              Re === null ? (te = Tt) : (Re.sibling = Tt),
              (Re = Tt));
        return (
          e &&
            ie.forEach(function (Zl) {
              return t(D, Zl);
            }),
          Ge && cn(D, ge),
          te
        );
      }
      function ve(D, M, R, j) {
        if (R == null) throw Error(s(151));
        for (
          var te = null,
            Re = null,
            ie = M,
            ge = (M = 0),
            Tt = null,
            Le = R.next();
          ie !== null && !Le.done;
          ge++, Le = R.next()
        ) {
          ie.index > ge ? ((Tt = ie), (ie = null)) : (Tt = ie.sibling);
          var Zl = x(D, ie, Le.value, j);
          if (Zl === null) {
            ie === null && (ie = Tt);
            break;
          }
          e && ie && Zl.alternate === null && t(D, ie),
            (M = c(Zl, M, ge)),
            Re === null ? (te = Zl) : (Re.sibling = Zl),
            (Re = Zl),
            (ie = Tt);
        }
        if (Le.done) return l(D, ie), Ge && cn(D, ge), te;
        if (ie === null) {
          for (; !Le.done; ge++, Le = R.next())
            (Le = k(D, Le.value, j)),
              Le !== null &&
                ((M = c(Le, M, ge)),
                Re === null ? (te = Le) : (Re.sibling = Le),
                (Re = Le));
          return Ge && cn(D, ge), te;
        }
        for (ie = n(ie); !Le.done; ge++, Le = R.next())
          (Le = N(ie, D, ge, Le.value, j)),
            Le !== null &&
              (e &&
                Le.alternate !== null &&
                ie.delete(Le.key === null ? ge : Le.key),
              (M = c(Le, M, ge)),
              Re === null ? (te = Le) : (Re.sibling = Le),
              (Re = Le));
        return (
          e &&
            ie.forEach(function (V1) {
              return t(D, V1);
            }),
          Ge && cn(D, ge),
          te
        );
      }
      function Je(D, M, R, j) {
        if (
          (typeof R == "object" &&
            R !== null &&
            R.type === C &&
            R.key === null &&
            (R = R.props.children),
          typeof R == "object" && R !== null)
        ) {
          switch (R.$$typeof) {
            case T:
              e: {
                for (var te = R.key; M !== null; ) {
                  if (M.key === te) {
                    if (((te = R.type), te === C)) {
                      if (M.tag === 7) {
                        l(D, M.sibling),
                          (j = r(M, R.props.children)),
                          (j.return = D),
                          (D = j);
                        break e;
                      }
                    } else if (
                      M.elementType === te ||
                      (typeof te == "object" &&
                        te !== null &&
                        te.$$typeof === de &&
                        Bh(te) === M.type)
                    ) {
                      l(D, M.sibling),
                        (j = r(M, R.props)),
                        eu(j, R),
                        (j.return = D),
                        (D = j);
                      break e;
                    }
                    l(D, M);
                    break;
                  } else t(D, M);
                  M = M.sibling;
                }
                R.type === C
                  ? ((j = rn(R.props.children, D.mode, j, R.key)),
                    (j.return = D),
                    (D = j))
                  : ((j = fr(R.type, R.key, R.props, null, D.mode, j)),
                    eu(j, R),
                    (j.return = D),
                    (D = j));
              }
              return d(D);
            case U:
              e: {
                for (te = R.key; M !== null; ) {
                  if (M.key === te)
                    if (
                      M.tag === 4 &&
                      M.stateNode.containerInfo === R.containerInfo &&
                      M.stateNode.implementation === R.implementation
                    ) {
                      l(D, M.sibling),
                        (j = r(M, R.children || [])),
                        (j.return = D),
                        (D = j);
                      break e;
                    } else {
                      l(D, M);
                      break;
                    }
                  else t(D, M);
                  M = M.sibling;
                }
                (j = oc(R, D.mode, j)), (j.return = D), (D = j);
              }
              return d(D);
            case de:
              return (te = R._init), (R = te(R._payload)), Je(D, M, R, j);
          }
          if (Ue(R)) return pe(D, M, R, j);
          if (st(R)) {
            if (((te = st(R)), typeof te != "function")) throw Error(s(150));
            return (R = te.call(R)), ve(D, M, R, j);
          }
          if (typeof R.then == "function") return Je(D, M, Rr(R), j);
          if (R.$$typeof === P) return Je(D, M, mr(D, R), j);
          Or(D, R);
        }
        return (typeof R == "string" && R !== "") ||
          typeof R == "number" ||
          typeof R == "bigint"
          ? ((R = "" + R),
            M !== null && M.tag === 6
              ? (l(D, M.sibling), (j = r(M, R)), (j.return = D), (D = j))
              : (l(D, M), (j = fc(R, D.mode, j)), (j.return = D), (D = j)),
            d(D))
          : l(D, M);
      }
      return function (D, M, R, j) {
        try {
          Ii = 0;
          var te = Je(D, M, R, j);
          return (Jn = null), te;
        } catch (ie) {
          if (ie === Zi || ie === vr) throw ie;
          var Re = Qt(29, ie, null, D.mode);
          return (Re.lanes = j), (Re.return = D), Re;
        } finally {
        }
      };
    }
    var Fn = Gh(!0),
      qh = Gh(!1),
      fa = B(null),
      Ua = null;
    function xl(e) {
      var t = e.alternate;
      K(_t, _t.current & 1),
        K(fa, e),
        Ua === null &&
          (t === null || Xn.current !== null || t.memoizedState !== null) &&
          (Ua = e);
    }
    function Vh(e) {
      if (e.tag === 22) {
        if ((K(_t, _t.current), K(fa, e), Ua === null)) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Ua = e);
        }
      } else Al();
    }
    function Al() {
      K(_t, _t.current), K(fa, fa.current);
    }
    function el(e) {
      W(fa), Ua === e && (Ua = null), W(_t);
    }
    var _t = B(0);
    function xr(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var l = t.memoizedState;
          if (
            l !== null &&
            ((l = l.dehydrated), l === null || l.data === "$?" || Uf(l))
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
      return null;
    }
    function Zc(e, t, l, n) {
      (t = e.memoizedState),
        (l = l(n, t)),
        (l = l == null ? t : S({}, t, l)),
        (e.memoizedState = l),
        e.lanes === 0 && (e.updateQueue.baseState = l);
    }
    var Xc = {
      enqueueSetState: function (e, t, l) {
        e = e._reactInternals;
        var n = Ft(),
          r = wl(n);
        (r.payload = t),
          l != null && (r.callback = l),
          (t = Rl(e, r, n)),
          t !== null && ($t(t, e, n), Qi(t, e, n));
      },
      enqueueReplaceState: function (e, t, l) {
        e = e._reactInternals;
        var n = Ft(),
          r = wl(n);
        (r.tag = 1),
          (r.payload = t),
          l != null && (r.callback = l),
          (t = Rl(e, r, n)),
          t !== null && ($t(t, e, n), Qi(t, e, n));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var l = Ft(),
          n = wl(l);
        (n.tag = 2),
          t != null && (n.callback = t),
          (t = Rl(e, n, l)),
          t !== null && ($t(t, e, l), Qi(t, e, l));
      },
    };
    function Zh(e, t, l, n, r, c, d) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
          ? e.shouldComponentUpdate(n, c, d)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Hi(l, n) || !Hi(r, c)
            : !0
      );
    }
    function Xh(e, t, l, n) {
      (e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps(l, n),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          t.UNSAFE_componentWillReceiveProps(l, n),
        t.state !== e && Xc.enqueueReplaceState(t, t.state, null);
    }
    function vn(e, t) {
      var l = t;
      if ("ref" in t) {
        l = {};
        for (var n in t) n !== "ref" && (l[n] = t[n]);
      }
      if ((e = e.defaultProps)) {
        l === t && (l = S({}, l));
        for (var r in e) l[r] === void 0 && (l[r] = e[r]);
      }
      return l;
    }
    var Ar =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          };
    function Qh(e) {
      Ar(e);
    }
    function Kh(e) {
      console.error(e);
    }
    function Wh(e) {
      Ar(e);
    }
    function Nr(e, t) {
      try {
        var l = e.onUncaughtError;
        l(t.value, { componentStack: t.stack });
      } catch (n) {
        setTimeout(function () {
          throw n;
        });
      }
    }
    function Jh(e, t, l) {
      try {
        var n = e.onCaughtError;
        n(l.value, {
          componentStack: l.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null,
        });
      } catch (r) {
        setTimeout(function () {
          throw r;
        });
      }
    }
    function Qc(e, t, l) {
      return (
        (l = wl(l)),
        (l.tag = 3),
        (l.payload = { element: null }),
        (l.callback = function () {
          Nr(e, t);
        }),
        l
      );
    }
    function Fh(e) {
      return (e = wl(e)), (e.tag = 3), e;
    }
    function $h(e, t, l, n) {
      var r = l.type.getDerivedStateFromError;
      if (typeof r == "function") {
        var c = n.value;
        (e.payload = function () {
          return r(c);
        }),
          (e.callback = function () {
            Jh(t, l, n);
          });
      }
      var d = l.stateNode;
      d !== null &&
        typeof d.componentDidCatch == "function" &&
        (e.callback = function () {
          Jh(t, l, n),
            typeof r != "function" &&
              (Hl === null ? (Hl = new Set([this])) : Hl.add(this));
          var m = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: m !== null ? m : "",
          });
        });
    }
    function Vg(e, t, l, n, r) {
      if (
        ((l.flags |= 32768),
        n !== null && typeof n == "object" && typeof n.then == "function")
      ) {
        if (
          ((t = l.alternate),
          t !== null && Gi(t, l, r, !0),
          (l = fa.current),
          l !== null)
        ) {
          switch (l.tag) {
            case 13:
              return (
                Ua === null
                  ? gf()
                  : l.alternate === null && ht === 0 && (ht = 3),
                (l.flags &= -257),
                (l.flags |= 65536),
                (l.lanes = r),
                n === _c
                  ? (l.flags |= 16384)
                  : ((t = l.updateQueue),
                    t === null ? (l.updateQueue = new Set([n])) : t.add(n),
                    Sf(e, n, r)),
                !1
              );
            case 22:
              return (
                (l.flags |= 65536),
                n === _c
                  ? (l.flags |= 16384)
                  : ((t = l.updateQueue),
                    t === null
                      ? ((t = {
                          transitions: null,
                          markerInstances: null,
                          retryQueue: new Set([n]),
                        }),
                        (l.updateQueue = t))
                      : ((l = t.retryQueue),
                        l === null ? (t.retryQueue = new Set([n])) : l.add(n)),
                    Sf(e, n, r)),
                !1
              );
          }
          throw Error(s(435, l.tag));
        }
        return Sf(e, n, r), gf(), !1;
      }
      if (Ge)
        return (
          (t = fa.current),
          t !== null
            ? ((t.flags & 65536) === 0 && (t.flags |= 256),
              (t.flags |= 65536),
              (t.lanes = r),
              n !== mc && ((e = Error(s(422), { cause: n })), Bi(ua(e, l))))
            : (n !== mc && ((t = Error(s(423), { cause: n })), Bi(ua(t, l))),
              (e = e.current.alternate),
              (e.flags |= 65536),
              (r &= -r),
              (e.lanes |= r),
              (n = ua(n, l)),
              (r = Qc(e.stateNode, n, r)),
              Ec(e, r),
              ht !== 4 && (ht = 2)),
          !1
        );
      var c = Error(s(520), { cause: n });
      if (
        ((c = ua(c, l)),
        ru === null ? (ru = [c]) : ru.push(c),
        ht !== 4 && (ht = 2),
        t === null)
      )
        return !0;
      (n = ua(n, l)), (l = t);
      do {
        switch (l.tag) {
          case 3:
            return (
              (l.flags |= 65536),
              (e = r & -r),
              (l.lanes |= e),
              (e = Qc(l.stateNode, n, e)),
              Ec(l, e),
              !1
            );
          case 1:
            if (
              ((t = l.type),
              (c = l.stateNode),
              (l.flags & 128) === 0 &&
                (typeof t.getDerivedStateFromError == "function" ||
                  (c !== null &&
                    typeof c.componentDidCatch == "function" &&
                    (Hl === null || !Hl.has(c)))))
            )
              return (
                (l.flags |= 65536),
                (r &= -r),
                (l.lanes |= r),
                (r = Fh(r)),
                $h(r, e, l, n),
                Ec(l, r),
                !1
              );
        }
        l = l.return;
      } while (l !== null);
      return !1;
    }
    var Ph = Error(s(461)),
      Dt = !1;
    function Ot(e, t, l, n) {
      t.child = e === null ? qh(t, null, l, n) : Fn(t, e.child, l, n);
    }
    function Ih(e, t, l, n, r) {
      l = l.render;
      var c = t.ref;
      if ("ref" in n) {
        var d = {};
        for (var m in n) m !== "ref" && (d[m] = n[m]);
      } else d = n;
      return (
        hn(t),
        (n = xc(e, t, l, d, c, r)),
        (m = Ac()),
        e !== null && !Dt
          ? (Nc(e, t, r), tl(e, t, r))
          : (Ge && m && dc(t), (t.flags |= 1), Ot(e, t, n, r), t.child)
      );
    }
    function em(e, t, l, n, r) {
      if (e === null) {
        var c = l.type;
        return typeof c == "function" &&
          !cc(c) &&
          c.defaultProps === void 0 &&
          l.compare === null
          ? ((t.tag = 15), (t.type = c), tm(e, t, c, n, r))
          : ((e = fr(l.type, null, n, t, t.mode, r)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((c = e.child), !ef(e, r))) {
        var d = c.memoizedProps;
        if (
          ((l = l.compare),
          (l = l !== null ? l : Hi),
          l(d, n) && e.ref === t.ref)
        )
          return tl(e, t, r);
      }
      return (
        (t.flags |= 1),
        (e = Wa(c, n)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function tm(e, t, l, n, r) {
      if (e !== null) {
        var c = e.memoizedProps;
        if (Hi(c, n) && e.ref === t.ref)
          if (((Dt = !1), (t.pendingProps = n = c), ef(e, r)))
            (e.flags & 131072) !== 0 && (Dt = !0);
          else return (t.lanes = e.lanes), tl(e, t, r);
      }
      return Kc(e, t, l, n, r);
    }
    function am(e, t, l) {
      var n = t.pendingProps,
        r = n.children,
        c = e !== null ? e.memoizedState : null;
      if (n.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (((n = c !== null ? c.baseLanes | l : l), e !== null)) {
            for (r = t.child = e.child, c = 0; r !== null; )
              (c = c | r.lanes | r.childLanes), (r = r.sibling);
            t.childLanes = c & ~n;
          } else (t.childLanes = 0), (t.child = null);
          return lm(e, t, n, l);
        }
        if ((l & 536870912) !== 0)
          (t.memoizedState = { baseLanes: 0, cachePool: null }),
            e !== null && yr(t, c !== null ? c.cachePool : null),
            c !== null ? th(t, c) : wc(),
            Vh(t);
        else
          return (
            (t.lanes = t.childLanes = 536870912),
            lm(e, t, c !== null ? c.baseLanes | l : l, l)
          );
      } else
        c !== null
          ? (yr(t, c.cachePool), th(t, c), Al(), (t.memoizedState = null))
          : (e !== null && yr(t, null), wc(), Al());
      return Ot(e, t, r, l), t.child;
    }
    function lm(e, t, l, n) {
      var r = bc();
      return (
        (r = r === null ? null : { parent: bt._currentValue, pool: r }),
        (t.memoizedState = { baseLanes: l, cachePool: r }),
        e !== null && yr(t, null),
        wc(),
        Vh(t),
        e !== null && Gi(e, t, n, !0),
        null
      );
    }
    function zr(e, t) {
      var l = t.ref;
      if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(s(284));
        (e === null || e.ref !== l) && (t.flags |= 4194816);
      }
    }
    function Kc(e, t, l, n, r) {
      return (
        hn(t),
        (l = xc(e, t, l, n, void 0, r)),
        (n = Ac()),
        e !== null && !Dt
          ? (Nc(e, t, r), tl(e, t, r))
          : (Ge && n && dc(t), (t.flags |= 1), Ot(e, t, l, r), t.child)
      );
    }
    function nm(e, t, l, n, r, c) {
      return (
        hn(t),
        (t.updateQueue = null),
        (l = lh(t, n, l, r)),
        ah(e),
        (n = Ac()),
        e !== null && !Dt
          ? (Nc(e, t, c), tl(e, t, c))
          : (Ge && n && dc(t), (t.flags |= 1), Ot(e, t, l, c), t.child)
      );
    }
    function im(e, t, l, n, r) {
      if ((hn(t), t.stateNode === null)) {
        var c = Bn,
          d = l.contextType;
        typeof d == "object" && d !== null && (c = zt(d)),
          (c = new l(n, c)),
          (t.memoizedState =
            c.state !== null && c.state !== void 0 ? c.state : null),
          (c.updater = Xc),
          (t.stateNode = c),
          (c._reactInternals = t),
          (c = t.stateNode),
          (c.props = n),
          (c.state = t.memoizedState),
          (c.refs = {}),
          Mc(t),
          (d = l.contextType),
          (c.context = typeof d == "object" && d !== null ? zt(d) : Bn),
          (c.state = t.memoizedState),
          (d = l.getDerivedStateFromProps),
          typeof d == "function" &&
            (Zc(t, l, d, n), (c.state = t.memoizedState)),
          typeof l.getDerivedStateFromProps == "function" ||
            typeof c.getSnapshotBeforeUpdate == "function" ||
            (typeof c.UNSAFE_componentWillMount != "function" &&
              typeof c.componentWillMount != "function") ||
            ((d = c.state),
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" &&
              c.UNSAFE_componentWillMount(),
            d !== c.state && Xc.enqueueReplaceState(c, c.state, null),
            Wi(t, n, c, r),
            Ki(),
            (c.state = t.memoizedState)),
          typeof c.componentDidMount == "function" && (t.flags |= 4194308),
          (n = !0);
      } else if (e === null) {
        c = t.stateNode;
        var m = t.memoizedProps,
          p = vn(l, m);
        c.props = p;
        var O = c.context,
          L = l.contextType;
        (d = Bn), typeof L == "object" && L !== null && (d = zt(L));
        var k = l.getDerivedStateFromProps;
        (L =
          typeof k == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function"),
          (m = t.pendingProps !== m),
          L ||
            (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
              typeof c.componentWillReceiveProps != "function") ||
            ((m || O !== d) && Xh(t, c, n, d)),
          (Tl = !1);
        var x = t.memoizedState;
        (c.state = x),
          Wi(t, n, c, r),
          Ki(),
          (O = t.memoizedState),
          m || x !== O || Tl
            ? (typeof k == "function" &&
                (Zc(t, l, k, n), (O = t.memoizedState)),
              (p = Tl || Zh(t, l, p, n, x, O, d))
                ? (L ||
                    (typeof c.UNSAFE_componentWillMount != "function" &&
                      typeof c.componentWillMount != "function") ||
                    (typeof c.componentWillMount == "function" &&
                      c.componentWillMount(),
                    typeof c.UNSAFE_componentWillMount == "function" &&
                      c.UNSAFE_componentWillMount()),
                  typeof c.componentDidMount == "function" &&
                    (t.flags |= 4194308))
                : (typeof c.componentDidMount == "function" &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = n),
                  (t.memoizedState = O)),
              (c.props = n),
              (c.state = O),
              (c.context = d),
              (n = p))
            : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
              (n = !1));
      } else {
        (c = t.stateNode),
          Dc(e, t),
          (d = t.memoizedProps),
          (L = vn(l, d)),
          (c.props = L),
          (k = t.pendingProps),
          (x = c.context),
          (O = l.contextType),
          (p = Bn),
          typeof O == "object" && O !== null && (p = zt(O)),
          (m = l.getDerivedStateFromProps),
          (O =
            typeof m == "function" ||
            typeof c.getSnapshotBeforeUpdate == "function") ||
            (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
              typeof c.componentWillReceiveProps != "function") ||
            ((d !== k || x !== p) && Xh(t, c, n, p)),
          (Tl = !1),
          (x = t.memoizedState),
          (c.state = x),
          Wi(t, n, c, r),
          Ki();
        var N = t.memoizedState;
        d !== k ||
        x !== N ||
        Tl ||
        (e !== null && e.dependencies !== null && hr(e.dependencies))
          ? (typeof m == "function" && (Zc(t, l, m, n), (N = t.memoizedState)),
            (L =
              Tl ||
              Zh(t, l, L, n, x, N, p) ||
              (e !== null && e.dependencies !== null && hr(e.dependencies)))
              ? (O ||
                  (typeof c.UNSAFE_componentWillUpdate != "function" &&
                    typeof c.componentWillUpdate != "function") ||
                  (typeof c.componentWillUpdate == "function" &&
                    c.componentWillUpdate(n, N, p),
                  typeof c.UNSAFE_componentWillUpdate == "function" &&
                    c.UNSAFE_componentWillUpdate(n, N, p)),
                typeof c.componentDidUpdate == "function" && (t.flags |= 4),
                typeof c.getSnapshotBeforeUpdate == "function" &&
                  (t.flags |= 1024))
              : (typeof c.componentDidUpdate != "function" ||
                  (d === e.memoizedProps && x === e.memoizedState) ||
                  (t.flags |= 4),
                typeof c.getSnapshotBeforeUpdate != "function" ||
                  (d === e.memoizedProps && x === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = n),
                (t.memoizedState = N)),
            (c.props = n),
            (c.state = N),
            (c.context = p),
            (n = L))
          : (typeof c.componentDidUpdate != "function" ||
              (d === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" ||
              (d === e.memoizedProps && x === e.memoizedState) ||
              (t.flags |= 1024),
            (n = !1));
      }
      return (
        (c = n),
        zr(e, t),
        (n = (t.flags & 128) !== 0),
        c || n
          ? ((c = t.stateNode),
            (l =
              n && typeof l.getDerivedStateFromError != "function"
                ? null
                : c.render()),
            (t.flags |= 1),
            e !== null && n
              ? ((t.child = Fn(t, e.child, null, r)),
                (t.child = Fn(t, null, l, r)))
              : Ot(e, t, l, r),
            (t.memoizedState = c.state),
            (e = t.child))
          : (e = tl(e, t, r)),
        e
      );
    }
    function um(e, t, l, n) {
      return ki(), (t.flags |= 256), Ot(e, t, l, n), t.child;
    }
    var Wc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null,
    };
    function Jc(e) {
      return { baseLanes: e, cachePool: Kd() };
    }
    function Fc(e, t, l) {
      return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= oa), e;
    }
    function rm(e, t, l) {
      var n = t.pendingProps,
        r = !1,
        c = (t.flags & 128) !== 0,
        d;
      if (
        ((d = c) ||
          (d =
            e !== null && e.memoizedState === null
              ? !1
              : (_t.current & 2) !== 0),
        d && ((r = !0), (t.flags &= -129)),
        (d = (t.flags & 32) !== 0),
        (t.flags &= -33),
        e === null)
      ) {
        if (Ge) {
          if ((r ? xl(t) : Al(), Ge)) {
            var m = dt,
              p;
            if ((p = m)) {
              e: {
                for (p = m, m = Ya; p.nodeType !== 8; ) {
                  if (!m) {
                    m = null;
                    break e;
                  }
                  if (((p = _a(p.nextSibling)), p === null)) {
                    m = null;
                    break e;
                  }
                }
                m = p;
              }
              m !== null
                ? ((t.memoizedState = {
                    dehydrated: m,
                    treeContext: sn !== null ? { id: Ja, overflow: Fa } : null,
                    retryLane: 536870912,
                    hydrationErrors: null,
                  }),
                  (p = Qt(18, null, null, 0)),
                  (p.stateNode = m),
                  (p.return = t),
                  (t.child = p),
                  (kt = t),
                  (dt = null),
                  (p = !0))
                : (p = !1);
            }
            p || on(t);
          }
          if (
            ((m = t.memoizedState),
            m !== null && ((m = m.dehydrated), m !== null))
          )
            return Uf(m) ? (t.lanes = 32) : (t.lanes = 536870912), null;
          el(t);
        }
        return (
          (m = n.children),
          (n = n.fallback),
          r
            ? (Al(),
              (r = t.mode),
              (m = Yr({ mode: "hidden", children: m }, r)),
              (n = rn(n, r, l, null)),
              (m.return = t),
              (n.return = t),
              (m.sibling = n),
              (t.child = m),
              (r = t.child),
              (r.memoizedState = Jc(l)),
              (r.childLanes = Fc(e, d, l)),
              (t.memoizedState = Wc),
              n)
            : (xl(t), $c(t, m))
        );
      }
      if (
        ((p = e.memoizedState), p !== null && ((m = p.dehydrated), m !== null))
      ) {
        if (c)
          t.flags & 256
            ? (xl(t), (t.flags &= -257), (t = Pc(e, t, l)))
            : t.memoizedState !== null
              ? (Al(), (t.child = e.child), (t.flags |= 128), (t = null))
              : (Al(),
                (r = n.fallback),
                (m = t.mode),
                (n = Yr({ mode: "visible", children: n.children }, m)),
                (r = rn(r, m, l, null)),
                (r.flags |= 2),
                (n.return = t),
                (r.return = t),
                (n.sibling = r),
                (t.child = n),
                Fn(t, e.child, null, l),
                (n = t.child),
                (n.memoizedState = Jc(l)),
                (n.childLanes = Fc(e, d, l)),
                (t.memoizedState = Wc),
                (t = r));
        else if ((xl(t), Uf(m))) {
          if (((d = m.nextSibling && m.nextSibling.dataset), d)) var O = d.dgst;
          (d = O),
            (n = Error(s(419))),
            (n.stack = ""),
            (n.digest = d),
            Bi({ value: n, source: null, stack: null }),
            (t = Pc(e, t, l));
        } else if (
          (Dt || Gi(e, t, l, !1), (d = (l & e.childLanes) !== 0), Dt || d)
        ) {
          if (
            ((d = at),
            d !== null &&
              ((n = l & -l),
              (n = (n & 42) !== 0 ? 1 : Ri(n)),
              (n = (n & (d.suspendedLanes | l)) !== 0 ? 0 : n),
              n !== 0 && n !== p.retryLane))
          )
            throw ((p.retryLane = n), kn(e, n), $t(d, e, n), Ph);
          m.data === "$?" || gf(), (t = Pc(e, t, l));
        } else
          m.data === "$?"
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = p.treeContext),
              (dt = _a(m.nextSibling)),
              (kt = t),
              (Ge = !0),
              (fn = null),
              (Ya = !1),
              e !== null &&
                ((sa[ca++] = Ja),
                (sa[ca++] = Fa),
                (sa[ca++] = sn),
                (Ja = e.id),
                (Fa = e.overflow),
                (sn = t)),
              (t = $c(t, n.children)),
              (t.flags |= 4096));
        return t;
      }
      return r
        ? (Al(),
          (r = n.fallback),
          (m = t.mode),
          (p = e.child),
          (O = p.sibling),
          (n = Wa(p, { mode: "hidden", children: n.children })),
          (n.subtreeFlags = p.subtreeFlags & 65011712),
          O !== null
            ? (r = Wa(O, r))
            : ((r = rn(r, m, l, null)), (r.flags |= 2)),
          (r.return = t),
          (n.return = t),
          (n.sibling = r),
          (t.child = n),
          (n = r),
          (r = t.child),
          (m = e.child.memoizedState),
          m === null
            ? (m = Jc(l))
            : ((p = m.cachePool),
              p !== null
                ? ((O = bt._currentValue),
                  (p = p.parent !== O ? { parent: O, pool: O } : p))
                : (p = Kd()),
              (m = { baseLanes: m.baseLanes | l, cachePool: p })),
          (r.memoizedState = m),
          (r.childLanes = Fc(e, d, l)),
          (t.memoizedState = Wc),
          n)
        : (xl(t),
          (l = e.child),
          (e = l.sibling),
          (l = Wa(l, { mode: "visible", children: n.children })),
          (l.return = t),
          (l.sibling = null),
          e !== null &&
            ((d = t.deletions),
            d === null ? ((t.deletions = [e]), (t.flags |= 16)) : d.push(e)),
          (t.child = l),
          (t.memoizedState = null),
          l);
    }
    function $c(e, t) {
      return (
        (t = Yr({ mode: "visible", children: t }, e.mode)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Yr(e, t) {
      return (
        (e = Qt(22, e, null, t)),
        (e.lanes = 0),
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
        e
      );
    }
    function Pc(e, t, l) {
      return (
        Fn(t, e.child, null, l),
        (e = $c(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function sm(e, t, l) {
      e.lanes |= t;
      var n = e.alternate;
      n !== null && (n.lanes |= t), vc(e.return, t, l);
    }
    function Ic(e, t, l, n, r) {
      var c = e.memoizedState;
      c === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: n,
            tail: l,
            tailMode: r,
          })
        : ((c.isBackwards = t),
          (c.rendering = null),
          (c.renderingStartTime = 0),
          (c.last = n),
          (c.tail = l),
          (c.tailMode = r));
    }
    function cm(e, t, l) {
      var n = t.pendingProps,
        r = n.revealOrder,
        c = n.tail;
      if ((Ot(e, t, n.children, l), (n = _t.current), (n & 2) !== 0))
        (n = (n & 1) | 2), (t.flags |= 128);
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && sm(e, l, t);
            else if (e.tag === 19) sm(e, l, t);
            else if (e.child !== null) {
              (e.child.return = e), (e = e.child);
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
          }
        n &= 1;
      }
      switch ((K(_t, n), r)) {
        case "forwards":
          for (l = t.child, r = null; l !== null; )
            (e = l.alternate),
              e !== null && xr(e) === null && (r = l),
              (l = l.sibling);
          (l = r),
            l === null
              ? ((r = t.child), (t.child = null))
              : ((r = l.sibling), (l.sibling = null)),
            Ic(t, !1, r, l, c);
          break;
        case "backwards":
          for (l = null, r = t.child, t.child = null; r !== null; ) {
            if (((e = r.alternate), e !== null && xr(e) === null)) {
              t.child = r;
              break;
            }
            (e = r.sibling), (r.sibling = l), (l = r), (r = e);
          }
          Ic(t, !0, l, null, c);
          break;
        case "together":
          Ic(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function tl(e, t, l) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Cl |= t.lanes),
        (l & t.childLanes) === 0)
      )
        if (e !== null) {
          if ((Gi(e, t, l, !1), (l & t.childLanes) === 0)) return null;
        } else return null;
      if (e !== null && t.child !== e.child) throw Error(s(153));
      if (t.child !== null) {
        for (
          e = t.child, l = Wa(e, e.pendingProps), t.child = l, l.return = t;
          e.sibling !== null;

        )
          (e = e.sibling),
            (l = l.sibling = Wa(e, e.pendingProps)),
            (l.return = t);
        l.sibling = null;
      }
      return t.child;
    }
    function ef(e, t) {
      return (e.lanes & t) !== 0
        ? !0
        : ((e = e.dependencies), !!(e !== null && hr(e)));
    }
    function Zg(e, t, l) {
      switch (t.tag) {
        case 3:
          Ie(t, t.stateNode.containerInfo),
            El(t, bt, e.memoizedState.cache),
            ki();
          break;
        case 27:
        case 5:
          Ra(t);
          break;
        case 4:
          Ie(t, t.stateNode.containerInfo);
          break;
        case 10:
          El(t, t.type, t.memoizedProps.value);
          break;
        case 13:
          var n = t.memoizedState;
          if (n !== null)
            return n.dehydrated !== null
              ? (xl(t), (t.flags |= 128), null)
              : (l & t.child.childLanes) !== 0
                ? rm(e, t, l)
                : (xl(t), (e = tl(e, t, l)), e !== null ? e.sibling : null);
          xl(t);
          break;
        case 19:
          var r = (e.flags & 128) !== 0;
          if (
            ((n = (l & t.childLanes) !== 0),
            n || (Gi(e, t, l, !1), (n = (l & t.childLanes) !== 0)),
            r)
          ) {
            if (n) return cm(e, t, l);
            t.flags |= 128;
          }
          if (
            ((r = t.memoizedState),
            r !== null &&
              ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
            K(_t, _t.current),
            n)
          )
            break;
          return null;
        case 22:
        case 23:
          return (t.lanes = 0), am(e, t, l);
        case 24:
          El(t, bt, e.memoizedState.cache);
      }
      return tl(e, t, l);
    }
    function fm(e, t, l) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps) Dt = !0;
        else {
          if (!ef(e, l) && (t.flags & 128) === 0) return (Dt = !1), Zg(e, t, l);
          Dt = (e.flags & 131072) !== 0;
        }
      else (Dt = !1), Ge && (t.flags & 1048576) !== 0 && Bd(t, dr, t.index);
      switch (((t.lanes = 0), t.tag)) {
        case 16:
          e: {
            e = t.pendingProps;
            var n = t.elementType,
              r = n._init;
            if (((n = r(n._payload)), (t.type = n), typeof n == "function"))
              cc(n)
                ? ((e = vn(n, e)), (t.tag = 1), (t = im(null, t, n, e, l)))
                : ((t.tag = 0), (t = Kc(null, t, n, e, l)));
            else {
              if (n != null) {
                if (((r = n.$$typeof), r === ye)) {
                  (t.tag = 11), (t = Ih(null, t, n, e, l));
                  break e;
                } else if (r === be) {
                  (t.tag = 14), (t = em(null, t, n, e, l));
                  break e;
                }
              }
              throw ((t = ea(n) || n), Error(s(306, t, "")));
            }
          }
          return t;
        case 0:
          return Kc(e, t, t.type, t.pendingProps, l);
        case 1:
          return (n = t.type), (r = vn(n, t.pendingProps)), im(e, t, n, r, l);
        case 3:
          e: {
            if ((Ie(t, t.stateNode.containerInfo), e === null))
              throw Error(s(387));
            n = t.pendingProps;
            var c = t.memoizedState;
            (r = c.element), Dc(e, t), Wi(t, n, null, l);
            var d = t.memoizedState;
            if (
              ((n = d.cache),
              El(t, bt, n),
              n !== c.cache && gc(t, [bt], l, !0),
              Ki(),
              (n = d.element),
              c.isDehydrated)
            )
              if (
                ((c = { element: n, isDehydrated: !1, cache: d.cache }),
                (t.updateQueue.baseState = c),
                (t.memoizedState = c),
                t.flags & 256)
              ) {
                t = um(e, t, n, l);
                break e;
              } else if (n !== r) {
                (r = ua(Error(s(424)), t)), Bi(r), (t = um(e, t, n, l));
                break e;
              } else {
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (
                  dt = _a(e.firstChild),
                    kt = t,
                    Ge = !0,
                    fn = null,
                    Ya = !0,
                    l = qh(t, null, n, l),
                    t.child = l;
                  l;

                )
                  (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
              }
            else {
              if ((ki(), n === r)) {
                t = tl(e, t, l);
                break e;
              }
              Ot(e, t, n, l);
            }
            t = t.child;
          }
          return t;
        case 26:
          return (
            zr(e, t),
            e === null
              ? (l = my(t.type, null, t.pendingProps, null))
                ? (t.memoizedState = l)
                : Ge ||
                  ((l = t.type),
                  (e = t.pendingProps),
                  (n = Kr(Se.current).createElement(l)),
                  (n[X] = t),
                  (n[ae] = e),
                  At(n, l, e),
                  we(n),
                  (t.stateNode = n))
              : (t.memoizedState = my(
                  t.type,
                  e.memoizedProps,
                  t.pendingProps,
                  e.memoizedState,
                )),
            null
          );
        case 27:
          return (
            Ra(t),
            e === null &&
              Ge &&
              ((n = t.stateNode = oy(t.type, t.pendingProps, Se.current)),
              (kt = t),
              (Ya = !0),
              (r = dt),
              kl(t.type) ? ((Cf = r), (dt = _a(n.firstChild))) : (dt = r)),
            Ot(e, t, t.pendingProps.children, l),
            zr(e, t),
            e === null && (t.flags |= 4194304),
            t.child
          );
        case 5:
          return (
            e === null &&
              Ge &&
              ((r = n = dt) &&
                ((n = p1(n, t.type, t.pendingProps, Ya)),
                n !== null
                  ? ((t.stateNode = n),
                    (kt = t),
                    (dt = _a(n.firstChild)),
                    (Ya = !1),
                    (r = !0))
                  : (r = !1)),
              r || on(t)),
            Ra(t),
            (r = t.type),
            (c = t.pendingProps),
            (d = e !== null ? e.memoizedProps : null),
            (n = c.children),
            Nf(r, c) ? (n = null) : d !== null && Nf(r, d) && (t.flags |= 32),
            t.memoizedState !== null &&
              ((r = xc(e, t, Hg, null, null, l)), (vu._currentValue = r)),
            zr(e, t),
            Ot(e, t, n, l),
            t.child
          );
        case 6:
          return (
            e === null &&
              Ge &&
              ((e = l = dt) &&
                ((l = S1(l, t.pendingProps, Ya)),
                l !== null
                  ? ((t.stateNode = l), (kt = t), (dt = null), (e = !0))
                  : (e = !1)),
              e || on(t)),
            null
          );
        case 13:
          return rm(e, t, l);
        case 4:
          return (
            Ie(t, t.stateNode.containerInfo),
            (n = t.pendingProps),
            e === null ? (t.child = Fn(t, null, n, l)) : Ot(e, t, n, l),
            t.child
          );
        case 11:
          return Ih(e, t, t.type, t.pendingProps, l);
        case 7:
          return Ot(e, t, t.pendingProps, l), t.child;
        case 8:
          return Ot(e, t, t.pendingProps.children, l), t.child;
        case 12:
          return Ot(e, t, t.pendingProps.children, l), t.child;
        case 10:
          return (
            (n = t.pendingProps),
            El(t, t.type, n.value),
            Ot(e, t, n.children, l),
            t.child
          );
        case 9:
          return (
            (r = t.type._context),
            (n = t.pendingProps.children),
            hn(t),
            (r = zt(r)),
            (n = n(r)),
            (t.flags |= 1),
            Ot(e, t, n, l),
            t.child
          );
        case 14:
          return em(e, t, t.type, t.pendingProps, l);
        case 15:
          return tm(e, t, t.type, t.pendingProps, l);
        case 19:
          return cm(e, t, l);
        case 31:
          return (
            (n = t.pendingProps),
            (l = t.mode),
            (n = { mode: n.mode, children: n.children }),
            e === null
              ? ((l = Yr(n, l)),
                (l.ref = t.ref),
                (t.child = l),
                (l.return = t),
                (t = l))
              : ((l = Wa(e.child, n)),
                (l.ref = t.ref),
                (t.child = l),
                (l.return = t),
                (t = l)),
            t
          );
        case 22:
          return am(e, t, l);
        case 24:
          return (
            hn(t),
            (n = zt(bt)),
            e === null
              ? ((r = bc()),
                r === null &&
                  ((r = at),
                  (c = pc()),
                  (r.pooledCache = c),
                  c.refCount++,
                  c !== null && (r.pooledCacheLanes |= l),
                  (r = c)),
                (t.memoizedState = { parent: n, cache: r }),
                Mc(t),
                El(t, bt, r))
              : ((e.lanes & l) !== 0 && (Dc(e, t), Wi(t, null, null, l), Ki()),
                (r = e.memoizedState),
                (c = t.memoizedState),
                r.parent !== n
                  ? ((r = { parent: n, cache: n }),
                    (t.memoizedState = r),
                    t.lanes === 0 &&
                      (t.memoizedState = t.updateQueue.baseState = r),
                    El(t, bt, n))
                  : ((n = c.cache),
                    El(t, bt, n),
                    n !== r.cache && gc(t, [bt], l, !0))),
            Ot(e, t, t.pendingProps.children, l),
            t.child
          );
        case 29:
          throw t.pendingProps;
      }
      throw Error(s(156, t.tag));
    }
    function al(e) {
      e.flags |= 4;
    }
    function om(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
        e.flags &= -16777217;
      else if (((e.flags |= 16777216), !Sy(t))) {
        if (
          ((t = fa.current),
          t !== null &&
            ((Ce & 4194048) === Ce
              ? Ua !== null
              : ((Ce & 62914560) !== Ce && (Ce & 536870912) === 0) || t !== Ua))
        )
          throw ((Xi = _c), Wd);
        e.flags |= 8192;
      }
    }
    function Ur(e, t) {
      t !== null && (e.flags |= 4),
        e.flags & 16384 &&
          ((t = e.tag !== 22 ? Ti() : 536870912), (e.lanes |= t), (ei |= t));
    }
    function tu(e, t) {
      if (!Ge)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var l = null; t !== null; )
              t.alternate !== null && (l = t), (t = t.sibling);
            l === null ? (e.tail = null) : (l.sibling = null);
            break;
          case "collapsed":
            l = e.tail;
            for (var n = null; l !== null; )
              l.alternate !== null && (n = l), (l = l.sibling);
            n === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (n.sibling = null);
        }
    }
    function ft(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        l = 0,
        n = 0;
      if (t)
        for (var r = e.child; r !== null; )
          (l |= r.lanes | r.childLanes),
            (n |= r.subtreeFlags & 65011712),
            (n |= r.flags & 65011712),
            (r.return = e),
            (r = r.sibling);
      else
        for (r = e.child; r !== null; )
          (l |= r.lanes | r.childLanes),
            (n |= r.subtreeFlags),
            (n |= r.flags),
            (r.return = e),
            (r = r.sibling);
      return (e.subtreeFlags |= n), (e.childLanes = l), t;
    }
    function Xg(e, t, l) {
      var n = t.pendingProps;
      switch ((hc(t), t.tag)) {
        case 31:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ft(t), null;
        case 1:
          return ft(t), null;
        case 3:
          return (
            (l = t.stateNode),
            (n = null),
            e !== null && (n = e.memoizedState.cache),
            t.memoizedState.cache !== n && (t.flags |= 2048),
            Pa(bt),
            it(),
            l.pendingContext &&
              ((l.context = l.pendingContext), (l.pendingContext = null)),
            (e === null || e.child === null) &&
              (ji(t)
                ? al(t)
                : e === null ||
                  (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                  ((t.flags |= 1024), Vd())),
            ft(t),
            null
          );
        case 26:
          return (
            (l = t.memoizedState),
            e === null
              ? (al(t),
                l !== null
                  ? (ft(t), om(t, l))
                  : (ft(t), (t.flags &= -16777217)))
              : l
                ? l !== e.memoizedState
                  ? (al(t), ft(t), om(t, l))
                  : (ft(t), (t.flags &= -16777217))
                : (e.memoizedProps !== n && al(t),
                  ft(t),
                  (t.flags &= -16777217)),
            null
          );
        case 27:
          Il(t), (l = Se.current);
          var r = t.type;
          if (e !== null && t.stateNode != null) e.memoizedProps !== n && al(t);
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(s(166));
              return ft(t), null;
            }
            (e = re.current),
              ji(t) ? Gd(t) : ((e = oy(r, n, l)), (t.stateNode = e), al(t));
          }
          return ft(t), null;
        case 5:
          if ((Il(t), (l = t.type), e !== null && t.stateNode != null))
            e.memoizedProps !== n && al(t);
          else {
            if (!n) {
              if (t.stateNode === null) throw Error(s(166));
              return ft(t), null;
            }
            if (((e = re.current), ji(t))) Gd(t);
            else {
              switch (((r = Kr(Se.current)), e)) {
                case 1:
                  e = r.createElementNS("http://www.w3.org/2000/svg", l);
                  break;
                case 2:
                  e = r.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    l,
                  );
                  break;
                default:
                  switch (l) {
                    case "svg":
                      e = r.createElementNS("http://www.w3.org/2000/svg", l);
                      break;
                    case "math":
                      e = r.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        l,
                      );
                      break;
                    case "script":
                      (e = r.createElement("div")),
                        (e.innerHTML = "<script><\/script>"),
                        (e = e.removeChild(e.firstChild));
                      break;
                    case "select":
                      (e =
                        typeof n.is == "string"
                          ? r.createElement("select", { is: n.is })
                          : r.createElement("select")),
                        n.multiple
                          ? (e.multiple = !0)
                          : n.size && (e.size = n.size);
                      break;
                    default:
                      e =
                        typeof n.is == "string"
                          ? r.createElement(l, { is: n.is })
                          : r.createElement(l);
                  }
              }
              (e[X] = t), (e[ae] = n);
              e: for (r = t.child; r !== null; ) {
                if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
                else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                  (r.child.return = r), (r = r.child);
                  continue;
                }
                if (r === t) break e;
                for (; r.sibling === null; ) {
                  if (r.return === null || r.return === t) break e;
                  r = r.return;
                }
                (r.sibling.return = r.return), (r = r.sibling);
              }
              t.stateNode = e;
              e: switch ((At(e, l, n), l)) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!n.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && al(t);
            }
          }
          return ft(t), (t.flags &= -16777217), null;
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== n && al(t);
          else {
            if (typeof n != "string" && t.stateNode === null)
              throw Error(s(166));
            if (((e = Se.current), ji(t))) {
              if (
                ((e = t.stateNode),
                (l = t.memoizedProps),
                (n = null),
                (r = kt),
                r !== null)
              )
                switch (r.tag) {
                  case 27:
                  case 5:
                    n = r.memoizedProps;
                }
              (e[X] = t),
                (e = !!(
                  e.nodeValue === l ||
                  (n !== null && n.suppressHydrationWarning === !0) ||
                  ny(e.nodeValue, l)
                )),
                e || on(t);
            } else (e = Kr(e).createTextNode(n)), (e[X] = t), (t.stateNode = e);
          }
          return ft(t), null;
        case 13:
          if (
            ((n = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (((r = ji(t)), n !== null && n.dehydrated !== null)) {
              if (e === null) {
                if (!r) throw Error(s(318));
                if (
                  ((r = t.memoizedState),
                  (r = r !== null ? r.dehydrated : null),
                  !r)
                )
                  throw Error(s(317));
                r[X] = t;
              } else
                ki(),
                  (t.flags & 128) === 0 && (t.memoizedState = null),
                  (t.flags |= 4);
              ft(t), (r = !1);
            } else
              (r = Vd()),
                e !== null &&
                  e.memoizedState !== null &&
                  (e.memoizedState.hydrationErrors = r),
                (r = !0);
            if (!r) return t.flags & 256 ? (el(t), t) : (el(t), null);
          }
          if ((el(t), (t.flags & 128) !== 0)) return (t.lanes = l), t;
          if (
            ((l = n !== null), (e = e !== null && e.memoizedState !== null), l)
          ) {
            (n = t.child),
              (r = null),
              n.alternate !== null &&
                n.alternate.memoizedState !== null &&
                n.alternate.memoizedState.cachePool !== null &&
                (r = n.alternate.memoizedState.cachePool.pool);
            var c = null;
            n.memoizedState !== null &&
              n.memoizedState.cachePool !== null &&
              (c = n.memoizedState.cachePool.pool),
              c !== r && (n.flags |= 2048);
          }
          return (
            l !== e && l && (t.child.flags |= 8192),
            Ur(t, t.updateQueue),
            ft(t),
            null
          );
        case 4:
          return it(), e === null && wf(t.stateNode.containerInfo), ft(t), null;
        case 10:
          return Pa(t.type), ft(t), null;
        case 19:
          if ((W(_t), (r = t.memoizedState), r === null)) return ft(t), null;
          if (((n = (t.flags & 128) !== 0), (c = r.rendering), c === null))
            if (n) tu(r, !1);
            else {
              if (ht !== 0 || (e !== null && (e.flags & 128) !== 0))
                for (e = t.child; e !== null; ) {
                  if (((c = xr(e)), c !== null)) {
                    for (
                      t.flags |= 128,
                        tu(r, !1),
                        e = c.updateQueue,
                        t.updateQueue = e,
                        Ur(t, e),
                        t.subtreeFlags = 0,
                        e = l,
                        l = t.child;
                      l !== null;

                    )
                      kd(l, e), (l = l.sibling);
                    return K(_t, (_t.current & 1) | 2), t.child;
                  }
                  e = e.sibling;
                }
              r.tail !== null &&
                ta() > Lr &&
                ((t.flags |= 128), (n = !0), tu(r, !1), (t.lanes = 4194304));
            }
          else {
            if (!n)
              if (((e = xr(c)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (n = !0),
                  (e = e.updateQueue),
                  (t.updateQueue = e),
                  Ur(t, e),
                  tu(r, !0),
                  r.tail === null &&
                    r.tailMode === "hidden" &&
                    !c.alternate &&
                    !Ge)
                )
                  return ft(t), null;
              } else
                2 * ta() - r.renderingStartTime > Lr &&
                  l !== 536870912 &&
                  ((t.flags |= 128), (n = !0), tu(r, !1), (t.lanes = 4194304));
            r.isBackwards
              ? ((c.sibling = t.child), (t.child = c))
              : ((e = r.last),
                e !== null ? (e.sibling = c) : (t.child = c),
                (r.last = c));
          }
          return r.tail !== null
            ? ((t = r.tail),
              (r.rendering = t),
              (r.tail = t.sibling),
              (r.renderingStartTime = ta()),
              (t.sibling = null),
              (e = _t.current),
              K(_t, n ? (e & 1) | 2 : e & 1),
              t)
            : (ft(t), null);
        case 22:
        case 23:
          return (
            el(t),
            Rc(),
            (n = t.memoizedState !== null),
            e !== null
              ? (e.memoizedState !== null) !== n && (t.flags |= 8192)
              : n && (t.flags |= 8192),
            n
              ? (l & 536870912) !== 0 &&
                (t.flags & 128) === 0 &&
                (ft(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : ft(t),
            (l = t.updateQueue),
            l !== null && Ur(t, l.retryQueue),
            (l = null),
            e !== null &&
              e.memoizedState !== null &&
              e.memoizedState.cachePool !== null &&
              (l = e.memoizedState.cachePool.pool),
            (n = null),
            t.memoizedState !== null &&
              t.memoizedState.cachePool !== null &&
              (n = t.memoizedState.cachePool.pool),
            n !== l && (t.flags |= 2048),
            e !== null && W(mn),
            null
          );
        case 24:
          return (
            (l = null),
            e !== null && (l = e.memoizedState.cache),
            t.memoizedState.cache !== l && (t.flags |= 2048),
            Pa(bt),
            ft(t),
            null
          );
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(s(156, t.tag));
    }
    function Qg(e, t) {
      switch ((hc(t), t.tag)) {
        case 1:
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Pa(bt),
            it(),
            (e = t.flags),
            (e & 65536) !== 0 && (e & 128) === 0
              ? ((t.flags = (e & -65537) | 128), t)
              : null
          );
        case 26:
        case 27:
        case 5:
          return Il(t), null;
        case 13:
          if (
            (el(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(s(340));
            ki();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return W(_t), null;
        case 4:
          return it(), null;
        case 10:
          return Pa(t.type), null;
        case 22:
        case 23:
          return (
            el(t),
            Rc(),
            e !== null && W(mn),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 24:
          return Pa(bt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function dm(e, t) {
      switch ((hc(t), t.tag)) {
        case 3:
          Pa(bt), it();
          break;
        case 26:
        case 27:
        case 5:
          Il(t);
          break;
        case 4:
          it();
          break;
        case 13:
          el(t);
          break;
        case 19:
          W(_t);
          break;
        case 10:
          Pa(t.type);
          break;
        case 22:
        case 23:
          el(t), Rc(), e !== null && W(mn);
          break;
        case 24:
          Pa(bt);
      }
    }
    function au(e, t) {
      try {
        var l = t.updateQueue,
          n = l !== null ? l.lastEffect : null;
        if (n !== null) {
          var r = n.next;
          l = r;
          do {
            if ((l.tag & e) === e) {
              n = void 0;
              var c = l.create,
                d = l.inst;
              (n = c()), (d.destroy = n);
            }
            l = l.next;
          } while (l !== r);
        }
      } catch (m) {
        Pe(t, t.return, m);
      }
    }
    function Nl(e, t, l) {
      try {
        var n = t.updateQueue,
          r = n !== null ? n.lastEffect : null;
        if (r !== null) {
          var c = r.next;
          n = c;
          do {
            if ((n.tag & e) === e) {
              var d = n.inst,
                m = d.destroy;
              if (m !== void 0) {
                (d.destroy = void 0), (r = t);
                var p = l,
                  O = m;
                try {
                  O();
                } catch (L) {
                  Pe(r, p, L);
                }
              }
            }
            n = n.next;
          } while (n !== c);
        }
      } catch (L) {
        Pe(t, t.return, L);
      }
    }
    function hm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var l = e.stateNode;
        try {
          eh(t, l);
        } catch (n) {
          Pe(e, e.return, n);
        }
      }
    }
    function mm(e, t, l) {
      (l.props = vn(e.type, e.memoizedProps)), (l.state = e.memoizedState);
      try {
        l.componentWillUnmount();
      } catch (n) {
        Pe(e, t, n);
      }
    }
    function lu(e, t) {
      try {
        var l = e.ref;
        if (l !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var n = e.stateNode;
              break;
            case 30:
              n = e.stateNode;
              break;
            default:
              n = e.stateNode;
          }
          typeof l == "function" ? (e.refCleanup = l(n)) : (l.current = n);
        }
      } catch (r) {
        Pe(e, t, r);
      }
    }
    function Ca(e, t) {
      var l = e.ref,
        n = e.refCleanup;
      if (l !== null)
        if (typeof n == "function")
          try {
            n();
          } catch (r) {
            Pe(e, t, r);
          } finally {
            (e.refCleanup = null),
              (e = e.alternate),
              e != null && (e.refCleanup = null);
          }
        else if (typeof l == "function")
          try {
            l(null);
          } catch (r) {
            Pe(e, t, r);
          }
        else l.current = null;
    }
    function ym(e) {
      var t = e.type,
        l = e.memoizedProps,
        n = e.stateNode;
      try {
        e: switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            l.autoFocus && n.focus();
            break e;
          case "img":
            l.src ? (n.src = l.src) : l.srcSet && (n.srcset = l.srcSet);
        }
      } catch (r) {
        Pe(e, e.return, r);
      }
    }
    function tf(e, t, l) {
      try {
        var n = e.stateNode;
        h1(n, e.type, l, t), (n[ae] = t);
      } catch (r) {
        Pe(e, e.return, r);
      }
    }
    function vm(e) {
      return (
        e.tag === 5 ||
        e.tag === 3 ||
        e.tag === 26 ||
        (e.tag === 27 && kl(e.type)) ||
        e.tag === 4
      );
    }
    function af(e) {
      e: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || vm(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
          if (
            (e.tag === 27 && kl(e.type)) ||
            e.flags & 2 ||
            e.child === null ||
            e.tag === 4
          )
            continue e;
          (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function lf(e, t, l) {
      var n = e.tag;
      if (n === 5 || n === 6)
        (e = e.stateNode),
          t
            ? (l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l
              ).insertBefore(e, t)
            : ((t =
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l),
              t.appendChild(e),
              (l = l._reactRootContainer),
              l != null || t.onclick !== null || (t.onclick = Qr));
      else if (
        n !== 4 &&
        (n === 27 && kl(e.type) && ((l = e.stateNode), (t = null)),
        (e = e.child),
        e !== null)
      )
        for (lf(e, t, l), e = e.sibling; e !== null; )
          lf(e, t, l), (e = e.sibling);
    }
    function Cr(e, t, l) {
      var n = e.tag;
      if (n === 5 || n === 6)
        (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
      else if (
        n !== 4 &&
        (n === 27 && kl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
      )
        for (Cr(e, t, l), e = e.sibling; e !== null; )
          Cr(e, t, l), (e = e.sibling);
    }
    function gm(e) {
      var t = e.stateNode,
        l = e.memoizedProps;
      try {
        for (var n = e.type, r = t.attributes; r.length; )
          t.removeAttributeNode(r[0]);
        At(t, n, l), (t[X] = e), (t[ae] = l);
      } catch (c) {
        Pe(e, e.return, c);
      }
    }
    var ll = !1,
      yt = !1,
      nf = !1,
      pm = typeof WeakSet == "function" ? WeakSet : Set,
      Et = null;
    function Kg(e, t) {
      if (((e = e.containerInfo), (xf = Ir), (e = xd(e)), ac(e))) {
        if ("selectionStart" in e)
          var l = { start: e.selectionStart, end: e.selectionEnd };
        else
          e: {
            l = ((l = e.ownerDocument) && l.defaultView) || window;
            var n = l.getSelection && l.getSelection();
            if (n && n.rangeCount !== 0) {
              l = n.anchorNode;
              var r = n.anchorOffset,
                c = n.focusNode;
              n = n.focusOffset;
              try {
                l.nodeType, c.nodeType;
              } catch {
                l = null;
                break e;
              }
              var d = 0,
                m = -1,
                p = -1,
                O = 0,
                L = 0,
                k = e,
                x = null;
              t: for (;;) {
                for (
                  var N;
                  k !== l || (r !== 0 && k.nodeType !== 3) || (m = d + r),
                    k !== c || (n !== 0 && k.nodeType !== 3) || (p = d + n),
                    k.nodeType === 3 && (d += k.nodeValue.length),
                    (N = k.firstChild) !== null;

                )
                  (x = k), (k = N);
                for (;;) {
                  if (k === e) break t;
                  if (
                    (x === l && ++O === r && (m = d),
                    x === c && ++L === n && (p = d),
                    (N = k.nextSibling) !== null)
                  )
                    break;
                  (k = x), (x = k.parentNode);
                }
                k = N;
              }
              l = m === -1 || p === -1 ? null : { start: m, end: p };
            } else l = null;
          }
        l = l || { start: 0, end: 0 };
      } else l = null;
      for (
        Af = { focusedElem: e, selectionRange: l }, Ir = !1, Et = t;
        Et !== null;

      )
        if (
          ((t = Et), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
        )
          (e.return = t), (Et = e);
        else
          for (; Et !== null; ) {
            switch (((t = Et), (c = t.alternate), (e = t.flags), t.tag)) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                if ((e & 1024) !== 0 && c !== null) {
                  (e = void 0),
                    (l = t),
                    (r = c.memoizedProps),
                    (c = c.memoizedState),
                    (n = l.stateNode);
                  try {
                    var pe = vn(l.type, r, l.elementType === l.type);
                    (e = n.getSnapshotBeforeUpdate(pe, c)),
                      (n.__reactInternalSnapshotBeforeUpdate = e);
                  } catch (ve) {
                    Pe(l, l.return, ve);
                  }
                }
                break;
              case 3:
                if ((e & 1024) !== 0) {
                  if (
                    ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                  )
                    Yf(e);
                  else if (l === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Yf(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((e & 1024) !== 0) throw Error(s(163));
            }
            if (((e = t.sibling), e !== null)) {
              (e.return = t.return), (Et = e);
              break;
            }
            Et = t.return;
          }
    }
    function Sm(e, t, l) {
      var n = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          zl(e, l), n & 4 && au(5, l);
          break;
        case 1:
          if ((zl(e, l), n & 4))
            if (((e = l.stateNode), t === null))
              try {
                e.componentDidMount();
              } catch (d) {
                Pe(l, l.return, d);
              }
            else {
              var r = vn(l.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(
                  r,
                  t,
                  e.__reactInternalSnapshotBeforeUpdate,
                );
              } catch (d) {
                Pe(l, l.return, d);
              }
            }
          n & 64 && hm(l), n & 512 && lu(l, l.return);
          break;
        case 3:
          if ((zl(e, l), n & 64 && ((e = l.updateQueue), e !== null))) {
            if (((t = null), l.child !== null))
              switch (l.child.tag) {
                case 27:
                case 5:
                  t = l.child.stateNode;
                  break;
                case 1:
                  t = l.child.stateNode;
              }
            try {
              eh(e, t);
            } catch (d) {
              Pe(l, l.return, d);
            }
          }
          break;
        case 27:
          t === null && n & 4 && gm(l);
        case 26:
        case 5:
          zl(e, l), t === null && n & 4 && ym(l), n & 512 && lu(l, l.return);
          break;
        case 12:
          zl(e, l);
          break;
        case 13:
          zl(e, l),
            n & 4 && Mm(e, l),
            n & 64 &&
              ((e = l.memoizedState),
              e !== null &&
                ((e = e.dehydrated),
                e !== null && ((l = a1.bind(null, l)), b1(e, l))));
          break;
        case 22:
          if (((n = l.memoizedState !== null || ll), !n)) {
            (t = (t !== null && t.memoizedState !== null) || yt), (r = ll);
            var c = yt;
            (ll = n),
              (yt = t) && !c
                ? Yl(e, l, (l.subtreeFlags & 8772) !== 0)
                : zl(e, l),
              (ll = r),
              (yt = c);
          }
          break;
        case 30:
          break;
        default:
          zl(e, l);
      }
    }
    function bm(e) {
      var t = e.alternate;
      t !== null && ((e.alternate = null), bm(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && ze(t)),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
    }
    var ut = null,
      qt = !1;
    function nl(e, t, l) {
      for (l = l.child; l !== null; ) _m(e, t, l), (l = l.sibling);
    }
    function _m(e, t, l) {
      if (Nt && typeof Nt.onCommitFiberUnmount == "function")
        try {
          Nt.onCommitFiberUnmount(Lt, l);
        } catch {}
      switch (l.tag) {
        case 26:
          yt || Ca(l, t),
            nl(e, t, l),
            l.memoizedState
              ? l.memoizedState.count--
              : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
          break;
        case 27:
          yt || Ca(l, t);
          var n = ut,
            r = qt;
          kl(l.type) && ((ut = l.stateNode), (qt = !1)),
            nl(e, t, l),
            du(l.stateNode),
            (ut = n),
            (qt = r);
          break;
        case 5:
          yt || Ca(l, t);
        case 6:
          if (
            ((n = ut),
            (r = qt),
            (ut = null),
            nl(e, t, l),
            (ut = n),
            (qt = r),
            ut !== null)
          )
            if (qt)
              try {
                (ut.nodeType === 9
                  ? ut.body
                  : ut.nodeName === "HTML"
                    ? ut.ownerDocument.body
                    : ut
                ).removeChild(l.stateNode);
              } catch (c) {
                Pe(l, t, c);
              }
            else
              try {
                ut.removeChild(l.stateNode);
              } catch (c) {
                Pe(l, t, c);
              }
          break;
        case 18:
          ut !== null &&
            (qt
              ? ((e = ut),
                cy(
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === "HTML"
                      ? e.ownerDocument.body
                      : e,
                  l.stateNode,
                ),
                bu(e))
              : cy(ut, l.stateNode));
          break;
        case 4:
          (n = ut),
            (r = qt),
            (ut = l.stateNode.containerInfo),
            (qt = !0),
            nl(e, t, l),
            (ut = n),
            (qt = r);
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          yt || Nl(2, l, t), yt || Nl(4, l, t), nl(e, t, l);
          break;
        case 1:
          yt ||
            (Ca(l, t),
            (n = l.stateNode),
            typeof n.componentWillUnmount == "function" && mm(l, t, n)),
            nl(e, t, l);
          break;
        case 21:
          nl(e, t, l);
          break;
        case 22:
          (yt = (n = yt) || l.memoizedState !== null), nl(e, t, l), (yt = n);
          break;
        default:
          nl(e, t, l);
      }
    }
    function Mm(e, t) {
      if (
        t.memoizedState === null &&
        ((e = t.alternate),
        e !== null &&
          ((e = e.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)))
      )
        try {
          bu(e);
        } catch (l) {
          Pe(t, t.return, l);
        }
    }
    function Wg(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new pm()), t;
        case 22:
          return (
            (e = e.stateNode),
            (t = e._retryCache),
            t === null && (t = e._retryCache = new pm()),
            t
          );
        default:
          throw Error(s(435, e.tag));
      }
    }
    function uf(e, t) {
      var l = Wg(e);
      t.forEach(function (n) {
        var r = l1.bind(null, e, n);
        l.has(n) || (l.add(n), n.then(r, r));
      });
    }
    function Kt(e, t) {
      var l = t.deletions;
      if (l !== null)
        for (var n = 0; n < l.length; n++) {
          var r = l[n],
            c = e,
            d = t,
            m = d;
          e: for (; m !== null; ) {
            switch (m.tag) {
              case 27:
                if (kl(m.type)) {
                  (ut = m.stateNode), (qt = !1);
                  break e;
                }
                break;
              case 5:
                (ut = m.stateNode), (qt = !1);
                break e;
              case 3:
              case 4:
                (ut = m.stateNode.containerInfo), (qt = !0);
                break e;
            }
            m = m.return;
          }
          if (ut === null) throw Error(s(160));
          _m(c, d, r),
            (ut = null),
            (qt = !1),
            (c = r.alternate),
            c !== null && (c.return = null),
            (r.return = null);
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; ) Dm(t, e), (t = t.sibling);
    }
    var ba = null;
    function Dm(e, t) {
      var l = e.alternate,
        n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Kt(t, e),
            Wt(e),
            n & 4 && (Nl(3, e, e.return), au(3, e), Nl(5, e, e.return));
          break;
        case 1:
          Kt(t, e),
            Wt(e),
            n & 512 && (yt || l === null || Ca(l, l.return)),
            n & 64 &&
              ll &&
              ((e = e.updateQueue),
              e !== null &&
                ((n = e.callbacks),
                n !== null &&
                  ((l = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = l === null ? n : l.concat(n)))));
          break;
        case 26:
          var r = ba;
          if (
            (Kt(t, e),
            Wt(e),
            n & 512 && (yt || l === null || Ca(l, l.return)),
            n & 4)
          ) {
            var c = l !== null ? l.memoizedState : null;
            if (((n = e.memoizedState), l === null))
              if (n === null)
                if (e.stateNode === null) {
                  e: {
                    (n = e.type),
                      (l = e.memoizedProps),
                      (r = r.ownerDocument || r);
                    t: switch (n) {
                      case "title":
                        (c = r.getElementsByTagName("title")[0]),
                          (!c ||
                            c[me] ||
                            c[X] ||
                            c.namespaceURI === "http://www.w3.org/2000/svg" ||
                            c.hasAttribute("itemprop")) &&
                            ((c = r.createElement(n)),
                            r.head.insertBefore(
                              c,
                              r.querySelector("head > title"),
                            )),
                          At(c, n, l),
                          (c[X] = e),
                          we(c),
                          (n = c);
                        break e;
                      case "link":
                        var d = gy("link", "href", r).get(n + (l.href || ""));
                        if (d) {
                          for (var m = 0; m < d.length; m++)
                            if (
                              ((c = d[m]),
                              c.getAttribute("href") ===
                                (l.href == null || l.href === ""
                                  ? null
                                  : l.href) &&
                                c.getAttribute("rel") ===
                                  (l.rel == null ? null : l.rel) &&
                                c.getAttribute("title") ===
                                  (l.title == null ? null : l.title) &&
                                c.getAttribute("crossorigin") ===
                                  (l.crossOrigin == null
                                    ? null
                                    : l.crossOrigin))
                            ) {
                              d.splice(m, 1);
                              break t;
                            }
                        }
                        (c = r.createElement(n)),
                          At(c, n, l),
                          r.head.appendChild(c);
                        break;
                      case "meta":
                        if (
                          (d = gy("meta", "content", r).get(
                            n + (l.content || ""),
                          ))
                        ) {
                          for (m = 0; m < d.length; m++)
                            if (
                              ((c = d[m]),
                              c.getAttribute("content") ===
                                (l.content == null ? null : "" + l.content) &&
                                c.getAttribute("name") ===
                                  (l.name == null ? null : l.name) &&
                                c.getAttribute("property") ===
                                  (l.property == null ? null : l.property) &&
                                c.getAttribute("http-equiv") ===
                                  (l.httpEquiv == null ? null : l.httpEquiv) &&
                                c.getAttribute("charset") ===
                                  (l.charSet == null ? null : l.charSet))
                            ) {
                              d.splice(m, 1);
                              break t;
                            }
                        }
                        (c = r.createElement(n)),
                          At(c, n, l),
                          r.head.appendChild(c);
                        break;
                      default:
                        throw Error(s(468, n));
                    }
                    (c[X] = e), we(c), (n = c);
                  }
                  e.stateNode = n;
                } else py(r, e.type, e.stateNode);
              else e.stateNode = vy(r, n, e.memoizedProps);
            else
              c !== n
                ? (c === null
                    ? l.stateNode !== null &&
                      ((l = l.stateNode), l.parentNode.removeChild(l))
                    : c.count--,
                  n === null
                    ? py(r, e.type, e.stateNode)
                    : vy(r, n, e.memoizedProps))
                : n === null &&
                  e.stateNode !== null &&
                  tf(e, e.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          Kt(t, e),
            Wt(e),
            n & 512 && (yt || l === null || Ca(l, l.return)),
            l !== null && n & 4 && tf(e, e.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (
            (Kt(t, e),
            Wt(e),
            n & 512 && (yt || l === null || Ca(l, l.return)),
            e.flags & 32)
          ) {
            r = e.stateNode;
            try {
              zn(r, "");
            } catch (N) {
              Pe(e, e.return, N);
            }
          }
          n & 4 &&
            e.stateNode != null &&
            ((r = e.memoizedProps), tf(e, r, l !== null ? l.memoizedProps : r)),
            n & 1024 && (nf = !0);
          break;
        case 6:
          if ((Kt(t, e), Wt(e), n & 4)) {
            if (e.stateNode === null) throw Error(s(162));
            (n = e.memoizedProps), (l = e.stateNode);
            try {
              l.nodeValue = n;
            } catch (N) {
              Pe(e, e.return, N);
            }
          }
          break;
        case 3:
          if (
            ((Fr = null),
            (r = ba),
            (ba = Wr(t.containerInfo)),
            Kt(t, e),
            (ba = r),
            Wt(e),
            n & 4 && l !== null && l.memoizedState.isDehydrated)
          )
            try {
              bu(t.containerInfo);
            } catch (N) {
              Pe(e, e.return, N);
            }
          nf && ((nf = !1), Em(e));
          break;
        case 4:
          (n = ba),
            (ba = Wr(e.stateNode.containerInfo)),
            Kt(t, e),
            Wt(e),
            (ba = n);
          break;
        case 12:
          Kt(t, e), Wt(e);
          break;
        case 13:
          Kt(t, e),
            Wt(e),
            e.child.flags & 8192 &&
              (e.memoizedState !== null) !=
                (l !== null && l.memoizedState !== null) &&
              (df = ta()),
            n & 4 &&
              ((n = e.updateQueue),
              n !== null && ((e.updateQueue = null), uf(e, n)));
          break;
        case 22:
          r = e.memoizedState !== null;
          var p = l !== null && l.memoizedState !== null,
            O = ll,
            L = yt;
          if (
            ((ll = O || r),
            (yt = L || p),
            Kt(t, e),
            (yt = L),
            (ll = O),
            Wt(e),
            n & 8192)
          )
            e: for (
              t = e.stateNode,
                t._visibility = r ? t._visibility & -2 : t._visibility | 1,
                r && (l === null || p || ll || yt || gn(e)),
                l = null,
                t = e;
              ;

            ) {
              if (t.tag === 5 || t.tag === 26) {
                if (l === null) {
                  p = l = t;
                  try {
                    if (((c = p.stateNode), r))
                      (d = c.style),
                        typeof d.setProperty == "function"
                          ? d.setProperty("display", "none", "important")
                          : (d.display = "none");
                    else {
                      m = p.stateNode;
                      var k = p.memoizedProps.style,
                        x =
                          k != null && k.hasOwnProperty("display")
                            ? k.display
                            : null;
                      m.style.display =
                        x == null || typeof x == "boolean"
                          ? ""
                          : ("" + x).trim();
                    }
                  } catch (N) {
                    Pe(p, p.return, N);
                  }
                }
              } else if (t.tag === 6) {
                if (l === null) {
                  p = t;
                  try {
                    p.stateNode.nodeValue = r ? "" : p.memoizedProps;
                  } catch (N) {
                    Pe(p, p.return, N);
                  }
                }
              } else if (
                ((t.tag !== 22 && t.tag !== 23) ||
                  t.memoizedState === null ||
                  t === e) &&
                t.child !== null
              ) {
                (t.child.return = t), (t = t.child);
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) break e;
                l === t && (l = null), (t = t.return);
              }
              l === t && (l = null),
                (t.sibling.return = t.return),
                (t = t.sibling);
            }
          n & 4 &&
            ((n = e.updateQueue),
            n !== null &&
              ((l = n.retryQueue),
              l !== null && ((n.retryQueue = null), uf(e, l))));
          break;
        case 19:
          Kt(t, e),
            Wt(e),
            n & 4 &&
              ((n = e.updateQueue),
              n !== null && ((e.updateQueue = null), uf(e, n)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Kt(t, e), Wt(e);
      }
    }
    function Wt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var l, n = e.return; n !== null; ) {
            if (vm(n)) {
              l = n;
              break;
            }
            n = n.return;
          }
          if (l == null) throw Error(s(160));
          switch (l.tag) {
            case 27:
              var r = l.stateNode,
                c = af(e);
              Cr(e, c, r);
              break;
            case 5:
              var d = l.stateNode;
              l.flags & 32 && (zn(d, ""), (l.flags &= -33));
              var m = af(e);
              Cr(e, m, d);
              break;
            case 3:
            case 4:
              var p = l.stateNode.containerInfo,
                O = af(e);
              lf(e, O, p);
              break;
            default:
              throw Error(s(161));
          }
        } catch (L) {
          Pe(e, e.return, L);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Em(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          Em(t),
            t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
            (e = e.sibling);
        }
    }
    function zl(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; ) Sm(e, t.alternate, t), (t = t.sibling);
    }
    function gn(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Nl(4, t, t.return), gn(t);
            break;
          case 1:
            Ca(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && mm(t, t.return, l),
              gn(t);
            break;
          case 27:
            du(t.stateNode);
          case 26:
          case 5:
            Ca(t, t.return), gn(t);
            break;
          case 22:
            t.memoizedState === null && gn(t);
            break;
          case 30:
            gn(t);
            break;
          default:
            gn(t);
        }
        e = e.sibling;
      }
    }
    function Yl(e, t, l) {
      for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var n = t.alternate,
          r = e,
          c = t,
          d = c.flags;
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            Yl(r, c, l), au(4, c);
            break;
          case 1:
            if (
              (Yl(r, c, l),
              (n = c),
              (r = n.stateNode),
              typeof r.componentDidMount == "function")
            )
              try {
                r.componentDidMount();
              } catch (O) {
                Pe(n, n.return, O);
              }
            if (((n = c), (r = n.updateQueue), r !== null)) {
              var m = n.stateNode;
              try {
                var p = r.shared.hiddenCallbacks;
                if (p !== null)
                  for (
                    r.shared.hiddenCallbacks = null, r = 0;
                    r < p.length;
                    r++
                  )
                    Id(p[r], m);
              } catch (O) {
                Pe(n, n.return, O);
              }
            }
            l && d & 64 && hm(c), lu(c, c.return);
            break;
          case 27:
            gm(c);
          case 26:
          case 5:
            Yl(r, c, l), l && n === null && d & 4 && ym(c), lu(c, c.return);
            break;
          case 12:
            Yl(r, c, l);
            break;
          case 13:
            Yl(r, c, l), l && d & 4 && Mm(r, c);
            break;
          case 22:
            c.memoizedState === null && Yl(r, c, l), lu(c, c.return);
            break;
          case 30:
            break;
          default:
            Yl(r, c, l);
        }
        t = t.sibling;
      }
    }
    function rf(e, t) {
      var l = null;
      e !== null &&
        e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (l = e.memoizedState.cachePool.pool),
        (e = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        e !== l && (e != null && e.refCount++, l != null && qi(l));
    }
    function sf(e, t) {
      (e = null),
        t.alternate !== null && (e = t.alternate.memoizedState.cache),
        (t = t.memoizedState.cache),
        t !== e && (t.refCount++, e != null && qi(e));
    }
    function Ha(e, t, l, n) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) Tm(e, t, l, n), (t = t.sibling);
    }
    function Tm(e, t, l, n) {
      var r = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ha(e, t, l, n), r & 2048 && au(9, t);
          break;
        case 1:
          Ha(e, t, l, n);
          break;
        case 3:
          Ha(e, t, l, n),
            r & 2048 &&
              ((e = null),
              t.alternate !== null && (e = t.alternate.memoizedState.cache),
              (t = t.memoizedState.cache),
              t !== e && (t.refCount++, e != null && qi(e)));
          break;
        case 12:
          if (r & 2048) {
            Ha(e, t, l, n), (e = t.stateNode);
            try {
              var c = t.memoizedProps,
                d = c.id,
                m = c.onPostCommit;
              typeof m == "function" &&
                m(
                  d,
                  t.alternate === null ? "mount" : "update",
                  e.passiveEffectDuration,
                  -0,
                );
            } catch (p) {
              Pe(t, t.return, p);
            }
          } else Ha(e, t, l, n);
          break;
        case 13:
          Ha(e, t, l, n);
          break;
        case 23:
          break;
        case 22:
          (c = t.stateNode),
            (d = t.alternate),
            t.memoizedState !== null
              ? c._visibility & 2
                ? Ha(e, t, l, n)
                : nu(e, t)
              : c._visibility & 2
                ? Ha(e, t, l, n)
                : ((c._visibility |= 2),
                  $n(e, t, l, n, (t.subtreeFlags & 10256) !== 0)),
            r & 2048 && rf(d, t);
          break;
        case 24:
          Ha(e, t, l, n), r & 2048 && sf(t.alternate, t);
          break;
        default:
          Ha(e, t, l, n);
      }
    }
    function $n(e, t, l, n, r) {
      for (r = r && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
        var c = e,
          d = t,
          m = l,
          p = n,
          O = d.flags;
        switch (d.tag) {
          case 0:
          case 11:
          case 15:
            $n(c, d, m, p, r), au(8, d);
            break;
          case 23:
            break;
          case 22:
            var L = d.stateNode;
            d.memoizedState !== null
              ? L._visibility & 2
                ? $n(c, d, m, p, r)
                : nu(c, d)
              : ((L._visibility |= 2), $n(c, d, m, p, r)),
              r && O & 2048 && rf(d.alternate, d);
            break;
          case 24:
            $n(c, d, m, p, r), r && O & 2048 && sf(d.alternate, d);
            break;
          default:
            $n(c, d, m, p, r);
        }
        t = t.sibling;
      }
    }
    function nu(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var l = e,
            n = t,
            r = n.flags;
          switch (n.tag) {
            case 22:
              nu(l, n), r & 2048 && rf(n.alternate, n);
              break;
            case 24:
              nu(l, n), r & 2048 && sf(n.alternate, n);
              break;
            default:
              nu(l, n);
          }
          t = t.sibling;
        }
    }
    var iu = 8192;
    function Pn(e) {
      if (e.subtreeFlags & iu)
        for (e = e.child; e !== null; ) wm(e), (e = e.sibling);
    }
    function wm(e) {
      switch (e.tag) {
        case 26:
          Pn(e),
            e.flags & iu &&
              e.memoizedState !== null &&
              Y1(ba, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          Pn(e);
          break;
        case 3:
        case 4:
          var t = ba;
          (ba = Wr(e.stateNode.containerInfo)), Pn(e), (ba = t);
          break;
        case 22:
          e.memoizedState === null &&
            ((t = e.alternate),
            t !== null && t.memoizedState !== null
              ? ((t = iu), (iu = 16777216), Pn(e), (iu = t))
              : Pn(e));
          break;
        default:
          Pn(e);
      }
    }
    function Rm(e) {
      var t = e.alternate;
      if (t !== null && ((e = t.child), e !== null)) {
        t.child = null;
        do (t = e.sibling), (e.sibling = null), (e = t);
        while (e !== null);
      }
    }
    function uu(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var l = 0; l < t.length; l++) {
            var n = t[l];
            (Et = n), xm(n, e);
          }
        Rm(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; ) Om(e), (e = e.sibling);
    }
    function Om(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          uu(e), e.flags & 2048 && Nl(9, e, e.return);
          break;
        case 3:
          uu(e);
          break;
        case 12:
          uu(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null &&
          t._visibility & 2 &&
          (e.return === null || e.return.tag !== 13)
            ? ((t._visibility &= -3), Hr(e))
            : uu(e);
          break;
        default:
          uu(e);
      }
    }
    function Hr(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var l = 0; l < t.length; l++) {
            var n = t[l];
            (Et = n), xm(n, e);
          }
        Rm(e);
      }
      for (e = e.child; e !== null; ) {
        switch (((t = e), t.tag)) {
          case 0:
          case 11:
          case 15:
            Nl(8, t, t.return), Hr(t);
            break;
          case 22:
            (l = t.stateNode),
              l._visibility & 2 && ((l._visibility &= -3), Hr(t));
            break;
          default:
            Hr(t);
        }
        e = e.sibling;
      }
    }
    function xm(e, t) {
      for (; Et !== null; ) {
        var l = Et;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Nl(8, l, t);
            break;
          case 23:
          case 22:
            if (
              l.memoizedState !== null &&
              l.memoizedState.cachePool !== null
            ) {
              var n = l.memoizedState.cachePool.pool;
              n != null && n.refCount++;
            }
            break;
          case 24:
            qi(l.memoizedState.cache);
        }
        if (((n = l.child), n !== null)) (n.return = l), (Et = n);
        else
          e: for (l = e; Et !== null; ) {
            n = Et;
            var r = n.sibling,
              c = n.return;
            if ((bm(n), n === l)) {
              Et = null;
              break e;
            }
            if (r !== null) {
              (r.return = c), (Et = r);
              break e;
            }
            Et = c;
          }
      }
    }
    var Jg = {
        getCacheForType: function (e) {
          var t = zt(bt),
            l = t.data.get(e);
          return l === void 0 && ((l = e()), t.data.set(e, l)), l;
        },
      },
      Fg = typeof WeakMap == "function" ? WeakMap : Map,
      Ze = 0,
      at = null,
      xe = null,
      Ce = 0,
      Xe = 0,
      Jt = null,
      Ul = !1,
      In = !1,
      cf = !1,
      il = 0,
      ht = 0,
      Cl = 0,
      pn = 0,
      ff = 0,
      oa = 0,
      ei = 0,
      ru = null,
      Vt = null,
      of = !1,
      df = 0,
      Lr = 1 / 0,
      jr = null,
      Hl = null,
      xt = 0,
      Ll = null,
      ti = null,
      ai = 0,
      hf = 0,
      mf = null,
      Am = null,
      su = 0,
      yf = null;
    function Ft() {
      if ((Ze & 2) !== 0 && Ce !== 0) return Ce & -Ce;
      if (H.T !== null) {
        var e = Vn;
        return e !== 0 ? e : Mf();
      }
      return w();
    }
    function Nm() {
      oa === 0 && (oa = (Ce & 536870912) === 0 || Ge ? Fu() : 536870912);
      var e = fa.current;
      return e !== null && (e.flags |= 32), oa;
    }
    function $t(e, t, l) {
      ((e === at && (Xe === 2 || Xe === 9)) ||
        e.cancelPendingCommit !== null) &&
        (li(e, 0), jl(e, Ce, oa, !1)),
        pl(e, l),
        ((Ze & 2) === 0 || e !== at) &&
          (e === at &&
            ((Ze & 2) === 0 && (pn |= l), ht === 4 && jl(e, Ce, oa, !1)),
          La(e));
    }
    function zm(e, t, l) {
      if ((Ze & 6) !== 0) throw Error(s(327));
      var n = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || gl(e, t),
        r = n ? Ig(e, t) : pf(e, t, !0),
        c = n;
      do {
        if (r === 0) {
          In && !n && jl(e, t, 0, !1);
          break;
        } else {
          if (((l = e.current.alternate), c && !$g(l))) {
            (r = pf(e, t, !1)), (c = !1);
            continue;
          }
          if (r === 2) {
            if (((c = t), e.errorRecoveryDisabledLanes & c)) var d = 0;
            else
              (d = e.pendingLanes & -536870913),
                (d = d !== 0 ? d : d & 536870912 ? 536870912 : 0);
            if (d !== 0) {
              t = d;
              e: {
                var m = e;
                r = ru;
                var p = m.current.memoizedState.isDehydrated;
                if (
                  (p && (li(m, d).flags |= 256), (d = pf(m, d, !1)), d !== 2)
                ) {
                  if (cf && !p) {
                    (m.errorRecoveryDisabledLanes |= c), (pn |= c), (r = 4);
                    break e;
                  }
                  (c = Vt),
                    (Vt = r),
                    c !== null &&
                      (Vt === null ? (Vt = c) : Vt.push.apply(Vt, c));
                }
                r = d;
              }
              if (((c = !1), r !== 2)) continue;
            }
          }
          if (r === 1) {
            li(e, 0), jl(e, t, 0, !0);
            break;
          }
          e: {
            switch (((n = e), (c = r), c)) {
              case 0:
              case 1:
                throw Error(s(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                jl(n, t, oa, !Ul);
                break e;
              case 2:
                Vt = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(s(329));
            }
            if ((t & 62914560) === t && ((r = df + 300 - ta()), 10 < r)) {
              if ((jl(n, t, oa, !Ul), Za(n, 0, !0) !== 0)) break e;
              n.timeoutHandle = ry(
                Ym.bind(null, n, l, Vt, jr, of, t, oa, pn, ei, Ul, c, 2, -0, 0),
                r,
              );
              break e;
            }
            Ym(n, l, Vt, jr, of, t, oa, pn, ei, Ul, c, 0, -0, 0);
          }
        }
        break;
      } while (!0);
      La(e);
    }
    function Ym(e, t, l, n, r, c, d, m, p, O, L, k, x, N) {
      if (
        ((e.timeoutHandle = -1),
        (k = t.subtreeFlags),
        (k & 8192 || (k & 16785408) === 16785408) &&
          ((yu = { stylesheets: null, count: 0, unsuspend: z1 }),
          wm(t),
          (k = U1()),
          k !== null))
      ) {
        (e.cancelPendingCommit = k(
          Bm.bind(null, e, t, c, l, n, r, d, m, p, L, 1, x, N),
        )),
          jl(e, c, d, !O);
        return;
      }
      Bm(e, t, c, l, n, r, d, m, p);
    }
    function $g(e) {
      for (var t = e; ; ) {
        var l = t.tag;
        if (
          (l === 0 || l === 11 || l === 15) &&
          t.flags & 16384 &&
          ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
        )
          for (var n = 0; n < l.length; n++) {
            var r = l[n],
              c = r.getSnapshot;
            r = r.value;
            try {
              if (!Xt(c(), r)) return !1;
            } catch {
              return !1;
            }
          }
        if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
          (l.return = t), (t = l);
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
      }
      return !0;
    }
    function jl(e, t, l, n) {
      (t &= ~ff),
        (t &= ~pn),
        (e.suspendedLanes |= t),
        (e.pingedLanes &= ~t),
        n && (e.warmLanes |= t),
        (n = e.expirationTimes);
      for (var r = t; 0 < r; ) {
        var c = 31 - jt(r),
          d = 1 << c;
        (n[c] = -1), (r &= ~d);
      }
      l !== 0 && an(e, l, t);
    }
    function kr() {
      return (Ze & 6) === 0 ? (cu(0), !1) : !0;
    }
    function vf() {
      if (xe !== null) {
        if (Xe === 0) var e = xe.return;
        else (e = xe), ($a = dn = null), zc(e), (Jn = null), (Ii = 0), (e = xe);
        for (; e !== null; ) dm(e.alternate, e), (e = e.return);
        xe = null;
      }
    }
    function li(e, t) {
      var l = e.timeoutHandle;
      l !== -1 && ((e.timeoutHandle = -1), y1(l)),
        (l = e.cancelPendingCommit),
        l !== null && ((e.cancelPendingCommit = null), l()),
        vf(),
        (at = e),
        (xe = l = Wa(e.current, null)),
        (Ce = t),
        (Xe = 0),
        (Jt = null),
        (Ul = !1),
        (In = gl(e, t)),
        (cf = !1),
        (ei = oa = ff = pn = Cl = ht = 0),
        (Vt = ru = null),
        (of = !1),
        (t & 8) !== 0 && (t |= t & 32);
      var n = e.entangledLanes;
      if (n !== 0)
        for (e = e.entanglements, n &= t; 0 < n; ) {
          var r = 31 - jt(n),
            c = 1 << r;
          (t |= e[r]), (n &= ~c);
        }
      return (il = t), rr(), l;
    }
    function Um(e, t) {
      (Te = null),
        (H.H = wr),
        t === Zi || t === vr
          ? ((t = $d()), (Xe = 3))
          : t === Wd
            ? ((t = $d()), (Xe = 4))
            : (Xe =
                t === Ph
                  ? 8
                  : t !== null &&
                      typeof t == "object" &&
                      typeof t.then == "function"
                    ? 6
                    : 1),
        (Jt = t),
        xe === null && ((ht = 1), Nr(e, ua(t, e.current)));
    }
    function Cm() {
      var e = H.H;
      return (H.H = wr), e === null ? wr : e;
    }
    function Hm() {
      var e = H.A;
      return (H.A = Jg), e;
    }
    function gf() {
      (ht = 4),
        Ul || ((Ce & 4194048) !== Ce && fa.current !== null) || (In = !0),
        ((Cl & 134217727) === 0 && (pn & 134217727) === 0) ||
          at === null ||
          jl(at, Ce, oa, !1);
    }
    function pf(e, t, l) {
      var n = Ze;
      Ze |= 2;
      var r = Cm(),
        c = Hm();
      (at !== e || Ce !== t) && ((jr = null), li(e, t)), (t = !1);
      var d = ht;
      e: do
        try {
          if (Xe !== 0 && xe !== null) {
            var m = xe,
              p = Jt;
            switch (Xe) {
              case 8:
                vf(), (d = 6);
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                fa.current === null && (t = !0);
                var O = Xe;
                if (((Xe = 0), (Jt = null), ni(e, m, p, O), l && In)) {
                  d = 0;
                  break e;
                }
                break;
              default:
                (O = Xe), (Xe = 0), (Jt = null), ni(e, m, p, O);
            }
          }
          Pg(), (d = ht);
          break;
        } catch (L) {
          Um(e, L);
        }
      while (!0);
      return (
        t && e.shellSuspendCounter++,
        ($a = dn = null),
        (Ze = n),
        (H.H = r),
        (H.A = c),
        xe === null && ((at = null), (Ce = 0), rr()),
        d
      );
    }
    function Pg() {
      for (; xe !== null; ) Lm(xe);
    }
    function Ig(e, t) {
      var l = Ze;
      Ze |= 2;
      var n = Cm(),
        r = Hm();
      at !== e || Ce !== t
        ? ((jr = null), (Lr = ta() + 500), li(e, t))
        : (In = gl(e, t));
      e: do
        try {
          if (Xe !== 0 && xe !== null) {
            t = xe;
            var c = Jt;
            t: switch (Xe) {
              case 1:
                (Xe = 0), (Jt = null), ni(e, t, c, 1);
                break;
              case 2:
              case 9:
                if (Jd(c)) {
                  (Xe = 0), (Jt = null), jm(t);
                  break;
                }
                (t = function () {
                  (Xe !== 2 && Xe !== 9) || at !== e || (Xe = 7), La(e);
                }),
                  c.then(t, t);
                break e;
              case 3:
                Xe = 7;
                break e;
              case 4:
                Xe = 5;
                break e;
              case 7:
                Jd(c)
                  ? ((Xe = 0), (Jt = null), jm(t))
                  : ((Xe = 0), (Jt = null), ni(e, t, c, 7));
                break;
              case 5:
                var d = null;
                switch (xe.tag) {
                  case 26:
                    d = xe.memoizedState;
                  case 5:
                  case 27:
                    var m = xe;
                    if (!d || Sy(d)) {
                      (Xe = 0), (Jt = null);
                      var p = m.sibling;
                      if (p !== null) xe = p;
                      else {
                        var O = m.return;
                        O !== null ? ((xe = O), Br(O)) : (xe = null);
                      }
                      break t;
                    }
                }
                (Xe = 0), (Jt = null), ni(e, t, c, 5);
                break;
              case 6:
                (Xe = 0), (Jt = null), ni(e, t, c, 6);
                break;
              case 8:
                vf(), (ht = 6);
                break e;
              default:
                throw Error(s(462));
            }
          }
          e1();
          break;
        } catch (L) {
          Um(e, L);
        }
      while (!0);
      return (
        ($a = dn = null),
        (H.H = n),
        (H.A = r),
        (Ze = l),
        xe !== null ? 0 : ((at = null), (Ce = 0), rr(), ht)
      );
    }
    function e1() {
      for (; xe !== null && !js(); ) Lm(xe);
    }
    function Lm(e) {
      var t = fm(e.alternate, e, il);
      (e.memoizedProps = e.pendingProps), t === null ? Br(e) : (xe = t);
    }
    function jm(e) {
      var t = e,
        l = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = nm(l, t, t.pendingProps, t.type, void 0, Ce);
          break;
        case 11:
          t = nm(l, t, t.pendingProps, t.type.render, t.ref, Ce);
          break;
        case 5:
          zc(t);
        default:
          dm(l, t), (t = xe = kd(t, il)), (t = fm(l, t, il));
      }
      (e.memoizedProps = e.pendingProps), t === null ? Br(e) : (xe = t);
    }
    function ni(e, t, l, n) {
      ($a = dn = null), zc(t), (Jn = null), (Ii = 0);
      var r = t.return;
      try {
        if (Vg(e, r, t, l, Ce)) {
          (ht = 1), Nr(e, ua(l, e.current)), (xe = null);
          return;
        }
      } catch (c) {
        if (r !== null) throw ((xe = r), c);
        (ht = 1), Nr(e, ua(l, e.current)), (xe = null);
        return;
      }
      t.flags & 32768
        ? (Ge || n === 1
            ? (e = !0)
            : In || (Ce & 536870912) !== 0
              ? (e = !1)
              : ((Ul = e = !0),
                (n === 2 || n === 9 || n === 3 || n === 6) &&
                  ((n = fa.current),
                  n !== null && n.tag === 13 && (n.flags |= 16384))),
          km(t, e))
        : Br(t);
    }
    function Br(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          km(t, Ul);
          return;
        }
        e = t.return;
        var l = Xg(t.alternate, t, il);
        if (l !== null) {
          xe = l;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          xe = t;
          return;
        }
        xe = t = e;
      } while (t !== null);
      ht === 0 && (ht = 5);
    }
    function km(e, t) {
      do {
        var l = Qg(e.alternate, e);
        if (l !== null) {
          (l.flags &= 32767), (xe = l);
          return;
        }
        if (
          ((l = e.return),
          l !== null &&
            ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
          !t && ((e = e.sibling), e !== null))
        ) {
          xe = e;
          return;
        }
        xe = e = l;
      } while (e !== null);
      (ht = 6), (xe = null);
    }
    function Bm(e, t, l, n, r, c, d, m, p) {
      e.cancelPendingCommit = null;
      do Gr();
      while (xt !== 0);
      if ((Ze & 6) !== 0) throw Error(s(327));
      if (t !== null) {
        if (t === e.current) throw Error(s(177));
        if (
          ((c = t.lanes | t.childLanes),
          (c |= rc),
          On(e, l, c, d, m, p),
          e === at && ((xe = at = null), (Ce = 0)),
          (ti = t),
          (Ll = e),
          (ai = l),
          (hf = c),
          (mf = r),
          (Am = n),
          (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              n1(aa, function () {
                return Xm(), null;
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (n = (t.flags & 13878) !== 0),
          (t.subtreeFlags & 13878) !== 0 || n)
        ) {
          (n = H.T), (H.T = null), (r = F.p), (F.p = 2), (d = Ze), (Ze |= 4);
          try {
            Kg(e, t, l);
          } finally {
            (Ze = d), (F.p = r), (H.T = n);
          }
        }
        (xt = 1), Gm(), qm(), Vm();
      }
    }
    function Gm() {
      if (xt === 1) {
        xt = 0;
        var e = Ll,
          t = ti,
          l = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || l) {
          (l = H.T), (H.T = null);
          var n = F.p;
          F.p = 2;
          var r = Ze;
          Ze |= 4;
          try {
            Dm(t, e);
            var c = Af,
              d = xd(e.containerInfo),
              m = c.focusedElem,
              p = c.selectionRange;
            if (
              d !== m &&
              m &&
              m.ownerDocument &&
              Od(m.ownerDocument.documentElement, m)
            ) {
              if (p !== null && ac(m)) {
                var O = p.start,
                  L = p.end;
                if ((L === void 0 && (L = O), "selectionStart" in m))
                  (m.selectionStart = O),
                    (m.selectionEnd = Math.min(L, m.value.length));
                else {
                  var k = m.ownerDocument || document,
                    x = (k && k.defaultView) || window;
                  if (x.getSelection) {
                    var N = x.getSelection(),
                      pe = m.textContent.length,
                      ve = Math.min(p.start, pe),
                      Je = p.end === void 0 ? ve : Math.min(p.end, pe);
                    !N.extend && ve > Je && ((d = Je), (Je = ve), (ve = d));
                    var D = Rd(m, ve),
                      M = Rd(m, Je);
                    if (
                      D &&
                      M &&
                      (N.rangeCount !== 1 ||
                        N.anchorNode !== D.node ||
                        N.anchorOffset !== D.offset ||
                        N.focusNode !== M.node ||
                        N.focusOffset !== M.offset)
                    ) {
                      var R = k.createRange();
                      R.setStart(D.node, D.offset),
                        N.removeAllRanges(),
                        ve > Je
                          ? (N.addRange(R), N.extend(M.node, M.offset))
                          : (R.setEnd(M.node, M.offset), N.addRange(R));
                    }
                  }
                }
              }
              for (k = [], N = m; (N = N.parentNode); )
                N.nodeType === 1 &&
                  k.push({ element: N, left: N.scrollLeft, top: N.scrollTop });
              for (
                typeof m.focus == "function" && m.focus(), m = 0;
                m < k.length;
                m++
              ) {
                var j = k[m];
                (j.element.scrollLeft = j.left), (j.element.scrollTop = j.top);
              }
            }
            (Ir = !!xf), (Af = xf = null);
          } finally {
            (Ze = r), (F.p = n), (H.T = l);
          }
        }
        (e.current = t), (xt = 2);
      }
    }
    function qm() {
      if (xt === 2) {
        xt = 0;
        var e = Ll,
          t = ti,
          l = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || l) {
          (l = H.T), (H.T = null);
          var n = F.p;
          F.p = 2;
          var r = Ze;
          Ze |= 4;
          try {
            Sm(e, t.alternate, t);
          } finally {
            (Ze = r), (F.p = n), (H.T = l);
          }
        }
        xt = 3;
      }
    }
    function Vm() {
      if (xt === 4 || xt === 3) {
        (xt = 0), Xu();
        var e = Ll,
          t = ti,
          l = ai,
          n = Am;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? (xt = 5)
          : ((xt = 0), (ti = Ll = null), Zm(e, e.pendingLanes));
        var r = e.pendingLanes;
        if (
          (r === 0 && (Hl = null),
          _(l),
          (t = t.stateNode),
          Nt && typeof Nt.onCommitFiberRoot == "function")
        )
          try {
            Nt.onCommitFiberRoot(
              Lt,
              t,
              void 0,
              (t.current.flags & 128) === 128,
            );
          } catch {}
        if (n !== null) {
          (t = H.T), (r = F.p), (F.p = 2), (H.T = null);
          try {
            for (var c = e.onRecoverableError, d = 0; d < n.length; d++) {
              var m = n[d];
              c(m.value, { componentStack: m.stack });
            }
          } finally {
            (H.T = t), (F.p = r);
          }
        }
        (ai & 3) !== 0 && Gr(),
          La(e),
          (r = e.pendingLanes),
          (l & 4194090) !== 0 && (r & 42) !== 0
            ? e === yf
              ? su++
              : ((su = 0), (yf = e))
            : (su = 0),
          cu(0);
      }
    }
    function Zm(e, t) {
      (e.pooledCacheLanes &= t) === 0 &&
        ((t = e.pooledCache), t != null && ((e.pooledCache = null), qi(t)));
    }
    function Gr(e) {
      return Gm(), qm(), Vm(), Xm();
    }
    function Xm() {
      if (xt !== 5) return !1;
      var e = Ll,
        t = hf;
      hf = 0;
      var l = _(ai),
        n = H.T,
        r = F.p;
      try {
        (F.p = 32 > l ? 32 : l), (H.T = null), (l = mf), (mf = null);
        var c = Ll,
          d = ai;
        if (((xt = 0), (ti = Ll = null), (ai = 0), (Ze & 6) !== 0))
          throw Error(s(331));
        var m = Ze;
        if (
          ((Ze |= 4),
          Om(c.current),
          Tm(c, c.current, d, l),
          (Ze = m),
          cu(0, !1),
          Nt && typeof Nt.onPostCommitFiberRoot == "function")
        )
          try {
            Nt.onPostCommitFiberRoot(Lt, c);
          } catch {}
        return !0;
      } finally {
        (F.p = r), (H.T = n), Zm(e, t);
      }
    }
    function Qm(e, t, l) {
      (t = ua(l, t)),
        (t = Qc(e.stateNode, t, 2)),
        (e = Rl(e, t, 2)),
        e !== null && (pl(e, 2), La(e));
    }
    function Pe(e, t, l) {
      if (e.tag === 3) Qm(e, e, l);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            Qm(t, e, l);
            break;
          } else if (t.tag === 1) {
            var n = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == "function" ||
              (typeof n.componentDidCatch == "function" &&
                (Hl === null || !Hl.has(n)))
            ) {
              (e = ua(l, e)),
                (l = Fh(2)),
                (n = Rl(t, l, 2)),
                n !== null && ($h(l, n, t, e), pl(n, 2), La(n));
              break;
            }
          }
          t = t.return;
        }
    }
    function Sf(e, t, l) {
      var n = e.pingCache;
      if (n === null) {
        n = e.pingCache = new Fg();
        var r = new Set();
        n.set(t, r);
      } else (r = n.get(t)), r === void 0 && ((r = new Set()), n.set(t, r));
      r.has(l) ||
        ((cf = !0), r.add(l), (e = t1.bind(null, e, t, l)), t.then(e, e));
    }
    function t1(e, t, l) {
      var n = e.pingCache;
      n !== null && n.delete(t),
        (e.pingedLanes |= e.suspendedLanes & l),
        (e.warmLanes &= ~l),
        at === e &&
          (Ce & l) === l &&
          (ht === 4 || (ht === 3 && (Ce & 62914560) === Ce && 300 > ta() - df)
            ? (Ze & 2) === 0 && li(e, 0)
            : (ff |= l),
          ei === Ce && (ei = 0)),
        La(e);
    }
    function Km(e, t) {
      t === 0 && (t = Ti()), (e = kn(e, t)), e !== null && (pl(e, t), La(e));
    }
    function a1(e) {
      var t = e.memoizedState,
        l = 0;
      t !== null && (l = t.retryLane), Km(e, l);
    }
    function l1(e, t) {
      var l = 0;
      switch (e.tag) {
        case 13:
          var n = e.stateNode,
            r = e.memoizedState;
          r !== null && (l = r.retryLane);
          break;
        case 19:
          n = e.stateNode;
          break;
        case 22:
          n = e.stateNode._retryCache;
          break;
        default:
          throw Error(s(314));
      }
      n !== null && n.delete(t), Km(e, l);
    }
    function n1(e, t) {
      return pa(e, t);
    }
    var qr = null,
      ii = null,
      bf = !1,
      Vr = !1,
      _f = !1,
      Sn = 0;
    function La(e) {
      e !== ii &&
        e.next === null &&
        (ii === null ? (qr = ii = e) : (ii = ii.next = e)),
        (Vr = !0),
        bf || ((bf = !0), u1());
    }
    function cu(e, t) {
      if (!_f && Vr) {
        _f = !0;
        do
          for (var l = !1, n = qr; n !== null; ) {
            if (e !== 0) {
              var r = n.pendingLanes;
              if (r === 0) var c = 0;
              else {
                var d = n.suspendedLanes,
                  m = n.pingedLanes;
                (c = (1 << (31 - jt(42 | e) + 1)) - 1),
                  (c &= r & ~(d & ~m)),
                  (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0);
              }
              c !== 0 && ((l = !0), $m(n, c));
            } else
              (c = Ce),
                (c = Za(
                  n,
                  n === at ? c : 0,
                  n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
                )),
                (c & 3) === 0 || gl(n, c) || ((l = !0), $m(n, c));
            n = n.next;
          }
        while (l);
        _f = !1;
      }
    }
    function i1() {
      Wm();
    }
    function Wm() {
      Vr = bf = !1;
      var e = 0;
      Sn !== 0 && (m1() && (e = Sn), (Sn = 0));
      for (var t = ta(), l = null, n = qr; n !== null; ) {
        var r = n.next,
          c = Jm(n, t);
        c === 0
          ? ((n.next = null),
            l === null ? (qr = r) : (l.next = r),
            r === null && (ii = l))
          : ((l = n), (e !== 0 || (c & 3) !== 0) && (Vr = !0)),
          (n = r);
      }
      cu(e);
    }
    function Jm(e, t) {
      for (
        var l = e.suspendedLanes,
          n = e.pingedLanes,
          r = e.expirationTimes,
          c = e.pendingLanes & -62914561;
        0 < c;

      ) {
        var d = 31 - jt(c),
          m = 1 << d,
          p = r[d];
        p === -1
          ? ((m & l) === 0 || (m & n) !== 0) && (r[d] = Ei(m, t))
          : p <= t && (e.expiredLanes |= m),
          (c &= ~m);
      }
      if (
        ((t = at),
        (l = Ce),
        (l = Za(
          e,
          e === t ? l : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        (n = e.callbackNode),
        l === 0 ||
          (e === t && (Xe === 2 || Xe === 9)) ||
          e.cancelPendingCommit !== null)
      )
        return (
          n !== null && n !== null && _i(n),
          (e.callbackNode = null),
          (e.callbackPriority = 0)
        );
      if ((l & 3) === 0 || gl(e, l)) {
        if (((t = l & -l), t === e.callbackPriority)) return t;
        switch ((n !== null && _i(n), _(l))) {
          case 2:
          case 8:
            l = Ku;
            break;
          case 32:
            l = aa;
            break;
          case 268435456:
            l = Mi;
            break;
          default:
            l = aa;
        }
        return (
          (n = Fm.bind(null, e)),
          (l = pa(l, n)),
          (e.callbackPriority = t),
          (e.callbackNode = l),
          t
        );
      }
      return (
        n !== null && n !== null && _i(n),
        (e.callbackPriority = 2),
        (e.callbackNode = null),
        2
      );
    }
    function Fm(e, t) {
      if (xt !== 0 && xt !== 5)
        return (e.callbackNode = null), (e.callbackPriority = 0), null;
      var l = e.callbackNode;
      if (Gr() && e.callbackNode !== l) return null;
      var n = Ce;
      return (
        (n = Za(
          e,
          e === at ? n : 0,
          e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
        )),
        n === 0
          ? null
          : (zm(e, n, t),
            Jm(e, ta()),
            e.callbackNode != null && e.callbackNode === l
              ? Fm.bind(null, e)
              : null)
      );
    }
    function $m(e, t) {
      if (Gr()) return null;
      zm(e, t, !0);
    }
    function u1() {
      v1(function () {
        (Ze & 6) !== 0 ? pa(Qu, i1) : Wm();
      });
    }
    function Mf() {
      return Sn === 0 && (Sn = Fu()), Sn;
    }
    function Pm(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean"
        ? null
        : typeof e == "function"
          ? e
          : er("" + e);
    }
    function Im(e, t) {
      var l = t.ownerDocument.createElement("input");
      return (
        (l.name = t.name),
        (l.value = t.value),
        e.id && l.setAttribute("form", e.id),
        t.parentNode.insertBefore(l, t),
        (e = new FormData(e)),
        l.parentNode.removeChild(l),
        e
      );
    }
    function r1(e, t, l, n, r) {
      if (t === "submit" && l && l.stateNode === r) {
        var c = Pm((r[ae] || null).action),
          d = n.submitter;
        d &&
          ((t = (t = d[ae] || null)
            ? Pm(t.formAction)
            : d.getAttribute("formAction")),
          t !== null && ((c = t), (d = null)));
        var m = new nr("action", "action", null, n, r);
        e.push({
          event: m,
          listeners: [
            {
              instance: null,
              listener: function () {
                if (n.defaultPrevented) {
                  if (Sn !== 0) {
                    var p = d ? Im(r, d) : new FormData(r);
                    Gc(
                      l,
                      { pending: !0, data: p, method: r.method, action: c },
                      null,
                      p,
                    );
                  }
                } else
                  typeof c == "function" &&
                    (m.preventDefault(),
                    (p = d ? Im(r, d) : new FormData(r)),
                    Gc(
                      l,
                      { pending: !0, data: p, method: r.method, action: c },
                      c,
                      p,
                    ));
              },
              currentTarget: r,
            },
          ],
        });
      }
    }
    for (var Df = 0; Df < uc.length; Df++) {
      var Ef = uc[Df],
        s1 = Ef.toLowerCase(),
        c1 = Ef[0].toUpperCase() + Ef.slice(1);
      Sa(s1, "on" + c1);
    }
    Sa(zd, "onAnimationEnd"),
      Sa(Yd, "onAnimationIteration"),
      Sa(Ud, "onAnimationStart"),
      Sa("dblclick", "onDoubleClick"),
      Sa("focusin", "onFocus"),
      Sa("focusout", "onBlur"),
      Sa(wg, "onTransitionRun"),
      Sa(Rg, "onTransitionStart"),
      Sa(Og, "onTransitionCancel"),
      Sa(Cd, "onTransitionEnd"),
      Rt("onMouseEnter", ["mouseout", "mouseover"]),
      Rt("onMouseLeave", ["mouseout", "mouseover"]),
      Rt("onPointerEnter", ["pointerout", "pointerover"]),
      Rt("onPointerLeave", ["pointerout", "pointerover"]),
      wt(
        "onChange",
        "change click focusin focusout input keydown keyup selectionchange".split(
          " ",
        ),
      ),
      wt(
        "onSelect",
        "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
          " ",
        ),
      ),
      wt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
      wt(
        "onCompositionEnd",
        "compositionend focusout keydown keypress keyup mousedown".split(" "),
      ),
      wt(
        "onCompositionStart",
        "compositionstart focusout keydown keypress keyup mousedown".split(" "),
      ),
      wt(
        "onCompositionUpdate",
        "compositionupdate focusout keydown keypress keyup mousedown".split(
          " ",
        ),
      );
    var fu =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      f1 = new Set(
        "beforetoggle cancel close invalid load scroll scrollend toggle"
          .split(" ")
          .concat(fu),
      );
    function ey(e, t) {
      t = (t & 4) !== 0;
      for (var l = 0; l < e.length; l++) {
        var n = e[l],
          r = n.event;
        n = n.listeners;
        e: {
          var c = void 0;
          if (t)
            for (var d = n.length - 1; 0 <= d; d--) {
              var m = n[d],
                p = m.instance,
                O = m.currentTarget;
              if (((m = m.listener), p !== c && r.isPropagationStopped()))
                break e;
              (c = m), (r.currentTarget = O);
              try {
                c(r);
              } catch (L) {
                Ar(L);
              }
              (r.currentTarget = null), (c = p);
            }
          else
            for (d = 0; d < n.length; d++) {
              if (
                ((m = n[d]),
                (p = m.instance),
                (O = m.currentTarget),
                (m = m.listener),
                p !== c && r.isPropagationStopped())
              )
                break e;
              (c = m), (r.currentTarget = O);
              try {
                c(r);
              } catch (L) {
                Ar(L);
              }
              (r.currentTarget = null), (c = p);
            }
        }
      }
    }
    function Ae(e, t) {
      var l = t[le];
      l === void 0 && (l = t[le] = new Set());
      var n = e + "__bubble";
      l.has(n) || (ty(t, e, 2, !1), l.add(n));
    }
    function Tf(e, t, l) {
      var n = 0;
      t && (n |= 4), ty(l, e, n, t);
    }
    var Zr = "_reactListening" + Math.random().toString(36).slice(2);
    function wf(e) {
      if (!e[Zr]) {
        (e[Zr] = !0),
          Xa.forEach(function (l) {
            l !== "selectionchange" &&
              (f1.has(l) || Tf(l, !1, e), Tf(l, !0, e));
          });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Zr] || ((t[Zr] = !0), Tf("selectionchange", !1, t));
      }
    }
    function ty(e, t, l, n) {
      switch (Ty(t)) {
        case 2:
          var r = L1;
          break;
        case 8:
          r = j1;
          break;
        default:
          r = Bf;
      }
      (l = r.bind(null, t, l, e)),
        (r = void 0),
        !Ks ||
          (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
          (r = !0),
        n
          ? r !== void 0
            ? e.addEventListener(t, l, { capture: !0, passive: r })
            : e.addEventListener(t, l, !0)
          : r !== void 0
            ? e.addEventListener(t, l, { passive: r })
            : e.addEventListener(t, l, !1);
    }
    function Rf(e, t, l, n, r) {
      var c = n;
      if ((t & 1) === 0 && (t & 2) === 0 && n !== null)
        e: for (;;) {
          if (n === null) return;
          var d = n.tag;
          if (d === 3 || d === 4) {
            var m = n.stateNode.containerInfo;
            if (m === r) break;
            if (d === 4)
              for (d = n.return; d !== null; ) {
                var p = d.tag;
                if ((p === 3 || p === 4) && d.stateNode.containerInfo === r)
                  return;
                d = d.return;
              }
            for (; m !== null; ) {
              if (((d = qe(m)), d === null)) return;
              if (((p = d.tag), p === 5 || p === 6 || p === 26 || p === 27)) {
                n = c = d;
                continue e;
              }
              m = m.parentNode;
            }
          }
          n = n.return;
        }
      sd(function () {
        var O = c,
          L = Xs(l),
          k = [];
        e: {
          var x = Hd.get(e);
          if (x !== void 0) {
            var N = nr,
              pe = e;
            switch (e) {
              case "keypress":
                if (ar(l) === 0) break e;
              case "keydown":
              case "keyup":
                N = ng;
                break;
              case "focusin":
                (pe = "focus"), (N = $s);
                break;
              case "focusout":
                (pe = "blur"), (N = $s);
                break;
              case "beforeblur":
              case "afterblur":
                N = $s;
                break;
              case "click":
                if (l.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                N = od;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                N = Qv;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                N = rg;
                break;
              case zd:
              case Yd:
              case Ud:
                N = Jv;
                break;
              case Cd:
                N = cg;
                break;
              case "scroll":
              case "scrollend":
                N = Zv;
                break;
              case "wheel":
                N = og;
                break;
              case "copy":
              case "cut":
              case "paste":
                N = $v;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                N = hd;
                break;
              case "toggle":
              case "beforetoggle":
                N = hg;
            }
            var ve = (t & 4) !== 0,
              Je = !ve && (e === "scroll" || e === "scrollend"),
              D = ve ? (x !== null ? x + "Capture" : null) : x;
            ve = [];
            for (var M = O, R; M !== null; ) {
              var j = M;
              if (
                ((R = j.stateNode),
                (j = j.tag),
                (j !== 5 && j !== 26 && j !== 27) ||
                  R === null ||
                  D === null ||
                  ((j = xi(M, D)), j != null && ve.push(ou(M, j, R))),
                Je)
              )
                break;
              M = M.return;
            }
            0 < ve.length &&
              ((x = new N(x, pe, null, l, L)),
              k.push({ event: x, listeners: ve }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (
              ((x = e === "mouseover" || e === "pointerover"),
              (N = e === "mouseout" || e === "pointerout"),
              x &&
                l !== Zs &&
                (pe = l.relatedTarget || l.fromElement) &&
                (qe(pe) || pe[se]))
            )
              break e;
            if (
              (N || x) &&
              ((x =
                L.window === L
                  ? L
                  : (x = L.ownerDocument)
                    ? x.defaultView || x.parentWindow
                    : window),
              N
                ? ((pe = l.relatedTarget || l.toElement),
                  (N = O),
                  (pe = pe ? qe(pe) : null),
                  pe !== null &&
                    ((Je = o(pe)),
                    (ve = pe.tag),
                    pe !== Je || (ve !== 5 && ve !== 27 && ve !== 6)) &&
                    (pe = null))
                : ((N = null), (pe = O)),
              N !== pe)
            ) {
              if (
                ((ve = od),
                (j = "onMouseLeave"),
                (D = "onMouseEnter"),
                (M = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                  ((ve = hd),
                  (j = "onPointerLeave"),
                  (D = "onPointerEnter"),
                  (M = "pointer")),
                (Je = N == null ? x : et(N)),
                (R = pe == null ? x : et(pe)),
                (x = new ve(j, M + "leave", N, l, L)),
                (x.target = Je),
                (x.relatedTarget = R),
                (j = null),
                qe(L) === O &&
                  ((ve = new ve(D, M + "enter", pe, l, L)),
                  (ve.target = R),
                  (ve.relatedTarget = Je),
                  (j = ve)),
                (Je = j),
                N && pe)
              )
                t: {
                  for (ve = N, D = pe, M = 0, R = ve; R; R = ui(R)) M++;
                  for (R = 0, j = D; j; j = ui(j)) R++;
                  for (; 0 < M - R; ) (ve = ui(ve)), M--;
                  for (; 0 < R - M; ) (D = ui(D)), R--;
                  for (; M--; ) {
                    if (ve === D || (D !== null && ve === D.alternate)) break t;
                    (ve = ui(ve)), (D = ui(D));
                  }
                  ve = null;
                }
              else ve = null;
              N !== null && ay(k, x, N, ve, !1),
                pe !== null && Je !== null && ay(k, Je, pe, ve, !0);
            }
          }
          e: {
            if (
              ((x = O ? et(O) : window),
              (N = x.nodeName && x.nodeName.toLowerCase()),
              N === "select" || (N === "input" && x.type === "file"))
            )
              var te = _d;
            else if (Sd(x))
              if (Md) te = Dg;
              else {
                te = _g;
                var Re = bg;
              }
            else
              (N = x.nodeName),
                !N ||
                N.toLowerCase() !== "input" ||
                (x.type !== "checkbox" && x.type !== "radio")
                  ? O && Vs(O.elementType) && (te = _d)
                  : (te = Mg);
            if (te && (te = te(e, O))) {
              bd(k, te, l, L);
              break e;
            }
            Re && Re(e, x, O),
              e === "focusout" &&
                O &&
                x.type === "number" &&
                O.memoizedProps.value != null &&
                qs(x, "number", x.value);
          }
          switch (((Re = O ? et(O) : window), e)) {
            case "focusin":
              (Sd(Re) || Re.contentEditable === "true") &&
                ((Hn = Re), (lc = O), (Li = null));
              break;
            case "focusout":
              Li = lc = Hn = null;
              break;
            case "mousedown":
              nc = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              (nc = !1), Ad(k, l, L);
              break;
            case "selectionchange":
              if (Tg) break;
            case "keydown":
            case "keyup":
              Ad(k, l, L);
          }
          var ie;
          if (Is)
            e: {
              switch (e) {
                case "compositionstart":
                  var ge = "onCompositionStart";
                  break e;
                case "compositionend":
                  ge = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  ge = "onCompositionUpdate";
                  break e;
              }
              ge = void 0;
            }
          else
            Cn
              ? gd(e, l) && (ge = "onCompositionEnd")
              : e === "keydown" &&
                l.keyCode === 229 &&
                (ge = "onCompositionStart");
          ge &&
            (md &&
              l.locale !== "ko" &&
              (Cn || ge !== "onCompositionStart"
                ? ge === "onCompositionEnd" && Cn && (ie = cd())
                : ((Dl = L),
                  (Ws = "value" in Dl ? Dl.value : Dl.textContent),
                  (Cn = !0))),
            (Re = Xr(O, ge)),
            0 < Re.length &&
              ((ge = new dd(ge, e, null, l, L)),
              k.push({ event: ge, listeners: Re }),
              ie
                ? (ge.data = ie)
                : ((ie = pd(l)), ie !== null && (ge.data = ie)))),
            (ie = yg ? vg(e, l) : gg(e, l)) &&
              ((ge = Xr(O, "onBeforeInput")),
              0 < ge.length &&
                ((Re = new dd("onBeforeInput", "beforeinput", null, l, L)),
                k.push({ event: Re, listeners: ge }),
                (Re.data = ie))),
            r1(k, e, O, l, L);
        }
        ey(k, t);
      });
    }
    function ou(e, t, l) {
      return { instance: e, listener: t, currentTarget: l };
    }
    function Xr(e, t) {
      for (var l = t + "Capture", n = []; e !== null; ) {
        var r = e,
          c = r.stateNode;
        if (
          ((r = r.tag),
          (r !== 5 && r !== 26 && r !== 27) ||
            c === null ||
            ((r = xi(e, l)),
            r != null && n.unshift(ou(e, r, c)),
            (r = xi(e, t)),
            r != null && n.push(ou(e, r, c))),
          e.tag === 3)
        )
          return n;
        e = e.return;
      }
      return [];
    }
    function ui(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function ay(e, t, l, n, r) {
      for (var c = t._reactName, d = []; l !== null && l !== n; ) {
        var m = l,
          p = m.alternate,
          O = m.stateNode;
        if (((m = m.tag), p !== null && p === n)) break;
        (m !== 5 && m !== 26 && m !== 27) ||
          O === null ||
          ((p = O),
          r
            ? ((O = xi(l, c)), O != null && d.unshift(ou(l, O, p)))
            : r || ((O = xi(l, c)), O != null && d.push(ou(l, O, p)))),
          (l = l.return);
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    var o1 = /\r\n?/g,
      d1 = /\u0000|\uFFFD/g;
    function ly(e) {
      return (typeof e == "string" ? e : "" + e)
        .replace(
          o1,
          `
`,
        )
        .replace(d1, "");
    }
    function ny(e, t) {
      return (t = ly(t)), ly(e) === t;
    }
    function Qr() {}
    function We(e, t, l, n, r, c) {
      switch (l) {
        case "children":
          typeof n == "string"
            ? t === "body" || (t === "textarea" && n === "") || zn(e, n)
            : (typeof n == "number" || typeof n == "bigint") &&
              t !== "body" &&
              zn(e, "" + n);
          break;
        case "className":
          Be(e, "class", n);
          break;
        case "tabIndex":
          Be(e, "tabindex", n);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Be(e, l, n);
          break;
        case "style":
          ud(e, n, c);
          break;
        case "data":
          if (t !== "object") {
            Be(e, "data", n);
            break;
          }
        case "src":
        case "href":
          if (n === "" && (t !== "a" || l !== "href")) {
            e.removeAttribute(l);
            break;
          }
          if (
            n == null ||
            typeof n == "function" ||
            typeof n == "symbol" ||
            typeof n == "boolean"
          ) {
            e.removeAttribute(l);
            break;
          }
          (n = er("" + n)), e.setAttribute(l, n);
          break;
        case "action":
        case "formAction":
          if (typeof n == "function") {
            e.setAttribute(
              l,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
            );
            break;
          } else
            typeof c == "function" &&
              (l === "formAction"
                ? (t !== "input" && We(e, t, "name", r.name, r, null),
                  We(e, t, "formEncType", r.formEncType, r, null),
                  We(e, t, "formMethod", r.formMethod, r, null),
                  We(e, t, "formTarget", r.formTarget, r, null))
                : (We(e, t, "encType", r.encType, r, null),
                  We(e, t, "method", r.method, r, null),
                  We(e, t, "target", r.target, r, null)));
          if (n == null || typeof n == "symbol" || typeof n == "boolean") {
            e.removeAttribute(l);
            break;
          }
          (n = er("" + n)), e.setAttribute(l, n);
          break;
        case "onClick":
          n != null && (e.onclick = Qr);
          break;
        case "onScroll":
          n != null && Ae("scroll", e);
          break;
        case "onScrollEnd":
          n != null && Ae("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (n != null) {
            if (typeof n != "object" || !("__html" in n)) throw Error(s(61));
            if (((l = n.__html), l != null)) {
              if (r.children != null) throw Error(s(60));
              e.innerHTML = l;
            }
          }
          break;
        case "multiple":
          e.multiple = n && typeof n != "function" && typeof n != "symbol";
          break;
        case "muted":
          e.muted = n && typeof n != "function" && typeof n != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (
            n == null ||
            typeof n == "function" ||
            typeof n == "boolean" ||
            typeof n == "symbol"
          ) {
            e.removeAttribute("xlink:href");
            break;
          }
          (l = er("" + n)),
            e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          n != null && typeof n != "function" && typeof n != "symbol"
            ? e.setAttribute(l, "" + n)
            : e.removeAttribute(l);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          n && typeof n != "function" && typeof n != "symbol"
            ? e.setAttribute(l, "")
            : e.removeAttribute(l);
          break;
        case "capture":
        case "download":
          n === !0
            ? e.setAttribute(l, "")
            : n !== !1 &&
                n != null &&
                typeof n != "function" &&
                typeof n != "symbol"
              ? e.setAttribute(l, n)
              : e.removeAttribute(l);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          n != null &&
          typeof n != "function" &&
          typeof n != "symbol" &&
          !isNaN(n) &&
          1 <= n
            ? e.setAttribute(l, n)
            : e.removeAttribute(l);
          break;
        case "rowSpan":
        case "start":
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          isNaN(n)
            ? e.removeAttribute(l)
            : e.setAttribute(l, n);
          break;
        case "popover":
          Ae("beforetoggle", e), Ae("toggle", e), Qa(e, "popover", n);
          break;
        case "xlinkActuate":
          tt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
          break;
        case "xlinkArcrole":
          tt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
          break;
        case "xlinkRole":
          tt(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
          break;
        case "xlinkShow":
          tt(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
          break;
        case "xlinkTitle":
          tt(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
          break;
        case "xlinkType":
          tt(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
          break;
        case "xmlBase":
          tt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
          break;
        case "xmlLang":
          tt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
          break;
        case "xmlSpace":
          tt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
          break;
        case "is":
          Qa(e, "is", n);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) ||
            (l[0] !== "o" && l[0] !== "O") ||
            (l[1] !== "n" && l[1] !== "N")) &&
            ((l = qv.get(l) || l), Qa(e, l, n));
      }
    }
    function Of(e, t, l, n, r, c) {
      switch (l) {
        case "style":
          ud(e, n, c);
          break;
        case "dangerouslySetInnerHTML":
          if (n != null) {
            if (typeof n != "object" || !("__html" in n)) throw Error(s(61));
            if (((l = n.__html), l != null)) {
              if (r.children != null) throw Error(s(60));
              e.innerHTML = l;
            }
          }
          break;
        case "children":
          typeof n == "string"
            ? zn(e, n)
            : (typeof n == "number" || typeof n == "bigint") && zn(e, "" + n);
          break;
        case "onScroll":
          n != null && Ae("scroll", e);
          break;
        case "onScrollEnd":
          n != null && Ae("scrollend", e);
          break;
        case "onClick":
          n != null && (e.onclick = Qr);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Sl.hasOwnProperty(l))
            e: {
              if (
                l[0] === "o" &&
                l[1] === "n" &&
                ((r = l.endsWith("Capture")),
                (t = l.slice(2, r ? l.length - 7 : void 0)),
                (c = e[ae] || null),
                (c = c != null ? c[l] : null),
                typeof c == "function" && e.removeEventListener(t, c, r),
                typeof n == "function")
              ) {
                typeof c != "function" &&
                  c !== null &&
                  (l in e
                    ? (e[l] = null)
                    : e.hasAttribute(l) && e.removeAttribute(l)),
                  e.addEventListener(t, n, r);
                break e;
              }
              l in e
                ? (e[l] = n)
                : n === !0
                  ? e.setAttribute(l, "")
                  : Qa(e, l, n);
            }
      }
    }
    function At(e, t, l) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          Ae("error", e), Ae("load", e);
          var n = !1,
            r = !1,
            c;
          for (c in l)
            if (l.hasOwnProperty(c)) {
              var d = l[c];
              if (d != null)
                switch (c) {
                  case "src":
                    n = !0;
                    break;
                  case "srcSet":
                    r = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(s(137, t));
                  default:
                    We(e, t, c, d, l, null);
                }
            }
          r && We(e, t, "srcSet", l.srcSet, l, null),
            n && We(e, t, "src", l.src, l, null);
          return;
        case "input":
          Ae("invalid", e);
          var m = (c = d = r = null),
            p = null,
            O = null;
          for (n in l)
            if (l.hasOwnProperty(n)) {
              var L = l[n];
              if (L != null)
                switch (n) {
                  case "name":
                    r = L;
                    break;
                  case "type":
                    d = L;
                    break;
                  case "checked":
                    p = L;
                    break;
                  case "defaultChecked":
                    O = L;
                    break;
                  case "value":
                    c = L;
                    break;
                  case "defaultValue":
                    m = L;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (L != null) throw Error(s(137, t));
                    break;
                  default:
                    We(e, t, n, L, l, null);
                }
            }
          ad(e, c, m, p, O, d, r, !1), Pu(e);
          return;
        case "select":
          Ae("invalid", e), (n = d = c = null);
          for (r in l)
            if (l.hasOwnProperty(r) && ((m = l[r]), m != null))
              switch (r) {
                case "value":
                  c = m;
                  break;
                case "defaultValue":
                  d = m;
                  break;
                case "multiple":
                  n = m;
                default:
                  We(e, t, r, m, l, null);
              }
          (t = c),
            (l = d),
            (e.multiple = !!n),
            t != null ? Nn(e, !!n, t, !1) : l != null && Nn(e, !!n, l, !0);
          return;
        case "textarea":
          Ae("invalid", e), (c = r = n = null);
          for (d in l)
            if (l.hasOwnProperty(d) && ((m = l[d]), m != null))
              switch (d) {
                case "value":
                  n = m;
                  break;
                case "defaultValue":
                  r = m;
                  break;
                case "children":
                  c = m;
                  break;
                case "dangerouslySetInnerHTML":
                  if (m != null) throw Error(s(91));
                  break;
                default:
                  We(e, t, d, m, l, null);
              }
          nd(e, n, r, c), Pu(e);
          return;
        case "option":
          for (p in l)
            if (l.hasOwnProperty(p) && ((n = l[p]), n != null))
              switch (p) {
                case "selected":
                  e.selected =
                    n && typeof n != "function" && typeof n != "symbol";
                  break;
                default:
                  We(e, t, p, n, l, null);
              }
          return;
        case "dialog":
          Ae("beforetoggle", e),
            Ae("toggle", e),
            Ae("cancel", e),
            Ae("close", e);
          break;
        case "iframe":
        case "object":
          Ae("load", e);
          break;
        case "video":
        case "audio":
          for (n = 0; n < fu.length; n++) Ae(fu[n], e);
          break;
        case "image":
          Ae("error", e), Ae("load", e);
          break;
        case "details":
          Ae("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Ae("error", e), Ae("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (O in l)
            if (l.hasOwnProperty(O) && ((n = l[O]), n != null))
              switch (O) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  We(e, t, O, n, l, null);
              }
          return;
        default:
          if (Vs(t)) {
            for (L in l)
              l.hasOwnProperty(L) &&
                ((n = l[L]), n !== void 0 && Of(e, t, L, n, l, void 0));
            return;
          }
      }
      for (m in l)
        l.hasOwnProperty(m) &&
          ((n = l[m]), n != null && We(e, t, m, n, l, null));
    }
    function h1(e, t, l, n) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var r = null,
            c = null,
            d = null,
            m = null,
            p = null,
            O = null,
            L = null;
          for (N in l) {
            var k = l[N];
            if (l.hasOwnProperty(N) && k != null)
              switch (N) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  p = k;
                default:
                  n.hasOwnProperty(N) || We(e, t, N, null, n, k);
              }
          }
          for (var x in n) {
            var N = n[x];
            if (((k = l[x]), n.hasOwnProperty(x) && (N != null || k != null)))
              switch (x) {
                case "type":
                  c = N;
                  break;
                case "name":
                  r = N;
                  break;
                case "checked":
                  O = N;
                  break;
                case "defaultChecked":
                  L = N;
                  break;
                case "value":
                  d = N;
                  break;
                case "defaultValue":
                  m = N;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (N != null) throw Error(s(137, t));
                  break;
                default:
                  N !== k && We(e, t, x, N, n, k);
              }
          }
          Gs(e, d, m, p, O, L, c, r);
          return;
        case "select":
          N = d = m = x = null;
          for (c in l)
            if (((p = l[c]), l.hasOwnProperty(c) && p != null))
              switch (c) {
                case "value":
                  break;
                case "multiple":
                  N = p;
                default:
                  n.hasOwnProperty(c) || We(e, t, c, null, n, p);
              }
          for (r in n)
            if (
              ((c = n[r]),
              (p = l[r]),
              n.hasOwnProperty(r) && (c != null || p != null))
            )
              switch (r) {
                case "value":
                  x = c;
                  break;
                case "defaultValue":
                  m = c;
                  break;
                case "multiple":
                  d = c;
                default:
                  c !== p && We(e, t, r, c, n, p);
              }
          (t = m),
            (l = d),
            (n = N),
            x != null
              ? Nn(e, !!l, x, !1)
              : !!n != !!l &&
                (t != null ? Nn(e, !!l, t, !0) : Nn(e, !!l, l ? [] : "", !1));
          return;
        case "textarea":
          N = x = null;
          for (m in l)
            if (
              ((r = l[m]),
              l.hasOwnProperty(m) && r != null && !n.hasOwnProperty(m))
            )
              switch (m) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  We(e, t, m, null, n, r);
              }
          for (d in n)
            if (
              ((r = n[d]),
              (c = l[d]),
              n.hasOwnProperty(d) && (r != null || c != null))
            )
              switch (d) {
                case "value":
                  x = r;
                  break;
                case "defaultValue":
                  N = r;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (r != null) throw Error(s(91));
                  break;
                default:
                  r !== c && We(e, t, d, r, n, c);
              }
          ld(e, x, N);
          return;
        case "option":
          for (var pe in l)
            if (
              ((x = l[pe]),
              l.hasOwnProperty(pe) && x != null && !n.hasOwnProperty(pe))
            )
              switch (pe) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  We(e, t, pe, null, n, x);
              }
          for (p in n)
            if (
              ((x = n[p]),
              (N = l[p]),
              n.hasOwnProperty(p) && x !== N && (x != null || N != null))
            )
              switch (p) {
                case "selected":
                  e.selected =
                    x && typeof x != "function" && typeof x != "symbol";
                  break;
                default:
                  We(e, t, p, x, n, N);
              }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var ve in l)
            (x = l[ve]),
              l.hasOwnProperty(ve) &&
                x != null &&
                !n.hasOwnProperty(ve) &&
                We(e, t, ve, null, n, x);
          for (O in n)
            if (
              ((x = n[O]),
              (N = l[O]),
              n.hasOwnProperty(O) && x !== N && (x != null || N != null))
            )
              switch (O) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (x != null) throw Error(s(137, t));
                  break;
                default:
                  We(e, t, O, x, n, N);
              }
          return;
        default:
          if (Vs(t)) {
            for (var Je in l)
              (x = l[Je]),
                l.hasOwnProperty(Je) &&
                  x !== void 0 &&
                  !n.hasOwnProperty(Je) &&
                  Of(e, t, Je, void 0, n, x);
            for (L in n)
              (x = n[L]),
                (N = l[L]),
                !n.hasOwnProperty(L) ||
                  x === N ||
                  (x === void 0 && N === void 0) ||
                  Of(e, t, L, x, n, N);
            return;
          }
      }
      for (var D in l)
        (x = l[D]),
          l.hasOwnProperty(D) &&
            x != null &&
            !n.hasOwnProperty(D) &&
            We(e, t, D, null, n, x);
      for (k in n)
        (x = n[k]),
          (N = l[k]),
          !n.hasOwnProperty(k) ||
            x === N ||
            (x == null && N == null) ||
            We(e, t, k, x, n, N);
    }
    var xf = null,
      Af = null;
    function Kr(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function iy(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function uy(e, t) {
      if (e === 0)
        switch (t) {
          case "svg":
            return 1;
          case "math":
            return 2;
          default:
            return 0;
        }
      return e === 1 && t === "foreignObject" ? 0 : e;
    }
    function Nf(e, t) {
      return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        typeof t.children == "bigint" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var zf = null;
    function m1() {
      var e = window.event;
      return e && e.type === "popstate"
        ? e === zf
          ? !1
          : ((zf = e), !0)
        : ((zf = null), !1);
    }
    var ry = typeof setTimeout == "function" ? setTimeout : void 0,
      y1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
      sy = typeof Promise == "function" ? Promise : void 0,
      v1 =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof sy < "u"
            ? function (e) {
                return sy.resolve(null).then(e).catch(g1);
              }
            : ry;
    function g1(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function kl(e) {
      return e === "head";
    }
    function cy(e, t) {
      var l = t,
        n = 0,
        r = 0;
      do {
        var c = l.nextSibling;
        if ((e.removeChild(l), c && c.nodeType === 8))
          if (((l = c.data), l === "/$")) {
            if (0 < n && 8 > n) {
              l = n;
              var d = e.ownerDocument;
              if ((l & 1 && du(d.documentElement), l & 2 && du(d.body), l & 4))
                for (l = d.head, du(l), d = l.firstChild; d; ) {
                  var m = d.nextSibling,
                    p = d.nodeName;
                  d[me] ||
                    p === "SCRIPT" ||
                    p === "STYLE" ||
                    (p === "LINK" && d.rel.toLowerCase() === "stylesheet") ||
                    l.removeChild(d),
                    (d = m);
                }
            }
            if (r === 0) {
              e.removeChild(c), bu(t);
              return;
            }
            r--;
          } else
            l === "$" || l === "$?" || l === "$!"
              ? r++
              : (n = l.charCodeAt(0) - 48);
        else n = 0;
        l = c;
      } while (l);
      bu(t);
    }
    function Yf(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var l = t;
        switch (((t = t.nextSibling), l.nodeName)) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Yf(l), ze(l);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (l.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(l);
      }
    }
    function p1(e, t, l, n) {
      for (; e.nodeType === 1; ) {
        var r = l;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
        } else if (n) {
          if (!e[me])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (
                  ((c = e.getAttribute("rel")),
                  c === "stylesheet" && e.hasAttribute("data-precedence"))
                )
                  break;
                if (
                  c !== r.rel ||
                  e.getAttribute("href") !==
                    (r.href == null || r.href === "" ? null : r.href) ||
                  e.getAttribute("crossorigin") !==
                    (r.crossOrigin == null ? null : r.crossOrigin) ||
                  e.getAttribute("title") !== (r.title == null ? null : r.title)
                )
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (
                  ((c = e.getAttribute("src")),
                  (c !== (r.src == null ? null : r.src) ||
                    e.getAttribute("type") !==
                      (r.type == null ? null : r.type) ||
                    e.getAttribute("crossorigin") !==
                      (r.crossOrigin == null ? null : r.crossOrigin)) &&
                    c &&
                    e.hasAttribute("async") &&
                    !e.hasAttribute("itemprop"))
                )
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          var c = r.name == null ? null : "" + r.name;
          if (r.type === "hidden" && e.getAttribute("name") === c) return e;
        } else return e;
        if (((e = _a(e.nextSibling)), e === null)) break;
      }
      return null;
    }
    function S1(e, t, l) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if (
          ((e.nodeType !== 1 ||
            e.nodeName !== "INPUT" ||
            e.type !== "hidden") &&
            !l) ||
          ((e = _a(e.nextSibling)), e === null)
        )
          return null;
      return e;
    }
    function Uf(e) {
      return (
        e.data === "$!" ||
        (e.data === "$?" && e.ownerDocument.readyState === "complete")
      );
    }
    function b1(e, t) {
      var l = e.ownerDocument;
      if (e.data !== "$?" || l.readyState === "complete") t();
      else {
        var n = function () {
          t(), l.removeEventListener("DOMContentLoaded", n);
        };
        l.addEventListener("DOMContentLoaded", n), (e._reactRetry = n);
      }
    }
    function _a(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (
            ((t = e.data),
            t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          )
            break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    var Cf = null;
    function fy(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var l = e.data;
          if (l === "$" || l === "$!" || l === "$?") {
            if (t === 0) return e;
            t--;
          } else l === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function oy(e, t, l) {
      switch (((t = Kr(l)), e)) {
        case "html":
          if (((e = t.documentElement), !e)) throw Error(s(452));
          return e;
        case "head":
          if (((e = t.head), !e)) throw Error(s(453));
          return e;
        case "body":
          if (((e = t.body), !e)) throw Error(s(454));
          return e;
        default:
          throw Error(s(451));
      }
    }
    function du(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      ze(e);
    }
    var da = new Map(),
      dy = new Set();
    function Wr(e) {
      return typeof e.getRootNode == "function"
        ? e.getRootNode()
        : e.nodeType === 9
          ? e
          : e.ownerDocument;
    }
    var ul = F.d;
    F.d = { f: _1, r: M1, D: D1, C: E1, L: T1, m: w1, X: O1, S: R1, M: x1 };
    function _1() {
      var e = ul.f(),
        t = kr();
      return e || t;
    }
    function M1(e) {
      var t = ct(e);
      t !== null && t.tag === 5 && t.type === "form" ? zh(t) : ul.r(e);
    }
    var ri = typeof document > "u" ? null : document;
    function hy(e, t, l) {
      var n = ri;
      if (n && typeof t == "string" && t) {
        var r = ia(t);
        (r = 'link[rel="' + e + '"][href="' + r + '"]'),
          typeof l == "string" && (r += '[crossorigin="' + l + '"]'),
          dy.has(r) ||
            (dy.add(r),
            (e = { rel: e, crossOrigin: l, href: t }),
            n.querySelector(r) === null &&
              ((t = n.createElement("link")),
              At(t, "link", e),
              we(t),
              n.head.appendChild(t)));
      }
    }
    function D1(e) {
      ul.D(e), hy("dns-prefetch", e, null);
    }
    function E1(e, t) {
      ul.C(e, t), hy("preconnect", e, t);
    }
    function T1(e, t, l) {
      ul.L(e, t, l);
      var n = ri;
      if (n && e && t) {
        var r = 'link[rel="preload"][as="' + ia(t) + '"]';
        t === "image" && l && l.imageSrcSet
          ? ((r += '[imagesrcset="' + ia(l.imageSrcSet) + '"]'),
            typeof l.imageSizes == "string" &&
              (r += '[imagesizes="' + ia(l.imageSizes) + '"]'))
          : (r += '[href="' + ia(e) + '"]');
        var c = r;
        switch (t) {
          case "style":
            c = si(e);
            break;
          case "script":
            c = ci(e);
        }
        da.has(c) ||
          ((e = S(
            {
              rel: "preload",
              href: t === "image" && l && l.imageSrcSet ? void 0 : e,
              as: t,
            },
            l,
          )),
          da.set(c, e),
          n.querySelector(r) !== null ||
            (t === "style" && n.querySelector(hu(c))) ||
            (t === "script" && n.querySelector(mu(c))) ||
            ((t = n.createElement("link")),
            At(t, "link", e),
            we(t),
            n.head.appendChild(t)));
      }
    }
    function w1(e, t) {
      ul.m(e, t);
      var l = ri;
      if (l && e) {
        var n = t && typeof t.as == "string" ? t.as : "script",
          r =
            'link[rel="modulepreload"][as="' +
            ia(n) +
            '"][href="' +
            ia(e) +
            '"]',
          c = r;
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            c = ci(e);
        }
        if (
          !da.has(c) &&
          ((e = S({ rel: "modulepreload", href: e }, t)),
          da.set(c, e),
          l.querySelector(r) === null)
        ) {
          switch (n) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(mu(c))) return;
          }
          (n = l.createElement("link")),
            At(n, "link", e),
            we(n),
            l.head.appendChild(n);
        }
      }
    }
    function R1(e, t, l) {
      ul.S(e, t, l);
      var n = ri;
      if (n && e) {
        var r = Ve(n).hoistableStyles,
          c = si(e);
        t = t || "default";
        var d = r.get(c);
        if (!d) {
          var m = { loading: 0, preload: null };
          if ((d = n.querySelector(hu(c)))) m.loading = 5;
          else {
            (e = S({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
              (l = da.get(c)) && Hf(e, l);
            var p = (d = n.createElement("link"));
            we(p),
              At(p, "link", e),
              (p._p = new Promise(function (O, L) {
                (p.onload = O), (p.onerror = L);
              })),
              p.addEventListener("load", function () {
                m.loading |= 1;
              }),
              p.addEventListener("error", function () {
                m.loading |= 2;
              }),
              (m.loading |= 4),
              Jr(d, t, n);
          }
          (d = { type: "stylesheet", instance: d, count: 1, state: m }),
            r.set(c, d);
        }
      }
    }
    function O1(e, t) {
      ul.X(e, t);
      var l = ri;
      if (l && e) {
        var n = Ve(l).hoistableScripts,
          r = ci(e),
          c = n.get(r);
        c ||
          ((c = l.querySelector(mu(r))),
          c ||
            ((e = S({ src: e, async: !0 }, t)),
            (t = da.get(r)) && Lf(e, t),
            (c = l.createElement("script")),
            we(c),
            At(c, "link", e),
            l.head.appendChild(c)),
          (c = { type: "script", instance: c, count: 1, state: null }),
          n.set(r, c));
      }
    }
    function x1(e, t) {
      ul.M(e, t);
      var l = ri;
      if (l && e) {
        var n = Ve(l).hoistableScripts,
          r = ci(e),
          c = n.get(r);
        c ||
          ((c = l.querySelector(mu(r))),
          c ||
            ((e = S({ src: e, async: !0, type: "module" }, t)),
            (t = da.get(r)) && Lf(e, t),
            (c = l.createElement("script")),
            we(c),
            At(c, "link", e),
            l.head.appendChild(c)),
          (c = { type: "script", instance: c, count: 1, state: null }),
          n.set(r, c));
      }
    }
    function my(e, t, l, n) {
      var r = (r = Se.current) ? Wr(r) : null;
      if (!r) throw Error(s(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string"
            ? ((t = si(l.href)),
              (l = Ve(r).hoistableStyles),
              (n = l.get(t)),
              n ||
                ((n = { type: "style", instance: null, count: 0, state: null }),
                l.set(t, n)),
              n)
            : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (
            l.rel === "stylesheet" &&
            typeof l.href == "string" &&
            typeof l.precedence == "string"
          ) {
            e = si(l.href);
            var c = Ve(r).hoistableStyles,
              d = c.get(e);
            if (
              (d ||
                ((r = r.ownerDocument || r),
                (d = {
                  type: "stylesheet",
                  instance: null,
                  count: 0,
                  state: { loading: 0, preload: null },
                }),
                c.set(e, d),
                (c = r.querySelector(hu(e))) &&
                  !c._p &&
                  ((d.instance = c), (d.state.loading = 5)),
                da.has(e) ||
                  ((l = {
                    rel: "preload",
                    as: "style",
                    href: l.href,
                    crossOrigin: l.crossOrigin,
                    integrity: l.integrity,
                    media: l.media,
                    hrefLang: l.hrefLang,
                    referrerPolicy: l.referrerPolicy,
                  }),
                  da.set(e, l),
                  c || A1(r, e, l, d.state))),
              t && n === null)
            )
              throw Error(s(528, ""));
            return d;
          }
          if (t && n !== null) throw Error(s(529, ""));
          return null;
        case "script":
          return (
            (t = l.async),
            (l = l.src),
            typeof l == "string" &&
            t &&
            typeof t != "function" &&
            typeof t != "symbol"
              ? ((t = ci(l)),
                (l = Ve(r).hoistableScripts),
                (n = l.get(t)),
                n ||
                  ((n = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  l.set(t, n)),
                n)
              : { type: "void", instance: null, count: 0, state: null }
          );
        default:
          throw Error(s(444, e));
      }
    }
    function si(e) {
      return 'href="' + ia(e) + '"';
    }
    function hu(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function yy(e) {
      return S({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function A1(e, t, l, n) {
      e.querySelector('link[rel="preload"][as="style"][' + t + "]")
        ? (n.loading = 1)
        : ((t = e.createElement("link")),
          (n.preload = t),
          t.addEventListener("load", function () {
            return (n.loading |= 1);
          }),
          t.addEventListener("error", function () {
            return (n.loading |= 2);
          }),
          At(t, "link", l),
          we(t),
          e.head.appendChild(t));
    }
    function ci(e) {
      return '[src="' + ia(e) + '"]';
    }
    function mu(e) {
      return "script[async]" + e;
    }
    function vy(e, t, l) {
      if ((t.count++, t.instance === null))
        switch (t.type) {
          case "style":
            var n = e.querySelector('style[data-href~="' + ia(l.href) + '"]');
            if (n) return (t.instance = n), we(n), n;
            var r = S({}, l, {
              "data-href": l.href,
              "data-precedence": l.precedence,
              href: null,
              precedence: null,
            });
            return (
              (n = (e.ownerDocument || e).createElement("style")),
              we(n),
              At(n, "style", r),
              Jr(n, l.precedence, e),
              (t.instance = n)
            );
          case "stylesheet":
            r = si(l.href);
            var c = e.querySelector(hu(r));
            if (c) return (t.state.loading |= 4), (t.instance = c), we(c), c;
            (n = yy(l)),
              (r = da.get(r)) && Hf(n, r),
              (c = (e.ownerDocument || e).createElement("link")),
              we(c);
            var d = c;
            return (
              (d._p = new Promise(function (m, p) {
                (d.onload = m), (d.onerror = p);
              })),
              At(c, "link", n),
              (t.state.loading |= 4),
              Jr(c, l.precedence, e),
              (t.instance = c)
            );
          case "script":
            return (
              (c = ci(l.src)),
              (r = e.querySelector(mu(c)))
                ? ((t.instance = r), we(r), r)
                : ((n = l),
                  (r = da.get(c)) && ((n = S({}, l)), Lf(n, r)),
                  (e = e.ownerDocument || e),
                  (r = e.createElement("script")),
                  we(r),
                  At(r, "link", n),
                  e.head.appendChild(r),
                  (t.instance = r))
            );
          case "void":
            return null;
          default:
            throw Error(s(443, t.type));
        }
      else
        t.type === "stylesheet" &&
          (t.state.loading & 4) === 0 &&
          ((n = t.instance), (t.state.loading |= 4), Jr(n, l.precedence, e));
      return t.instance;
    }
    function Jr(e, t, l) {
      for (
        var n = l.querySelectorAll(
            'link[rel="stylesheet"][data-precedence],style[data-precedence]',
          ),
          r = n.length ? n[n.length - 1] : null,
          c = r,
          d = 0;
        d < n.length;
        d++
      ) {
        var m = n[d];
        if (m.dataset.precedence === t) c = m;
        else if (c !== r) break;
      }
      c
        ? c.parentNode.insertBefore(e, c.nextSibling)
        : ((t = l.nodeType === 9 ? l.head : l),
          t.insertBefore(e, t.firstChild));
    }
    function Hf(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.title == null && (e.title = t.title);
    }
    function Lf(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
        e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
        e.integrity == null && (e.integrity = t.integrity);
    }
    var Fr = null;
    function gy(e, t, l) {
      if (Fr === null) {
        var n = new Map(),
          r = (Fr = new Map());
        r.set(l, n);
      } else (r = Fr), (n = r.get(l)), n || ((n = new Map()), r.set(l, n));
      if (n.has(e)) return n;
      for (
        n.set(e, null), l = l.getElementsByTagName(e), r = 0;
        r < l.length;
        r++
      ) {
        var c = l[r];
        if (
          !(
            c[me] ||
            c[X] ||
            (e === "link" && c.getAttribute("rel") === "stylesheet")
          ) &&
          c.namespaceURI !== "http://www.w3.org/2000/svg"
        ) {
          var d = c.getAttribute(t) || "";
          d = e + d;
          var m = n.get(d);
          m ? m.push(c) : n.set(d, [c]);
        }
      }
      return n;
    }
    function py(e, t, l) {
      (e = e.ownerDocument || e),
        e.head.insertBefore(
          l,
          t === "title" ? e.querySelector("head > title") : null,
        );
    }
    function N1(e, t, l) {
      if (l === 1 || t.itemProp != null) return !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (
            typeof t.precedence != "string" ||
            typeof t.href != "string" ||
            t.href === ""
          )
            break;
          return !0;
        case "link":
          if (
            typeof t.rel != "string" ||
            typeof t.href != "string" ||
            t.href === "" ||
            t.onLoad ||
            t.onError
          )
            break;
          switch (t.rel) {
            case "stylesheet":
              return (
                (e = t.disabled), typeof t.precedence == "string" && e == null
              );
            default:
              return !0;
          }
        case "script":
          if (
            t.async &&
            typeof t.async != "function" &&
            typeof t.async != "symbol" &&
            !t.onLoad &&
            !t.onError &&
            t.src &&
            typeof t.src == "string"
          )
            return !0;
      }
      return !1;
    }
    function Sy(e) {
      return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    var yu = null;
    function z1() {}
    function Y1(e, t, l) {
      if (yu === null) throw Error(s(475));
      var n = yu;
      if (
        t.type === "stylesheet" &&
        (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
        (t.state.loading & 4) === 0
      ) {
        if (t.instance === null) {
          var r = si(l.href),
            c = e.querySelector(hu(r));
          if (c) {
            (e = c._p),
              e !== null &&
                typeof e == "object" &&
                typeof e.then == "function" &&
                (n.count++, (n = $r.bind(n)), e.then(n, n)),
              (t.state.loading |= 4),
              (t.instance = c),
              we(c);
            return;
          }
          (c = e.ownerDocument || e),
            (l = yy(l)),
            (r = da.get(r)) && Hf(l, r),
            (c = c.createElement("link")),
            we(c);
          var d = c;
          (d._p = new Promise(function (m, p) {
            (d.onload = m), (d.onerror = p);
          })),
            At(c, "link", l),
            (t.instance = c);
        }
        n.stylesheets === null && (n.stylesheets = new Map()),
          n.stylesheets.set(t, e),
          (e = t.state.preload) &&
            (t.state.loading & 3) === 0 &&
            (n.count++,
            (t = $r.bind(n)),
            e.addEventListener("load", t),
            e.addEventListener("error", t));
      }
    }
    function U1() {
      if (yu === null) throw Error(s(475));
      var e = yu;
      return (
        e.stylesheets && e.count === 0 && jf(e, e.stylesheets),
        0 < e.count
          ? function (t) {
              var l = setTimeout(function () {
                if ((e.stylesheets && jf(e, e.stylesheets), e.unsuspend)) {
                  var n = e.unsuspend;
                  (e.unsuspend = null), n();
                }
              }, 6e4);
              return (
                (e.unsuspend = t),
                function () {
                  (e.unsuspend = null), clearTimeout(l);
                }
              );
            }
          : null
      );
    }
    function $r() {
      if ((this.count--, this.count === 0)) {
        if (this.stylesheets) jf(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          (this.unsuspend = null), e();
        }
      }
    }
    var Pr = null;
    function jf(e, t) {
      (e.stylesheets = null),
        e.unsuspend !== null &&
          (e.count++,
          (Pr = new Map()),
          t.forEach(C1, e),
          (Pr = null),
          $r.call(e));
    }
    function C1(e, t) {
      if (!(t.state.loading & 4)) {
        var l = Pr.get(e);
        if (l) var n = l.get(null);
        else {
          (l = new Map()), Pr.set(e, l);
          for (
            var r = e.querySelectorAll(
                "link[data-precedence],style[data-precedence]",
              ),
              c = 0;
            c < r.length;
            c++
          ) {
            var d = r[c];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") &&
              (l.set(d.dataset.precedence, d), (n = d));
          }
          n && l.set(null, n);
        }
        (r = t.instance),
          (d = r.getAttribute("data-precedence")),
          (c = l.get(d) || n),
          c === n && l.set(null, r),
          l.set(d, r),
          this.count++,
          (n = $r.bind(this)),
          r.addEventListener("load", n),
          r.addEventListener("error", n),
          c
            ? c.parentNode.insertBefore(r, c.nextSibling)
            : ((e = e.nodeType === 9 ? e.head : e),
              e.insertBefore(r, e.firstChild)),
          (t.state.loading |= 4);
      }
    }
    var vu = {
      $$typeof: P,
      Provider: null,
      Consumer: null,
      _currentValue: ue,
      _currentValue2: ue,
      _threadCount: 0,
    };
    function H1(e, t, l, n, r, c, d, m) {
      (this.tag = 1),
        (this.containerInfo = e),
        (this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null),
        (this.callbackPriority = 0),
        (this.expirationTimes = wi(-1)),
        (this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = wi(0)),
        (this.hiddenUpdates = wi(null)),
        (this.identifierPrefix = n),
        (this.onUncaughtError = r),
        (this.onCaughtError = c),
        (this.onRecoverableError = d),
        (this.pooledCache = null),
        (this.pooledCacheLanes = 0),
        (this.formState = m),
        (this.incompleteTransitions = new Map());
    }
    function by(e, t, l, n, r, c, d, m, p, O, L, k) {
      return (
        (e = new H1(e, t, l, d, m, p, O, k)),
        (t = 1),
        c === !0 && (t |= 24),
        (c = Qt(3, null, null, t)),
        (e.current = c),
        (c.stateNode = e),
        (t = pc()),
        t.refCount++,
        (e.pooledCache = t),
        t.refCount++,
        (c.memoizedState = { element: n, isDehydrated: l, cache: t }),
        Mc(c),
        e
      );
    }
    function _y(e) {
      return e ? ((e = Bn), e) : Bn;
    }
    function My(e, t, l, n, r, c) {
      (r = _y(r)),
        n.context === null ? (n.context = r) : (n.pendingContext = r),
        (n = wl(t)),
        (n.payload = { element: l }),
        (c = c === void 0 ? null : c),
        c !== null && (n.callback = c),
        (l = Rl(e, n, t)),
        l !== null && ($t(l, e, t), Qi(l, e, t));
    }
    function Dy(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var l = e.retryLane;
        e.retryLane = l !== 0 && l < t ? l : t;
      }
    }
    function kf(e, t) {
      Dy(e, t), (e = e.alternate) && Dy(e, t);
    }
    function Ey(e) {
      if (e.tag === 13) {
        var t = kn(e, 67108864);
        t !== null && $t(t, e, 67108864), kf(e, 67108864);
      }
    }
    var Ir = !0;
    function L1(e, t, l, n) {
      var r = H.T;
      H.T = null;
      var c = F.p;
      try {
        (F.p = 2), Bf(e, t, l, n);
      } finally {
        (F.p = c), (H.T = r);
      }
    }
    function j1(e, t, l, n) {
      var r = H.T;
      H.T = null;
      var c = F.p;
      try {
        (F.p = 8), Bf(e, t, l, n);
      } finally {
        (F.p = c), (H.T = r);
      }
    }
    function Bf(e, t, l, n) {
      if (Ir) {
        var r = Gf(n);
        if (r === null) Rf(e, t, n, es, l), wy(e, n);
        else if (B1(r, e, t, l, n)) n.stopPropagation();
        else if ((wy(e, n), t & 4 && -1 < k1.indexOf(e))) {
          for (; r !== null; ) {
            var c = ct(r);
            if (c !== null)
              switch (c.tag) {
                case 3:
                  if (
                    ((c = c.stateNode), c.current.memoizedState.isDehydrated)
                  ) {
                    var d = Aa(c.pendingLanes);
                    if (d !== 0) {
                      var m = c;
                      for (m.pendingLanes |= 2, m.entangledLanes |= 2; d; ) {
                        var p = 1 << (31 - jt(d));
                        (m.entanglements[1] |= p), (d &= ~p);
                      }
                      La(c), (Ze & 6) === 0 && ((Lr = ta() + 500), cu(0));
                    }
                  }
                  break;
                case 13:
                  (m = kn(c, 2)), m !== null && $t(m, c, 2), kr(), kf(c, 2);
              }
            if (((c = Gf(n)), c === null && Rf(e, t, n, es, l), c === r)) break;
            r = c;
          }
          r !== null && n.stopPropagation();
        } else Rf(e, t, n, null, l);
      }
    }
    function Gf(e) {
      return (e = Xs(e)), qf(e);
    }
    var es = null;
    function qf(e) {
      if (((es = null), (e = qe(e)), e !== null)) {
        var t = o(e);
        if (t === null) e = null;
        else {
          var l = t.tag;
          if (l === 13) {
            if (((e = h(t)), e !== null)) return e;
            e = null;
          } else if (l === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return (es = e), null;
    }
    function Ty(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (ks()) {
            case Qu:
              return 2;
            case Ku:
              return 8;
            case aa:
            case en:
              return 32;
            case Mi:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Vf = !1,
      Bl = null,
      Gl = null,
      ql = null,
      gu = new Map(),
      pu = new Map(),
      Vl = [],
      k1 =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
          " ",
        );
    function wy(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Bl = null;
          break;
        case "dragenter":
        case "dragleave":
          Gl = null;
          break;
        case "mouseover":
        case "mouseout":
          ql = null;
          break;
        case "pointerover":
        case "pointerout":
          gu.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          pu.delete(t.pointerId);
      }
    }
    function Su(e, t, l, n, r, c) {
      return e === null || e.nativeEvent !== c
        ? ((e = {
            blockedOn: t,
            domEventName: l,
            eventSystemFlags: n,
            nativeEvent: c,
            targetContainers: [r],
          }),
          t !== null && ((t = ct(t)), t !== null && Ey(t)),
          e)
        : ((e.eventSystemFlags |= n),
          (t = e.targetContainers),
          r !== null && t.indexOf(r) === -1 && t.push(r),
          e);
    }
    function B1(e, t, l, n, r) {
      switch (t) {
        case "focusin":
          return (Bl = Su(Bl, e, t, l, n, r)), !0;
        case "dragenter":
          return (Gl = Su(Gl, e, t, l, n, r)), !0;
        case "mouseover":
          return (ql = Su(ql, e, t, l, n, r)), !0;
        case "pointerover":
          var c = r.pointerId;
          return gu.set(c, Su(gu.get(c) || null, e, t, l, n, r)), !0;
        case "gotpointercapture":
          return (
            (c = r.pointerId),
            pu.set(c, Su(pu.get(c) || null, e, t, l, n, r)),
            !0
          );
      }
      return !1;
    }
    function Ry(e) {
      var t = qe(e.target);
      if (t !== null) {
        var l = o(t);
        if (l !== null) {
          if (((t = l.tag), t === 13)) {
            if (((t = h(l)), t !== null)) {
              (e.blockedOn = t),
                Y(e.priority, function () {
                  if (l.tag === 13) {
                    var n = Ft();
                    n = Ri(n);
                    var r = kn(l, n);
                    r !== null && $t(r, l, n), kf(l, n);
                  }
                });
              return;
            }
          } else if (
            t === 3 &&
            l.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ts(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var l = Gf(e.nativeEvent);
        if (l === null) {
          l = e.nativeEvent;
          var n = new l.constructor(l.type, l);
          (Zs = n), l.target.dispatchEvent(n), (Zs = null);
        } else return (t = ct(l)), t !== null && Ey(t), (e.blockedOn = l), !1;
        t.shift();
      }
      return !0;
    }
    function Oy(e, t, l) {
      ts(e) && l.delete(t);
    }
    function G1() {
      (Vf = !1),
        Bl !== null && ts(Bl) && (Bl = null),
        Gl !== null && ts(Gl) && (Gl = null),
        ql !== null && ts(ql) && (ql = null),
        gu.forEach(Oy),
        pu.forEach(Oy);
    }
    function as(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        Vf ||
          ((Vf = !0),
          a.unstable_scheduleCallback(a.unstable_NormalPriority, G1)));
    }
    var ls = null;
    function xy(e) {
      ls !== e &&
        ((ls = e),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
          ls === e && (ls = null);
          for (var t = 0; t < e.length; t += 3) {
            var l = e[t],
              n = e[t + 1],
              r = e[t + 2];
            if (typeof n != "function") {
              if (qf(n || l) === null) continue;
              break;
            }
            var c = ct(l);
            c !== null &&
              (e.splice(t, 3),
              (t -= 3),
              Gc(
                c,
                { pending: !0, data: r, method: l.method, action: n },
                n,
                r,
              ));
          }
        }));
    }
    function bu(e) {
      function t(p) {
        return as(p, e);
      }
      Bl !== null && as(Bl, e),
        Gl !== null && as(Gl, e),
        ql !== null && as(ql, e),
        gu.forEach(t),
        pu.forEach(t);
      for (var l = 0; l < Vl.length; l++) {
        var n = Vl[l];
        n.blockedOn === e && (n.blockedOn = null);
      }
      for (; 0 < Vl.length && ((l = Vl[0]), l.blockedOn === null); )
        Ry(l), l.blockedOn === null && Vl.shift();
      if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
        for (n = 0; n < l.length; n += 3) {
          var r = l[n],
            c = l[n + 1],
            d = r[ae] || null;
          if (typeof c == "function") d || xy(l);
          else if (d) {
            var m = null;
            if (c && c.hasAttribute("formAction")) {
              if (((r = c), (d = c[ae] || null))) m = d.formAction;
              else if (qf(r) !== null) continue;
            } else m = d.action;
            typeof m == "function"
              ? (l[n + 1] = m)
              : (l.splice(n, 3), (n -= 3)),
              xy(l);
          }
        }
    }
    function Zf(e) {
      this._internalRoot = e;
    }
    (ns.prototype.render = Zf.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error(s(409));
        var l = t.current,
          n = Ft();
        My(l, n, e, t, null, null);
      }),
      (ns.prototype.unmount = Zf.prototype.unmount =
        function () {
          var e = this._internalRoot;
          if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            My(e.current, 2, null, e, null, null), kr(), (t[se] = null);
          }
        });
    function ns(e) {
      this._internalRoot = e;
    }
    ns.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = w();
        e = { blockedOn: null, target: e, priority: t };
        for (var l = 0; l < Vl.length && t !== 0 && t < Vl[l].priority; l++);
        Vl.splice(l, 0, e), l === 0 && Ry(e);
      }
    };
    var Ay = i.version;
    if (Ay !== "19.1.0") throw Error(s(527, Ay, "19.1.0"));
    F.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(s(188))
          : ((e = Object.keys(e).join(",")), Error(s(268, e)));
      return (
        (e = v(t)),
        (e = e !== null ? y(e) : null),
        (e = e === null ? null : e.stateNode),
        e
      );
    };
    var q1 = {
      bundleType: 0,
      version: "19.1.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: H,
      reconcilerVersion: "19.1.0",
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var is = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!is.isDisabled && is.supportsFiber)
        try {
          (Lt = is.inject(q1)), (Nt = is);
        } catch {}
    }
    return (
      (Mu.createRoot = function (e, t) {
        if (!f(e)) throw Error(s(299));
        var l = !1,
          n = "",
          r = Qh,
          c = Kh,
          d = Wh,
          m = null;
        return (
          t != null &&
            (t.unstable_strictMode === !0 && (l = !0),
            t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
            t.onUncaughtError !== void 0 && (r = t.onUncaughtError),
            t.onCaughtError !== void 0 && (c = t.onCaughtError),
            t.onRecoverableError !== void 0 && (d = t.onRecoverableError),
            t.unstable_transitionCallbacks !== void 0 &&
              (m = t.unstable_transitionCallbacks)),
          (t = by(e, 1, !1, null, null, l, n, r, c, d, m, null)),
          (e[se] = t.current),
          wf(e),
          new Zf(t)
        );
      }),
      (Mu.hydrateRoot = function (e, t, l) {
        if (!f(e)) throw Error(s(299));
        var n = !1,
          r = "",
          c = Qh,
          d = Kh,
          m = Wh,
          p = null,
          O = null;
        return (
          l != null &&
            (l.unstable_strictMode === !0 && (n = !0),
            l.identifierPrefix !== void 0 && (r = l.identifierPrefix),
            l.onUncaughtError !== void 0 && (c = l.onUncaughtError),
            l.onCaughtError !== void 0 && (d = l.onCaughtError),
            l.onRecoverableError !== void 0 && (m = l.onRecoverableError),
            l.unstable_transitionCallbacks !== void 0 &&
              (p = l.unstable_transitionCallbacks),
            l.formState !== void 0 && (O = l.formState)),
          (t = by(e, 1, !0, t, l ?? null, n, r, c, d, m, p, O)),
          (t.context = _y(null)),
          (l = t.current),
          (n = Ft()),
          (n = Ri(n)),
          (r = wl(n)),
          (r.callback = null),
          Rl(l, r, n),
          (l = n),
          (t.current.lanes = l),
          pl(t, l),
          La(t),
          (e[se] = t.current),
          wf(e),
          new ns(t)
        );
      }),
      (Mu.version = "19.1.0"),
      Mu
    );
  }
  var By;
  function I1() {
    if (By) return Kf.exports;
    By = 1;
    function a() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
        } catch (i) {
          console.error(i);
        }
    }
    return a(), (Kf.exports = P1()), Kf.exports;
  }
  var ep = I1();
  const tp = p0(ep);
  var Du = {},
    Gy;
  function ap() {
    if (Gy) return Du;
    (Gy = 1),
      Object.defineProperty(Du, "__esModule", { value: !0 }),
      (Du.parse = h),
      (Du.serialize = y);
    const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
      i = /^[\u0021-\u003A\u003C-\u007E]*$/,
      u =
        /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
      s = /^[\u0020-\u003A\u003D-\u007E]*$/,
      f = Object.prototype.toString,
      o = (() => {
        const T = function () {};
        return (T.prototype = Object.create(null)), T;
      })();
    function h(T, U) {
      const C = new o(),
        Q = T.length;
      if (Q < 2) return C;
      const G = (U == null ? void 0 : U.decode) || S;
      let q = 0;
      do {
        const J = T.indexOf("=", q);
        if (J === -1) break;
        const P = T.indexOf(";", q),
          ye = P === -1 ? Q : P;
        if (J > ye) {
          q = T.lastIndexOf(";", J - 1) + 1;
          continue;
        }
        const E = g(T, q, J),
          he = v(T, J, E),
          be = T.slice(E, he);
        if (C[be] === void 0) {
          let de = g(T, J + 1, ye),
            De = v(T, ye, de);
          const Qe = G(T.slice(de, De));
          C[be] = Qe;
        }
        q = ye + 1;
      } while (q < Q);
      return C;
    }
    function g(T, U, C) {
      do {
        const Q = T.charCodeAt(U);
        if (Q !== 32 && Q !== 9) return U;
      } while (++U < C);
      return C;
    }
    function v(T, U, C) {
      for (; U > C; ) {
        const Q = T.charCodeAt(--U);
        if (Q !== 32 && Q !== 9) return U + 1;
      }
      return C;
    }
    function y(T, U, C) {
      const Q = (C == null ? void 0 : C.encode) || encodeURIComponent;
      if (!a.test(T)) throw new TypeError(`argument name is invalid: ${T}`);
      const G = Q(U);
      if (!i.test(G)) throw new TypeError(`argument val is invalid: ${U}`);
      let q = T + "=" + G;
      if (!C) return q;
      if (C.maxAge !== void 0) {
        if (!Number.isInteger(C.maxAge))
          throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);
        q += "; Max-Age=" + C.maxAge;
      }
      if (C.domain) {
        if (!u.test(C.domain))
          throw new TypeError(`option domain is invalid: ${C.domain}`);
        q += "; Domain=" + C.domain;
      }
      if (C.path) {
        if (!s.test(C.path))
          throw new TypeError(`option path is invalid: ${C.path}`);
        q += "; Path=" + C.path;
      }
      if (C.expires) {
        if (!A(C.expires) || !Number.isFinite(C.expires.valueOf()))
          throw new TypeError(`option expires is invalid: ${C.expires}`);
        q += "; Expires=" + C.expires.toUTCString();
      }
      if (
        (C.httpOnly && (q += "; HttpOnly"),
        C.secure && (q += "; Secure"),
        C.partitioned && (q += "; Partitioned"),
        C.priority)
      )
        switch (
          typeof C.priority == "string" ? C.priority.toLowerCase() : void 0
        ) {
          case "low":
            q += "; Priority=Low";
            break;
          case "medium":
            q += "; Priority=Medium";
            break;
          case "high":
            q += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${C.priority}`);
        }
      if (C.sameSite)
        switch (
          typeof C.sameSite == "string" ? C.sameSite.toLowerCase() : C.sameSite
        ) {
          case !0:
          case "strict":
            q += "; SameSite=Strict";
            break;
          case "lax":
            q += "; SameSite=Lax";
            break;
          case "none":
            q += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${C.sameSite}`);
        }
      return q;
    }
    function S(T) {
      if (T.indexOf("%") === -1) return T;
      try {
        return decodeURIComponent(T);
      } catch {
        return T;
      }
    }
    function A(T) {
      return f.call(T) === "[object Date]";
    }
    return Du;
  }
  ap();
  /**
   * react-router v7.5.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */ var b0 = (a) => {
      throw TypeError(a);
    },
    lp = (a, i, u) => i.has(a) || b0("Cannot " + u),
    $f = (a, i, u) => (
      lp(a, i, "read from private field"), u ? u.call(a) : i.get(a)
    ),
    np = (a, i, u) =>
      i.has(a)
        ? b0("Cannot add the same private member more than once")
        : i instanceof WeakSet
          ? i.add(a)
          : i.set(a, u),
    qy = "popstate";
  function ip(a = {}) {
    function i(s, f) {
      let { pathname: o, search: h, hash: g } = s.location;
      return zu(
        "",
        { pathname: o, search: h, hash: g },
        (f.state && f.state.usr) || null,
        (f.state && f.state.key) || "default",
      );
    }
    function u(s, f) {
      return typeof f == "string" ? f : Fl(f);
    }
    return rp(i, u, null, a);
  }
  function Ne(a, i) {
    if (a === !1 || a === null || typeof a > "u") throw new Error(i);
  }
  function St(a, i) {
    if (!a) {
      typeof console < "u" && console.warn(i);
      try {
        throw new Error(i);
      } catch {}
    }
  }
  function up() {
    return Math.random().toString(36).substring(2, 10);
  }
  function Vy(a, i) {
    return { usr: a.state, key: a.key, idx: i };
  }
  function zu(a, i, u = null, s) {
    return {
      pathname: typeof a == "string" ? a : a.pathname,
      search: "",
      hash: "",
      ...(typeof i == "string" ? $l(i) : i),
      state: u,
      key: (i && i.key) || s || up(),
    };
  }
  function Fl({ pathname: a = "/", search: i = "", hash: u = "" }) {
    return (
      i && i !== "?" && (a += i.charAt(0) === "?" ? i : "?" + i),
      u && u !== "#" && (a += u.charAt(0) === "#" ? u : "#" + u),
      a
    );
  }
  function $l(a) {
    let i = {};
    if (a) {
      let u = a.indexOf("#");
      u >= 0 && ((i.hash = a.substring(u)), (a = a.substring(0, u)));
      let s = a.indexOf("?");
      s >= 0 && ((i.search = a.substring(s)), (a = a.substring(0, s))),
        a && (i.pathname = a);
    }
    return i;
  }
  function rp(a, i, u, s = {}) {
    let { window: f = document.defaultView, v5Compat: o = !1 } = s,
      h = f.history,
      g = "POP",
      v = null,
      y = S();
    y == null && ((y = 0), h.replaceState({ ...h.state, idx: y }, ""));
    function S() {
      return (h.state || { idx: null }).idx;
    }
    function A() {
      g = "POP";
      let G = S(),
        q = G == null ? null : G - y;
      (y = G), v && v({ action: g, location: Q.location, delta: q });
    }
    function T(G, q) {
      g = "PUSH";
      let J = zu(Q.location, G, q);
      y = S() + 1;
      let P = Vy(J, y),
        ye = Q.createHref(J);
      try {
        h.pushState(P, "", ye);
      } catch (E) {
        if (E instanceof DOMException && E.name === "DataCloneError") throw E;
        f.location.assign(ye);
      }
      o && v && v({ action: g, location: Q.location, delta: 1 });
    }
    function U(G, q) {
      g = "REPLACE";
      let J = zu(Q.location, G, q);
      y = S();
      let P = Vy(J, y),
        ye = Q.createHref(J);
      h.replaceState(P, "", ye),
        o && v && v({ action: g, location: Q.location, delta: 0 });
    }
    function C(G) {
      let q =
          f.location.origin !== "null" ? f.location.origin : f.location.href,
        J = typeof G == "string" ? G : Fl(G);
      return (
        (J = J.replace(/ $/, "%20")),
        Ne(
          q,
          `No window.location.(origin|href) available to create URL for href: ${J}`,
        ),
        new URL(J, q)
      );
    }
    let Q = {
      get action() {
        return g;
      },
      get location() {
        return a(f, h);
      },
      listen(G) {
        if (v) throw new Error("A history only accepts one active listener");
        return (
          f.addEventListener(qy, A),
          (v = G),
          () => {
            f.removeEventListener(qy, A), (v = null);
          }
        );
      },
      createHref(G) {
        return i(f, G);
      },
      createURL: C,
      encodeLocation(G) {
        let q = C(G);
        return { pathname: q.pathname, search: q.search, hash: q.hash };
      },
      push: T,
      replace: U,
      go(G) {
        return h.go(G);
      },
    };
    return Q;
  }
  var xu,
    Zy = class {
      constructor(a) {
        if ((np(this, xu, new Map()), a)) for (let [i, u] of a) this.set(i, u);
      }
      get(a) {
        if ($f(this, xu).has(a)) return $f(this, xu).get(a);
        if (a.defaultValue !== void 0) return a.defaultValue;
        throw new Error("No value found for context");
      }
      set(a, i) {
        $f(this, xu).set(a, i);
      }
    };
  xu = new WeakMap();
  var sp = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children",
  ]);
  function cp(a) {
    return sp.has(a);
  }
  var fp = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "unstable_middleware",
    "children",
  ]);
  function op(a) {
    return fp.has(a);
  }
  function dp(a) {
    return a.index === !0;
  }
  function gs(a, i, u = [], s = {}) {
    return a.map((f, o) => {
      let h = [...u, String(o)],
        g = typeof f.id == "string" ? f.id : h.join("-");
      if (
        (Ne(
          f.index !== !0 || !f.children,
          "Cannot specify children on an index route",
        ),
        Ne(
          !s[g],
          `Found a route id collision on id "${g}".  Route id's must be globally unique within Data Router usages`,
        ),
        dp(f))
      ) {
        let v = { ...f, ...i(f), id: g };
        return (s[g] = v), v;
      } else {
        let v = { ...f, ...i(f), id: g, children: void 0 };
        return (
          (s[g] = v), f.children && (v.children = gs(f.children, i, h, s)), v
        );
      }
    });
  }
  function Ql(a, i, u = "/") {
    return fs(a, i, u, !1);
  }
  function fs(a, i, u, s) {
    let f = typeof i == "string" ? $l(i) : i,
      o = ya(f.pathname || "/", u);
    if (o == null) return null;
    let h = _0(a);
    mp(h);
    let g = null;
    for (let v = 0; g == null && v < h.length; ++v) {
      let y = Tp(o);
      g = Dp(h[v], y, s);
    }
    return g;
  }
  function hp(a, i) {
    let { route: u, pathname: s, params: f } = a;
    return {
      id: u.id,
      pathname: s,
      params: f,
      data: i[u.id],
      handle: u.handle,
    };
  }
  function _0(a, i = [], u = [], s = "") {
    let f = (o, h, g) => {
      let v = {
        relativePath: g === void 0 ? o.path || "" : g,
        caseSensitive: o.caseSensitive === !0,
        childrenIndex: h,
        route: o,
      };
      v.relativePath.startsWith("/") &&
        (Ne(
          v.relativePath.startsWith(s),
          `Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
        ),
        (v.relativePath = v.relativePath.slice(s.length)));
      let y = ka([s, v.relativePath]),
        S = u.concat(v);
      o.children &&
        o.children.length > 0 &&
        (Ne(
          o.index !== !0,
          `Index routes must not have child routes. Please remove all child routes from route path "${y}".`,
        ),
        _0(o.children, i, S, y)),
        !(o.path == null && !o.index) &&
          i.push({ path: y, score: _p(y, o.index), routesMeta: S });
    };
    return (
      a.forEach((o, h) => {
        var g;
        if (o.path === "" || !((g = o.path) != null && g.includes("?")))
          f(o, h);
        else for (let v of M0(o.path)) f(o, h, v);
      }),
      i
    );
  }
  function M0(a) {
    let i = a.split("/");
    if (i.length === 0) return [];
    let [u, ...s] = i,
      f = u.endsWith("?"),
      o = u.replace(/\?$/, "");
    if (s.length === 0) return f ? [o, ""] : [o];
    let h = M0(s.join("/")),
      g = [];
    return (
      g.push(...h.map((v) => (v === "" ? o : [o, v].join("/")))),
      f && g.push(...h),
      g.map((v) => (a.startsWith("/") && v === "" ? "/" : v))
    );
  }
  function mp(a) {
    a.sort((i, u) =>
      i.score !== u.score
        ? u.score - i.score
        : Mp(
            i.routesMeta.map((s) => s.childrenIndex),
            u.routesMeta.map((s) => s.childrenIndex),
          ),
    );
  }
  var yp = /^:[\w-]+$/,
    vp = 3,
    gp = 2,
    pp = 1,
    Sp = 10,
    bp = -2,
    Xy = (a) => a === "*";
  function _p(a, i) {
    let u = a.split("/"),
      s = u.length;
    return (
      u.some(Xy) && (s += bp),
      i && (s += gp),
      u
        .filter((f) => !Xy(f))
        .reduce((f, o) => f + (yp.test(o) ? vp : o === "" ? pp : Sp), s)
    );
  }
  function Mp(a, i) {
    return a.length === i.length && a.slice(0, -1).every((s, f) => s === i[f])
      ? a[a.length - 1] - i[i.length - 1]
      : 0;
  }
  function Dp(a, i, u = !1) {
    let { routesMeta: s } = a,
      f = {},
      o = "/",
      h = [];
    for (let g = 0; g < s.length; ++g) {
      let v = s[g],
        y = g === s.length - 1,
        S = o === "/" ? i : i.slice(o.length) || "/",
        A = ps(
          { path: v.relativePath, caseSensitive: v.caseSensitive, end: y },
          S,
        ),
        T = v.route;
      if (
        (!A &&
          y &&
          u &&
          !s[s.length - 1].route.index &&
          (A = ps(
            { path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
            S,
          )),
        !A)
      )
        return null;
      Object.assign(f, A.params),
        h.push({
          params: f,
          pathname: ka([o, A.pathname]),
          pathnameBase: Op(ka([o, A.pathnameBase])),
          route: T,
        }),
        A.pathnameBase !== "/" && (o = ka([o, A.pathnameBase]));
    }
    return h;
  }
  function ps(a, i) {
    typeof a == "string" && (a = { path: a, caseSensitive: !1, end: !0 });
    let [u, s] = Ep(a.path, a.caseSensitive, a.end),
      f = i.match(u);
    if (!f) return null;
    let o = f[0],
      h = o.replace(/(.)\/+$/, "$1"),
      g = f.slice(1);
    return {
      params: s.reduce((y, { paramName: S, isOptional: A }, T) => {
        if (S === "*") {
          let C = g[T] || "";
          h = o.slice(0, o.length - C.length).replace(/(.)\/+$/, "$1");
        }
        const U = g[T];
        return (
          A && !U ? (y[S] = void 0) : (y[S] = (U || "").replace(/%2F/g, "/")), y
        );
      }, {}),
      pathname: o,
      pathnameBase: h,
      pattern: a,
    };
  }
  function Ep(a, i = !1, u = !0) {
    St(
      a === "*" || !a.endsWith("*") || a.endsWith("/*"),
      `Route path "${a}" will be treated as if it were "${a.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/, "/*")}".`,
    );
    let s = [],
      f =
        "^" +
        a
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (h, g, v) => (
              s.push({ paramName: g, isOptional: v != null }),
              v ? "/?([^\\/]+)?" : "/([^\\/]+)"
            ),
          );
    return (
      a.endsWith("*")
        ? (s.push({ paramName: "*" }),
          (f += a === "*" || a === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : u
          ? (f += "\\/*$")
          : a !== "" && a !== "/" && (f += "(?:(?=\\/|$))"),
      [new RegExp(f, i ? void 0 : "i"), s]
    );
  }
  function Tp(a) {
    try {
      return a
        .split("/")
        .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
        .join("/");
    } catch (i) {
      return (
        St(
          !1,
          `The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`,
        ),
        a
      );
    }
  }
  function ya(a, i) {
    if (i === "/") return a;
    if (!a.toLowerCase().startsWith(i.toLowerCase())) return null;
    let u = i.endsWith("/") ? i.length - 1 : i.length,
      s = a.charAt(u);
    return s && s !== "/" ? null : a.slice(u) || "/";
  }
  function wp(a, i = "/") {
    let {
      pathname: u,
      search: s = "",
      hash: f = "",
    } = typeof a == "string" ? $l(a) : a;
    return {
      pathname: u ? (u.startsWith("/") ? u : Rp(u, i)) : i,
      search: xp(s),
      hash: Ap(f),
    };
  }
  function Rp(a, i) {
    let u = i.replace(/\/+$/, "").split("/");
    return (
      a.split("/").forEach((f) => {
        f === ".." ? u.length > 1 && u.pop() : f !== "." && u.push(f);
      }),
      u.length > 1 ? u.join("/") : "/"
    );
  }
  function Pf(a, i, u, s) {
    return `Cannot include a '${a}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${u}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function D0(a) {
    return a.filter(
      (i, u) => u === 0 || (i.route.path && i.route.path.length > 0),
    );
  }
  function So(a) {
    let i = D0(a);
    return i.map((u, s) => (s === i.length - 1 ? u.pathname : u.pathnameBase));
  }
  function bo(a, i, u, s = !1) {
    let f;
    typeof a == "string"
      ? (f = $l(a))
      : ((f = { ...a }),
        Ne(
          !f.pathname || !f.pathname.includes("?"),
          Pf("?", "pathname", "search", f),
        ),
        Ne(
          !f.pathname || !f.pathname.includes("#"),
          Pf("#", "pathname", "hash", f),
        ),
        Ne(!f.search || !f.search.includes("#"), Pf("#", "search", "hash", f)));
    let o = a === "" || f.pathname === "",
      h = o ? "/" : f.pathname,
      g;
    if (h == null) g = u;
    else {
      let A = i.length - 1;
      if (!s && h.startsWith("..")) {
        let T = h.split("/");
        for (; T[0] === ".."; ) T.shift(), (A -= 1);
        f.pathname = T.join("/");
      }
      g = A >= 0 ? i[A] : "/";
    }
    let v = wp(f, g),
      y = h && h !== "/" && h.endsWith("/"),
      S = (o || h === ".") && u.endsWith("/");
    return !v.pathname.endsWith("/") && (y || S) && (v.pathname += "/"), v;
  }
  var ka = (a) => a.join("/").replace(/\/\/+/g, "/"),
    Op = (a) => a.replace(/\/+$/, "").replace(/^\/*/, "/"),
    xp = (a) => (!a || a === "?" ? "" : a.startsWith("?") ? a : "?" + a),
    Ap = (a) => (!a || a === "#" ? "" : a.startsWith("#") ? a : "#" + a),
    Ss = class {
      constructor(a, i, u, s = !1) {
        (this.status = a),
          (this.statusText = i || ""),
          (this.internal = s),
          u instanceof Error
            ? ((this.data = u.toString()), (this.error = u))
            : (this.data = u);
      }
    };
  function Yu(a) {
    return (
      a != null &&
      typeof a.status == "number" &&
      typeof a.statusText == "string" &&
      typeof a.internal == "boolean" &&
      "data" in a
    );
  }
  var E0 = ["POST", "PUT", "PATCH", "DELETE"],
    Np = new Set(E0),
    zp = ["GET", ...E0],
    Yp = new Set(zp),
    Up = new Set([301, 302, 303, 307, 308]),
    Cp = new Set([307, 308]),
    If = {
      state: "idle",
      location: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
    },
    Hp = {
      state: "idle",
      data: void 0,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
    },
    Eu = {
      state: "unblocked",
      proceed: void 0,
      reset: void 0,
      location: void 0,
    },
    _o = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Lp = (a) => ({ hasErrorBoundary: !!a.hasErrorBoundary }),
    T0 = "remix-router-transitions",
    w0 = Symbol("ResetLoaderData");
  function jp(a) {
    const i = a.window ? a.window : typeof window < "u" ? window : void 0,
      u =
        typeof i < "u" &&
        typeof i.document < "u" &&
        typeof i.document.createElement < "u";
    Ne(
      a.routes.length > 0,
      "You must provide a non-empty routes array to createRouter",
    );
    let s = a.mapRouteProperties || Lp,
      f = {},
      o = gs(a.routes, s, void 0, f),
      h,
      g = a.basename || "/",
      v = a.dataStrategy || Zp,
      y = { unstable_middleware: !1, ...a.future },
      S = null,
      A = new Set(),
      T = null,
      U = null,
      C = null,
      Q = a.hydrationData != null,
      G = Ql(o, a.history.location, g),
      q = !1,
      J = null;
    if (G == null && !a.patchRoutesOnNavigation) {
      let _ = ha(404, { pathname: a.history.location.pathname }),
        { matches: w, route: Y } = i0(o);
      (G = w), (J = { [Y.id]: _ });
    }
    G &&
      !a.hydrationData &&
      On(G, o, a.history.location.pathname).active &&
      (G = null);
    let P;
    if (G)
      if (G.some((_) => _.route.lazy)) P = !1;
      else if (!G.some((_) => _.route.loader)) P = !0;
      else {
        let _ = a.hydrationData ? a.hydrationData.loaderData : null,
          w = a.hydrationData ? a.hydrationData.errors : null;
        if (w) {
          let Y = G.findIndex((V) => w[V.route.id] !== void 0);
          P = G.slice(0, Y + 1).every((V) => !so(V.route, _, w));
        } else P = G.every((Y) => !so(Y.route, _, w));
      }
    else {
      (P = !1), (G = []);
      let _ = On(null, o, a.history.location.pathname);
      _.active && _.matches && ((q = !0), (G = _.matches));
    }
    let ye,
      E = {
        historyAction: a.history.action,
        location: a.history.location,
        matches: G,
        initialized: P,
        navigation: If,
        restoreScrollPosition: a.hydrationData != null ? !1 : null,
        preventScrollReset: !1,
        revalidation: "idle",
        loaderData: (a.hydrationData && a.hydrationData.loaderData) || {},
        actionData: (a.hydrationData && a.hydrationData.actionData) || null,
        errors: (a.hydrationData && a.hydrationData.errors) || J,
        fetchers: new Map(),
        blockers: new Map(),
      },
      he = "POP",
      be = !1,
      de,
      De = !1,
      Qe = new Map(),
      ot = null,
      st = !1,
      Ct = !1,
      ea = new Set(),
      Ue = new Map(),
      H = 0,
      F = -1,
      ue = new Map(),
      Oe = new Set(),
      b = new Map(),
      B = new Map(),
      W = new Set(),
      K = new Map(),
      re,
      Ee = null;
    function Se() {
      if (
        ((S = a.history.listen(({ action: _, location: w, delta: Y }) => {
          if (re) {
            re(), (re = void 0);
            return;
          }
          St(
            K.size === 0 || Y != null,
            "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
          );
          let V = gl({
            currentLocation: E.location,
            nextLocation: w,
            historyAction: _,
          });
          if (V && Y != null) {
            let X = new Promise((ae) => {
              re = ae;
            });
            a.history.go(Y * -1),
              Za(V, {
                state: "blocked",
                location: w,
                proceed() {
                  Za(V, {
                    state: "proceeding",
                    proceed: void 0,
                    reset: void 0,
                    location: w,
                  }),
                    X.then(() => a.history.go(Y));
                },
                reset() {
                  let ae = new Map(E.blockers);
                  ae.set(V, Eu), it({ blockers: ae });
                },
              });
            return;
          }
          return pa(_, w);
        })),
        u)
      ) {
        aS(i, Qe);
        let _ = () => lS(i, Qe);
        i.addEventListener("pagehide", _),
          (ot = () => i.removeEventListener("pagehide", _));
      }
      return (
        E.initialized || pa("POP", E.location, { initialHydration: !0 }), ye
      );
    }
    function Ht() {
      S && S(),
        ot && ot(),
        A.clear(),
        de && de.abort(),
        E.fetchers.forEach((_, w) => la(w)),
        E.blockers.forEach((_, w) => Aa(w));
    }
    function Ie(_) {
      return A.add(_), () => A.delete(_);
    }
    function it(_, w = {}) {
      E = { ...E, ..._ };
      let Y = [],
        V = [];
      E.fetchers.forEach((X, ae) => {
        X.state === "idle" && (W.has(ae) ? Y.push(ae) : V.push(ae));
      }),
        W.forEach((X) => {
          !E.fetchers.has(X) && !Ue.has(X) && Y.push(X);
        }),
        [...A].forEach((X) =>
          X(E, {
            deletedFetchers: Y,
            viewTransitionOpts: w.viewTransitionOpts,
            flushSync: w.flushSync === !0,
          }),
        ),
        Y.forEach((X) => la(X)),
        V.forEach((X) => E.fetchers.delete(X));
    }
    function Ra(_, w, { flushSync: Y } = {}) {
      var I, ne;
      let V =
          E.actionData != null &&
          E.navigation.formMethod != null &&
          Ma(E.navigation.formMethod) &&
          E.navigation.state === "loading" &&
          ((I = _.state) == null ? void 0 : I._isRedirect) !== !0,
        X;
      w.actionData
        ? Object.keys(w.actionData).length > 0
          ? (X = w.actionData)
          : (X = null)
        : V
          ? (X = E.actionData)
          : (X = null);
      let ae = w.loaderData
          ? l0(E.loaderData, w.loaderData, w.matches || [], w.errors)
          : E.loaderData,
        se = E.blockers;
      se.size > 0 &&
        ((se = new Map(se)), se.forEach((me, ze) => se.set(ze, Eu)));
      let le =
        be === !0 ||
        (E.navigation.formMethod != null &&
          Ma(E.navigation.formMethod) &&
          ((ne = _.state) == null ? void 0 : ne._isRedirect) !== !0);
      h && ((o = h), (h = void 0)),
        st ||
          he === "POP" ||
          (he === "PUSH"
            ? a.history.push(_, _.state)
            : he === "REPLACE" && a.history.replace(_, _.state));
      let ce;
      if (he === "POP") {
        let me = Qe.get(E.location.pathname);
        me && me.has(_.pathname)
          ? (ce = { currentLocation: E.location, nextLocation: _ })
          : Qe.has(_.pathname) &&
            (ce = { currentLocation: _, nextLocation: E.location });
      } else if (De) {
        let me = Qe.get(E.location.pathname);
        me
          ? me.add(_.pathname)
          : ((me = new Set([_.pathname])), Qe.set(E.location.pathname, me)),
          (ce = { currentLocation: E.location, nextLocation: _ });
      }
      it(
        {
          ...w,
          actionData: X,
          loaderData: ae,
          historyAction: he,
          location: _,
          initialized: !0,
          navigation: If,
          revalidation: "idle",
          restoreScrollPosition: pl(_, w.matches || E.matches),
          preventScrollReset: le,
          blockers: se,
        },
        { viewTransitionOpts: ce, flushSync: Y === !0 },
      ),
        (he = "POP"),
        (be = !1),
        (De = !1),
        (st = !1),
        (Ct = !1),
        Ee == null || Ee.resolve(),
        (Ee = null);
    }
    async function Il(_, w) {
      if (typeof _ == "number") {
        a.history.go(_);
        return;
      }
      let Y = ro(
          E.location,
          E.matches,
          g,
          _,
          w == null ? void 0 : w.fromRouteId,
          w == null ? void 0 : w.relative,
        ),
        { path: V, submission: X, error: ae } = Qy(!1, Y, w),
        se = E.location,
        le = zu(E.location, V, w && w.state);
      le = { ...le, ...a.history.encodeLocation(le) };
      let ce = w && w.replace != null ? w.replace : void 0,
        I = "PUSH";
      ce === !0
        ? (I = "REPLACE")
        : ce === !1 ||
          (X != null &&
            Ma(X.formMethod) &&
            X.formAction === E.location.pathname + E.location.search &&
            (I = "REPLACE"));
      let ne =
          w && "preventScrollReset" in w ? w.preventScrollReset === !0 : void 0,
        me = (w && w.flushSync) === !0,
        ze = gl({ currentLocation: se, nextLocation: le, historyAction: I });
      if (ze) {
        Za(ze, {
          state: "blocked",
          location: le,
          proceed() {
            Za(ze, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: le,
            }),
              Il(_, w);
          },
          reset() {
            let qe = new Map(E.blockers);
            qe.set(ze, Eu), it({ blockers: qe });
          },
        });
        return;
      }
      await pa(I, le, {
        submission: X,
        pendingError: ae,
        preventScrollReset: ne,
        replace: w && w.replace,
        enableViewTransition: w && w.viewTransition,
        flushSync: me,
      });
    }
    function bi() {
      Ee || (Ee = nS()), Di(), it({ revalidation: "loading" });
      let _ = Ee.promise;
      return E.navigation.state === "submitting"
        ? _
        : E.navigation.state === "idle"
          ? (pa(E.historyAction, E.location, {
              startUninterruptedRevalidation: !0,
            }),
            _)
          : (pa(he || E.historyAction, E.navigation.location, {
              overrideNavigation: E.navigation,
              enableViewTransition: De === !0,
            }),
            _);
    }
    async function pa(_, w, Y) {
      de && de.abort(),
        (de = null),
        (he = _),
        (st = (Y && Y.startUninterruptedRevalidation) === !0),
        wi(E.location, E.matches),
        (be = (Y && Y.preventScrollReset) === !0),
        (De = (Y && Y.enableViewTransition) === !0);
      let V = h || o,
        X = Y && Y.overrideNavigation,
        ae =
          Y != null &&
          Y.initialHydration &&
          E.matches &&
          E.matches.length > 0 &&
          !q
            ? E.matches
            : Ql(V, w, g),
        se = (Y && Y.flushSync) === !0;
      if (
        ae &&
        E.initialized &&
        !Ct &&
        $p(E.location, w) &&
        !(Y && Y.submission && Ma(Y.submission.formMethod))
      ) {
        Ra(w, { matches: ae }, { flushSync: se });
        return;
      }
      let le = On(ae, V, w.pathname);
      if ((le.active && le.matches && (ae = le.matches), !ae)) {
        let { error: et, notFoundMatches: Ve, route: we } = Ei(w.pathname);
        Ra(
          w,
          { matches: Ve, loaderData: {}, errors: { [we.id]: et } },
          { flushSync: se },
        );
        return;
      }
      de = new AbortController();
      let ce = fi(a.history, w, de.signal, Y && Y.submission),
        I = new Zy(
          a.unstable_getContext ? await a.unstable_getContext() : void 0,
        ),
        ne;
      if (Y && Y.pendingError)
        ne = [_n(ae).route.id, { type: "error", error: Y.pendingError }];
      else if (Y && Y.submission && Ma(Y.submission.formMethod)) {
        let et = await _i(ce, w, Y.submission, ae, I, le.active, {
          replace: Y.replace,
          flushSync: se,
        });
        if (et.shortCircuited) return;
        if (et.pendingActionResult) {
          let [Ve, we] = et.pendingActionResult;
          if (Pt(we) && Yu(we.error) && we.error.status === 404) {
            (de = null),
              Ra(w, {
                matches: et.matches,
                loaderData: {},
                errors: { [Ve]: we.error },
              });
            return;
          }
        }
        (ae = et.matches || ae),
          (ne = et.pendingActionResult),
          (X = eo(w, Y.submission)),
          (se = !1),
          (le.active = !1),
          (ce = fi(a.history, ce.url, ce.signal));
      }
      let {
        shortCircuited: me,
        matches: ze,
        loaderData: qe,
        errors: ct,
      } = await js(
        ce,
        w,
        ae,
        I,
        le.active,
        X,
        Y && Y.submission,
        Y && Y.fetcherSubmission,
        Y && Y.replace,
        Y && Y.initialHydration === !0,
        se,
        ne,
      );
      me ||
        ((de = null),
        Ra(w, { matches: ze || ae, ...n0(ne), loaderData: qe, errors: ct }));
    }
    async function _i(_, w, Y, V, X, ae, se = {}) {
      Di();
      let le = eS(w, Y);
      if ((it({ navigation: le }, { flushSync: se.flushSync === !0 }), ae)) {
        let ne = await an(V, w.pathname, _.signal);
        if (ne.type === "aborted") return { shortCircuited: !0 };
        if (ne.type === "error") {
          let me = _n(ne.partialMatches).route.id;
          return {
            matches: ne.partialMatches,
            pendingActionResult: [me, { type: "error", error: ne.error }],
          };
        } else if (ne.matches) V = ne.matches;
        else {
          let { notFoundMatches: me, error: ze, route: qe } = Ei(w.pathname);
          return {
            matches: me,
            pendingActionResult: [qe.id, { type: "error", error: ze }],
          };
        }
      }
      let ce,
        I = Au(V, w);
      if (!I.route.action && !I.route.lazy)
        ce = {
          type: "error",
          error: ha(405, {
            method: _.method,
            pathname: w.pathname,
            routeId: I.route.id,
          }),
        };
      else {
        let ne = await en("action", _, [I], V, X, null);
        if (((ce = ne[I.route.id]), !ce)) {
          for (let me of V)
            if (ne[me.route.id]) {
              ce = ne[me.route.id];
              break;
            }
        }
        if (_.signal.aborted) return { shortCircuited: !0 };
      }
      if (Mn(ce)) {
        let ne;
        return (
          se && se.replace != null
            ? (ne = se.replace)
            : (ne =
                e0(ce.response.headers.get("Location"), new URL(_.url), g) ===
                E.location.pathname + E.location.search),
          await aa(_, ce, !0, { submission: Y, replace: ne }),
          { shortCircuited: !0 }
        );
      }
      if (Pt(ce)) {
        let ne = _n(V, I.route.id);
        return (
          (se && se.replace) !== !0 && (he = "PUSH"),
          { matches: V, pendingActionResult: [ne.route.id, ce] }
        );
      }
      return { matches: V, pendingActionResult: [I.route.id, ce] };
    }
    async function js(_, w, Y, V, X, ae, se, le, ce, I, ne, me) {
      let ze = ae || eo(w, se),
        qe = se || le || r0(ze),
        ct = !st && !I;
      if (X) {
        if (ct) {
          let tt = Xu(me);
          it(
            { navigation: ze, ...(tt !== void 0 ? { actionData: tt } : {}) },
            { flushSync: ne },
          );
        }
        let Be = await an(Y, w.pathname, _.signal);
        if (Be.type === "aborted") return { shortCircuited: !0 };
        if (Be.type === "error") {
          let tt = _n(Be.partialMatches).route.id;
          return {
            matches: Be.partialMatches,
            loaderData: {},
            errors: { [tt]: Be.error },
          };
        } else if (Be.matches) Y = Be.matches;
        else {
          let { error: tt, notFoundMatches: _l, route: Ml } = Ei(w.pathname);
          return { matches: _l, loaderData: {}, errors: { [Ml.id]: tt } };
        }
      }
      let et = h || o,
        [Ve, we] = Wy(
          a.history,
          E,
          Y,
          qe,
          w,
          I === !0,
          Ct,
          ea,
          W,
          b,
          Oe,
          et,
          g,
          me,
        );
      if (((F = ++H), Ve.length === 0 && we.length === 0)) {
        let Be = Ju();
        return (
          Ra(
            w,
            {
              matches: Y,
              loaderData: {},
              errors: me && Pt(me[1]) ? { [me[0]]: me[1].error } : null,
              ...n0(me),
              ...(Be ? { fetchers: new Map(E.fetchers) } : {}),
            },
            { flushSync: ne },
          ),
          { shortCircuited: !0 }
        );
      }
      if (ct) {
        let Be = {};
        if (!X) {
          Be.navigation = ze;
          let tt = Xu(me);
          tt !== void 0 && (Be.actionData = tt);
        }
        we.length > 0 && (Be.fetchers = ta(we)), it(Be, { flushSync: ne });
      }
      we.forEach((Be) => {
        xa(Be.key), Be.controller && Ue.set(Be.key, Be.controller);
      });
      let Xa = () => we.forEach((Be) => xa(Be.key));
      de && de.signal.addEventListener("abort", Xa);
      let { loaderResults: Sl, fetcherResults: wt } = await Mi(Y, Ve, we, _, V);
      if (_.signal.aborted) return { shortCircuited: !0 };
      de && de.signal.removeEventListener("abort", Xa),
        we.forEach((Be) => Ue.delete(Be.key));
      let Rt = us(Sl);
      if (Rt)
        return (
          await aa(_, Rt.result, !0, { replace: ce }), { shortCircuited: !0 }
        );
      if (((Rt = us(wt)), Rt))
        return (
          Oe.add(Rt.key),
          await aa(_, Rt.result, !0, { replace: ce }),
          { shortCircuited: !0 }
        );
      let { loaderData: Oi, errors: bl } = a0(E, Y, Sl, me, we, wt);
      I && E.errors && (bl = { ...E.errors, ...bl });
      let Na = Ju(),
        xn = tn(F),
        Qa = Na || xn || we.length > 0;
      return {
        matches: Y,
        loaderData: Oi,
        errors: bl,
        ...(Qa ? { fetchers: new Map(E.fetchers) } : {}),
      };
    }
    function Xu(_) {
      if (_ && !Pt(_[1])) return { [_[0]]: _[1].data };
      if (E.actionData)
        return Object.keys(E.actionData).length === 0 ? null : E.actionData;
    }
    function ta(_) {
      return (
        _.forEach((w) => {
          let Y = E.fetchers.get(w.key),
            V = Tu(void 0, Y ? Y.data : void 0);
          E.fetchers.set(w.key, V);
        }),
        new Map(E.fetchers)
      );
    }
    async function ks(_, w, Y, V) {
      xa(_);
      let X = (V && V.flushSync) === !0,
        ae = h || o,
        se = ro(
          E.location,
          E.matches,
          g,
          Y,
          w,
          V == null ? void 0 : V.relative,
        ),
        le = Ql(ae, se, g),
        ce = On(le, ae, se);
      if ((ce.active && ce.matches && (le = ce.matches), !le)) {
        Lt(_, w, ha(404, { pathname: se }), { flushSync: X });
        return;
      }
      let { path: I, submission: ne, error: me } = Qy(!0, se, V);
      if (me) {
        Lt(_, w, me, { flushSync: X });
        return;
      }
      let ze = Au(le, I),
        qe = new Zy(
          a.unstable_getContext ? await a.unstable_getContext() : void 0,
        ),
        ct = (V && V.preventScrollReset) === !0;
      if (ne && Ma(ne.formMethod)) {
        await Qu(_, w, I, ze, le, qe, ce.active, X, ct, ne);
        return;
      }
      b.set(_, { routeId: w, path: I }),
        await Ku(_, w, I, ze, le, qe, ce.active, X, ct, ne);
    }
    async function Qu(_, w, Y, V, X, ae, se, le, ce, I) {
      Di(), b.delete(_);
      function ne($e) {
        if (!$e.route.action && !$e.route.lazy) {
          let za = ha(405, { method: I.formMethod, pathname: Y, routeId: w });
          return Lt(_, w, za, { flushSync: le }), !0;
        }
        return !1;
      }
      if (!se && ne(V)) return;
      let me = E.fetchers.get(_);
      Oa(_, tS(I, me), { flushSync: le });
      let ze = new AbortController(),
        qe = fi(a.history, Y, ze.signal, I);
      if (se) {
        let $e = await an(X, Y, qe.signal, _);
        if ($e.type === "aborted") return;
        if ($e.type === "error") {
          Lt(_, w, $e.error, { flushSync: le });
          return;
        } else if ($e.matches) {
          if (((X = $e.matches), (V = Au(X, Y)), ne(V))) return;
        } else {
          Lt(_, w, ha(404, { pathname: Y }), { flushSync: le });
          return;
        }
      }
      Ue.set(_, ze);
      let ct = H,
        Ve = (await en("action", qe, [V], X, ae, _))[V.route.id];
      if (qe.signal.aborted) {
        Ue.get(_) === ze && Ue.delete(_);
        return;
      }
      if (W.has(_)) {
        if (Mn(Ve) || Pt(Ve)) {
          Oa(_, Xl(void 0));
          return;
        }
      } else {
        if (Mn(Ve))
          if ((Ue.delete(_), F > ct)) {
            Oa(_, Xl(void 0));
            return;
          } else
            return (
              Oe.add(_),
              Oa(_, Tu(I)),
              aa(qe, Ve, !1, { fetcherSubmission: I, preventScrollReset: ce })
            );
        if (Pt(Ve)) {
          Lt(_, w, Ve.error);
          return;
        }
      }
      let we = E.navigation.location || E.location,
        Xa = fi(a.history, we, ze.signal),
        Sl = h || o,
        wt =
          E.navigation.state !== "idle"
            ? Ql(Sl, E.navigation.location, g)
            : E.matches;
      Ne(wt, "Didn't find any matches after fetcher action");
      let Rt = ++H;
      ue.set(_, Rt);
      let Oi = Tu(I, Ve.data);
      E.fetchers.set(_, Oi);
      let [bl, Na] = Wy(a.history, E, wt, I, we, !1, Ct, ea, W, b, Oe, Sl, g, [
        V.route.id,
        Ve,
      ]);
      Na.filter(($e) => $e.key !== _).forEach(($e) => {
        let za = $e.key,
          An = E.fetchers.get(za),
          Bs = Tu(void 0, An ? An.data : void 0);
        E.fetchers.set(za, Bs),
          xa(za),
          $e.controller && Ue.set(za, $e.controller);
      }),
        it({ fetchers: new Map(E.fetchers) });
      let xn = () => Na.forEach(($e) => xa($e.key));
      ze.signal.addEventListener("abort", xn);
      let { loaderResults: Qa, fetcherResults: Be } = await Mi(
        wt,
        bl,
        Na,
        Xa,
        ae,
      );
      if (ze.signal.aborted) return;
      ze.signal.removeEventListener("abort", xn),
        ue.delete(_),
        Ue.delete(_),
        Na.forEach(($e) => Ue.delete($e.key));
      let tt = us(Qa);
      if (tt) return aa(Xa, tt.result, !1, { preventScrollReset: ce });
      if (((tt = us(Be)), tt))
        return (
          Oe.add(tt.key), aa(Xa, tt.result, !1, { preventScrollReset: ce })
        );
      let { loaderData: _l, errors: Ml } = a0(E, wt, Qa, void 0, Na, Be);
      if (E.fetchers.has(_)) {
        let $e = Xl(Ve.data);
        E.fetchers.set(_, $e);
      }
      tn(Rt),
        E.navigation.state === "loading" && Rt > F
          ? (Ne(he, "Expected pending action"),
            de && de.abort(),
            Ra(E.navigation.location, {
              matches: wt,
              loaderData: _l,
              errors: Ml,
              fetchers: new Map(E.fetchers),
            }))
          : (it({
              errors: Ml,
              loaderData: l0(E.loaderData, _l, wt, Ml),
              fetchers: new Map(E.fetchers),
            }),
            (Ct = !1));
    }
    async function Ku(_, w, Y, V, X, ae, se, le, ce, I) {
      let ne = E.fetchers.get(_);
      Oa(_, Tu(I, ne ? ne.data : void 0), { flushSync: le });
      let me = new AbortController(),
        ze = fi(a.history, Y, me.signal);
      if (se) {
        let Ve = await an(X, Y, ze.signal, _);
        if (Ve.type === "aborted") return;
        if (Ve.type === "error") {
          Lt(_, w, Ve.error, { flushSync: le });
          return;
        } else if (Ve.matches) (X = Ve.matches), (V = Au(X, Y));
        else {
          Lt(_, w, ha(404, { pathname: Y }), { flushSync: le });
          return;
        }
      }
      Ue.set(_, me);
      let qe = H,
        et = (await en("loader", ze, [V], X, ae, _))[V.route.id];
      if ((Ue.get(_) === me && Ue.delete(_), !ze.signal.aborted)) {
        if (W.has(_)) {
          Oa(_, Xl(void 0));
          return;
        }
        if (Mn(et))
          if (F > qe) {
            Oa(_, Xl(void 0));
            return;
          } else {
            Oe.add(_), await aa(ze, et, !1, { preventScrollReset: ce });
            return;
          }
        if (Pt(et)) {
          Lt(_, w, et.error);
          return;
        }
        Oa(_, Xl(et.data));
      }
    }
    async function aa(
      _,
      w,
      Y,
      {
        submission: V,
        fetcherSubmission: X,
        preventScrollReset: ae,
        replace: se,
      } = {},
    ) {
      w.response.headers.has("X-Remix-Revalidate") && (Ct = !0);
      let le = w.response.headers.get("Location");
      Ne(le, "Expected a Location header on the redirect Response"),
        (le = e0(le, new URL(_.url), g));
      let ce = zu(E.location, le, { _isRedirect: !0 });
      if (u) {
        let ct = !1;
        if (w.response.headers.has("X-Remix-Reload-Document")) ct = !0;
        else if (_o.test(le)) {
          const et = a.history.createURL(le);
          ct = et.origin !== i.location.origin || ya(et.pathname, g) == null;
        }
        if (ct) {
          se ? i.location.replace(le) : i.location.assign(le);
          return;
        }
      }
      de = null;
      let I =
          se === !0 || w.response.headers.has("X-Remix-Replace")
            ? "REPLACE"
            : "PUSH",
        { formMethod: ne, formAction: me, formEncType: ze } = E.navigation;
      !V && !X && ne && me && ze && (V = r0(E.navigation));
      let qe = V || X;
      if (Cp.has(w.response.status) && qe && Ma(qe.formMethod))
        await pa(I, ce, {
          submission: { ...qe, formAction: le },
          preventScrollReset: ae || be,
          enableViewTransition: Y ? De : void 0,
        });
      else {
        let ct = eo(ce, V);
        await pa(I, ce, {
          overrideNavigation: ct,
          fetcherSubmission: X,
          preventScrollReset: ae || be,
          enableViewTransition: Y ? De : void 0,
        });
      }
    }
    async function en(_, w, Y, V, X, ae) {
      let se,
        le = {};
      try {
        se = await Qp(v, _, w, Y, V, ae, f, s, X);
      } catch (ce) {
        return (
          Y.forEach((I) => {
            le[I.route.id] = { type: "error", error: ce };
          }),
          le
        );
      }
      for (let [ce, I] of Object.entries(se))
        if (Pp(I)) {
          let ne = I.result;
          le[ce] = { type: "redirect", response: Jp(ne, w, ce, V, g) };
        } else le[ce] = await Wp(I);
      return le;
    }
    async function Mi(_, w, Y, V, X) {
      let ae = en("loader", V, w, _, X, null),
        se = Promise.all(
          Y.map(async (I) => {
            if (I.matches && I.match && I.controller) {
              let me = (
                await en(
                  "loader",
                  fi(a.history, I.path, I.controller.signal),
                  [I.match],
                  I.matches,
                  X,
                  I.key,
                )
              )[I.match.route.id];
              return { [I.key]: me };
            } else
              return Promise.resolve({
                [I.key]: {
                  type: "error",
                  error: ha(404, { pathname: I.path }),
                },
              });
          }),
        ),
        le = await ae,
        ce = (await se).reduce((I, ne) => Object.assign(I, ne), {});
      return { loaderResults: le, fetcherResults: ce };
    }
    function Di() {
      (Ct = !0),
        b.forEach((_, w) => {
          Ue.has(w) && ea.add(w), xa(w);
        });
    }
    function Oa(_, w, Y = {}) {
      E.fetchers.set(_, w),
        it(
          { fetchers: new Map(E.fetchers) },
          { flushSync: (Y && Y.flushSync) === !0 },
        );
    }
    function Lt(_, w, Y, V = {}) {
      let X = _n(E.matches, w);
      la(_),
        it(
          { errors: { [X.route.id]: Y }, fetchers: new Map(E.fetchers) },
          { flushSync: (V && V.flushSync) === !0 },
        );
    }
    function Nt(_) {
      return (
        B.set(_, (B.get(_) || 0) + 1),
        W.has(_) && W.delete(_),
        E.fetchers.get(_) || Hp
      );
    }
    function la(_) {
      let w = E.fetchers.get(_);
      Ue.has(_) && !(w && w.state === "loading" && ue.has(_)) && xa(_),
        b.delete(_),
        ue.delete(_),
        Oe.delete(_),
        W.delete(_),
        ea.delete(_),
        E.fetchers.delete(_);
    }
    function jt(_) {
      let w = (B.get(_) || 0) - 1;
      w <= 0 ? (B.delete(_), W.add(_)) : B.set(_, w),
        it({ fetchers: new Map(E.fetchers) });
    }
    function xa(_) {
      let w = Ue.get(_);
      w && (w.abort(), Ue.delete(_));
    }
    function Wu(_) {
      for (let w of _) {
        let Y = Nt(w),
          V = Xl(Y.data);
        E.fetchers.set(w, V);
      }
    }
    function Ju() {
      let _ = [],
        w = !1;
      for (let Y of Oe) {
        let V = E.fetchers.get(Y);
        Ne(V, `Expected fetcher: ${Y}`),
          V.state === "loading" && (Oe.delete(Y), _.push(Y), (w = !0));
      }
      return Wu(_), w;
    }
    function tn(_) {
      let w = [];
      for (let [Y, V] of ue)
        if (V < _) {
          let X = E.fetchers.get(Y);
          Ne(X, `Expected fetcher: ${Y}`),
            X.state === "loading" && (xa(Y), ue.delete(Y), w.push(Y));
        }
      return Wu(w), w.length > 0;
    }
    function Rn(_, w) {
      let Y = E.blockers.get(_) || Eu;
      return K.get(_) !== w && K.set(_, w), Y;
    }
    function Aa(_) {
      E.blockers.delete(_), K.delete(_);
    }
    function Za(_, w) {
      let Y = E.blockers.get(_) || Eu;
      Ne(
        (Y.state === "unblocked" && w.state === "blocked") ||
          (Y.state === "blocked" && w.state === "blocked") ||
          (Y.state === "blocked" && w.state === "proceeding") ||
          (Y.state === "blocked" && w.state === "unblocked") ||
          (Y.state === "proceeding" && w.state === "unblocked"),
        `Invalid blocker state transition: ${Y.state} -> ${w.state}`,
      );
      let V = new Map(E.blockers);
      V.set(_, w), it({ blockers: V });
    }
    function gl({ currentLocation: _, nextLocation: w, historyAction: Y }) {
      if (K.size === 0) return;
      K.size > 1 && St(!1, "A router only supports one blocker at a time");
      let V = Array.from(K.entries()),
        [X, ae] = V[V.length - 1],
        se = E.blockers.get(X);
      if (
        !(se && se.state === "proceeding") &&
        ae({ currentLocation: _, nextLocation: w, historyAction: Y })
      )
        return X;
    }
    function Ei(_) {
      let w = ha(404, { pathname: _ }),
        Y = h || o,
        { matches: V, route: X } = i0(Y);
      return { notFoundMatches: V, route: X, error: w };
    }
    function Fu(_, w, Y) {
      if (((T = _), (C = w), (U = Y || null), !Q && E.navigation === If)) {
        Q = !0;
        let V = pl(E.location, E.matches);
        V != null && it({ restoreScrollPosition: V });
      }
      return () => {
        (T = null), (C = null), (U = null);
      };
    }
    function Ti(_, w) {
      return (
        (U &&
          U(
            _,
            w.map((V) => hp(V, E.loaderData)),
          )) ||
        _.key
      );
    }
    function wi(_, w) {
      if (T && C) {
        let Y = Ti(_, w);
        T[Y] = C();
      }
    }
    function pl(_, w) {
      if (T) {
        let Y = Ti(_, w),
          V = T[Y];
        if (typeof V == "number") return V;
      }
      return null;
    }
    function On(_, w, Y) {
      if (a.patchRoutesOnNavigation)
        if (_) {
          if (Object.keys(_[0].params).length > 0)
            return { active: !0, matches: fs(w, Y, g, !0) };
        } else return { active: !0, matches: fs(w, Y, g, !0) || [] };
      return { active: !1, matches: null };
    }
    async function an(_, w, Y, V) {
      if (!a.patchRoutesOnNavigation) return { type: "success", matches: _ };
      let X = _;
      for (;;) {
        let ae = h == null,
          se = h || o,
          le = f;
        try {
          await a.patchRoutesOnNavigation({
            signal: Y,
            path: w,
            matches: X,
            fetcherKey: V,
            patch: (ne, me) => {
              Y.aborted || Fy(ne, me, se, le, s);
            },
          });
        } catch (ne) {
          return { type: "error", error: ne, partialMatches: X };
        } finally {
          ae && !Y.aborted && (o = [...o]);
        }
        if (Y.aborted) return { type: "aborted" };
        let ce = Ql(se, w, g);
        if (ce) return { type: "success", matches: ce };
        let I = fs(se, w, g, !0);
        if (
          !I ||
          (X.length === I.length &&
            X.every((ne, me) => ne.route.id === I[me].route.id))
        )
          return { type: "success", matches: null };
        X = I;
      }
    }
    function $u(_) {
      (f = {}), (h = gs(_, s, void 0, f));
    }
    function Ri(_, w) {
      let Y = h == null;
      Fy(_, w, h || o, f, s), Y && ((o = [...o]), it({}));
    }
    return (
      (ye = {
        get basename() {
          return g;
        },
        get future() {
          return y;
        },
        get state() {
          return E;
        },
        get routes() {
          return o;
        },
        get window() {
          return i;
        },
        initialize: Se,
        subscribe: Ie,
        enableScrollRestoration: Fu,
        navigate: Il,
        fetch: ks,
        revalidate: bi,
        createHref: (_) => a.history.createHref(_),
        encodeLocation: (_) => a.history.encodeLocation(_),
        getFetcher: Nt,
        deleteFetcher: jt,
        dispose: Ht,
        getBlocker: Rn,
        deleteBlocker: Aa,
        patchRoutes: Ri,
        _internalFetchControllers: Ue,
        _internalSetRoutes: $u,
      }),
      ye
    );
  }
  function kp(a) {
    return (
      a != null &&
      (("formData" in a && a.formData != null) ||
        ("body" in a && a.body !== void 0))
    );
  }
  function ro(a, i, u, s, f, o) {
    let h, g;
    if (f) {
      h = [];
      for (let y of i)
        if ((h.push(y), y.route.id === f)) {
          g = y;
          break;
        }
    } else (h = i), (g = i[i.length - 1]);
    let v = bo(s || ".", So(h), ya(a.pathname, u) || a.pathname, o === "path");
    if (
      (s == null && ((v.search = a.search), (v.hash = a.hash)),
      (s == null || s === "" || s === ".") && g)
    ) {
      let y = Mo(v.search);
      if (g.route.index && !y)
        v.search = v.search ? v.search.replace(/^\?/, "?index&") : "?index";
      else if (!g.route.index && y) {
        let S = new URLSearchParams(v.search),
          A = S.getAll("index");
        S.delete("index"),
          A.filter((U) => U).forEach((U) => S.append("index", U));
        let T = S.toString();
        v.search = T ? `?${T}` : "";
      }
    }
    return (
      u !== "/" && (v.pathname = v.pathname === "/" ? u : ka([u, v.pathname])),
      Fl(v)
    );
  }
  function Qy(a, i, u) {
    if (!u || !kp(u)) return { path: i };
    if (u.formMethod && !Ip(u.formMethod))
      return { path: i, error: ha(405, { method: u.formMethod }) };
    let s = () => ({ path: i, error: ha(400, { type: "invalid-body" }) }),
      o = (u.formMethod || "get").toUpperCase(),
      h = N0(i);
    if (u.body !== void 0) {
      if (u.formEncType === "text/plain") {
        if (!Ma(o)) return s();
        let A =
          typeof u.body == "string"
            ? u.body
            : u.body instanceof FormData || u.body instanceof URLSearchParams
              ? Array.from(u.body.entries()).reduce(
                  (T, [U, C]) => `${T}${U}=${C}
`,
                  "",
                )
              : String(u.body);
        return {
          path: i,
          submission: {
            formMethod: o,
            formAction: h,
            formEncType: u.formEncType,
            formData: void 0,
            json: void 0,
            text: A,
          },
        };
      } else if (u.formEncType === "application/json") {
        if (!Ma(o)) return s();
        try {
          let A = typeof u.body == "string" ? JSON.parse(u.body) : u.body;
          return {
            path: i,
            submission: {
              formMethod: o,
              formAction: h,
              formEncType: u.formEncType,
              formData: void 0,
              json: A,
              text: void 0,
            },
          };
        } catch {
          return s();
        }
      }
    }
    Ne(
      typeof FormData == "function",
      "FormData is not available in this environment",
    );
    let g, v;
    if (u.formData) (g = co(u.formData)), (v = u.formData);
    else if (u.body instanceof FormData) (g = co(u.body)), (v = u.body);
    else if (u.body instanceof URLSearchParams) (g = u.body), (v = t0(g));
    else if (u.body == null) (g = new URLSearchParams()), (v = new FormData());
    else
      try {
        (g = new URLSearchParams(u.body)), (v = t0(g));
      } catch {
        return s();
      }
    let y = {
      formMethod: o,
      formAction: h,
      formEncType: (u && u.formEncType) || "application/x-www-form-urlencoded",
      formData: v,
      json: void 0,
      text: void 0,
    };
    if (Ma(y.formMethod)) return { path: i, submission: y };
    let S = $l(i);
    return (
      a && S.search && Mo(S.search) && g.append("index", ""),
      (S.search = `?${g}`),
      { path: Fl(S), submission: y }
    );
  }
  function Ky(a, i, u = !1) {
    let s = a.findIndex((f) => f.route.id === i);
    return s >= 0 ? a.slice(0, u ? s + 1 : s) : a;
  }
  function Wy(a, i, u, s, f, o, h, g, v, y, S, A, T, U) {
    let C = U ? (Pt(U[1]) ? U[1].error : U[1].data) : void 0,
      Q = a.createURL(i.location),
      G = a.createURL(f),
      q = u;
    o && i.errors
      ? (q = Ky(u, Object.keys(i.errors)[0], !0))
      : U && Pt(U[1]) && (q = Ky(u, U[0]));
    let J = U ? U[1].statusCode : void 0,
      P = J && J >= 400,
      ye = q.filter((he, be) => {
        let { route: de } = he;
        if (de.lazy) return !0;
        if (de.loader == null) return !1;
        if (o) return so(de, i.loaderData, i.errors);
        if (Bp(i.loaderData, i.matches[be], he)) return !0;
        let De = i.matches[be],
          Qe = he;
        return Jy(he, {
          currentUrl: Q,
          currentParams: De.params,
          nextUrl: G,
          nextParams: Qe.params,
          ...s,
          actionResult: C,
          actionStatus: J,
          defaultShouldRevalidate: P
            ? !1
            : h ||
              Q.pathname + Q.search === G.pathname + G.search ||
              Q.search !== G.search ||
              Gp(De, Qe),
        });
      }),
      E = [];
    return (
      y.forEach((he, be) => {
        if (o || !u.some((st) => st.route.id === he.routeId) || v.has(be))
          return;
        let de = Ql(A, he.path, T);
        if (!de) {
          E.push({
            key: be,
            routeId: he.routeId,
            path: he.path,
            matches: null,
            match: null,
            controller: null,
          });
          return;
        }
        let De = i.fetchers.get(be),
          Qe = Au(de, he.path),
          ot = !1;
        S.has(be)
          ? (ot = !1)
          : g.has(be)
            ? (g.delete(be), (ot = !0))
            : De && De.state !== "idle" && De.data === void 0
              ? (ot = h)
              : (ot = Jy(Qe, {
                  currentUrl: Q,
                  currentParams: i.matches[i.matches.length - 1].params,
                  nextUrl: G,
                  nextParams: u[u.length - 1].params,
                  ...s,
                  actionResult: C,
                  actionStatus: J,
                  defaultShouldRevalidate: P ? !1 : h,
                })),
          ot &&
            E.push({
              key: be,
              routeId: he.routeId,
              path: he.path,
              matches: de,
              match: Qe,
              controller: new AbortController(),
            });
      }),
      [ye, E]
    );
  }
  function so(a, i, u) {
    if (a.lazy) return !0;
    if (!a.loader) return !1;
    let s = i != null && i[a.id] !== void 0,
      f = u != null && u[a.id] !== void 0;
    return !s && f
      ? !1
      : typeof a.loader == "function" && a.loader.hydrate === !0
        ? !0
        : !s && !f;
  }
  function Bp(a, i, u) {
    let s = !i || u.route.id !== i.route.id,
      f = !a.hasOwnProperty(u.route.id);
    return s || f;
  }
  function Gp(a, i) {
    let u = a.route.path;
    return (
      a.pathname !== i.pathname ||
      (u != null && u.endsWith("*") && a.params["*"] !== i.params["*"])
    );
  }
  function Jy(a, i) {
    if (a.route.shouldRevalidate) {
      let u = a.route.shouldRevalidate(i);
      if (typeof u == "boolean") return u;
    }
    return i.defaultShouldRevalidate;
  }
  function Fy(a, i, u, s, f) {
    let o;
    if (a) {
      let v = s[a];
      Ne(v, `No route found to patch children into: routeId = ${a}`),
        v.children || (v.children = []),
        (o = v.children);
    } else o = u;
    let h = i.filter((v) => !o.some((y) => R0(v, y))),
      g = gs(
        h,
        f,
        [a || "_", "patch", String((o == null ? void 0 : o.length) || "0")],
        s,
      );
    o.push(...g);
  }
  function R0(a, i) {
    return "id" in a && "id" in i && a.id === i.id
      ? !0
      : a.index === i.index &&
          a.path === i.path &&
          a.caseSensitive === i.caseSensitive
        ? (!a.children || a.children.length === 0) &&
          (!i.children || i.children.length === 0)
          ? !0
          : a.children.every((u, s) => {
              var f;
              return (f = i.children) == null
                ? void 0
                : f.some((o) => R0(u, o));
            })
        : !1;
  }
  var $y = new WeakMap(),
    O0 = ({ key: a, route: i, manifest: u, mapRouteProperties: s }) => {
      let f = u[i.id];
      if (
        (Ne(f, "No route found in manifest"),
        !f.lazy || typeof f.lazy != "object")
      )
        return;
      let o = f.lazy[a];
      if (!o) return;
      let h = $y.get(f);
      h || ((h = {}), $y.set(f, h));
      let g = h[a];
      if (g) return g;
      let v = (async () => {
        let y = cp(a),
          A = f[a] !== void 0 && a !== "hasErrorBoundary";
        if (y)
          St(
            !y,
            "Route property " +
              a +
              " is not a supported lazy route property. This property will be ignored.",
          ),
            (h[a] = Promise.resolve());
        else if (A)
          St(
            !1,
            `Route "${f.id}" has a static property "${a}" defined. The lazy property will be ignored.`,
          );
        else {
          let T = await o();
          T != null && (Object.assign(f, { [a]: T }), Object.assign(f, s(f)));
        }
        typeof f.lazy == "object" &&
          ((f.lazy[a] = void 0),
          Object.values(f.lazy).every((T) => T === void 0) &&
            (f.lazy = void 0));
      })();
      return (h[a] = v), v;
    },
    Py = new WeakMap();
  function qp(a, i, u, s) {
    let f = u[a.id];
    if ((Ne(f, "No route found in manifest"), !a.lazy))
      return { lazyRoutePromise: void 0, lazyHandlerPromise: void 0 };
    if (typeof a.lazy == "function") {
      let y = Py.get(f);
      if (y) return { lazyRoutePromise: y, lazyHandlerPromise: y };
      let S = (async () => {
        Ne(typeof a.lazy == "function", "No lazy route function found");
        let A = await a.lazy(),
          T = {};
        for (let U in A) {
          let C = A[U];
          if (C === void 0) continue;
          let Q = op(U),
            q = f[U] !== void 0 && U !== "hasErrorBoundary";
          Q
            ? St(
                !Q,
                "Route property " +
                  U +
                  " is not a supported property to be returned from a lazy route function. This property will be ignored.",
              )
            : q
              ? St(
                  !q,
                  `Route "${f.id}" has a static property "${U}" defined but its lazy function is also returning a value for this property. The lazy route property "${U}" will be ignored.`,
                )
              : (T[U] = C);
        }
        Object.assign(f, T), Object.assign(f, { ...s(f), lazy: void 0 });
      })();
      return Py.set(f, S), { lazyRoutePromise: S, lazyHandlerPromise: S };
    }
    let o = Object.keys(a.lazy),
      h = [],
      g;
    for (let y of o) {
      let S = O0({ key: y, route: a, manifest: u, mapRouteProperties: s });
      S && (h.push(S), y === i && (g = S));
    }
    return {
      lazyRoutePromise: Promise.all(h).then(() => {}),
      lazyHandlerPromise: g,
    };
  }
  function x0(a) {
    return a !== void 0;
  }
  function Vp(a, i, u) {
    let s = a
      .map(({ route: f }) => {
        if (!(typeof f.lazy != "object" || !f.lazy.unstable_middleware))
          return O0({
            key: "unstable_middleware",
            route: f,
            manifest: i,
            mapRouteProperties: u,
          });
      })
      .filter(x0);
    return s.length > 0 ? Promise.all(s) : void 0;
  }
  async function Iy(a) {
    let i = a.matches.filter((f) => f.shouldLoad),
      u = {};
    return (
      (await Promise.all(i.map((f) => f.resolve()))).forEach((f, o) => {
        u[i[o].route.id] = f;
      }),
      u
    );
  }
  async function Zp(a) {
    return a.matches.some((i) => i.route.unstable_middleware)
      ? Xp(
          a,
          !1,
          () => Iy(a),
          (i, u) => ({ [u]: { type: "error", result: i } }),
        )
      : Iy(a);
  }
  async function Xp(a, i, u, s) {
    let { matches: f, request: o, params: h, context: g } = a,
      v = { handlerResult: void 0 };
    try {
      let y = f.flatMap((A) =>
          A.route.unstable_middleware
            ? A.route.unstable_middleware.map((T) => [A.route.id, T])
            : [],
        ),
        S = await A0({ request: o, params: h, context: g }, y, i, v, u);
      return i ? S : v.handlerResult;
    } catch (y) {
      if (!v.middlewareError) throw y;
      let S = await s(v.middlewareError.error, v.middlewareError.routeId);
      return v.handlerResult ? Object.assign(v.handlerResult, S) : S;
    }
  }
  async function A0(a, i, u, s, f, o = 0) {
    let { request: h } = a;
    if (h.signal.aborted)
      throw h.signal.reason
        ? h.signal.reason
        : new Error(
            `Request aborted without an \`AbortSignal.reason\`: ${h.method} ${h.url}`,
          );
    let g = i[o];
    if (!g) return (s.handlerResult = await f()), s.handlerResult;
    let [v, y] = g,
      S = !1,
      A,
      T = async () => {
        if (S)
          throw new Error("You may only call `next()` once per middleware");
        (S = !0), await A0(a, i, u, s, f, o + 1);
      };
    try {
      let U = await y(
        { request: a.request, params: a.params, context: a.context },
        T,
      );
      return S ? (U === void 0 ? A : U) : T();
    } catch (U) {
      throw (
        (s.middlewareError
          ? s.middlewareError.error !== U &&
            (s.middlewareError = { routeId: v, error: U })
          : (s.middlewareError = { routeId: v, error: U }),
        U)
      );
    }
  }
  async function Qp(a, i, u, s, f, o, h, g, v) {
    let y = Vp(f, h, g),
      S = f.map((C) => qp(C.route, i, h, g));
    y && (await y);
    let A = f.map((C, Q) => {
        let { lazyRoutePromise: G, lazyHandlerPromise: q } = S[Q],
          J = s.some((ye) => ye.route.id === C.route.id);
        return {
          ...C,
          shouldLoad: J,
          resolve: async (ye) => (
            ye &&
              u.method === "GET" &&
              (C.route.lazy || C.route.loader) &&
              (J = !0),
            J
              ? Kp({
                  type: i,
                  request: u,
                  match: C,
                  lazyHandlerPromise: q,
                  lazyRoutePromise: G,
                  handlerOverride: ye,
                  scopedContext: v,
                })
              : Promise.resolve({ type: "data", result: void 0 })
          ),
        };
      }),
      T = await a({
        matches: A,
        request: u,
        params: f[0].params,
        fetcherKey: o,
        context: v,
      }),
      U = S.flatMap((C) => Object.values(C).filter(x0));
    try {
      await Promise.all(U);
    } catch {}
    return T;
  }
  async function Kp({
    type: a,
    request: i,
    match: u,
    lazyHandlerPromise: s,
    lazyRoutePromise: f,
    handlerOverride: o,
    scopedContext: h,
  }) {
    let g,
      v,
      y = (S) => {
        let A,
          T = new Promise((Q, G) => (A = G));
        (v = () => A()), i.signal.addEventListener("abort", v);
        let U = (Q) =>
            typeof S != "function"
              ? Promise.reject(
                  new Error(
                    `You cannot call the handler for a route which defines a boolean "${a}" [routeId: ${u.route.id}]`,
                  ),
                )
              : S(
                  { request: i, params: u.params, context: h },
                  ...(Q !== void 0 ? [Q] : []),
                ),
          C = (async () => {
            try {
              return { type: "data", result: await (o ? o((G) => U(G)) : U()) };
            } catch (Q) {
              return { type: "error", result: Q };
            }
          })();
        return Promise.race([C, T]);
      };
    try {
      let S = u.route[a];
      if (s || f)
        if (S) {
          let A,
            [T] = await Promise.all([
              y(S).catch((U) => {
                A = U;
              }),
              s,
              f,
            ]);
          if (A !== void 0) throw A;
          g = T;
        } else if ((await s, (S = u.route[a]), S))
          [g] = await Promise.all([y(S), f]);
        else if (a === "action") {
          let A = new URL(i.url),
            T = A.pathname + A.search;
          throw ha(405, { method: i.method, pathname: T, routeId: u.route.id });
        } else return { type: "data", result: void 0 };
      else if (S) g = await y(S);
      else {
        let A = new URL(i.url),
          T = A.pathname + A.search;
        throw ha(404, { pathname: T });
      }
    } catch (S) {
      return { type: "error", result: S };
    } finally {
      v && i.signal.removeEventListener("abort", v);
    }
    return g;
  }
  async function Wp(a) {
    var s, f, o, h, g, v;
    let { result: i, type: u } = a;
    if (z0(i)) {
      let y;
      try {
        let S = i.headers.get("Content-Type");
        S && /\bapplication\/json\b/.test(S)
          ? i.body == null
            ? (y = null)
            : (y = await i.json())
          : (y = await i.text());
      } catch (S) {
        return { type: "error", error: S };
      }
      return u === "error"
        ? {
            type: "error",
            error: new Ss(i.status, i.statusText, y),
            statusCode: i.status,
            headers: i.headers,
          }
        : { type: "data", data: y, statusCode: i.status, headers: i.headers };
    }
    return u === "error"
      ? u0(i)
        ? i.data instanceof Error
          ? {
              type: "error",
              error: i.data,
              statusCode: (s = i.init) == null ? void 0 : s.status,
              headers:
                (f = i.init) != null && f.headers
                  ? new Headers(i.init.headers)
                  : void 0,
            }
          : {
              type: "error",
              error: new Ss(
                ((o = i.init) == null ? void 0 : o.status) || 500,
                void 0,
                i.data,
              ),
              statusCode: Yu(i) ? i.status : void 0,
              headers:
                (h = i.init) != null && h.headers
                  ? new Headers(i.init.headers)
                  : void 0,
            }
        : { type: "error", error: i, statusCode: Yu(i) ? i.status : void 0 }
      : u0(i)
        ? {
            type: "data",
            data: i.data,
            statusCode: (g = i.init) == null ? void 0 : g.status,
            headers:
              (v = i.init) != null && v.headers
                ? new Headers(i.init.headers)
                : void 0,
          }
        : { type: "data", data: i };
  }
  function Jp(a, i, u, s, f) {
    let o = a.headers.get("Location");
    if (
      (Ne(
        o,
        "Redirects returned/thrown from loaders/actions must have a Location header",
      ),
      !_o.test(o))
    ) {
      let h = s.slice(0, s.findIndex((g) => g.route.id === u) + 1);
      (o = ro(new URL(i.url), h, f, o)), a.headers.set("Location", o);
    }
    return a;
  }
  function e0(a, i, u) {
    if (_o.test(a)) {
      let s = a,
        f = s.startsWith("//") ? new URL(i.protocol + s) : new URL(s),
        o = ya(f.pathname, u) != null;
      if (f.origin === i.origin && o) return f.pathname + f.search + f.hash;
    }
    return a;
  }
  function fi(a, i, u, s) {
    let f = a.createURL(N0(i)).toString(),
      o = { signal: u };
    if (s && Ma(s.formMethod)) {
      let { formMethod: h, formEncType: g } = s;
      (o.method = h.toUpperCase()),
        g === "application/json"
          ? ((o.headers = new Headers({ "Content-Type": g })),
            (o.body = JSON.stringify(s.json)))
          : g === "text/plain"
            ? (o.body = s.text)
            : g === "application/x-www-form-urlencoded" && s.formData
              ? (o.body = co(s.formData))
              : (o.body = s.formData);
    }
    return new Request(f, o);
  }
  function co(a) {
    let i = new URLSearchParams();
    for (let [u, s] of a.entries())
      i.append(u, typeof s == "string" ? s : s.name);
    return i;
  }
  function t0(a) {
    let i = new FormData();
    for (let [u, s] of a.entries()) i.append(u, s);
    return i;
  }
  function Fp(a, i, u, s = !1, f = !1) {
    let o = {},
      h = null,
      g,
      v = !1,
      y = {},
      S = u && Pt(u[1]) ? u[1].error : void 0;
    return (
      a.forEach((A) => {
        if (!(A.route.id in i)) return;
        let T = A.route.id,
          U = i[T];
        if (
          (Ne(!Mn(U), "Cannot handle redirect results in processLoaderData"),
          Pt(U))
        ) {
          let C = U.error;
          if ((S !== void 0 && ((C = S), (S = void 0)), (h = h || {}), f))
            h[T] = C;
          else {
            let Q = _n(a, T);
            h[Q.route.id] == null && (h[Q.route.id] = C);
          }
          s || (o[T] = w0),
            v || ((v = !0), (g = Yu(U.error) ? U.error.status : 500)),
            U.headers && (y[T] = U.headers);
        } else
          (o[T] = U.data),
            U.statusCode && U.statusCode !== 200 && !v && (g = U.statusCode),
            U.headers && (y[T] = U.headers);
      }),
      S !== void 0 && u && ((h = { [u[0]]: S }), (o[u[0]] = void 0)),
      { loaderData: o, errors: h, statusCode: g || 200, loaderHeaders: y }
    );
  }
  function a0(a, i, u, s, f, o) {
    let { loaderData: h, errors: g } = Fp(i, u, s);
    return (
      f.forEach((v) => {
        let { key: y, match: S, controller: A } = v,
          T = o[y];
        if (
          (Ne(T, "Did not find corresponding fetcher result"),
          !(A && A.signal.aborted))
        )
          if (Pt(T)) {
            let U = _n(a.matches, S == null ? void 0 : S.route.id);
            (g && g[U.route.id]) || (g = { ...g, [U.route.id]: T.error }),
              a.fetchers.delete(y);
          } else if (Mn(T)) Ne(!1, "Unhandled fetcher revalidation redirect");
          else {
            let U = Xl(T.data);
            a.fetchers.set(y, U);
          }
      }),
      { loaderData: h, errors: g }
    );
  }
  function l0(a, i, u, s) {
    let f = Object.entries(i)
      .filter(([, o]) => o !== w0)
      .reduce((o, [h, g]) => ((o[h] = g), o), {});
    for (let o of u) {
      let h = o.route.id;
      if (
        (!i.hasOwnProperty(h) &&
          a.hasOwnProperty(h) &&
          o.route.loader &&
          (f[h] = a[h]),
        s && s.hasOwnProperty(h))
      )
        break;
    }
    return f;
  }
  function n0(a) {
    return a
      ? Pt(a[1])
        ? { actionData: {} }
        : { actionData: { [a[0]]: a[1].data } }
      : {};
  }
  function _n(a, i) {
    return (
      (i ? a.slice(0, a.findIndex((s) => s.route.id === i) + 1) : [...a])
        .reverse()
        .find((s) => s.route.hasErrorBoundary === !0) || a[0]
    );
  }
  function i0(a) {
    let i =
      a.length === 1
        ? a[0]
        : a.find((u) => u.index || !u.path || u.path === "/") || {
            id: "__shim-error-route__",
          };
    return {
      matches: [{ params: {}, pathname: "", pathnameBase: "", route: i }],
      route: i,
    };
  }
  function ha(
    a,
    { pathname: i, routeId: u, method: s, type: f, message: o } = {},
  ) {
    let h = "Unknown Server Error",
      g = "Unknown @remix-run/router error";
    return (
      a === 400
        ? ((h = "Bad Request"),
          s && i && u
            ? (g = `You made a ${s} request to "${i}" but did not provide a \`loader\` for route "${u}", so there is no way to handle the request.`)
            : f === "invalid-body" && (g = "Unable to encode submission body"))
        : a === 403
          ? ((h = "Forbidden"), (g = `Route "${u}" does not match URL "${i}"`))
          : a === 404
            ? ((h = "Not Found"), (g = `No route matches URL "${i}"`))
            : a === 405 &&
              ((h = "Method Not Allowed"),
              s && i && u
                ? (g = `You made a ${s.toUpperCase()} request to "${i}" but did not provide an \`action\` for route "${u}", so there is no way to handle the request.`)
                : s && (g = `Invalid request method "${s.toUpperCase()}"`)),
      new Ss(a || 500, h, new Error(g), !0)
    );
  }
  function us(a) {
    let i = Object.entries(a);
    for (let u = i.length - 1; u >= 0; u--) {
      let [s, f] = i[u];
      if (Mn(f)) return { key: s, result: f };
    }
  }
  function N0(a) {
    let i = typeof a == "string" ? $l(a) : a;
    return Fl({ ...i, hash: "" });
  }
  function $p(a, i) {
    return a.pathname !== i.pathname || a.search !== i.search
      ? !1
      : a.hash === ""
        ? i.hash !== ""
        : a.hash === i.hash
          ? !0
          : i.hash !== "";
  }
  function Pp(a) {
    return z0(a.result) && Up.has(a.result.status);
  }
  function Pt(a) {
    return a.type === "error";
  }
  function Mn(a) {
    return (a && a.type) === "redirect";
  }
  function u0(a) {
    return (
      typeof a == "object" &&
      a != null &&
      "type" in a &&
      "data" in a &&
      "init" in a &&
      a.type === "DataWithResponseInit"
    );
  }
  function z0(a) {
    return (
      a != null &&
      typeof a.status == "number" &&
      typeof a.statusText == "string" &&
      typeof a.headers == "object" &&
      typeof a.body < "u"
    );
  }
  function Ip(a) {
    return Yp.has(a.toUpperCase());
  }
  function Ma(a) {
    return Np.has(a.toUpperCase());
  }
  function Mo(a) {
    return new URLSearchParams(a).getAll("index").some((i) => i === "");
  }
  function Au(a, i) {
    let u = typeof i == "string" ? $l(i).search : i.search;
    if (a[a.length - 1].route.index && Mo(u || "")) return a[a.length - 1];
    let s = D0(a);
    return s[s.length - 1];
  }
  function r0(a) {
    let {
      formMethod: i,
      formAction: u,
      formEncType: s,
      text: f,
      formData: o,
      json: h,
    } = a;
    if (!(!i || !u || !s)) {
      if (f != null)
        return {
          formMethod: i,
          formAction: u,
          formEncType: s,
          formData: void 0,
          json: void 0,
          text: f,
        };
      if (o != null)
        return {
          formMethod: i,
          formAction: u,
          formEncType: s,
          formData: o,
          json: void 0,
          text: void 0,
        };
      if (h !== void 0)
        return {
          formMethod: i,
          formAction: u,
          formEncType: s,
          formData: void 0,
          json: h,
          text: void 0,
        };
    }
  }
  function eo(a, i) {
    return i
      ? {
          state: "loading",
          location: a,
          formMethod: i.formMethod,
          formAction: i.formAction,
          formEncType: i.formEncType,
          formData: i.formData,
          json: i.json,
          text: i.text,
        }
      : {
          state: "loading",
          location: a,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        };
  }
  function eS(a, i) {
    return {
      state: "submitting",
      location: a,
      formMethod: i.formMethod,
      formAction: i.formAction,
      formEncType: i.formEncType,
      formData: i.formData,
      json: i.json,
      text: i.text,
    };
  }
  function Tu(a, i) {
    return a
      ? {
          state: "loading",
          formMethod: a.formMethod,
          formAction: a.formAction,
          formEncType: a.formEncType,
          formData: a.formData,
          json: a.json,
          text: a.text,
          data: i,
        }
      : {
          state: "loading",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: i,
        };
  }
  function tS(a, i) {
    return {
      state: "submitting",
      formMethod: a.formMethod,
      formAction: a.formAction,
      formEncType: a.formEncType,
      formData: a.formData,
      json: a.json,
      text: a.text,
      data: i ? i.data : void 0,
    };
  }
  function Xl(a) {
    return {
      state: "idle",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: a,
    };
  }
  function aS(a, i) {
    try {
      let u = a.sessionStorage.getItem(T0);
      if (u) {
        let s = JSON.parse(u);
        for (let [f, o] of Object.entries(s || {}))
          o && Array.isArray(o) && i.set(f, new Set(o || []));
      }
    } catch {}
  }
  function lS(a, i) {
    if (i.size > 0) {
      let u = {};
      for (let [s, f] of i) u[s] = [...f];
      try {
        a.sessionStorage.setItem(T0, JSON.stringify(u));
      } catch (s) {
        St(
          !1,
          `Failed to save applied view transitions in sessionStorage (${s}).`,
        );
      }
    }
  }
  function nS() {
    let a,
      i,
      u = new Promise((s, f) => {
        (a = async (o) => {
          s(o);
          try {
            await u;
          } catch {}
        }),
          (i = async (o) => {
            f(o);
            try {
              await u;
            } catch {}
          });
      });
    return { promise: u, resolve: a, reject: i };
  }
  var Tn = z.createContext(null);
  Tn.displayName = "DataRouter";
  var ju = z.createContext(null);
  ju.displayName = "DataRouterState";
  var Do = z.createContext({ isTransitioning: !1 });
  Do.displayName = "ViewTransition";
  var Y0 = z.createContext(new Map());
  Y0.displayName = "Fetchers";
  var iS = z.createContext(null);
  iS.displayName = "Await";
  var Ga = z.createContext(null);
  Ga.displayName = "Navigation";
  var Ts = z.createContext(null);
  Ts.displayName = "Location";
  var ml = z.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  ml.displayName = "Route";
  var Eo = z.createContext(null);
  Eo.displayName = "RouteError";
  function uS(a, { relative: i } = {}) {
    Ne(
      ku(),
      "useHref() may be used only in the context of a <Router> component.",
    );
    let { basename: u, navigator: s } = z.useContext(Ga),
      { hash: f, pathname: o, search: h } = Bu(a, { relative: i }),
      g = o;
    return (
      u !== "/" && (g = o === "/" ? u : ka([u, o])),
      s.createHref({ pathname: g, search: h, hash: f })
    );
  }
  function ku() {
    return z.useContext(Ts) != null;
  }
  function Pl() {
    return (
      Ne(
        ku(),
        "useLocation() may be used only in the context of a <Router> component.",
      ),
      z.useContext(Ts).location
    );
  }
  var U0 =
    "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
  function C0(a) {
    z.useContext(Ga).static || z.useLayoutEffect(a);
  }
  function H0() {
    let { isDataRoute: a } = z.useContext(ml);
    return a ? SS() : rS();
  }
  function rS() {
    Ne(
      ku(),
      "useNavigate() may be used only in the context of a <Router> component.",
    );
    let a = z.useContext(Tn),
      { basename: i, navigator: u } = z.useContext(Ga),
      { matches: s } = z.useContext(ml),
      { pathname: f } = Pl(),
      o = JSON.stringify(So(s)),
      h = z.useRef(!1);
    return (
      C0(() => {
        h.current = !0;
      }),
      z.useCallback(
        (v, y = {}) => {
          if ((St(h.current, U0), !h.current)) return;
          if (typeof v == "number") {
            u.go(v);
            return;
          }
          let S = bo(v, JSON.parse(o), f, y.relative === "path");
          a == null &&
            i !== "/" &&
            (S.pathname = S.pathname === "/" ? i : ka([i, S.pathname])),
            (y.replace ? u.replace : u.push)(S, y.state, y);
        },
        [i, u, o, f, a],
      )
    );
  }
  z.createContext(null);
  function Bu(a, { relative: i } = {}) {
    let { matches: u } = z.useContext(ml),
      { pathname: s } = Pl(),
      f = JSON.stringify(So(u));
    return z.useMemo(() => bo(a, JSON.parse(f), s, i === "path"), [a, f, s, i]);
  }
  function sS(a, i, u, s) {
    Ne(
      ku(),
      "useRoutes() may be used only in the context of a <Router> component.",
    );
    let { navigator: f, static: o } = z.useContext(Ga),
      { matches: h } = z.useContext(ml),
      g = h[h.length - 1],
      v = g ? g.params : {},
      y = g ? g.pathname : "/",
      S = g ? g.pathnameBase : "/",
      A = g && g.route;
    {
      let J = (A && A.path) || "";
      L0(
        y,
        !A || J.endsWith("*") || J.endsWith("*?"),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${y}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J === "/" ? "*" : `${J}/*`}">.`,
      );
    }
    let T = Pl(),
      U;
    U = T;
    let C = U.pathname || "/",
      Q = C;
    if (S !== "/") {
      let J = S.replace(/^\//, "").split("/");
      Q = "/" + C.replace(/^\//, "").split("/").slice(J.length).join("/");
    }
    let G =
      !o && u && u.matches && u.matches.length > 0
        ? u.matches
        : Ql(a, { pathname: Q });
    return (
      St(
        A || G != null,
        `No routes matched location "${U.pathname}${U.search}${U.hash}" `,
      ),
      St(
        G == null ||
          G[G.length - 1].route.element !== void 0 ||
          G[G.length - 1].route.Component !== void 0 ||
          G[G.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${U.pathname}${U.search}${U.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
      ),
      hS(
        G &&
          G.map((J) =>
            Object.assign({}, J, {
              params: Object.assign({}, v, J.params),
              pathname: ka([
                S,
                f.encodeLocation
                  ? f.encodeLocation(J.pathname).pathname
                  : J.pathname,
              ]),
              pathnameBase:
                J.pathnameBase === "/"
                  ? S
                  : ka([
                      S,
                      f.encodeLocation
                        ? f.encodeLocation(J.pathnameBase).pathname
                        : J.pathnameBase,
                    ]),
            }),
          ),
        h,
        u,
        s,
      )
    );
  }
  function cS() {
    let a = pS(),
      i = Yu(a)
        ? `${a.status} ${a.statusText}`
        : a instanceof Error
          ? a.message
          : JSON.stringify(a),
      u = a instanceof Error ? a.stack : null,
      s = "rgba(200,200,200, 0.5)",
      f = { padding: "0.5rem", backgroundColor: s },
      o = { padding: "2px 4px", backgroundColor: s },
      h = null;
    return (
      console.error("Error handled by React Router default ErrorBoundary:", a),
      (h = z.createElement(
        z.Fragment,
        null,
        z.createElement("p", null, "💿 Hey developer 👋"),
        z.createElement(
          "p",
          null,
          "You can provide a way better UX than this when your app throws errors by providing your own ",
          z.createElement("code", { style: o }, "ErrorBoundary"),
          " or",
          " ",
          z.createElement("code", { style: o }, "errorElement"),
          " prop on your route.",
        ),
      )),
      z.createElement(
        z.Fragment,
        null,
        z.createElement("h2", null, "Unexpected Application Error!"),
        z.createElement("h3", { style: { fontStyle: "italic" } }, i),
        u ? z.createElement("pre", { style: f }, u) : null,
        h,
      )
    );
  }
  var fS = z.createElement(cS, null),
    oS = class extends z.Component {
      constructor(a) {
        super(a),
          (this.state = {
            location: a.location,
            revalidation: a.revalidation,
            error: a.error,
          });
      }
      static getDerivedStateFromError(a) {
        return { error: a };
      }
      static getDerivedStateFromProps(a, i) {
        return i.location !== a.location ||
          (i.revalidation !== "idle" && a.revalidation === "idle")
          ? {
              error: a.error,
              location: a.location,
              revalidation: a.revalidation,
            }
          : {
              error: a.error !== void 0 ? a.error : i.error,
              location: i.location,
              revalidation: a.revalidation || i.revalidation,
            };
      }
      componentDidCatch(a, i) {
        console.error(
          "React Router caught the following error during render",
          a,
          i,
        );
      }
      render() {
        return this.state.error !== void 0
          ? z.createElement(
              ml.Provider,
              { value: this.props.routeContext },
              z.createElement(Eo.Provider, {
                value: this.state.error,
                children: this.props.component,
              }),
            )
          : this.props.children;
      }
    };
  function dS({ routeContext: a, match: i, children: u }) {
    let s = z.useContext(Tn);
    return (
      s &&
        s.static &&
        s.staticContext &&
        (i.route.errorElement || i.route.ErrorBoundary) &&
        (s.staticContext._deepestRenderedBoundaryId = i.route.id),
      z.createElement(ml.Provider, { value: a }, u)
    );
  }
  function hS(a, i = [], u = null, s = null) {
    if (a == null) {
      if (!u) return null;
      if (u.errors) a = u.matches;
      else if (i.length === 0 && !u.initialized && u.matches.length > 0)
        a = u.matches;
      else return null;
    }
    let f = a,
      o = u == null ? void 0 : u.errors;
    if (o != null) {
      let v = f.findIndex(
        (y) => y.route.id && (o == null ? void 0 : o[y.route.id]) !== void 0,
      );
      Ne(
        v >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`,
      ),
        (f = f.slice(0, Math.min(f.length, v + 1)));
    }
    let h = !1,
      g = -1;
    if (u)
      for (let v = 0; v < f.length; v++) {
        let y = f[v];
        if (
          ((y.route.HydrateFallback || y.route.hydrateFallbackElement) &&
            (g = v),
          y.route.id)
        ) {
          let { loaderData: S, errors: A } = u,
            T =
              y.route.loader &&
              !S.hasOwnProperty(y.route.id) &&
              (!A || A[y.route.id] === void 0);
          if (y.route.lazy || T) {
            (h = !0), g >= 0 ? (f = f.slice(0, g + 1)) : (f = [f[0]]);
            break;
          }
        }
      }
    return f.reduceRight((v, y, S) => {
      let A,
        T = !1,
        U = null,
        C = null;
      u &&
        ((A = o && y.route.id ? o[y.route.id] : void 0),
        (U = y.route.errorElement || fS),
        h &&
          (g < 0 && S === 0
            ? (L0(
                "route-fallback",
                !1,
                "No `HydrateFallback` element provided to render during initial hydration",
              ),
              (T = !0),
              (C = null))
            : g === S &&
              ((T = !0), (C = y.route.hydrateFallbackElement || null))));
      let Q = i.concat(f.slice(0, S + 1)),
        G = () => {
          let q;
          return (
            A
              ? (q = U)
              : T
                ? (q = C)
                : y.route.Component
                  ? (q = z.createElement(y.route.Component, null))
                  : y.route.element
                    ? (q = y.route.element)
                    : (q = v),
            z.createElement(dS, {
              match: y,
              routeContext: { outlet: v, matches: Q, isDataRoute: u != null },
              children: q,
            })
          );
        };
      return u && (y.route.ErrorBoundary || y.route.errorElement || S === 0)
        ? z.createElement(oS, {
            location: u.location,
            revalidation: u.revalidation,
            component: U,
            error: A,
            children: G(),
            routeContext: { outlet: null, matches: Q, isDataRoute: !0 },
          })
        : G();
    }, null);
  }
  function To(a) {
    return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function mS(a) {
    let i = z.useContext(Tn);
    return Ne(i, To(a)), i;
  }
  function yS(a) {
    let i = z.useContext(ju);
    return Ne(i, To(a)), i;
  }
  function vS(a) {
    let i = z.useContext(ml);
    return Ne(i, To(a)), i;
  }
  function wo(a) {
    let i = vS(a),
      u = i.matches[i.matches.length - 1];
    return (
      Ne(
        u.route.id,
        `${a} can only be used on routes that contain a unique "id"`,
      ),
      u.route.id
    );
  }
  function gS() {
    return wo("useRouteId");
  }
  function pS() {
    var s;
    let a = z.useContext(Eo),
      i = yS("useRouteError"),
      u = wo("useRouteError");
    return a !== void 0 ? a : (s = i.errors) == null ? void 0 : s[u];
  }
  function SS() {
    let { router: a } = mS("useNavigate"),
      i = wo("useNavigate"),
      u = z.useRef(!1);
    return (
      C0(() => {
        u.current = !0;
      }),
      z.useCallback(
        async (f, o = {}) => {
          St(u.current, U0),
            u.current &&
              (typeof f == "number"
                ? a.navigate(f)
                : await a.navigate(f, { fromRouteId: i, ...o }));
        },
        [a, i],
      )
    );
  }
  var s0 = {};
  function L0(a, i, u) {
    !i && !s0[a] && ((s0[a] = !0), St(!1, u));
  }
  var c0 = {};
  function f0(a, i) {
    !a && !c0[i] && ((c0[i] = !0), console.warn(i));
  }
  function bS(a) {
    let i = {
      hasErrorBoundary:
        a.hasErrorBoundary || a.ErrorBoundary != null || a.errorElement != null,
    };
    return (
      a.Component &&
        (a.element &&
          St(
            !1,
            "You should not include both `Component` and `element` on your route - `Component` will be used.",
          ),
        Object.assign(i, {
          element: z.createElement(a.Component),
          Component: void 0,
        })),
      a.HydrateFallback &&
        (a.hydrateFallbackElement &&
          St(
            !1,
            "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used.",
          ),
        Object.assign(i, {
          hydrateFallbackElement: z.createElement(a.HydrateFallback),
          HydrateFallback: void 0,
        })),
      a.ErrorBoundary &&
        (a.errorElement &&
          St(
            !1,
            "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used.",
          ),
        Object.assign(i, {
          errorElement: z.createElement(a.ErrorBoundary),
          ErrorBoundary: void 0,
        })),
      i
    );
  }
  var _S = class {
    constructor() {
      (this.status = "pending"),
        (this.promise = new Promise((a, i) => {
          (this.resolve = (u) => {
            this.status === "pending" && ((this.status = "resolved"), a(u));
          }),
            (this.reject = (u) => {
              this.status === "pending" && ((this.status = "rejected"), i(u));
            });
        }));
    }
  };
  function MS({ router: a, flushSync: i }) {
    let [u, s] = z.useState(a.state),
      [f, o] = z.useState(),
      [h, g] = z.useState({ isTransitioning: !1 }),
      [v, y] = z.useState(),
      [S, A] = z.useState(),
      [T, U] = z.useState(),
      C = z.useRef(new Map()),
      Q = z.useCallback(
        (P, { deletedFetchers: ye, flushSync: E, viewTransitionOpts: he }) => {
          P.fetchers.forEach((de, De) => {
            de.data !== void 0 && C.current.set(De, de.data);
          }),
            ye.forEach((de) => C.current.delete(de)),
            f0(
              E === !1 || i != null,
              'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.',
            );
          let be =
            a.window != null &&
            a.window.document != null &&
            typeof a.window.document.startViewTransition == "function";
          if (
            (f0(
              he == null || be,
              "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available.",
            ),
            !he || !be)
          ) {
            i && E ? i(() => s(P)) : z.startTransition(() => s(P));
            return;
          }
          if (i && E) {
            i(() => {
              S && (v && v.resolve(), S.skipTransition()),
                g({
                  isTransitioning: !0,
                  flushSync: !0,
                  currentLocation: he.currentLocation,
                  nextLocation: he.nextLocation,
                });
            });
            let de = a.window.document.startViewTransition(() => {
              i(() => s(P));
            });
            de.finished.finally(() => {
              i(() => {
                y(void 0), A(void 0), o(void 0), g({ isTransitioning: !1 });
              });
            }),
              i(() => A(de));
            return;
          }
          S
            ? (v && v.resolve(),
              S.skipTransition(),
              U({
                state: P,
                currentLocation: he.currentLocation,
                nextLocation: he.nextLocation,
              }))
            : (o(P),
              g({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: he.currentLocation,
                nextLocation: he.nextLocation,
              }));
        },
        [a.window, i, S, v],
      );
    z.useLayoutEffect(() => a.subscribe(Q), [a, Q]),
      z.useEffect(() => {
        h.isTransitioning && !h.flushSync && y(new _S());
      }, [h]),
      z.useEffect(() => {
        if (v && f && a.window) {
          let P = f,
            ye = v.promise,
            E = a.window.document.startViewTransition(async () => {
              z.startTransition(() => s(P)), await ye;
            });
          E.finished.finally(() => {
            y(void 0), A(void 0), o(void 0), g({ isTransitioning: !1 });
          }),
            A(E);
        }
      }, [f, v, a.window]),
      z.useEffect(() => {
        v && f && u.location.key === f.location.key && v.resolve();
      }, [v, S, u.location, f]),
      z.useEffect(() => {
        !h.isTransitioning &&
          T &&
          (o(T.state),
          g({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: T.currentLocation,
            nextLocation: T.nextLocation,
          }),
          U(void 0));
      }, [h.isTransitioning, T]);
    let G = z.useMemo(
        () => ({
          createHref: a.createHref,
          encodeLocation: a.encodeLocation,
          go: (P) => a.navigate(P),
          push: (P, ye, E) =>
            a.navigate(P, {
              state: ye,
              preventScrollReset: E == null ? void 0 : E.preventScrollReset,
            }),
          replace: (P, ye, E) =>
            a.navigate(P, {
              replace: !0,
              state: ye,
              preventScrollReset: E == null ? void 0 : E.preventScrollReset,
            }),
        }),
        [a],
      ),
      q = a.basename || "/",
      J = z.useMemo(
        () => ({ router: a, navigator: G, static: !1, basename: q }),
        [a, G, q],
      );
    return z.createElement(
      z.Fragment,
      null,
      z.createElement(
        Tn.Provider,
        { value: J },
        z.createElement(
          ju.Provider,
          { value: u },
          z.createElement(
            Y0.Provider,
            { value: C.current },
            z.createElement(
              Do.Provider,
              { value: h },
              z.createElement(
                TS,
                {
                  basename: q,
                  location: u.location,
                  navigationType: u.historyAction,
                  navigator: G,
                },
                z.createElement(DS, {
                  routes: a.routes,
                  future: a.future,
                  state: u,
                }),
              ),
            ),
          ),
        ),
      ),
      null,
    );
  }
  var DS = z.memo(ES);
  function ES({ routes: a, future: i, state: u }) {
    return sS(a, void 0, u, i);
  }
  function TS({
    basename: a = "/",
    children: i = null,
    location: u,
    navigationType: s = "POP",
    navigator: f,
    static: o = !1,
  }) {
    Ne(
      !ku(),
      "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
    );
    let h = a.replace(/^\/*/, "/"),
      g = z.useMemo(
        () => ({ basename: h, navigator: f, static: o, future: {} }),
        [h, f, o],
      );
    typeof u == "string" && (u = $l(u));
    let {
        pathname: v = "/",
        search: y = "",
        hash: S = "",
        state: A = null,
        key: T = "default",
      } = u,
      U = z.useMemo(() => {
        let C = ya(v, h);
        return C == null
          ? null
          : {
              location: { pathname: C, search: y, hash: S, state: A, key: T },
              navigationType: s,
            };
      }, [h, v, y, S, A, T, s]);
    return (
      St(
        U != null,
        `<Router basename="${h}"> is not able to match the URL "${v}${y}${S}" because it does not start with the basename, so the <Router> won't render anything.`,
      ),
      U == null
        ? null
        : z.createElement(
            Ga.Provider,
            { value: g },
            z.createElement(Ts.Provider, { children: i, value: U }),
          )
    );
  }
  var os = "get",
    ds = "application/x-www-form-urlencoded";
  function ws(a) {
    return a != null && typeof a.tagName == "string";
  }
  function wS(a) {
    return ws(a) && a.tagName.toLowerCase() === "button";
  }
  function RS(a) {
    return ws(a) && a.tagName.toLowerCase() === "form";
  }
  function OS(a) {
    return ws(a) && a.tagName.toLowerCase() === "input";
  }
  function xS(a) {
    return !!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
  }
  function AS(a, i) {
    return a.button === 0 && (!i || i === "_self") && !xS(a);
  }
  var rs = null;
  function NS() {
    if (rs === null)
      try {
        new FormData(document.createElement("form"), 0), (rs = !1);
      } catch {
        rs = !0;
      }
    return rs;
  }
  var zS = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain",
  ]);
  function to(a) {
    return a != null && !zS.has(a)
      ? (St(
          !1,
          `"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ds}"`,
        ),
        null)
      : a;
  }
  function YS(a, i) {
    let u, s, f, o, h;
    if (RS(a)) {
      let g = a.getAttribute("action");
      (s = g ? ya(g, i) : null),
        (u = a.getAttribute("method") || os),
        (f = to(a.getAttribute("enctype")) || ds),
        (o = new FormData(a));
    } else if (
      wS(a) ||
      (OS(a) && (a.type === "submit" || a.type === "image"))
    ) {
      let g = a.form;
      if (g == null)
        throw new Error(
          'Cannot submit a <button> or <input type="submit"> without a <form>',
        );
      let v = a.getAttribute("formaction") || g.getAttribute("action");
      if (
        ((s = v ? ya(v, i) : null),
        (u = a.getAttribute("formmethod") || g.getAttribute("method") || os),
        (f =
          to(a.getAttribute("formenctype")) ||
          to(g.getAttribute("enctype")) ||
          ds),
        (o = new FormData(g, a)),
        !NS())
      ) {
        let { name: y, type: S, value: A } = a;
        if (S === "image") {
          let T = y ? `${y}.` : "";
          o.append(`${T}x`, "0"), o.append(`${T}y`, "0");
        } else y && o.append(y, A);
      }
    } else {
      if (ws(a))
        throw new Error(
          'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
        );
      (u = os), (s = null), (f = ds), (h = a);
    }
    return (
      o && f === "text/plain" && ((h = o), (o = void 0)),
      { action: s, method: u.toLowerCase(), encType: f, formData: o, body: h }
    );
  }
  function Ro(a, i) {
    if (a === !1 || a === null || typeof a > "u") throw new Error(i);
  }
  async function US(a, i) {
    if (a.id in i) return i[a.id];
    try {
      let u = await import(a.module);
      return (i[a.id] = u), u;
    } catch (u) {
      return (
        console.error(
          `Error loading route module \`${a.module}\`, reloading page...`,
        ),
        console.error(u),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function CS(a) {
    return a == null
      ? !1
      : a.href == null
        ? a.rel === "preload" &&
          typeof a.imageSrcSet == "string" &&
          typeof a.imageSizes == "string"
        : typeof a.rel == "string" && typeof a.href == "string";
  }
  async function HS(a, i, u) {
    let s = await Promise.all(
      a.map(async (f) => {
        let o = i.routes[f.route.id];
        if (o) {
          let h = await US(o, u);
          return h.links ? h.links() : [];
        }
        return [];
      }),
    );
    return BS(
      s
        .flat(1)
        .filter(CS)
        .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
        .map((f) =>
          f.rel === "stylesheet"
            ? { ...f, rel: "prefetch", as: "style" }
            : { ...f, rel: "prefetch" },
        ),
    );
  }
  function o0(a, i, u, s, f, o) {
    let h = (v, y) => (u[y] ? v.route.id !== u[y].route.id : !0),
      g = (v, y) => {
        var S;
        return (
          u[y].pathname !== v.pathname ||
          (((S = u[y].route.path) == null ? void 0 : S.endsWith("*")) &&
            u[y].params["*"] !== v.params["*"])
        );
      };
    return o === "assets"
      ? i.filter((v, y) => h(v, y) || g(v, y))
      : o === "data"
        ? i.filter((v, y) => {
            var A;
            let S = s.routes[v.route.id];
            if (!S || !S.hasLoader) return !1;
            if (h(v, y) || g(v, y)) return !0;
            if (v.route.shouldRevalidate) {
              let T = v.route.shouldRevalidate({
                currentUrl: new URL(
                  f.pathname + f.search + f.hash,
                  window.origin,
                ),
                currentParams: ((A = u[0]) == null ? void 0 : A.params) || {},
                nextUrl: new URL(a, window.origin),
                nextParams: v.params,
                defaultShouldRevalidate: !0,
              });
              if (typeof T == "boolean") return T;
            }
            return !0;
          })
        : [];
  }
  function LS(a, i, { includeHydrateFallback: u } = {}) {
    return jS(
      a
        .map((s) => {
          let f = i.routes[s.route.id];
          if (!f) return [];
          let o = [f.module];
          return (
            f.clientActionModule && (o = o.concat(f.clientActionModule)),
            f.clientLoaderModule && (o = o.concat(f.clientLoaderModule)),
            u &&
              f.hydrateFallbackModule &&
              (o = o.concat(f.hydrateFallbackModule)),
            f.imports && (o = o.concat(f.imports)),
            o
          );
        })
        .flat(1),
    );
  }
  function jS(a) {
    return [...new Set(a)];
  }
  function kS(a) {
    let i = {},
      u = Object.keys(a).sort();
    for (let s of u) i[s] = a[s];
    return i;
  }
  function BS(a, i) {
    let u = new Set();
    return (
      new Set(i),
      a.reduce((s, f) => {
        let o = JSON.stringify(kS(f));
        return u.has(o) || (u.add(o), s.push({ key: o, link: f })), s;
      }, [])
    );
  }
  function GS(a, i) {
    let u =
      typeof a == "string"
        ? new URL(
            a,
            typeof window > "u"
              ? "server://singlefetch/"
              : window.location.origin,
          )
        : a;
    return (
      u.pathname === "/"
        ? (u.pathname = "_root.data")
        : i && ya(u.pathname, i) === "/"
          ? (u.pathname = `${i.replace(/\/$/, "")}/_root.data`)
          : (u.pathname = `${u.pathname.replace(/\/$/, "")}.data`),
      u
    );
  }
  function j0() {
    let a = z.useContext(Tn);
    return (
      Ro(
        a,
        "You must render this element inside a <DataRouterContext.Provider> element",
      ),
      a
    );
  }
  function qS() {
    let a = z.useContext(ju);
    return (
      Ro(
        a,
        "You must render this element inside a <DataRouterStateContext.Provider> element",
      ),
      a
    );
  }
  var Oo = z.createContext(void 0);
  Oo.displayName = "FrameworkContext";
  function k0() {
    let a = z.useContext(Oo);
    return (
      Ro(a, "You must render this element inside a <HydratedRouter> element"), a
    );
  }
  function VS(a, i) {
    let u = z.useContext(Oo),
      [s, f] = z.useState(!1),
      [o, h] = z.useState(!1),
      {
        onFocus: g,
        onBlur: v,
        onMouseEnter: y,
        onMouseLeave: S,
        onTouchStart: A,
      } = i,
      T = z.useRef(null);
    z.useEffect(() => {
      if ((a === "render" && h(!0), a === "viewport")) {
        let Q = (q) => {
            q.forEach((J) => {
              h(J.isIntersecting);
            });
          },
          G = new IntersectionObserver(Q, { threshold: 0.5 });
        return (
          T.current && G.observe(T.current),
          () => {
            G.disconnect();
          }
        );
      }
    }, [a]),
      z.useEffect(() => {
        if (s) {
          let Q = setTimeout(() => {
            h(!0);
          }, 100);
          return () => {
            clearTimeout(Q);
          };
        }
      }, [s]);
    let U = () => {
        f(!0);
      },
      C = () => {
        f(!1), h(!1);
      };
    return u
      ? a !== "intent"
        ? [o, T, {}]
        : [
            o,
            T,
            {
              onFocus: wu(g, U),
              onBlur: wu(v, C),
              onMouseEnter: wu(y, U),
              onMouseLeave: wu(S, C),
              onTouchStart: wu(A, U),
            },
          ]
      : [!1, T, {}];
  }
  function wu(a, i) {
    return (u) => {
      a && a(u), u.defaultPrevented || i(u);
    };
  }
  function ZS({ page: a, ...i }) {
    let { router: u } = j0(),
      s = z.useMemo(
        () => Ql(u.routes, a, u.basename),
        [u.routes, a, u.basename],
      );
    return s ? z.createElement(QS, { page: a, matches: s, ...i }) : null;
  }
  function XS(a) {
    let { manifest: i, routeModules: u } = k0(),
      [s, f] = z.useState([]);
    return (
      z.useEffect(() => {
        let o = !1;
        return (
          HS(a, i, u).then((h) => {
            o || f(h);
          }),
          () => {
            o = !0;
          }
        );
      }, [a, i, u]),
      s
    );
  }
  function QS({ page: a, matches: i, ...u }) {
    let s = Pl(),
      { manifest: f, routeModules: o } = k0(),
      { basename: h } = j0(),
      { loaderData: g, matches: v } = qS(),
      y = z.useMemo(() => o0(a, i, v, f, s, "data"), [a, i, v, f, s]),
      S = z.useMemo(() => o0(a, i, v, f, s, "assets"), [a, i, v, f, s]),
      A = z.useMemo(() => {
        if (a === s.pathname + s.search + s.hash) return [];
        let C = new Set(),
          Q = !1;
        if (
          (i.forEach((q) => {
            var P;
            let J = f.routes[q.route.id];
            !J ||
              !J.hasLoader ||
              ((!y.some((ye) => ye.route.id === q.route.id) &&
                q.route.id in g &&
                (P = o[q.route.id]) != null &&
                P.shouldRevalidate) ||
              J.hasClientLoader
                ? (Q = !0)
                : C.add(q.route.id));
          }),
          C.size === 0)
        )
          return [];
        let G = GS(a, h);
        return (
          Q &&
            C.size > 0 &&
            G.searchParams.set(
              "_routes",
              i
                .filter((q) => C.has(q.route.id))
                .map((q) => q.route.id)
                .join(","),
            ),
          [G.pathname + G.search]
        );
      }, [h, g, s, f, y, i, a, o]),
      T = z.useMemo(() => LS(S, f), [S, f]),
      U = XS(S);
    return z.createElement(
      z.Fragment,
      null,
      A.map((C) =>
        z.createElement("link", {
          key: C,
          rel: "prefetch",
          as: "fetch",
          href: C,
          ...u,
        }),
      ),
      T.map((C) =>
        z.createElement("link", {
          key: C,
          rel: "modulepreload",
          href: C,
          ...u,
        }),
      ),
      U.map(({ key: C, link: Q }) => z.createElement("link", { key: C, ...Q })),
    );
  }
  function KS(...a) {
    return (i) => {
      a.forEach((u) => {
        typeof u == "function" ? u(i) : u != null && (u.current = i);
      });
    };
  }
  var B0 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u";
  try {
    B0 && (window.__reactRouterVersion = "7.5.0");
  } catch {}
  function WS(a, i) {
    return jp({
      basename: i == null ? void 0 : i.basename,
      unstable_getContext: i == null ? void 0 : i.unstable_getContext,
      future: i == null ? void 0 : i.future,
      history: ip({ window: i == null ? void 0 : i.window }),
      hydrationData: JS(),
      routes: a,
      mapRouteProperties: bS,
      dataStrategy: i == null ? void 0 : i.dataStrategy,
      patchRoutesOnNavigation: i == null ? void 0 : i.patchRoutesOnNavigation,
      window: i == null ? void 0 : i.window,
    }).initialize();
  }
  function JS() {
    let a = window == null ? void 0 : window.__staticRouterHydrationData;
    return a && a.errors && (a = { ...a, errors: FS(a.errors) }), a;
  }
  function FS(a) {
    if (!a) return null;
    let i = Object.entries(a),
      u = {};
    for (let [s, f] of i)
      if (f && f.__type === "RouteErrorResponse")
        u[s] = new Ss(f.status, f.statusText, f.data, f.internal === !0);
      else if (f && f.__type === "Error") {
        if (f.__subType) {
          let o = window[f.__subType];
          if (typeof o == "function")
            try {
              let h = new o(f.message);
              (h.stack = ""), (u[s] = h);
            } catch {}
        }
        if (u[s] == null) {
          let o = new Error(f.message);
          (o.stack = ""), (u[s] = o);
        }
      } else u[s] = f;
    return u;
  }
  var G0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    xo = z.forwardRef(function (
      {
        onClick: i,
        discover: u = "render",
        prefetch: s = "none",
        relative: f,
        reloadDocument: o,
        replace: h,
        state: g,
        target: v,
        to: y,
        preventScrollReset: S,
        viewTransition: A,
        ...T
      },
      U,
    ) {
      let { basename: C } = z.useContext(Ga),
        Q = typeof y == "string" && G0.test(y),
        G,
        q = !1;
      if (typeof y == "string" && Q && ((G = y), B0))
        try {
          let De = new URL(window.location.href),
            Qe = y.startsWith("//") ? new URL(De.protocol + y) : new URL(y),
            ot = ya(Qe.pathname, C);
          Qe.origin === De.origin && ot != null
            ? (y = ot + Qe.search + Qe.hash)
            : (q = !0);
        } catch {
          St(
            !1,
            `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
          );
        }
      let J = uS(y, { relative: f }),
        [P, ye, E] = VS(s, T),
        he = eb(y, {
          replace: h,
          state: g,
          target: v,
          preventScrollReset: S,
          relative: f,
          viewTransition: A,
        });
      function be(De) {
        i && i(De), De.defaultPrevented || he(De);
      }
      let de = z.createElement("a", {
        ...T,
        ...E,
        href: G || J,
        onClick: q || o ? i : be,
        ref: KS(U, ye),
        target: v,
        "data-discover": !Q && u === "render" ? "true" : void 0,
      });
      return P && !Q
        ? z.createElement(
            z.Fragment,
            null,
            de,
            z.createElement(ZS, { page: J }),
          )
        : de;
    });
  xo.displayName = "Link";
  var $S = z.forwardRef(function (
    {
      "aria-current": i = "page",
      caseSensitive: u = !1,
      className: s = "",
      end: f = !1,
      style: o,
      to: h,
      viewTransition: g,
      children: v,
      ...y
    },
    S,
  ) {
    let A = Bu(h, { relative: y.relative }),
      T = Pl(),
      U = z.useContext(ju),
      { navigator: C, basename: Q } = z.useContext(Ga),
      G = U != null && ib(A) && g === !0,
      q = C.encodeLocation ? C.encodeLocation(A).pathname : A.pathname,
      J = T.pathname,
      P =
        U && U.navigation && U.navigation.location
          ? U.navigation.location.pathname
          : null;
    u ||
      ((J = J.toLowerCase()),
      (P = P ? P.toLowerCase() : null),
      (q = q.toLowerCase())),
      P && Q && (P = ya(P, Q) || P);
    const ye = q !== "/" && q.endsWith("/") ? q.length - 1 : q.length;
    let E = J === q || (!f && J.startsWith(q) && J.charAt(ye) === "/"),
      he =
        P != null &&
        (P === q || (!f && P.startsWith(q) && P.charAt(q.length) === "/")),
      be = { isActive: E, isPending: he, isTransitioning: G },
      de = E ? i : void 0,
      De;
    typeof s == "function"
      ? (De = s(be))
      : (De = [
          s,
          E ? "active" : null,
          he ? "pending" : null,
          G ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let Qe = typeof o == "function" ? o(be) : o;
    return z.createElement(
      xo,
      {
        ...y,
        "aria-current": de,
        className: De,
        ref: S,
        style: Qe,
        to: h,
        viewTransition: g,
      },
      typeof v == "function" ? v(be) : v,
    );
  });
  $S.displayName = "NavLink";
  var PS = z.forwardRef(
    (
      {
        discover: a = "render",
        fetcherKey: i,
        navigate: u,
        reloadDocument: s,
        replace: f,
        state: o,
        method: h = os,
        action: g,
        onSubmit: v,
        relative: y,
        preventScrollReset: S,
        viewTransition: A,
        ...T
      },
      U,
    ) => {
      let C = lb(),
        Q = nb(g, { relative: y }),
        G = h.toLowerCase() === "get" ? "get" : "post",
        q = typeof g == "string" && G0.test(g),
        J = (P) => {
          if ((v && v(P), P.defaultPrevented)) return;
          P.preventDefault();
          let ye = P.nativeEvent.submitter,
            E = (ye == null ? void 0 : ye.getAttribute("formmethod")) || h;
          C(ye || P.currentTarget, {
            fetcherKey: i,
            method: E,
            navigate: u,
            replace: f,
            state: o,
            relative: y,
            preventScrollReset: S,
            viewTransition: A,
          });
        };
      return z.createElement("form", {
        ref: U,
        method: G,
        action: Q,
        onSubmit: s ? v : J,
        ...T,
        "data-discover": !q && a === "render" ? "true" : void 0,
      });
    },
  );
  PS.displayName = "Form";
  function IS(a) {
    return `${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function q0(a) {
    let i = z.useContext(Tn);
    return Ne(i, IS(a)), i;
  }
  function eb(
    a,
    {
      target: i,
      replace: u,
      state: s,
      preventScrollReset: f,
      relative: o,
      viewTransition: h,
    } = {},
  ) {
    let g = H0(),
      v = Pl(),
      y = Bu(a, { relative: o });
    return z.useCallback(
      (S) => {
        if (AS(S, i)) {
          S.preventDefault();
          let A = u !== void 0 ? u : Fl(v) === Fl(y);
          g(a, {
            replace: A,
            state: s,
            preventScrollReset: f,
            relative: o,
            viewTransition: h,
          });
        }
      },
      [v, g, y, u, s, i, a, f, o, h],
    );
  }
  var tb = 0,
    ab = () => `__${String(++tb)}__`;
  function lb() {
    let { router: a } = q0("useSubmit"),
      { basename: i } = z.useContext(Ga),
      u = gS();
    return z.useCallback(
      async (s, f = {}) => {
        let {
          action: o,
          method: h,
          encType: g,
          formData: v,
          body: y,
        } = YS(s, i);
        if (f.navigate === !1) {
          let S = f.fetcherKey || ab();
          await a.fetch(S, u, f.action || o, {
            preventScrollReset: f.preventScrollReset,
            formData: v,
            body: y,
            formMethod: f.method || h,
            formEncType: f.encType || g,
            flushSync: f.flushSync,
          });
        } else
          await a.navigate(f.action || o, {
            preventScrollReset: f.preventScrollReset,
            formData: v,
            body: y,
            formMethod: f.method || h,
            formEncType: f.encType || g,
            replace: f.replace,
            state: f.state,
            fromRouteId: u,
            flushSync: f.flushSync,
            viewTransition: f.viewTransition,
          });
      },
      [a, i, u],
    );
  }
  function nb(a, { relative: i } = {}) {
    let { basename: u } = z.useContext(Ga),
      s = z.useContext(ml);
    Ne(s, "useFormAction must be used inside a RouteContext");
    let [f] = s.matches.slice(-1),
      o = { ...Bu(a || ".", { relative: i }) },
      h = Pl();
    if (a == null) {
      o.search = h.search;
      let g = new URLSearchParams(o.search),
        v = g.getAll("index");
      if (v.some((S) => S === "")) {
        g.delete("index"),
          v.filter((A) => A).forEach((A) => g.append("index", A));
        let S = g.toString();
        o.search = S ? `?${S}` : "";
      }
    }
    return (
      (!a || a === ".") &&
        f.route.index &&
        (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
      u !== "/" && (o.pathname = o.pathname === "/" ? u : ka([u, o.pathname])),
      Fl(o)
    );
  }
  function ib(a, i = {}) {
    let u = z.useContext(Do);
    Ne(
      u != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
    );
    let { basename: s } = q0("useViewTransitionState"),
      f = Bu(a, { relative: i.relative });
    if (!u.isTransitioning) return !1;
    let o = ya(u.currentLocation.pathname, s) || u.currentLocation.pathname,
      h = ya(u.nextLocation.pathname, s) || u.nextLocation.pathname;
    return ps(f.pathname, h) != null || ps(f.pathname, o) != null;
  }
  new TextEncoder(); //! moment.js
  //! version : 2.30.1
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var V0;
  function $() {
    return V0.apply(null, arguments);
  }
  function ub(a) {
    V0 = a;
  }
  function Ea(a) {
    return (
      a instanceof Array ||
      Object.prototype.toString.call(a) === "[object Array]"
    );
  }
  function En(a) {
    return a != null && Object.prototype.toString.call(a) === "[object Object]";
  }
  function je(a, i) {
    return Object.prototype.hasOwnProperty.call(a, i);
  }
  function Ao(a) {
    if (Object.getOwnPropertyNames)
      return Object.getOwnPropertyNames(a).length === 0;
    var i;
    for (i in a) if (je(a, i)) return !1;
    return !0;
  }
  function Zt(a) {
    return a === void 0;
  }
  function hl(a) {
    return (
      typeof a == "number" ||
      Object.prototype.toString.call(a) === "[object Number]"
    );
  }
  function Gu(a) {
    return (
      a instanceof Date || Object.prototype.toString.call(a) === "[object Date]"
    );
  }
  function Z0(a, i) {
    var u = [],
      s,
      f = a.length;
    for (s = 0; s < f; ++s) u.push(i(a[s], s));
    return u;
  }
  function Kl(a, i) {
    for (var u in i) je(i, u) && (a[u] = i[u]);
    return (
      je(i, "toString") && (a.toString = i.toString),
      je(i, "valueOf") && (a.valueOf = i.valueOf),
      a
    );
  }
  function qa(a, i, u, s) {
    return hv(a, i, u, s, !0).utc();
  }
  function rb() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1,
    };
  }
  function Me(a) {
    return a._pf == null && (a._pf = rb()), a._pf;
  }
  var fo;
  Array.prototype.some
    ? (fo = Array.prototype.some)
    : (fo = function (a) {
        var i = Object(this),
          u = i.length >>> 0,
          s;
        for (s = 0; s < u; s++)
          if (s in i && a.call(this, i[s], s, i)) return !0;
        return !1;
      });
  function No(a) {
    var i = null,
      u = !1,
      s = a._d && !isNaN(a._d.getTime());
    if (
      (s &&
        ((i = Me(a)),
        (u = fo.call(i.parsedDateParts, function (f) {
          return f != null;
        })),
        (s =
          i.overflow < 0 &&
          !i.empty &&
          !i.invalidEra &&
          !i.invalidMonth &&
          !i.invalidWeekday &&
          !i.weekdayMismatch &&
          !i.nullInput &&
          !i.invalidFormat &&
          !i.userInvalidated &&
          (!i.meridiem || (i.meridiem && u))),
        a._strict &&
          (s =
            s &&
            i.charsLeftOver === 0 &&
            i.unusedTokens.length === 0 &&
            i.bigHour === void 0)),
      Object.isFrozen == null || !Object.isFrozen(a))
    )
      a._isValid = s;
    else return s;
    return a._isValid;
  }
  function Rs(a) {
    var i = qa(NaN);
    return a != null ? Kl(Me(i), a) : (Me(i).userInvalidated = !0), i;
  }
  var d0 = ($.momentProperties = []),
    ao = !1;
  function zo(a, i) {
    var u,
      s,
      f,
      o = d0.length;
    if (
      (Zt(i._isAMomentObject) || (a._isAMomentObject = i._isAMomentObject),
      Zt(i._i) || (a._i = i._i),
      Zt(i._f) || (a._f = i._f),
      Zt(i._l) || (a._l = i._l),
      Zt(i._strict) || (a._strict = i._strict),
      Zt(i._tzm) || (a._tzm = i._tzm),
      Zt(i._isUTC) || (a._isUTC = i._isUTC),
      Zt(i._offset) || (a._offset = i._offset),
      Zt(i._pf) || (a._pf = Me(i)),
      Zt(i._locale) || (a._locale = i._locale),
      o > 0)
    )
      for (u = 0; u < o; u++) (s = d0[u]), (f = i[s]), Zt(f) || (a[s] = f);
    return a;
  }
  function qu(a) {
    zo(this, a),
      (this._d = new Date(a._d != null ? a._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      ao === !1 && ((ao = !0), $.updateOffset(this), (ao = !1));
  }
  function Ta(a) {
    return a instanceof qu || (a != null && a._isAMomentObject != null);
  }
  function X0(a) {
    $.suppressDeprecationWarnings === !1 &&
      typeof console < "u" &&
      console.warn &&
      console.warn("Deprecation warning: " + a);
  }
  function va(a, i) {
    var u = !0;
    return Kl(function () {
      if (($.deprecationHandler != null && $.deprecationHandler(null, a), u)) {
        var s = [],
          f,
          o,
          h,
          g = arguments.length;
        for (o = 0; o < g; o++) {
          if (((f = ""), typeof arguments[o] == "object")) {
            f +=
              `
[` +
              o +
              "] ";
            for (h in arguments[0])
              je(arguments[0], h) && (f += h + ": " + arguments[0][h] + ", ");
            f = f.slice(0, -2);
          } else f = arguments[o];
          s.push(f);
        }
        X0(
          a +
            `
Arguments: ` +
            Array.prototype.slice.call(s).join("") +
            `
` +
            new Error().stack,
        ),
          (u = !1);
      }
      return i.apply(this, arguments);
    }, i);
  }
  var h0 = {};
  function Q0(a, i) {
    $.deprecationHandler != null && $.deprecationHandler(a, i),
      h0[a] || (X0(i), (h0[a] = !0));
  }
  $.suppressDeprecationWarnings = !1;
  $.deprecationHandler = null;
  function Va(a) {
    return (
      (typeof Function < "u" && a instanceof Function) ||
      Object.prototype.toString.call(a) === "[object Function]"
    );
  }
  function sb(a) {
    var i, u;
    for (u in a)
      je(a, u) && ((i = a[u]), Va(i) ? (this[u] = i) : (this["_" + u] = i));
    (this._config = a),
      (this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
          "|" +
          /\d{1,2}/.source,
      ));
  }
  function oo(a, i) {
    var u = Kl({}, a),
      s;
    for (s in i)
      je(i, s) &&
        (En(a[s]) && En(i[s])
          ? ((u[s] = {}), Kl(u[s], a[s]), Kl(u[s], i[s]))
          : i[s] != null
            ? (u[s] = i[s])
            : delete u[s]);
    for (s in a) je(a, s) && !je(i, s) && En(a[s]) && (u[s] = Kl({}, u[s]));
    return u;
  }
  function Yo(a) {
    a != null && this.set(a);
  }
  var ho;
  Object.keys
    ? (ho = Object.keys)
    : (ho = function (a) {
        var i,
          u = [];
        for (i in a) je(a, i) && u.push(i);
        return u;
      });
  var cb = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L",
  };
  function fb(a, i, u) {
    var s = this._calendar[a] || this._calendar.sameElse;
    return Va(s) ? s.call(i, u) : s;
  }
  function Ba(a, i, u) {
    var s = "" + Math.abs(a),
      f = i - s.length,
      o = a >= 0;
    return (
      (o ? (u ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, f)).toString().substr(1) +
      s
    );
  }
  var Uo =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    ss = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    lo = {},
    mi = {};
  function oe(a, i, u, s) {
    var f = s;
    typeof s == "string" &&
      (f = function () {
        return this[s]();
      }),
      a && (mi[a] = f),
      i &&
        (mi[i[0]] = function () {
          return Ba(f.apply(this, arguments), i[1], i[2]);
        }),
      u &&
        (mi[u] = function () {
          return this.localeData().ordinal(f.apply(this, arguments), a);
        });
  }
  function ob(a) {
    return a.match(/\[[\s\S]/)
      ? a.replace(/^\[|\]$/g, "")
      : a.replace(/\\/g, "");
  }
  function db(a) {
    var i = a.match(Uo),
      u,
      s;
    for (u = 0, s = i.length; u < s; u++)
      mi[i[u]] ? (i[u] = mi[i[u]]) : (i[u] = ob(i[u]));
    return function (f) {
      var o = "",
        h;
      for (h = 0; h < s; h++) o += Va(i[h]) ? i[h].call(f, a) : i[h];
      return o;
    };
  }
  function hs(a, i) {
    return a.isValid()
      ? ((i = K0(i, a.localeData())), (lo[i] = lo[i] || db(i)), lo[i](a))
      : a.localeData().invalidDate();
  }
  function K0(a, i) {
    var u = 5;
    function s(f) {
      return i.longDateFormat(f) || f;
    }
    for (ss.lastIndex = 0; u >= 0 && ss.test(a); )
      (a = a.replace(ss, s)), (ss.lastIndex = 0), (u -= 1);
    return a;
  }
  var hb = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A",
  };
  function mb(a) {
    var i = this._longDateFormat[a],
      u = this._longDateFormat[a.toUpperCase()];
    return i || !u
      ? i
      : ((this._longDateFormat[a] = u
          .match(Uo)
          .map(function (s) {
            return s === "MMMM" || s === "MM" || s === "DD" || s === "dddd"
              ? s.slice(1)
              : s;
          })
          .join("")),
        this._longDateFormat[a]);
  }
  var yb = "Invalid date";
  function vb() {
    return this._invalidDate;
  }
  var gb = "%d",
    pb = /\d{1,2}/;
  function Sb(a) {
    return this._ordinal.replace("%d", a);
  }
  var bb = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  };
  function _b(a, i, u, s) {
    var f = this._relativeTime[u];
    return Va(f) ? f(a, i, u, s) : f.replace(/%d/i, a);
  }
  function Mb(a, i) {
    var u = this._relativeTime[a > 0 ? "future" : "past"];
    return Va(u) ? u(i) : u.replace(/%s/i, i);
  }
  var m0 = {
    D: "date",
    dates: "date",
    date: "date",
    d: "day",
    days: "day",
    day: "day",
    e: "weekday",
    weekdays: "weekday",
    weekday: "weekday",
    E: "isoWeekday",
    isoweekdays: "isoWeekday",
    isoweekday: "isoWeekday",
    DDD: "dayOfYear",
    dayofyears: "dayOfYear",
    dayofyear: "dayOfYear",
    h: "hour",
    hours: "hour",
    hour: "hour",
    ms: "millisecond",
    milliseconds: "millisecond",
    millisecond: "millisecond",
    m: "minute",
    minutes: "minute",
    minute: "minute",
    M: "month",
    months: "month",
    month: "month",
    Q: "quarter",
    quarters: "quarter",
    quarter: "quarter",
    s: "second",
    seconds: "second",
    second: "second",
    gg: "weekYear",
    weekyears: "weekYear",
    weekyear: "weekYear",
    GG: "isoWeekYear",
    isoweekyears: "isoWeekYear",
    isoweekyear: "isoWeekYear",
    w: "week",
    weeks: "week",
    week: "week",
    W: "isoWeek",
    isoweeks: "isoWeek",
    isoweek: "isoWeek",
    y: "year",
    years: "year",
    year: "year",
  };
  function ga(a) {
    return typeof a == "string" ? m0[a] || m0[a.toLowerCase()] : void 0;
  }
  function Co(a) {
    var i = {},
      u,
      s;
    for (s in a) je(a, s) && ((u = ga(s)), u && (i[u] = a[s]));
    return i;
  }
  var Db = {
    date: 9,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    dayOfYear: 4,
    hour: 13,
    millisecond: 16,
    minute: 14,
    month: 8,
    quarter: 7,
    second: 15,
    weekYear: 1,
    isoWeekYear: 1,
    week: 5,
    isoWeek: 5,
    year: 1,
  };
  function Eb(a) {
    var i = [],
      u;
    for (u in a) je(a, u) && i.push({ unit: u, priority: Db[u] });
    return (
      i.sort(function (s, f) {
        return s.priority - f.priority;
      }),
      i
    );
  }
  var W0 = /\d/,
    It = /\d\d/,
    J0 = /\d{3}/,
    Ho = /\d{4}/,
    Os = /[+-]?\d{6}/,
    nt = /\d\d?/,
    F0 = /\d\d\d\d?/,
    $0 = /\d\d\d\d\d\d?/,
    xs = /\d{1,3}/,
    Lo = /\d{1,4}/,
    As = /[+-]?\d{1,6}/,
    gi = /\d+/,
    Ns = /[+-]?\d+/,
    Tb = /Z|[+-]\d\d:?\d\d/gi,
    zs = /Z|[+-]\d\d(?::?\d\d)?/gi,
    wb = /[+-]?\d+(\.\d{1,3})?/,
    Vu =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    pi = /^[1-9]\d?/,
    jo = /^([1-9]\d|\d)/,
    bs;
  bs = {};
  function ee(a, i, u) {
    bs[a] = Va(i)
      ? i
      : function (s, f) {
          return s && u ? u : i;
        };
  }
  function Rb(a, i) {
    return je(bs, a) ? bs[a](i._strict, i._locale) : new RegExp(Ob(a));
  }
  function Ob(a) {
    return ol(
      a
        .replace("\\", "")
        .replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function (i, u, s, f, o) {
            return u || s || f || o;
          },
        ),
    );
  }
  function ol(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function ma(a) {
    return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
  }
  function Ye(a) {
    var i = +a,
      u = 0;
    return i !== 0 && isFinite(i) && (u = ma(i)), u;
  }
  var mo = {};
  function Fe(a, i) {
    var u,
      s = i,
      f;
    for (
      typeof a == "string" && (a = [a]),
        hl(i) &&
          (s = function (o, h) {
            h[i] = Ye(o);
          }),
        f = a.length,
        u = 0;
      u < f;
      u++
    )
      mo[a[u]] = s;
  }
  function Zu(a, i) {
    Fe(a, function (u, s, f, o) {
      (f._w = f._w || {}), i(u, f._w, f, o);
    });
  }
  function xb(a, i, u) {
    i != null && je(mo, a) && mo[a](i, u._a, u, a);
  }
  function Ys(a) {
    return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
  }
  var Ut = 0,
    cl = 1,
    ja = 2,
    Mt = 3,
    Da = 4,
    fl = 5,
    Dn = 6,
    Ab = 7,
    Nb = 8;
  oe("Y", 0, 0, function () {
    var a = this.year();
    return a <= 9999 ? Ba(a, 4) : "+" + a;
  });
  oe(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  });
  oe(0, ["YYYY", 4], 0, "year");
  oe(0, ["YYYYY", 5], 0, "year");
  oe(0, ["YYYYYY", 6, !0], 0, "year");
  ee("Y", Ns);
  ee("YY", nt, It);
  ee("YYYY", Lo, Ho);
  ee("YYYYY", As, Os);
  ee("YYYYYY", As, Os);
  Fe(["YYYYY", "YYYYYY"], Ut);
  Fe("YYYY", function (a, i) {
    i[Ut] = a.length === 2 ? $.parseTwoDigitYear(a) : Ye(a);
  });
  Fe("YY", function (a, i) {
    i[Ut] = $.parseTwoDigitYear(a);
  });
  Fe("Y", function (a, i) {
    i[Ut] = parseInt(a, 10);
  });
  function Nu(a) {
    return Ys(a) ? 366 : 365;
  }
  $.parseTwoDigitYear = function (a) {
    return Ye(a) + (Ye(a) > 68 ? 1900 : 2e3);
  };
  var P0 = Si("FullYear", !0);
  function zb() {
    return Ys(this.year());
  }
  function Si(a, i) {
    return function (u) {
      return u != null
        ? (I0(this, a, u), $.updateOffset(this, i), this)
        : Uu(this, a);
    };
  }
  function Uu(a, i) {
    if (!a.isValid()) return NaN;
    var u = a._d,
      s = a._isUTC;
    switch (i) {
      case "Milliseconds":
        return s ? u.getUTCMilliseconds() : u.getMilliseconds();
      case "Seconds":
        return s ? u.getUTCSeconds() : u.getSeconds();
      case "Minutes":
        return s ? u.getUTCMinutes() : u.getMinutes();
      case "Hours":
        return s ? u.getUTCHours() : u.getHours();
      case "Date":
        return s ? u.getUTCDate() : u.getDate();
      case "Day":
        return s ? u.getUTCDay() : u.getDay();
      case "Month":
        return s ? u.getUTCMonth() : u.getMonth();
      case "FullYear":
        return s ? u.getUTCFullYear() : u.getFullYear();
      default:
        return NaN;
    }
  }
  function I0(a, i, u) {
    var s, f, o, h, g;
    if (!(!a.isValid() || isNaN(u))) {
      switch (((s = a._d), (f = a._isUTC), i)) {
        case "Milliseconds":
          return void (f ? s.setUTCMilliseconds(u) : s.setMilliseconds(u));
        case "Seconds":
          return void (f ? s.setUTCSeconds(u) : s.setSeconds(u));
        case "Minutes":
          return void (f ? s.setUTCMinutes(u) : s.setMinutes(u));
        case "Hours":
          return void (f ? s.setUTCHours(u) : s.setHours(u));
        case "Date":
          return void (f ? s.setUTCDate(u) : s.setDate(u));
        case "FullYear":
          break;
        default:
          return;
      }
      (o = u),
        (h = a.month()),
        (g = a.date()),
        (g = g === 29 && h === 1 && !Ys(o) ? 28 : g),
        f ? s.setUTCFullYear(o, h, g) : s.setFullYear(o, h, g);
    }
  }
  function Yb(a) {
    return (a = ga(a)), Va(this[a]) ? this[a]() : this;
  }
  function Ub(a, i) {
    if (typeof a == "object") {
      a = Co(a);
      var u = Eb(a),
        s,
        f = u.length;
      for (s = 0; s < f; s++) this[u[s].unit](a[u[s].unit]);
    } else if (((a = ga(a)), Va(this[a]))) return this[a](i);
    return this;
  }
  function Cb(a, i) {
    return ((a % i) + i) % i;
  }
  var vt;
  Array.prototype.indexOf
    ? (vt = Array.prototype.indexOf)
    : (vt = function (a) {
        var i;
        for (i = 0; i < this.length; ++i) if (this[i] === a) return i;
        return -1;
      });
  function ko(a, i) {
    if (isNaN(a) || isNaN(i)) return NaN;
    var u = Cb(i, 12);
    return (
      (a += (i - u) / 12), u === 1 ? (Ys(a) ? 29 : 28) : 31 - ((u % 7) % 2)
    );
  }
  oe("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  });
  oe("MMM", 0, 0, function (a) {
    return this.localeData().monthsShort(this, a);
  });
  oe("MMMM", 0, 0, function (a) {
    return this.localeData().months(this, a);
  });
  ee("M", nt, pi);
  ee("MM", nt, It);
  ee("MMM", function (a, i) {
    return i.monthsShortRegex(a);
  });
  ee("MMMM", function (a, i) {
    return i.monthsRegex(a);
  });
  Fe(["M", "MM"], function (a, i) {
    i[cl] = Ye(a) - 1;
  });
  Fe(["MMM", "MMMM"], function (a, i, u, s) {
    var f = u._locale.monthsParse(a, s, u._strict);
    f != null ? (i[cl] = f) : (Me(u).invalidMonth = a);
  });
  var Hb =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_",
      ),
    ev = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    tv = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    Lb = Vu,
    jb = Vu;
  function kb(a, i) {
    return a
      ? Ea(this._months)
        ? this._months[a.month()]
        : this._months[
            (this._months.isFormat || tv).test(i) ? "format" : "standalone"
          ][a.month()]
      : Ea(this._months)
        ? this._months
        : this._months.standalone;
  }
  function Bb(a, i) {
    return a
      ? Ea(this._monthsShort)
        ? this._monthsShort[a.month()]
        : this._monthsShort[tv.test(i) ? "format" : "standalone"][a.month()]
      : Ea(this._monthsShort)
        ? this._monthsShort
        : this._monthsShort.standalone;
  }
  function Gb(a, i, u) {
    var s,
      f,
      o,
      h = a.toLocaleLowerCase();
    if (!this._monthsParse)
      for (
        this._monthsParse = [],
          this._longMonthsParse = [],
          this._shortMonthsParse = [],
          s = 0;
        s < 12;
        ++s
      )
        (o = qa([2e3, s])),
          (this._shortMonthsParse[s] = this.monthsShort(
            o,
            "",
          ).toLocaleLowerCase()),
          (this._longMonthsParse[s] = this.months(o, "").toLocaleLowerCase());
    return u
      ? i === "MMM"
        ? ((f = vt.call(this._shortMonthsParse, h)), f !== -1 ? f : null)
        : ((f = vt.call(this._longMonthsParse, h)), f !== -1 ? f : null)
      : i === "MMM"
        ? ((f = vt.call(this._shortMonthsParse, h)),
          f !== -1
            ? f
            : ((f = vt.call(this._longMonthsParse, h)), f !== -1 ? f : null))
        : ((f = vt.call(this._longMonthsParse, h)),
          f !== -1
            ? f
            : ((f = vt.call(this._shortMonthsParse, h)), f !== -1 ? f : null));
  }
  function qb(a, i, u) {
    var s, f, o;
    if (this._monthsParseExact) return Gb.call(this, a, i, u);
    for (
      this._monthsParse ||
        ((this._monthsParse = []),
        (this._longMonthsParse = []),
        (this._shortMonthsParse = [])),
        s = 0;
      s < 12;
      s++
    ) {
      if (
        ((f = qa([2e3, s])),
        u &&
          !this._longMonthsParse[s] &&
          ((this._longMonthsParse[s] = new RegExp(
            "^" + this.months(f, "").replace(".", "") + "$",
            "i",
          )),
          (this._shortMonthsParse[s] = new RegExp(
            "^" + this.monthsShort(f, "").replace(".", "") + "$",
            "i",
          ))),
        !u &&
          !this._monthsParse[s] &&
          ((o = "^" + this.months(f, "") + "|^" + this.monthsShort(f, "")),
          (this._monthsParse[s] = new RegExp(o.replace(".", ""), "i"))),
        u && i === "MMMM" && this._longMonthsParse[s].test(a))
      )
        return s;
      if (u && i === "MMM" && this._shortMonthsParse[s].test(a)) return s;
      if (!u && this._monthsParse[s].test(a)) return s;
    }
  }
  function av(a, i) {
    if (!a.isValid()) return a;
    if (typeof i == "string") {
      if (/^\d+$/.test(i)) i = Ye(i);
      else if (((i = a.localeData().monthsParse(i)), !hl(i))) return a;
    }
    var u = i,
      s = a.date();
    return (
      (s = s < 29 ? s : Math.min(s, ko(a.year(), u))),
      a._isUTC ? a._d.setUTCMonth(u, s) : a._d.setMonth(u, s),
      a
    );
  }
  function lv(a) {
    return a != null
      ? (av(this, a), $.updateOffset(this, !0), this)
      : Uu(this, "Month");
  }
  function Vb() {
    return ko(this.year(), this.month());
  }
  function Zb(a) {
    return this._monthsParseExact
      ? (je(this, "_monthsRegex") || nv.call(this),
        a ? this._monthsShortStrictRegex : this._monthsShortRegex)
      : (je(this, "_monthsShortRegex") || (this._monthsShortRegex = Lb),
        this._monthsShortStrictRegex && a
          ? this._monthsShortStrictRegex
          : this._monthsShortRegex);
  }
  function Xb(a) {
    return this._monthsParseExact
      ? (je(this, "_monthsRegex") || nv.call(this),
        a ? this._monthsStrictRegex : this._monthsRegex)
      : (je(this, "_monthsRegex") || (this._monthsRegex = jb),
        this._monthsStrictRegex && a
          ? this._monthsStrictRegex
          : this._monthsRegex);
  }
  function nv() {
    function a(v, y) {
      return y.length - v.length;
    }
    var i = [],
      u = [],
      s = [],
      f,
      o,
      h,
      g;
    for (f = 0; f < 12; f++)
      (o = qa([2e3, f])),
        (h = ol(this.monthsShort(o, ""))),
        (g = ol(this.months(o, ""))),
        i.push(h),
        u.push(g),
        s.push(g),
        s.push(h);
    i.sort(a),
      u.sort(a),
      s.sort(a),
      (this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + u.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + i.join("|") + ")",
        "i",
      ));
  }
  function Qb(a, i, u, s, f, o, h) {
    var g;
    return (
      a < 100 && a >= 0
        ? ((g = new Date(a + 400, i, u, s, f, o, h)),
          isFinite(g.getFullYear()) && g.setFullYear(a))
        : (g = new Date(a, i, u, s, f, o, h)),
      g
    );
  }
  function Cu(a) {
    var i, u;
    return (
      a < 100 && a >= 0
        ? ((u = Array.prototype.slice.call(arguments)),
          (u[0] = a + 400),
          (i = new Date(Date.UTC.apply(null, u))),
          isFinite(i.getUTCFullYear()) && i.setUTCFullYear(a))
        : (i = new Date(Date.UTC.apply(null, arguments))),
      i
    );
  }
  function _s(a, i, u) {
    var s = 7 + i - u,
      f = (7 + Cu(a, 0, s).getUTCDay() - i) % 7;
    return -f + s - 1;
  }
  function iv(a, i, u, s, f) {
    var o = (7 + u - s) % 7,
      h = _s(a, s, f),
      g = 1 + 7 * (i - 1) + o + h,
      v,
      y;
    return (
      g <= 0
        ? ((v = a - 1), (y = Nu(v) + g))
        : g > Nu(a)
          ? ((v = a + 1), (y = g - Nu(a)))
          : ((v = a), (y = g)),
      { year: v, dayOfYear: y }
    );
  }
  function Hu(a, i, u) {
    var s = _s(a.year(), i, u),
      f = Math.floor((a.dayOfYear() - s - 1) / 7) + 1,
      o,
      h;
    return (
      f < 1
        ? ((h = a.year() - 1), (o = f + dl(h, i, u)))
        : f > dl(a.year(), i, u)
          ? ((o = f - dl(a.year(), i, u)), (h = a.year() + 1))
          : ((h = a.year()), (o = f)),
      { week: o, year: h }
    );
  }
  function dl(a, i, u) {
    var s = _s(a, i, u),
      f = _s(a + 1, i, u);
    return (Nu(a) - s + f) / 7;
  }
  oe("w", ["ww", 2], "wo", "week");
  oe("W", ["WW", 2], "Wo", "isoWeek");
  ee("w", nt, pi);
  ee("ww", nt, It);
  ee("W", nt, pi);
  ee("WW", nt, It);
  Zu(["w", "ww", "W", "WW"], function (a, i, u, s) {
    i[s.substr(0, 1)] = Ye(a);
  });
  function Kb(a) {
    return Hu(a, this._week.dow, this._week.doy).week;
  }
  var Wb = { dow: 0, doy: 6 };
  function Jb() {
    return this._week.dow;
  }
  function Fb() {
    return this._week.doy;
  }
  function $b(a) {
    var i = this.localeData().week(this);
    return a == null ? i : this.add((a - i) * 7, "d");
  }
  function Pb(a) {
    var i = Hu(this, 1, 4).week;
    return a == null ? i : this.add((a - i) * 7, "d");
  }
  oe("d", 0, "do", "day");
  oe("dd", 0, 0, function (a) {
    return this.localeData().weekdaysMin(this, a);
  });
  oe("ddd", 0, 0, function (a) {
    return this.localeData().weekdaysShort(this, a);
  });
  oe("dddd", 0, 0, function (a) {
    return this.localeData().weekdays(this, a);
  });
  oe("e", 0, 0, "weekday");
  oe("E", 0, 0, "isoWeekday");
  ee("d", nt);
  ee("e", nt);
  ee("E", nt);
  ee("dd", function (a, i) {
    return i.weekdaysMinRegex(a);
  });
  ee("ddd", function (a, i) {
    return i.weekdaysShortRegex(a);
  });
  ee("dddd", function (a, i) {
    return i.weekdaysRegex(a);
  });
  Zu(["dd", "ddd", "dddd"], function (a, i, u, s) {
    var f = u._locale.weekdaysParse(a, s, u._strict);
    f != null ? (i.d = f) : (Me(u).invalidWeekday = a);
  });
  Zu(["d", "e", "E"], function (a, i, u, s) {
    i[s] = Ye(a);
  });
  function Ib(a, i) {
    return typeof a != "string"
      ? a
      : isNaN(a)
        ? ((a = i.weekdaysParse(a)), typeof a == "number" ? a : null)
        : parseInt(a, 10);
  }
  function e_(a, i) {
    return typeof a == "string"
      ? i.weekdaysParse(a) % 7 || 7
      : isNaN(a)
        ? null
        : a;
  }
  function Bo(a, i) {
    return a.slice(i, 7).concat(a.slice(0, i));
  }
  var t_ = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_",
    ),
    uv = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    a_ = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    l_ = Vu,
    n_ = Vu,
    i_ = Vu;
  function u_(a, i) {
    var u = Ea(this._weekdays)
      ? this._weekdays
      : this._weekdays[
          a && a !== !0 && this._weekdays.isFormat.test(i)
            ? "format"
            : "standalone"
        ];
    return a === !0 ? Bo(u, this._week.dow) : a ? u[a.day()] : u;
  }
  function r_(a) {
    return a === !0
      ? Bo(this._weekdaysShort, this._week.dow)
      : a
        ? this._weekdaysShort[a.day()]
        : this._weekdaysShort;
  }
  function s_(a) {
    return a === !0
      ? Bo(this._weekdaysMin, this._week.dow)
      : a
        ? this._weekdaysMin[a.day()]
        : this._weekdaysMin;
  }
  function c_(a, i, u) {
    var s,
      f,
      o,
      h = a.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [],
          this._shortWeekdaysParse = [],
          this._minWeekdaysParse = [],
          s = 0;
        s < 7;
        ++s
      )
        (o = qa([2e3, 1]).day(s)),
          (this._minWeekdaysParse[s] = this.weekdaysMin(
            o,
            "",
          ).toLocaleLowerCase()),
          (this._shortWeekdaysParse[s] = this.weekdaysShort(
            o,
            "",
          ).toLocaleLowerCase()),
          (this._weekdaysParse[s] = this.weekdays(o, "").toLocaleLowerCase());
    return u
      ? i === "dddd"
        ? ((f = vt.call(this._weekdaysParse, h)), f !== -1 ? f : null)
        : i === "ddd"
          ? ((f = vt.call(this._shortWeekdaysParse, h)), f !== -1 ? f : null)
          : ((f = vt.call(this._minWeekdaysParse, h)), f !== -1 ? f : null)
      : i === "dddd"
        ? ((f = vt.call(this._weekdaysParse, h)),
          f !== -1 || ((f = vt.call(this._shortWeekdaysParse, h)), f !== -1)
            ? f
            : ((f = vt.call(this._minWeekdaysParse, h)), f !== -1 ? f : null))
        : i === "ddd"
          ? ((f = vt.call(this._shortWeekdaysParse, h)),
            f !== -1 || ((f = vt.call(this._weekdaysParse, h)), f !== -1)
              ? f
              : ((f = vt.call(this._minWeekdaysParse, h)), f !== -1 ? f : null))
          : ((f = vt.call(this._minWeekdaysParse, h)),
            f !== -1 || ((f = vt.call(this._weekdaysParse, h)), f !== -1)
              ? f
              : ((f = vt.call(this._shortWeekdaysParse, h)),
                f !== -1 ? f : null));
  }
  function f_(a, i, u) {
    var s, f, o;
    if (this._weekdaysParseExact) return c_.call(this, a, i, u);
    for (
      this._weekdaysParse ||
        ((this._weekdaysParse = []),
        (this._minWeekdaysParse = []),
        (this._shortWeekdaysParse = []),
        (this._fullWeekdaysParse = [])),
        s = 0;
      s < 7;
      s++
    ) {
      if (
        ((f = qa([2e3, 1]).day(s)),
        u &&
          !this._fullWeekdaysParse[s] &&
          ((this._fullWeekdaysParse[s] = new RegExp(
            "^" + this.weekdays(f, "").replace(".", "\\.?") + "$",
            "i",
          )),
          (this._shortWeekdaysParse[s] = new RegExp(
            "^" + this.weekdaysShort(f, "").replace(".", "\\.?") + "$",
            "i",
          )),
          (this._minWeekdaysParse[s] = new RegExp(
            "^" + this.weekdaysMin(f, "").replace(".", "\\.?") + "$",
            "i",
          ))),
        this._weekdaysParse[s] ||
          ((o =
            "^" +
            this.weekdays(f, "") +
            "|^" +
            this.weekdaysShort(f, "") +
            "|^" +
            this.weekdaysMin(f, "")),
          (this._weekdaysParse[s] = new RegExp(o.replace(".", ""), "i"))),
        u && i === "dddd" && this._fullWeekdaysParse[s].test(a))
      )
        return s;
      if (u && i === "ddd" && this._shortWeekdaysParse[s].test(a)) return s;
      if (u && i === "dd" && this._minWeekdaysParse[s].test(a)) return s;
      if (!u && this._weekdaysParse[s].test(a)) return s;
    }
  }
  function o_(a) {
    if (!this.isValid()) return a != null ? this : NaN;
    var i = Uu(this, "Day");
    return a != null
      ? ((a = Ib(a, this.localeData())), this.add(a - i, "d"))
      : i;
  }
  function d_(a) {
    if (!this.isValid()) return a != null ? this : NaN;
    var i = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return a == null ? i : this.add(a - i, "d");
  }
  function h_(a) {
    if (!this.isValid()) return a != null ? this : NaN;
    if (a != null) {
      var i = e_(a, this.localeData());
      return this.day(this.day() % 7 ? i : i - 7);
    } else return this.day() || 7;
  }
  function m_(a) {
    return this._weekdaysParseExact
      ? (je(this, "_weekdaysRegex") || Go.call(this),
        a ? this._weekdaysStrictRegex : this._weekdaysRegex)
      : (je(this, "_weekdaysRegex") || (this._weekdaysRegex = l_),
        this._weekdaysStrictRegex && a
          ? this._weekdaysStrictRegex
          : this._weekdaysRegex);
  }
  function y_(a) {
    return this._weekdaysParseExact
      ? (je(this, "_weekdaysRegex") || Go.call(this),
        a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      : (je(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = n_),
        this._weekdaysShortStrictRegex && a
          ? this._weekdaysShortStrictRegex
          : this._weekdaysShortRegex);
  }
  function v_(a) {
    return this._weekdaysParseExact
      ? (je(this, "_weekdaysRegex") || Go.call(this),
        a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      : (je(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = i_),
        this._weekdaysMinStrictRegex && a
          ? this._weekdaysMinStrictRegex
          : this._weekdaysMinRegex);
  }
  function Go() {
    function a(S, A) {
      return A.length - S.length;
    }
    var i = [],
      u = [],
      s = [],
      f = [],
      o,
      h,
      g,
      v,
      y;
    for (o = 0; o < 7; o++)
      (h = qa([2e3, 1]).day(o)),
        (g = ol(this.weekdaysMin(h, ""))),
        (v = ol(this.weekdaysShort(h, ""))),
        (y = ol(this.weekdays(h, ""))),
        i.push(g),
        u.push(v),
        s.push(y),
        f.push(g),
        f.push(v),
        f.push(y);
    i.sort(a),
      u.sort(a),
      s.sort(a),
      f.sort(a),
      (this._weekdaysRegex = new RegExp("^(" + f.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + s.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + u.join("|") + ")",
        "i",
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + i.join("|") + ")",
        "i",
      ));
  }
  function qo() {
    return this.hours() % 12 || 12;
  }
  function g_() {
    return this.hours() || 24;
  }
  oe("H", ["HH", 2], 0, "hour");
  oe("h", ["hh", 2], 0, qo);
  oe("k", ["kk", 2], 0, g_);
  oe("hmm", 0, 0, function () {
    return "" + qo.apply(this) + Ba(this.minutes(), 2);
  });
  oe("hmmss", 0, 0, function () {
    return "" + qo.apply(this) + Ba(this.minutes(), 2) + Ba(this.seconds(), 2);
  });
  oe("Hmm", 0, 0, function () {
    return "" + this.hours() + Ba(this.minutes(), 2);
  });
  oe("Hmmss", 0, 0, function () {
    return "" + this.hours() + Ba(this.minutes(), 2) + Ba(this.seconds(), 2);
  });
  function rv(a, i) {
    oe(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), i);
    });
  }
  rv("a", !0);
  rv("A", !1);
  function sv(a, i) {
    return i._meridiemParse;
  }
  ee("a", sv);
  ee("A", sv);
  ee("H", nt, jo);
  ee("h", nt, pi);
  ee("k", nt, pi);
  ee("HH", nt, It);
  ee("hh", nt, It);
  ee("kk", nt, It);
  ee("hmm", F0);
  ee("hmmss", $0);
  ee("Hmm", F0);
  ee("Hmmss", $0);
  Fe(["H", "HH"], Mt);
  Fe(["k", "kk"], function (a, i, u) {
    var s = Ye(a);
    i[Mt] = s === 24 ? 0 : s;
  });
  Fe(["a", "A"], function (a, i, u) {
    (u._isPm = u._locale.isPM(a)), (u._meridiem = a);
  });
  Fe(["h", "hh"], function (a, i, u) {
    (i[Mt] = Ye(a)), (Me(u).bigHour = !0);
  });
  Fe("hmm", function (a, i, u) {
    var s = a.length - 2;
    (i[Mt] = Ye(a.substr(0, s))),
      (i[Da] = Ye(a.substr(s))),
      (Me(u).bigHour = !0);
  });
  Fe("hmmss", function (a, i, u) {
    var s = a.length - 4,
      f = a.length - 2;
    (i[Mt] = Ye(a.substr(0, s))),
      (i[Da] = Ye(a.substr(s, 2))),
      (i[fl] = Ye(a.substr(f))),
      (Me(u).bigHour = !0);
  });
  Fe("Hmm", function (a, i, u) {
    var s = a.length - 2;
    (i[Mt] = Ye(a.substr(0, s))), (i[Da] = Ye(a.substr(s)));
  });
  Fe("Hmmss", function (a, i, u) {
    var s = a.length - 4,
      f = a.length - 2;
    (i[Mt] = Ye(a.substr(0, s))),
      (i[Da] = Ye(a.substr(s, 2))),
      (i[fl] = Ye(a.substr(f)));
  });
  function p_(a) {
    return (a + "").toLowerCase().charAt(0) === "p";
  }
  var S_ = /[ap]\.?m?\.?/i,
    b_ = Si("Hours", !0);
  function __(a, i, u) {
    return a > 11 ? (u ? "pm" : "PM") : u ? "am" : "AM";
  }
  var cv = {
      calendar: cb,
      longDateFormat: hb,
      invalidDate: yb,
      ordinal: gb,
      dayOfMonthOrdinalParse: pb,
      relativeTime: bb,
      months: Hb,
      monthsShort: ev,
      week: Wb,
      weekdays: t_,
      weekdaysMin: a_,
      weekdaysShort: uv,
      meridiemParse: S_,
    },
    rt = {},
    Ru = {},
    Lu;
  function M_(a, i) {
    var u,
      s = Math.min(a.length, i.length);
    for (u = 0; u < s; u += 1) if (a[u] !== i[u]) return u;
    return s;
  }
  function y0(a) {
    return a && a.toLowerCase().replace("_", "-");
  }
  function D_(a) {
    for (var i = 0, u, s, f, o; i < a.length; ) {
      for (
        o = y0(a[i]).split("-"),
          u = o.length,
          s = y0(a[i + 1]),
          s = s ? s.split("-") : null;
        u > 0;

      ) {
        if (((f = Us(o.slice(0, u).join("-"))), f)) return f;
        if (s && s.length >= u && M_(o, s) >= u - 1) break;
        u--;
      }
      i++;
    }
    return Lu;
  }
  function E_(a) {
    return !!(a && a.match("^[^/\\\\]*$"));
  }
  function Us(a) {
    var i = null,
      u;
    if (rt[a] === void 0 && typeof vs < "u" && vs && vs.exports && E_(a))
      try {
        (i = Lu._abbr), (u = require), u("./locale/" + a), Jl(i);
      } catch {
        rt[a] = null;
      }
    return rt[a];
  }
  function Jl(a, i) {
    var u;
    return (
      a &&
        (Zt(i) ? (u = yl(a)) : (u = Vo(a, i)),
        u
          ? (Lu = u)
          : typeof console < "u" &&
            console.warn &&
            console.warn(
              "Locale " + a + " not found. Did you forget to load it?",
            )),
      Lu._abbr
    );
  }
  function Vo(a, i) {
    if (i !== null) {
      var u,
        s = cv;
      if (((i.abbr = a), rt[a] != null))
        Q0(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.",
        ),
          (s = rt[a]._config);
      else if (i.parentLocale != null)
        if (rt[i.parentLocale] != null) s = rt[i.parentLocale]._config;
        else if (((u = Us(i.parentLocale)), u != null)) s = u._config;
        else
          return (
            Ru[i.parentLocale] || (Ru[i.parentLocale] = []),
            Ru[i.parentLocale].push({ name: a, config: i }),
            null
          );
      return (
        (rt[a] = new Yo(oo(s, i))),
        Ru[a] &&
          Ru[a].forEach(function (f) {
            Vo(f.name, f.config);
          }),
        Jl(a),
        rt[a]
      );
    } else return delete rt[a], null;
  }
  function T_(a, i) {
    if (i != null) {
      var u,
        s,
        f = cv;
      rt[a] != null && rt[a].parentLocale != null
        ? rt[a].set(oo(rt[a]._config, i))
        : ((s = Us(a)),
          s != null && (f = s._config),
          (i = oo(f, i)),
          s == null && (i.abbr = a),
          (u = new Yo(i)),
          (u.parentLocale = rt[a]),
          (rt[a] = u)),
        Jl(a);
    } else
      rt[a] != null &&
        (rt[a].parentLocale != null
          ? ((rt[a] = rt[a].parentLocale), a === Jl() && Jl(a))
          : rt[a] != null && delete rt[a]);
    return rt[a];
  }
  function yl(a) {
    var i;
    if ((a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a))
      return Lu;
    if (!Ea(a)) {
      if (((i = Us(a)), i)) return i;
      a = [a];
    }
    return D_(a);
  }
  function w_() {
    return ho(rt);
  }
  function Zo(a) {
    var i,
      u = a._a;
    return (
      u &&
        Me(a).overflow === -2 &&
        ((i =
          u[cl] < 0 || u[cl] > 11
            ? cl
            : u[ja] < 1 || u[ja] > ko(u[Ut], u[cl])
              ? ja
              : u[Mt] < 0 ||
                  u[Mt] > 24 ||
                  (u[Mt] === 24 && (u[Da] !== 0 || u[fl] !== 0 || u[Dn] !== 0))
                ? Mt
                : u[Da] < 0 || u[Da] > 59
                  ? Da
                  : u[fl] < 0 || u[fl] > 59
                    ? fl
                    : u[Dn] < 0 || u[Dn] > 999
                      ? Dn
                      : -1),
        Me(a)._overflowDayOfYear && (i < Ut || i > ja) && (i = ja),
        Me(a)._overflowWeeks && i === -1 && (i = Ab),
        Me(a)._overflowWeekday && i === -1 && (i = Nb),
        (Me(a).overflow = i)),
      a
    );
  }
  var R_ =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    O_ =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    x_ = /Z|[+-]\d\d(?::?\d\d)?/,
    cs = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
      ["YYYYMM", /\d{6}/, !1],
      ["YYYY", /\d{4}/, !1],
    ],
    no = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/],
    ],
    A_ = /^\/?Date\((-?\d+)/i,
    N_ =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    z_ = {
      UT: 0,
      GMT: 0,
      EDT: -4 * 60,
      EST: -5 * 60,
      CDT: -5 * 60,
      CST: -6 * 60,
      MDT: -6 * 60,
      MST: -7 * 60,
      PDT: -7 * 60,
      PST: -8 * 60,
    };
  function fv(a) {
    var i,
      u,
      s = a._i,
      f = R_.exec(s) || O_.exec(s),
      o,
      h,
      g,
      v,
      y = cs.length,
      S = no.length;
    if (f) {
      for (Me(a).iso = !0, i = 0, u = y; i < u; i++)
        if (cs[i][1].exec(f[1])) {
          (h = cs[i][0]), (o = cs[i][2] !== !1);
          break;
        }
      if (h == null) {
        a._isValid = !1;
        return;
      }
      if (f[3]) {
        for (i = 0, u = S; i < u; i++)
          if (no[i][1].exec(f[3])) {
            g = (f[2] || " ") + no[i][0];
            break;
          }
        if (g == null) {
          a._isValid = !1;
          return;
        }
      }
      if (!o && g != null) {
        a._isValid = !1;
        return;
      }
      if (f[4])
        if (x_.exec(f[4])) v = "Z";
        else {
          a._isValid = !1;
          return;
        }
      (a._f = h + (g || "") + (v || "")), Qo(a);
    } else a._isValid = !1;
  }
  function Y_(a, i, u, s, f, o) {
    var h = [
      U_(a),
      ev.indexOf(i),
      parseInt(u, 10),
      parseInt(s, 10),
      parseInt(f, 10),
    ];
    return o && h.push(parseInt(o, 10)), h;
  }
  function U_(a) {
    var i = parseInt(a, 10);
    return i <= 49 ? 2e3 + i : i <= 999 ? 1900 + i : i;
  }
  function C_(a) {
    return a
      .replace(/\([^()]*\)|[\n\t]/g, " ")
      .replace(/(\s\s+)/g, " ")
      .replace(/^\s\s*/, "")
      .replace(/\s\s*$/, "");
  }
  function H_(a, i, u) {
    if (a) {
      var s = uv.indexOf(a),
        f = new Date(i[0], i[1], i[2]).getDay();
      if (s !== f) return (Me(u).weekdayMismatch = !0), (u._isValid = !1), !1;
    }
    return !0;
  }
  function L_(a, i, u) {
    if (a) return z_[a];
    if (i) return 0;
    var s = parseInt(u, 10),
      f = s % 100,
      o = (s - f) / 100;
    return o * 60 + f;
  }
  function ov(a) {
    var i = N_.exec(C_(a._i)),
      u;
    if (i) {
      if (((u = Y_(i[4], i[3], i[2], i[5], i[6], i[7])), !H_(i[1], u, a)))
        return;
      (a._a = u),
        (a._tzm = L_(i[8], i[9], i[10])),
        (a._d = Cu.apply(null, a._a)),
        a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
        (Me(a).rfc2822 = !0);
    } else a._isValid = !1;
  }
  function j_(a) {
    var i = A_.exec(a._i);
    if (i !== null) {
      a._d = new Date(+i[1]);
      return;
    }
    if ((fv(a), a._isValid === !1)) delete a._isValid;
    else return;
    if ((ov(a), a._isValid === !1)) delete a._isValid;
    else return;
    a._strict ? (a._isValid = !1) : $.createFromInputFallback(a);
  }
  $.createFromInputFallback = va(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function (a) {
      a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
    },
  );
  function di(a, i, u) {
    return a ?? i ?? u;
  }
  function k_(a) {
    var i = new Date($.now());
    return a._useUTC
      ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()]
      : [i.getFullYear(), i.getMonth(), i.getDate()];
  }
  function Xo(a) {
    var i,
      u,
      s = [],
      f,
      o,
      h;
    if (!a._d) {
      for (
        f = k_(a),
          a._w && a._a[ja] == null && a._a[cl] == null && B_(a),
          a._dayOfYear != null &&
            ((h = di(a._a[Ut], f[Ut])),
            (a._dayOfYear > Nu(h) || a._dayOfYear === 0) &&
              (Me(a)._overflowDayOfYear = !0),
            (u = Cu(h, 0, a._dayOfYear)),
            (a._a[cl] = u.getUTCMonth()),
            (a._a[ja] = u.getUTCDate())),
          i = 0;
        i < 3 && a._a[i] == null;
        ++i
      )
        a._a[i] = s[i] = f[i];
      for (; i < 7; i++)
        a._a[i] = s[i] = a._a[i] == null ? (i === 2 ? 1 : 0) : a._a[i];
      a._a[Mt] === 24 &&
        a._a[Da] === 0 &&
        a._a[fl] === 0 &&
        a._a[Dn] === 0 &&
        ((a._nextDay = !0), (a._a[Mt] = 0)),
        (a._d = (a._useUTC ? Cu : Qb).apply(null, s)),
        (o = a._useUTC ? a._d.getUTCDay() : a._d.getDay()),
        a._tzm != null && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
        a._nextDay && (a._a[Mt] = 24),
        a._w &&
          typeof a._w.d < "u" &&
          a._w.d !== o &&
          (Me(a).weekdayMismatch = !0);
    }
  }
  function B_(a) {
    var i, u, s, f, o, h, g, v, y;
    (i = a._w),
      i.GG != null || i.W != null || i.E != null
        ? ((o = 1),
          (h = 4),
          (u = di(i.GG, a._a[Ut], Hu(lt(), 1, 4).year)),
          (s = di(i.W, 1)),
          (f = di(i.E, 1)),
          (f < 1 || f > 7) && (v = !0))
        : ((o = a._locale._week.dow),
          (h = a._locale._week.doy),
          (y = Hu(lt(), o, h)),
          (u = di(i.gg, a._a[Ut], y.year)),
          (s = di(i.w, y.week)),
          i.d != null
            ? ((f = i.d), (f < 0 || f > 6) && (v = !0))
            : i.e != null
              ? ((f = i.e + o), (i.e < 0 || i.e > 6) && (v = !0))
              : (f = o)),
      s < 1 || s > dl(u, o, h)
        ? (Me(a)._overflowWeeks = !0)
        : v != null
          ? (Me(a)._overflowWeekday = !0)
          : ((g = iv(u, s, f, o, h)),
            (a._a[Ut] = g.year),
            (a._dayOfYear = g.dayOfYear));
  }
  $.ISO_8601 = function () {};
  $.RFC_2822 = function () {};
  function Qo(a) {
    if (a._f === $.ISO_8601) {
      fv(a);
      return;
    }
    if (a._f === $.RFC_2822) {
      ov(a);
      return;
    }
    (a._a = []), (Me(a).empty = !0);
    var i = "" + a._i,
      u,
      s,
      f,
      o,
      h,
      g = i.length,
      v = 0,
      y,
      S;
    for (
      f = K0(a._f, a._locale).match(Uo) || [], S = f.length, u = 0;
      u < S;
      u++
    )
      (o = f[u]),
        (s = (i.match(Rb(o, a)) || [])[0]),
        s &&
          ((h = i.substr(0, i.indexOf(s))),
          h.length > 0 && Me(a).unusedInput.push(h),
          (i = i.slice(i.indexOf(s) + s.length)),
          (v += s.length)),
        mi[o]
          ? (s ? (Me(a).empty = !1) : Me(a).unusedTokens.push(o), xb(o, s, a))
          : a._strict && !s && Me(a).unusedTokens.push(o);
    (Me(a).charsLeftOver = g - v),
      i.length > 0 && Me(a).unusedInput.push(i),
      a._a[Mt] <= 12 &&
        Me(a).bigHour === !0 &&
        a._a[Mt] > 0 &&
        (Me(a).bigHour = void 0),
      (Me(a).parsedDateParts = a._a.slice(0)),
      (Me(a).meridiem = a._meridiem),
      (a._a[Mt] = G_(a._locale, a._a[Mt], a._meridiem)),
      (y = Me(a).era),
      y !== null && (a._a[Ut] = a._locale.erasConvertYear(y, a._a[Ut])),
      Xo(a),
      Zo(a);
  }
  function G_(a, i, u) {
    var s;
    return u == null
      ? i
      : a.meridiemHour != null
        ? a.meridiemHour(i, u)
        : (a.isPM != null &&
            ((s = a.isPM(u)),
            s && i < 12 && (i += 12),
            !s && i === 12 && (i = 0)),
          i);
  }
  function q_(a) {
    var i,
      u,
      s,
      f,
      o,
      h,
      g = !1,
      v = a._f.length;
    if (v === 0) {
      (Me(a).invalidFormat = !0), (a._d = new Date(NaN));
      return;
    }
    for (f = 0; f < v; f++)
      (o = 0),
        (h = !1),
        (i = zo({}, a)),
        a._useUTC != null && (i._useUTC = a._useUTC),
        (i._f = a._f[f]),
        Qo(i),
        No(i) && (h = !0),
        (o += Me(i).charsLeftOver),
        (o += Me(i).unusedTokens.length * 10),
        (Me(i).score = o),
        g
          ? o < s && ((s = o), (u = i))
          : (s == null || o < s || h) && ((s = o), (u = i), h && (g = !0));
    Kl(a, u || i);
  }
  function V_(a) {
    if (!a._d) {
      var i = Co(a._i),
        u = i.day === void 0 ? i.date : i.day;
      (a._a = Z0(
        [i.year, i.month, u, i.hour, i.minute, i.second, i.millisecond],
        function (s) {
          return s && parseInt(s, 10);
        },
      )),
        Xo(a);
    }
  }
  function Z_(a) {
    var i = new qu(Zo(dv(a)));
    return i._nextDay && (i.add(1, "d"), (i._nextDay = void 0)), i;
  }
  function dv(a) {
    var i = a._i,
      u = a._f;
    return (
      (a._locale = a._locale || yl(a._l)),
      i === null || (u === void 0 && i === "")
        ? Rs({ nullInput: !0 })
        : (typeof i == "string" && (a._i = i = a._locale.preparse(i)),
          Ta(i)
            ? new qu(Zo(i))
            : (Gu(i) ? (a._d = i) : Ea(u) ? q_(a) : u ? Qo(a) : X_(a),
              No(a) || (a._d = null),
              a))
    );
  }
  function X_(a) {
    var i = a._i;
    Zt(i)
      ? (a._d = new Date($.now()))
      : Gu(i)
        ? (a._d = new Date(i.valueOf()))
        : typeof i == "string"
          ? j_(a)
          : Ea(i)
            ? ((a._a = Z0(i.slice(0), function (u) {
                return parseInt(u, 10);
              })),
              Xo(a))
            : En(i)
              ? V_(a)
              : hl(i)
                ? (a._d = new Date(i))
                : $.createFromInputFallback(a);
  }
  function hv(a, i, u, s, f) {
    var o = {};
    return (
      (i === !0 || i === !1) && ((s = i), (i = void 0)),
      (u === !0 || u === !1) && ((s = u), (u = void 0)),
      ((En(a) && Ao(a)) || (Ea(a) && a.length === 0)) && (a = void 0),
      (o._isAMomentObject = !0),
      (o._useUTC = o._isUTC = f),
      (o._l = u),
      (o._i = a),
      (o._f = i),
      (o._strict = s),
      Z_(o)
    );
  }
  function lt(a, i, u, s) {
    return hv(a, i, u, s, !1);
  }
  var Q_ = va(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var a = lt.apply(null, arguments);
        return this.isValid() && a.isValid() ? (a < this ? this : a) : Rs();
      },
    ),
    K_ = va(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var a = lt.apply(null, arguments);
        return this.isValid() && a.isValid() ? (a > this ? this : a) : Rs();
      },
    );
  function mv(a, i) {
    var u, s;
    if ((i.length === 1 && Ea(i[0]) && (i = i[0]), !i.length)) return lt();
    for (u = i[0], s = 1; s < i.length; ++s)
      (!i[s].isValid() || i[s][a](u)) && (u = i[s]);
    return u;
  }
  function W_() {
    var a = [].slice.call(arguments, 0);
    return mv("isBefore", a);
  }
  function J_() {
    var a = [].slice.call(arguments, 0);
    return mv("isAfter", a);
  }
  var F_ = function () {
      return Date.now ? Date.now() : +new Date();
    },
    Ou = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ];
  function $_(a) {
    var i,
      u = !1,
      s,
      f = Ou.length;
    for (i in a)
      if (
        je(a, i) &&
        !(vt.call(Ou, i) !== -1 && (a[i] == null || !isNaN(a[i])))
      )
        return !1;
    for (s = 0; s < f; ++s)
      if (a[Ou[s]]) {
        if (u) return !1;
        parseFloat(a[Ou[s]]) !== Ye(a[Ou[s]]) && (u = !0);
      }
    return !0;
  }
  function P_() {
    return this._isValid;
  }
  function I_() {
    return wa(NaN);
  }
  function Cs(a) {
    var i = Co(a),
      u = i.year || 0,
      s = i.quarter || 0,
      f = i.month || 0,
      o = i.week || i.isoWeek || 0,
      h = i.day || 0,
      g = i.hour || 0,
      v = i.minute || 0,
      y = i.second || 0,
      S = i.millisecond || 0;
    (this._isValid = $_(i)),
      (this._milliseconds = +S + y * 1e3 + v * 6e4 + g * 1e3 * 60 * 60),
      (this._days = +h + o * 7),
      (this._months = +f + s * 3 + u * 12),
      (this._data = {}),
      (this._locale = yl()),
      this._bubble();
  }
  function ms(a) {
    return a instanceof Cs;
  }
  function yo(a) {
    return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
  }
  function e2(a, i, u) {
    var s = Math.min(a.length, i.length),
      f = Math.abs(a.length - i.length),
      o = 0,
      h;
    for (h = 0; h < s; h++) Ye(a[h]) !== Ye(i[h]) && o++;
    return o + f;
  }
  function yv(a, i) {
    oe(a, 0, 0, function () {
      var u = this.utcOffset(),
        s = "+";
      return (
        u < 0 && ((u = -u), (s = "-")),
        s + Ba(~~(u / 60), 2) + i + Ba(~~u % 60, 2)
      );
    });
  }
  yv("Z", ":");
  yv("ZZ", "");
  ee("Z", zs);
  ee("ZZ", zs);
  Fe(["Z", "ZZ"], function (a, i, u) {
    (u._useUTC = !0), (u._tzm = Ko(zs, a));
  });
  var t2 = /([\+\-]|\d\d)/gi;
  function Ko(a, i) {
    var u = (i || "").match(a),
      s,
      f,
      o;
    return u === null
      ? null
      : ((s = u[u.length - 1] || []),
        (f = (s + "").match(t2) || ["-", 0, 0]),
        (o = +(f[1] * 60) + Ye(f[2])),
        o === 0 ? 0 : f[0] === "+" ? o : -o);
  }
  function Wo(a, i) {
    var u, s;
    return i._isUTC
      ? ((u = i.clone()),
        (s = (Ta(a) || Gu(a) ? a.valueOf() : lt(a).valueOf()) - u.valueOf()),
        u._d.setTime(u._d.valueOf() + s),
        $.updateOffset(u, !1),
        u)
      : lt(a).local();
  }
  function vo(a) {
    return -Math.round(a._d.getTimezoneOffset());
  }
  $.updateOffset = function () {};
  function a2(a, i, u) {
    var s = this._offset || 0,
      f;
    if (!this.isValid()) return a != null ? this : NaN;
    if (a != null) {
      if (typeof a == "string") {
        if (((a = Ko(zs, a)), a === null)) return this;
      } else Math.abs(a) < 16 && !u && (a = a * 60);
      return (
        !this._isUTC && i && (f = vo(this)),
        (this._offset = a),
        (this._isUTC = !0),
        f != null && this.add(f, "m"),
        s !== a &&
          (!i || this._changeInProgress
            ? pv(this, wa(a - s, "m"), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              $.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      );
    } else return this._isUTC ? s : vo(this);
  }
  function l2(a, i) {
    return a != null
      ? (typeof a != "string" && (a = -a), this.utcOffset(a, i), this)
      : -this.utcOffset();
  }
  function n2(a) {
    return this.utcOffset(0, a);
  }
  function i2(a) {
    return (
      this._isUTC &&
        (this.utcOffset(0, a),
        (this._isUTC = !1),
        a && this.subtract(vo(this), "m")),
      this
    );
  }
  function u2() {
    if (this._tzm != null) this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
      var a = Ko(Tb, this._i);
      a != null ? this.utcOffset(a) : this.utcOffset(0, !0);
    }
    return this;
  }
  function r2(a) {
    return this.isValid()
      ? ((a = a ? lt(a).utcOffset() : 0), (this.utcOffset() - a) % 60 === 0)
      : !1;
  }
  function s2() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    );
  }
  function c2() {
    if (!Zt(this._isDSTShifted)) return this._isDSTShifted;
    var a = {},
      i;
    return (
      zo(a, this),
      (a = dv(a)),
      a._a
        ? ((i = a._isUTC ? qa(a._a) : lt(a._a)),
          (this._isDSTShifted = this.isValid() && e2(a._a, i.toArray()) > 0))
        : (this._isDSTShifted = !1),
      this._isDSTShifted
    );
  }
  function f2() {
    return this.isValid() ? !this._isUTC : !1;
  }
  function o2() {
    return this.isValid() ? this._isUTC : !1;
  }
  function vv() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1;
  }
  var d2 = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    h2 =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function wa(a, i) {
    var u = a,
      s = null,
      f,
      o,
      h;
    return (
      ms(a)
        ? (u = { ms: a._milliseconds, d: a._days, M: a._months })
        : hl(a) || !isNaN(+a)
          ? ((u = {}), i ? (u[i] = +a) : (u.milliseconds = +a))
          : (s = d2.exec(a))
            ? ((f = s[1] === "-" ? -1 : 1),
              (u = {
                y: 0,
                d: Ye(s[ja]) * f,
                h: Ye(s[Mt]) * f,
                m: Ye(s[Da]) * f,
                s: Ye(s[fl]) * f,
                ms: Ye(yo(s[Dn] * 1e3)) * f,
              }))
            : (s = h2.exec(a))
              ? ((f = s[1] === "-" ? -1 : 1),
                (u = {
                  y: bn(s[2], f),
                  M: bn(s[3], f),
                  w: bn(s[4], f),
                  d: bn(s[5], f),
                  h: bn(s[6], f),
                  m: bn(s[7], f),
                  s: bn(s[8], f),
                }))
              : u == null
                ? (u = {})
                : typeof u == "object" &&
                  ("from" in u || "to" in u) &&
                  ((h = m2(lt(u.from), lt(u.to))),
                  (u = {}),
                  (u.ms = h.milliseconds),
                  (u.M = h.months)),
      (o = new Cs(u)),
      ms(a) && je(a, "_locale") && (o._locale = a._locale),
      ms(a) && je(a, "_isValid") && (o._isValid = a._isValid),
      o
    );
  }
  wa.fn = Cs.prototype;
  wa.invalid = I_;
  function bn(a, i) {
    var u = a && parseFloat(a.replace(",", "."));
    return (isNaN(u) ? 0 : u) * i;
  }
  function v0(a, i) {
    var u = {};
    return (
      (u.months = i.month() - a.month() + (i.year() - a.year()) * 12),
      a.clone().add(u.months, "M").isAfter(i) && --u.months,
      (u.milliseconds = +i - +a.clone().add(u.months, "M")),
      u
    );
  }
  function m2(a, i) {
    var u;
    return a.isValid() && i.isValid()
      ? ((i = Wo(i, a)),
        a.isBefore(i)
          ? (u = v0(a, i))
          : ((u = v0(i, a)),
            (u.milliseconds = -u.milliseconds),
            (u.months = -u.months)),
        u)
      : { milliseconds: 0, months: 0 };
  }
  function gv(a, i) {
    return function (u, s) {
      var f, o;
      return (
        s !== null &&
          !isNaN(+s) &&
          (Q0(
            i,
            "moment()." +
              i +
              "(period, number) is deprecated. Please use moment()." +
              i +
              "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.",
          ),
          (o = u),
          (u = s),
          (s = o)),
        (f = wa(u, s)),
        pv(this, f, a),
        this
      );
    };
  }
  function pv(a, i, u, s) {
    var f = i._milliseconds,
      o = yo(i._days),
      h = yo(i._months);
    a.isValid() &&
      ((s = s ?? !0),
      h && av(a, Uu(a, "Month") + h * u),
      o && I0(a, "Date", Uu(a, "Date") + o * u),
      f && a._d.setTime(a._d.valueOf() + f * u),
      s && $.updateOffset(a, o || h));
  }
  var y2 = gv(1, "add"),
    v2 = gv(-1, "subtract");
  function Sv(a) {
    return typeof a == "string" || a instanceof String;
  }
  function g2(a) {
    return (
      Ta(a) ||
      Gu(a) ||
      Sv(a) ||
      hl(a) ||
      S2(a) ||
      p2(a) ||
      a === null ||
      a === void 0
    );
  }
  function p2(a) {
    var i = En(a) && !Ao(a),
      u = !1,
      s = [
        "years",
        "year",
        "y",
        "months",
        "month",
        "M",
        "days",
        "day",
        "d",
        "dates",
        "date",
        "D",
        "hours",
        "hour",
        "h",
        "minutes",
        "minute",
        "m",
        "seconds",
        "second",
        "s",
        "milliseconds",
        "millisecond",
        "ms",
      ],
      f,
      o,
      h = s.length;
    for (f = 0; f < h; f += 1) (o = s[f]), (u = u || je(a, o));
    return i && u;
  }
  function S2(a) {
    var i = Ea(a),
      u = !1;
    return (
      i &&
        (u =
          a.filter(function (s) {
            return !hl(s) && Sv(a);
          }).length === 0),
      i && u
    );
  }
  function b2(a) {
    var i = En(a) && !Ao(a),
      u = !1,
      s = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"],
      f,
      o;
    for (f = 0; f < s.length; f += 1) (o = s[f]), (u = u || je(a, o));
    return i && u;
  }
  function _2(a, i) {
    var u = a.diff(i, "days", !0);
    return u < -6
      ? "sameElse"
      : u < -1
        ? "lastWeek"
        : u < 0
          ? "lastDay"
          : u < 1
            ? "sameDay"
            : u < 2
              ? "nextDay"
              : u < 7
                ? "nextWeek"
                : "sameElse";
  }
  function M2(a, i) {
    arguments.length === 1 &&
      (arguments[0]
        ? g2(arguments[0])
          ? ((a = arguments[0]), (i = void 0))
          : b2(arguments[0]) && ((i = arguments[0]), (a = void 0))
        : ((a = void 0), (i = void 0)));
    var u = a || lt(),
      s = Wo(u, this).startOf("day"),
      f = $.calendarFormat(this, s) || "sameElse",
      o = i && (Va(i[f]) ? i[f].call(this, u) : i[f]);
    return this.format(o || this.localeData().calendar(f, this, lt(u)));
  }
  function D2() {
    return new qu(this);
  }
  function E2(a, i) {
    var u = Ta(a) ? a : lt(a);
    return this.isValid() && u.isValid()
      ? ((i = ga(i) || "millisecond"),
        i === "millisecond"
          ? this.valueOf() > u.valueOf()
          : u.valueOf() < this.clone().startOf(i).valueOf())
      : !1;
  }
  function T2(a, i) {
    var u = Ta(a) ? a : lt(a);
    return this.isValid() && u.isValid()
      ? ((i = ga(i) || "millisecond"),
        i === "millisecond"
          ? this.valueOf() < u.valueOf()
          : this.clone().endOf(i).valueOf() < u.valueOf())
      : !1;
  }
  function w2(a, i, u, s) {
    var f = Ta(a) ? a : lt(a),
      o = Ta(i) ? i : lt(i);
    return this.isValid() && f.isValid() && o.isValid()
      ? ((s = s || "()"),
        (s[0] === "(" ? this.isAfter(f, u) : !this.isBefore(f, u)) &&
          (s[1] === ")" ? this.isBefore(o, u) : !this.isAfter(o, u)))
      : !1;
  }
  function R2(a, i) {
    var u = Ta(a) ? a : lt(a),
      s;
    return this.isValid() && u.isValid()
      ? ((i = ga(i) || "millisecond"),
        i === "millisecond"
          ? this.valueOf() === u.valueOf()
          : ((s = u.valueOf()),
            this.clone().startOf(i).valueOf() <= s &&
              s <= this.clone().endOf(i).valueOf()))
      : !1;
  }
  function O2(a, i) {
    return this.isSame(a, i) || this.isAfter(a, i);
  }
  function x2(a, i) {
    return this.isSame(a, i) || this.isBefore(a, i);
  }
  function A2(a, i, u) {
    var s, f, o;
    if (!this.isValid()) return NaN;
    if (((s = Wo(a, this)), !s.isValid())) return NaN;
    switch (((f = (s.utcOffset() - this.utcOffset()) * 6e4), (i = ga(i)), i)) {
      case "year":
        o = ys(this, s) / 12;
        break;
      case "month":
        o = ys(this, s);
        break;
      case "quarter":
        o = ys(this, s) / 3;
        break;
      case "second":
        o = (this - s) / 1e3;
        break;
      case "minute":
        o = (this - s) / 6e4;
        break;
      case "hour":
        o = (this - s) / 36e5;
        break;
      case "day":
        o = (this - s - f) / 864e5;
        break;
      case "week":
        o = (this - s - f) / 6048e5;
        break;
      default:
        o = this - s;
    }
    return u ? o : ma(o);
  }
  function ys(a, i) {
    if (a.date() < i.date()) return -ys(i, a);
    var u = (i.year() - a.year()) * 12 + (i.month() - a.month()),
      s = a.clone().add(u, "months"),
      f,
      o;
    return (
      i - s < 0
        ? ((f = a.clone().add(u - 1, "months")), (o = (i - s) / (s - f)))
        : ((f = a.clone().add(u + 1, "months")), (o = (i - s) / (f - s))),
      -(u + o) || 0
    );
  }
  $.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  $.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function N2() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function z2(a) {
    if (!this.isValid()) return null;
    var i = a !== !0,
      u = i ? this.clone().utc() : this;
    return u.year() < 0 || u.year() > 9999
      ? hs(
          u,
          i ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ",
        )
      : Va(Date.prototype.toISOString)
        ? i
          ? this.toDate().toISOString()
          : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
              .toISOString()
              .replace("Z", hs(u, "Z"))
        : hs(
            u,
            i ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ",
          );
  }
  function Y2() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var a = "moment",
      i = "",
      u,
      s,
      f,
      o;
    return (
      this.isLocal() ||
        ((a = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone"),
        (i = "Z")),
      (u = "[" + a + '("]'),
      (s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
      (f = "-MM-DD[T]HH:mm:ss.SSS"),
      (o = i + '[")]'),
      this.format(u + s + f + o)
    );
  }
  function U2(a) {
    a || (a = this.isUtc() ? $.defaultFormatUtc : $.defaultFormat);
    var i = hs(this, a);
    return this.localeData().postformat(i);
  }
  function C2(a, i) {
    return this.isValid() && ((Ta(a) && a.isValid()) || lt(a).isValid())
      ? wa({ to: this, from: a }).locale(this.locale()).humanize(!i)
      : this.localeData().invalidDate();
  }
  function H2(a) {
    return this.from(lt(), a);
  }
  function L2(a, i) {
    return this.isValid() && ((Ta(a) && a.isValid()) || lt(a).isValid())
      ? wa({ from: this, to: a }).locale(this.locale()).humanize(!i)
      : this.localeData().invalidDate();
  }
  function j2(a) {
    return this.to(lt(), a);
  }
  function bv(a) {
    var i;
    return a === void 0
      ? this._locale._abbr
      : ((i = yl(a)), i != null && (this._locale = i), this);
  }
  var _v = va(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (a) {
      return a === void 0 ? this.localeData() : this.locale(a);
    },
  );
  function Mv() {
    return this._locale;
  }
  var Ms = 1e3,
    yi = 60 * Ms,
    Ds = 60 * yi,
    Dv = (365 * 400 + 97) * 24 * Ds;
  function vi(a, i) {
    return ((a % i) + i) % i;
  }
  function Ev(a, i, u) {
    return a < 100 && a >= 0
      ? new Date(a + 400, i, u) - Dv
      : new Date(a, i, u).valueOf();
  }
  function Tv(a, i, u) {
    return a < 100 && a >= 0 ? Date.UTC(a + 400, i, u) - Dv : Date.UTC(a, i, u);
  }
  function k2(a) {
    var i, u;
    if (((a = ga(a)), a === void 0 || a === "millisecond" || !this.isValid()))
      return this;
    switch (((u = this._isUTC ? Tv : Ev), a)) {
      case "year":
        i = u(this.year(), 0, 1);
        break;
      case "quarter":
        i = u(this.year(), this.month() - (this.month() % 3), 1);
        break;
      case "month":
        i = u(this.year(), this.month(), 1);
        break;
      case "week":
        i = u(this.year(), this.month(), this.date() - this.weekday());
        break;
      case "isoWeek":
        i = u(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;
      case "day":
      case "date":
        i = u(this.year(), this.month(), this.date());
        break;
      case "hour":
        (i = this._d.valueOf()),
          (i -= vi(i + (this._isUTC ? 0 : this.utcOffset() * yi), Ds));
        break;
      case "minute":
        (i = this._d.valueOf()), (i -= vi(i, yi));
        break;
      case "second":
        (i = this._d.valueOf()), (i -= vi(i, Ms));
        break;
    }
    return this._d.setTime(i), $.updateOffset(this, !0), this;
  }
  function B2(a) {
    var i, u;
    if (((a = ga(a)), a === void 0 || a === "millisecond" || !this.isValid()))
      return this;
    switch (((u = this._isUTC ? Tv : Ev), a)) {
      case "year":
        i = u(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        i = u(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1;
        break;
      case "month":
        i = u(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        i = u(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;
      case "isoWeek":
        i =
          u(
            this.year(),
            this.month(),
            this.date() - (this.isoWeekday() - 1) + 7,
          ) - 1;
        break;
      case "day":
      case "date":
        i = u(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        (i = this._d.valueOf()),
          (i += Ds - vi(i + (this._isUTC ? 0 : this.utcOffset() * yi), Ds) - 1);
        break;
      case "minute":
        (i = this._d.valueOf()), (i += yi - vi(i, yi) - 1);
        break;
      case "second":
        (i = this._d.valueOf()), (i += Ms - vi(i, Ms) - 1);
        break;
    }
    return this._d.setTime(i), $.updateOffset(this, !0), this;
  }
  function G2() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function q2() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function V2() {
    return new Date(this.valueOf());
  }
  function Z2() {
    var a = this;
    return [
      a.year(),
      a.month(),
      a.date(),
      a.hour(),
      a.minute(),
      a.second(),
      a.millisecond(),
    ];
  }
  function X2() {
    var a = this;
    return {
      years: a.year(),
      months: a.month(),
      date: a.date(),
      hours: a.hours(),
      minutes: a.minutes(),
      seconds: a.seconds(),
      milliseconds: a.milliseconds(),
    };
  }
  function Q2() {
    return this.isValid() ? this.toISOString() : null;
  }
  function K2() {
    return No(this);
  }
  function W2() {
    return Kl({}, Me(this));
  }
  function J2() {
    return Me(this).overflow;
  }
  function F2() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict,
    };
  }
  oe("N", 0, 0, "eraAbbr");
  oe("NN", 0, 0, "eraAbbr");
  oe("NNN", 0, 0, "eraAbbr");
  oe("NNNN", 0, 0, "eraName");
  oe("NNNNN", 0, 0, "eraNarrow");
  oe("y", ["y", 1], "yo", "eraYear");
  oe("y", ["yy", 2], 0, "eraYear");
  oe("y", ["yyy", 3], 0, "eraYear");
  oe("y", ["yyyy", 4], 0, "eraYear");
  ee("N", Jo);
  ee("NN", Jo);
  ee("NNN", Jo);
  ee("NNNN", rM);
  ee("NNNNN", sM);
  Fe(["N", "NN", "NNN", "NNNN", "NNNNN"], function (a, i, u, s) {
    var f = u._locale.erasParse(a, s, u._strict);
    f ? (Me(u).era = f) : (Me(u).invalidEra = a);
  });
  ee("y", gi);
  ee("yy", gi);
  ee("yyy", gi);
  ee("yyyy", gi);
  ee("yo", cM);
  Fe(["y", "yy", "yyy", "yyyy"], Ut);
  Fe(["yo"], function (a, i, u, s) {
    var f;
    u._locale._eraYearOrdinalRegex &&
      (f = a.match(u._locale._eraYearOrdinalRegex)),
      u._locale.eraYearOrdinalParse
        ? (i[Ut] = u._locale.eraYearOrdinalParse(a, f))
        : (i[Ut] = parseInt(a, 10));
  });
  function $2(a, i) {
    var u,
      s,
      f,
      o = this._eras || yl("en")._eras;
    for (u = 0, s = o.length; u < s; ++u) {
      switch (typeof o[u].since) {
        case "string":
          (f = $(o[u].since).startOf("day")), (o[u].since = f.valueOf());
          break;
      }
      switch (typeof o[u].until) {
        case "undefined":
          o[u].until = 1 / 0;
          break;
        case "string":
          (f = $(o[u].until).startOf("day").valueOf()),
            (o[u].until = f.valueOf());
          break;
      }
    }
    return o;
  }
  function P2(a, i, u) {
    var s,
      f,
      o = this.eras(),
      h,
      g,
      v;
    for (a = a.toUpperCase(), s = 0, f = o.length; s < f; ++s)
      if (
        ((h = o[s].name.toUpperCase()),
        (g = o[s].abbr.toUpperCase()),
        (v = o[s].narrow.toUpperCase()),
        u)
      )
        switch (i) {
          case "N":
          case "NN":
          case "NNN":
            if (g === a) return o[s];
            break;
          case "NNNN":
            if (h === a) return o[s];
            break;
          case "NNNNN":
            if (v === a) return o[s];
            break;
        }
      else if ([h, g, v].indexOf(a) >= 0) return o[s];
  }
  function I2(a, i) {
    var u = a.since <= a.until ? 1 : -1;
    return i === void 0
      ? $(a.since).year()
      : $(a.since).year() + (i - a.offset) * u;
  }
  function eM() {
    var a,
      i,
      u,
      s = this.localeData().eras();
    for (a = 0, i = s.length; a < i; ++a)
      if (
        ((u = this.clone().startOf("day").valueOf()),
        (s[a].since <= u && u <= s[a].until) ||
          (s[a].until <= u && u <= s[a].since))
      )
        return s[a].name;
    return "";
  }
  function tM() {
    var a,
      i,
      u,
      s = this.localeData().eras();
    for (a = 0, i = s.length; a < i; ++a)
      if (
        ((u = this.clone().startOf("day").valueOf()),
        (s[a].since <= u && u <= s[a].until) ||
          (s[a].until <= u && u <= s[a].since))
      )
        return s[a].narrow;
    return "";
  }
  function aM() {
    var a,
      i,
      u,
      s = this.localeData().eras();
    for (a = 0, i = s.length; a < i; ++a)
      if (
        ((u = this.clone().startOf("day").valueOf()),
        (s[a].since <= u && u <= s[a].until) ||
          (s[a].until <= u && u <= s[a].since))
      )
        return s[a].abbr;
    return "";
  }
  function lM() {
    var a,
      i,
      u,
      s,
      f = this.localeData().eras();
    for (a = 0, i = f.length; a < i; ++a)
      if (
        ((u = f[a].since <= f[a].until ? 1 : -1),
        (s = this.clone().startOf("day").valueOf()),
        (f[a].since <= s && s <= f[a].until) ||
          (f[a].until <= s && s <= f[a].since))
      )
        return (this.year() - $(f[a].since).year()) * u + f[a].offset;
    return this.year();
  }
  function nM(a) {
    return (
      je(this, "_erasNameRegex") || Fo.call(this),
      a ? this._erasNameRegex : this._erasRegex
    );
  }
  function iM(a) {
    return (
      je(this, "_erasAbbrRegex") || Fo.call(this),
      a ? this._erasAbbrRegex : this._erasRegex
    );
  }
  function uM(a) {
    return (
      je(this, "_erasNarrowRegex") || Fo.call(this),
      a ? this._erasNarrowRegex : this._erasRegex
    );
  }
  function Jo(a, i) {
    return i.erasAbbrRegex(a);
  }
  function rM(a, i) {
    return i.erasNameRegex(a);
  }
  function sM(a, i) {
    return i.erasNarrowRegex(a);
  }
  function cM(a, i) {
    return i._eraYearOrdinalRegex || gi;
  }
  function Fo() {
    var a = [],
      i = [],
      u = [],
      s = [],
      f,
      o,
      h,
      g,
      v,
      y = this.eras();
    for (f = 0, o = y.length; f < o; ++f)
      (h = ol(y[f].name)),
        (g = ol(y[f].abbr)),
        (v = ol(y[f].narrow)),
        i.push(h),
        a.push(g),
        u.push(v),
        s.push(h),
        s.push(g),
        s.push(v);
    (this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i")),
      (this._erasNameRegex = new RegExp("^(" + i.join("|") + ")", "i")),
      (this._erasAbbrRegex = new RegExp("^(" + a.join("|") + ")", "i")),
      (this._erasNarrowRegex = new RegExp("^(" + u.join("|") + ")", "i"));
  }
  oe(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  });
  oe(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  });
  function Hs(a, i) {
    oe(0, [a, a.length], 0, i);
  }
  Hs("gggg", "weekYear");
  Hs("ggggg", "weekYear");
  Hs("GGGG", "isoWeekYear");
  Hs("GGGGG", "isoWeekYear");
  ee("G", Ns);
  ee("g", Ns);
  ee("GG", nt, It);
  ee("gg", nt, It);
  ee("GGGG", Lo, Ho);
  ee("gggg", Lo, Ho);
  ee("GGGGG", As, Os);
  ee("ggggg", As, Os);
  Zu(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, i, u, s) {
    i[s.substr(0, 2)] = Ye(a);
  });
  Zu(["gg", "GG"], function (a, i, u, s) {
    i[s] = $.parseTwoDigitYear(a);
  });
  function fM(a) {
    return wv.call(
      this,
      a,
      this.week(),
      this.weekday() + this.localeData()._week.dow,
      this.localeData()._week.dow,
      this.localeData()._week.doy,
    );
  }
  function oM(a) {
    return wv.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function dM() {
    return dl(this.year(), 1, 4);
  }
  function hM() {
    return dl(this.isoWeekYear(), 1, 4);
  }
  function mM() {
    var a = this.localeData()._week;
    return dl(this.year(), a.dow, a.doy);
  }
  function yM() {
    var a = this.localeData()._week;
    return dl(this.weekYear(), a.dow, a.doy);
  }
  function wv(a, i, u, s, f) {
    var o;
    return a == null
      ? Hu(this, s, f).year
      : ((o = dl(a, s, f)), i > o && (i = o), vM.call(this, a, i, u, s, f));
  }
  function vM(a, i, u, s, f) {
    var o = iv(a, i, u, s, f),
      h = Cu(o.year, 0, o.dayOfYear);
    return (
      this.year(h.getUTCFullYear()),
      this.month(h.getUTCMonth()),
      this.date(h.getUTCDate()),
      this
    );
  }
  oe("Q", 0, "Qo", "quarter");
  ee("Q", W0);
  Fe("Q", function (a, i) {
    i[cl] = (Ye(a) - 1) * 3;
  });
  function gM(a) {
    return a == null
      ? Math.ceil((this.month() + 1) / 3)
      : this.month((a - 1) * 3 + (this.month() % 3));
  }
  oe("D", ["DD", 2], "Do", "date");
  ee("D", nt, pi);
  ee("DD", nt, It);
  ee("Do", function (a, i) {
    return a
      ? i._dayOfMonthOrdinalParse || i._ordinalParse
      : i._dayOfMonthOrdinalParseLenient;
  });
  Fe(["D", "DD"], ja);
  Fe("Do", function (a, i) {
    i[ja] = Ye(a.match(nt)[0]);
  });
  var Rv = Si("Date", !0);
  oe("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  ee("DDD", xs);
  ee("DDDD", J0);
  Fe(["DDD", "DDDD"], function (a, i, u) {
    u._dayOfYear = Ye(a);
  });
  function pM(a) {
    var i =
      Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5,
      ) + 1;
    return a == null ? i : this.add(a - i, "d");
  }
  oe("m", ["mm", 2], 0, "minute");
  ee("m", nt, jo);
  ee("mm", nt, It);
  Fe(["m", "mm"], Da);
  var SM = Si("Minutes", !1);
  oe("s", ["ss", 2], 0, "second");
  ee("s", nt, jo);
  ee("ss", nt, It);
  Fe(["s", "ss"], fl);
  var bM = Si("Seconds", !1);
  oe("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  });
  oe(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  });
  oe(0, ["SSS", 3], 0, "millisecond");
  oe(0, ["SSSS", 4], 0, function () {
    return this.millisecond() * 10;
  });
  oe(0, ["SSSSS", 5], 0, function () {
    return this.millisecond() * 100;
  });
  oe(0, ["SSSSSS", 6], 0, function () {
    return this.millisecond() * 1e3;
  });
  oe(0, ["SSSSSSS", 7], 0, function () {
    return this.millisecond() * 1e4;
  });
  oe(0, ["SSSSSSSS", 8], 0, function () {
    return this.millisecond() * 1e5;
  });
  oe(0, ["SSSSSSSSS", 9], 0, function () {
    return this.millisecond() * 1e6;
  });
  ee("S", xs, W0);
  ee("SS", xs, It);
  ee("SSS", xs, J0);
  var Wl, Ov;
  for (Wl = "SSSS"; Wl.length <= 9; Wl += "S") ee(Wl, gi);
  function _M(a, i) {
    i[Dn] = Ye(("0." + a) * 1e3);
  }
  for (Wl = "S"; Wl.length <= 9; Wl += "S") Fe(Wl, _M);
  Ov = Si("Milliseconds", !1);
  oe("z", 0, 0, "zoneAbbr");
  oe("zz", 0, 0, "zoneName");
  function MM() {
    return this._isUTC ? "UTC" : "";
  }
  function DM() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var Z = qu.prototype;
  Z.add = y2;
  Z.calendar = M2;
  Z.clone = D2;
  Z.diff = A2;
  Z.endOf = B2;
  Z.format = U2;
  Z.from = C2;
  Z.fromNow = H2;
  Z.to = L2;
  Z.toNow = j2;
  Z.get = Yb;
  Z.invalidAt = J2;
  Z.isAfter = E2;
  Z.isBefore = T2;
  Z.isBetween = w2;
  Z.isSame = R2;
  Z.isSameOrAfter = O2;
  Z.isSameOrBefore = x2;
  Z.isValid = K2;
  Z.lang = _v;
  Z.locale = bv;
  Z.localeData = Mv;
  Z.max = K_;
  Z.min = Q_;
  Z.parsingFlags = W2;
  Z.set = Ub;
  Z.startOf = k2;
  Z.subtract = v2;
  Z.toArray = Z2;
  Z.toObject = X2;
  Z.toDate = V2;
  Z.toISOString = z2;
  Z.inspect = Y2;
  typeof Symbol < "u" &&
    Symbol.for != null &&
    (Z[Symbol.for("nodejs.util.inspect.custom")] = function () {
      return "Moment<" + this.format() + ">";
    });
  Z.toJSON = Q2;
  Z.toString = N2;
  Z.unix = q2;
  Z.valueOf = G2;
  Z.creationData = F2;
  Z.eraName = eM;
  Z.eraNarrow = tM;
  Z.eraAbbr = aM;
  Z.eraYear = lM;
  Z.year = P0;
  Z.isLeapYear = zb;
  Z.weekYear = fM;
  Z.isoWeekYear = oM;
  Z.quarter = Z.quarters = gM;
  Z.month = lv;
  Z.daysInMonth = Vb;
  Z.week = Z.weeks = $b;
  Z.isoWeek = Z.isoWeeks = Pb;
  Z.weeksInYear = mM;
  Z.weeksInWeekYear = yM;
  Z.isoWeeksInYear = dM;
  Z.isoWeeksInISOWeekYear = hM;
  Z.date = Rv;
  Z.day = Z.days = o_;
  Z.weekday = d_;
  Z.isoWeekday = h_;
  Z.dayOfYear = pM;
  Z.hour = Z.hours = b_;
  Z.minute = Z.minutes = SM;
  Z.second = Z.seconds = bM;
  Z.millisecond = Z.milliseconds = Ov;
  Z.utcOffset = a2;
  Z.utc = n2;
  Z.local = i2;
  Z.parseZone = u2;
  Z.hasAlignedHourOffset = r2;
  Z.isDST = s2;
  Z.isLocal = f2;
  Z.isUtcOffset = o2;
  Z.isUtc = vv;
  Z.isUTC = vv;
  Z.zoneAbbr = MM;
  Z.zoneName = DM;
  Z.dates = va("dates accessor is deprecated. Use date instead.", Rv);
  Z.months = va("months accessor is deprecated. Use month instead", lv);
  Z.years = va("years accessor is deprecated. Use year instead", P0);
  Z.zone = va(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    l2,
  );
  Z.isDSTShifted = va(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    c2,
  );
  function EM(a) {
    return lt(a * 1e3);
  }
  function TM() {
    return lt.apply(null, arguments).parseZone();
  }
  function xv(a) {
    return a;
  }
  var ke = Yo.prototype;
  ke.calendar = fb;
  ke.longDateFormat = mb;
  ke.invalidDate = vb;
  ke.ordinal = Sb;
  ke.preparse = xv;
  ke.postformat = xv;
  ke.relativeTime = _b;
  ke.pastFuture = Mb;
  ke.set = sb;
  ke.eras = $2;
  ke.erasParse = P2;
  ke.erasConvertYear = I2;
  ke.erasAbbrRegex = iM;
  ke.erasNameRegex = nM;
  ke.erasNarrowRegex = uM;
  ke.months = kb;
  ke.monthsShort = Bb;
  ke.monthsParse = qb;
  ke.monthsRegex = Xb;
  ke.monthsShortRegex = Zb;
  ke.week = Kb;
  ke.firstDayOfYear = Fb;
  ke.firstDayOfWeek = Jb;
  ke.weekdays = u_;
  ke.weekdaysMin = s_;
  ke.weekdaysShort = r_;
  ke.weekdaysParse = f_;
  ke.weekdaysRegex = m_;
  ke.weekdaysShortRegex = y_;
  ke.weekdaysMinRegex = v_;
  ke.isPM = p_;
  ke.meridiem = __;
  function Es(a, i, u, s) {
    var f = yl(),
      o = qa().set(s, i);
    return f[u](o, a);
  }
  function Av(a, i, u) {
    if ((hl(a) && ((i = a), (a = void 0)), (a = a || ""), i != null))
      return Es(a, i, u, "month");
    var s,
      f = [];
    for (s = 0; s < 12; s++) f[s] = Es(a, s, u, "month");
    return f;
  }
  function $o(a, i, u, s) {
    typeof a == "boolean"
      ? (hl(i) && ((u = i), (i = void 0)), (i = i || ""))
      : ((i = a),
        (u = i),
        (a = !1),
        hl(i) && ((u = i), (i = void 0)),
        (i = i || ""));
    var f = yl(),
      o = a ? f._week.dow : 0,
      h,
      g = [];
    if (u != null) return Es(i, (u + o) % 7, s, "day");
    for (h = 0; h < 7; h++) g[h] = Es(i, (h + o) % 7, s, "day");
    return g;
  }
  function wM(a, i) {
    return Av(a, i, "months");
  }
  function RM(a, i) {
    return Av(a, i, "monthsShort");
  }
  function OM(a, i, u) {
    return $o(a, i, u, "weekdays");
  }
  function xM(a, i, u) {
    return $o(a, i, u, "weekdaysShort");
  }
  function AM(a, i, u) {
    return $o(a, i, u, "weekdaysMin");
  }
  Jl("en", {
    eras: [
      {
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD",
      },
      {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC",
      },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (a) {
      var i = a % 10,
        u =
          Ye((a % 100) / 10) === 1
            ? "th"
            : i === 1
              ? "st"
              : i === 2
                ? "nd"
                : i === 3
                  ? "rd"
                  : "th";
      return a + u;
    },
  });
  $.lang = va("moment.lang is deprecated. Use moment.locale instead.", Jl);
  $.langData = va(
    "moment.langData is deprecated. Use moment.localeData instead.",
    yl,
  );
  var rl = Math.abs;
  function NM() {
    var a = this._data;
    return (
      (this._milliseconds = rl(this._milliseconds)),
      (this._days = rl(this._days)),
      (this._months = rl(this._months)),
      (a.milliseconds = rl(a.milliseconds)),
      (a.seconds = rl(a.seconds)),
      (a.minutes = rl(a.minutes)),
      (a.hours = rl(a.hours)),
      (a.months = rl(a.months)),
      (a.years = rl(a.years)),
      this
    );
  }
  function Nv(a, i, u, s) {
    var f = wa(i, u);
    return (
      (a._milliseconds += s * f._milliseconds),
      (a._days += s * f._days),
      (a._months += s * f._months),
      a._bubble()
    );
  }
  function zM(a, i) {
    return Nv(this, a, i, 1);
  }
  function YM(a, i) {
    return Nv(this, a, i, -1);
  }
  function g0(a) {
    return a < 0 ? Math.floor(a) : Math.ceil(a);
  }
  function UM() {
    var a = this._milliseconds,
      i = this._days,
      u = this._months,
      s = this._data,
      f,
      o,
      h,
      g,
      v;
    return (
      (a >= 0 && i >= 0 && u >= 0) ||
        (a <= 0 && i <= 0 && u <= 0) ||
        ((a += g0(go(u) + i) * 864e5), (i = 0), (u = 0)),
      (s.milliseconds = a % 1e3),
      (f = ma(a / 1e3)),
      (s.seconds = f % 60),
      (o = ma(f / 60)),
      (s.minutes = o % 60),
      (h = ma(o / 60)),
      (s.hours = h % 24),
      (i += ma(h / 24)),
      (v = ma(zv(i))),
      (u += v),
      (i -= g0(go(v))),
      (g = ma(u / 12)),
      (u %= 12),
      (s.days = i),
      (s.months = u),
      (s.years = g),
      this
    );
  }
  function zv(a) {
    return (a * 4800) / 146097;
  }
  function go(a) {
    return (a * 146097) / 4800;
  }
  function CM(a) {
    if (!this.isValid()) return NaN;
    var i,
      u,
      s = this._milliseconds;
    if (((a = ga(a)), a === "month" || a === "quarter" || a === "year"))
      switch (((i = this._days + s / 864e5), (u = this._months + zv(i)), a)) {
        case "month":
          return u;
        case "quarter":
          return u / 3;
        case "year":
          return u / 12;
      }
    else
      switch (((i = this._days + Math.round(go(this._months))), a)) {
        case "week":
          return i / 7 + s / 6048e5;
        case "day":
          return i + s / 864e5;
        case "hour":
          return i * 24 + s / 36e5;
        case "minute":
          return i * 1440 + s / 6e4;
        case "second":
          return i * 86400 + s / 1e3;
        case "millisecond":
          return Math.floor(i * 864e5) + s;
        default:
          throw new Error("Unknown unit " + a);
      }
  }
  function vl(a) {
    return function () {
      return this.as(a);
    };
  }
  var Yv = vl("ms"),
    HM = vl("s"),
    LM = vl("m"),
    jM = vl("h"),
    kM = vl("d"),
    BM = vl("w"),
    GM = vl("M"),
    qM = vl("Q"),
    VM = vl("y"),
    ZM = Yv;
  function XM() {
    return wa(this);
  }
  function QM(a) {
    return (a = ga(a)), this.isValid() ? this[a + "s"]() : NaN;
  }
  function wn(a) {
    return function () {
      return this.isValid() ? this._data[a] : NaN;
    };
  }
  var KM = wn("milliseconds"),
    WM = wn("seconds"),
    JM = wn("minutes"),
    FM = wn("hours"),
    $M = wn("days"),
    PM = wn("months"),
    IM = wn("years");
  function eD() {
    return ma(this.days() / 7);
  }
  var sl = Math.round,
    hi = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
  function tD(a, i, u, s, f) {
    return f.relativeTime(i || 1, !!u, a, s);
  }
  function aD(a, i, u, s) {
    var f = wa(a).abs(),
      o = sl(f.as("s")),
      h = sl(f.as("m")),
      g = sl(f.as("h")),
      v = sl(f.as("d")),
      y = sl(f.as("M")),
      S = sl(f.as("w")),
      A = sl(f.as("y")),
      T =
        (o <= u.ss && ["s", o]) ||
        (o < u.s && ["ss", o]) ||
        (h <= 1 && ["m"]) ||
        (h < u.m && ["mm", h]) ||
        (g <= 1 && ["h"]) ||
        (g < u.h && ["hh", g]) ||
        (v <= 1 && ["d"]) ||
        (v < u.d && ["dd", v]);
    return (
      u.w != null && (T = T || (S <= 1 && ["w"]) || (S < u.w && ["ww", S])),
      (T = T ||
        (y <= 1 && ["M"]) ||
        (y < u.M && ["MM", y]) ||
        (A <= 1 && ["y"]) || ["yy", A]),
      (T[2] = i),
      (T[3] = +a > 0),
      (T[4] = s),
      tD.apply(null, T)
    );
  }
  function lD(a) {
    return a === void 0 ? sl : typeof a == "function" ? ((sl = a), !0) : !1;
  }
  function nD(a, i) {
    return hi[a] === void 0
      ? !1
      : i === void 0
        ? hi[a]
        : ((hi[a] = i), a === "s" && (hi.ss = i - 1), !0);
  }
  function iD(a, i) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var u = !1,
      s = hi,
      f,
      o;
    return (
      typeof a == "object" && ((i = a), (a = !1)),
      typeof a == "boolean" && (u = a),
      typeof i == "object" &&
        ((s = Object.assign({}, hi, i)),
        i.s != null && i.ss == null && (s.ss = i.s - 1)),
      (f = this.localeData()),
      (o = aD(this, !u, s, f)),
      u && (o = f.pastFuture(+this, o)),
      f.postformat(o)
    );
  }
  var io = Math.abs;
  function oi(a) {
    return (a > 0) - (a < 0) || +a;
  }
  function Ls() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var a = io(this._milliseconds) / 1e3,
      i = io(this._days),
      u = io(this._months),
      s,
      f,
      o,
      h,
      g = this.asSeconds(),
      v,
      y,
      S,
      A;
    return g
      ? ((s = ma(a / 60)),
        (f = ma(s / 60)),
        (a %= 60),
        (s %= 60),
        (o = ma(u / 12)),
        (u %= 12),
        (h = a ? a.toFixed(3).replace(/\.?0+$/, "") : ""),
        (v = g < 0 ? "-" : ""),
        (y = oi(this._months) !== oi(g) ? "-" : ""),
        (S = oi(this._days) !== oi(g) ? "-" : ""),
        (A = oi(this._milliseconds) !== oi(g) ? "-" : ""),
        v +
          "P" +
          (o ? y + o + "Y" : "") +
          (u ? y + u + "M" : "") +
          (i ? S + i + "D" : "") +
          (f || s || a ? "T" : "") +
          (f ? A + f + "H" : "") +
          (s ? A + s + "M" : "") +
          (a ? A + h + "S" : ""))
      : "P0D";
  }
  var He = Cs.prototype;
  He.isValid = P_;
  He.abs = NM;
  He.add = zM;
  He.subtract = YM;
  He.as = CM;
  He.asMilliseconds = Yv;
  He.asSeconds = HM;
  He.asMinutes = LM;
  He.asHours = jM;
  He.asDays = kM;
  He.asWeeks = BM;
  He.asMonths = GM;
  He.asQuarters = qM;
  He.asYears = VM;
  He.valueOf = ZM;
  He._bubble = UM;
  He.clone = XM;
  He.get = QM;
  He.milliseconds = KM;
  He.seconds = WM;
  He.minutes = JM;
  He.hours = FM;
  He.days = $M;
  He.weeks = eD;
  He.months = PM;
  He.years = IM;
  He.humanize = iD;
  He.toISOString = Ls;
  He.toString = Ls;
  He.toJSON = Ls;
  He.locale = bv;
  He.localeData = Mv;
  He.toIsoString = va(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    Ls,
  );
  He.lang = _v;
  oe("X", 0, 0, "unix");
  oe("x", 0, 0, "valueOf");
  ee("x", Ns);
  ee("X", wb);
  Fe("X", function (a, i, u) {
    u._d = new Date(parseFloat(a) * 1e3);
  });
  Fe("x", function (a, i, u) {
    u._d = new Date(Ye(a));
  }); //! moment.js
  $.version = "2.30.1";
  ub(lt);
  $.fn = Z;
  $.min = W_;
  $.max = J_;
  $.now = F_;
  $.utc = qa;
  $.unix = EM;
  $.months = wM;
  $.isDate = Gu;
  $.locale = Jl;
  $.invalid = Rs;
  $.duration = wa;
  $.isMoment = Ta;
  $.weekdays = OM;
  $.parseZone = TM;
  $.localeData = yl;
  $.isDuration = ms;
  $.monthsShort = RM;
  $.weekdaysMin = AM;
  $.defineLocale = Vo;
  $.updateLocale = T_;
  $.locales = w_;
  $.weekdaysShort = xM;
  $.normalizeUnits = ga;
  $.relativeTimeRounding = lD;
  $.relativeTimeThreshold = nD;
  $.calendarFormat = _2;
  $.prototype = Z;
  $.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM",
  };
  const Uv = (a) => a - 273.15,
    uo = (a) => $.unix(a).format("DD MMMM"),
    uD = (a) => a.charAt(0).toUpperCase() + a.slice(1),
    rD = (a) => ({
      id: a.id,
      dateTime: $.unix(a.dt).format("MMMM D, YYYY"),
      name: a.name,
      country: a.sys.country,
      temp: Uv(a.main.temp).toFixed(0) + " °C",
      desc: uD(a.weather[0].description),
      icon: a.weather[0].icon,
      humidity: a.main.humidity + " %",
      windSpeed: a.wind.speed + " m/s",
      visibility: a.visibility / 1e3 + " km",
      coord: a.coord,
    }),
    sD = (a) => ({ cityId: a.city.id, coord: a.city.coord, list: cD(a.list) }),
    cD = (a) => {
      let i = uo(a[0].dt),
        u = { [i]: [] };
      return (
        a.forEach((s) => {
          uo(s.dt) === i
            ? (u = { ...u, [i]: [...u[i], fD(s)] })
            : ((i = uo(s.dt)), (u[i] = []));
        }),
        u
      );
    },
    fD = (a) => {
      const { temp_min: i, temp_max: u } = a.main,
        s = (f) => Uv(f).toFixed(2);
      return {
        dateTime: $.unix(a.dt).format("HH:mm"),
        icon: a.weather[0].icon,
        tempRange: s(i) + "/" + s(u) + "°C",
        desc: a.weather[0].description,
      };
    },
    Cv = "75074f8fdc5aa45cb99c9aa9c4ecfdec",
    Hv = "https://api.openweathermap.org/data/2.5",
    Lv = async (a) => {
      const u = await (await fetch(`${Hv}/weather?q=${a}&appid=${Cv}`)).json();
      if (u.cod !== 200) throw new Error("Something went wrong");
      return rD(u);
    },
    oD = async ({ lon: a, lat: i }) => {
      const s = await (
        await fetch(`${Hv}/forecast?lat=${i}&lon=${a}&appid=${Cv}`)
      ).json();
      if (s.cod !== "200") throw new Error("Something went wrong");
      return sD(s);
    };
  function Po({ children: a, className: i }) {
    return fe.jsx("div", {
      className: `bg-white rounded-2xl shadow-md p-6 border border-gray-200 ${i}`,
      children: a,
    });
  }
  function jv({ icon: a, size: i = "@2x" }) {
    return fe.jsx("img", {
      src: `https://openweathermap.org/img/wn/${a}${i}.png`,
      alt: "weather icon",
    });
  }
  function dD({ title: a, titleId: i, ...u }, s) {
    return z.createElement(
      "svg",
      Object.assign(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
          ref: s,
          "aria-labelledby": i,
        },
        u,
      ),
      a ? z.createElement("title", { id: i }, a) : null,
      z.createElement("path", {
        fillRule: "evenodd",
        d: "M20.03 3.97a.75.75 0 0 1 0 1.06L6.31 18.75h9.44a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v9.44L18.97 3.97a.75.75 0 0 1 1.06 0Z",
        clipRule: "evenodd",
      }),
    );
  }
  const hD = z.forwardRef(dD);
  function mD({ title: a, titleId: i, ...u }, s) {
    return z.createElement(
      "svg",
      Object.assign(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
          ref: s,
          "aria-labelledby": i,
        },
        u,
      ),
      a ? z.createElement("title", { id: i }, a) : null,
      z.createElement("path", {
        fillRule: "evenodd",
        d: "M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z",
        clipRule: "evenodd",
      }),
    );
  }
  const yD = z.forwardRef(mD);
  function vD({ title: a, titleId: i, ...u }, s) {
    return z.createElement(
      "svg",
      Object.assign(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          "aria-hidden": "true",
          "data-slot": "icon",
          ref: s,
          "aria-labelledby": i,
        },
        u,
      ),
      a ? z.createElement("title", { id: i }, a) : null,
      z.createElement("path", {
        fillRule: "evenodd",
        d: "M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z",
        clipRule: "evenodd",
      }),
    );
  }
  const gD = z.forwardRef(vD);
  function pD({ currentWeather: a }) {
    return a
      ? fe.jsxs(Po, {
          className: "mb-5",
          children: [
            fe.jsx("div", {
              className: "text-lg font-semibold mb-4",
              children: a.dateTime,
            }),
            fe.jsxs("div", {
              className: "flex items-center justify-center gap-10 mb-4",
              children: [
                fe.jsx(jv, { icon: a.icon, size: "@4x" }),
                fe.jsxs("div", {
                  children: [
                    fe.jsx("div", {
                      className: "text-2xl font-bold",
                      children: a.temp,
                    }),
                    fe.jsx("div", {
                      className: "text-gray-500",
                      children: a.desc,
                    }),
                  ],
                }),
              ],
            }),
            fe.jsxs("div", {
              className: "flex justify-between text-sm text-gray-700",
              children: [
                fe.jsxs("div", {
                  className: "flex flex-col items-center",
                  children: [
                    fe.jsx("span", {
                      className: "font-bold",
                      children: "Humidity",
                    }),
                    fe.jsx("span", { children: a.humidity }),
                  ],
                }),
                fe.jsxs("div", {
                  className: "flex flex-col items-center",
                  children: [
                    fe.jsx("span", {
                      className: "font-bold",
                      children: "Wind",
                    }),
                    fe.jsxs("div", {
                      className: "flex align-middle justify-center",
                      children: [
                        fe.jsx(hD, { className: "size-3" }),
                        fe.jsx("div", { children: a.windSpeed }),
                      ],
                    }),
                  ],
                }),
                fe.jsxs("div", {
                  className: "flex flex-col items-center",
                  children: [
                    fe.jsx("span", {
                      className: "font-bold",
                      children: "Visibility",
                    }),
                    fe.jsx("span", { children: a.visibility }),
                  ],
                }),
              ],
            }),
          ],
        })
      : "No Data";
  }
  function SD({ weatherForecast: a }) {
    return a
      ? fe.jsx(Po, {
          children: Object.keys(a.list).map((i) =>
            fe.jsxs(
              S0.Fragment,
              {
                children: [
                  fe.jsx("div", {
                    className: "font-bold text-gray-400",
                    children: i,
                  }),
                  a.list[i].map((u) =>
                    fe.jsx(
                      "div",
                      {
                        children: fe.jsxs("div", {
                          className: "grid grid-cols-4 gap-4",
                          children: [
                            fe.jsx("div", {
                              className:
                                "font-medium text-base flex items-center justify-center",
                              children: u.dateTime,
                            }),
                            fe.jsx(jv, { icon: u.icon, size: "@2x" }),
                            fe.jsx("span", {
                              className:
                                "text-gray-400 text-sm flex items-center justify-center",
                              children: u.tempRange,
                            }),
                            fe.jsx("span", {
                              className:
                                "font-semibold text-sm flex items-center justify-center",
                              children: u.desc,
                            }),
                          ],
                        }),
                      },
                      u.dateTime,
                    ),
                  ),
                ],
              },
              i,
            ),
          ),
        })
      : "No Data";
  }
  function bD() {
    var g;
    const [a, i] = z.useState(null),
      [u, s] = z.useState(null),
      f = Pl(),
      o = async (v) => {
        try {
          const y = await Lv(v);
          h(y.coord), i(y);
        } catch (y) {
          y instanceof Error
            ? alert(y.message)
            : alert("An unexpected error occurred.");
        }
      },
      h = async ({ lon: v, lat: y }) => {
        try {
          const S = await oD({ lon: v, lat: y });
          s(S);
        } catch (S) {
          S instanceof Error
            ? alert(S.message)
            : alert("An unexpected error occurred.");
        }
      };
    return (
      z.useEffect(() => {
        var y;
        const v = (y = f.state) == null ? void 0 : y.currentWeather;
        v ? (i(v), h(v.coord)) : o("singapore");
      }, [(g = f.state) == null ? void 0 : g.currentWeather]),
      console.log(a),
      console.log(u),
      fe.jsxs("div", {
        className: "w-full max-w-2xl mx-auto",
        children: [
          fe.jsx(xo, { to: "/search", children: "Search for a city" }),
          fe.jsx(pD, { currentWeather: a }),
          fe.jsx(SD, { weatherForecast: u }),
        ],
      })
    );
  }
  function _D({ histories: a, getWeather: i, handleDelete: u }) {
    return fe.jsxs(fe.Fragment, {
      children: [
        fe.jsx("h2", { className: "font-bold", children: "Search History" }),
        fe.jsx(Po, {
          children: fe.jsx("div", {
            className: "flex flex-col gap-3",
            children: a.map((s) =>
              fe.jsxs(
                "div",
                {
                  className: "flex items-center justify-between",
                  children: [
                    fe.jsx("div", {
                      className: "text-gray-800",
                      children: `${s.name},${s.country}`,
                    }),
                    fe.jsxs("div", {
                      className: "flex gap-3.5",
                      children: [
                        fe.jsx("button", {
                          type: "button",
                          onClick: (f) => i(f, s.name),
                          className:
                            "cursor-pointer text-blue-500 hover:text-blue-700",
                          children: fe.jsx(yD, {
                            className: "size-6 text-blue-500",
                          }),
                        }),
                        fe.jsx("button", {
                          onClick: () => u(s.id),
                          className:
                            "cursor-pointer text-red-500 hover:text-red-700",
                          children: fe.jsx(gD, {
                            className: "size-6 text-blue-500",
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                s.id,
              ),
            ),
          }),
        }),
      ],
    });
  }
  function MD() {
    const a = localStorage.getItem("histories"),
      [i, u] = z.useState(""),
      [s, f] = z.useState(a ? JSON.parse(a) : []),
      [o, h] = z.useState(""),
      g = H0(),
      v = async (S, A) => {
        S.preventDefault(), h("");
        try {
          const T = await Lv(A || i),
            { name: U, country: C, id: Q } = T;
          if (!s.find((q) => q.id === Q)) {
            const q = [...s, { name: U, country: C, id: Q }];
            localStorage.setItem("histories", JSON.stringify(q)), f(q);
          }
          u(""), g("/", { state: { currentWeather: T } });
        } catch (T) {
          T
            ? h("Invalid country or city")
            : alert("An unexpected error occurred.");
        }
      },
      y = (S) => {
        const A = s.filter((T) => T.id !== S);
        localStorage.setItem("histories", JSON.stringify(A)), f(A);
      };
    return fe.jsxs("div", {
      className: "flex flex-col gap-y-5 w-full max-w-md mx-auto",
      children: [
        fe.jsxs("form", {
          onSubmit: v,
          className: "flex items-center gap-2",
          children: [
            fe.jsx("input", {
              type: "text",
              value: i,
              onChange: (S) => u(S.target.value),
              placeholder: "Search country or city here...",
              className:
                "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
            }),
            fe.jsx("button", {
              type: "submit",
              className:
                "px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-md hover:bg-blue-600",
              children: "Search",
            }),
          ],
        }),
        o &&
          fe.jsx("div", {
            className: "text-red-500 text-sm mt-1",
            children: o,
          }),
        s.length > 0 &&
          fe.jsx(_D, { histories: s, getWeather: v, handleDelete: y }),
      ],
    });
  }
  const DD = WS([
    { path: "/", element: fe.jsx(bD, {}) },
    { path: "/search", element: fe.jsx(MD, {}) },
  ]);
  tp.createRoot(document.getElementById("root")).render(
    fe.jsx(S0.StrictMode, { children: fe.jsx(MS, { router: DD }) }),
  );
});
export default ED();
