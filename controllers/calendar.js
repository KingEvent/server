const calendarAxios = require('../config/calendarAPI');

class CalendarController {
    static addToCalendar(req, res, next) {
        let calendarId;
        console.log(req.body)
        const { token, venue, start, end } = req.body;

        calendarAxios({
            method: 'get',
            url: '/accounts/me/cal/calendars',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(({data}) => {
            console.log(data)
            calendarId = data.objects[0].id
            return calendarAxios({
                method: 'post',
                url: `/accounts/me/cal/calendars/${calendarId}/events`,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: {
                    name: venue,
                    start: start,
                    end: end
                }
            })
        })
        .then(({data}) => {
            res.status(200).json({
                eventId: data.id,
                calendarId: data.calendar_id
            })
        })
        .catch(next)
    }
}

module.exports = CalendarController;