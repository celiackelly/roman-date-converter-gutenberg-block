/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/react-app/src/components/Button.js":
/*!************************************************!*\
  !*** ./src/react-app/src/components/Button.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Button; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


function Button(_ref) {
  let {
    type,
    buttonText,
    onClick
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: type,
    onClick: onClick
  }, buttonText);
}

/***/ }),

/***/ "./src/react-app/src/components/CardSection.js":
/*!*****************************************************!*\
  !*** ./src/react-app/src/components/CardSection.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CardSection; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


function CardSection(_ref) {
  let {
    title,
    className,
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: className + " card"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, title), children);
}

/***/ }),

/***/ "./src/react-app/src/components/DateConverter.js":
/*!*******************************************************!*\
  !*** ./src/react-app/src/components/DateConverter.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DateConverter; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardSection */ "./src/react-app/src/components/CardSection.js");
/* harmony import */ var _DateFieldset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateFieldset */ "./src/react-app/src/components/DateFieldset.js");
/* harmony import */ var _OptionsFieldset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OptionsFieldset */ "./src/react-app/src/components/OptionsFieldset.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./src/react-app/src/components/Button.js");
/* harmony import */ var _utils_dateConversions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dateConversions */ "./src/react-app/src/utils/dateConversions.js");







function DateConverter() {
  const today = new Date();
  const [month, setMonth] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(today.getMonth() + 1);
  const [day, setDay] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(today.getDate());
  const [year, setYear] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(today.getFullYear());
  const [era, setEra] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('A.D. / C.E.');
  const [isDisplayYearChecked, setIsDisplayYearChecked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [yearDisplayOption, setYearDisplayOption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('secularNotation');
  const [isDateSubmitted, setIsDateSubmitted] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [submittedFormData, setSubmittedFormData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isAbbreviatedChecked, setIsAbbreviatedChecked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    romanDate,
    formattedYear
  } = submittedFormData ? (0,_utils_dateConversions__WEBPACK_IMPORTED_MODULE_5__.outputFormattedRomanDate)(submittedFormData) : {
    romanDate: null,
    formattedYear: null
  };
  function handleMonthChange(e) {
    const isBeforeRomeFounded = (0,_utils_dateConversions__WEBPACK_IMPORTED_MODULE_5__.checkBeforeRomeFounded)(day, e.target.value, year, era);
    if (isBeforeRomeFounded) {
      setYearDisplayOption(null);
    }
    setMonth(Number(e.target.value));
  }
  function handleDayChange(e) {
    const isBeforeRomeFounded = (0,_utils_dateConversions__WEBPACK_IMPORTED_MODULE_5__.checkBeforeRomeFounded)(e.target.value, month, year, era);
    if (isBeforeRomeFounded) {
      setYearDisplayOption(null);
    }
    setDay(Number(e.target.value));
  }
  function handleYearChange(e) {
    const isBeforeRomeFounded = (0,_utils_dateConversions__WEBPACK_IMPORTED_MODULE_5__.checkBeforeRomeFounded)(day, month, e.target.value, era);
    if (isBeforeRomeFounded) {
      setYearDisplayOption(null);
    }
    setYear(Number(e.target.value));
  }
  function handleEraChange(e) {
    const isBeforeRomeFounded = (0,_utils_dateConversions__WEBPACK_IMPORTED_MODULE_5__.checkBeforeRomeFounded)(day, month, year, e.target.value);
    if (isBeforeRomeFounded) {
      setYearDisplayOption(null);
    }
    setEra(e.target.value);
  }
  function handleDisplayYearChange(e) {
    if (!e.target.checked) {
      setYearDisplayOption(null);
    }
    const isBeforeRomeFounded = (0,_utils_dateConversions__WEBPACK_IMPORTED_MODULE_5__.checkBeforeRomeFounded)(day, month, year, era);
    if (isBeforeRomeFounded) {
      setYearDisplayOption(null);
    }
    setIsDisplayYearChecked(!isDisplayYearChecked);
  }
  function handleYearDisplayOptionChange(e) {
    setYearDisplayOption(e.target.value);
  }
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const formData = new FormData(e.target);

    //normalize submitted form data and save in state
    setSubmittedFormData((0,_utils_dateConversions__WEBPACK_IMPORTED_MODULE_5__.normalizeFormData)(formData));

    //Change state so results card is shown instead of form 
    setIsDateSubmitted(true);
  }
  function changeOptions() {
    setDay(submittedFormData.day);
    setMonth(submittedFormData.month);
    setYear(submittedFormData.year);
    setEra(submittedFormData.era);
    setIsDisplayYearChecked(submittedFormData.displayYear);
    setYearDisplayOption(submittedFormData.yearDisplayOption);
    setIsAbbreviatedChecked(false);

    //Change state so form is shown 
    setIsDateSubmitted(false);
  }
  function resetDate() {
    setDay(today.getDate());
    setMonth(today.getMonth() + 1);
    setYear(today.getFullYear());
    setEra('A.D. / C.E.');
    setIsDisplayYearChecked(true);
    setYearDisplayOption(null);
    setIsAbbreviatedChecked(false);
    setSubmittedFormData(null);
  }
  if (!isDateSubmitted) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CardSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "form-card",
      title: "Find the Roman date for:"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      method: "post",
      onSubmit: handleSubmit
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_DateFieldset__WEBPACK_IMPORTED_MODULE_2__["default"], {
      month: month,
      handleMonthChange: handleMonthChange,
      day: day,
      handleDayChange: handleDayChange,
      year: year,
      handleYearChange: handleYearChange,
      era: era,
      handleEraChange: handleEraChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_OptionsFieldset__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isBeforeRomeFounded: (0,_utils_dateConversions__WEBPACK_IMPORTED_MODULE_5__.checkBeforeRomeFounded)(day, month, year, era),
      isDisplayYearChecked: isDisplayYearChecked,
      handleDisplayYearChange: handleDisplayYearChange,
      yearDisplayOption: yearDisplayOption,
      handleYearDisplayOptionChange: handleYearDisplayOptionChange
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "btn-group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "submit",
      buttonText: "Submit"
    }))));
  } else {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CardSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "results-card",
      title: "Roman date:"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, isAbbreviatedChecked ? (0,_utils_dateConversions__WEBPACK_IMPORTED_MODULE_5__.abbreviateDate)(romanDate) : romanDate), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, isAbbreviatedChecked ? (0,_utils_dateConversions__WEBPACK_IMPORTED_MODULE_5__.abbreviateYear)(formattedYear) : formattedYear)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      name: "abbreviated",
      checked: isAbbreviatedChecked,
      onChange: e => setIsAbbreviatedChecked(!isAbbreviatedChecked)
    }), "display abbreviated date"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "btn-group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "button",
      buttonText: "Change options",
      onClick: changeOptions
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
      type: "button",
      buttonText: "Convert another date",
      onClick: () => {
        setIsDateSubmitted(false);
        resetDate();
      }
    })));
  }
}

/***/ }),

/***/ "./src/react-app/src/components/DateFieldset.js":
/*!******************************************************!*\
  !*** ./src/react-app/src/components/DateFieldset.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DateFieldset; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_dateConversions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dateConversions */ "./src/react-app/src/utils/dateConversions.js");



function DateFieldset(_ref) {
  let {
    month,
    day,
    year,
    handleMonthChange,
    handleDayChange,
    handleYearChange,
    era,
    handleEraChange
  } = _ref;
  function calcDaysInMonth() {
    let daysCount = 31;
    if (month === 4 || month === 6 || month === 9 || month === 11) {
      daysCount = 30;
    }
    if (month === 2) {
      daysCount = !(0,_utils_dateConversions__WEBPACK_IMPORTED_MODULE_1__.checkLeapYear)(year) ? 28 : 29;
    }
    return daysCount;
  }
  const dayOptions = Array.from({
    length: calcDaysInMonth()
  }, (_, i) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    key: i + 1,
    value: i + 1
  }, i + 1));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }, "Month"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: "month",
    value: month,
    onChange: handleMonthChange
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "1"
  }, "January"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "2"
  }, "February"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "3"
  }, "March"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "4"
  }, "April"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "5"
  }, "May"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "6"
  }, "June"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "7"
  }, "July"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "8"
  }, "August"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "9"
  }, "September"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "10"
  }, "October"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "11"
  }, "November"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "12"
  }, "December"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }, "Day"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: "day",
    value: day,
    onChange: handleDayChange
  }, dayOptions)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }, "Year"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    name: "year",
    type: "number",
    min: "1",
    max: "3999",
    step: "1",
    value: year,
    onChange: handleYearChange
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }, "Era"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    name: "era",
    value: era,
    onChange: handleEraChange
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "A.D. / C.E."
  }, "A.D. / C.E."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "B.C. / B.C.E."
  }, "B.C. / B.C.E."))));
}

/***/ }),

/***/ "./src/react-app/src/components/OptionsFieldset.js":
/*!*********************************************************!*\
  !*** ./src/react-app/src/components/OptionsFieldset.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OptionsFieldset; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


function OptionsFieldset(_ref) {
  let {
    isBeforeRomeFounded,
    isDisplayYearChecked,
    handleDisplayYearChange,
    yearDisplayOption,
    handleYearDisplayOptionChange
  } = _ref;
  const yearDisplayOptionsRadio = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    required: true,
    type: "radio",
    name: "yearDisplayOption",
    value: "secularNotation",
    checked: yearDisplayOption === "secularNotation",
    onChange: handleYearDisplayOptionChange
  }), "display year in secular notation"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    required: true,
    type: "radio",
    name: "yearDisplayOption",
    value: "christianNotation",
    checked: yearDisplayOption === "christianNotation",
    onChange: handleYearDisplayOptionChange
  }), "display year in Christian notation"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    required: true,
    type: "radio",
    name: "yearDisplayOption",
    value: "AUCNotation",
    checked: yearDisplayOption === "AUCNotation",
    onChange: handleYearDisplayOptionChange,
    disabled: isBeforeRomeFounded || !isDisplayYearChecked
  }), "display year ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "italics"
  }, "ab urbe condita")));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fieldset", {
    className: "options-fieldset"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    name: "displayYear",
    onChange: handleDisplayYearChange,
    checked: isDisplayYearChecked
  }), "display year"), isDisplayYearChecked ? yearDisplayOptionsRadio : null);
}

/***/ }),

/***/ "./src/react-app/src/utils/dateConversions.js":
/*!****************************************************!*\
  !*** ./src/react-app/src/utils/dateConversions.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abbreviateDate": function() { return /* binding */ abbreviateDate; },
/* harmony export */   "abbreviateYear": function() { return /* binding */ abbreviateYear; },
/* harmony export */   "checkBeforeRomeFounded": function() { return /* binding */ checkBeforeRomeFounded; },
/* harmony export */   "checkLeapYear": function() { return /* binding */ checkLeapYear; },
/* harmony export */   "normalizeFormData": function() { return /* binding */ normalizeFormData; },
/* harmony export */   "outputFormattedRomanDate": function() { return /* binding */ outputFormattedRomanDate; }
/* harmony export */ });
function integerToRomanNumeral(num) {
  //max integer you can express in Roman numerals without a line over is 3999
  const map = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let result = '';
  for (let key in map) {
    const repeatCounter = Math.floor(num / map[key]);
    if (repeatCounter !== 0) {
      result += key.repeat(repeatCounter);
    }
    num %= map[key];
    if (num === 0) return result;
  }
  return result;
}
function calculateMarkerDays(day, month, year) {
  // calculate the Ides and Nones for the input month, and the Kalends for the next month
  const markerDays = {};

  // set the Ides and Nones for the month
  switch (month) {
    // March, July, October, May, the Ides are on the 15th day
    case 3:
    case 5:
    case 7:
    case 10:
      markerDays.ides = 15;
      markerDays.nones = 7;
      break;
    default:
      markerDays.ides = 13;
      markerDays.nones = 5;
      break;
  }

  // set the Kalends for the next month; for easier math, this is the days in the month + 1
  switch (month) {
    // 30 days have Sep, Apr, Jun, and Nov
    case 4:
    case 6:
    case 9:
    case 11:
      markerDays.kalends = 31;
      break;
    // The Roman calendar inserts the leap day after Feb 24th - only dates after that will be affected
    case 2:
      markerDays.kalends = checkLeapYear(year) && day > 24 ? 30 : 29;
      break;
    default:
      markerDays.kalends = 32;
      break;
  }
  return markerDays;
}
function convertToRomanDate(day, month, year) {
  //create a dictionary of months with accusative and ablative forms
  const months = {
    1: {
      acc: "Ianuarias",
      abl: "Ianuariis"
    },
    2: {
      acc: "Februarias",
      abl: "Februariis"
    },
    3: {
      acc: "Martias",
      abl: "Martiis"
    },
    4: {
      acc: "Apriles",
      abl: "Aprilibus"
    },
    5: {
      acc: "Maias",
      abl: "Maiis"
    },
    6: {
      acc: "Iunias",
      abl: "Iuniis"
    },
    7: {
      acc: "Iulias",
      abl: "Iuliis"
    },
    8: {
      acc: "Augustas",
      abl: "Augustis"
    },
    9: {
      acc: "Septembres",
      abl: "Septembribus"
    },
    10: {
      acc: "Octobres",
      abl: "Octobribus"
    },
    11: {
      acc: "Novembres",
      abl: "Novembribus"
    },
    12: {
      acc: "Decembres",
      abl: "Decembribus"
    }
  };

  // calculate the Ides and Nones for the input month, and the Kalends for the next month
  const markerDays = calculateMarkerDays(day, month, year);

  //calculate the Roman date string (month + day)
  let romanDate;
  switch (day) {
    //start with the days that fall on the Kalends, Ides, Nones
    case 1:
      romanDate = `Kalendis ${months[month].abl}`;
      break;
    case markerDays.nones:
      romanDate = `Nonis ${months[month].abl}`;
      break;
    case markerDays.ides:
      romanDate = `Idibus ${months[month].abl}`;
      break;

    // Other days will countdown to the next epoch
    default:
      //calculate the countdown and start the romanDate string
      let countdown;
      if (day < markerDays.nones) {
        countdown = markerDays.nones - day + 1; // countdown Roman style, with inclusive counting
        romanDate = `Nonas ${months[month].acc}`; // start the romanDate string
      } else if (day < markerDays.ides) {
        countdown = markerDays.ides - day + 1; // countdown Roman style
        romanDate = `Idus ${months[month].acc}`; // start the romanDate string
      } else {
        // if the date is after the Ides, count down to the Kalends of the next month
        countdown = markerDays.kalends - day + 1; // countdown Roman style
        romanDate = `Kalendas ${months[month === 12 ? 1 : month + 1].acc}`; // start the romanDate string
      }

      // pridie (the day before) is 2 days before the marker day 
      if (countdown === 2) {
        romanDate = `pridie ${romanDate}`;
      } else {
        const romanNumeralDay = integerToRomanNumeral(countdown).toLowerCase();

        // normally we just count down, but Feb 25 of a leap year is weird- it's called "ante diem bis vi Kalendas Martias..."
        const leapYearModifier = checkLeapYear(year) && day === 25 ? 'bis ' : '';
        romanDate = `ante diem ${leapYearModifier}${romanNumeralDay} ${romanDate}`;
      }
      break;
  }
  return romanDate;
}
function formatYear(year, era, yearDisplayOption) {
  let notation;
  if (yearDisplayOption === 'AUCNotation') {
    if (era === 'A.D. / C.E.') {
      year = year + 753;
    } else {
      year = 754 - year;
    }
    notation = 'ab urbe condita';
  }
  //otherwise, it's B.C or A.D, in secular or Christian notation - 4 possibilities
  if (yearDisplayOption === 'secularNotation') {
    notation = era === 'B.C. / B.C.E.' ? 'ante aeram vulgarem' : 'aerae vulgaris';
  }
  if (yearDisplayOption === 'christianNotation') {
    notation = era === 'B.C. / B.C.E.' ? 'ante Christum natum' : 'post Christum natum';
  }
  return `anno ${integerToRomanNumeral(year)} ${notation}`;
}
function checkLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  }
  // a year that is evenly divisible by 100 (for example, 1900) is a leap year only if it is also evenly divisible by 400.
  if (year % 100 === 0) {
    return year % 400 === 0 ? true : false;
  }
  return true;
}
function checkBeforeRomeFounded(day, month, year, era) {
  month = Number(month);
  day = Number(day);

  //if it's C.E., it's definitely not before the founding
  if (era === 'A.D. / C.E.') {
    return false;
  }

  //if it's B.C.E. and the year is greater/earlier than 753, it's before the founding
  if (year > 753) {
    return true;
  }
  if (year < 753) {
    return false;
  }
  if (year === 753) {
    if (month < 4) {
      return true;
    } else if (month > 4) {
      return false;
    } else if (day < 21) {
      //if we're in April and the day is before April 21, it's before
      return true;
    } else {
      return false;
    }
  }
}
function normalizeFormData(formData) {
  const formJson = Object.fromEntries(formData.entries());
  const normalizedData = {
    ...formJson
  };
  normalizedData.day = Number(normalizedData.day);
  normalizedData.month = Number(normalizedData.month);
  normalizedData.year = Number(normalizedData.year);

  //by default in HTML, if a checkbox is checked, the data is submitted with the value "on"; else no data for that checkbox is sent. 
  normalizedData.displayYear ? normalizedData.displayYear = true : normalizedData.displayYear = false;
  if (!normalizedData.yearDisplayOption) {
    normalizedData.yearDisplayOption = null;
  }
  return normalizedData;
}
function abbreviateDate(dateString) {
  let abbreviatedDate = dateString;
  abbreviatedDate = abbreviatedDate.replace('ante diem', 'a.d.');

  //abbreviate day/month; remember to include periods
  abbreviatedDate = abbreviatedDate.replace(/(prid|Kal|Id|Non|Ian|Feb|Mart|Apr|Aug|Sept|Oct|Nov|Dec)\w+/g, '$1.');
  return abbreviatedDate;
}
function abbreviateYear(yearString) {
  let abbreviatedYear = yearString;

  //abbreviate year notation 
  abbreviatedYear = abbreviatedYear.replace('ab urbe condita', 'A.U.C.');
  abbreviatedYear = abbreviatedYear.replace('ante aeram vulgarem', 'ante aer. vulg.');
  abbreviatedYear = abbreviatedYear.replace('aerae vulgaris', 'aer. vulg.');
  abbreviatedYear = abbreviatedYear.replace('ante Christum natum', 'a.C.n.');
  abbreviatedYear = abbreviatedYear.replace('post Christum natum', 'p.C.n.');
  return abbreviatedYear;
}
function outputFormattedRomanDate(formData) {
  const {
    day,
    displayYear,
    era,
    month,
    year,
    yearDisplayOption
  } = formData;
  const romanDate = convertToRomanDate(day, month, year);
  const formattedYear = displayYear ? formatYear(year, era, yearDisplayOption) : '';
  return {
    romanDate: romanDate,
    formattedYear: formattedYear
  };
}

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************************!*\
  !*** ./src/react-app/src/view.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_DateConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DateConverter */ "./src/react-app/src/components/DateConverter.js");


function App() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_DateConverter__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}
addEventListener("DOMContentLoaded", event => {
  const domElement = document.getElementById('react-app');
  const uiElement = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(App);
  if (_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot) {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(domElement).render(uiElement);
  } else {
    (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)(uiElement, domElement);
  }
});
}();
/******/ })()
;
//# sourceMappingURL=view.js.map