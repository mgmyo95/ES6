const _brand = new WeakMap();
const _network = new WeakMap();
const _color = new WeakMap();

export class Phone {
	constructor(brand, network) {
		// => public properties 
		// this.brand = brand;

		// => private properties 
		_brand.set(this, brand);
		_network.set(this, network);


		_color.set(this, () => {
			return (this);
		})
	}

	// => public method 
	getbrandname() {
		return _brand.get(this);
	}

	getphonenetwork() {
		return _network.get(this);
	}

	getcolorcode() {
		return _color.get(this)();
	}
}



