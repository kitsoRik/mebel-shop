import { useEffect, useState } from "react";
import adminApi from "../../providers/api";

interface IManufactor {
	id: number;
	name: string;
}

interface IUseManufactures {
	loading: boolean;
	manifactures: IManufactor[];
}

const useManufactures = (name: string) => {
	const [manufactures, setManufactures] = useState<IManufactor[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		loadManufactores();
	}, [name]);

	const loadManufactores = async () => {
		setLoading(true);

		const { manufactures } = await adminApi.manufactures.getMinManufactures(
			name,
			20
		);
		setManufactures(manufactures);

		setLoading(false);
	};

	return { manufactures, loading };
};

export default useManufactures;
