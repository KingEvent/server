const calendarAxios = require('../config/calendarAPI');

class CalendarController {
    static addToCalendar(req, res, next) {
        let calendarId;
        const { token } = req.body;

        calendarAxios({
            method: 'get',
            url: '/accounts/me/cal/calendars',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(({data}) => {
            calendarId = data.objects[0].id
            return calendarAxios({
                method: 'post',
                url: `/accounts/me/cal/calendars/${calendarId}/events`,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                data: {
                    name: 'Test',
                    start: "2019-12-12T12:30:00Z",
                    end: "2019-12-12T13:30:00Z",
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