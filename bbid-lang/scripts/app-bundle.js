define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'BBID';
      config.map([{
        route: ['', '*path'],
        name: 'home',
        viewPorts: {
          top: {
            moduleId: 'panel/index'
          },
          bottom: {
            moduleId: 'descriptor/index'
          }
        }
      }]);
    };

    return App;
  }();
});
define('colorPalette',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Color = exports.Color = function () {
    function Color(id, name, common, pantone, hex, usage) {
      _classCallCheck(this, Color);

      this.id = id;
      this.name = name;
      this.common = common;
      this.pantone = pantone;
      this.hex = hex;
      this.usage = usage;
    }

    _createClass(Color, [{
      key: 'css',
      get: function get() {
        if (this.hex.length === 0) {
          return 'transparent';
        }
        return '#' + this.hex;
      }
    }]);

    return Color;
  }();

  var Colors = exports.Colors = new Map([[1, new Color(1, 'White', 'White', 'CoolGrey 1 C', 'F2F3F2', 133071)], [2, new Color(2, 'Grey', 'Light Gray', '422 C', 'A1A5A2', 86689)], [3, new Color(3, 'Light yellow', 'Light Yellow', '1215 C', 'F9E999', 327)], [4, new Color(4, 'Brick Red', 'Salmon', '', '', 187)], [5, new Color(5, 'Brick yellow', 'Tan', '467 C', 'D7C599', 20819)], [6, new Color(6, 'Light green', 'Light Green', '351 C', 'C2DAB8', 206)], [11, new Color(11, 'Pastel Blue', 'Maersk Blue', '', '', 670)], [12, new Color(12, 'Light Orange Brown', 'Earth Orange', '1385 C', 'CB8442', 272)], [16, new Color(16, 'Pink', 'Pink', '', '', 693)], [18, new Color(18, 'Nougat', 'Flesh', '472 C', 'CC8E68', 221)], [20, new Color(20, 'Nature', 'Milky White', '', '', 186)], [21, new Color(21, 'Bright red', 'Red', '032 C', 'C4281B', 119562)], [22, new Color(22, 'Medium Reddish Violet', 'Medium Dark Pink', '2375 C', 'C470A0', 33)], [23, new Color(23, 'Bright Blue', 'Blue', '293 C', '0D69AB', 78234)], [24, new Color(24, 'Bright yellow', 'Yellow', '116 C', 'F5CD2F', 85145)], [25, new Color(25, 'Earth Orange', 'Brown', '469 C', '62473B', 8519)], [26, new Color(26, 'Black', 'Black', 'Process Black C', '1B2A34', 237479)], [27, new Color(27, 'Dark grey', 'Dark Gray', '418 C', '6D6E6C', 22719)], [28, new Color(28, 'Dark green', 'Green', '348 C', '287F46', 24767)], [29, new Color(29, 'Medium green', 'Medium Green', '353 C', 'A1C48B', 226)], [36, new Color(36, 'Light Yellowish Orange', 'Very Light Orange', '148 C', 'F3CF9B', 8)], [37, new Color(37, 'Bright Green', 'Bright Green', '355 C', '4B974A', 1251)], [38, new Color(38, 'Dark Orange', 'Dark Orange', '471 C', 'A05F34', 856)], [39, new Color(39, 'Light bluish violet', 'Light Violet', '2706 C', 'C1CADE', 155)], [40, new Color(40, 'Transparent', 'Trans-Clear', 'CoolGrey 1 C', 'ECECEC', 11516)], [41, new Color(41, 'Tr. Red', 'Trans-Red', '185 C', 'CD544B', 7099)], [42, new Color(42, 'Tr. Lg blue', 'Trans-Light Blue', '304 C', 'C1DFF0', 3066)], [43, new Color(43, 'Tr. Blue', 'Trans-Dark Blue', '298 C', '7BB6E8', 4277)], [44, new Color(44, 'Tr. Yellow', 'Trans-Yellow', '393 C', 'F7F18D', 4530)], [45, new Color(45, 'Light blue', 'Light Blue', '545 C', 'B4D2E3', 387)], [47, new Color(47, 'Tr. Flu. Reddish orange', 'Trans-Neon Orange', '165 C', 'D9856C', 3023)], [48, new Color(48, 'Tr. Green', 'Trans-Green', '360 C', '84B68D', 1974)], [49, new Color(49, 'Tr. Flu. Green', 'Trans-Neon Green', '387 C', 'F8F184', 3788)], [50, new Color(50, 'Phosp. White', 'Glow In Dark Opaque', '427 C', 'ECE8DE', 180)], [100, new Color(100, 'Light red', 'Light Salmon', '169 C', 'EEC4B6', 153)], [102, new Color(102, 'Medium blue', 'Medium Blue', '284 C', '6E99C9', 3593)], [103, new Color(103, 'Light grey', 'Very Light Gray', '421 C', 'C7C1B7', 406)], [104, new Color(104, 'Bright violet', 'Purple', '2592 C', '6B327B', 987)], [105, new Color(105, 'Br. yellowish orange', 'Medium Orange', '137 C', 'E29B3F', 591)], [106, new Color(106, 'Bright orange', 'Orange', '151 C', 'DA8540', 7413)], [107, new Color(107, 'Bright bluish green', 'Dark Turquoise', '327 C', '008F9B', 1053)], [110, new Color(110, 'Bright Bluish Violet', 'Violet', '327 C', '435493', 192)], [111, new Color(111, 'Tr. Brown', 'Trans-Black', 'WarmGrey 3 C', 'BFB7B1', 1789)], [112, new Color(112, 'Medium Bluish Violet', 'Blue-Violet', '2726 C', '6874AC', 219)], [113, new Color(113, 'Tr. Medi. reddish violet', 'Trans-Dark Pink', '230 c', 'E4ADC8', 1149)], [114, new Color(114, 'Tr. Medium Reddish-Violet w. Glitter 2%', 'Glitter Trans-Dark Pink', '', '', 119)], [115, new Color(115, 'Med. yellowish green', 'Medium Lime', '381 C', 'C7D23C', 148)], [116, new Color(116, 'Med. bluish green', 'Light Turquoise', '326 c', '55A5AF', 37)], [117, new Color(117, 'Transparent Glitter', 'Glitter Trans-Clear', '', '', 7)], [118, new Color(118, 'Light bluish green', 'Aqua', '324 C', 'B7D7D5', 203)], [119, new Color(119, 'Br. yellowish green', 'Lime', '390 C', 'A4BD46', 4213)], [120, new Color(120, 'Lig. yellowish green', 'Light Lime', '365 C', 'D9E4A7', 25)], [124, new Color(124, 'Bright reddish violet', 'Magenta', '241 C', '923978', 250)], [125, new Color(125, 'Light Orange', 'Light Orange', '1555 C', 'EAB891', 97)], [126, new Color(126, 'Tr. Bright bluish violet', 'Trans-Purple', '271 C', 'A5A5CB', 430)], [127, new Color(127, 'Gold', 'Pearl Light Gold', '156 C', 'DCBC81', 692)], [128, new Color(128, 'Dark Nougat', '', '471 C', 'AE7A59', 11)], [129, new Color(129, 'Tr. Bright Bluish Violet w. Glitter 2%', 'Glitter Trans-Purple', '', '', 11)], [131, new Color(131, 'Silver', 'Pearl Light Gray', '429 C', '9CA3A8', 3713)], [132, new Color(132, '[Black Glitter]', 'Speckle Black-Silver', '', '', 187)], [135, new Color(135, 'Sand blue', 'Sand Blue', '5415 C', '74869C', 1019)], [136, new Color(136, 'Sand violet', 'Sand Purple', '666 C', '877C90', 60)], [138, new Color(138, 'Sand yellow', 'Dark Tan', '451 C', '958A73', 1320)], [139, new Color(139, 'Copper', 'Copper', '', '', 205)], [140, new Color(140, 'Earth blue', 'Dark Blue', '2955 C', '203A56', 4191)], [141, new Color(141, 'Earth Green', 'Dark Green', '350 C', '27462C', 1955)], [143, new Color(143, 'Tr. Flu. Blue', 'Trans-Medium Blue', '657 C', 'CFE2F7', 295)], [145, new Color(145, 'Sand blue metallic', 'Metal Blue', '652 C', '7988a1', 131)], [148, new Color(148, 'Metallic Dark Grey', 'Pearl Dark Gray', '446 C', '575857', 451)], [151, new Color(151, 'Sand green', 'Sand Green', '624 C', '789081', 4496)], [153, new Color(153, 'Sand red', 'Sand Red', '4995 C', '957976', 560)], [154, new Color(154, 'Dark red', 'Dark Red', '194 C', '7B2E2F', 5920)], [157, new Color(157, 'Transparent Fluorescent Yellow', 'Trans-Neon Yellow', '', '', 91)], [158, new Color(158, 'Tr. Flu. Red', '', '211 C', 'E1A4C2', 18)], [176, new Color(176, 'Red Flip/Flop', '', '', '', 0)], [178, new Color(178, 'Yellow Flip/Flop', '', '', '', 0)], [179, new Color(179, 'Silver flip/flop', 'Flat Silver', '', '', 728)], [180, new Color(180, 'Curry', '', '131 C', 'D7A94B', 18)], [182, new Color(182, 'Tr. Bright Orange', 'Trans-Orange', '', '', 1200)], [183, new Color(183, 'Metallic White', '', '', '', 4)], [187, new Color(187, 'Sand Yellow Metallic', 'Flat Dark Gold', '', '', 258)], [191, new Color(191, 'Flame yellowish orange', 'Bright Light Orange', '137 C', 'E8AB2D', 253)], [192, new Color(192, 'Reddish Brown', 'Reddish Brown', '499 C', '694027', 10624)], [194, new Color(194, 'Medium stone grey', 'Light Bluish Gray', '429 C', 'A3A2A4', 66528)], [196, new Color(196, 'Dark Royal blue', 'Dark Blue-Violet', '', '', 5)], [198, new Color(198, 'Bright Reddish Lilac', 'Light Purple', '254 C', '8E4285', 62)], [199, new Color(199, 'Dark stone grey', 'Dark Bluish Gray', '431 C', '635F61', 50228)], [200, new Color(200, 'Lemon Metallic', 'Metallic Green', '', '', 32)], [208, new Color(208, 'Light stone grey', 'Very Light Bluish Gray', '428 C', 'E5E4DE', 350)], [212, new Color(212, 'Light Royal blue', 'Bright Light Blue', '292 C', '9FC3E9', 2)], [216, new Color(216, 'Rust', 'Rust', '174 C', '8F4C2A', 20)], [217, new Color(217, 'Brown', 'Dark Flesh', '161 C', '7C5C45', 87)], [221, new Color(221, 'Bright Purple', 'Dark Pink', '232 C', 'CD6298', 1311)], [222, new Color(222, 'Light Purple', 'Bright Pink', '236 C', 'E4ADC8', 51)], [223, new Color(223, 'Light Pink', 'Light Pink', '183 C', 'DC9095', 242)], [226, new Color(226, 'Cool Yellow', 'Bright Light Yellow', '120 C', 'FDEA8C', 34)], [232, new Color(232, 'Dove blue', 'Sky Blue', '311 C', '7DBBDD', 105)], [268, new Color(268, 'Medium Lilac', 'Dark Purple', '2685 C', '342B75', 418)], [283, new Color(283, 'Light Nougat', 'Light Flesh', '', '', 346)], [294, new Color(294, 'Phosh. Green', 'Glow In Dark Trans', '', '', 9)], [297, new Color(297, 'Warm Gold', 'Pearl Gold', '', '', 197)], [301, new Color(301, '[Silver]', 'Chrome Silver', '', '', 1287)], [308, new Color(308, 'Dark Brown', 'Dark Brown', '', '', 714)], [311, new Color(311, 'Transparent Bright Green', 'Trans-Bright Green', '', '', 122)], [312, new Color(312, 'Medium Nougat', 'Medium Dark Flesh', '', '', 142)], [321, new Color(321, 'Dark Azur', 'Dark Azure', '', '', 3)], [323, new Color(323, 'Aqua', 'Light Aqua', '', '', 0)], [9000, new Color(9000, '', 'Speckle Black-Copper', '', '', 10)], [9001, new Color(9001, '', 'Speckle Black-Gold', '', '', 0)], [9004, new Color(9004, '', 'Chrome Black', '', '', 3)], [9005, new Color(9005, '', 'Chrome Blue', '', '', 23)], [9006, new Color(9006, '', 'Chrome Antique Brass', '', '', 29)], [9007, new Color(9007, '', 'Chrome Gold', '', '', 877)], [9008, new Color(9008, '', 'Chrome Green', '', '', 2)], [9009, new Color(9009, '', 'Chrome Pink', '', '', 11)], [9010, new Color(9010, '', 'Speckle DBGray-Silver', '', '', 5)], [9011, new Color(9011, '', 'Fabuland Brown', '', '', 106)], [9014, new Color(9014, '', 'Lavender', '', '', 0)], [9016, new Color(9016, '', 'Medium Azure', '', '', 0)], [9017, new Color(9017, '', 'Medium Lavender', '', '', 0)], [9018, new Color(9018, '', 'Medium Violet', '', '', 21)], [9020, new Color(9020, '', 'Metallic Gold', '', '', 159)], [9021, new Color(9021, '', 'Metallic Silver', '', '', 897)], [9023, new Color(9023, '', 'Olive Green', '', '', 0)], [9025, new Color(9025, '', 'Pearl Very Light Gray', '', '', 0)], [9026, new Color(9026, '', 'Pearl White', '', '', 47)], [9029, new Color(9029, '', 'Trans-Very Lt Blue', '', '', 45)], [9030, new Color(9030, '', 'Trans-Light Purple', '', '', 34)], [9032, new Color(9032, '', 'Trans-Pink', '', '', 251)]]);
});
define('create',['exports', 'storage', 'encoding', 'clients/8brick', 'aurelia-framework'], function (exports, _storage, _encoding, _brick, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.CreateBbid = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var CreateBbid = exports.CreateBbid = (_dec = (0, _aureliaFramework.inject)(_storage.Storage, _brick.EightBrick), _dec(_class = function () {
    function CreateBbid(storage, eightBrick) {
      var _this = this;

      _classCallCheck(this, CreateBbid);

      this.eightBrick = eightBrick;
      this.storage = storage;
      this.elementId = '';
      this.photo = null;
      this.reader = new FileReader();
      this.photoData = '';

      this.reader.onloadend = function () {
        _this.photoData = _this.reader.result;
      };

      this.bbid = '';
      this.busy = false;
    }

    CreateBbid.prototype.activate = function activate() {
      var _this2 = this;

      this.storage.read('descriptor', function (doc) {
        _this2.bbid = _encoding.Encode.BBID(doc);
      });
    };

    CreateBbid.prototype.previewImage = function previewImage() {
      var fileHandle = this.fileInput.files[0];
      if (fileHandle) {
        this.reader.readAsDataURL(fileHandle);
      }
    };

    CreateBbid.prototype.create = function create() {
      var _this3 = this;

      this.busy = true;
      return this.eightBrick.create(this.bbid, this.elementId, this.photoData).catch(function () {}).then(function () {
        _this3.busy = false;
      });
    };

    _createClass(CreateBbid, [{
      key: 'fileInput',
      get: function get() {
        return document.getElementById('photoUpload');
      }
    }]);

    return CreateBbid;
  }()) || _class);
});
define('encoding',['exports', 'radix-64'], function (exports, _radix) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Encode = undefined;

  var _radix2 = _interopRequireDefault(_radix);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Encode = exports.Encode = function () {
    function Encode() {
      _classCallCheck(this, Encode);
    }

    Encode.radix = function radix(value) {
      var r = (0, _radix2.default)();
      return r.encodeInt(value);
    };

    Encode.padRight = function padRight(any, padWith, length) {
      var str = any.toString();
      for (var repeatFor = length - str.length; repeatFor > 0; repeatFor--) {
        str += padWith;
      }
      return str;
    };

    Encode.toBBID = function toBBID(descriptor) {
      var $id = '';

      $id += Encode.radix(1);

      $id += Encode.radix(descriptor.isAssembly ? 1 : 0);

      var $block = '';
      (descriptor.studOrientations || []).forEach(function (arr) {
        $block += Encode.radix(arr.max);
        $block += Encode.radix(arr.min);
        $block += Encode.radix(arr.adjustment);
      });
      $id += Encode.padRight($block, '-', 15);

      var $heightBlock = Encode.radix(descriptor.height || 0);
      $id += Encode.padRight($heightBlock, '.', 2);

      var $hingeBlock = '';
      (descriptor.studOrientations || []).forEach(function (arr) {
        $hingeBlock += Encode.radix(arr.orientation ? arr.orientation : 0);
        $hingeBlock += Encode.radix(arr.type ? arr.type : 0);
      });
      $id += Encode.padRight($hingeBlock, '-', 6);

      var $socketBlock = '';
      (descriptor.sockets || []).forEach(function (arr) {
        $socketBlock += Encode.radix(arr.max);
        $socketBlock += Encode.radix(arr.min);
        $socketBlock += Encode.radix(arr.adjustment);
      });
      $id += Encode.padRight($socketBlock, '-', 15);

      var $clipsBlock = '';
      (descriptor.clips || []).forEach(function (arr) {
        $clipsBlock += Encode.radix(arr.count);
      });
      $id += Encode.padRight($clipsBlock, '-', 4);

      $id += Encode.radix(descriptor.axleSockets || 0);

      var $axleBlock = '';
      (descriptor.axles || []).forEach(function (arr) {
        $axleBlock += Encode.radix(arr.lengthUnit);
      });
      $id += Encode.padRight($axleBlock, '-', 4);

      var $pinsBlock = '';
      (descriptor.pins || []).forEach(function (arr) {
        $pinsBlock += Encode.radix(arr.lengthUnit);
        $pinsBlock += Encode.radix(arr.count);
      });
      $id += Encode.padRight($pinsBlock, '-', 6);

      var $pinSocketsBlock = '';
      (descriptor.pinSockets || []).forEach(function (arr) {
        $pinSocketsBlock += Encode.radix(arr.count);
      });
      $id += Encode.padRight($pinSocketsBlock, '-', 4);

      var $barsBlock = '';
      (descriptor.bars || []).forEach(function (arr) {
        $barsBlock += Encode.radix(arr.count);
      });
      $id += Encode.padRight($barsBlock, '-', 4);

      var $sleeveBlock = '';
      (descriptor.sleeves || []).forEach(function (arr) {
        $sleeveBlock += Encode.radix(arr.count);
      });
      $id += Encode.padRight($sleeveBlock, '-', 4);

      $id += Encode.radix(descriptor.isMiniBar ? 1 : 0);

      var $colorBlock = '';
      (descriptor.colors || []).forEach(function (color) {
        $colorBlock += Encode.radix(color.colorId);
      });
      $id += Encode.padRight($colorBlock, '-', 4);

      $id += Encode.radix(descriptor.stickerMin || 0);
      $id += Encode.radix(descriptor.stickerMax || 0);

      return $id;
    };

    return Encode;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('storage',['exports', 'pouchdb'], function (exports, _pouchdb) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Storage = undefined;

  var _pouchdb2 = _interopRequireDefault(_pouchdb);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Storage = exports.Storage = function () {
    function Storage() {
      _classCallCheck(this, Storage);

      this.db = new _pouchdb2.default('aurelia-app');
    }

    Storage.prototype.update = function update(key, data) {
      if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) == 'object') {
        data._id = key;
      } else {
        var _data;

        data = (_data = {}, _data[key] = data, _data);
      }
      return this.db.put(data);
    };

    Storage.prototype.read = function read(key) {
      return this.db.get(key);
    };

    Storage.prototype.listen = function listen(key, listener) {
      var options = {
        since: 'now',
        live: true,
        include_docs: true
      };

      return this.db.changes(options).on('change', function (change) {
        if (change.id == key) {
          listener(change);
        }
      });
    };

    return Storage;
  }();
});
define('clients/8brick',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.EightBrick = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var EightBrick = exports.EightBrick = function () {
    function EightBrick() {
      _classCallCheck(this, EightBrick);

      var httpClient = new _aureliaFetchClient.HttpClient();
      httpClient.configure(function (config) {
        config.useStandardConfiguration().withBaseUrl('http://localhost:8888/api/').withDefaults({
          headers: {
            'X-Requested-With': 'Fetch'
          }
        });
      });
      this.http = httpClient;
    }

    EightBrick.prototype.create = function create(bbid, elementId, photo) {
      var options = {
        method: 'POST',
        body: (0, _aureliaFetchClient.json)({
          bbid: bbid,
          elementId: elementId,
          photo: photo
        })
      };
      return this.http.fetch('pieces', options);
    };

    return EightBrick;
  }();
});
define('panel/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Panel = exports.Panel = function () {
    function Panel() {
      _classCallCheck(this, Panel);
    }

    Panel.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.map([{
        route: ['', '*path'],
        name: 'responsive',
        title: 'Matches',
        moduleId: './responsive'
      }]);
    };

    return Panel;
  }();
});
define('panel/responsive',['exports', 'storage', 'aurelia-framework', 'encoding', 'qrious'], function (exports, _storage, _aureliaFramework, _encoding, _qrious) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Responsive = undefined;

  var _qrious2 = _interopRequireDefault(_qrious);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var Responsive = exports.Responsive = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function Responsive(storage) {
      _classCallCheck(this, Responsive);

      this.storage = storage;
      this.settingsListener = null;
      this.descriptor = {};
      this.qr = null;
    }

    Responsive.prototype.attached = function attached() {
      var _this = this;

      this.settingsListener = this.storage.listen('descriptor', function (change) {
        _this.updateDescriptor(change.doc);
      });

      this.qr = new _qrious2.default({
        element: document.getElementById('qr'),
        value: this.bbid
      });
    };

    Responsive.prototype.activate = function activate() {
      var _this2 = this;

      return this.storage.read('descriptor').then(function (doc) {
        _this2.descriptor = Object.assign({}, doc);
      }).catch(function (err) {});
    };

    Responsive.prototype.updateDescriptor = function updateDescriptor(doc) {
      var _this3 = this;

      var keys = Object.keys(this.descriptor);
      keys.forEach(function (key) {
        _this3.descriptor[key] = undefined;
      });

      this.descriptor = Object.assign(this.descriptor, doc);
      this.qr.value = this.bbid;
    };

    Responsive.prototype.detached = function detached() {
      this.settingsListener.cancel();
    };

    _createClass(Responsive, [{
      key: 'bbid',
      get: function get() {
        return _encoding.Encode.toBBID(this.descriptor);
      }
    }]);

    return Responsive;
  }()) || _class);
});
define('resources/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['./elements/descriptor-navigation.html', './value-converters/color', './value-converters/hasValuesFor', './value-converters/hinge']);
  }
});
define('descriptor/assembly',['exports', 'storage', 'aurelia-framework'], function (exports, _storage, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DescriptorAssembly = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorAssembly = exports.DescriptorAssembly = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorAssembly(store) {
      _classCallCheck(this, DescriptorAssembly);

      this.isAssembly = false;
      this.storage = store;
    }

    DescriptorAssembly.prototype.activate = function activate() {
      var _this = this;

      return this.storage.read('descriptor').then(function (doc) {
        _this.isAssembly = doc.isAssembly || _this.isAssembly || false;
      }).catch(function (err) {});
    };

    DescriptorAssembly.prototype.toggleAssembly = function toggleAssembly() {
      var _this2 = this;

      this.isAssembly = !this.isAssembly;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.isAssembly = _this2.isAssembly;
        return _this2.storage.update('descriptor', doc);
      });
    };

    return DescriptorAssembly;
  }()) || _class);
});
define('descriptor/axle-sockets',['exports', 'storage', 'aurelia-framework'], function (exports, _storage, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DescriptorAssembly = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorAssembly = exports.DescriptorAssembly = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorAssembly(store) {
      _classCallCheck(this, DescriptorAssembly);

      this.axleSockets = '';
      this.storage = store;
    }

    DescriptorAssembly.prototype.activate = function activate() {
      var _this = this;

      return this.storage.read('descriptor').then(function (doc) {
        _this.axleSockets = doc.axleSockets || _this.axleSockets || false;
      }).catch(function (err) {});
    };

    DescriptorAssembly.prototype.updateAxles = function updateAxles() {
      var _this2 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.axleSockets = _this2.axleSockets;
        return _this2.storage.update('descriptor', doc);
      });
    };

    return DescriptorAssembly;
  }()) || _class);
});
define('descriptor/axles',['exports', 'aurelia-framework', 'storage'], function (exports, _aureliaFramework, _storage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AxleArrangement = exports.DescriptorAxles = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorAxles = exports.DescriptorAxles = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorAxles(storage) {
      var _this = this;

      _classCallCheck(this, DescriptorAxles);

      this.storage = storage;
      this.axle0 = new AxleArrangement();
      this.axle0.show = true;

      this.axle1 = new AxleArrangement();
      this.axle2 = new AxleArrangement();
      this.axle3 = new AxleArrangement();

      this.changeCallback = function () {
        _this.axlesChanged();
      };
    }

    DescriptorAxles.prototype.attached = function attached() {
      var _this2 = this;

      this.storage.read('descriptor').then(function (doc) {
        doc.axles = doc.axles || [];
        doc.axles.forEach(function (h, index) {
          _this2['axle' + index] = new AxleArrangement(h);
          if (index === 0) {
            _this2['axle' + index].show = true;
          }
        });
      });
    };

    DescriptorAxles.prototype.axlesChanged = function axlesChanged() {
      var _this3 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.axles = [Object.assign({}, _this3.axle0), Object.assign({}, _this3.axle1), Object.assign({}, _this3.axle2), Object.assign({}, _this3.axle3)];
        return _this3.storage.update('descriptor', doc);
      });
    };

    DescriptorAxles.prototype.removeSide = function removeSide(axle) {
      axle.toggle();
      this.axlesChanged();
    };

    return DescriptorAxles;
  }()) || _class);

  var AxleArrangement = exports.AxleArrangement = function () {
    function AxleArrangement(data) {
      _classCallCheck(this, AxleArrangement);

      data = data || {};
      this.lengthUnit = data.lengthUnit || '';

      this.show = this.lengthUnit;
    }

    AxleArrangement.prototype.toggle = function toggle() {
      if (this.show) {
        this.count = '';
      }
      this.show = !this.show;
    };

    _createClass(AxleArrangement, [{
      key: 'lengthMm',
      get: function get() {
        if (this.lengthUnit) {
          return this.lengthUnit * 8;
        } else {
          return '';
        }
      },
      set: function set(value) {
        if (!value) {
          this.lengthUnit = 0;
        } else {
          this.lengthUnit = Math.round(value / 8);
        }
      }
    }]);

    return AxleArrangement;
  }();
});
define('descriptor/bars',['exports', 'aurelia-framework', 'storage'], function (exports, _aureliaFramework, _storage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BarArrangement = exports.DescriptorBars = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorBars = exports.DescriptorBars = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorBars(storage) {
      var _this = this;

      _classCallCheck(this, DescriptorBars);

      this.storage = storage;
      this.bar0 = new BarArrangement();
      this.bar0.show = true;

      this.bar1 = new BarArrangement();
      this.bar2 = new BarArrangement();
      this.bar3 = new BarArrangement();

      this.changeCallback = function () {
        _this.barsChanged();
      };
    }

    DescriptorBars.prototype.attached = function attached() {
      var _this2 = this;

      this.storage.read('descriptor').then(function (doc) {
        doc.bars = doc.bars || [];
        doc.bars.forEach(function (h, index) {
          _this2['bar' + index] = new BarArrangement(h);
          if (index === 0) {
            _this2['bar' + index].show = true;
          }
        });
      });
    };

    DescriptorBars.prototype.barsChanged = function barsChanged() {
      var _this3 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.bars = [Object.assign({}, _this3.bar0), Object.assign({}, _this3.bar1), Object.assign({}, _this3.bar2), Object.assign({}, _this3.bar3)];
        return _this3.storage.update('descriptor', doc);
      });
    };

    DescriptorBars.prototype.removeSide = function removeSide(bar) {
      bar.toggle();
      this.barsChanged();
    };

    return DescriptorBars;
  }()) || _class);

  var BarArrangement = exports.BarArrangement = function () {
    function BarArrangement(data) {
      _classCallCheck(this, BarArrangement);

      data = data || {};
      this.count = data.count || '';

      this.show = this.count;
    }

    BarArrangement.prototype.toggle = function toggle() {
      if (this.show) {
        this.count = '';
      }
      this.show = !this.show;
    };

    return BarArrangement;
  }();
});
define('descriptor/clips',['exports', 'aurelia-framework', 'storage'], function (exports, _aureliaFramework, _storage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ClipArrangement = exports.DescriptorClips = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorClips = exports.DescriptorClips = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorClips(storage) {
      var _this = this;

      _classCallCheck(this, DescriptorClips);

      this.storage = storage;
      this.clip0 = new ClipArrangement();
      this.clip0.show = true;

      this.clip1 = new ClipArrangement();
      this.clip2 = new ClipArrangement();
      this.clip3 = new ClipArrangement();

      this.changeCallback = function () {
        _this.clipsChanged();
      };
    }

    DescriptorClips.prototype.attached = function attached() {
      var _this2 = this;

      this.storage.read('descriptor').then(function (doc) {
        doc.clips = doc.clips || [];
        doc.clips.forEach(function (h, index) {
          _this2['clip' + index] = new ClipArrangement(h);
          if (index === 0) {
            _this2['clip' + index].show = true;
          }
        });
      });
    };

    DescriptorClips.prototype.clipsChanged = function clipsChanged() {
      var _this3 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.clips = [Object.assign({}, _this3.clip0), Object.assign({}, _this3.clip1), Object.assign({}, _this3.clip2), Object.assign({}, _this3.clip3)];
        return _this3.storage.update('descriptor', doc);
      });
    };

    DescriptorClips.prototype.removeSide = function removeSide(clip) {
      clip.toggle();
      this.clipsChanged();
    };

    return DescriptorClips;
  }()) || _class);

  var ClipArrangement = exports.ClipArrangement = function () {
    function ClipArrangement(data) {
      _classCallCheck(this, ClipArrangement);

      data = data || {};
      this.count = data.count || '';

      this.show = this.count;
    }

    ClipArrangement.prototype.toggle = function toggle() {
      if (this.show) {
        this.count = '';
      }
      this.show = !this.show;
    };

    return ClipArrangement;
  }();
});
define('descriptor/colors',['exports', 'aurelia-framework', 'storage', 'colorPalette'], function (exports, _aureliaFramework, _storage, _colorPalette) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ColorOption = exports.DescriptorColor = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorColor = exports.DescriptorColor = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorColor(storage) {
      var _this = this;

      _classCallCheck(this, DescriptorColor);

      this.storage = storage;
      this.changeCallback = function () {
        _this.colorsChanged();
      };

      this.color0 = new ColorOption(null, this.changeCallback);
      this.color0.show = true;

      this.color1 = new ColorOption(null, this.changeCallback);
      this.color2 = new ColorOption(null, this.changeCallback);
      this.color3 = new ColorOption(null, this.changeCallback);
    }

    DescriptorColor.prototype.attached = function attached() {
      var _this2 = this;

      this.storage.read('descriptor').then(function (doc) {
        doc.colors = doc.colors || [];
        doc.colors.forEach(function (h, index) {
          _this2['color' + index] = new ColorOption(h);
          _this2['color' + index].cb = _this2.changeCallback;
          if (index === 0) {
            _this2['color' + index].show = true;
          }
        });
      });
    };

    DescriptorColor.prototype.colorsChanged = function colorsChanged() {
      var _this3 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.colors = [{ colorId: _this3.color0.colorId }, { colorId: _this3.color1.colorId }, { colorId: _this3.color2.colorId }, { colorId: _this3.color3.colorId }];
        return _this3.storage.update('descriptor', doc);
      });
    };

    DescriptorColor.prototype.removeColor = function removeColor(color) {
      color.toggle();
      this.colorsChanged();
    };

    DescriptorColor.prototype.clearColorId = function clearColorId(color) {
      color.colorId = '';
      this.colorsChanged();
    };

    return DescriptorColor;
  }()) || _class);

  var ColorOption = exports.ColorOption = function () {
    function ColorOption(data, cb) {
      _classCallCheck(this, ColorOption);

      data = data || {};
      this.colorId = data.colorId || '';
      this._searchTerm = '';
      this._searchMatches = [];
      this.show = this.colorId;
      if (cb) {
        this.cb = cb;
      }
    }

    ColorOption.prototype.searchForColor = function searchForColor() {
      this._searchMatches.splice(0);
      var terms = this._searchTerm.toLowerCase();
      terms = terms.replace('transparent', 'trans');
      terms = terms.split(' ');

      var matches = new Map();

      var _loop = function _loop() {
        if (_isArray) {
          if (_i >= _iterator.length) return 'break';
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) return 'break';
          _ref = _i.value;
        }

        var _ref4 = _ref,
            colorId = _ref4[0],
            color = _ref4[1];

        var termHits = 0;
        terms.forEach(function (t) {
          var nameMatch = color.name.toLowerCase().indexOf(t) > -1;
          var commonMatch = color.common.toLowerCase().indexOf(t) > -1;
          var idMatch = color.id == t;
          var hasMatch = nameMatch || commonMatch || idMatch;
          if (hasMatch) {
            termHits++;
          }
        });
        if (termHits == terms.length && !matches.has(color.id)) {
          matches.set(color.id, color);
        }
      };

      for (var _iterator = _colorPalette.Colors, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        var _ret = _loop();

        if (_ret === 'break') break;
      }
      for (var _iterator2 = matches, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var _ref3 = _ref2,
            key = _ref3[0],
            match = _ref3[1];

        this._searchMatches.push(match);
      }
    };

    ColorOption.prototype.selectColor = function selectColor(color) {
      this.colorId = color.id;
      this._searchMatches.splice(0);
      this.searchTerm = '';
      this.cb();
    };

    ColorOption.prototype.toggle = function toggle() {
      if (this.show) {
        this.colorId = '';
      }
      this.show = !this.show;
    };

    _createClass(ColorOption, [{
      key: 'colors',
      get: function get() {
        return _colorPalette.Colors;
      }
    }, {
      key: 'searchTerm',
      get: function get() {
        return this._searchTerm;
      },
      set: function set(value) {
        this._searchTerm = value;
        if (this._searchTerm.length > 1) {
          this.searchForColor();
        } else {
          this._searchMatches.splice(0);
        }
      }
    }, {
      key: 'searchMatches',
      get: function get() {
        return this._searchMatches.sort(function (a, b) {
          return b.usage - a.usage;
        });
      }
    }, {
      key: 'colorSelectedCss',
      get: function get() {
        if (_colorPalette.Colors.has(colorId)) {
          return _colorPalette.Colors.get(colorId).css;
        }
        return 'transparent';
      }
    }]);

    return ColorOption;
  }();
});
define('descriptor/dashboard',['exports', 'aurelia-framework', 'storage', 'aurelia-router'], function (exports, _aureliaFramework, _storage, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DescriptorDashboard = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorDashboard = exports.DescriptorDashboard = (_dec = (0, _aureliaFramework.inject)(_storage.Storage, _aureliaRouter.Router), _dec(_class = function () {
    function DescriptorDashboard(store, router) {
      _classCallCheck(this, DescriptorDashboard);

      this.router = router;
      this.storage = store;
      this.settingsListener = null;
      this.descriptor = {};
    }

    DescriptorDashboard.prototype.attached = function attached() {
      var _this = this;

      this.settingsListener = this.storage.listen('descriptor', function (doc) {
        _this.settings(doc);
      });
    };

    DescriptorDashboard.prototype.activate = function activate() {
      var _this2 = this;

      return this.storage.read('descriptor').then(function (doc) {
        _this2.descriptor = Object.assign({}, doc);
      }).catch(function (err) {});
    };

    DescriptorDashboard.prototype.settings = function settings(doc) {
      var _this3 = this;

      var keys = Object.keys(this.descriptor);
      keys.forEach(function (key) {
        _this3.descriptor[key] = undefined;
      });

      this.descriptor = Object.assign(this.descriptor, doc);
    };

    DescriptorDashboard.prototype.detached = function detached() {
      this.settingsListener.cancel();
    };

    return DescriptorDashboard;
  }()) || _class);
});
define('descriptor/height',['exports', 'storage', 'aurelia-framework'], function (exports, _storage, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DescriptorHeight = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var DescriptorHeight = exports.DescriptorHeight = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorHeight(store) {
      _classCallCheck(this, DescriptorHeight);

      this.height = '';
      this.storage = store;
    }

    DescriptorHeight.prototype.activate = function activate() {
      var _this = this;

      return this.storage.read('descriptor').then(function (doc) {
        _this.height = doc.height || _this.height || false;
      }).catch(function (err) {});
    };

    DescriptorHeight.prototype.updateHeight = function updateHeight() {
      var _this2 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.height = _this2.height;
        return _this2.storage.update('descriptor', doc);
      });
    };

    _createClass(DescriptorHeight, [{
      key: 'heightMm',
      get: function get() {
        if (this.height) {
          return this.height * 2;
        }
        return '';
      },
      set: function set(value) {
        if (value) {
          this.height = Math.round(value / 2);
        } else {
          this.height = '';
        }
        this.updateHeight();
      }
    }]);

    return DescriptorHeight;
  }()) || _class);
});
define('descriptor/hinge',['exports', 'aurelia-framework', 'storage'], function (exports, _aureliaFramework, _storage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HingeType = exports.HingeOrientation = exports.HingeArrangement = exports.DescriptorHinge = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorHinge = exports.DescriptorHinge = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorHinge(storage) {
      var _this = this;

      _classCallCheck(this, DescriptorHinge);

      this.storage = storage;
      this.hinge0 = new HingeArrangement();
      this.hinge0.show = true;

      this.hinge1 = new HingeArrangement();
      this.hinge2 = new HingeArrangement();

      this.changeCallback = function () {
        _this.hingesChanged();
      };
    }

    DescriptorHinge.prototype.attached = function attached() {
      var _this2 = this;

      this.storage.read('descriptor').then(function (doc) {
        doc.hinges = doc.hinges || [];
        doc.hinges.forEach(function (h, index) {
          _this2['hinge' + index] = new HingeArrangement(h);
          if (index === 0) {
            _this2['hinge' + index].show = true;
          }
        });
      });
    };

    DescriptorHinge.prototype.hingesChanged = function hingesChanged() {
      var _this3 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.hinges = [Object.assign({}, _this3.hinge0), Object.assign({}, _this3.hinge1), Object.assign({}, _this3.hinge2)];
        return _this3.storage.update('descriptor', doc);
      });
    };

    DescriptorHinge.prototype.removeOrientation = function removeOrientation(hinge) {
      hinge.toggle();
      this.hingesChanged();
    };

    return DescriptorHinge;
  }()) || _class);

  var HingeArrangement = exports.HingeArrangement = function () {
    function HingeArrangement(data) {
      _classCallCheck(this, HingeArrangement);

      data = data || {};
      this.orientation = data.orientation || '';
      this.type = data.type || '';

      this.show = this.orientation || this.type;
    }

    HingeArrangement.prototype.toggle = function toggle() {
      if (this.show) {
        this.orientation = '';
        this.type = '';
      }
      this.show = !this.show;
    };

    return HingeArrangement;
  }();

  var HingeOrientation = exports.HingeOrientation = new Map([['0', 'None'], ['1', 'Horizontal'], ['2', 'Vertical'], ['3', 'Both']]);

  var HingeType = exports.HingeType = new Map([['0', 'None'], ['1', 'Ridge'], ['2', 'Narrow Finger'], ['3', 'Wide Finger'], ['4', '1 x 2 Brick Hinge'], ['5', 'Long Pin'], ['6', 'Short Pin']]);
});
define('descriptor/index',['exports', 'storage', 'aurelia-framework'], function (exports, _storage, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DescriptorIndex = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorIndex = exports.DescriptorIndex = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorIndex(storage) {
      _classCallCheck(this, DescriptorIndex);

      this.storage = storage;
      this.navigatingTo = null;
      this.routes = [{
        route: '',
        name: 'descriptor-dashboard',
        moduleId: './dashboard'
      }, {
        route: 'assembly',
        title: 'Assembly',
        name: 'descriptor-assembly',
        moduleId: './assembly',
        nav: true,
        settings: {
          isAssembly: false
        }
      }, {
        route: 'studs',
        title: 'Studs',
        name: 'descriptor-studs',
        moduleId: './studs',
        nav: true
      }, {
        route: 'height',
        title: 'Height',
        name: 'descriptor-height',
        moduleId: './height',
        nav: true
      }, {
        route: 'hinge',
        title: 'Hinges',
        name: 'descriptor-hinge',
        moduleId: './hinge',
        nav: true
      }, {
        route: 'sockets',
        title: 'Sockets',
        name: 'descriptor-sockets',
        moduleId: './sockets',
        nav: true
      }, {
        route: 'clips',
        title: 'Clips',
        name: 'descriptor-clips',
        moduleId: './clips',
        nav: true
      }, {
        route: 'axle-sockets',
        title: 'Axle Sockets',
        name: 'descriptor-axle-sockets',
        moduleId: './axle-sockets',
        nav: true
      }, {
        route: 'axles',
        title: 'Axles',
        name: 'descriptor-axles',
        moduleId: './axles',
        nav: true
      }, {
        route: 'pins',
        title: 'Pins',
        name: 'descriptor-pins',
        moduleId: './pins',
        nav: true
      }, {
        route: 'pin-sockets',
        title: 'Pin Sockets',
        name: 'descriptor-pin-sockets',
        moduleId: './pin-sockets',
        nav: true
      }, {
        route: 'bars',
        title: 'Clip Bars',
        name: 'descriptor-bars',
        moduleId: './bars',
        nav: true
      }, {
        route: 'sleeves',
        title: 'Bar Sleeves',
        name: 'descriptor-sleeves',
        moduleId: './sleeves',
        nav: true
      }, {
        route: 'mini-bar',
        title: 'Mini Bar',
        name: 'descriptor-mini-bar',
        moduleId: './mini-bar',
        nav: true
      }, {
        route: 'colors',
        title: 'Colors',
        name: 'descriptor-colors',
        moduleId: './colors',
        nav: true
      }, {
        route: 'sticker',
        title: 'Sticker',
        name: 'descriptor-sticker',
        moduleId: './sticker',
        nav: true
      }, {
        route: 'printed',
        title: 'Printed',
        name: 'descriptor-printed',
        moduleId: './printed',
        nav: true
      }, {
        route: 'create',
        title: 'Create New Piece',
        name: 'create',
        moduleId: '../create',
        nav: true
      }];
    }

    DescriptorIndex.prototype.activate = function activate(params, config, instruction) {
      this.navigatingTo = this.routes.find(function (r) {
        return r.route.indexOf(params.path) > -1;
      });
    };

    DescriptorIndex.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.map(this.routes);
    };

    DescriptorIndex.prototype.clearAttributes = function clearAttributes() {
      var _this = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc = {
          _rev: doc._rev
        };
        return _this.storage.update('descriptor', doc);
      });
    };

    return DescriptorIndex;
  }()) || _class);
});
define('descriptor/mini-bar',['exports', 'storage', 'aurelia-framework'], function (exports, _storage, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DescriptorMiniBar = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorMiniBar = exports.DescriptorMiniBar = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorMiniBar(store) {
      _classCallCheck(this, DescriptorMiniBar);

      this.isMiniBar = false;
      this.storage = store;
    }

    DescriptorMiniBar.prototype.activate = function activate() {
      var _this = this;

      return this.storage.read('descriptor').then(function (doc) {
        _this.isMiniBar = doc.isMiniBar || _this.isMiniBar || false;
      }).catch(function (err) {});
    };

    DescriptorMiniBar.prototype.toggleMiniBar = function toggleMiniBar() {
      var _this2 = this;

      this.isMiniBar = !this.isMiniBar;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.isMiniBar = _this2.isMiniBar;
        return _this2.storage.update('descriptor', doc);
      });
    };

    return DescriptorMiniBar;
  }()) || _class);
});
define('descriptor/pin-sockets',['exports', 'aurelia-framework', 'storage'], function (exports, _aureliaFramework, _storage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PinSocketArrangement = exports.DescriptorPinSockets = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorPinSockets = exports.DescriptorPinSockets = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorPinSockets(storage) {
      var _this = this;

      _classCallCheck(this, DescriptorPinSockets);

      this.storage = storage;
      this.pinSocket0 = new PinSocketArrangement();
      this.pinSocket0.show = true;

      this.pinSocket1 = new PinSocketArrangement();
      this.pinSocket2 = new PinSocketArrangement();
      this.pinSocket3 = new PinSocketArrangement();

      this.changeCallback = function () {
        _this.pinSocketsChanged();
      };
    }

    DescriptorPinSockets.prototype.attached = function attached() {
      var _this2 = this;

      this.storage.read('descriptor').then(function (doc) {
        doc.pinSockets = doc.pinSockets || [];
        doc.pinSockets.forEach(function (h, index) {
          _this2['pinSocket' + index] = new PinSocketArrangement(h);
          if (index === 0) {
            _this2['pinSocket' + index].show = true;
          }
        });
      });
    };

    DescriptorPinSockets.prototype.pinSocketsChanged = function pinSocketsChanged() {
      var _this3 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.pinSockets = [Object.assign({}, _this3.pinSocket0), Object.assign({}, _this3.pinSocket1), Object.assign({}, _this3.pinSocket2), Object.assign({}, _this3.pinSocket3)];
        return _this3.storage.update('descriptor', doc);
      });
    };

    DescriptorPinSockets.prototype.removeSide = function removeSide(pinSocket) {
      pinSocket.toggle();
      this.pinSocketsChanged();
    };

    return DescriptorPinSockets;
  }()) || _class);

  var PinSocketArrangement = exports.PinSocketArrangement = function () {
    function PinSocketArrangement(data) {
      _classCallCheck(this, PinSocketArrangement);

      data = data || {};
      this.count = data.count || '';

      this.show = this.count;
    }

    PinSocketArrangement.prototype.toggle = function toggle() {
      if (this.show) {
        this.count = '';
      }
      this.show = !this.show;
    };

    return PinSocketArrangement;
  }();
});
define('descriptor/pins',['exports', 'aurelia-framework', 'storage'], function (exports, _aureliaFramework, _storage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PinArrangement = exports.DescriptorPins = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorPins = exports.DescriptorPins = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorPins(storage) {
      var _this = this;

      _classCallCheck(this, DescriptorPins);

      this.storage = storage;
      this.pin0 = new PinArrangement();
      this.pin0.show = true;

      this.pin1 = new PinArrangement();
      this.pin2 = new PinArrangement();

      this.changeCallback = function () {
        _this.pinsChanged();
      };
    }

    DescriptorPins.prototype.attached = function attached() {
      var _this2 = this;

      this.storage.read('descriptor').then(function (doc) {
        doc.pins = doc.pins || [];
        doc.pins.forEach(function (h, index) {
          _this2['pin' + index] = new PinArrangement(h);
          if (index === 0) {
            _this2['pin' + index].show = true;
          }
        });
      });
    };

    DescriptorPins.prototype.pinsChanged = function pinsChanged() {
      var _this3 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.pins = [Object.assign({}, _this3.pin0), Object.assign({}, _this3.pin1), Object.assign({}, _this3.pin2)];
        return _this3.storage.update('descriptor', doc);
      });
    };

    DescriptorPins.prototype.removeSide = function removeSide(pin) {
      pin.toggle();
      this.pinsChanged();
    };

    return DescriptorPins;
  }()) || _class);

  var PinArrangement = exports.PinArrangement = function () {
    function PinArrangement(data) {
      _classCallCheck(this, PinArrangement);

      data = data || {};
      this.lengthUnit = data.lengthUnit || '';
      this.count = data.count || '';

      this.show = this.lengthUnit || this.count;
    }

    PinArrangement.prototype.toggle = function toggle() {
      if (this.show) {
        this.count = '';
      }
      this.show = !this.show;
    };

    _createClass(PinArrangement, [{
      key: 'lengthMm',
      get: function get() {
        if (this.lengthUnit) {
          return this.lengthUnit * 8;
        } else {
          return '';
        }
      },
      set: function set(value) {
        if (!value) {
          this.lengthUnit = 0;
        } else {
          this.lengthUnit = Math.round(value / 8);
        }
      }
    }]);

    return PinArrangement;
  }();
});
define('descriptor/printed',['exports', 'storage', 'aurelia-framework'], function (exports, _storage, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DescriptorPrinted = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorPrinted = exports.DescriptorPrinted = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorPrinted(store) {
      _classCallCheck(this, DescriptorPrinted);

      this.isPrinted = false;
      this.storage = store;
    }

    DescriptorPrinted.prototype.activate = function activate() {
      var _this = this;

      return this.storage.read('descriptor').then(function (doc) {
        _this.isPrinted = doc.isPrinted || _this.isPrinted || false;
      }).catch(function (err) {});
    };

    DescriptorPrinted.prototype.togglePrinted = function togglePrinted() {
      var _this2 = this;

      this.isPrinted = !this.isPrinted;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.isPrinted = _this2.isPrinted;
        return _this2.storage.update('descriptor', doc);
      });
    };

    return DescriptorPrinted;
  }()) || _class);
});
define('descriptor/sleeves',['exports', 'aurelia-framework', 'storage'], function (exports, _aureliaFramework, _storage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SleeveArrangement = exports.DescriptorSleeves = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorSleeves = exports.DescriptorSleeves = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorSleeves(storage) {
      var _this = this;

      _classCallCheck(this, DescriptorSleeves);

      this.storage = storage;
      this.sleeve0 = new SleeveArrangement();
      this.sleeve0.show = true;

      this.sleeve1 = new SleeveArrangement();
      this.sleeve2 = new SleeveArrangement();
      this.sleeve3 = new SleeveArrangement();

      this.changeCallback = function () {
        _this.sleevesChanged();
      };
    }

    DescriptorSleeves.prototype.attached = function attached() {
      var _this2 = this;

      this.storage.read('descriptor').then(function (doc) {
        doc.sleeves = doc.sleeves || [];
        doc.sleeves.forEach(function (h, index) {
          _this2['sleeve' + index] = new SleeveArrangement(h);
          if (index === 0) {
            _this2['sleeve' + index].show = true;
          }
        });
      });
    };

    DescriptorSleeves.prototype.sleevesChanged = function sleevesChanged() {
      var _this3 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.sleeves = [Object.assign({}, _this3.sleeve0), Object.assign({}, _this3.sleeve1), Object.assign({}, _this3.sleeve2), Object.assign({}, _this3.sleeve3)];
        return _this3.storage.update('descriptor', doc);
      });
    };

    DescriptorSleeves.prototype.removeSide = function removeSide(sleeve) {
      sleeve.toggle();
      this.sleevesChanged();
    };

    return DescriptorSleeves;
  }()) || _class);

  var SleeveArrangement = exports.SleeveArrangement = function () {
    function SleeveArrangement(data) {
      _classCallCheck(this, SleeveArrangement);

      data = data || {};
      this.count = data.count || '';

      this.show = this.count;
    }

    SleeveArrangement.prototype.toggle = function toggle() {
      if (this.show) {
        this.count = '';
      }
      this.show = !this.show;
    };

    return SleeveArrangement;
  }();
});
define('descriptor/sockets',['exports', 'aurelia-framework', 'storage'], function (exports, _aureliaFramework, _storage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SocketArrangement = exports.DescriptorSocket = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorSocket = exports.DescriptorSocket = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorSocket(storage) {
      var _this = this;

      _classCallCheck(this, DescriptorSocket);

      this.storage = storage;
      this.socket0 = new SocketArrangement();
      this.socket0.show = true;

      this.socket1 = new SocketArrangement();
      this.socket2 = new SocketArrangement();
      this.socket3 = new SocketArrangement();
      this.socket4 = new SocketArrangement();

      this.changeCallback = function () {
        _this.socketsChanged();
      };
    }

    DescriptorSocket.prototype.attached = function attached() {
      var _this2 = this;

      this.storage.read('descriptor').then(function (doc) {
        doc.sockets = doc.sockets || [];
        doc.sockets.forEach(function (h, index) {
          _this2['socket' + index] = new SocketArrangement(h);
          if (index === 0) {
            _this2['socket' + index].show = true;
          }
        });
      });
    };

    DescriptorSocket.prototype.socketsChanged = function socketsChanged() {
      var _this3 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.sockets = [Object.assign({}, _this3.socket0), Object.assign({}, _this3.socket1), Object.assign({}, _this3.socket2), Object.assign({}, _this3.socket3), Object.assign({}, _this3.socket4)];
        return _this3.storage.update('descriptor', doc);
      });
    };

    DescriptorSocket.prototype.removeSide = function removeSide(socket) {
      socket.toggle();
      this.socketsChanged();
    };

    return DescriptorSocket;
  }()) || _class);

  var SocketArrangement = exports.SocketArrangement = function () {
    function SocketArrangement(data) {
      _classCallCheck(this, SocketArrangement);

      data = data || {};
      this.max = data.max || '';
      this.min = data.min || '';
      this.adjustment = data.adjustment || '';

      this.show = this.max || this.min || this.adjustment;
    }

    SocketArrangement.prototype.toggle = function toggle() {
      if (this.show) {
        this.min = '';
        this.max = '';
        this.adjustment = '';
      }
      this.show = !this.show;
    };

    _createClass(SocketArrangement, [{
      key: 'total',
      get: function get() {
        if (this.max || this.min || this.adjustment) {
          return this.max * this.min - this.adjustment;
        } else {
          return '';
        }
      },
      set: function set(value) {
        if (!value) {
          this.adjustment = 0;
        } else {
          this.adjustment = this.max * this.min - value;
        }
      }
    }]);

    return SocketArrangement;
  }();
});
define('descriptor/sticker',['exports', 'storage', 'aurelia-framework'], function (exports, _storage, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DescriptorSticker = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var DescriptorSticker = exports.DescriptorSticker = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorSticker(store) {
      _classCallCheck(this, DescriptorSticker);

      this.stickerMin = '';
      this.stickerMax = '';

      this.storage = store;
    }

    DescriptorSticker.prototype.activate = function activate() {
      var _this = this;

      return this.storage.read('descriptor').then(function (doc) {
        _this.stickerMin = doc.stickerMin || _this.stickerMin || '';
        _this.stickerMax = doc.stickerMax || _this.stickerMax || '';
      }).catch(function (err) {});
    };

    DescriptorSticker.prototype.updateSticker = function updateSticker() {
      var _this2 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.stickerMin = _this2.stickerMin;
        doc.stickerMax = _this2.stickerMax;
        return _this2.storage.update('descriptor', doc);
      });
    };

    _createClass(DescriptorSticker, [{
      key: 'stickerMinMm',
      get: function get() {
        if (this.stickerMin) {
          return this.stickerMin * 2;
        }
        return '';
      },
      set: function set(value) {
        if (value) {
          this.stickerMin = Math.round(value / 2);
        } else {
          this.stickerMin = '';
        }
        this.updateSticker();
      }
    }, {
      key: 'stickerMaxMm',
      set: function set(value) {
        if (value) {
          this.stickerMax = Math.round(value / 2);
        } else {
          this.stickerMax = '';
        }
        this.updateSticker();
      }
    }]);

    return DescriptorSticker;
  }()) || _class);
});
define('descriptor/studs',['exports', 'aurelia-framework', 'storage'], function (exports, _aureliaFramework, _storage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.StudOrientation = exports.DescriptorStuds = undefined;

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var DescriptorStuds = exports.DescriptorStuds = (_dec = (0, _aureliaFramework.inject)(_storage.Storage), _dec(_class = function () {
    function DescriptorStuds(storage) {
      var _this = this;

      _classCallCheck(this, DescriptorStuds);

      this.storage = storage;
      this.orientation0 = new StudOrientation();
      this.orientation0.show = true;

      this.orientation1 = new StudOrientation();
      this.orientation2 = new StudOrientation();
      this.orientation3 = new StudOrientation();
      this.orientation4 = new StudOrientation();

      this.changeCallback = function () {
        _this.studsChanged();
      };
    }

    DescriptorStuds.prototype.attached = function attached() {
      var _this2 = this;

      this.storage.read('descriptor').then(function (doc) {
        doc.studOrientations = doc.studOrientations || [];
        doc.studOrientations.forEach(function (orientation, index) {
          _this2['orientation' + index] = new StudOrientation(orientation);
          if (index === 0) {
            _this2['orientation' + index].show = true;
          }
        });
      });
    };

    DescriptorStuds.prototype.studsChanged = function studsChanged() {
      var _this3 = this;

      this.storage.read('descriptor').catch(function (err) {
        return {};
      }).then(function (doc) {
        doc.studOrientations = [Object.assign({}, _this3.orientation0), Object.assign({}, _this3.orientation1), Object.assign({}, _this3.orientation2), Object.assign({}, _this3.orientation3), Object.assign({}, _this3.orientation4)];
        return _this3.storage.update('descriptor', doc);
      });
    };

    DescriptorStuds.prototype.removeOrientation = function removeOrientation(orientation) {
      orientation.toggle();
      this.studsChanged();
    };

    return DescriptorStuds;
  }()) || _class);

  var StudOrientation = exports.StudOrientation = function () {
    function StudOrientation(data) {
      _classCallCheck(this, StudOrientation);

      data = data || {};
      this.max = data.max || '';
      this.min = data.min || '';
      this.adjustment = data.adjustment || '';

      this.show = this.max || this.min || this.adjusment;
    }

    StudOrientation.prototype.toggle = function toggle() {
      if (this.show) {
        this.max = '';
        this.min = '';
        this.adjustment = '';
      }
      this.show = !this.show;
    };

    _createClass(StudOrientation, [{
      key: 'total',
      get: function get() {
        if (this.max || this.min || this.adjusment) {
          return this.max * this.min - this.adjustment;
        } else {
          return '';
        }
      },
      set: function set(value) {
        if (!value) {
          this.adjustment = 0;
        } else {
          this.adjustment = this.max * this.min - value;
        }
      }
    }]);

    return StudOrientation;
  }();
});
define('resources/value-converters/color',['exports', 'colorPalette'], function (exports, _colorPalette) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.idToColorNameValueConverter = exports.idToColorCommonNameValueConverter = exports.idToColorCssValueConverter = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var idToColorCssValueConverter = exports.idToColorCssValueConverter = function () {
    function idToColorCssValueConverter() {
      _classCallCheck(this, idToColorCssValueConverter);
    }

    idToColorCssValueConverter.prototype.toView = function toView(colorId) {
      if (_colorPalette.Colors.has(colorId)) {
        return _colorPalette.Colors.get(colorId).css;
      }
      return 'transparent';
    };

    return idToColorCssValueConverter;
  }();

  var idToColorCommonNameValueConverter = exports.idToColorCommonNameValueConverter = function () {
    function idToColorCommonNameValueConverter() {
      _classCallCheck(this, idToColorCommonNameValueConverter);
    }

    idToColorCommonNameValueConverter.prototype.toView = function toView(colorId) {
      if (_colorPalette.Colors.has(colorId)) {
        return _colorPalette.Colors.get(colorId).common;
      }
      return '';
    };

    return idToColorCommonNameValueConverter;
  }();

  var idToColorNameValueConverter = exports.idToColorNameValueConverter = function () {
    function idToColorNameValueConverter() {
      _classCallCheck(this, idToColorNameValueConverter);
    }

    idToColorNameValueConverter.prototype.toView = function toView(colorId) {
      if (_colorPalette.Colors.has(colorId)) {
        return _colorPalette.Colors.get(colorId).name;
      }
      return '';
    };

    return idToColorNameValueConverter;
  }();
});
define('resources/value-converters/hasValuesFor',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var hasValuesForValueConverter = exports.hasValuesForValueConverter = function () {
    function hasValuesForValueConverter() {
      _classCallCheck(this, hasValuesForValueConverter);
    }

    hasValuesForValueConverter.prototype.toView = function toView() {
      var _Array$prototype$slic = Array.prototype.slice.call(arguments),
          source = _Array$prototype$slic[0],
          properties = _Array$prototype$slic.slice(1);

      var hasValues = properties.reduce(function (acc, value) {
        if (source[value] || source[value] === 0) {
          acc++;
        }
        return acc;
      }, 0);
      return hasValues == properties.length;
    };

    return hasValuesForValueConverter;
  }();
});
define('resources/value-converters/hinge',['exports', 'descriptor/hinge'], function (exports, _hinge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.toHingeTypeValueConverter = exports.toHingeOrientationValueConverter = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var toHingeOrientationValueConverter = exports.toHingeOrientationValueConverter = function () {
    function toHingeOrientationValueConverter() {
      _classCallCheck(this, toHingeOrientationValueConverter);
    }

    toHingeOrientationValueConverter.prototype.toView = function toView(value) {
      return _hinge.HingeOrientation.get(value);
    };

    return toHingeOrientationValueConverter;
  }();

  var toHingeTypeValueConverter = exports.toHingeTypeValueConverter = function () {
    function toHingeTypeValueConverter() {
      _classCallCheck(this, toHingeTypeValueConverter);
    }

    toHingeTypeValueConverter.prototype.toView = function toView(value) {
      return _hinge.HingeType.get(value);
    };

    return toHingeTypeValueConverter;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./app.css\"></require><div class=\"app mobile\"><div class=\"top\"><router-view name=\"top\"></router-view></div><div class=\"bottom\"><router-view name=\"bottom\"></router-view></div></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "@media (max-width: 767px) {\n  .app.mobile > .top {\n    height: 40vh; } }\n\n@media (max-width: 767px) {\n  .app.mobile > .bottom {\n    height: 60vh; } }\n"; });
define('text!descriptor/index.css', ['module'], function(module) { module.exports = ""; });
define('text!create.html', ['module'], function(module) { module.exports = "<template><div class=\"container\"><p></p><div class=\"ui labeled input\"><div class=\"ui label\">LEGO Element ID</div><input value.bind=\"elementId\" type=\"number\" step=\"1\" placeholder=\"\"></div><p></p><p></p><div class=\"ui labeled input\"><div class=\"ui label\"><i class=\"photo icon\"></i> Photo</div><input id=\"photoUpload\" change.delegate=\"previewImage()\" value.bind=\"photo\" type=\"file\" placeholder=\"Upload or Take Photo\"></div><p></p><p if.bind=\"photoData\"><img class=\"ui small image\" src=\"${photoData}\"></p><p><button class=\"ui button\" click.delegate=\"create()\" class.bind=\"photoData && elementId ? '': 'disabled'\"><i class=\"add icon\"></i> Add Part On 8brick</button></p></div></template>"; });
define('text!descriptor/assembly.html', ['module'], function(module) { module.exports = "<template><p>Is this piece an assembly of other pieces?</p><button click.delegate=\"toggleAssembly()\" class=\"ui labeled icon button ${isAssembly ? 'primary': 'basic'}\"><i class=\"toggle ${isAssembly ? 'on' : 'off'} icon\"></i> ${ isAssembly ? 'Yes': 'No'}</button><h3>Examples</h3><descriptor-navigation next-text=\"Studs\" next-route=\"#/studs\"></descriptor-navigation></template>"; });
define('text!descriptor/axle-sockets.html', ['module'], function(module) { module.exports = "<template><p>Axle Sockets are receivers to pieces with cross axles.</p><p></p><div class=\"ui input labeled fluid\"><div class=\"ui label\">Count</div><input change.delegate=\"updateAxles()\" value.bind=\"axleSockets\" step=\"1\" type=\"number\" placeholder=\"The number of sockets for axles.\"></div><p></p><descriptor-navigation prev-text=\"Clips\" prev-route=\"#/clips\" next-text=\"Axles\" next-route=\"#/axles\"></descriptor-navigation></template>"; });
define('text!descriptor/axles.html', ['module'], function(module) { module.exports = "<template><require from=\"./elements/axle-arrangement.html\"></require><h2>Axles</h2><p>Axles are a cross pattern pieces that are a given length. Measurements are rounded to the nearest 8mm's.</p><div class=\"ui top attached segment\" if.bind=\"axle0.show\"><axle-arrangement arrangement.bind=\"axle0\" on-change.bind=\"changeCallback\" index.bind=\"0\"></axle-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!axle1.show\"><button class=\"ui button item\" click.delegate=\"axle1.toggle()\"><i class=\"icon add\"></i> Add Side</button></div><div class=\"ui attached segment\" if.bind=\"axle1.show\"><axle-arrangement arrangement.bind=\"axle1\" on-change.bind=\"changeCallback\" index.bind=\"1\"></axle-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!axle2.show && axle1.show\"><button class=\"ui button item\" click.delegate=\"axle2.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(axle1)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"axle2.show\"><axle-arrangement arrangement.bind=\"axle2\" on-change.bind=\"changeCallback\" index.bind=\"2\"></axle-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!axle3.show && axle2.show\"><button class=\"ui button item\" click.delegate=\"axle3.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(axle2)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"axle3.show\"><axle-arrangement arrangement.bind=\"axle3\" on-change.bind=\"changeCallback\" index.bind=\"3\"></axle-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"axle3.show\"><button class=\"ui button red item\" click.delegate=\"removeSide(axle3)\"><i class=\"icon remove\"></i> Remove Side</button></div><h3>Examples</h3><descriptor-navigation prev-text=\"Axle Sockets\" prev-route=\"#/axle-sockets\" next-text=\"Pins\" next-route=\"#/pins\"></descriptor-navigation></template>"; });
define('text!descriptor/bars.html', ['module'], function(module) { module.exports = "<template><require from=\"./elements/bar-arrangement.html\"></require><h2>Clip Bars</h2><p>Clips bar features are round bars that a standard clip would connect to.</p><div class=\"ui top attached segment\" if.bind=\"bar0.show\"><bar-arrangement arrangement.bind=\"bar0\" on-change.bind=\"changeCallback\" index.bind=\"0\"></bar-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!bar1.show\"><button class=\"ui button item\" click.delegate=\"bar1.toggle()\"><i class=\"icon add\"></i> Add Side</button></div><div class=\"ui attached segment\" if.bind=\"bar1.show\"><bar-arrangement arrangement.bind=\"bar1\" on-change.bind=\"changeCallback\" index.bind=\"1\"></bar-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!bar2.show && bar1.show\"><button class=\"ui button item\" click.delegate=\"bar2.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(bar1)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"bar2.show\"><bar-arrangement arrangement.bind=\"bar2\" on-change.bind=\"changeCallback\" index.bind=\"2\"></bar-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!bar3.show && bar2.show\"><button class=\"ui button item\" click.delegate=\"bar3.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(bar2)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"bar3.show\"><bar-arrangement arrangement.bind=\"bar3\" on-change.bind=\"changeCallback\" index.bind=\"3\"></bar-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"bar3.show\"><button class=\"ui button red item\" click.delegate=\"removeSide(bar3)\"><i class=\"icon remove\"></i> Remove Side</button></div><descriptor-navigation prev-text=\"Pin Sockets\" prev-route=\"#/pin-sockets\" next-text=\"Bar Sleeves\" next-route=\"#/sleeves\"></descriptor-navigation></template>"; });
define('text!descriptor/clips.html', ['module'], function(module) { module.exports = "<template><require from=\"./elements/clip-arrangement.html\"></require><h2>Clips</h2><p>Clips can hold onto the standard width bar used for many minifigure utensils.</p><div class=\"ui top attached segment\" if.bind=\"clip0.show\"><clip-arrangement arrangement.bind=\"clip0\" on-change.bind=\"changeCallback\" index.bind=\"0\"></clip-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!clip1.show\"><button class=\"ui button item\" click.delegate=\"clip1.toggle()\"><i class=\"icon add\"></i> Add Side</button></div><div class=\"ui attached segment\" if.bind=\"clip1.show\"><clip-arrangement arrangement.bind=\"clip1\" on-change.bind=\"changeCallback\" index.bind=\"1\"></clip-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!clip2.show && clip1.show\"><button class=\"ui button item\" click.delegate=\"clip2.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(clip1)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"clip2.show\"><clip-arrangement arrangement.bind=\"clip2\" on-change.bind=\"changeCallback\" index.bind=\"2\"></clip-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!clip3.show && clip2.show\"><button class=\"ui button item\" click.delegate=\"clip3.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(clip2)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"clip3.show\"><clip-arrangement arrangement.bind=\"clip3\" on-change.bind=\"changeCallback\" index.bind=\"3\"></clip-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"clip3.show\"><button class=\"ui button red item\" click.delegate=\"removeSide(clip3)\"><i class=\"icon remove\"></i> Remove Side</button></div><descriptor-navigation prev-text=\"Sockets\" prev-route=\"#/sockets\" next-text=\"Axle Sockets\" next-route=\"#/axle-sockets\"></descriptor-navigation></template>"; });
define('text!descriptor/colors.html', ['module'], function(module) { module.exports = "<template><require from=\"./elements/color-option.html\"></require><h2>Colors</h2><p>There is a wide variety of colors that a piece could have.</p><div class=\"ui top attached segment\" if.bind=\"color0.show\"><color-option option.bind=\"color0\" on-change.bind=\"changeCallback\" index.bind=\"0\"></color-option></div><div class=\"ui bottom attached menu\" if.bind=\"!color1.show\"><button class=\"ui button item\" click.delegate=\"color1.toggle()\"><i class=\"icon add\"></i> Add Color</button> <button class=\"ui button red item\" click.delegate=\"clearColorId(color0)\" if.bind=\"color0.colorId != ''\"><i class=\"icon remove\"></i> Remove Color</button></div><div class=\"ui attached segment\" if.bind=\"color1.show\"><color-option option.bind=\"color1\" on-change.bind=\"changeCallback\" index.bind=\"1\"></color-option></div><div class=\"ui bottom attached menu\" if.bind=\"!color2.show && color1.show\"><button class=\"ui button item\" click.delegate=\"color2.toggle()\"><i class=\"icon add\"></i> Add Color</button> <button class=\"ui button red item\" click.delegate=\"removeColor(color1)\"><i class=\"icon remove\"></i> Remove Color</button></div><div class=\"ui attached segment\" if.bind=\"color2.show\"><color-option option.bind=\"color2\" on-change.bind=\"changeCallback\" index.bind=\"2\"></color-option></div><div class=\"ui bottom attached menu\" if.bind=\"!color3.show && color2.show\"><button class=\"ui button item\" click.delegate=\"color3.toggle()\"><i class=\"icon add\"></i> Add Color</button> <button class=\"ui button red item\" click.delegate=\"removeColor(color2)\"><i class=\"icon remove\"></i> Remove Color</button></div><div class=\"ui attached segment\" if.bind=\"color3.show\"><color-option option.bind=\"color3\" on-change.bind=\"changeCallback\" index.bind=\"3\"></color-option></div><div class=\"ui bottom attached menu\" if.bind=\"color3.show\"><button class=\"ui button red item\" click.delegate=\"removeColor(color3)\"><i class=\"icon remove\"></i> Remove Color</button></div><descriptor-navigation prev-text=\"Mini Bar\" prev-route=\"#/mini-bar\" next-text=\"Sticker\" next-route=\"#/sticker\"></descriptor-navigation></template>"; });
define('text!descriptor/dashboard.html', ['module'], function(module) { module.exports = "<template><div class=\"ui eight doubling cards\"><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Assembly</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.isAssembly == undefined\">-</span> <span if.bind=\"descriptor.isAssembly != undefined\">${descriptor.isAssembly ? 'Yes' : 'No'}</span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('assembly')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Studs</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.studOrientations == undefined\">-</span> <span if.bind=\"descriptor.studOrientations != undefined\">Max / Min / Total.<div class=\"ui list divided\"><div class=\"item\" repeat.for=\"o of descriptor.studOrientations\" if.bind=\"o | hasValuesFor:'min':'max':'adjustment'\">${o.max} / ${o.min} / ${o.min* o.max - o.adjustment}</div></div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('studs')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Height</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.height == undefined\">-</span> <span if.bind=\"descriptor.height != undefined\"><div class=\"header\">${descriptor.height * 2} mm</div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('height')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Hinges</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.hinges == undefined\">-</span> <span if.bind=\"descriptor.hinges != undefined\">Orientation / Type.<div class=\"ui list divided\"><div class=\"item\" repeat.for=\"h of descriptor.hinges\" if.bind=\"h | hasValuesFor:'orientation':'type'\">${h.orientation | toHingeOrientation} / ${h.type | toHingeType}</div></div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('hinge')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Stud Sockets</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.sockets == undefined\">-</span> <span if.bind=\"descriptor.sockets != undefined\">Max / Min / Total.<div class=\"ui list divided\"><div class=\"item\" repeat.for=\"s of descriptor.sockets\" if.bind=\"s | hasValuesFor:'min':'max':'adjustment'\">${s.max} / ${s.min} / ${s.min* s.max - s.adjustment}</div></div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('sockets')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Clips</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.clips == undefined\">-</span> <span if.bind=\"descriptor.clips != undefined\"><div class=\"ui list divided\"><div class=\"item\" repeat.for=\"c of descriptor.clips\" if.bind=\"c | hasValuesFor:'count'\">${c.count}</div></div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('clips')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Axle Sockets</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.axleSockets == undefined\">-</span> <span if.bind=\"descriptor.axleSockets != undefined\"><div class=\"header\">${descriptor.axleSockets}</div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('axle-sockets')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Axles</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.axles == undefined\">-</span> <span if.bind=\"descriptor.axles != undefined\"><div class=\"ui list divided\"><div class=\"item\" repeat.for=\"a of descriptor.axles\" if.bind=\"a | hasValuesFor:'lengthUnit'\">${a.lengthUnit * 8} mm</div></div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('axles')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Pins</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.pins == undefined\">-</span> <span if.bind=\"descriptor.pins != undefined\"><div class=\"ui list divided\">Length / Count<div class=\"item\" repeat.for=\"p of descriptor.pins\" if.bind=\"p | hasValuesFor:'count':'lengthUnit'\">${p.lengthUnit * 8} mm / ${p.count}</div></div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('pins')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Pin Sockets</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.pinSockets == undefined\">-</span> <span if.bind=\"descriptor.pinSockets != undefined\"><div class=\"ui list divided\"><div class=\"item\" repeat.for=\"p of descriptor.pinSockets\" if.bind=\"p | hasValuesFor:'count'\">${p.count}</div></div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('pin-sockets')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Bars</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.bars == undefined\">-</span> <span if.bind=\"descriptor.bars != undefined\"><div class=\"ui list divided\"><div class=\"item\" repeat.for=\"i of descriptor.bars\" if.bind=\"i | hasValuesFor:'count'\">${i.count}</div></div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('bars')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Bar Sleeves</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.sleeves == undefined\">-</span> <span if.bind=\"descriptor.sleeves != undefined\"><div class=\"ui list divided\"><div class=\"item\" repeat.for=\"i of descriptor.sleeves\" if.bind=\"i | hasValuesFor:'count'\">${i.count}</div></div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('sleeves')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Mini Bar</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.isMiniBar == undefined\">-</span> <span if.bind=\"descriptor.isMiniBar != undefined\"><div class=\"ui header\">${descriptor.isMiniBar ? 'Yes' : 'No'}</div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('mini-bar')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Colors</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.colors == undefined\">-</span> <span if.bind=\"descriptor.colors != undefined\"><div class=\"ui list divided\"><div class=\"item\" repeat.for=\"i of descriptor.colors\" if.bind=\"i | hasValuesFor:'colorId'\"><i class=\"square icon\" css=\"color: ${i.colorId | idToColorCss}\"></i> ${i.colorId | idToColorName}</div></div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('colors')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Stickers</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.stickerMin == undefined\">-</span> <span if.bind=\"descriptor.stickerMin != undefined\"><div class=\"ui list divided\">Min / Max<div class=\"ui list divided\">${descriptor.stickerMin} / ${descriptor.stickerMax}</div></div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('sticker')\">Edit</div></div><div class=\"ui card\"><div class=\"ui content center aligned\"><div class=\"header\">Printed</div></div><div class=\"ui content center aligned\"><span if.bind=\"descriptor.isPrinted == undefined\">-</span> <span if.bind=\"descriptor.isPrinted != undefined\"><div class=\"ui header\">${descriptor.isPrinted ? 'Yes' : 'No'}</div></span></div><div class=\"ui bottom attached button\" click.delegate=\"router.navigate('printed')\">Edit</div></div></div></template>"; });
define('text!descriptor/height.html', ['module'], function(module) { module.exports = "<template><h2>Height</h2><p>What is height? In the most upright, position what is the pieces' height in nearest millimeters.</p><p></p><div class=\"ui right labeled fluid input\"><div class=\"ui label\">Height</div><input value.bind=\"heightMm & debounce:500\" step=\"2\" type=\"number\" placeholder=\"The upright height in mm of the piece.\"><div class=\"ui basic label\">mm</div></div><p></p><h3>Example</h3><p>The following has a height of 12mm. The standard height of a brick is approximately 12mm.</p><descriptor-navigation next-text=\"Hinges\" next-route=\"#/hinge\" prev-text=\"Studs\" prev-route=\"#/studs\"></descriptor-navigation></template>"; });
define('text!descriptor/hinge.html', ['module'], function(module) { module.exports = "<template><require from=\"./elements/hinge-orientation.html\"></require><h2>Hinges</h2><p>Hinges link together multiple pieces and can pivot in a direction.</p><div class=\"ui top attached segment\" if.bind=\"hinge0.show\"><hinge-orientation hinge.bind=\"hinge0\" on-change.bind=\"changeCallback\" index.bind=\"0\"></hinge-orientation></div><div class=\"ui bottom attached menu\" if.bind=\"!hinge1.show\"><button class=\"ui button item\" click.delegate=\"hinge1.toggle()\"><i class=\"icon add\"></i> Add Hinge</button></div><div class=\"ui attached segment\" if.bind=\"hinge1.show\"><hinge-orientation hinge.bind=\"hinge1\" on-change.bind=\"changeCallback\" index.bind=\"1\"></hinge-orientation></div><div class=\"ui bottom attached menu\" if.bind=\"!hinge2.show && hinge1.show\"><button class=\"ui button item\" click.delegate=\"hinge2.toggle()\"><i class=\"icon add\"></i> Add Hinge</button> <button class=\"ui button red item\" click.delegate=\"removeOrientation(hinge1)\"><i class=\"icon remove\"></i> Remove Hinge</button></div><div class=\"ui attached segment\" if.bind=\"hinge2.show\"><hinge-orientation hinge.bind=\"hinge2\" on-change.bind=\"changeCallback\" index.bind=\"2\"></hinge-orientation></div><div class=\"ui bottom attached menu\" if.bind=\"hinge2.show\"><button class=\"ui button red item\" click.delegate=\"removeOrientation(hinge2)\"><i class=\"icon remove\"></i> Remove Hinge</button></div><descriptor-navigation prev-text=\"Height\" prev-route=\"#/height\" next-text=\"Sockets\" next-route=\"#/sockets\"></descriptor-navigation></template>"; });
define('text!descriptor/index.html', ['module'], function(module) { module.exports = "<template><div class=\"ui container\"><div class=\"ui menu\"><div class=\"ui breadcrumb item\"><a class=\"section\" href=\"#/\"><i class=\"settings icon\"></i> Attributes</a><div class=\"divider\" if.bind=\"navigatingTo\">/</div><div class=\"active section\" if.bind=\"navigatingTo\">${navigatingTo.title}</div></div><button if.bind=\"!navigatingTo\" class=\"ui red icon button item\" click.delegate=\"clearAttributes()\">Clear All</button><div class=\"right menu\"><a class=\"item\" href=\"#/create\">Create On 8brick</a></div></div><div><router-view></router-view></div></div></template>"; });
define('text!descriptor/mini-bar.html', ['module'], function(module) { module.exports = "<template><h2>Mini Bar</h2><p>A mini bar is a very narrow bar that is typically associated with the feather or plume pieces.</p><p>Does this piece contain a mini bar?</p><button click.delegate=\"toggleMiniBar()\" class=\"ui labeled icon button ${isMiniBar ? 'primary': 'basic'}\"><i class=\"toggle ${isMiniBar ? 'on' : 'off'} icon\"></i> ${ isMiniBar ? 'Yes': 'No'}</button><h3>Examples</h3><descriptor-navigation prev-text=\"Bar Sleeves\" prev-route=\"#/sleeves\" next-text=\"Colors\" next-route=\"#/colors\"></descriptor-navigation></template>"; });
define('text!descriptor/pin-sockets.html', ['module'], function(module) { module.exports = "<template><require from=\"./elements/pin-socket-arrangement.html\"></require><h2>Pin Sockets</h2><p>Pins sockets are the receiving part of a piece to connect with pinSockets.</p><div class=\"ui top attached segment\" if.bind=\"pinSocket0.show\"><pin-socket-arrangement arrangement.bind=\"pinSocket0\" on-change.bind=\"changeCallback\" index.bind=\"0\"></pin-socket-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!pinSocket1.show\"><button class=\"ui button item\" click.delegate=\"pinSocket1.toggle()\"><i class=\"icon add\"></i> Add Side</button></div><div class=\"ui attached segment\" if.bind=\"pinSocket1.show\"><pin-socket-arrangement arrangement.bind=\"pinSocket1\" on-change.bind=\"changeCallback\" index.bind=\"1\"></pin-socket-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!pinSocket2.show && pinSocket1.show\"><button class=\"ui button item\" click.delegate=\"pinSocket2.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(pinSocket1)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"pinSocket2.show\"><pin-socket-arrangement arrangement.bind=\"pinSocket2\" on-change.bind=\"changeCallback\" index.bind=\"2\"></pin-socket-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!pinSocket3.show && pinSocket2.show\"><button class=\"ui button item\" click.delegate=\"pinSocket3.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(pinSocket2)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"pinSocket3.show\"><pin-socket-arrangement arrangement.bind=\"pinSocket3\" on-change.bind=\"changeCallback\" index.bind=\"3\"></pin-socket-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"pinSocket3.show\"><button class=\"ui button red item\" click.delegate=\"removeSide(pinSocket3)\"><i class=\"icon remove\"></i> Remove Side</button></div><h3>Examples</h3><descriptor-navigation prev-text=\"Pins\" prev-route=\"#/pins\" next-text=\"Clip Bars\" next-route=\"#/bars\"></descriptor-navigation></template>"; });
define('text!descriptor/pins.html', ['module'], function(module) { module.exports = "<template><require from=\"./elements/pin-arrangement.html\"></require><h2>Pins</h2><p>Pins are hollow round features that can snap into a pin socket.</p><div class=\"ui top attached segment\" if.bind=\"pin0.show\"><pin-arrangement arrangement.bind=\"pin0\" on-change.bind=\"changeCallback\" index.bind=\"0\"></pin-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!pin1.show\"><button class=\"ui button item\" click.delegate=\"pin1.toggle()\"><i class=\"icon add\"></i> Add Side</button></div><div class=\"ui attached segment\" if.bind=\"pin1.show\"><pin-arrangement arrangement.bind=\"pin1\" on-change.bind=\"changeCallback\" index.bind=\"1\"></pin-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!pin2.show && pin1.show\"><button class=\"ui button item\" click.delegate=\"pin2.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(pin1)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"pin2.show\"><pin-arrangement arrangement.bind=\"pin2\" on-change.bind=\"changeCallback\" index.bind=\"2\"></pin-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"pin2.show\"><button class=\"ui button red item\" click.delegate=\"removeSide(pin2)\"><i class=\"icon remove\"></i> Remove Side</button></div><h3>Examples</h3><descriptor-navigation prev-text=\"Axles\" prev-route=\"#/axles\" next-text=\"Pin Sockets\" next-route=\"#/pin-sockets\"></descriptor-navigation></template>"; });
define('text!descriptor/printed.html', ['module'], function(module) { module.exports = "<template><h2>Printed</h2><p>Does this piece have printing on it?</p><button click.delegate=\"togglePrinted()\" class=\"ui labeled icon button ${isPrinted ? 'primary': 'basic'}\"><i class=\"toggle ${isPrinted ? 'on' : 'off'} icon\"></i> ${ isPrinted ? 'Yes': 'No'}</button><h3>Examples</h3><descriptor-navigation prev-text=\"Sticker\" prev-route=\"#/sticker\"></descriptor-navigation></template>"; });
define('text!descriptor/sleeves.html', ['module'], function(module) { module.exports = "<template><require from=\"./elements/sleeve-arrangement.html\"></require><h2>Bar Sleeves</h2><p>A bar sleeves features is a round opening of bar width that a clip bar can slide into or through.</p><div class=\"ui top attached segment\" if.bind=\"sleeve0.show\"><sleeve-arrangement arrangement.bind=\"sleeve0\" on-change.bind=\"changeCallback\" index.bind=\"0\"></sleeve-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!sleeve1.show\"><button class=\"ui button item\" click.delegate=\"sleeve1.toggle()\"><i class=\"icon add\"></i> Add Side</button></div><div class=\"ui attached segment\" if.bind=\"sleeve1.show\"><sleeve-arrangement arrangement.bind=\"sleeve1\" on-change.bind=\"changeCallback\" index.bind=\"1\"></sleeve-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!sleeve2.show && sleeve1.show\"><button class=\"ui button item\" click.delegate=\"sleeve2.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(sleeve1)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"sleeve2.show\"><sleeve-arrangement arrangement.bind=\"sleeve2\" on-change.bind=\"changeCallback\" index.bind=\"2\"></sleeve-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!sleeve3.show && sleeve2.show\"><button class=\"ui button item\" click.delegate=\"sleeve3.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(sleeve2)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"sleeve3.show\"><sleeve-arrangement arrangement.bind=\"sleeve3\" on-change.bind=\"changeCallback\" index.bind=\"3\"></sleeve-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"sleeve3.show\"><button class=\"ui button red item\" click.delegate=\"removeSide(sleeve3)\"><i class=\"icon remove\"></i> Remove Side</button></div><descriptor-navigation prev-text=\"Clip Bars\" prev-route=\"#/bars\" next-text=\"Mini Bar\" next-route=\"#/mini-bar\"></descriptor-navigation></template>"; });
define('text!descriptor/sockets.html', ['module'], function(module) { module.exports = "<template><require from=\"./elements/socket-arrangement.html\"></require><h2>Stud Sockets</h2><p>Stud sockets are the receiving part of a building block that connect with normal studs.</p><div class=\"ui top attached segment\" if.bind=\"socket0.show\"><socket-arrangement arrangement.bind=\"socket0\" index.bind=\"0\" on-change.bind=\"changeCallback\"></socket-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!socket1.show\"><button class=\"ui button item\" click.delegate=\"socket1.toggle()\"><i class=\"icon add\"></i> Add Side</button></div><div class=\"ui attached segment\" if.bind=\"socket1.show\"><socket-arrangement arrangement.bind=\"socket1\" index.bind=\"1\" on-change.bind=\"changeCallback\"></socket-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!socket2.show && socket1.show\"><button class=\"ui button item\" click.delegate=\"socket2.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(socket1)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"socket2.show\"><socket-arrangement arrangement.bind=\"socket2\" index.bind=\"2\" on-change.bind=\"changeCallback\"></socket-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!socket3.show && socket2.show\"><button class=\"ui button item\" click.delegate=\"socket3.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(socket2)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"socket3.show\"><socket-arrangement arrangement.bind=\"socket3\" index.bind=\"3\" on-change.bind=\"changeCallback\"></socket-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"!socket4.show && socket3.show\"><button class=\"ui button item\" click.delegate=\"socket4.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeSide(socket3)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"socket4.show\"><socket-arrangement arrangement.bind=\"socket4\" index.bind=\"4\" on-change.bind=\"changeCallback\"></socket-arrangement></div><div class=\"ui bottom attached menu\" if.bind=\"socket4.show\"><button class=\"ui button red item\" click.delegate=\"removeSide(socket4)\"><i class=\"icon remove\"></i> Remove Side</button></div><descriptor-navigation prev-text=\"Hinges\" prev-route=\"#/hinge\" next-text=\"Clips\" next-route=\"#/clips\"></descriptor-navigation></template>"; });
define('text!descriptor/sticker.html', ['module'], function(module) { module.exports = "<template><h2>Sticker</h2><p>Represents the size of any stickers in mm.</p><p></p><div class=\"ui right labeled fluid input\"><div class=\"ui label\">Min</div><input value.bind=\"stickerMinMm\" step=\"2\" type=\"number\" placeholder=\"A minimum measurement to nearest 2mm.\"><div class=\"ui basic label\">mm</div></div><p></p><p></p><div class=\"ui right labeled fluid input\"><div class=\"ui label\">Max</div><input value.bind=\"stickerMaxMm\" step=\"2\" type=\"number\" placeholder=\"A maximum measurement to nearest 2mm.\"><div class=\"ui basic label\">mm</div></div><p></p><h3>Example</h3><p></p><descriptor-navigation next-text=\"Colors\" next-route=\"#/colors\" prev-text=\"Printed\" prev-route=\"#/printed\"></descriptor-navigation></template>"; });
define('text!descriptor/studs.html', ['module'], function(module) { module.exports = "<template><require from=\"./elements/stud-face.html\"></require><h2>Studs</h2><p>Studs are the round knobs that are commonly found on a building block's top.</p><div class=\"ui top attached segment\" if.bind=\"orientation0.show\"><stud-face orientation.bind=\"orientation0\" index.bind=\"0\" on-change.bind=\"changeCallback\"></stud-face></div><div class=\"ui bottom attached menu\" if.bind=\"!orientation1.show\"><button class=\"ui button item\" click.delegate=\"orientation1.toggle()\"><i class=\"icon add\"></i> Add Side</button></div><div class=\"ui attached segment\" if.bind=\"orientation1.show\"><stud-face orientation.bind=\"orientation1\" index.bind=\"1\" on-change.bind=\"changeCallback\"></stud-face></div><div class=\"ui bottom attached menu\" if.bind=\"!orientation2.show && orientation1.show\"><button class=\"ui button item\" click.delegate=\"orientation2.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeOrientation(orientation1)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"orientation2.show\"><stud-face orientation.bind=\"orientation2\" index.bind=\"2\" on-change.bind=\"changeCallback\"></stud-face></div><div class=\"ui bottom attached menu\" if.bind=\"!orientation3.show && orientation2.show\"><button class=\"ui button item\" click.delegate=\"orientation3.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeOrientation(orientation2)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"orientation3.show\"><stud-face orientation.bind=\"orientation3\" index.bind=\"3\" on-change.bind=\"changeCallback\"></stud-face></div><div class=\"ui bottom attached menu\" if.bind=\"!orientation4.show && orientation3.show\"><button class=\"ui button item\" click.delegate=\"orientation4.toggle()\"><i class=\"icon add\"></i> Add Side</button> <button class=\"ui button red item\" click.delegate=\"removeOrientation(orientation3)\"><i class=\"icon remove\"></i> Remove Side</button></div><div class=\"ui attached segment\" if.bind=\"orientation4.show\"><stud-face orientation.bind=\"orientation4\" index.bind=\"4\" on-change.bind=\"changeCallback\"></stud-face></div><div class=\"ui bottom attached menu\" if.bind=\"orientation4.show\"><button class=\"ui button red item\" click.delegate=\"removeOrientation(orientation4)\"><i class=\"icon remove\"></i> Remove Side</button></div><descriptor-navigation prev-text=\"Assembly\" prev-route=\"#/assembly\" next-text=\"Height\" next-route=\"#/height\"></descriptor-navigation></template>"; });
define('text!panel/index.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!panel/responsive.html', ['module'], function(module) { module.exports = "<template><div class=\"ui container\" if.bind=\"bbid == '0-----------------.-------------------------------------------------------'\"><h1 class=\"ui header\">What is BBID?</h1><p>BBID/Building Blick Identification is a way to semantically describe LEGO parts to find them or catalog them. Rather than having 1-1 names for a part A part is descibed by a collection of attributes such as height, color and studs.</p><p>This opens up the opportunity to systematically order parts by other similar parts.</p></div><div class=\"ui container\" if.bind=\"bbid != '0-----------------.-------------------------------------------------------'\"><pre>${bbid}</pre><canvas id=\"qr\"></canvas></div></template>"; });
define('text!descriptor/elements/axle-arrangement.html', ['module'], function(module) { module.exports = "<template bindable=\"arrangement, index, onChange\"><h3>Side ${index+1}</h3><p></p><div class=\"ui input right labeled fluid\"><div class=\"ui label\">Length</div><input change.delegate=\"onChange()\" value.bind=\"arrangement.lengthMm\" step=\"8\" type=\"number\" placeholder=\"The length of a each axle.\"><div class=\"ui basic label\">mm</div></div><p></p></template>"; });
define('text!descriptor/elements/bar-arrangement.html', ['module'], function(module) { module.exports = "<template bindable=\"arrangement, index, onChange\"><h3>Side ${index+1}</h3><p></p><div class=\"ui input labeled fluid\"><div class=\"ui label\">Count</div><input change.delegate=\"onChange()\" value.bind=\"arrangement.count\" step=\"1\" type=\"number\" placeholder=\"The number of bars on the side.\"></div><p></p></template>"; });
define('text!descriptor/elements/clip-arrangement.html', ['module'], function(module) { module.exports = "<template bindable=\"arrangement, index, onChange\"><h3>Side ${index+1}</h3><p></p><div class=\"ui input labeled fluid\"><div class=\"ui label\">Count</div><input change.delegate=\"onChange()\" value.bind=\"arrangement.count\" step=\"1\" type=\"number\" placeholder=\"The number of clips on the side.\"></div><p></p></template>"; });
define('text!descriptor/elements/color-option.html', ['module'], function(module) { module.exports = "<template bindable=\"option,index,onChange\"><h3>Color ${index+1}</h3><div if.bind=\"option.colorId != ''\"><div class=\"card\"><div class=\"ui content center aligned\"><h4 class=\"ui icon header\"><i class=\"square icon\" css=\"color: ${option.colorId | idToColorCss}\"></i><div class=\"content\">${option.colorId | idToColorCommonName}<div class=\"sub header\">${option.colorId | idToColorName}</div></div></h4></div></div></div><div if.bind=\"option.colorId.length == 0\"><p></p><div class=\"ui small icon fluid input\"><input value.bind=\"option.searchTerm & debounce:750\" type=\"text\" placeholder=\"Search colors...\"> <i class=\"search icon\"></i></div><p></p><p if.bind=\"!options.searchMatches.length\">&nbsp;</p><div class=\"ui eight doubling cards\"><div class=\"card\" repeat.for=\"match of option.searchMatches\"><div class=\"ui content center aligned\"><h4 class=\"ui icon header\"><i class=\"square icon\" css.bind=\"{color: match.css}\"></i><div class=\"content\">${match.common}<div class=\"sub header\">${match.name}</div></div></h4></div><div class=\"ui bottom attached center button\" click.delegate=\"option.selectColor(match)\">Select</div></div></div></div></template>"; });
define('text!descriptor/elements/hinge-orientation.html', ['module'], function(module) { module.exports = "<template bindable=\"hinge,index,onChange\"><h3>Hinge ${index+1}</h3><p></p><div class=\"ui small header\">Orientation</div><div class=\"ui input labeled fluid\"><select change.delegate=\"onChange()\" value.bind=\"hinge.orientation\" class=\"ui selection dropdown\"><option value=\"\">Select An Orientation</option><option value=\"0\">None</option><option value=\"1\">Horizontal</option><option value=\"2\">Vertical</option><option value=\"3\">Both</option></select></div><p></p><p></p><div class=\"ui small header\">Style</div><div class=\"ui input labeled fluid\"><select change.delegate=\"onChange()\" value.bind=\"hinge.type\" class=\"ui selection dropdown\"><option value=\"\">Select A Style</option><option value=\"0\">None</option><option value=\"1\">Ridge</option><option value=\"2\">Narrow Finger</option><option value=\"3\">Wide Finger</option><option value=\"4\">1 x 2 Brick Hinge</option><option value=\"5\">Long Pin</option><option value=\"6\">Short Pin</option></select></div><p></p></template>"; });
define('text!descriptor/elements/pin-arrangement.html', ['module'], function(module) { module.exports = "<template bindable=\"arrangement, index, onChange\"><h3>Side ${index+1}</h3><p></p><div class=\"ui input right labeled fluid\"><div class=\"ui label\">Length</div><input change.delegate=\"onChange()\" value.bind=\"arrangement.lengthMm\" step=\"8\" type=\"number\" placeholder=\"The length of a each pin.\"><div class=\"ui basic label\">mm</div></div><p></p><p></p><div class=\"ui input labeled fluid\"><div class=\"ui label\">Count</div><input change.delegate=\"onChange()\" value.bind=\"arrangement.count\" step=\"1\" type=\"number\" placeholder=\"The numbe of pins on side.\"></div><p></p></template>"; });
define('text!descriptor/elements/pin-socket-arrangement.html', ['module'], function(module) { module.exports = "<template bindable=\"arrangement,index,onChange\"><h3>Side ${index+1}</h3><p></p><div class=\"ui input labeled fluid\"><div class=\"ui label\">Count</div><input change.delegate=\"onChange()\" value.bind=\"arrangement.count\" step=\"1\" type=\"number\" placeholder=\"Total number of pin sockets on a side.\"></div><p></p></template>"; });
define('text!descriptor/elements/sleeve-arrangement.html', ['module'], function(module) { module.exports = "<template bindable=\"arrangement, index, onChange\"><h3>Side ${index+1}</h3><p></p><div class=\"ui input labeled fluid\"><div class=\"ui label\">Count</div><input change.delegate=\"onChange()\" value.bind=\"arrangement.count\" step=\"1\" type=\"number\" placeholder=\"The number of bar sleeves on the side.\"></div><p></p></template>"; });
define('text!descriptor/elements/socket-arrangement.html', ['module'], function(module) { module.exports = "<template bindable=\"arrangement,index,onChange\"><h3>Side ${index+1}</h3><p></p><div class=\"ui input labeled fluid\"><div class=\"ui label\">Max</div><input change.delegate=\"onChange()\" value.bind=\"arrangement.max\" step=\"1\" type=\"number\" placeholder=\"The maximum number of stud sockets in a single row.\"></div><p></p><p></p><div class=\"ui input labeled fluid\"><div class=\"ui label\">Min</div><input change.delegate=\"onChange()\" value.bind=\"arrangement.min\" step=\"1\" type=\"number\" placeholder=\"The maximum number of stud sockets in a single row.\"></div><p></p><p></p><div class=\"ui input labeled fluid\"><div class=\"ui label\">Total</div><input change.delegate=\"onChange()\" value.bind=\"arrangement.total\" step=\"1\" type=\"number\" placeholder=\"Total number of stud sockets on a side.\"></div><p></p></template>"; });
define('text!descriptor/elements/stud-face.html', ['module'], function(module) { module.exports = "<template bindable=\"orientation,index,onChange\"><h3>Side ${index+1}</h3><p></p><div class=\"ui input labeled fluid\"><div class=\"ui label\">Max</div><input change.delegate=\"onChange()\" value.bind=\"orientation.max\" step=\"1\" type=\"number\" placeholder=\"The maximum number of studs in a single row.\"></div><p></p><p></p><div class=\"ui input labeled fluid\"><div class=\"ui label\">Min</div><input change.delegate=\"onChange()\" value.bind=\"orientation.min\" step=\"1\" type=\"number\" placeholder=\"The maximum number of studs in a single row.\"></div><p></p><p></p><div class=\"ui input labeled fluid\"><div class=\"ui label\">Total</div><input change.delegate=\"onChange()\" value.bind=\"orientation.total\" step=\"1\" type=\"number\" placeholder=\"Total number of studs on a face.\"></div><p></p></template>"; });
define('text!resources/elements/descriptor-navigation.html', ['module'], function(module) { module.exports = "<template bindable=\"prevText,prevRoute,nextText,nextRoute\"><div class=\"ui divider\"></div><div class=\"ui secondary menu\"><div class=\"item\" if.bind=\"prevText\"><a href=\"${prevRoute}\" class=\"ui left labeled icon button\"><i class=\"left arrow icon\"></i> ${prevText}</a></div><div class=\"right menu\"><div class=\"item\" if.bind=\"nextText\"><a href=\"${nextRoute}\" class=\"ui right labeled icon button\"><i class=\"right arrow icon\"></i> ${nextText}</a></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map