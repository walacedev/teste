function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
    \********************************************************************/

  /*! exports provided: P, g */

  /***/
  function node_modulesIonicCoreDistEsmCubicBezier2812fda3Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P", function () {
      return Point;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getTimeGivenProgression;
    });
    /**
     * Based on:
     * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
     * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
     * TODO: Reduce rounding error
     */


    class Point {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }

    }
    /**
     * Given a cubic-bezier curve, get the x value (time) given
     * the y value (progression).
     * Ex: cubic-bezier(0.32, 0.72, 0, 1);
     * P0: (0, 0)
     * P1: (0.32, 0.72)
     * P2: (0, 1)
     * P3: (1, 1)
     *
     * If you give a cubic bezier curve that never reaches the
     * provided progression, this function will return NaN.
     */


    const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
      const tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
      return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
    };
    /**
     * Solve a cubic equation in one dimension (time)
     */


    const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
      const partA = 3 * p1 * Math.pow(t - 1, 2);
      const partB = -3 * p2 * t + 3 * p2 + p3 * t;
      const partC = p0 * Math.pow(t - 1, 3);
      return t * (partA + t * partB) - partC;
    };
    /**
     * Find the `t` value for a cubic bezier using Cardano's formula
     */


    const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
      p0 -= refPoint;
      p1 -= refPoint;
      p2 -= refPoint;
      p3 -= refPoint;
      const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
      return roots.filter(root => root >= 0 && root <= 1);
    };

    const solveQuadraticEquation = (a, b, c) => {
      const discriminant = b * b - 4 * a * c;

      if (discriminant < 0) {
        return [];
      } else {
        return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
      }
    };

    const solveCubicEquation = (a, b, c, d) => {
      if (a === 0) {
        return solveQuadraticEquation(b, c, d);
      }

      b /= a;
      c /= a;
      d /= a;
      const p = (3 * c - b * b) / 3;
      const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;

      if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
      } else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
      }

      const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

      if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
      } else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3];
      }

      const r = Math.sqrt(Math.pow(-(p / 3), 3));
      const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
      const s = 2 * Math.pow(r, 1 / 3);
      return [s * Math.cos(phi / 3) - b / 3, s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3, s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3];
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateC2e2e1f4Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    const attachComponent = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!delegate) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

            case 2:
              if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                _context.next = 4;
                break;
              }

              throw new Error('framework delegate is missing');

            case 4:
              el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

              if (cssClasses) {
                cssClasses.forEach(c => el.classList.add(c));
              }

              if (componentProps) {
                Object.assign(el, componentProps);
              }

              container.appendChild(el);

              if (!el.componentOnReady) {
                _context.next = 11;
                break;
              }

              _context.next = 11;
              return el.componentOnReady();

            case 11:
              return _context.abrupt("return", el);

            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    const detachComponent = (delegate, element) => {
      if (element) {
        if (delegate) {
          const container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticC8f1473eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    const hapticSelection = () => {
      const engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    const hapticSelectionStart = () => {
      const engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    const hapticSelectionChanged = () => {
      const engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    const hapticSelectionEnd = () => {
      const engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmIndex3476b023Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    const sanitizeDOMString = untrustedString => {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(blockedTag => {
          const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            const element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            const childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
          sanitizeElement(dfChildren[childIndex]);
        } // Append document fragment to div


        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        const getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    const sanitizeElement = element => {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        const attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      const childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    const getElementChildren = el => {
      return el.children != null ? el.children : el.childNodes;
    };

    const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-4d91f03a.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-4d91f03a.js ***!
    \*************************************************************/

  /*! exports provided: d, g, l, s, t */

  /***/
  function node_modulesIonicCoreDistEsmIndex4d91f03aJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return deepReady;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getIonPageElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "l", function () {
      return lifecycle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return setPageHidden;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "t", function () {
      return transition;
    });
    /* harmony import */


    var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-feeeff0d.js */
    "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");

    const iosTransitionAnimation = () => __webpack_require__.e(
    /*! import() | ios-transition-504cdd09-js */
    "ios-transition-504cdd09-js").then(__webpack_require__.bind(null,
    /*! ./ios.transition-504cdd09.js */
    "./node_modules/@ionic/core/dist/esm/ios.transition-504cdd09.js"));

    const mdTransitionAnimation = () => __webpack_require__.e(
    /*! import() | md-transition-fea2bbfb-js */
    "md-transition-fea2bbfb-js").then(__webpack_require__.bind(null,
    /*! ./md.transition-fea2bbfb.js */
    "./node_modules/@ionic/core/dist/esm/md.transition-fea2bbfb.js"));

    const transition = opts => {
      return new Promise((resolve, reject) => {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
          beforeTransition(opts);
          runTransition(opts).then(result => {
            if (result.animation) {
              result.animation.destroy();
            }

            afterTransition(opts);
            resolve(result);
          }, error => {
            afterTransition(opts);
            reject(error);
          });
        });
      });
    };

    const beforeTransition = opts => {
      const enteringEl = opts.enteringEl;
      const leavingEl = opts.leavingEl;
      setZIndex(enteringEl, leavingEl, opts.direction);

      if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
      } else {
        enteringEl.classList.remove('can-go-back');
      }

      setPageHidden(enteringEl, false);

      if (leavingEl) {
        setPageHidden(leavingEl, false);
      }
    };

    const runTransition = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(opts) {
        var animationBuilder, ani;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getAnimationBuilder(opts);

            case 2:
              animationBuilder = _context2.sent;
              ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

              return _context2.abrupt("return", ani);

            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));

      return function runTransition(_x6) {
        return _ref2.apply(this, arguments);
      };
    }();

    const afterTransition = opts => {
      const enteringEl = opts.enteringEl;
      const leavingEl = opts.leavingEl;
      enteringEl.classList.remove('ion-page-invisible');

      if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
      }
    };

    const getAnimationBuilder = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(opts) {
        var getAnimation;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", undefined);

            case 2:
              if (!opts.animationBuilder) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return", opts.animationBuilder);

            case 4:
              if (!(opts.mode === 'ios')) {
                _context3.next = 10;
                break;
              }

              _context3.next = 7;
              return iosTransitionAnimation();

            case 7:
              _context3.t0 = _context3.sent.iosTransitionAnimation;
              _context3.next = 13;
              break;

            case 10:
              _context3.next = 12;
              return mdTransitionAnimation();

            case 12:
              _context3.t0 = _context3.sent.mdTransitionAnimation;

            case 13:
              getAnimation = _context3.t0;
              return _context3.abrupt("return", getAnimation);

            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));

      return function getAnimationBuilder(_x7) {
        return _ref3.apply(this, arguments);
      };
    }();

    const animation = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(animationBuilder, opts) {
        var trans, mod, didComplete;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return waitForReady(opts, true);

            case 2:
              _context4.prev = 2;
              _context4.next = 5;
              return __webpack_require__.e(
              /*! import() | index-69c37885-js */
              "index-69c37885-js").then(__webpack_require__.bind(null,
              /*! ./index-69c37885.js */
              "./node_modules/@ionic/core/dist/esm/index-69c37885.js"));

            case 5:
              mod = _context4.sent;
              _context4.next = 8;
              return mod.create(animationBuilder, opts.baseEl, opts);

            case 8:
              trans = _context4.sent;
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](2);
              trans = animationBuilder(opts.baseEl, opts);

            case 14:
              fireWillEvents(opts.enteringEl, opts.leavingEl);
              _context4.next = 17;
              return playTransition(trans, opts);

            case 17:
              didComplete = _context4.sent;

              if (opts.progressCallback) {
                opts.progressCallback(undefined);
              }

              if (didComplete) {
                fireDidEvents(opts.enteringEl, opts.leavingEl);
              }

              return _context4.abrupt("return", {
                hasCompleted: didComplete,
                animation: trans
              });

            case 21:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[2, 11]]);
      }));

      return function animation(_x8, _x9) {
        return _ref4.apply(this, arguments);
      };
    }();

    const noAnimation = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(opts) {
        var enteringEl, leavingEl;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              enteringEl = opts.enteringEl;
              leavingEl = opts.leavingEl;
              _context5.next = 4;
              return waitForReady(opts, false);

            case 4:
              fireWillEvents(enteringEl, leavingEl);
              fireDidEvents(enteringEl, leavingEl);
              return _context5.abrupt("return", {
                hasCompleted: true
              });

            case 7:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));

      return function noAnimation(_x10) {
        return _ref5.apply(this, arguments);
      };
    }();

    const waitForReady = /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(opts, defaultDeep) {
        var deep, promises;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
              promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
              _context6.next = 4;
              return Promise.all(promises);

            case 4:
              _context6.next = 6;
              return notifyViewReady(opts.viewIsReady, opts.enteringEl);

            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));

      return function waitForReady(_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }();

    const notifyViewReady = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(viewIsReady, enteringEl) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!viewIsReady) {
                _context7.next = 3;
                break;
              }

              _context7.next = 3;
              return viewIsReady(enteringEl);

            case 3:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));

      return function notifyViewReady(_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }();

    const playTransition = (trans, opts) => {
      const progressCallback = opts.progressCallback; // TODO: Remove AnimationBuilder

      const promise = new Promise(resolve => {
        trans.onFinish(currentStep => {
          if (typeof currentStep === 'number') {
            resolve(currentStep === 1);
          } else if (trans.hasCompleted !== undefined) {
            resolve(trans.hasCompleted);
          }
        });
      }); // cool, let's do this, start the transition

      if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
      } else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
      } // create a callback for when the animation is done


      return promise;
    };

    const fireWillEvents = (enteringEl, leavingEl) => {
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
    };

    const fireDidEvents = (enteringEl, leavingEl) => {
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
    };

    const lifecycle = (el, eventName) => {
      if (el) {
        const ev = new CustomEvent(eventName, {
          bubbles: false,
          cancelable: false
        });
        el.dispatchEvent(ev);
      }
    };

    const shallowReady = el => {
      if (el && el.componentOnReady) {
        return el.componentOnReady();
      }

      return Promise.resolve();
    };

    const deepReady = /*#__PURE__*/function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(el) {
        var element, stencilEl;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              element = el;

              if (!element) {
                _context8.next = 10;
                break;
              }

              if (!(element.componentOnReady != null)) {
                _context8.next = 8;
                break;
              }

              _context8.next = 5;
              return element.componentOnReady();

            case 5:
              stencilEl = _context8.sent;

              if (!(stencilEl != null)) {
                _context8.next = 8;
                break;
              }

              return _context8.abrupt("return");

            case 8:
              _context8.next = 10;
              return Promise.all(Array.from(element.children).map(deepReady));

            case 10:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));

      return function deepReady(_x15) {
        return _ref8.apply(this, arguments);
      };
    }();

    const setPageHidden = (el, hidden) => {
      if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
      } else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
      }
    };

    const setZIndex = (enteringEl, leavingEl, direction) => {
      if (enteringEl !== undefined) {
        enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
      }

      if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
      }
    };

    const getIonPageElement = element => {
      if (element.classList.contains('ion-page')) {
        return element;
      }

      const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

      if (ionPage) {
        return ionPage;
      } // idk, return the original element so at least something animates and we don't have a null pointer


      return element;
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme18cbe2ccJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    const hostContext = (selector, el) => {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    const createColorClasses = color => {
      return typeof color === 'string' && color.length > 0 ? {
        'ion-color': true,
        ["ion-color-".concat(color)]: true
      } : undefined;
    };

    const getClassList = classes => {
      if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
      }

      return [];
    };

    const getClassMap = classes => {
      const map = {};
      getClassList(classes).forEach(c => map[c] = true);
      return map;
    };

    const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    const openURL = /*#__PURE__*/function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                _context9.next = 5;
                break;
              }

              router = document.querySelector('ion-router');

              if (!router) {
                _context9.next = 5;
                break;
              }

              if (ev != null) {
                ev.preventDefault();
              }

              return _context9.abrupt("return", router.push(url, direction));

            case 5:
              return _context9.abrupt("return", false);

            case 6:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));

      return function openURL(_x16, _x17, _x18) {
        return _ref9.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
    \*********************************************************************/

  /*! exports provided: f, w */

  /***/
  function node_modulesIonicCoreDistEsmWatchOptions2af96011Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "f", function () {
      return findCheckedOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "w", function () {
      return watchForOptions;
    });

    const watchForOptions = (containerEl, tagName, onChange) => {
      const mutation = new MutationObserver(mutationList => {
        onChange(getSelectedOption(mutationList, tagName));
      });
      mutation.observe(containerEl, {
        childList: true,
        subtree: true
      });
      return mutation;
    };

    const getSelectedOption = (mutationList, tagName) => {
      let newOption;
      mutationList.forEach(mut => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < mut.addedNodes.length; i++) {
          newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
      });
      return newOption;
    };

    const findCheckedOption = (el, tagName) => {
      if (el.nodeType !== 1) {
        return undefined;
      }

      const options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
      return options.find(o => o.checked === true);
    };
    /***/

  },

  /***/
  "./node_modules/ngx-xml2json/fesm2015/ngx-xml2json.js":
  /*!************************************************************!*\
    !*** ./node_modules/ngx-xml2json/fesm2015/ngx-xml2json.js ***!
    \************************************************************/

  /*! exports provided: NgxXml2jsonService, NgxXml2jsonComponent, NgxXml2jsonModule */

  /***/
  function node_modulesNgxXml2jsonFesm2015NgxXml2jsonJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxXml2jsonService", function () {
      return NgxXml2jsonService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxXml2jsonComponent", function () {
      return NgxXml2jsonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxXml2jsonModule", function () {
      return NgxXml2jsonModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */


    class NgxXml2jsonService {
      constructor() {}
      /**
       * @param {?} xml
       * @return {?}
       */


      xmlToJson(xml) {
        let
        /** @type {?} */
        obj = {};

        if (xml.nodeType === 1) {
          if (xml.attributes.length > 0) {
            obj['@attributes'] = {};

            for (let
            /** @type {?} */
            j = 0; j < xml.attributes.length; j += 1) {
              const
              /** @type {?} */
              attribute = xml.attributes.item(j);
              obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType === 3) {
          obj = xml.nodeValue;
        }

        if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
          obj = xml.childNodes[0].nodeValue;
        } else if (xml.hasChildNodes()) {
          for (let
          /** @type {?} */
          i = 0; i < xml.childNodes.length; i += 1) {
            const
            /** @type {?} */
            item = xml.childNodes.item(i);
            const
            /** @type {?} */
            nodeName = item.nodeName;

            if (typeof obj[nodeName] === 'undefined') {
              obj[nodeName] = this.xmlToJson(item);
            } else {
              if (typeof obj[nodeName].push === 'undefined') {
                const
                /** @type {?} */
                old = obj[nodeName];
                obj[nodeName] = [];
                obj[nodeName].push(old);
              }

              obj[nodeName].push(this.xmlToJson(item));
            }
          }
        }

        return obj;
      }

    }

    NgxXml2jsonService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgxXml2jsonService.ctorParameters = () => [];
    /** @nocollapse */


    NgxXml2jsonService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function NgxXml2jsonService_Factory() {
        return new NgxXml2jsonService();
      },
      token: NgxXml2jsonService,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    class NgxXml2jsonComponent {
      constructor() {}
      /**
       * @return {?}
       */


      ngOnInit() {}

    }

    NgxXml2jsonComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'lib-ngx-xml2json',
        template: "\n    <p>\n      Ngx-xml2json\n    </p>\n  ",
        styles: []
      }]
    }];
    /** @nocollapse */

    NgxXml2jsonComponent.ctorParameters = () => [];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */


    class NgxXml2jsonModule {}

    NgxXml2jsonModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [],
        declarations: [NgxXml2jsonComponent],
        exports: [NgxXml2jsonComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXhtbDJqc29uLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gteG1sMmpzb24vbGliL25neC14bWwyanNvbi5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gteG1sMmpzb24vbGliL25neC14bWwyanNvbi5jb21wb25lbnQudHMiLCJuZzovL25neC14bWwyanNvbi9saWIvbmd4LXhtbDJqc29uLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5neFhtbDJqc29uU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB4bWxUb0pzb24oeG1sKSB7XG5cbiAgICBsZXQgb2JqID0ge307XG5cbiAgICBpZiAoeG1sLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICBpZiAoeG1sLmF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICBvYmpbJ0BhdHRyaWJ1dGVzJ10gPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB4bWwuYXR0cmlidXRlcy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IHhtbC5hdHRyaWJ1dGVzLml0ZW0oaik7XG4gICAgICAgICAgb2JqWydAYXR0cmlidXRlcyddW2F0dHJpYnV0ZS5ub2RlTmFtZV0gPSBhdHRyaWJ1dGUubm9kZVZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh4bWwubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgIG9iaiA9IHhtbC5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHhtbC5oYXNDaGlsZE5vZGVzKCkgJiYgeG1sLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxICYmIHhtbC5jaGlsZE5vZGVzWzBdLm5vZGVUeXBlID09PSAzKSB7XG4gICAgICBvYmogPSB4bWwuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU7XG4gICAgfSBlbHNlIGlmICh4bWwuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHhtbC5jaGlsZE5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB4bWwuY2hpbGROb2Rlcy5pdGVtKGkpO1xuICAgICAgICBjb25zdCBub2RlTmFtZSA9IGl0ZW0ubm9kZU5hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgKG9ialtub2RlTmFtZV0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIG9ialtub2RlTmFtZV0gPSB0aGlzLnhtbFRvSnNvbihpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAodHlwZW9mIChvYmpbbm9kZU5hbWVdLnB1c2gpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc3Qgb2xkID0gb2JqW25vZGVOYW1lXTtcbiAgICAgICAgICAgIG9ialtub2RlTmFtZV0gPSBbXTtcbiAgICAgICAgICAgIG9ialtub2RlTmFtZV0ucHVzaChvbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvYmpbbm9kZU5hbWVdLnB1c2godGhpcy54bWxUb0pzb24oaXRlbSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC14bWwyanNvbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBOZ3gteG1sMmpzb25cbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmd4WG1sMmpzb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4WG1sMmpzb25Db21wb25lbnQgfSBmcm9tICcuL25neC14bWwyanNvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05neFhtbDJqc29uQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW05neFhtbDJqc29uQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hYbWwyanNvbk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7Ozs7SUFFakIsU0FBUyxDQUFDLEdBQUc7UUFFWCxxQkFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBRWIsSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtZQUN0QixJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDN0IsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDeEIsS0FBSyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNqRCx1QkFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztpQkFDOUQ7YUFDRjtTQUNGO2FBQU0sSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtZQUM3QixHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztTQUNyQjtRQUVELElBQUksR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7WUFDMUYsR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1NBQ25DO2FBQU0sSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDOUIsS0FBSyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqRCx1QkFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLHVCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUMvQixJQUFJLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssV0FBVyxFQUFFO29CQUMxQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDdEM7cUJBQU07b0JBQ0wsSUFBSSxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxXQUFXLEVBQUU7d0JBQy9DLHVCQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzFCLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ25CLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ3pCO29CQUNELEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUMxQzthQUNGO1NBQ0Y7UUFDRCxPQUFPLEdBQUcsQ0FBQztLQUNaOzs7WUExQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7SUFhRSxpQkFBaUI7Ozs7SUFFakIsUUFBUSxNQUFLOzs7WUFiZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7O0dBSVQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7YUFDWDs7Ozs7Ozs7O0FDVkQ7OztZQUdDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsRUFDUjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDaEM7Ozs7Ozs7Ozs7Ozs7OzsifQ==

    /***/
  },

  /***/
  "./src/app/config.ts":
  /*!***************************!*\
    !*** ./src/app/config.ts ***!
    \***************************/

  /*! exports provided: Config */

  /***/
  function srcAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Config", function () {
      return Config;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Config {
      constructor() {
        this.version_app = '0.0.1';
        this.local_name = "Tô nas compras";
        this.local_phone = "3138899324";
        this.local_site = "sem_site";
        this.local_whatsapp = "3180210681";
        this.local_adress = "Rua Alameda Martins 140, Bairro Morro Alto, Cidade Vespasiano";
        this.local_about = "";
        this.local_link_api = "https://tonascompras.com.br";
        this.local_link_img = "https://tonascompras.com.br/painel/aplicativo/imgs/";
        this.email_sugestao = "suporte@tonascompras.com.br";
        this.tel_cancelamento = "3199999999";
      }

    }
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map