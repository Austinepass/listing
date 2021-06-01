import { AsyncStorage } from "react-native";
import moment from "moment";

const prefix = "cache";

const store = async (key, value) => {
	try {
		const item = {
			value,
			timestamp: Date.now(),
		};
		await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
	} catch (error) {
		console.log(error);
	}
};
const get = async (key) => {

	const isExpired = (item) => {
		const now = moment(Date.now());
		const storedTime = moment(item.timestamp);
		return now.diff(storedTime, "minutes") > 5;
	};
	try {
		const value = await AsyncStorage.getItem(prefix + key);
		const item = JSON.parse(value);

		if (!item) return null; //item does not exist

		if (isExpired(item)) {
			await AsyncStorage.removeItem(prefix + key);
			return null;
		}
		return item.value;
	} catch (error) {
		console.log(error);
	}
};
export default {
	store, 
    get
};
