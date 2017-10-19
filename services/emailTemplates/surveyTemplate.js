// TODO: move to color / styles file
const btnClass = color => ({
  'display': 'inline-block',
  'background-color': '#f4f4f4',
  'border-radius': '1rem',
  'color': `${color}`,
  'width': '5rem',
  'height': '1rem',
  'text-decoration': 'none',
  'border': '1px solid #666',
  'text-align': 'center',
  'padding': '0.25rem',
  'margin': '1rem'
})

const blue = '#006792'
const red = '#920000'

// TODO: move to util file
const styleToInline = styleObj => {
  let styleStr = ''
  for (let prop in styleObj) {
    styleStr += `${prop}: ${styleObj[prop]};`
  }
  return styleStr
}

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>We would like your input</h3>
          <p>Please answer the following question:</p>
          <p>${survey.body}</p>
          <div>
            <a href="http://localhost:3000"
            style="
              ${styleToInline(btnClass(blue))}
            ">
            Yes</a>
          </div>
          <div>
            <a href="http://localhost:3000"
            style="
              ${styleToInline(btnClass(red))}
            ">
            No</a>
          </div>
        </div>
      </body>
    </html>
  `
}
