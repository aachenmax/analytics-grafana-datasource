"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var ATTRIBUTE, AD_ATTRIBUTE, ORDERBY_ATTRIBUTES, getAttributeValues, ATTRIBUTE_LIST, AD_ATTRIBUTE_LIST, ORDERBY_ATTRIBUTES_LIST, ORDERBY_AD_ATTRIBUTES_LIST, METRICS_ATTRIBUTE_LIST, getAsOptionsList, isNullFilter, convertFilterValueToProperType;

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [],
    execute: function () {
      _export("ATTRIBUTE", ATTRIBUTE = {
        ID: 'ID',
        LICENSE_KEY: 'LICENSE_KEY',
        AD: 'AD',
        ANALYTICS_VERSION: 'ANALYTICS_VERSION',
        AUDIO_BITRATE: 'AUDIO_BITRATE',
        AUTOPLAY: 'AUTOPLAY',
        BROWSER: 'BROWSER',
        BROWSER_IS_BOT: 'BROWSER_IS_BOT',
        BROWSER_VERSION_MAJOR: 'BROWSER_VERSION_MAJOR',
        BROWSER_VERSION_MINOR: 'BROWSER_VERSION_MINOR',
        BUFFERED: 'BUFFERED',
        CDN_PROVIDER: 'CDN_PROVIDER',
        CITY: 'CITY',
        CLIENT_TIME: 'CLIENT_TIME',
        COUNTRY: 'COUNTRY',
        CUSTOM_DATA_1: 'CUSTOM_DATA_1',
        CUSTOM_DATA_2: 'CUSTOM_DATA_2',
        CUSTOM_DATA_3: 'CUSTOM_DATA_3',
        CUSTOM_DATA_4: 'CUSTOM_DATA_4',
        CUSTOM_DATA_5: 'CUSTOM_DATA_5',
        CUSTOM_DATA_6: 'CUSTOM_DATA_6',
        CUSTOM_DATA_7: 'CUSTOM_DATA_7',
        CUSTOM_USER_ID: 'CUSTOM_USER_ID',
        DAY: 'DAY',
        DAYPART: 'DAYPART',
        DEVICE_CLASS: 'DEVICE_CLASS',
        DEVICE_TYPE: 'DEVICE_TYPE',
        DOMAIN: 'DOMAIN',
        DOWNLOAD_SPEED: 'DOWNLOAD_SPEED',
        DROPPED_FRAMES: 'DROPPED_FRAMES',
        DURATION: 'DURATION',
        ERROR_CODE: 'ERROR_CODE',
        ERROR_DATA: 'ERROR_DATA',
        ERROR_MESSAGE: 'ERROR_MESSAGE',
        ERROR_PERCENTAGE: 'ERROR_PERCENTAGE',
        ERROR_RATE: 'ERROR_RATE',
        EXPERIMENT_NAME: 'EXPERIMENT_NAME',
        HOUR: 'HOUR',
        IMPRESSION_ID: 'IMPRESSION_ID',
        IP_ADDRESS: 'IP_ADDRESS',
        IS_CASTING: 'IS_CASTING',
        IS_LIVE: 'IS_LIVE',
        IS_MUTED: 'IS_MUTED',
        LANGUAGE: 'LANGUAGE',
        M3U8_URL: 'M3U8_URL',
        MINUTE: 'MINUTE',
        MONTH: 'MONTH',
        MPD_URL: 'MPD_URL',
        OPERATINGSYSTEM: 'OPERATINGSYSTEM',
        OPERATINGSYSTEM_VERSION_MAJOR: 'OPERATINGSYSTEM_VERSION_MAJOR',
        OPERATINGSYSTEM_VERSION_MINOR: 'OPERATINGSYSTEM_VERSION_MINOR',
        ORGANIZATION: 'ORGANIZATION',
        PAGE_LOAD_TIME: 'PAGE_LOAD_TIME',
        PAGE_LOAD_TYPE: 'PAGE_LOAD_TYPE',
        PATH: 'PATH',
        PAUSED: 'PAUSED',
        PLAYED: 'PLAYED',
        PLAYER: 'PLAYER',
        PLAYER_STARTUPTIME: 'PLAYER_STARTUPTIME',
        PLAYER_TECH: 'PLAYER_TECH',
        PLAYER_VERSION: 'PLAYER_VERSION',
        PROG_URL: 'PROG_URL',
        REGION: 'REGION',
        REBUFFER_PERCENTAGE: 'REBUFFER_PERCENTAGE',
        SCALE_FACTOR: 'SCALE_FACTOR',
        SCREEN_HEIGHT: 'SCREEN_HEIGHT',
        SCREEN_WIDTH: 'SCREEN_WIDTH',
        SEEKED: 'SEEKED',
        SEQUENCE_NUMBER: 'SEQUENCE_NUMBER',
        SIZE: 'SIZE',
        STARTUPTIME: 'STARTUPTIME',
        STATE: 'STATE',
        STREAM_FORMAT: 'STREAM_FORMAT',
        TIME: 'TIME',
        USER_ID: 'USER_ID',
        VIDEO_BITRATE: 'VIDEO_BITRATE',
        VIDEO_DURATION: 'VIDEO_DURATION',
        VIDEO_ID: 'VIDEO_ID',
        VIDEO_TITLE: 'VIDEO_TITLE',
        VIDEO_PLAYBACK_HEIGHT: 'VIDEO_PLAYBACK_HEIGHT',
        VIDEO_PLAYBACK_WIDTH: 'VIDEO_PLAYBACK_WIDTH',
        VIDEO_STARTUPTIME: 'VIDEO_STARTUPTIME',
        VIDEO_WINDOW_HEIGHT: 'VIDEO_WINDOW_HEIGHT',
        VIDEO_WINDOW_WIDTH: 'VIDEO_WINDOW_WIDTH',
        VIDEOTIME_END: 'VIDEOTIME_END',
        VIDEOTIME_START: 'VIDEOTIME_START',
        VIDEOSTART_FAILED: 'VIDEOSTART_FAILED',
        VIDEOSTART_FAILED_REASON: 'VIDEOSTART_FAILED_REASON',
        VIEWTIME: 'VIEWTIME',
        YEAR: 'YEAR',
        DRM_TYPE: 'DRM_TYPE',
        DRM_LOAD_TIME: 'DRM_LOAD_TIME',
        ISP: 'ISP',
        ASN: 'ASN',
        MAX_CONCURRENTVIEWERS: 'MAX_CONCURRENTVIEWERS',
        AVG_CONCURRENTVIEWERS: 'AVG_CONCURRENTVIEWERS'
      });

      _export("AD_ATTRIBUTE", AD_ATTRIBUTE = {
        AD_IMPRESSION_ID: 'AD_IMPRESSION_ID',
        AD_DURATION: 'AD_DURATION',
        AD_FALLBACK_INDEX: 'AD_FALLBACK_INDEX',
        AD_ID: 'AD_ID',
        AD_ID_PLAYER: 'AD_ID_PLAYER',
        AD_IS_PERSISTENT: 'AD_IS_PERSISTENT',
        AD_MODULE: 'AD_MODULE',
        AD_MODULE_VERSION: 'AD_MODULE_VERSION',
        AD_OFFSET: 'AD_OFFSET',
        AD_PLAYBACK_HEIGHT: 'AD_PLAYBACK_HEIGHT',
        AD_PLAYBACK_WIDTH: 'AD_PLAYBACK_WIDTH',
        AD_POD_POSITION: 'AD_POD_POSITION',
        AD_POSITION: 'AD_POSITION',
        AD_PRELOAD_OFFSET: 'AD_PRELOAD_OFFSET',
        AD_REPLACE_CONTENT_DURATION: 'AD_REPLACE_CONTENT_DURATION',
        AD_SCHEDULE_TIME: 'AD_SCHEDULE_TIME',
        AD_SKIP_AFTER: 'AD_SKIP_AFTER',
        AD_SKIPPABLE: 'AD_SKIPPABLE',
        AD_STARTUP_TIME: 'AD_STARTUP_TIME',
        AD_SYSTEM: 'AD_SYSTEM',
        AD_TAG_PATH: 'AD_TAG_PATH',
        AD_TAG_SERVER: 'AD_TAG_SERVER',
        AD_TAG_TYPE: 'AD_TAG_TYPE',
        AD_TITLE: 'AD_TITLE',
        AD_WRAPPER_ADS_COUNT: 'AD_WRAPPER_ADS_COUNT',
        ADVERTISER_NAME: 'ADVERTISER_NAME',
        ANALYTICS_VERSION: 'ANALYTICS_VERSION',
        API_FRAMEWORK: 'API_FRAMEWORK',
        ASN: 'ASN',
        AUDIO_BITRATE: 'AUDIO_BITRATE',
        AUTOPLAY: 'AUTOPLAY',
        BROWSER: 'BROWSER',
        BROWSER_VERSION_MAJOR: 'BROWSER_VERSION_MAJOR',
        BROWSER_VERSION_MINOR: 'BROWSER_VERSION_MINOR',
        CDN_PROVIDER: 'CDN_PROVIDER',
        CITY: 'CITY',
        CLICK_PERCENTAGE: 'CLICK_PERCENTAGE',
        CLICK_POSITION: 'CLICK_POSITION',
        CLICKED: 'CLICKED',
        CLIENT_TIME: 'CLIENT_TIME',
        CLOSE_PERCENTAGE: 'CLOSE_PERCENTAGE',
        CLOSE_POSITION: 'CLOSE_POSITION',
        CLOSED: 'CLOSED',
        COMPLETED: 'COMPLETED',
        COUNTRY: 'COUNTRY',
        CREATIVE_AD_ID: 'CREATIVE_AD_ID',
        CREATIVE_ID: 'CREATIVE_ID',
        CUSTOM_DATA_1: 'CUSTOM_DATA_1',
        CUSTOM_DATA_2: 'CUSTOM_DATA_2',
        CUSTOM_DATA_3: 'CUSTOM_DATA_3',
        CUSTOM_DATA_4: 'CUSTOM_DATA_4',
        CUSTOM_DATA_5: 'CUSTOM_DATA_5',
        CUSTOM_USER_ID: 'CUSTOM_USER_ID',
        DEAL_ID: 'DEAL_ID',
        DEVICE_CLASS: 'DEVICE_CLASS',
        DEVICE_TYPE: 'DEVICE_TYPE',
        DOMAIN: 'DOMAIN',
        ERROR_CODE: 'ERROR_CODE',
        ERROR_DATA: 'ERROR_DATA',
        ERROR_MESSAGE: 'ERROR_MESSAGE',
        ERROR_PERCENTAGE: 'ERROR_PERCENTAGE',
        ERROR_POSITION: 'ERROR_POSITION',
        EXIT_POSITION: 'EXIT_POSITION',
        EXPERIMENT_NAME: 'EXPERIMENT_NAME',
        IP_ADDRESS: 'IP_ADDRESS',
        IS_LINEAR: 'IS_LINEAR',
        ISP: 'ISP',
        LANGUAGE: 'LANGUAGE',
        LICENSE_KEY: 'LICENSE_KEY',
        MANIFEST_DOWNLOAD_TIME: 'MANIFEST_DOWNLOAD_TIME',
        MEDIA_SERVER: 'MEDIA_SERVER',
        MIDPOINT: 'MIDPOINT',
        MIN_SUGGESTED_DURATION: 'MIN_SUGGESTED_DURATION',
        MINUTE: 'MINUTE',
        MONTH: 'MONTH',
        OPERATINGSYSTEM: 'OPERATINGSYSTEM',
        OPERATINGSYSTEM_VERSION_MAJOR: 'OPERATINGSYSTEM_VERSION_MAJOR',
        OPERATINGSYSTEM_VERSION_MINOR: 'OPERATINGSYSTEM_VERSION_MINOR',
        PAGE_LOAD_TIME: 'PAGE_LOAD_TIME',
        PAGE_LOAD_TYPE: 'PAGE_LOAD_TYPE',
        PATH: 'PATH',
        PERCENTAGE_IN_VIEWPORT: 'PERCENTAGE_IN_VIEWPORT',
        PLATFORM: 'PLATFORM',
        PLAY_PERCENTAGE: 'PLAY_PERCENTAGE',
        PLAYER: 'PLAYER',
        PLAYER_KEY: 'PLAYER_KEY',
        PLAYER_STARTUPTIME: 'PLAYER_STARTUPTIME',
        PLAYER_TECH: 'PLAYER_TECH',
        PLAYER_VERSION: 'PLAYER_VERSION',
        QUARTILE_1: 'QUARTILE_1',
        QUARTILE_3: 'QUARTILE_3',
        REGION: 'REGION',
        SCREEN_HEIGHT: 'SCREEN_HEIGHT',
        SCREEN_WIDTH: 'SCREEN_WIDTH',
        SIZE: 'SIZE',
        SKIP_PERCENTAGE: 'SKIP_PERCENTAGE',
        SKIP_POSITION: 'SKIP_POSITION',
        SKIPPED: 'SKIPPED',
        STARTED: 'STARTED',
        STREAM_FORMAT: 'STREAM_FORMAT',
        SURVEY_URL: 'SURVEY_URL',
        TIME_FROM_CONTENT: 'TIME_FROM_CONTENT',
        TIME_HOVERED: 'TIME_HOVERED',
        TIME_IN_VIEWPORT: 'TIME_IN_VIEWPORT',
        TIME_PLAYED: 'TIME_PLAYED',
        TIME_TO_CONTENT: 'TIME_TO_CONTENT',
        TIME_UNTIL_HOVER: 'TIME_UNTIL_HOVER',
        UNIVERSAL_AD_ID_REGISTRY: 'UNIVERSAL_AD_ID_REGISTRY',
        UNIVERSAL_AD_ID_VALUE: 'UNIVERSAL_AD_ID_VALUE',
        VIDEO_BITRATE: 'VIDEO_BITRATE',
        VIDEO_ID: 'VIDEO_ID',
        VIDEO_IMPRESSION_ID: 'VIDEO_IMPRESSION_ID',
        VIDEO_TITLE: 'VIDEO_TITLE',
        VIDEO_WINDOW_HEIGHT: 'VIDEO_WINDOW_HEIGHT',
        VIDEO_WINDOW_WIDTH: 'VIDEO_WINDOW_WIDTH',
        YEAR: 'YEAR'
      });

      _export("ORDERBY_ATTRIBUTES", ORDERBY_ATTRIBUTES = _objectSpread({}, ATTRIBUTE, {
        FUNCTION: 'FUNCTION',
        INTERVAL: 'INTERVAL'
      }));

      _export("getAttributeValues", getAttributeValues = function getAttributeValues(list) {
        return Object.keys(list).map(function (key) {
          return list[key];
        });
      });

      _export("ATTRIBUTE_LIST", ATTRIBUTE_LIST = getAttributeValues(ATTRIBUTE));

      _export("AD_ATTRIBUTE_LIST", AD_ATTRIBUTE_LIST = getAttributeValues(AD_ATTRIBUTE));

      _export("ORDERBY_ATTRIBUTES_LIST", ORDERBY_ATTRIBUTES_LIST = getAttributeValues(_objectSpread({}, ATTRIBUTE, {
        FUNCTION: 'FUNCTION',
        INTERVAL: 'INTERVAL'
      })));

      _export("ORDERBY_AD_ATTRIBUTES_LIST", ORDERBY_AD_ATTRIBUTES_LIST = getAttributeValues(_objectSpread({}, AD_ATTRIBUTE, {
        FUNCTION: 'FUNCTION',
        INTERVAL: 'INTERVAL'
      })));

      _export("METRICS_ATTRIBUTE_LIST", METRICS_ATTRIBUTE_LIST = [ATTRIBUTE.MAX_CONCURRENTVIEWERS, ATTRIBUTE.AVG_CONCURRENTVIEWERS]);

      _export("getAsOptionsList", getAsOptionsList = function getAsOptionsList(list) {
        return _.map(list, function (e) {
          return {
            value: e,
            text: e
          };
        });
      });

      _export("isNullFilter", isNullFilter = function isNullFilter(filter) {
        switch (filter.name) {
          case ATTRIBUTE.CDN_PROVIDER:
          case ATTRIBUTE.CUSTOM_DATA_1:
          case ATTRIBUTE.CUSTOM_DATA_2:
          case ATTRIBUTE.CUSTOM_DATA_3:
          case ATTRIBUTE.CUSTOM_DATA_4:
          case ATTRIBUTE.CUSTOM_DATA_5:
          case ATTRIBUTE.CUSTOM_USER_ID:
          case ATTRIBUTE.EXPERIMENT_NAME:
          case ATTRIBUTE.ISP:
          case ATTRIBUTE.PLAYER_TECH:
          case ATTRIBUTE.PLAYER_VERSION:
          case ATTRIBUTE.VIDEO_ID:
            return true;

          default:
            return false;
        }
      });

      _export("convertFilterValueToProperType", convertFilterValueToProperType = function convertFilterValueToProperType(filter) {
        var rawValue = filter.value;

        if ((!rawValue || rawValue === '') && isNullFilter(filter)) {
          return null;
        }

        if (filter.operator != null && filter.operator.toLowerCase() === 'in') {
          try {
            var value = JSON.parse(rawValue);

            if (!Array.isArray(value)) {
              throw Error();
            }

            return value;
          } catch (e) {
            throw Error('Couldn\'t parse IN filter, please provide data in JSON array form (e.g.: ["Firefox", "Chrome"]).');
          }
        }

        switch (filter.name) {
          case ATTRIBUTE.VIDEOSTART_FAILED:
          case ATTRIBUTE.IS_CASTING:
          case ATTRIBUTE.IS_LIVE:
          case ATTRIBUTE.BROWSER_IS_BOT:
          case ATTRIBUTE.IS_MUTED:
            return rawValue === 'true';

          case AD_ATTRIBUTE.IS_LINEAR:
            return rawValue === 'true';

          case ATTRIBUTE.AUDIO_BITRATE:
          case ATTRIBUTE.BUFFERED:
          case ATTRIBUTE.CLIENT_TIME:
          case ATTRIBUTE.DOWNLOAD_SPEED:
          case ATTRIBUTE.DRM_LOAD_TIME:
          case ATTRIBUTE.DROPPED_FRAMES:
          case ATTRIBUTE.DOWNLOAD_SPEED:
          case ATTRIBUTE.DURATION:
          case ATTRIBUTE.ERROR_CODE:
          case ATTRIBUTE.PAGE_LOAD_TIME:
          case ATTRIBUTE.PAGE_LOAD_TYPE:
          case ATTRIBUTE.PAUSED:
          case ATTRIBUTE.PLAYED:
          case ATTRIBUTE.PLAYER_STARTUPTIME:
          case ATTRIBUTE.SCREEN_HEIGHT:
          case ATTRIBUTE.SCREEN_WIDTH:
          case ATTRIBUTE.SEEKED:
          case ATTRIBUTE.SEQUENCE_NUMBER:
          case ATTRIBUTE.STARTUPTIME:
          case ATTRIBUTE.VIDEO_BITRATE:
          case ATTRIBUTE.VIDEO_DURATION:
          case ATTRIBUTE.VIDEO_PLAYBACK_HEIGHT:
          case ATTRIBUTE.VIDEO_PLAYBACK_WIDTH:
          case ATTRIBUTE.VIDEO_STARTUPTIME:
          case ATTRIBUTE.VIDEO_WINDOW_HEIGHT:
          case ATTRIBUTE.VIDEO_WINDOW_WIDTH:
          case ATTRIBUTE.VIDEOTIME:
          case ATTRIBUTE.VIDEOTIME_END:
          case ATTRIBUTE.VIDEOTIME_START:
          case ATTRIBUTE.VIEWTIME:
            return parseInt(rawValue, 10);

          case AD_ATTRIBUTE.AD_STARTUP_TIME:
          case AD_ATTRIBUTE.AD_WRAPPER_ADS_COUNT:
          case AD_ATTRIBUTE.AUDIO_BITRATE:
          case AD_ATTRIBUTE.CLICK_POSITION:
          case AD_ATTRIBUTE.CLOSE_POSITION:
          case AD_ATTRIBUTE.ERROR_CODE:
          case AD_ATTRIBUTE.ERROR_POSITION:
          case AD_ATTRIBUTE.EXIT_POSITION:
          case AD_ATTRIBUTE.MANIFEST_DOWNLOAD_TIME:
          case AD_ATTRIBUTE.MIN_SUGGESTED_DURATION:
          case AD_ATTRIBUTE.PAGE_LOAD_TIME:
          case AD_ATTRIBUTE.PLAYER_STARTUPTIME:
          case AD_ATTRIBUTE.SCREEN_HEIGHT:
          case AD_ATTRIBUTE.SCREEN_WIDTH:
          case AD_ATTRIBUTE.SKIP_POSITION:
          case AD_ATTRIBUTE.TIME_FROM_CONTENT:
          case AD_ATTRIBUTE.TIME_HOVERED:
          case AD_ATTRIBUTE.TIME_IN_VIEWPORT:
          case AD_ATTRIBUTE.TIME_PLAYED:
          case AD_ATTRIBUTE.TIME_TO_CONTENT:
          case AD_ATTRIBUTE.TIME_UNTIL_HOVER:
          case AD_ATTRIBUTE.VIDEO_BITRATE:
          case AD_ATTRIBUTE.VIDEO_WINDOW_HEIGHT:
          case AD_ATTRIBUTE.VIDEO_WINDOW_WIDTH:
            return parseInt(rawValue, 10);

          case ATTRIBUTE.ERROR_RATE:
          case ATTRIBUTE.ERROR_PERCENTAGE:
          case ATTRIBUTE.REBUFFER_PERCENTAGE:
            return parseFloat(rawValue);

          case AD_ATTRIBUTE.CLICK_PERCENTAGE:
          case AD_ATTRIBUTE.CLOSE_PERCENTAGE:
          case AD_ATTRIBUTE.ERROR_PERCENTAGE:
          case AD_ATTRIBUTE.PERCENTAGE_IN_VIEWPORT:
          case AD_ATTRIBUTE.SKIP_PERCENTAGE:
            return parseFloat(rawValue);

          default:
            return rawValue;
        }
      });
    }
  };
});
//# sourceMappingURL=queryAttributes.js.map
