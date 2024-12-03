import "./notification.css"

/* eslint-disable react/prop-types */
export default function Notification( {text} ) {
    return (
        <div>
            <aside>
                <p>{text}</p>
            </aside>
        </div>
    )
}