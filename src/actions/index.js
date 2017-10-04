// export const actions = {
//     addAttendee: (name,color) => {
//         return {
//             type: 'ADD_ATTENDEE',
//             id: Math.floor(Math.random()*10000),
//             name,
//             color
//         }
//     },
//     removeAttendee: (index) => {
//         return {
//             type: 'REMOVE_ATTENDEE',
//             index
//         }
//     }
// };

export const addAttendee = (name, color) => {
    return {
        type: 'ADD_ATTENDEE',
        id: Math.floor(Math.random()*10000),
        name,
        color
    }
}

export const removeAttendee = (index) => {
    return {
        type: 'REMOVE_ATTENDEE',
        index
    }
}