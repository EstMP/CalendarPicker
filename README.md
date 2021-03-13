# Clone
```
git clone https://github.com/EstMP/CalendarPickerJs.git
```
# Install
```
npm install
```
# Build
```
npm run build
```
# HTML
```html
<div id="calendar"></div>
```
# Script
```js
calendar.init({
    type: 'table',
    target: 'calendar', // HTML id container
    date: new Date(), // Date.now(); new Date(); '2025-1-1', undefined,
    disable: {
        from: '2021-03-02',
        previous: true,
        dates: [
            '2021-01-25',
            '2021-01-26',
            '2021-01-27'
        ],
        weekdays: [6, 0]
    },
    clickDayEvent: function (date) { console.log(date) }
    changeMonthEvent: function (month, options, refresh) { }
});
```
## Options
### `type`
Calendar type render
### `target`
HTML element id 
### `date`
Date displayed when starting the calendar
### `autoSelect`
Auto select day deffined in `date` or the first day available when `availability` is true
### `clickDayEvent`
Event when click day
### `changeMonthEvent`
Event when month changed
### `availability`
Set HTML clases in table cells with percentage availability. Value is '100' by default if `enabled` is true

## Options - Disable
### `from`
disable days from date
### `previous`
show/hide previous days
### `dates`
disable dates
### `weekdays`
disable weekdays
