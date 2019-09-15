/* <nowiki> */

/**
 * widget-map-floors
 * https://github.com/GW2Wiki/widget-map-floors
 *
 * Created by Smiley on 11.06.2016.
 * https://github.com/codemasher
 * https://wiki.guildwars2.com/wiki/User:Smiley-1
 *
 * scripts & libraries used:
 *
 * https://leafletjs.com/
 * http://vanilla-js.com/
 */
"use strict";

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var GW2MapOptions = {
  //	errorTile         : 'https://wiki.guildwars2.com/images/a/af/Widget_Map_floors_blank_tile.png',
  initLayers: [
    "region_label",
    "map_label",
    "task_icon",
    "heropoint_icon",
    "waypoint_icon",
    "landmark_icon",
    "vista_icon",
    "unlock_icon",
    "masterypoint_icon",
    "adventure_icon",
    "jumpingpuzzle_icon"
  ]
};
/**
 * Class GW2Map
 */

var GW2Map =
  /*#__PURE__*/
  (function() {
    // common settings for all maps
    // per-map options parsed from the container's dataset

    /**
     * GW2Map constructor.
     *
     * @param {HTMLElement} container
     * @param {string}      id
     * @param {Object}      options
     * @returns {GW2Map}
     */
    function GW2Map(container, id, options) {
      _classCallCheck(this, GW2Map);

      _defineProperty(this, "options", {
        containerClassName: "gw2map",
        linkboxClassName: "gw2map-linkbox",
        // additional to containerClassName
        navClassName: "gw2map-nav",
        lang: "en",
        initLayers: null,
        mapAttribution: true,
        errorTile:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAADHUlEQVR4nO3UMQEAIAzAsIF/zyBjRxMFvXpm5g2QdLcDgD0GAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEGAGEfdCIC/5NkVo8AAAAASUVORK5CYII=",
        padding: 0.5,
        defaultZoom: 4,
        minZoom: 0,
        maxZoom: 7,
        apiBase: "https://api.guildwars2.com/v2/",
        tileBase: "https://tiles.guildwars2.com/",
        tileExt: ".jpg",
        colors: {
          map_poly: "rgba(255, 255, 255, 0.3)",
          region_poly: "rgba(255, 155, 255, 0.3)",
          sector_poly: "rgba(255, 200, 20, 0.5)",
          task_poly: "rgba(250, 250, 30, 0.5)"
        }
      });

      _defineProperty(this, "dataset", {});

      _defineProperty(this, "layers", {});

      _defineProperty(this, "panes", {});

      this.container = container;
      this.id = id;
      this.options = GW2MapUtil.extend(this.options, options);
      this.dataset = new GW2MapDataset(
        this.container.dataset,
        this.options
      ).getData();
      this.i18n = GW2MAP_I18N[this.options.lang];
    }
    /**
     * @returns {GW2Map}
     * @public
     */

    _createClass(GW2Map, [
      {
        key: "init",
        value: function init() {
          if (this.dataset.linkbox) {
            this.c = document.createElement("div");
            this.c.className = this.options.navClassName;
            this.container.className += " " + this.options.linkboxClassName;
            this.container.parentNode.insertBefore(
              this.c,
              this.container.nextSibling
            );
          }

          this._setBaseMap(); // build the request path @todo

          var url =
            this.options.apiBase +
            "continents/" +
            this.dataset.continentId +
            "/floors/" +
            this.dataset.floorId;
          url += this.dataset.regionId
            ? "/regions/" + this.dataset.regionId
            : "";
          url +=
            this.dataset.regionId && this.dataset.mapId
              ? "/maps/" + this.dataset.mapId
              : "";
          url += "?wiki=1&lang=" + this.dataset.language;

          this._request(url, "_render");

          return this;
        }
        /**
         * @param {string} url
         * @param {string} callback
         * @private
         */
      },
      {
        key: "_request",
        value: function _request(url, callback) {
          var _this = this;

          // xhr > fetch. DON'T @ ME
          var request = new XMLHttpRequest();
          request.open("GET", url, true);
          request.addEventListener("load", function(ev) {
            if (request.readyState === 4 && request.status === 200) {
              return _this[callback](JSON.parse(request.responseText));
            }

            console.log("(╯°□°）╯彡┻━┻ ", request.status);
          });
          request.send();
        }
        /**
         * sets the base tiles and adds an optional copyright info
         *
         * @returns {GW2Map}
         * @private
         */
      },
      {
        key: "_setBaseMap",
        value: function _setBaseMap() {
          var _this2 = this;

          // the map object
          this.map = L.map(this.container, {
            crs: L.CRS.Simple,
            minZoom: this.options.minZoom,
            maxZoom: this.options.maxZoom,
            attributionControl: this.options.mapAttribution,
            zoomControl: this.dataset.mapControls
          });
          this.map.on("click", function(ev) {
            return _this2._clickEvent(ev);
          }); //		this.map.on('zoomend', ev => console.log(this.map.getZoom()));
          // the main tile layer

          L.tileLayer(null, {
            // use the custom tile getter
            tileGetter: function tileGetter(coords, zoom) {
              return _this2._tileGetter(coords, zoom);
            },
            continuousWorld: true,
            minZoom: this.options.minZoom,
            maxZoom: this.options.maxZoom,
            attribution:
              this.options.mapAttribution === true
                ? this.i18n.attribution +
                  ' &copy; <a href="http://www.arena.net/" target="_blank">ArenaNet</a>'
                : false
          }).addTo(this.map);
          return this;
        }
        /**
         * @param {*} ev
         * @private
         */
      },
      {
        key: "_clickEvent",
        value: function _clickEvent(ev) {
          var point = this.map.project(ev.latlng, this.options.maxZoom);
          console.log([point.x, point.y]);
        }
        /**
         * fires the API request and draws the map
         *
         * @todo https://github.com/arenanet/api-cdi/pull/61
         * @todo https://github.com/arenanet/api-cdi/pull/62
         * @todo https://github.com/arenanet/api-cdi/issues/308
         *
         * @returns {GW2Map}
         * @private
         */
      },
      {
        key: "_render",
        value: function _render(json) {
          var _this3 = this;

          // transform the response to GeoJSON - polyfill for https://github.com/arenanet/api-cdi/pull/62
          this.json = new GW2GeoJSON(
            json,
            this.dataset.includeMaps,
            this.dataset.customRect
          ).getData();
          this.layerNames = Object.keys(this.json.featureCollections);
          this.viewRect = this.json.viewRect; // set viewRect for the tile getter

          var rect = new GW2ContinentRect(this.viewRect).getBounds();
          var bounds = new L.LatLngBounds(
            this._p2ll(rect[0]),
            this._p2ll(rect[1])
          ).pad(this.options.padding);
          var center = bounds.getCenter();
          var coords = this.dataset.centerCoords || [];

          if (coords.length === 2) {
            coords.forEach(function(pos, i) {
              return (coords[i] = GW2MapUtil.intval(pos));
            });

            if (
              coords[0] > this.viewRect[0][0] &&
              coords[1] > this.viewRect[0][1]
            ) {
              center = this._p2ll(coords);
            }
          }

          this.map.setMaxBounds(bounds).setView(center, this.dataset.zoom);
          this.layerNames.forEach(function(pane) {
            return _this3._createPane(
              pane,
              _this3.options.initLayers || _this3.layerNames
            );
          }); // add the layer controls

          if (this.dataset.mapControls) {
            L.control.layers(null, this.panes).addTo(this.map);
          }

          return this;
        }
        /**
         * @param {string} pane
         * @param {string[]}initLayers
         * @private
         */
      },
      {
        key: "_createPane",
        value: function _createPane(pane, initLayers) {
          var _this4 = this;

          //		console.log(pane, this.json.featureCollections[pane]);
          this.layers[pane] = L.geoJson(this.json.featureCollections[pane], {
            pane: this.map.createPane(pane),
            coordsToLatLng: function coordsToLatLng(coords) {
              return _this4._p2ll(coords);
            },
            pointToLayer: function pointToLayer(feature, coords) {
              return _this4._pointToLayer(feature, coords, pane);
            },
            onEachFeature: function onEachFeature(feature, layer) {
              return _this4._onEachFeature(feature, layer, pane);
            },
            style: function style(feature) {
              return _this4._layerStyle(feature, pane);
            }
          });

          if (GW2MapUtil.in_array(pane, initLayers)) {
            this.layers[pane].addTo(this.map);
          }

          this.panes[
            '<span class="gw2map-layer-control ' +
              pane +
              '">&nbsp;</span> ' +
              this.i18n.layers[pane]
          ] = this.layers[pane];
        }
        /**
         * @link  http://leafletjs.com/reference-1.5.0.html#geojson-oneachfeature
         * @param {*}      feature
         * @param {L.Layer}  layer
         * @param {string} pane
         * @private
         */
      },
      {
        key: "_onEachFeature",
        value: function _onEachFeature(feature, layer, pane) {
          //		console.log(feature, layer, pane);
          var p = feature.properties;
          var content = "";

          if (p.layertype === "icon") {
            if (p.icon) {
              content +=
                '<img class="gw2map-popup-icon" src="' +
                p.icon +
                '" alt="' +
                p.name +
                '"/>';
            } else {
              var classname = "gw2map-" + p.type + "-icon";

              if (p.type === "masterypoint") {
                classname += " " + p.region.toLowerCase();
              }

              content +=
                '<span class="gw2map-popup-icon ' + classname + '" ></span>';
            }
          }

          if (p.name) {
            if (!GW2MapUtil.in_array(p.type, ["vista"])) {
              //noinspection RegExpRedundantEscape
              var wikiname = p.name
                .toString()
                .replace(/\.$/, "")
                .replace(/\s/g, "_")
                .replace(/(Mount\:_|Raid—)/, "");
              content +=
                '<a class="gw2map-wikilink" href="' +
                GW2MAP_I18N[this.dataset.language].wiki +
                encodeURIComponent(wikiname) +
                '" target="_blank">' +
                p.name +
                "</a>";
            } else {
              content += p.name;
            }
          }

          if (p.level) {
            content += " (" + p.level + ")";
          } else if (p.min_level && p.max_level) {
            content +=
              " (" +
              (p.min_level === p.max_level
                ? p.max_level
                : p.min_level + "-" + p.max_level) +
              ")";
          }

          if (p.chat_link) {
            if (content) {
              content += "<br>";
            }

            content +=
              '<input class="gw2map-chatlink" type="text" value="' +
              p.chat_link +
              '" readonly="readonly" onclick="this.select();return false;" />';
          }

          if (p.description) {
            if (content) {
              content += "<br>";
            }

            content +=
              '<div class="gw2map-description">' + p.description + "</div>";
          }

          if (content) {
            layer.bindPopup(content);
          }

          if (this.dataset.linkbox) {
            this._linkboxItem(feature, layer, pane);
          }
        }
        /**
         * @param {*}       feature
         * @param {L.Layer} layer
         * @param {string}  pane
         * @private
         */
      },
      {
        key: "_linkboxItem",
        value: function _linkboxItem(feature, layer, pane) {
          var _this5 = this;

          // ignore the region label
          if (pane === "region_label") {
            return;
          }

          var p = feature.properties;
          var id = "gw2map-navbox-map-" + p.mapID.toString();
          var box = document.getElementById(id);

          if (!box) {
            box = document.createElement("div");
            box.id = id;
            box.className = "gw2map-navbox";
            this.c.appendChild(box);
          } // @todo: containers for each category, icons

          var item = document.createElement("span");
          item.className = pane;
          item.innerHTML = p.name || p.id || "-";

          if (typeof layer.getLatLng === "function") {
            item.addEventListener("click", function(ev) {
              var latlng = layer.getLatLng();

              _this5.map.panTo(latlng).openPopup(layer.getPopup(), latlng);
            }); // insert the map label as first item

            pane === "map_label"
              ? box.insertBefore(item, box.firstChild)
              : box.appendChild(item);
          }
        }
        /**
         * @link  http://leafletjs.com/reference-1.5.0.html#geojson-pointtolayer
         * @param {*}      feature
         * @param {LatLng} coords
         * @param {string} pane
         * @private
         */
      },
      {
        key: "_pointToLayer",
        value: function _pointToLayer(feature, coords, pane) {
          //		console.log(feature, coords, pane);
          var icon;
          var p = feature.properties;
          var iconParams = {
            pane: pane,
            iconSize: null,
            popupAnchor: "auto"
          };

          if (p.icon) {
            iconParams.iconUrl = p.icon;
            icon = L.icon(iconParams);
          } else {
            iconParams.className =
              "gw2map-" + p.layertype + " gw2map-" + p.type + "-" + p.layertype;

            if (p.layertype === "label") {
              iconParams.html = p.name;
              iconParams.iconAnchor = "auto";
            }

            if (p.type === "masterypoint") {
              iconParams.className += " " + p.region.toLowerCase();
            }

            icon = L.divIcon(iconParams);
          }

          return L.marker(coords, {
            pane: pane,
            title: p.layertype === "icon" ? p.name : null,
            icon: icon
          });
        }
        /**
         * @link  http://leafletjs.com/reference-1.5.0.html#geojson-style
         * @param {*}      feature
         * @param {string} pane
         * @private
         */
      },
      {
        key: "_layerStyle",
        value: function _layerStyle(feature, pane) {
          //		console.log(feature, pane);
          if (pane === "polylines") {
            //	console.log(feature, pane);
          }

          if (
            GW2MapUtil.in_array(pane, [
              "region_poly",
              "map_poly",
              "sector_poly",
              "task_poly"
            ])
          ) {
            return {
              pane: pane,
              stroke: true,
              opacity: 0.7,
              color: this.options.colors[pane] || "rgba(255, 255, 255, 0.3)",
              weight: 2,
              interactive: false
            };
          }

          return {};
        }
        /**
         * @param {[*,*]} coords
         * @returns {LatLng}
         * @private
         */
      },
      {
        key: "_p2ll",
        value: function _p2ll(coords) {
          return this.map.unproject(coords, this.options.maxZoom);
        }
        /**
         * @param {[*,*]}  coords
         * @param {number} zoom
         * @returns {[*,*]}
         * @private
         */
      },
      {
        key: "_project",
        value: function _project(coords, zoom) {
          var _this6 = this;

          return coords.map(function(c) {
            return Math.floor(c / (1 << (_this6.options.maxZoom - zoom)) / 256);
          });
        }
        /**
         * @param {[*,*]}  coords
         * @param {number} zoom
         * @returns {string}
         * @private
         */
      },
      {
        key: "_tileGetter",
        value: function _tileGetter(coords, zoom) {
          var _this7 = this;

          var clamp = this.viewRect.map(function(c) {
            return _this7._project(c, zoom);
          });

          if (
            coords.x < clamp[0][0] ||
            coords.x > clamp[1][0] ||
            coords.y < clamp[0][1] ||
            coords.y > clamp[1][1]
          ) {
            return this.options.errorTile;
          }

          return (
            this.options.tileBase +
            this.dataset.continentId +
            "/" +
            (this.dataset.customFloor || this.dataset.floorId) +
            "/" +
            zoom +
            "/" +
            coords.x +
            "/" +
            coords.y +
            this.options.tileExt
          );
        }
      }
    ]);

    return GW2Map;
  })();
/**
 * Class GW2MapDataset
 *
 * reads the dataset from the container element, validates and stores the values in this.dataset
 *
 * i hate all of this.
 */

var GW2MapDataset =
  /*#__PURE__*/
  (function() {
    //noinspection RegExpRedundantEscape

    /**
     * @param {Object} dataset
     * @param {Object} options
     */
    function GW2MapDataset(dataset, options) {
      _classCallCheck(this, GW2MapDataset);

      _defineProperty(this, "metadata", {
        continentId: {
          type: "int",
          default: 1
        },
        floorId: {
          type: "int",
          default: 1
        },
        regionId: {
          type: "int",
          default: null
        },
        mapId: {
          type: "int",
          default: null
        },
        customFloor: {
          type: "int",
          default: null
        },
        language: {
          type: "int",
          default: null
        },
        zoom: {
          type: "int",
          default: -1
        },
        mapControls: {
          type: "bool",
          default: true
        },
        linkbox: {
          type: "bool",
          default: false
        },
        poiId: {
          type: "string",
          default: null,
          regex: /^([\d\-]+)$/
        },
        poiType: {
          type: "string",
          default: null,
          regex: /^([a-z]+)$/i
        },
        // @todo: infobox type?
        centerCoords: {
          type: "array",
          default: null,
          regex: /^([\[\]\s\d\.,]+)$/
        },
        customRect: {
          type: "array",
          default: null,
          regex: /^([\[\]\s\d\.,]+)$/
        },
        includeMaps: {
          type: "array",
          default: [],
          regex: /^([\s\d,]+)$/
        }
      });

      _defineProperty(this, "dataset", {});

      this.options = options;

      this._parse(dataset);
    }
    /**
     * @returns {Object}
     */

    _createClass(GW2MapDataset, [
      {
        key: "getData",
        value: function getData() {
          return this.dataset;
        }
        /**
         * @param {Object} dataset
         * @private
         */
      },
      {
        key: "_parse",
        value: function _parse(dataset) {
          var _this8 = this;

          //		console.log(dataset);
          Object.keys(this.metadata).forEach(function(k) {
            if (typeof dataset[k] === "undefined" || dataset[k] === "") {
              _this8.dataset[k] = _this8.metadata[k].default;
            } else {
              ["int", "bool", "array", "string"].forEach(function(t) {
                if (_this8.metadata[k].type === t) {
                  _this8.dataset[k] = _this8["_parse_" + t](
                    dataset[k],
                    _this8.metadata[k]
                  );
                }
              });
            }

            if (typeof _this8["_parse_" + k] === "function") {
              _this8.dataset[k] = _this8["_parse_" + k](
                _this8.dataset[k],
                _this8.metadata[k]
              );
            }
          }); //		console.log(this.dataset);
        }
        /**
         * @param {Object} data
         * @returns {number}
         * @private
         */
      },
      {
        key: "_parse_int",
        value: function _parse_int(data) {
          return GW2MapUtil.intval(data);
        }
        /**
         * @param {Object} data
         * @returns {boolean}
         * @private
         */
      },
      {
        key: "_parse_bool",
        value: function _parse_bool(data) {
          return GW2MapUtil.in_array(data.toLowerCase(), [
            "1",
            "true",
            "t",
            "yes",
            "y"
          ]);
        }
        /**
         * @param {Object} data
         * @param {Object} meta
         * @returns {*}
         * @private
         */
      },
      {
        key: "_parse_array",
        value: function _parse_array(data, meta) {
          var match = data.match(meta.regex); // console.log(data, match);

          if (match) {
            return match;
          }

          return meta.default;
        }
        /**
         * @param {Object} data
         * @param {Object} meta
         * @returns {number}
         * @private
         */
      },
      {
        key: "_parse_continentId",
        value: function _parse_continentId(data, meta) {
          return GW2MapUtil.in_array(data, [1, 2]) ? data : meta.default;
        }
        /**
         * @param {Object} data
         * @param {Object} meta
         * @returns {string}
         * @private
         */
      },
      {
        key: "_parse_language",
        value: function _parse_language(data, meta) {
          return ["de", "en", "es", "fr", "zh"][data] || this.options.lang;
        }
      },
      {
        key: "_parse_zoom",

        /**
         * @param {Object} data
         * @returns {number}
         * @private
         */
        value: function _parse_zoom(data) {
          return data < this.options.minZoom || data > this.options.maxZoom
            ? this.options.defaultZoom
            : data;
        }
        /**
         * @param {Object} data
         * @param {Object} meta
         * @returns {[]}
         * @private
         */
      },
      {
        key: "_parse_includeMaps",
        value: function _parse_includeMaps(data, meta) {
          if (data === meta.default) {
            return data;
          }

          var ret = [];
          data = data[0].replace(/[^\d,]/g, "").split(",");
          data.forEach(function(v) {
            if (v) {
              ret.push(GW2MapUtil.intval(v));
            }
          });
          return ret;
        }
        /**
         * @param {Object} data
         * @param {Object} meta
         * @returns {number[][]}
         * @private
         */
      },
      {
        key: "_parse_customRect",
        value: function _parse_customRect(data, meta) {
          if (data === meta.default) {
            return data;
          }

          data = JSON.parse(data[0]);

          if (data.length < 2 || data[0].length < 2 || data[1].length < 2) {
            return meta.default;
          }

          return data;
        }
        /**
         * @param {Object} data
         * @param {Object} meta
         * @returns {number[]}
         * @private
         */
      },
      {
        key: "_parse_centerCoords",
        value: function _parse_centerCoords(data, meta) {
          if (data === meta.default) {
            return data;
          }

          data = JSON.parse(data[0]);

          if (
            data.length < 2 ||
            typeof data[0] !== "number" ||
            typeof data[1] !== "number"
          ) {
            return meta.default;
          }

          return data;
        }
      }
    ]);

    return GW2MapDataset;
  })();
/**
 * Class GW2MapUtil
 */

var GW2MapUtil =
  /*#__PURE__*/
  (function() {
    function GW2MapUtil() {
      _classCallCheck(this, GW2MapUtil);
    }

    _createClass(GW2MapUtil, null, [
      {
        key: "extend",

        /**
         * @param {Object} target
         * @param {Object} source
         * @returns {Object}
         */
        value: function extend(target, source) {
          for (var property in source) {
            if (source.hasOwnProperty(property)) {
              target[property] = source[property];
            }
          }

          return target;
        }
        /**
         * @link  http://locutus.io/php/var/intval/
         *
         * @param {*}      mixed_var
         * @param {number} base
         * @returns {*}
         */
      },
      {
        key: "intval",
        value: function intval(mixed_var, base) {
          var tmp;

          var type = _typeof(mixed_var);

          if (type === "boolean") {
            return +mixed_var;
          } else if (type === "string") {
            tmp = parseInt(mixed_var, base || 10);
            return isNaN(tmp) || !isFinite(tmp) ? 0 : tmp;
          } else if (type === "number" && isFinite(mixed_var)) {
            return mixed_var | 0;
          } else {
            return 0;
          }
        }
        /**
         * @param {*} needle
         * @param {*} haystack
         * @returns {boolean}
         */
      },
      {
        key: "in_array",
        value: function in_array(needle, haystack) {
          for (var key in haystack) {
            if (haystack.hasOwnProperty(key)) {
              if (haystack[key] === needle) {
                return true;
              }
            }
          }

          return false;
        }
      },
      {
        key: "array_multisort",
        value: function array_multisort(arr) {
          var flags = {
            SORT_REGULAR: 16,
            SORT_NUMERIC: 17,
            SORT_STRING: 18,
            SORT_ASC: 32,
            SORT_DESC: 40
          }; //let argl = arguments.length;
          //let args = arguments;

          var sortArrsLength = 0;
          var sortArrs = [[]];
          var sortKeys = [[]];
          var sortFlag = [0];
          var g = 0;
          var i = 0;
          var j; // = 0

          var k = "";
          var l = 0;
          var thingsToSort = [];
          var vkey = 0;
          var zlast = null;
          var nLastSort = [];
          var lastSort = [];
          var lastSorts = [];
          var tmpArray = [];
          var elIndex = 0;

          var sortDuplicator = function sortDuplicator() {
            //a, b
            return nLastSort.shift();
          };

          var sortFunctions = [
            [
              function(a, b) {
                lastSort.push(a > b ? 1 : a < b ? -1 : 0);
                return a > b ? 1 : a < b ? -1 : 0;
              },
              function(a, b) {
                lastSort.push(b > a ? 1 : b < a ? -1 : 0);
                return b > a ? 1 : b < a ? -1 : 0;
              }
            ],
            [
              function(a, b) {
                lastSort.push(a - b);
                return a - b;
              },
              function(a, b) {
                lastSort.push(b - a);
                return b - a;
              }
            ],
            [
              function(a, b) {
                lastSort.push(a + "" > b + "" ? 1 : a + "" < b + "" ? -1 : 0);
                return a + "" > b + "" ? 1 : a + "" < b + "" ? -1 : 0;
              },
              function(a, b) {
                lastSort.push(b + "" > a + "" ? 1 : b + "" < a + "" ? -1 : 0);
                return b + "" > a + "" ? 1 : b + "" < a + "" ? -1 : 0;
              }
            ]
          ];

          if (Object.prototype.toString.call(arr) === "[object Array]") {
            sortArrs[0] = arr;
          } else if (arr && _typeof(arr) === "object") {
            for (i in arr) {
              if (arr.hasOwnProperty(i)) {
                sortKeys[0].push(i);
                sortArrs[0].push(arr[i]);
              }
            }
          } else {
            return false;
          }

          var arrMainLength = sortArrs[0].length,
            sortComponents = [0, arrMainLength];

          for (j = 1; j < arguments.length; j++) {
            if (
              Object.prototype.toString.call(arguments[j]) === "[object Array]"
            ) {
              sortArrs[j] = arguments[j];
              sortFlag[j] = 0;

              if (arguments[j].length !== arrMainLength) {
                return false;
              }
            } else if (arguments[j] && _typeof(arguments[j]) === "object") {
              sortKeys[j] = [];
              sortArrs[j] = [];
              sortFlag[j] = 0;

              for (i in arguments[j]) {
                if (arguments[j].hasOwnProperty(i)) {
                  sortKeys[j].push(i);
                  sortArrs[j].push(arguments[j][i]);
                }
              }

              if (sortArrs[j].length !== arrMainLength) {
                return false;
              }
            } else if (typeof arguments[j] === "string") {
              var lFlag = sortFlag.pop();

              if (
                typeof flags[arguments[j]] === "undefined" ||
                ((flags[arguments[j]] >>> 4) & (lFlag >>> 4)) > 0
              ) {
                return false;
              }

              sortFlag.push(lFlag + flags[arguments[j]]);
            } else {
              return false;
            }
          }

          for (i = 0; i !== arrMainLength; i++) {
            thingsToSort.push(true);
          }

          for (i in sortArrs) {
            if (sortArrs.hasOwnProperty(i)) {
              lastSorts = [];
              tmpArray = [];
              elIndex = 0;
              nLastSort = [];
              lastSort = [];

              if (sortComponents.length === 0) {
                if (
                  Object.prototype.toString.call(arguments[i]) ===
                  "[object Array]"
                ) {
                  arguments[i] = sortArrs[i]; // args -> arguments
                } else {
                  for (k in arguments[i]) {
                    if (arguments[i].hasOwnProperty(k)) {
                      delete arguments[i][k];
                    }
                  }

                  sortArrsLength = sortArrs[i].length;

                  for (j = 0, vkey = 0; j < sortArrsLength; j++) {
                    vkey = sortKeys[i][j];
                    arguments[i][vkey] = sortArrs[i][j]; // args -> arguments
                  }
                }

                delete sortArrs[i];
                delete sortKeys[i];
                continue;
              }

              var sFunction =
                sortFunctions[sortFlag[i] & 3][(sortFlag[i] & 8) > 0 ? 1 : 0];

              for (l = 0; l !== sortComponents.length; l += 2) {
                tmpArray = sortArrs[i].slice(
                  sortComponents[l],
                  sortComponents[l + 1] + 1
                );
                tmpArray.sort(sFunction);
                lastSorts[l] = [].concat(lastSort); // Is there a better way to copy an array in Javascript?

                elIndex = sortComponents[l];

                for (g in tmpArray) {
                  if (tmpArray.hasOwnProperty(g)) {
                    sortArrs[i][elIndex] = tmpArray[g];
                    elIndex++;
                  }
                }
              }

              sFunction = sortDuplicator;

              for (j in sortArrs) {
                if (sortArrs.hasOwnProperty(j)) {
                  if (sortArrs[j] === sortArrs[i]) {
                    continue;
                  }

                  for (l = 0; l !== sortComponents.length; l += 2) {
                    tmpArray = sortArrs[j].slice(
                      sortComponents[l],
                      sortComponents[l + 1] + 1
                    );
                    nLastSort = [].concat(lastSorts[l]); // alert(l + ':' + nLastSort);

                    tmpArray.sort(sFunction);
                    elIndex = sortComponents[l];

                    for (g in tmpArray) {
                      if (tmpArray.hasOwnProperty(g)) {
                        sortArrs[j][elIndex] = tmpArray[g];
                        elIndex++;
                      }
                    }
                  }
                }
              }

              for (j in sortKeys) {
                if (sortKeys.hasOwnProperty(j)) {
                  for (l = 0; l !== sortComponents.length; l += 2) {
                    tmpArray = sortKeys[j].slice(
                      sortComponents[l],
                      sortComponents[l + 1] + 1
                    );
                    nLastSort = [].concat(lastSorts[l]);
                    tmpArray.sort(sFunction);
                    elIndex = sortComponents[l];

                    for (g in tmpArray) {
                      if (tmpArray.hasOwnProperty(g)) {
                        sortKeys[j][elIndex] = tmpArray[g];
                        elIndex++;
                      }
                    }
                  }
                }
              }

              zlast = null;
              sortComponents = [];

              for (j in sortArrs[i]) {
                if (sortArrs[i].hasOwnProperty(j)) {
                  if (!thingsToSort[j]) {
                    if (sortComponents.length & 1) {
                      sortComponents.push(j - 1);
                    }

                    zlast = null;
                    continue;
                  }

                  if (!(sortComponents.length & 1)) {
                    if (zlast !== null) {
                      if (sortArrs[i][j] === zlast) {
                        sortComponents.push(j - 1);
                      } else {
                        thingsToSort[j] = false;
                      }
                    }

                    zlast = sortArrs[i][j];
                  } else {
                    if (sortArrs[i][j] !== zlast) {
                      sortComponents.push(j - 1);
                      zlast = sortArrs[i][j];
                    }
                  }
                }
              }

              if (sortComponents.length & 1) {
                sortComponents.push(j);
              }

              if (
                Object.prototype.toString.call(arguments[i]) ===
                "[object Array]"
              ) {
                arguments[i] = sortArrs[i]; // args -> arguments
              } else {
                for (j in arguments[i]) {
                  if (arguments[i].hasOwnProperty(j)) {
                    delete arguments[i][j];
                  }
                }

                sortArrsLength = sortArrs[i].length;

                for (j = 0, vkey = 0; j < sortArrsLength; j++) {
                  vkey = sortKeys[i][j];
                  arguments[i][vkey] = sortArrs[i][j]; // args -> arguments
                }
              }

              delete sortArrs[i];
              delete sortKeys[i];
            }
          }

          return true;
        }
      }
    ]);

    return GW2MapUtil;
  })();
/**
 * Class GW2GeoJSON
 *
 * polyfill for https://github.com/arenanet/api-cdi/pull/62
 */

var GW2GeoJSON =
  /*#__PURE__*/
  (function() {
    // @todo
    // the order of these items also determines the order in the layer control menu

    /**
     * GW2GeoJSON constructor
     *
     * @param data
     * @param includeMaps
     * @param customRect
     */
    function GW2GeoJSON(data, includeMaps, customRect) {
      var _this9 = this;

      _classCallCheck(this, GW2GeoJSON);

      _defineProperty(this, "layers", [
        "waypoint_icon",
        "landmark_icon",
        "vista_icon",
        "heropoint_icon",
        "task_icon",
        "task_poly",
        "unlock_icon",
        "masterypoint_icon",
        "adventure_icon",
        "jumpingpuzzle_icon",
        "region_label",
        "region_poly",
        "map_label",
        "map_poly",
        "sector_label",
        "sector_poly",
        "polylines" //		'camp', 'tower', 'keep', 'castle', 'ruins', 'generic', 'resource'
      ]);

      _defineProperty(this, "data", {});

      _defineProperty(this, "includeMaps", []);

      _defineProperty(this, "featureCollections", {});

      this.data = data;
      this.includeMaps = includeMaps;
      this.setView(customRect);
      this.layers.forEach(function(layer) {
        return (_this9.featureCollections[
          layer
        ] = new GeoJSONFeatureCollection());
      });
    }
    /**
     * @returns {GW2GeoJSON}
     */

    _createClass(GW2GeoJSON, [
      {
        key: "setView",
        value: function setView(customRect) {
          if (customRect) {
            this.viewRect = customRect; // @todo
          } else if (this.data.continent_rect) {
            this.viewRect = this.data.continent_rect;
          } else if (this.data.clamped_view) {
            this.viewRect = this.data.clamped_view;
          } else if (this.data.texture_dims) {
            this.viewRect = [[0, 0], this.data.texture_dims];
          } else {
            this.viewRect = [[0, 0], [49152, 49152]];
          }

          return this;
        }
        /**
         * @returns {*}
         */
      },
      {
        key: "getData",
        value: function getData() {
          var _this10 = this;

          // a response to floors
          if (this.data.regions) {
            this.continent(this.data.regions);
          } // a regions response
          else if (this.data.maps) {
            this.region(this.data);
          } // an actual map response
          else if (this.data.points_of_interest) {
            this.map(this.data);
          }

          Object.keys(this.featureCollections).forEach(function(f) {
            _this10.featureCollections[f] = _this10.featureCollections[
              f
            ].getJSON();
          });
          return {
            viewRect: this.viewRect,
            featureCollections: this.featureCollections
          };
        }
        /**
         * @param {*} continent
         * @returns {GW2GeoJSON}
         */
      },
      {
        key: "continent",
        value: function continent(_continent) {
          var _this11 = this;

          Object.keys(_continent).forEach(function(regionID) {
            return _this11.region(_continent[regionID]);
          });
          return this;
        }
        /**
         * @param {*} region
         * @returns {GW2GeoJSON}
         */
      },
      {
        key: "region",
        value: function region(_region) {
          var _this12 = this;

          this._addFeature(
            "region_label",
            _region.id,
            -1,
            _region.name,
            {
              type: "region",
              layertype: "label"
            },
            _region.label_coord
          );

          this._addFeature(
            "region_poly",
            _region.id,
            -1,
            _region.name,
            {
              type: "region",
              layertype: "poly"
            },
            new GW2ContinentRect(_region.continent_rect).getPoly(),
            "Polygon"
          );

          Object.keys(_region.maps).forEach(function(mapID) {
            var map = _region.maps[mapID];
            map.id = GW2MapUtil.intval(mapID); //			console.log('map', map.id, map.name);
            // @todo

            if (_this12.includeMaps.length > 0) {
              if (!GW2MapUtil.in_array(map.id, _this12.includeMaps)) {
                return _this12;
              }
            }

            _this12.map(map);
          });
          return this;
        }
        /**
         * @param {*} map
         * @returns {GW2GeoJSON}
         */
      },
      {
        key: "map",
        value: function map(_map) {
          var rect = new GW2ContinentRect(_map.continent_rect); // https://github.com/arenanet/api-cdi/issues/334

          this._addFeature(
            "map_label",
            _map.id,
            _map.id,
            _map.name,
            {
              min_level: _map.min_level,
              max_level: _map.max_level,
              type: "map",
              layertype: "label"
            },
            _map.label_coord || rect.getCenter()
          );

          this._addFeature(
            "map_poly",
            _map.id,
            _map.id,
            _map.name,
            {
              type: "map",
              layertype: "poly"
            },
            rect.getPoly(),
            "Polygon"
          );

          this.sectors(_map.sectors, _map.id)
            .poi(_map.points_of_interest, _map.id)
            .task(_map.tasks, _map.id)
            .heropoint(_map.skill_challenges, _map.id)
            .masteryPoint(_map.mastery_points, _map.id);
          var adventures = _map.adventures.length
            ? _map.adventures
            : GW2W_ADVENTURE_DATA[_map.id] || [];

          if (adventures) {
            this.adventure(adventures, _map.id);
          }

          if (GW2W_JP_DATA[_map.id]) {
            this.jumpingPuzzle(GW2W_JP_DATA[_map.id], _map.id);
          }

          if (GW2W_POLYLINES[_map.id]) {
            this.polylines(GW2W_POLYLINES[_map.id], _map.id);
          }

          return this;
        }
        /**
         * @param {*} sectors
         * @param {number} mapID
         * @returns {GW2GeoJSON}
         */
      },
      {
        key: "sectors",
        value: function sectors(_sectors, mapID) {
          var _this13 = this;

          Object.keys(_sectors).forEach(function(sectorId) {
            var sector = _sectors[sectorId];

            if (GW2W_SECTORDATA[sectorId]) {
              sector = GW2MapUtil.extend(sector, GW2W_SECTORDATA[sectorId]);
            }

            _this13._addFeature(
              "sector_label",
              sector.id,
              mapID,
              sector.name,
              {
                chat_link: sector.chat_link,
                level: sector.level,
                type: "sector",
                layertype: "label"
              },
              sector.coord
            );

            _this13._addFeature(
              "sector_poly",
              sector.id,
              mapID,
              sector.name,
              {
                type: "sector",
                layertype: "poly"
              },
              [sector.bounds],
              "Polygon"
            );
          });
          return this;
        }
        /**
         * @param {*} pois
         * @param {number} mapID
         * @returns {GW2GeoJSON}
         */
      },
      {
        key: "poi",
        value: function poi(pois, mapID) {
          var _this14 = this;

          Object.keys(pois).forEach(function(poiID) {
            var poi = pois[poiID];

            if (GW2W_POIDATA[poi.type] && GW2W_POIDATA[poi.type][poiID]) {
              poi = GW2MapUtil.extend(poi, GW2W_POIDATA[poi.type][poiID]);
            }

            _this14._addFeature(
              poi.type + "_icon",
              poi.id || null,
              mapID,
              null,
              {
                name: poi.name || poi.id || "",
                type: poi.type,
                chat_link: poi.chat_link || false,
                floor: poi.floor,
                // ???
                icon: poi.icon
              },
              poi.coord
            );
          });
          return this;
        }
        /**
         * @param {*} tasks
         * @param {number} mapID
         * @returns {GW2GeoJSON}
         */
      },
      {
        key: "task",
        value: function task(tasks, mapID) {
          var _this15 = this;

          Object.keys(tasks).forEach(function(taskID) {
            var task = tasks[taskID];

            _this15._addFeature(
              "task_icon",
              task.id,
              mapID,
              task.objective,
              {
                chat_link: task.chat_link,
                level: task.level,
                type: "task"
              },
              task.coord
            );

            _this15._addFeature(
              "task_poly",
              task.id,
              mapID,
              task.objective,
              {
                type: "task",
                layertype: "poly"
              },
              [task.bounds],
              "Polygon"
            );
          });
          return this;
        }
        /**
         * @param {*} heropoints
         * @param {number} mapID
         * @returns {GW2GeoJSON}
         */
      },
      {
        key: "heropoint",
        value: function heropoint(heropoints, mapID) {
          var _this16 = this;

          if (!heropoints.length) {
            return this;
          }

          heropoints.forEach(function(heropoint) {
            // https://github.com/arenanet/api-cdi/issues/329
            _this16._addFeature(
              "heropoint_icon",
              heropoint.id,
              mapID,
              null,
              {
                name: GW2W_HEROPOINT_DATA[heropoint.id] || "",
                type: "heropoint"
              },
              heropoint.coord
            );
          });
          return this;
        }
        /**
         * @param {*} masterypoints
         * @param {number} mapID
         * @returns {GW2GeoJSON}
         */
      },
      {
        key: "masteryPoint",
        value: function masteryPoint(masterypoints, mapID) {
          var _this17 = this;

          if (!masterypoints.length) {
            return this;
          }

          masterypoints.forEach(function(masterypoint) {
            _this17._addFeature(
              "masterypoint_icon",
              masterypoint.id,
              mapID,
              null,
              {
                name: GW2W_MASTERYPOINT_DATA[masterypoint.id] || "",
                region: masterypoint.region,
                type: "masterypoint"
              },
              masterypoint.coord
            );
          });
          return this;
        }
        /**
         * @param {*} adventures
         * @param {number} mapID
         * @returns {GW2GeoJSON}
         */
      },
      {
        key: "adventure",
        value: function adventure(adventures, mapID) {
          var _this18 = this;

          if (!adventures.length) {
            return this;
          }

          adventures.forEach(function(adventure) {
            _this18._addFeature(
              "adventure_icon",
              null,
              mapID,
              adventure.name,
              {
                description: adventure.description || "",
                type: "adventure"
              },
              adventure.coord
            );
          });
          return this;
        }
        /**
         * @param {*} jp_data
         * @param {number} mapID
         * @returns {GW2GeoJSON}
         */
      },
      {
        key: "jumpingPuzzle",
        value: function jumpingPuzzle(jp_data, mapID) {
          var _this19 = this;

          jp_data.forEach(function(jp) {
            _this19._addFeature(
              "jumpingpuzzle_icon",
              null,
              mapID,
              jp.name,
              {
                type: "jumpingpuzzle"
              },
              jp.coord
            );
          });
          return this;
        }
        /**
         * @param {*} line_data
         * @param {number} mapID
         * @returns {GW2GeoJSON}
         */
      },
      {
        key: "polylines",
        value: function polylines(line_data, mapID) {
          var _this20 = this;

          line_data.forEach(function(line) {
            _this20._addFeature(
              "polylines",
              null,
              mapID,
              line.name,
              {
                type: "polyline",
                layertype: "poly"
              },
              line.coords,
              "LineString"
            );
          });
        }
        /**
         * @param {string} layer
         * @param {string|number} id
         * @param {number} mapID
         * @param {string} name
         * @param {*} properties
         * @param {*} geometry
         * @param {string} [geometryType]
         * @returns {GW2GeoJSON}
         * @private
         */
      },
      {
        key: "_addFeature",
        value: function _addFeature(
          layer,
          id,
          mapID,
          name,
          properties,
          geometry,
          geometryType
        ) {
          this.featureCollections[layer]
            .addFeature(
              GW2MapUtil.extend(
                {
                  name: name,
                  mapID: mapID,
                  layertype: "icon"
                },
                properties
              )
            )
            .setID(id)
            .setGeometry(geometry, geometryType);
          return this;
        }
      }
    ]);

    return GW2GeoJSON;
  })();
/**
 * Class GW2ContinentRect
 */

var GW2ContinentRect =
  /*#__PURE__*/
  (function() {
    /**
     * GW2ContinentRect constructor
     *
     * @param continent_rect
     */
    function GW2ContinentRect(continent_rect) {
      _classCallCheck(this, GW2ContinentRect);

      //		console.log(continent_rect);
      this.rect = continent_rect;
    }
    /**
     * returns bounds for L.LatLngBounds()
     *
     * @returns {*[]}
     */

    _createClass(GW2ContinentRect, [
      {
        key: "getBounds",
        value: function getBounds() {
          return [
            [this.rect[0][0], this.rect[1][1]],
            [this.rect[1][0], this.rect[0][1]]
          ];
        }
        /**
         * returns the center of the rectangle
         *
         * @returns {*[]}
         */
      },
      {
        key: "getCenter",
        value: function getCenter() {
          return [
            (this.rect[0][0] + this.rect[1][0]) / 2,
            (this.rect[0][1] + this.rect[1][1]) / 2
          ];
        }
        /**
         * returns a polygon made of the rectangles corners
         *
         * @returns {*[]}
         */
      },
      {
        key: "getPoly",
        value: function getPoly() {
          return [
            [
              [this.rect[0][0], this.rect[0][1]],
              [this.rect[1][0], this.rect[0][1]],
              [this.rect[1][0], this.rect[1][1]],
              [this.rect[0][0], this.rect[1][1]]
            ]
          ];
        }
      }
    ]);

    return GW2ContinentRect;
  })();
/**
 * Class GeoJSONFeatureCollection
 */

var GeoJSONFeatureCollection =
  /*#__PURE__*/
  (function() {
    /**
     * GeoJSONFeatureCollection constructor
     */
    function GeoJSONFeatureCollection() {
      _classCallCheck(this, GeoJSONFeatureCollection);

      this.json = {
        type: "FeatureCollection",
        features: []
      };
    }
    /**
     * @returns {{type: string, features: Array}|*}
     */

    _createClass(GeoJSONFeatureCollection, [
      {
        key: "getJSON",
        value: function getJSON() {
          var _this21 = this;

          this.json.features.forEach(function(feature, i) {
            return (_this21.json.features[i] = feature.getJSON());
          });
          return this.json;
        }
        /**
         * @param type
         * @param properties
         * @returns {GeoJSONFeatureCollection}
         */
      },
      {
        key: "setCRS",
        value: function setCRS(type, properties) {
          this.json.crs = {
            type: type,
            properties: properties
          };
          return this;
        }
        /**
         * @param properties
         * @returns {GeoJSONFeature}
         */
      },
      {
        key: "addFeature",
        value: function addFeature(properties) {
          var feature = new GeoJSONFeature(properties);
          this.json.features.push(feature);
          return feature;
        }
      }
    ]);

    return GeoJSONFeatureCollection;
  })();
/**
 * Class GeoJSONFeature
 */

var GeoJSONFeature =
  /*#__PURE__*/
  (function() {
    /**
     * GeoJSONFeature constructor
     *
     * @param properties
     */
    function GeoJSONFeature(properties) {
      _classCallCheck(this, GeoJSONFeature);

      this.json = {
        type: "Feature",
        geometry: {
          type: "",
          coordinates: []
        },
        properties: properties || {}
      };
    }
    /**
     * @returns {{type: string, geometry: {type: string, coordinates: Array}, properties: (*|{})}|*}
     */

    _createClass(GeoJSONFeature, [
      {
        key: "getJSON",
        value: function getJSON() {
          return this.json;
        }
        /**
         * @param id
         * @returns {GeoJSONFeature}
         */
      },
      {
        key: "setID",
        value: function setID(id) {
          if (id) {
            this.json.id = id; // gmaps

            this.json.properties.id = id; // leaflet
          }

          return this;
        }
        /**
         * @param coords
         * @param type
         * @returns {GeoJSONFeature}
         */
      },
      {
        key: "setGeometry",
        value: function setGeometry(coords, type) {
          this.json.geometry.coordinates = coords;
          this.json.geometry.type = GW2MapUtil.in_array(type, [
            "Point",
            "MultiPoint",
            "LineString",
            "MultiLineString",
            "Polygon",
            "MultiPolygon",
            "GeometryCollection"
          ])
            ? type
            : "Point";
          return this;
        }
      }
    ]);

    return GeoJSONFeature;
  })();
/**
 * TODO: es, fr, zh language snippets
 */

var GW2MAP_I18N = {
  de: {
    wiki: "https://wiki-de.guildwars2.com/wiki/",
    attribution: "Kartendaten und -bilder",
    layers: {
      region_label: "Regionsnamen",
      region_poly: "Regionsgrenzen",
      map_label: "Kartennamen",
      map_poly: "Kartengrenzen",
      sector_label: "Sektornamen",
      sector_poly: "Sektorgrenzen",
      task_icon: "Aufgaben",
      task_poly: "Aufgabengrenzen",
      heropoint_icon: "Heldenherausforderungen",
      waypoint_icon: "Wegmarken",
      landmark_icon: "Sehenswürdigkeiten",
      vista_icon: "Vista",
      unlock_icon: "Dungeons & Raids",
      masterypoint_icon: "Beherrschungspunkte",
      adventure_icon: "Abenteuer",
      jumpingpuzzle_icon: "Sprungrätsel",
      polylines: "Polylinien"
    }
  },
  en: {
    wiki: "https://wiki.guildwars2.com/wiki/",
    attribution: "Map data and imagery",
    layers: {
      region_label: "Region Labels",
      region_poly: "Region Bounds",
      map_label: "Map Labels",
      map_poly: "Map Bounds",
      sector_label: "Sector Labels",
      sector_poly: "Sector Bounds",
      task_icon: "Tasks",
      task_poly: "Task Bounds",
      heropoint_icon: "Hero Challenges",
      waypoint_icon: "Waypoints",
      landmark_icon: "Landmarks",
      vista_icon: "Vistas",
      unlock_icon: "Dungeons & Raids",
      masterypoint_icon: "Mastery Insights",
      adventure_icon: "Adventures",
      jumpingpuzzle_icon: "Jumping Puzzles",
      polylines: "Polylines"
    }
  },
  es: {
    wiki: "https://wiki-es.guildwars2.com/wiki/",
    attribution: "attribution-es",
    layers: {
      region_label: "region_label",
      region_poly: "region_poly",
      map_label: "map_label",
      map_poly: "map_poly",
      sector_label: "sector_label",
      sector_poly: "sector_poly",
      task_icon: "task_icon",
      task_poly: "task_poly",
      heropoint_icon: "heropoint_icon",
      waypoint_icon: "waypoint_icon",
      landmark_icon: "landmark_icon",
      vista_icon: "vista_icon",
      unlock_icon: "unlock_icon",
      masterypoint_icon: "masterypoint_icon",
      adventure_icon: "adventure_icon",
      jumpingpuzzle_icon: "jumpingpuzzle_icon",
      polylines: "polylines"
    }
  },
  fr: {
    wiki: "https://wiki-fr.guildwars2.com/wiki/",
    attribution: "attribution-fr",
    layers: {
      region_label: "region_label",
      region_poly: "region_poly",
      map_label: "map_label",
      map_poly: "map_poly",
      sector_label: "sector_label",
      sector_poly: "sector_poly",
      task_icon: "task_icon",
      task_poly: "task_poly",
      heropoint_icon: "heropoint_icon",
      waypoint_icon: "waypoint_icon",
      landmark_icon: "landmark_icon",
      vista_icon: "vista_icon",
      unlock_icon: "unlock_icon",
      masterypoint_icon: "masterypoint_icon",
      adventure_icon: "adventure_icon",
      jumpingpuzzle_icon: "jumpingpuzzle_icon",
      polylines: "polylines"
    }
  },
  zh: {
    wiki: "",
    attribution: "attribution-zh",
    layers: {
      region_label: "region_label",
      region_poly: "region_poly",
      map_label: "map_label",
      map_poly: "map_poly",
      sector_label: "sector_label",
      sector_poly: "sector_poly",
      task_icon: "task_icon",
      task_poly: "task_poly",
      heropoint_icon: "heropoint_icon",
      waypoint_icon: "waypoint_icon",
      landmark_icon: "landmark_icon",
      vista_icon: "vista_icon",
      unlock_icon: "unlock_icon",
      masterypoint_icon: "masterypoint_icon",
      adventure_icon: "adventure_icon",
      jumpingpuzzle_icon: "jumpingpuzzle_icon",
      polylines: "polylines"
    }
  }
}; // invoke the maps

(function($options, $containers) {
  $containers =
    $containers || document.getElementsByClassName($options.containerClassName); // no map, no scripts.

  if (!$containers.length) {
    return;
  } // stylesheets to the <head>

  $options.stylesheets.forEach(function(stylesheet) {
    var node = document.createElement("link");
    node.rel = "stylesheet";
    node.href = stylesheet;
    document.getElementsByTagName("head")[0].appendChild(node);
  }); // scripts to <body>

  $options.scripts.forEach(function(script) {
    var s = document.getElementById($options.scriptContainerId);
    var node = document.createElement("script");
    node.src = script;
    s.parentNode.insertBefore(node, s);
  }); // ogogog

  window.addEventListener("load", function() {
    // check if leaflet is loaded (paranoid)
    if (typeof L === "undefined" || !L.version) {
      console.log("GW2Map error: leaflet not loaded!");
      return;
    } // override L.TileLayer.getTileUrl() and add a custom tile getter

    L.TileLayer.include({
      getTileUrl: function getTileUrl(coords) {
        var tileGetter = this.options.tileGetter;

        if (typeof tileGetter === "function") {
          return tileGetter(coords, this._getZoomForUrl());
        }

        return false;
      }
    }); // auto center popups and align div/html icons

    L.Popup.include({
      _getAnchor: function _getAnchor() {
        var anchor =
          this._source && this._source._getPopupAnchor
            ? this._source._getPopupAnchor()
            : [0, 0];

        if (typeof anchor === "string" && anchor.toLowerCase() === "auto") {
          var style = {
            left: 0,
            top: 0,
            width: 0
          }; // is the layer active?

          if (this._source._icon) {
            style = window.getComputedStyle(this._source._icon);
          }

          anchor = [
            GW2MapUtil.intval(style.left) +
              Math.round(GW2MapUtil.intval(style.width) / 2),
            GW2MapUtil.intval(style.top)
          ];
        }

        return L.point(anchor);
      }
    });
    L.Marker.include({
      _initIcon: function _initIcon() {
        var options = this.options;
        var classToAdd =
          "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
        var icon = options.icon.createIcon(this._icon);
        var addIcon = false; // if we're not reusing the icon, remove the old one and init new one

        if (icon !== this._icon) {
          if (this._icon) {
            this._removeIcon();
          }

          addIcon = true;

          if (options.title) {
            icon.title = options.title;
          }

          if (icon.tagName === "IMG") {
            icon.alt = options.alt || "";
          }
        }

        L.DomUtil.addClass(icon, classToAdd);

        if (options.keyboard) {
          icon.tabIndex = "0";
        }

        this._icon = icon;

        if (options.riseOnHover) {
          this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          });
        }

        if (options.opacity < 1) {
          this._updateOpacity();
        }

        if (addIcon) {
          this.getPane().appendChild(this._icon); // set icon styles after the node is appended to properly get the computed dimensions

          options.icon._setIconStyles(this._icon, "icon", addIcon);
        }

        this._initInteraction();
      }
    });
    L.Icon.include({
      _setIconStyles: function _setIconStyles(img, name, addIcon) {
        if (addIcon !== true) {
          return;
        }

        img.className = "leaflet-marker-icon " + (this.options.className || "");
        var sizeOption = this.options.iconSize;
        var anchor = this.options.iconAnchor;

        if (typeof sizeOption === "number") {
          sizeOption = [sizeOption, sizeOption];
        }

        var size = L.point(sizeOption);

        if (anchor && anchor.toString().toLowerCase() === "auto") {
          var origin = window
            .getComputedStyle(img)
            .perspectiveOrigin.split(" ");
          img.style.left = "-" + origin[0];
          img.style.top = "-" + origin[1];
        } else {
          anchor = L.point(anchor || (size && size.divideBy(2, true)));

          if (anchor) {
            img.style.marginLeft = -anchor.x + "px";
            img.style.marginTop = -anchor.y + "px";
          }
        }

        if (size) {
          img.style.width = size.x + "px";
          img.style.height = size.y + "px";
        }
      }
    }); // save the GW2Map objects for later usage

    var maps = [];
    var mapOptions = GW2MapUtil.extend(GW2MapOptions, $options);
    Object.keys($containers).forEach(function(id) {
      maps[id] = new GW2Map($containers[id], id, mapOptions).init();
    });
    console.log(maps);
  });
})(GW2MapInvokerOptions, GW2MapContainers);
/* </nowiki> */
