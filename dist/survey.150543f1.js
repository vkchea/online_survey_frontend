// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"survey/survey.js":[function(require,module,exports) {
var survey = {};
var questionnaire = document.getElementById("questionnaire");
var questionTracker = 0;
/* Creating drop down box option of question types */

var selectBox = document.createElement('select');
var option1 = document.createElement('option');
var option2 = document.createElement('option');
var option3 = document.createElement('option');
var option4 = document.createElement('option');
var option5 = document.createElement('option');
var option6 = document.createElement('option');
var option7 = document.createElement('option');
var option8 = document.createElement('option');
var option9 = document.createElement('option');
option1.innerHTML = "Rating Scale";
selectBox.appendChild(option1);
option1.id = "rating-scale"; // option2.innerHTML = "Closed-Ended";
// selectBox.appendChild(option2);
// option2.id = "close-ended";
// option3.innerHTML = "Dichotomous";
// selectBox.appendChild(option3);
// option3.id = "dichotomous";

option4.innerHTML = "Multiple Choice";
selectBox.appendChild(option4);
option4.id = "multiple-choice"; // option5.innerHTML = "Likert";
// selectBox.appendChild(option5);
// option5.id = "likert";
// option6.innerHTML = "Matrix";
// selectBox.appendChild(option6);
// option6.id = "matrix";

option7.innerHTML = "Open-Ended";
selectBox.appendChild(option7);
option7.id = "open-ended"; // option8.innerHTML = "Demographic";
// selectBox.appendChild(option8);
// option8.id = "demographic";
// option9.innerHTML = "Checkbox";
// selectBox.appendChild(option9);
// option9.id = "checkbox";

var questionOptions = document.getElementById('questionOptions');
questionOptions.id = "questionOptions";
questionOptions.appendChild(selectBox);
/* Creating button to add a question to the questionnaire. */

var addQuestionBtn = document.createElement('button');
addQuestionBtn.innerHTML = "+";
addQuestionBtn.addEventListener('click', function () {
  var questionNumber = "Q" + questionTracker;
  var questionType = "";
  var option = selectBox.options[selectBox.selectedIndex].id;
  var div = document.createElement('div');

  if (option === 'rating-scale') {
    div.id = "rating-scale" + questionNumber;
    questionType = 'rating-scale';
    var question = "";
    var rScaleType = "Graphing";
    var br = document.createElement('br');
    div.appendChild(br);
    var newLabel = document.createElement('label');
    newLabel.setAttribute('for', 'label');
    newLabel.innerText = "Rating-Scale Question";
    div.appendChild(newLabel);
    var br = document.createElement('br');
    div.appendChild(br);
    var ratingScaleText = document.createElement('input');
    ratingScaleText.type = "text";
    ratingScaleText.id = "ratingScaleText" + questionNumber;
    div.appendChild(ratingScaleText);
    ratingScaleText.addEventListener('change', function () {
      question = ratingScaleText.value;
      survey[parseInt(ratingScaleText.id.replace('ratingScaleTextQ', ""))] = {
        question: question,
        questionNumber: questionNumber,
        questionType: questionType,
        rScaleType: rScaleType
      };
      console.log(survey);
    });
    var ratingScaleType = document.createElement('select');
    ratingScaleType.id = "ratingScale";
    var ratingScaleOption1 = document.createElement('option');
    var ratingScaleOption2 = document.createElement('option');
    var ratingScaleOption3 = document.createElement('option');
    ratingScaleOption1.innerHTML = "Graphing Rating Scale";
    ratingScaleType.appendChild(ratingScaleOption1);
    ratingScaleOption1.id = "graphing-rating-scale";
    ratingScaleOption2.innerHTML = "Numerical Rating Scale";
    ratingScaleType.appendChild(ratingScaleOption2);
    ratingScaleOption2.id = "numerical-rating-scale";
    ratingScaleOption3.innerHTML = "Degree of Agreement Rating Scale";
    ratingScaleType.appendChild(ratingScaleOption3);
    ratingScaleOption3.id = "degree-of-agreement";
    var ratingScaleDiv = document.createElement('div');
    ratingScaleDiv.id = "ratingScaleDiv";
    /* Default rating scale type = graphing-rating-scale */

    var radio1 = document.createElement('input');
    var radio2 = document.createElement('input');
    var radio3 = document.createElement('input');
    var radio4 = document.createElement('input');
    var radio5 = document.createElement('input');
    var br = document.createElement('br');
    ratingScaleDiv.appendChild(br);
    radio1.type = "radio";
    radio1.disabled = true;
    radio1.value = 'hd';
    var label1 = document.createElement('label');
    label1.for = 'hd';
    label1.innerText = "Highly Dissatisfied";
    radio2.type = "radio";
    radio2.disabled = true;
    radio2.value = 'd';
    var label2 = document.createElement('label');
    label2.for = 'd';
    label2.innerText = "Dissatisfied";
    radio3.type = "radio";
    radio3.disabled = true;
    radio3.value = 'n';
    var label3 = document.createElement('label');
    label3.for = 'n';
    label3.innerText = "Neutral";
    radio4.type = "radio";
    radio4.disabled = true;
    radio4.value = 's';
    var label4 = document.createElement('label');
    label4.for = 's';
    label4.innerText = "Satisfied";
    radio5.type = "radio";
    radio5.disabled = true;
    radio5.value = 'hs';
    var label5 = document.createElement('label');
    label5.for = 'hs';
    label5.innerText = "Highly Satisfied";
    ratingScaleDiv.appendChild(radio1);
    ratingScaleDiv.appendChild(label1);
    var br = document.createElement('br');
    ratingScaleDiv.appendChild(br);
    ratingScaleDiv.appendChild(radio2);
    ratingScaleDiv.appendChild(label2);
    var br = document.createElement('br');
    ratingScaleDiv.appendChild(br);
    ratingScaleDiv.appendChild(radio3);
    ratingScaleDiv.appendChild(label3);
    var br = document.createElement('br');
    ratingScaleDiv.appendChild(br);
    ratingScaleDiv.appendChild(radio4);
    ratingScaleDiv.appendChild(label4);
    var br = document.createElement('br');
    ratingScaleDiv.appendChild(br);
    ratingScaleDiv.appendChild(radio5);
    ratingScaleDiv.appendChild(label5);
    ratingScaleType.addEventListener('change', function () {
      console.log(ratingScaleType.options[ratingScaleType.selectedIndex].id);
      var ratingScaleTypeOption = ratingScaleType.options[ratingScaleType.selectedIndex].id;

      if (ratingScaleTypeOption === 'graphing-rating-scale') {
        rScaleType = 'graphing';
        ratingScaleDiv.id += "Graphing";
        console.log(ratingScaleDiv.id);
        ratingScaleDiv.innerHTML = "";
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        radio1.type = "radio";
        radio1.disabled = true;
        radio1.value = 'hd';

        var _label = document.createElement('label');

        _label.for = 'hd';
        _label.innerText = "Highly Dissatisfied";
        radio2.type = "radio";
        radio2.disabled = true;
        radio2.value = 'd';

        var _label2 = document.createElement('label');

        _label2.for = 'd';
        _label2.innerText = "Dissatisfied";
        radio3.type = "radio";
        radio3.disabled = true;
        radio3.value = 'n';

        var _label3 = document.createElement('label');

        _label3.for = 'n';
        _label3.innerText = "Neutral";
        radio4.type = "radio";
        radio4.disabled = true;
        radio4.value = 's';

        var _label4 = document.createElement('label');

        _label4.for = 's';
        _label4.innerText = "Satisfied";
        radio5.type = "radio";
        radio5.disabled = true;
        radio5.value = 'hs';

        var _label5 = document.createElement('label');

        _label5.for = 'hs';
        _label5.innerText = "Highly Satisfied";
        ratingScaleDiv.appendChild(radio1);
        ratingScaleDiv.appendChild(_label);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio2);
        ratingScaleDiv.appendChild(_label2);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio3);
        ratingScaleDiv.appendChild(_label3);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio4);
        ratingScaleDiv.appendChild(_label4);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio5);
        ratingScaleDiv.appendChild(_label5);
        div.appendChild(ratingScaleDiv);
      } else if (ratingScaleTypeOption === 'numerical-rating-scale') {
        rScaleType = 'numerical';
        ratingScaleDiv.innerHTML = "";
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        radio1.type = "radio";
        radio1.disabled = true;
        radio1.value = 'hd';

        var _label6 = document.createElement('label');

        _label6.for = 'hd';
        _label6.innerText = "Totally Satisfied (5)";
        radio2.type = "radio";
        radio2.disabled = true;
        radio2.value = 'd';

        var _label7 = document.createElement('label');

        _label7.for = 'd';
        _label7.innerText = "4";
        radio3.type = "radio";
        radio3.disabled = true;
        radio3.value = 'n';

        var _label8 = document.createElement('label');

        _label8.for = 'n';
        _label8.innerText = "3";
        radio4.type = "radio";
        radio4.disabled = true;
        radio4.value = 's';

        var _label9 = document.createElement('label');

        _label9.for = 's';
        _label9.innerText = "2";
        radio5.type = "radio";
        radio5.disabled = true;
        radio5.value = 'hs';

        var _label10 = document.createElement('label');

        _label10.for = 'hs';
        _label10.innerText = "Totally Dissatisfied(1)";
        ratingScaleDiv.appendChild(radio1);
        ratingScaleDiv.appendChild(_label6);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio2);
        ratingScaleDiv.appendChild(_label7);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio3);
        ratingScaleDiv.appendChild(_label8);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio4);
        ratingScaleDiv.appendChild(_label9);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio5);
        ratingScaleDiv.appendChild(_label10);
        div.appendChild(ratingScaleDiv);
      } else if (ratingScaleTypeOption === 'degree-of-agreement') {
        rScaleType = 'doa';
        ratingScaleDiv.innerHTML = "";
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        radio1.type = "radio";
        radio1.disabled = true;
        radio1.value = 'hd';

        var _label11 = document.createElement('label');

        _label11.for = 'hd';
        _label11.innerText = "Strongly Agree";
        radio2.type = "radio";
        radio2.disabled = true;
        radio2.value = 'd';

        var _label12 = document.createElement('label');

        _label12.for = 'd';
        _label12.innerText = "Agree";
        radio3.type = "radio";
        radio3.disabled = true;
        radio3.value = 'n';

        var _label13 = document.createElement('label');

        _label13.for = 'n';
        _label13.innerText = "Neither Agree nor Disagree";
        radio4.type = "radio";
        radio4.disabled = true;
        radio4.value = 's';

        var _label14 = document.createElement('label');

        _label14.for = 's';
        _label14.innerText = "Disagree";
        radio5.type = "radio";
        radio5.disabled = true;
        radio5.value = 'hs';

        var _label15 = document.createElement('label');

        _label15.for = 'hs';
        _label15.innerText = "Strongly Disagree";
        ratingScaleDiv.appendChild(radio1);
        ratingScaleDiv.appendChild(_label11);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio2);
        ratingScaleDiv.appendChild(_label12);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio3);
        ratingScaleDiv.appendChild(_label13);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio4);
        ratingScaleDiv.appendChild(_label14);
        var br = document.createElement('br');
        ratingScaleDiv.appendChild(br);
        ratingScaleDiv.appendChild(radio5);
        ratingScaleDiv.appendChild(_label15);
        div.appendChild(ratingScaleDiv);
      }

      survey[parseInt(ratingScaleText.id.replace('ratingScaleTextQ', ""))] = {
        question: question,
        questionNumber: questionNumber,
        questionType: questionType,
        rScaleType: rScaleType
      };
      console.log(survey);
    });
    div.appendChild(ratingScaleType);
    div.appendChild(ratingScaleDiv);
    questionnaire.appendChild(div);
  } else if (option === 'close-ended') {} else if (option === 'dichotomous') {} else if (option === 'multiple-choice') {
    questionType = "multiple-choice";
    var _question = "";
    var responses = [];
    var br = document.createElement('br');
    questionnaire.appendChild(br);

    var _newLabel = document.createElement('label');

    _newLabel.setAttribute('for', 'label');

    _newLabel.innerText = "Multiple Choice Question";
    questionnaire.appendChild(_newLabel);
    var br = document.createElement('br');
    questionnaire.appendChild(br);
    var multipleChoiceText = document.createElement('input');
    multipleChoiceText.type = "text";
    multipleChoiceText.id = "multipleChoiceText" + questionNumber;
    multipleChoiceText.addEventListener('change', function () {
      _question = multipleChoiceText.value;
      survey[parseInt(multipleChoiceText.id.replace('multipleChoiceTextQ', ""))] = {
        question: _question,
        questionNumber: questionNumber,
        questionType: questionType,
        responses: responses
      };
      console.log(survey);
    });
    questionnaire.appendChild(multipleChoiceText);
    var br = document.createElement('br');
    questionnaire.appendChild(br);

    var _div = document.createElement('div');

    _div.id = 'responseAmtQ';
    var p = document.createElement('p');
    p.innerText = "How many responses would you like to create? (5 max)";

    _div.appendChild(p);

    questionnaire.appendChild(_div);
    var newInput = document.createElement('input');
    var responseAmt = 0;
    newInput.type = "text";
    newInput.id = "responseAmt";
    newInput.addEventListener('change', function () {
      responseAmt = parseInt(newInput.value);
    });

    _div.appendChild(newInput);

    questionnaire.appendChild(_div);
    var button = document.createElement('button');
    button.type = "button";
    button.id = "responseAmtBtn";
    button.addEventListener('click', function () {
      _div.innerHTML = "";

      var _loop = function _loop(i) {
        responses[i] = "";
        br = document.createElement('br');
        questionnaire.appendChild(br);
        var newInput = document.createElement('input');
        newInput.type = "checkbox";
        newInput.id = "multipleChoiceResponseText";
        questionnaire.appendChild(newInput);
        var responseText = document.createElement('input');
        responseText.type = "text";
        responseText.id = "multipleChoiceResponseText" + i;
        responseText.addEventListener('change', function () {
          var id = parseInt(responseText.id.replace('multipleChoiceResponseText', ''));
          responses[id] = responseText.value;
          survey[parseInt(multipleChoiceText.id.replace('multipleChoiceTextQ', ""))] = {
            question: _question,
            questionNumber: questionNumber,
            questionType: questionType,
            responses: responses
          };
          console.log(survey);
        });
        questionnaire.appendChild(responseText);
      };

      for (var i = 0; i < responseAmt; i++) {
        var br;

        _loop(i);
      }
    });
    button.innerText = 'Add Responses';

    _div.appendChild(button);

    questionnaire.appendChild(_div);
  } else if (option === 'likert') {} else if (option === 'matrix') {} else if (option === 'open-ended') {
    var _question2 = "";
    questionType = "open-ended";
    var br = document.createElement('br');
    questionnaire.appendChild(br);

    var _newLabel2 = document.createElement('label');

    _newLabel2.setAttribute('for', 'label');

    _newLabel2.innerText = "Open-Ended Question";
    questionnaire.appendChild(_newLabel2);
    var br = document.createElement('br');
    questionnaire.appendChild(br);
    var openEndedText = document.createElement('input');
    openEndedText.type = "text";
    openEndedText.id = "openEndedText" + questionNumber;
    openEndedText.addEventListener('change', function () {
      _question2 = openEndedText.value;
      survey[parseInt(openEndedText.id.replace('openEndedTextQ', ""))] = {
        question: _question2,
        questionNumber: questionNumber,
        questionType: questionType
      };
      console.log(survey);
    });
    questionnaire.appendChild(openEndedText);
  } else if (option === 'demographic') {} else if (option === 'checkbox') {}

  questionTracker += 1;
});
questionOptions.appendChild(addQuestionBtn);
/* Form Save */

var saveForm = document.getElementById("saveForm");
var saveQuestionBtn = document.createElement('button');
saveQuestionBtn.innerText = "Create Survey";
saveQuestionBtn.addEventListener('click', function () {
  console.log(survey);
});
saveForm.appendChild(saveQuestionBtn);
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60603" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","survey/survey.js"], null)
//# sourceMappingURL=/survey.150543f1.js.map