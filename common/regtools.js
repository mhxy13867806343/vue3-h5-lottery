export const getRegExPassword=text=>/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(text)
export const getPhone=phone=>/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(phone)
export const getEmail=email=>/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)
