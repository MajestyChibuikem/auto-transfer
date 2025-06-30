(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    2561: function (t, e, o) {
      Promise.resolve().then(o.t.bind(o, 5227, 23));
      Promise.resolve().then(o.t.bind(o, 1553, 23));
      Promise.resolve().then(o.t.bind(o, 2778, 23));
      Promise.resolve().then(o.bind(o, 3129));
    },
    
    3129: function (t, e, o) {
      "use strict";
      o.d(e, {
        Toaster: function () {
          return ToasterComponent;
        },
      });

      var React = o(7437);
      var ReactHooks = o(2265);
      
      // Create theme context
      var ThemeContext = ReactHooks.createContext(void 0);
      
      // Default theme configuration
      var defaultThemeConfig = {
        setTheme: (theme) => {},
        themes: [],
      };

      // Theme hook
      var useTheme = () => {
        var context = ReactHooks.useContext(ThemeContext);
        return context != null ? context : defaultThemeConfig;
      };

      var toastLibrary = o(4438);

      // Toaster component for notifications
      let ToasterComponent = (props) => {
        let { ...restProps } = props;
        let { theme: currentTheme = "system" } = useTheme();

        return React.jsx(toastLibrary.x7, {
          theme: currentTheme,
          className: "toaster group",
          toastOptions: {
            classNames: {
              toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
              description: "group-[.toast]:text-muted-foreground",
              actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
              cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
            },
          },
          ...restProps,
        });
      };
    },

    2778: function () {
      // Empty function - placeholder
    },

    1553: function (t) {
      // Geist Mono font configuration
      t.exports = {
        style: {
          fontFamily: "'__geistMono_c3aa02', '__geistMono_Fallback_c3aa02'",
        },
        className: "__className_c3aa02",
        variable: "__variable_c3aa02",
      };
    },

    5227: function (t) {
      // Geist Sans font configuration
      t.exports = {
        style: {
          fontFamily: "'__geistSans_1e4310', '__geistSans_Fallback_1e4310'",
        },
        className: "__className_1e4310",
        variable: "__variable_1e4310",
      };
    },
  },
  
  function (t) {
    t.O(0, [83, 438, 971, 117, 744], function () {
      return t((t.s = 2561));
    });
    (_N_E = t.O());
  },
]);