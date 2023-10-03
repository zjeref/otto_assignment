import addNotification from "react-push-notification"


export const checkAndSendNotification = async (value1, value2, symbol) => {
    return new Promise((resolve, reject) => {
        console.log("inside notificaiton check")
        if (value1 > value2 || value1 === value2) {
            console.log(value1, value2);
            addNotification({
                title: `${symbol} has crossed for your trigger Price`,
                theme: 'darkblue',
                native: true,
            });

            resolve('Condition met');
        } else {
            reject('Condition not met');
        }
    });
};
