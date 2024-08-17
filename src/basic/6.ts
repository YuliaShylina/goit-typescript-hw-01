interface Address {
  city: string;
  country: string;
}

interface User1 {
  name: string;
  age: number;
  email: string;
  address?: Address;
}

const mango: User1 = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: User1 = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
