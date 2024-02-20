import network from "./network.js";
export const getMyDepartUserList = function(param) {
	return network({
		url: "/sysDepart/getMyDepartUserList",
		param: param,
		auth: true
	})
}
