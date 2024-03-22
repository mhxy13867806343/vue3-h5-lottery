export const getRegExPassword=text=>/^(?=[a-zA-Z!@#$%^&*? ])(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(text)
export const getPhone=phone=>/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(phone)
