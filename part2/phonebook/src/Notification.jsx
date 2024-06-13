const Notification = ({ info }) => {
    if (!info.message) {
        return null;
    }

    return (
        <div className={info.status} id='notification'>
            {info.message}
        </div>
    );
};

export default Notification;
