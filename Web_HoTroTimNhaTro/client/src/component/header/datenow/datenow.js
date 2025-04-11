import React, { useState, useEffect } from 'react';
import './datenow.css';

const Datenow = () => {
    const [datenow, setDatenow] = useState("");

    useEffect(() => {
        const today = new Date();
        const days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        
        const day = days[today.getDay()];
        const utcOffset = -today.getTimezoneOffset() / 60; // Lấy UTC+X chuẩn xác
        
        const date = `${day}, ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()} (UTC+${utcOffset})`;
        setDatenow(date);
    }, []);

    return (
        <div className="date__now">
            <h5 id="date_now-h5">{datenow}</h5>
        </div>
    );
};

export default Datenow;
