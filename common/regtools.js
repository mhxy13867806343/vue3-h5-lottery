export const getRegExPassword=text=>/^(?=[a-zA-Z!@#$%^&*? ])(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(text)
