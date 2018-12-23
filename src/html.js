import React from 'react'
import PropTypes from 'prop-types'

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
        <script src="//simplybook.me/v2/widget/widget.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                var widget = new SimplybookWidget({
                  "widget_type":"button",
                  "url":"https:\/\/doulalizzy.simplybook.me",
                  "theme":"belle",
                  "theme_settings":{
                    "timeline_show_end_time":"0",
                    "timeline_modern_display":"as_slots",
                    "sb_base_color":"#ff6969",
                    "body_bg_color":"#ffffff",
                    "dark_font_color":"#494949",
                    "light_font_color":"#ffffff",
                    "hide_img_mode":"0",
                    "show_sidebar":"1",
                    "sb_busy":"#dad2ce",
                    "sb_available":"#d3e0f1"
                  },
                  "timeline":"flexible",
                  "datepicker":"top_calendar",
                  "is_rtl":false,
                  "app_config":{
                    "predefined":[]
                  },
                  "button_title":"Забронировать",
                  "button_background_color":"#ff6969",
                  "button_text_color":"#ffffff",
                  "button_position":"right",
                  "button_position_offset":"55%"
                });
                `,
          }}
        />
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
